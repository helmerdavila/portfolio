import locales from './config/i18n';
import { findKey, removeTrailingSlash, translatedPostUrl } from './src/utils/gatsby-node-helpers';
import path from 'path';
import type { Actions, CreatePagesArgs, GatsbyNode } from 'gatsby';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { localizeUrl } from './src/components/LocalizedLink';

const allLanguages = Object.keys(locales);

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage, deletePage, createRedirect } = actions;

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  if (
    page.path.startsWith('/blog/en') ||
    page.path.startsWith('/blog/es') ||
    page.path.startsWith('/blog/fr') ||
    page.path.startsWith('/blog/pt')
  ) {
    return;
  }

  deletePage(page);

  // Grab the keys ('en' & 'de') of locales and map over them
  allLanguages.map((lang) => {
    // Use the values defined in "locales" to construct the path
    const newLocalizedPath = removeTrailingSlash(
      locales[lang].default ? page.path : `${page.path}${locales[lang].path}`,
    );
    const oldLocalizedPath = removeTrailingSlash(
      locales[lang].default ? page.path : `${locales[lang].path}${page.path}`,
    );
    console.log(oldLocalizedPath, newLocalizedPath);

    if (!locales[lang].default) {
      createRedirect({
        fromPath: oldLocalizedPath,
        toPath: newLocalizedPath,
      });
    }

    return createPage({
      // Pass on everything from the original page
      ...page,
      // Since page.path returns with a trailing slash (e.g. "/de/")
      // We want to remove that
      path: newLocalizedPath,
      // Pass in the locale as context to every page
      // This context also gets passed to the src/components/layout file
      // This should ensure that the locale is available on every page
      context: {
        ...page.context,
        locale: lang,
        // dateFormat: locales[lang].dateFormat,
      },
    });
  });
};

// As you don't want to manually add the correct language to the frontmatter of each file
// a new node is created automatically with the filename
// It's necessary to do that -- otherwise you couldn't filter by language
export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Check for "Mdx" type so that other files (e.g. images) are exluded
  if (node.internal.type === `Mdx`) {
    const parentNode = getNode(node.parent as string) as FileSystemNode;

    const filename = path.basename(node.internal.contentFilePath, `.mdx`);

    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = filename === `index`;

    // Find the key that has "default: true" set (in this case it returns "en")
    const defaultKey = findKey(locales, (nodeAttribute) => nodeAttribute.default === true);

    // Files are defined with "name-with-dashes.lang.mdx"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const locale: string = isDefault ? defaultKey : filename.split(`.`)[1];

    const slug = parentNode.relativeDirectory ?? '';

    createNodeField({ node, name: `directory`, value: slug });
    createNodeField({ node, name: `locale`, value: locale });
    createNodeField({ node, name: `isDefault`, value: isDefault });
    createNodeField({ node, name: 'filename', value: filename });
    createNodeField({
      node,
      name: `translatedPostUrl`,
      value: translatedPostUrl((node.frontmatter as { title: string }).title, locale),
    });
  }
};

const gqlGetAllPosts = async (graphql: CreatePagesArgs['graphql']) =>
  await graphql<Queries.CreatePagesQuery>(
    `
      query CreatePages {
        allMdx(sort: { frontmatter: { date: DESC } }) {
          nodes {
            id
            frontmatter {
              title
              date
            }
            internal {
              contentFilePath
            }
            fields {
              locale
              directory
              isDefault
              translatedPostUrl
            }
            parent {
              ... on File {
                relativeDirectory
              }
            }
          }
        }
      }
    `,
  );

const createPageFromPost = (
  post: Queries.CreatePagesQuery['allMdx']['nodes'][0],
  postTemplate: string,
  createRedirect: Actions['createRedirect'],
  createPage: Actions['createPage'],
) => {
  const mdxPath = post.internal.contentFilePath;
  const locale = post.fields.locale;
  const url = translatedPostUrl(post.frontmatter.title, locale);

  const contentForCreatePage = {
    path: url,
    component: `${postTemplate}?__contentFilePath=${mdxPath}`,
    context: { id: post.id, directory: post.fields.directory, locale },
  };

  createPage(contentForCreatePage);
};

const createBlogPosts = async (
  graphql: CreatePagesArgs['graphql'],
  createRedirect: Actions['createRedirect'],
  createPage: Actions['createPage'],
) => {
  const result = await gqlGetAllPosts(graphql);

  if (result.errors) {
    console.error(result.errors);

    return;
  }

  const postList = result.data.allMdx.nodes ?? [];

  const postTemplate = path.resolve(`./src/components/Templates/PostPage.jsx`);

  for (const post of postList) {
    createPageFromPost(post, postTemplate, createRedirect, createPage);
  }
};

const createTagsPage = async (graphql: CreatePagesArgs['graphql'], createPage: Actions['createPage']) => {
  const tagTemplate = path.resolve('./src/components/Templates/PostsByTagAndLocale.tsx');
  for (const locale of allLanguages) {
    const result = await graphql<Queries.AllTagsByLocaleQuery>(
      `
        query AllTagsByLocale($locale: String!) {
          tagsGroup: allMdx(filter: { fields: { locale: { eq: $locale } } }) {
            group(field: { frontmatter: { tags: SELECT } }) {
              fieldValue
            }
          }
        }
      `,
      { locale: locale },
    );
    const tags = result.data?.tagsGroup.group;
    for (const tag of tags) {
      createPage({
        path: localizeUrl(`/tags/${tag.fieldValue}`, locale),
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
          locale,
          tagsForSeo: tags,
        },
      });
    }
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  await createBlogPosts(graphql, createRedirect, createPage);
  await createTagsPage(graphql, createPage);
};

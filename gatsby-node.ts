import locales from './config/i18n';
import { findKey, localizedSlug, removeTrailingSlash, translatedPostUrl } from './src/utils/gatsby-node-helpers';
import path from 'path';
import type { GatsbyNode } from 'gatsby';
import { FileSystemNode } from 'gatsby-source-filesystem';

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

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
  Object.keys(locales).map((lang) => {
    // Use the values defined in "locales" to construct the path
    const localizedPath = locales[lang].default ? page.path : `${locales[lang].path}${page.path}`;

    return createPage({
      // Pass on everything from the original page
      ...page,
      // Since page.path returns with a trailing slash (e.g. "/de/")
      // We want to remove that
      path: removeTrailingSlash(localizedPath),
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
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    // const name = path.basename(<string>node.internal.contentFilePath, `.mdx`);
    const name = path.basename(node.internal.contentFilePath, `.mdx`);

    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = name === `index`;

    // Find the key that has "default: true" set (in this case it returns "en")
    const defaultKey = findKey(locales, (nodeAttribute) => nodeAttribute.default === true);

    // Files are defined with "name-with-dashes.lang.mdx"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const locale: string = isDefault ? defaultKey : name.split(`.`)[1];

    const slug = parentNode.relativeDirectory ?? '';

    const localizedSlugResult = localizedSlug({ isDefault, locale, slug });

    createNodeField({ node, name: `localizedSlug`, value: localizedSlugResult });
    createNodeField({ node, name: `slug`, value: slug });
    createNodeField({ node, name: `locale`, value: locale });
    createNodeField({ node, name: `isDefault`, value: isDefault });
    createNodeField({
      node,
      name: `translatedPostUrl`,
      value: translatedPostUrl((node.frontmatter as { title: string }).title, locale),
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Adding sort here to generate the HTMl pages in descending order by date
  // Almost same type that Index Page Query
  const result = await graphql<Queries.IndexQuery>(
    `
      query CreatePages {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
              slug
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

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const postList = result.data?.allMdx?.nodes ?? [];

  const postTemplate = path.resolve(`./src/components/LayoutBlogPage.jsx`);

  postList.forEach((post) => {
    // All files for a blogpost are stored in a folder
    // relativeDirectory is the name of the folder
    const slug = (post.parent as { relativeDirectory: string }).relativeDirectory;
    const mdxPath = post.internal.contentFilePath;

    // Use the fields created in exports.onCreateNode
    const locale = post.fields.locale;
    const isDefault = post.fields.isDefault;

    const oldPath = localizedSlug({ isDefault, locale, slug });
    const newPath = translatedPostUrl(post.frontmatter.title, locale);

    const contentForCreatePage = {
      path: newPath,
      component: `${postTemplate}?__contentFilePath=${mdxPath}`,
      context: { id: post.id, locale },
    };
    createRedirect({
      fromPath: oldPath,
      toPath: newPath,
      isPermanent: true,
    });

    createPage(contentForCreatePage);
  });
};

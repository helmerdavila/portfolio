import { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LocaleContext } from './Layout';

const useTranslations = (): Record<string, string> => {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = useContext(LocaleContext);
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery<Queries.UseTranslationsQuery>(graphql`
    query UseTranslations {
      rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
        edges {
          node {
            name
            translations: childTranslationsJson {
              author
              about_me
              about_me_description
              and_i_build
              battleship_description
              disclaimer
              code_samples
              ctbook_description
              ctbook_readsample
              cv_link
              download_cv
              ecommerce_websites
              edit_posts_on_github
              hi_my_name_is
              in_other_languages
              landing_pages
              mobile_and_web_projects
              mobile_applications
              my_stack
              my_stack_backend
              my_stack_frontend
              my_stack_sysops
              personal_projects_httpixel
              personal_projects_pills
              powered_by_gatsby
              projects
              roomie_description
              see_full_post_list
              software_engineer
              type_and_press_enter
              web_applications
              what_i_do
              what_i_do_backend
              what_i_do_frontend
              what_i_do_mobile
              what_i_do_sysops
              who_am_i
              written_by
            }
          }
        }
      }
    }
  `);

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map((item) => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    };
  });

  // Only return translations for the current locale
  const { translations } = simplified.filter((lang) => lang.name === locale)[0];

  return translations;
};

export default useTranslations;

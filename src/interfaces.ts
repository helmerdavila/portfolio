export interface ISlide {
  id: number;
  name: string;
  url: string;
  backend: string;
  frontend: string;
  image: JSX.Element;
}
export interface IBlogPost {
  excerpt: string;
  frontmatter: {
    title: string;
    description: string;
    published: boolean;
    date: string;
    lang: string;
    imageCover: string;
    imageAlt: string;
  };
  fields: {
    locale: string;
  };
  parent: {
    relativeDirectory: string;
  };
}
export interface IBlogPageQuery {
  allMdx: {
    edges: { node: IBlogPost }[];
  };
}

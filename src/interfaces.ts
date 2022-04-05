import { FileSystemNode } from 'gatsby-source-filesystem';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ISlide {
  id: number;
  name: string;
  url: string;
  backend: string;
  frontend: string;
  image: JSX.Element;
}
export interface IGatsbyFileImage extends FileSystemNode {
  childImageSharp: { gatsbyImageData: IGatsbyImageData };
}
export interface IBlogPost {
  excerpt: string;
  body: string;
  frontmatter: {
    title: string;
    description: string;
    published: boolean;
    date: string;
    lang: string;
    imageAlt?: string;
    image?: Partial<IGatsbyFileImage>;
  };
  fields: {
    locale: string;
  };
  parent: {
    relativeDirectory: string;
  };
}
export interface IBlogPageQuery {
  posts: {
    edges: { node: IBlogPost }[];
  };
  backgroundImage: IGatsbyFileImage;
  homePostImage: IGatsbyFileImage;
}

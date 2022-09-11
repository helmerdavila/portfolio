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
  fields: {
    slug: string;
    locale: string;
    isDefault: boolean;
  };
  frontmatter: {
    title: string;
    description: string;
    published: boolean;
    date: string;
    lang: string;
    imageAlt?: string;
    image?: Partial<IGatsbyFileImage>;
    embeddedImagesLocal?: Partial<IGatsbyFileImage>[];
  };
  parent: {
    relativeDirectory: string;
  };
  body: string;
}
export interface IBlogPageQuery {
  posts: {
    edges: { node: IBlogPost }[];
  };
  backgroundImage: IGatsbyFileImage;
  homePostImage: IGatsbyFileImage;
}

export interface IQueryAllMdxFiles {
  allMdx: {
    nodes: IBlogPost[];
  };
}

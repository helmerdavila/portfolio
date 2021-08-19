import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';
import { FileSystemNode } from 'gatsby-source-filesystem';

export interface ISlide {
  id: number;
  name: string;
  url: string;
  backend: string;
  frontend: string;
  image: JSX.Element;
}
export interface IGatsbyFileImage extends FileSystemNode {
  childImageSharp: { gatsbyImageData: any };
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
    imageCover: string;
    imageAlt: string;
  };
  imageCover?: IGatsbyFileImage;
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
  backgroundImage: FileNode;
}

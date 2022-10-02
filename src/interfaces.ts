import { FileSystemNode } from 'gatsby-source-filesystem';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import { PageProps } from 'gatsby';

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

export interface IQueryAllMdxFiles {
  allMdx: {
    nodes: BlogPostType[];
  };
}

export type BlogPostNodesTypes = Queries.IndexQuery['allMdx']['nodes'];
export type BlogPostType = BlogPostNodesTypes[number];

export interface ILayout extends Omit<Partial<PageProps<unknown, { locale: string }>>, 'children'> {
  children?: ReactElement;
}

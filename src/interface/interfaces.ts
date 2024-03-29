import { ReactNode } from 'react';

export interface IPostProps {
  id: string;
  title: string;
  slug: string;
  category: string;
  releaseDate: string;
  headerImage: {
    url: string;
  };
  contents: {
    childMarkdownRemark: {
      html: string;
      tableOfContents: string;
      excerpt: string;
    };
  };
  tag: string[];
}

export interface IQuoteProps {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: string;
  content: {
    childMarkdownRemark: {
      html: string;
      excerpt: string;
    };
  };
}

export interface IGalleryProps {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: string;
  headerImage: {
    url: string;
  };
  content: {
    childMarkdownRemark: {
      html: string;
      excerpt: string;
    };
  };
  tag: string[];
}

export interface IMobileProps {
  isViewMobileNavigation: boolean;
}

export interface IQuoteDetailProps {
  category: string;
}

export interface ILayoutProps {
  children: ReactNode;
}

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

export interface IMobileProps {
  isViewMobileNavigation: boolean;
}

export interface IQuoteDetailProps {
  category: string;
  title: string | null;
}

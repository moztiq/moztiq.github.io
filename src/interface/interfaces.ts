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

export interface IMobileProps {
  isViewMobileMenu: boolean;
}

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
    };
  };
  tag: string[];
}

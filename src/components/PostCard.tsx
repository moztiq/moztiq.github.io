import Moment from 'react-moment';
import { extractText } from '../utils/string.utils';
import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PostWrapper = styled(motion.div)`
  border-radius: 10px;
`;

const Post = styled.li`
  padding: 30px;
  margin-top: 40px;
`;

const Title = styled.h1`
  padding: 25px 0;
  font-size: 30px;
  font-weight: 600;
  color: #484848;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const PublishDateLine = styled.div`
  height: 15px;
  border-bottom: 1px solid gainsboro;
  position: relative;
  display: flex;
  justify-content: center;
`;

const PublishDate = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 150px;
  height: 30px;
  color: tomato;
  background-color: antiquewhite;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const HeaderImage = styled.div<{ url: string }>`
  width: 200px;
  min-width: 200px;
  margin-right: 20px;
  height: 200px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 10px;
`;

const ContentText = styled.p`
  font-size: 17px;
  color: #484848;
  line-height: 1.5;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-align: justify;
`;

export interface IPostProps {
  id: number;
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
}

const postVariants = {
  initial: {
    backgroundColor: 'rgba(250, 235, 215, 1)',
  },
  whileHover: {
    backgroundColor: 'rgba(255, 99, 71, 0.2)',
  },
};

export default function PostCard({ post }: { post: IPostProps }) {
  return (
    <PostWrapper
      variants={postVariants}
      initial="initial"
      whileHover="whileHover"
    >
      <Link to={`/post/${post.slug}`}>
        <Post key={post.slug}>
          <Title>{post.title}</Title>
          <PublishDateLine>
            <PublishDate>
              <Moment format="MMM D, YYYY">{post.releaseDate}</Moment>
            </PublishDate>
          </PublishDateLine>
          <ContentWrapper>
            {post.headerImage?.url && (
              <HeaderImage url={post.headerImage?.url} />
            )}
            <ContentText>
              {extractText(post.contents.childMarkdownRemark.html)}
            </ContentText>
          </ContentWrapper>
        </Post>
      </Link>
    </PostWrapper>
  );
}

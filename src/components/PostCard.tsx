import Moment from 'react-moment';
import { extractText } from '../utils/string.utils';
import { Link } from 'gatsby';
import * as React from 'react';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { IPostProps } from '../interface/interfaces';

const PostWrapper = styled(motion.div)`
  border-radius: 10px;
`;

const Post = styled.li`
  padding: 30px;
  margin-top: 40px;
`;

const Title = styled.h1`
  padding: 25px 0;
  font-size: 1.5rem;
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
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  width: 150px;
  height: 30px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
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
  width: 175px;
  min-width: 175px;
  margin-right: 20px;
  height: 180px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 10px;
`;

const ContentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentText = styled.p`
  font-size: 0.95rem;
  color: #484848;
  line-height: 1.7;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-align: justify;
`;

const TagList = styled.ul`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Tag = styled.li`
  padding: 5px 10px;
  margin-right: 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.grayLightDark};
  background-color: ${(props) => props.theme.colors.grayLight};
`;

export default function PostCard({ post }: { post: IPostProps }) {
  const theme = useContext(ThemeContext);
  const postVariants = {
    initial: {
      backgroundColor: theme?.colors.background,
    },
    whileHover: {
      backgroundColor: theme?.colors.light,
    },
  };

  return (
    <PostWrapper
      variants={postVariants}
      initial="initial"
      whileHover="whileHover"
    >
      <Link to={`/post/${post.slug}`}>
        <Post>
          <Title>{post.title}</Title>
          <PublishDateLine>
            <PublishDate>
              <Moment format="MMM D, YYYY">{post.releaseDate}</Moment>
            </PublishDate>
          </PublishDateLine>
          <ContentWrapper>
            {post.headerImage?.url && (
              <HeaderImage url={post.headerImage?.url || ''} />
            )}
            <ContentTextWrapper>
              <ContentText>
                {extractText(post.contents.childMarkdownRemark.html)}
              </ContentText>
              <TagList>
                {post.tag.map((item, idx) => (
                  <Tag key={idx}>#{item}</Tag>
                ))}
              </TagList>
            </ContentTextWrapper>
          </ContentWrapper>
        </Post>
      </Link>
    </PostWrapper>
  );
}

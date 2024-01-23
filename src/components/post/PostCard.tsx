import Moment from 'react-moment';
import { extractText } from '../../utils/string.utils';
import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { IPostProps } from '../../interface/interfaces';
import { fadeInSlideToLeft } from '../../constants/animation.constant';
import { motion } from 'framer-motion';

const Post = styled(motion.li)`
  padding: 3rem;
  margin-top: 40px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.05);
  border-radius: 0.3rem;
  transition: all 0.2s;

  @media screen and (max-width: 430px) {
    padding: 1.5rem;
  }

  &:hover {
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #484848;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px 0;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.1rem;
  }
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
  color: ${(props) => props.theme.colors.accentColor};
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const HeaderImage = styled.div<{ url: string }>`
  width: 225px;
  min-width: 225px;
  margin-right: 20px;
  height: 180px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray200};

  @media screen and (max-width: 1024px) {
    width: 125px;
    min-width: 125px;
    margin-right: 10px;
  }
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
  overflow-wrap: anywhere;
`;

const TagList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 3px;
`;

const Tag = styled.li`
  padding: 5px 10px;
  margin-right: 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.gray600};
  background-color: ${(props) => props.theme.colors.gray100};

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    margin-right: 5px;
  }
`;

const variants = {
  //   initial={{ scale: 0 }}
  // animate={{ rotate: 180, scale: 1 }}
  // transition={{
  //   type: 'spring',
  //     stiffness: 260,
  //     damping: 20,
  // }}

  initial: { scale: 0 },
  animate: { rotate: 180, scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  },
};
export default function PostCard({ post }: { post: IPostProps }) {
  return (
    <Link to={`/post/${post.slug}`}>
      <Post {...fadeInSlideToLeft}>
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
              {/*{post.contents.childMarkdownRemark.excerpt}*/}
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
  );
}

import * as React from 'react';
import styled from 'styled-components';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import Moment from 'react-moment';
import { Link } from 'gatsby';

const BlogWrapper = styled.ul`
  width: 90%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
  }
`;

const Post = styled.li`
  padding: 30px;
  margin-top: 40px;
`;

const Title = styled.h1`
  padding: 25px 0;
  font-size: 36px;
  font-weight: 600;
  color: #484848;
  display: flex;
  justify-content: center;
  align-items: center;
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
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  text-align: justify;
`;

interface IPostProps {
  id: number;
  title: string;
  slug: string;
  category: string;
  releaseDate: string;
  content: {
    raw: string;
  };
  headerImage: {
    url: string;
  };
}

export default function PostList({ posts }: { posts: [] }) {
  return (
    <BlogWrapper>
      {posts &&
        posts.map((post: IPostProps, idx: number) => (
          <Link to={`/${post.category}/${post.slug}`}>
            <Post key={idx}>
              <Title>{post.title}</Title>
              <PublishDateLine>
                <PublishDate>
                  <Moment format="MMM D, YYYY">{post.releaseDate}</Moment>
                </PublishDate>
              </PublishDateLine>
              <ContentWrapper>
                <HeaderImage url={post.headerImage.url}></HeaderImage>
                <ContentText>
                  {documentToPlainTextString(JSON.parse(post.content.raw))}
                </ContentText>
              </ContentWrapper>
            </Post>
          </Link>
        ))}
    </BlogWrapper>
  );
}

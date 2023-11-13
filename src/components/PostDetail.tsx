import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components';
import Moment from 'react-moment';

const DetailWrapper = styled.div`
  width: 90%;
  overflow-y: scroll;
`;

const Title = styled.h1`
  margin-top: 50px;
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

const HeaderImage = styled.div<{ url: string }>`
  width: 200px;
  min-width: 200px;
  margin: 50px auto;
  height: 200px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 10px;
`;

const RichContent = styled.div`
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;
  blockquote {
    margin: 30px 0;
  }
`;

export default function PostDetail({ data }: any) {
  const post = data;
  return (
    <DetailWrapper>
      <Title>{post?.title}</Title>
      <PublishDateLine>
        <PublishDate>
          <Moment format="MMM D, YYYY">
            {post?.releaseDate || new Date()}
          </Moment>
        </PublishDate>
      </PublishDateLine>
      <HeaderImage url={post?.headerImage?.url || ''}></HeaderImage>
      <RichContent
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(JSON.parse(post?.content?.raw || '')),
        }}
      ></RichContent>
    </DetailWrapper>
  );
}

export const query = graphql`
  query PostDetail($slug: String!) {
    contentfulMoztiqBlog(slug: { eq: $slug }) {
      id
      title
      slug
      category
      releaseDate
      content {
        raw
      }
      headerImage {
        url
      }
    }
  }
`;

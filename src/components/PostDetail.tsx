import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { IPostProps } from '../interface/interfaces';

const DetailWrapper = styled.div`
  width: 70%;
`;

const Title = styled.h1`
  margin: 50px 0 30px 0;
  padding: 50px 0;
  font-size: 1.8rem;
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
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  width: 150px;
  height: 30px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
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

const TagList = styled.ul`
  margin-top: 80px;
  display: flex;
  align-items: center;
`;

const Tag = styled.li`
  padding: 5px 10px;
  margin-right: 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.textGrayLightDark};
  background-color: ${(props) => props.theme.colors.bgGrayLight};
`;

const LongContent = styled.div`
  font-size: 1rem;
  line-height: 1.3;
  text-align: justify;

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
  }
  blockquote {
    color: ${(props) => props.theme.colors.textBlack};
    margin: 30px 0;
    line-height: 1.8;
    padding: 5px 25px;
    background-color: ${(props) => props.theme.colors.blockquoteBackground};
    border-radius: 10px;
    border-top: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.15);
  }

  p {
    margin: 15px 0;
  }

  b,
  strong {
    font-weight: 600;
  }

  ul,
  ol {
    color: ${(props) => props.theme.colors.boxText};
    background-color: ${(props) => props.theme.colors.boxBackground};
    border: 1px solid ${(props) => props.theme.colors.boxBorder};
    padding: 10px 40px;
    margin: 5px 0;
    border-radius: 5px;
  }

  li {
    list-style-type: disc;
    margin: 15px 0 5px 0;
  }

  h3 {
    color: ${(props) => props.theme.colors.textBlack};
    font-size: 1.4rem;
    font-weight: 600;
    margin: 50px 0 10px 0;
  }

  pre {
    border-radius: 5px;
  }
`;

export default function PostDetail(props: { data: IPostProps }) {
  const { data: post } = props;

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
      {post?.headerImage?.url && <HeaderImage url={post?.headerImage?.url} />}
      <LongContent
        dangerouslySetInnerHTML={{
          __html: post?.contents?.childMarkdownRemark.html || '',
        }}
      />
      <TagList>
        {post?.tag.map((item, idx) => <Tag key={idx}>#{item}</Tag>)}
      </TagList>
    </DetailWrapper>
  );
}

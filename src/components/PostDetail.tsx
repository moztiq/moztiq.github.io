import React from 'react';
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
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.light};
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

const LongContent = styled.div`
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
  }
  blockquote {
    color: ${(props) => props.theme.colors.textBlack};
    margin: 30px 0;
    padding: 1px 20px;
    border-left: 10px solid ${(props) => props.theme.colors.blockquoteLine};
    background-color: ${(props) => props.theme.colors.blockquoteBackground};
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
    padding: 20px 40px;
    margin: 5px;
    border-radius: 5px;
  }

  li {
    list-style-type: disc;
    margin: 10px 0 5px 0;
  }

  h3 {
    color: #484848;
    font-size: 24px;
    font-weight: 600;
    margin: 20px 0 10px 0;
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
      {post?.headerImage?.url && <HeaderImage url={post?.headerImage?.url} />}
      <LongContent
        dangerouslySetInnerHTML={{
          __html: post?.contents?.childMarkdownRemark.html,
        }}
      />
    </DetailWrapper>
  );
}

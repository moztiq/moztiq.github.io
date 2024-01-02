import Moment from 'react-moment';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IPostProps } from '../../interface/interfaces';
import Gisqus from './Gisqus';

const PostDetailContentWrapper = styled.div`
  width: 75%;

  @media screen and (max-width: 430px) {
    width: 85%;
  }
`;

const Title = styled.h1`
  margin: 70px 0 50px 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: #484848;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.3rem;
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
  letter-spacing: 1px;
  width: 150px;
  height: 30px;
  color: ${(props) => props.theme.colors.accentColor};
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderImage = styled.div<{ url: string }>`
  margin: 50px auto;
  height: 250px;
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
  color: ${(props) => props.theme.colors.gray600};
  background-color: ${(props) => props.theme.colors.gray100};
`;

const LongContent = styled.div`
  font-size: 1rem;
  line-height: 1.3;
  text-align: justify;

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
  }

  p {
    margin: 15px 0;
    font-size: 1.05rem;
    line-height: 1.8;
    white-space: pre-wrap;

    code {
      font-size: 0.9rem;
      background-color: #c05b4d;
    }
  }

  b,
  strong {
    font-weight: 600;
  }

  ul,
  ol {
    color: ${(props) => props.theme.colors.gray800};
    background-color: ${(props) => props.theme.colors.gray50};
    border: 1px solid ${(props) => props.theme.colors.gray300};
    padding: 10px 40px;
    margin: 5px 0;
    border-radius: 5px;
  }

  li {
    list-style-type: disc;
    margin: 10px 0;
  }

  h3 {
    color: ${(props) => props.theme.colors.gray800};
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 40px;
    padding: 5px 0;
  }

  pre {
    border-radius: 5px;
  }

  code {
    font-size: 13px;
  }

  img {
    max-width: 100%;
    border-radius: 5px;
  }

  blockquote {
    color: ${(props) => props.theme.colors.gray800};
    margin: 30px 0;
    line-height: 1.8;
    padding: 5px 25px;
    background-color: ${(props) => props.theme.colors.gray50};
    border-radius: 10px;
    border-top: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.15);
    white-space: pre-wrap;

    p {
      margin: 5px 0;
    }

    ul {
      padding: 0 40px;
      margin: 0;
      line-height: 1.1;
    }

    li {
      margin: 0;
    }
  }

  em {
    color: ${(props) => props.theme.colors.textPrimary};
    font-style: italic;
  }

  @media screen and (max-width: 430px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

const GisqusWrapper = styled.div`
  margin-top: 70px;
`;

export default function PostContent({ post }: { post: IPostProps }) {
  useEffect(() => {
    document.querySelectorAll('#content a').forEach(function (link) {
      link.setAttribute('target', '_blank');
    });
  }, []);

  return (
    <PostDetailContentWrapper>
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
        id="content"
        dangerouslySetInnerHTML={{
          __html: post?.contents?.childMarkdownRemark.html || '',
        }}
      />
      <TagList>
        {post?.tag.map((item, idx) => <Tag key={idx}>#{item}</Tag>)}
      </TagList>
      <GisqusWrapper>
        <Gisqus />
      </GisqusWrapper>
    </PostDetailContentWrapper>
  );
}

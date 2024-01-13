import Moment from 'react-moment';
import { extractText } from '../../utils/string.utils';
import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { IPostProps } from '../../interface/interfaces';
import { SectionTitle } from '../../constants/common.constant';

const Post = styled.li`
  a {
    text-decoration: none;
  }
  margin: 40px 0;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textPrimary};
  text-decoration: underline;

  @media screen and (max-width: 430px) {
    font-size: 1.1rem;
  }
`;

const ContentText = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #484848;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: justify;
  overflow-wrap: anywhere;

  @media screen and (max-width: 430px) {
    font-size: 0.9rem;
  }
`;

const Bottom = styled.div`
  text-align: right;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.gray400};
`;

const Category = styled.span`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.accentColor};
`;

export default function MainPostCard({ post }: { post: IPostProps }) {
  return (
    <Post>
      <Link to={`/post/${post.slug}`}>
        <Title>{post.title}</Title>
      </Link>
      <ContentText>
        {extractText(post.contents.childMarkdownRemark.html)}
      </ContentText>
      <Bottom>
        <Link to={`/${post?.category!}`}>
          <Category>{SectionTitle(post?.category!)}</Category>
        </Link>
        {' / '}
        <Moment format="YYYY.MM.DD">{post.releaseDate}</Moment>
      </Bottom>
    </Post>
  );
}

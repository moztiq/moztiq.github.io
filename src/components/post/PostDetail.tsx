import React from 'react';
import styled from 'styled-components';
import { IPostProps } from '../../interface/interfaces';
import Toc from './Toc';
import PostContent from './PostContent';

const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  background-color: ${(props) => props.theme.colors.white};
`;

const PostDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  border-right: 1px solid ${(props) => props.theme.colors.gray200};
`;

export default function PostDetail(props: { data: IPostProps }) {
  const { data: post } = props;

  return (
    <DetailWrapper>
      <PostDetailWrapper>
        <PostContent post={post} />
      </PostDetailWrapper>
      {post?.contents?.childMarkdownRemark.tableOfContents && (
        <Toc toc={post?.contents?.childMarkdownRemark.tableOfContents} />
      )}
    </DetailWrapper>
  );
}

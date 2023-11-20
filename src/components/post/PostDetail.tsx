import React, { RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IPostProps } from '../../interface/interfaces';
import Toc from './Toc';
import PostContent from './PostContent';

const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  //margin-top: 70px;
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

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const targets = entries.filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 1,
        );
        if (targets.length === 0) return;

        ref.current
          ?.querySelectorAll('.highlight')
          .forEach((element) => element.classList.remove('highlight'));

        targets.forEach((item) => {
          const target = ref.current?.querySelector(
            `.toc a[href='#${encodeURI(
              item.target.getAttribute('id') ?? '',
            )}']`,
          );
          if (target) {
            target.classList.add('highlight');
          }
        });
      },
      { threshold: [0, 1.0] },
    );

    ref.current?.querySelectorAll<HTMLElement>('h2, h3').forEach((header) => {
      observer.observe(header);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <DetailWrapper ref={ref as RefObject<HTMLDivElement>}>
      <PostDetailWrapper>
        <PostContent post={post} />
      </PostDetailWrapper>
      {post?.contents?.childMarkdownRemark.tableOfContents && (
        <Toc toc={post?.contents?.childMarkdownRemark.tableOfContents} />
      )}
    </DetailWrapper>
  );
}

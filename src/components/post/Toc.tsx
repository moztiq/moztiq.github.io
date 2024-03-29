import React from 'react';
import styled from 'styled-components';

const TocWrapper = styled.div`
  width: 300px;
  min-width: 300px;
  background-color: ${(props) => props.theme.colors.background};

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const TableOfContents = styled.div`
  width: 70%;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray200};
  border-radius: 10px;
  padding: 25px 25px 5px 25px;
  position: sticky;
  top: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 20px auto;
`;

const TocTitle = styled.h2`
  color: ${(props) => props.theme.colors.gray800};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const TocList = styled.div`
  li {
    font-size: 13px;
    padding: 5px 0;
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  ul {
    color: ${(props) => props.theme.colors.gray800};
    margin: 5px 0;
    overflow-y: scroll;

    ul {
      li {
        font-size: 12px;
        padding: 5px;
        margin: 5px 0;
      }
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray500};
    padding-bottom: 2px;
    border-bottom: 1px dashed ${(props) => props.theme.colors.gray200};
  }
  a.highlight {
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
  }
`;

export default function Toc({ toc }: { toc: string }) {
  return (
    <TocWrapper className="toc">
      <TableOfContents>
        <TocTitle>Table of Contents</TocTitle>
        <TocList
          dangerouslySetInnerHTML={{
            __html: toc,
          }}
        />
      </TableOfContents>
    </TocWrapper>
  );
}

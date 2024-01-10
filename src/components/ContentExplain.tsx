import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TopBackground = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  background-color: ${(props) => props.theme.colors.gray200};
  background-size: cover;

  @media screen and (max-width: 1024px) {
    margin-top: 60px;
  }
`;

const ContentExplainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  position: relative;
`;

const ContentExplainTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -40px;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.accentColor};
`;

const ContentExplainTitle = styled.span`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.gray500};
  letter-spacing: 1px;
  span {
    color: ${(props) => props.theme.colors.gray800};
    font-weight: bold;
    font-size: 2.5rem;
  }
  span.accent {
    margin: 0 20px;
    color: ${(props) => props.theme.colors.accentColor};
    font-size: 28px;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.1rem;
    span {
      font-size: 1.8rem;
    }
  }
`;

const ContentExplainDescription = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray500};
  line-height: 1.5;
`;

interface IContentExplainProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ContentExplain(props: IContentExplainProps) {
  return (
    <TopBackground>
      <ContentExplainWrapper>
        <ContentExplainTitleWrapper>
          <IconWrapper>{props.icon}</IconWrapper>
          <ContentExplainTitle
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
        </ContentExplainTitleWrapper>
        <ContentExplainDescription>
          {props.description}
        </ContentExplainDescription>
      </ContentExplainWrapper>
    </TopBackground>
  );
}

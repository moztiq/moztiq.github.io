import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TopBackground = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  background-color: ${(props) => props.theme.colors.gray200};
  background-size: cover;
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
`;

const IconWrapper = styled.div`
  margin-right: 30px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.accentColor};
`;

const ContentExplainTitle = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.gray500};
  letter-spacing: 1px;
  span {
    color: ${(props) => props.theme.colors.gray800};
    font-weight: bold;
    font-size: 40px;
  }
  span.accent {
    margin: 0 20px;
    color: ${(props) => props.theme.colors.accentColor};
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    span {
      font-size: 28px;
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

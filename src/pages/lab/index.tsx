import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';
import styled from 'styled-components';
import {
  Category,
  SectionIcon,
  SectionTitle,
} from '../../constants/common.constant';
import bubbleImage from '../../assets/images/bubbleio.png';
import yupQuizImage from '../../assets/images/yup-quiz.png';
import mozartPortalImage from '../../assets/images/mozart-portal.png';
import newIdeaImage from '../../assets/images/new-idea.png';
import ContentExplain from '../../components/ContentExplain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chatGptSvg from '../../assets/images/chat-gpt.svg';

const LabListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LabList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 85%;
  a {
    text-decoration: none;
  }
  margin: 50px 0;

  @media screen and (max-width: 1024px) {
    width: 95%;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  @media screen and (max-width: 430px) {
    width: 95%;
    grid-template-columns: 1fr;
  }
`;

const Lab = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.gray50};
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.05);
  border-radius: 0.5rem;
  transition: all 0.2s;
  font-size: 1.35rem;
  font-weight: 500;
  color: ${(props) =>
    props.active ? props.theme.colors.black : props.theme.colors.gray400};

  &:hover {
    box-shadow: ${(props) =>
      props.active ? '0 2px 5px 0 rgba(0, 0, 0, 0.15)' : ''};
  }
`;

const LabTitle = styled.div`
  margin-left: 1rem;
  span.sub {
    margin-top: 10px;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray400};
    display: block;
  }
`;

const LabIcon = styled.div<{ source: string }>`
  width: 30px;
  min-width: 30px;
  height: 30px;
  background-image: url(${(props) => props.source});
  background-size: cover;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.gray400};
`;

export default function LabPage() {
  return (
    <Layout>
      <ContentContainer title={SectionTitle(Category.LAB)}>
        <ContentExplain
          icon={<FontAwesomeIcon icon={SectionIcon(Category.LAB)} />}
          title={`<span>LAB.</span> ${SectionTitle(Category.LAB)}`}
          description={`해야할 것도 많고 알아야할 것도 많고 하고싶은 것도 많네요. 해야지 하고 맘 속에만 담아두었던 것들을 꺼내어 하나씩 시도해 봅니다.`}
        />
        <LabListContainer>
          <LabList>
            <Link to={`/ai`}>
              <Lab active>
                <img src={chatGptSvg} width={30} height={30} alt={'chat-gpt'} />
                <LabTitle>
                  <span>{SectionTitle(Category.AI)}</span>
                  <span className="sub">
                    장난 좀 치다보면 AI 도 내 맘을 이해할 날이 오겠지
                  </span>
                </LabTitle>
              </Lab>
            </Link>
            <Lab>
              <LabIcon source={mozartPortalImage} />
              <LabTitle>
                <span>Mozart Portal</span>
                <span className="sub">Coming Soon</span>
              </LabTitle>
            </Lab>
            <Lab>
              <LabIcon source={bubbleImage} />
              <LabTitle>
                <span>No Code & Automation</span>
                <span className="sub">Coming soon</span>
              </LabTitle>
            </Lab>
            <Lab>
              <LabIcon source={yupQuizImage} />
              <LabTitle>
                <span>Yup Quiz Application</span>
                <span className="sub">Coming soon</span>
              </LabTitle>
            </Lab>
            <Lab>
              <LabIcon source={newIdeaImage} />
              <LabTitle>
                <span>Unknown</span>
                <span className="sub">Next what ?</span>
              </LabTitle>
            </Lab>
          </LabList>
        </LabListContainer>
      </ContentContainer>
    </Layout>
  );
}

export const Head = () => {
  return <Seo title={'LAB SECTION'} description={'LAB SECTION'} url={`/lab`} />;
};

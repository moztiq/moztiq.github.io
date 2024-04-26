import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout/Layout';
import ContentContainer from '../../components/ContentContainer';
import Seo from '../../components/Seo';
import styled from 'styled-components';
import {
  Category,
  SectionDescription,
  SectionIcon,
  SectionTitle,
} from '../../constants/common.constant';
import bubbleImage from '../../assets/images/bubbleio.png';
import yupQuizImage from '../../assets/images/yup-quiz.png';
import readersLibraImage from '../../assets/images/readers-libra.png';
import mozartPortalImage from '../../assets/images/mozart-portal.png';
import rubatoImage from '../../assets/images/rubato.png';
import quoteInspirerImage from '../../assets/images/quote-inspirer.png';
import lifeRelayImage from '../../assets/images/liferelay_logo.png';
import tenseMovementImage from '../../assets/images/tt_logo_400x400.png';
import unknownImage from '../../assets/images/unknown.png';
import ContentExplain from '../../components/ContentExplain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chatGptSvg from '../../assets/images/chat-gpt.svg';
import {
  fadeInSlideToLeft,
  flipVariant,
} from '../../constants/animation.constant';
import { motion } from 'framer-motion';

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

const Lab = styled(motion.li)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.gray200};
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
  width: 40px;
  min-width: 40px;
  height: 40px;
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
          description={SectionDescription(Category.LAB)}
        />
        <LabListContainer>
          <LabList>
            <Link to={`/ai`}>
              <Lab active {...flipVariant}>
                <img src={chatGptSvg} width={40} height={40} alt={'chat-gpt'} />
                <LabTitle>
                  <span>{SectionTitle(Category.AI)}</span>
                  <span className="sub">AI Playground</span>
                </LabTitle>
              </Lab>
            </Link>
            <a href="https://tensemovement.com" target="_blank">
              <Lab active {...flipVariant}>
                <LabIcon source={tenseMovementImage} />
                <LabTitle>
                  <span>Tense Movement</span>
                  <span className="sub">Leading Innovative Company</span>
                </LabTitle>
              </Lab>
            </a>
            <a href="https://liferelay.me" target="_blank">
              <Lab active {...flipVariant}>
                <LabIcon source={lifeRelayImage} />
                <LabTitle>
                  <span>Life Relay</span>
                  <span className="sub">People Life Story</span>
                </LabTitle>
              </Lab>
            </a>
            <Lab>
              <LabIcon source={mozartPortalImage} />
              <LabTitle>
                <span>Enjoy Mozart</span>
                <span className="sub">Mozart Portal</span>
              </LabTitle>
            </Lab>
            <Lab>
              <LabIcon source={yupQuizImage} />
              <LabTitle>
                <span>Yup Quiz</span>
                <span className="sub">Custom Quiz Generation</span>
              </LabTitle>
            </Lab>
            <Lab>
              <LabIcon source={readersLibraImage} />
              <LabTitle>
                <span>Readers Libra</span>
                <span className="sub">Personal Library</span>
              </LabTitle>
            </Lab>
            <Lab>
              <LabIcon source={rubatoImage} />
              <LabTitle>
                <span>Rubato Portal</span>
                <span className="sub">CAU Rubato Orchestra Portal</span>
              </LabTitle>
            </Lab>
            <Lab>
              <LabIcon source={bubbleImage} />
              <LabTitle>
                <span>No Code & Automation Archive</span>
                <span className="sub">No Code & Automation Posts</span>
              </LabTitle>
            </Lab>
            <Lab>
              <LabIcon source={quoteInspirerImage} />
              <LabTitle>
                <span>Quote Inspirer</span>
                <span className="sub">Quotes Collection to inspire people</span>
              </LabTitle>
            </Lab>
            <Lab>
              <LabIcon source={unknownImage} />
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
  return (
    <Seo
      title={SectionTitle(Category.LAB)}
      description={SectionDescription(Category.LAB)}
      url={`/lab`}
    />
  );
};

import React, { useState } from 'react';
import styled from 'styled-components';
import { ILayoutProps } from '../../interface/interfaces';
import ContentContainer from '../ContentContainer';
import {
  Category,
  SectionDescription,
  SectionTitle,
} from '../../constants/common.constant';
import Layout from './Layout';
import { Link } from 'gatsby';
import ContentExplain from '../ContentExplain';
import chatGptSvg from '../../assets/images/chat-gpt.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

const GptsButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 73px;
  position: absolute;
  top: 62px;
  right: 0;
  padding: 10px 40px 10px 10px;
  color: ${(props) => props.theme.colors.white};
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.accentColor},
    rgba(50, 164, 7, 0.5)
  );
  box-shadow: 0 3px 13px 0 rgba(0, 0, 0, 0.15);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const GptsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 98px;
  padding: 20px 30px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 3px 13px 0 rgba(0, 0, 0, 0.15);
  border-radius: 0 0 0 10px;
  right: -200px;
  transition: right 0.3s ease-in-out;
`;

const GptIcon = styled.div<{ source: string }>`
  width: 60px;
  min-width: 60px;
  height: 60px;
  margin: 10px 0;
  background-image: url(${(props) => props.source});
  background-size: cover;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.gray400};
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    animation: bounce 1.5s infinite;
    @keyframes bounce {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
    }
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Menu = styled.div<{ active: boolean }>`
  margin: 60px 10px 0 10px;
  padding: 5px 10px;
  font-weight: ${(props) => (props.active ? 'bold' : '')};
  border-bottom: 2px solid
    ${(props) =>
      props.active
        ? props.theme.colors.accentColor
        : props.theme.colors.gray300};
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray800};
  }
`;

export default function AiLayout({ children }: ILayoutProps) {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';

  const [isViewGpts, setIsViewGpts] = useState(false);

  return (
    <Layout>
      <ContentContainer title={SectionTitle(Category.AI)}>
        <ContentExplain
          icon={<img src={chatGptSvg} alt={`chat-gpt`} width={25} />}
          title={`<span>AI</span> ${SectionTitle(Category.AI)}`}
          description={SectionDescription(Category.AI)}
        />
        <MenuWrapper>
          <Menu active={pathname === `/ai/`}>
            <Link to={`/ai/`}>Article</Link>
          </Menu>
          {/*<Menu active={false}>Dev Logs</Menu>*/}
          <Menu active={pathname === `/ai/gallery/`}>
            <Link to={`/ai/gallery/`}>Prompt Gallery</Link>
          </Menu>
        </MenuWrapper>
        {children}
        <GptsButton onClick={() => setIsViewGpts((prev) => !prev)}>
          <FontAwesomeIcon
            icon={isViewGpts ? faAnglesRight : faAnglesLeft}
            size="xs"
          />{' '}
          GPTs
        </GptsButton>
        <GptsWrapper style={isViewGpts ? { right: 0 } : {}}>
          <Tippy content="Vocab Quizmaster" placement="left">
            <a
              href="https://chat.openai.com/g/g-etqOW0EA7-vocab-quizmaster"
              target="_blank"
            >
              <GptIcon source="https://files.oaiusercontent.com/file-yRBFgiLMUePnqxPY7s7z0Pwd?se=2123-11-28T03%3A08%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3D5df44808-f661-46c5-8928-fada678fdab2.png&sig=5bvRV8wqn%2BdSjPTZGimVevEOIu7Bnb7cgP57021eMIo%3D" />
            </a>
          </Tippy>
          <Tippy content="Classical Quiz Master" placement="left">
            <a
              href="https://chat.openai.com/g/g-c0xRUAwCA-classical-quiz-master"
              target="_blank"
            >
              <GptIcon source="https://files.oaiusercontent.com/file-KnXpbEdYOahTueTGY8FMhXCe?se=2123-11-27T07%3A09%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3Dfcdab9c6-9632-4909-b94a-cb7baa21e04f.png&sig=7SqNmqb9LNdhve8imsxNODVB8pcukaeSJD6Pw4ylZ5I%3D" />
            </a>
          </Tippy>
          <Tippy content="Fun Image Wizard" placement="left">
            <a
              href="https://chat.openai.com/g/g-WlaahNLaC-fun-image-wizard"
              target="_blank"
            >
              <GptIcon source="https://files.oaiusercontent.com/file-yFEUj90QkmtTIGsuPZFd9VLX?se=2123-11-27T00%3A56%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3Df32c8d4d-8b1f-4bc5-a53c-9296ad49146e.png&sig=Py80vBkdMHA%2BPSCdWnTF5H/PsQYtyETm2WF4BXzzNTk%3D" />
            </a>
          </Tippy>
          <Tippy content="Inspiration Beacon" placement="left">
            <a
              href="https://chat.openai.com/g/g-lkbdqEeZh-inspiration-beacon"
              target="_blank"
            >
              <GptIcon source="https://files.oaiusercontent.com/file-SEX0NdIQzbg0t45I1HlpxC7B?se=2123-11-27T00%3A38%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3Dd8d89dbb-9d30-4e58-9de0-e4865bc8a516.png&sig=nrXpOhsnDuE0ZJawZdhqhWceQ8ksmpt1UXc7G0yRZsY%3D" />
            </a>
          </Tippy>
          <Tippy content="No Code Business Innovator" placement="left">
            <a
              href="https://chat.openai.com/g/g-7r9CsBcxJ-no-code-business-innovator"
              target="_blank"
            >
              <GptIcon source="https://files.oaiusercontent.com/file-UwNFVV0ULgKha5av1knb1eiB?se=2123-11-09T05%3A29%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db906de8d-83da-4ae6-84ae-a59988d2e1f7.png&sig=4dPO9DHtqJgCYbwEPxOgbjdcJSmlBeLhiM5ahXFsg1c%3D" />
            </a>
          </Tippy>
          <Tippy content="Literary Counselor" placement="left">
            <a
              href="https://chat.openai.com/g/g-lAg3a1wen-literary-counselor"
              target="_blank"
            >
              <GptIcon source="https://files.oaiusercontent.com/file-ncikNVOXbrcVufUqcGOoNTyq?se=2123-12-10T09%3A39%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3D45d9ad72-98a5-4f93-8871-17eb08f2512f.png&sig=q6xWOv2Pda/gB5hmsBX4pw9MKUFFW5abvLGG3pSpapk%3D" />
            </a>
          </Tippy>
        </GptsWrapper>
      </ContentContainer>
    </Layout>
  );
}

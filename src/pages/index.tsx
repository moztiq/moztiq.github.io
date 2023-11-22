import * as React from 'react';
import { useContext } from 'react';
import type { PageProps } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import Hamburger from '../components/Hamburger';

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    position: absolute;
  }
`;

const SmileyIcon = styled(motion.svg)`
  font-size: 18rem;
`;

const QuoteBox = styled.div`
  font-family: 'Nanum Myeongjo', serif;
  margin-top: 100px;
  padding: 70px;
  width: 40%;
  color: ${(props) => props.theme.colors.textBlack};
  background-color: ${(props) => props.theme.colors.background};
  border-top: 7px solid ${(props) => props.theme.colors.primary};
  border-radius: 25px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 430px) {
    padding: 30px;
    width: 70%;
  }
`;

const Quote = styled.div`
  font-size: 1.4rem;
  line-height: 1.8;
  text-align: justify;
`;

const Author = styled.div`
  margin-top: 40px;
  text-align: right;
  font-size: 1.2rem;
`;

const QuoteLeft = styled.svg`
  font-size: 1.2em;
  margin-right: 20px;
`;

const QuoteRight = styled.svg`
  font-size: 1.2em;
  margin-left: 20px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: ${(props) => props.theme.colors.background};
  position: absolute;
  top: 0;
  left: 0;
`;

const IndexPage: React.FC<PageProps> = () => {
  const theme = useContext(ThemeContext);
  const iconVariants = {
    hidden: {
      pathLength: 0,
      fill: theme?.colors.white,
    },
    visible: {
      pathLength: 1,
      fill: theme?.colors.primary,
      transition: {
        duration: 1,
      },
    },
  };

  const quoteVariants = {
    initial: {
      pathLength: 0,
      fill: theme?.colors.white,
    },
    animate: {
      pathLength: 1,
      fill: theme?.colors.primary,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Layout>
      <TopWrapper>
        <Hamburger />
      </TopWrapper>
      <Content>
        <SmileyIcon
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <motion.path
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zm86.9-85.1l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"
          />
        </SmileyIcon>
        <QuoteBox>
          <Quote>
            <QuoteLeft
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <motion.path
                variants={quoteVariants}
                initial="initial"
                animate="animate"
                d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
              />
            </QuoteLeft>
            주어진 운명을 따르기 보다 자신의 한계를 극복하기 위해 노력하며
            세상을 바꾸려는 노력 이전에 자신의 그릇된 욕망을 다스리는 데
            주력하라.
            <QuoteRight
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <motion.path
                variants={quoteVariants}
                initial="initial"
                animate="animate"
                d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
              />
            </QuoteRight>
          </Quote>
          <Author>- 데카르트</Author>
        </QuoteBox>
      </Content>
    </Layout>
  );
};

export default IndexPage;

export const Head = ({ data }: PageProps<Queries.PostDetailQuery>) => {
  const post = data.contentfulMoztiqBlog;

  return (
    <Seo
      title={'MOZTIQ HOME'}
      description={'MOZTIQ'}
      url={`/post/${post?.slug}`}
    />
  );
};

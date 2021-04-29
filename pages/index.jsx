import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';


export default function Home() {
  return (
    <SContainer>
      <GlobalStyle />
      <Head>
        <title>居酒屋検索</title>
      </Head>
      <SBody>
        <SH1>居酒屋検索アプリ</SH1>
        <SGet>
          <Link href='/Lists/Lists'><SLinkStyle>東京のラーメン特集</SLinkStyle></Link>
        </SGet>
       
      </SBody>
    </SContainer>
  )
}

const SContainer = styled.div`
`;

const SH1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 8rem;
`;

const SBody = styled.div`

`;

const SLinkStyle = styled.div`
  text-decoration: none;
  padding: 3rem 0;
  text-align: center;
  word-break: keep-all;
`;  

const SGet = styled.div`
  font-size: 2rem;
  border: 1px solid;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
`;

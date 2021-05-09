import Head from 'next/head';
import Link from 'next/link';
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
        <SCopy>
          <a href="http://webservice.recruit.co.jp/">
            <img
              src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif"
              alt="ホットペッパー Webサービス"
              width="135"
              height="17"
              border="0"
              title="ホットペッパー Webサービス"
            />
          </a>
        </SCopy>
        <STitle>
          <SH1>居酒屋検索アプリ</SH1>
        </STitle>
        <SGet>
          <Link href="/Lists/Lists">
            <SLinkStyle>
              近くの居酒屋を
              <br />
              検索
            </SLinkStyle>
          </Link>
        </SGet>
      </SBody>
    </SContainer>
  );
}

const SContainer = styled.div``;

const STitle = styled.div`
  width: 70%
  margin: 0 auto;
`;

const SH1 = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-top: 5rem;
`;

const SBody = styled.div``;

const SLinkStyle = styled.div`
  text-decoration: none;
  padding: 3rem 0;
  text-align: center;
`;

const SGet = styled.div`
  font-size: 2rem;
  border: 1px solid;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
`;

const SCopy = styled.div`
  padding-top: 2rem;
  padding-left: 10rem;
`;

const SA = styled.div`
  text-decoration: none;
`;

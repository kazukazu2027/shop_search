import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link'
import GlobalStyle from '../pages/GlobalStyle';

const List = (props) => {
    const {data} = props;
    return(
        <SListContainer>
            <GlobalStyle />
            <Head>
                <title>居酒屋検索</title>
            </Head>
            <SMainTitle>近くの居酒屋</SMainTitle>
            {data && data.map((value, index)=> {
                return(
                    <Link href={`/Lists/${value.id}`} key={index}>
                        <SContainer>
                            <SList>
                                <SPicture>
                                    <SImg src={value.photo.mobile.s} alt=""/>
                                </SPicture>
                                <SContent>
                                    <STitle>{value.name}</STitle>
                                    <SAccess>{value.address}</SAccess>
                                </SContent>
                            </SList> 
                        </SContainer>
                    </Link>
                )

            })}
        </SListContainer>
    )
}

export default List;

const SListContainer = styled.div`
`;

const SMainTitle = styled.h1`
    font-size: 3rem;
    text-align: center;
    padding: 1rem 2rem;
  
`;

const SContainer = styled.div`
    width: 98%;
    margin: 0 auto;
    
`;

const SList = styled.div`
    display: flex;
    border-radius: 14px;
    background-color: #fff;
    border: 1px solid;
    margin-bottom: 1rem;
`;

const SPicture = styled.div`
    width: 25%;
`;

const SImg = styled.img`
    border-radius: 14px 0 0 14px;
    height: 7rem;
    width: 100%;
`;

const SContent = styled.div`
    padding-left: 1rem;
    width: 80%;
`;

const STitle = styled.h4`
    margin: 0;
    padding: .5rem 0 0 0;
    font-size: 2rem;
    font-weight: bold;
`;

const SAccess = styled.p`
    font-size: 1.6rem;
    margin: 0;
    padding: .5rem 0 0 0;
`;
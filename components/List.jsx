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
            <SMainTitle>新宿おすすめ居酒屋</SMainTitle>
            {data.map((value, index)=> {
                return(
                    <Link href={`/lists/${data.id}`} key={index}>
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
    margin-bottom: 2rem;
`;

const SPicture = styled.div`
    width: 20%;
`;

const SImg = styled.img`
    border-radius: 14px 0 0 14px;
    height: auto;
    width: 100%;
`;

const SContent = styled.div`
    padding-left: 2rem;
    width: 80%;
`;

const STitle = styled.h4`
    margin: 0;
    padding: 2rem 0 0 0;
    font-size: 1.5rem;
    font-weight: bold;
`;

const SAccess = styled.p`
    margin: 0;
    padding: 1rem 0 0 0;
`;
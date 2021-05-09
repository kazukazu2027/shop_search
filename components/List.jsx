import styled from 'styled-components';
import GlobalStyle from '../pages/GlobalStyle';

export const List = (props) => {
  const { list } = props;
  return (
    <SListContainer>
      <GlobalStyle />
      <SPicture>
        <SImage src={list.photo.pc.l} />
      </SPicture>
      <STitle>{list.name}</STitle>
      <SContent>
        <SIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </SIcon>
        <SP>{list.access}</SP>
      </SContent>
      <SContent>
        <SIconHouse>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </SIconHouse>
        <SP>{list.address}</SP>
      </SContent>
      <SContent>
        <SIconOpen>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </SIconOpen>
        <SP>{list.open}</SP>
      </SContent>
      <SContent>
        <SIconMoney>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </SIconMoney>
        <SP>{list.budget.name}</SP>
      </SContent>
    </SListContainer>
  );
};

const SListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const SPicture = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const SImage = styled.img`
  margin: 0 auto;
  width: 100%;
`;

const STitle = styled.h2`
  font-size: 3rem;
`;

const SContent = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const SIcon = styled.div`
  width: 8%;
  margin-right: 1rem;
`;

const SP = styled.div`
  font-size: 2rem;
  width: 90%;
  margin-top: 0.3rem;
`;

const SIconHouse = styled.div`
  width: 8%;
  margin-right: 1rem;
`;

const SIconOpen = styled.div`
  width: 8%;
  margin-right: 1rem;
`;

const SIconMoney = styled.div`
  width: 8%;
  margin-right: 1rem;
`;

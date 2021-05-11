import { List } from '../../components/List';

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async({params}) => {
  const id = params.id;
  const res = await fetch(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&id=${id}&format=json`
  );
  const json = await res.json();
  const lists = json.results.shop;
  const list = lists[0];
  return {
    props: { list },
  };
}

const PageList = (props) => {
  const { list } = props;
  return <List list={list} />;
};

export default PageList;

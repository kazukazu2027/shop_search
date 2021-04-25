import styled from 'styled-components';
import List from '../components/List'
const keyword = '新宿';
const utf8str = unescape(encodeURIComponent(keyword));

export async function getStaticProps() {
    const res = await fetch(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&keyword=${utf8str}&genre=G001&count=30&format=json`);
    const dataList = await res.json();
    const data = dataList.results.shop;
    
    return {
        props: {
            data,
        }
    };
}

const Lists = (props) => {
    const {data} = props;
    return(
        <List data={data} />
    )
}

export default Lists;

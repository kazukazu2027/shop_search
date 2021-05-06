import API_KEY from "../../api";
import { List } from "../../components/List";

export async function getServerSideProps({params}){
    const id = params.id;
    const res = await fetch(`https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}&id=${id}&format=json`);
    const json = await res.json();
    const lists = json.results.shop;
    const list = lists[0];
    return(
        {
            props:{list}
        }
    )
}

const DataList = (props) => {
    const {list} = props
    return(
        <List list={list} />
    )
}

export default DataList;
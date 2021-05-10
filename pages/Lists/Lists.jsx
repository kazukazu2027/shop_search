import List from "../../components/DataLists";
import axios from "axios";
import axiosJsonAdapter from "axios-jsonp";
import useSWR from "swr";

const fetcher = () => {
  return new Promise((resolve) => {
    const success = (position) => {
      axios
        .get(
          `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&lat=${position.coords.latitude}&lng=${position.coords.longitude}&genre=G001&count=20&format=jsonp`,
          {
            adapter: axiosJsonAdapter,
          }
        )
        .then((res) => {
          const jsonp = res.data;
          const data = jsonp.results.shop;
          if(data.length === 0){
            alert("近くの居酒屋は見つかりませんでした。")
          }else{
            resolve(data);
          }
        });
    };
    const error = () => {
      alert("エラーのため情報が取得できませんた。")
    }
    navigator.geolocation.getCurrentPosition(success, error);
  });
};

const Lists = () => {
  const { data } = useSWR("default", fetcher);
  return (
    <>
      <List data={data} />
    </>
  );
};

export default Lists;

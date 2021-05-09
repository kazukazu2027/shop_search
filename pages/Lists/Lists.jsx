import List from "../../components/DataLists";
import axios from "axios";
import axiosJsonAdapter from "axios-jsonp";
import useSWR from "swr";

// {console.log(process.env.API_KEY)}
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
          resolve(data);
        });
    };
    navigator.geolocation.getCurrentPosition(success);
  });
};

const Lists = () => {
  const { data } = useSWR("default", fetcher);
  console.log(data);
  return (
    <>
      <List data={data} />
    </>
  );
};

export default Lists;

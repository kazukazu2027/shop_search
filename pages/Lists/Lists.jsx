import axios from 'axios';
import axiosJsonAdapter from 'axios-jsonp';
import useSWR from 'swr';
import DataList from '../../components/DataLists';

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
          if (data.length === 0) {
            alert('近くの居酒屋は見つかりませんでした');
            resolve(data);
          } else {
            resolve(data);
          }
          resolve(data);
        });
    };
    const error = () => {
      alert('エラーのため情報が取得できませんた。');
    };
    const options = {
      enableHighAccuracy: true,
      // timeout: 60000,
      // maximumAge: 30000,
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  });
};

const Lists = () => {
  const { data } = useSWR('default', fetcher);
  return (
    <>
      <DataList data={data} />
    </>
  );
};

export default Lists;

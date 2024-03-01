import Chart from "./components/Chart";
import SpendingList from "./components/SpendingList";
import NavigationBar from "../components/NavigationBar";

import { BACKGROUND_COLOR } from "./constants";
const Page = () => {
  const Data = {
    labels: [
      "입출금",
      "증권",
      "기타",
      "입출금",
      "증권",
      "기타",
      "입출금",
      "증권",
      "기타",
    ], //api로 받아올 예정
    datasets: [
      {
        data: [40, 20, 35, 40, 20, 35, 40, 20, 35], //api로 받아올 예정
        backgroundColor: [
          "#ffeb9b",
          "#b5f2ff",
          "#c5f2ba",
          "#ffeb9b",
          "#b5f2ff",
          "#c5f2ba",
          "#ffeb9b",
          "#b5f2ff",
          "#c5f2ba",
        ],
        borderColor: ["#ffeb9b", "#b5f2ff", "#c5f2ba"],
      },
    ],
  };
  //TODO: color random 으로 어떻게 할 지 고민해보기
  // const color = () => {
  //   const colors = [];
  //   for (let i = 0; i < Data.labels.length; i++) {
  //     colors.push(BACKGROUND_COLOR[i % BACKGROUND_COLOR.length]);
  //   }
  //   return colors;
  // };
  // console.log(color());
  const total = Data.datasets[0].data.reduce((acc, cur) => acc + cur, 0);
  return (
    <div className="w-full flex flex-col items-center">
      <NavigationBar title="통계" />

      <div className="my-4">
        <span>지출: {total}원</span>
      </div>
      <Chart data={Data} />
      <SpendingList data={Data} />
    </div>
  );
};

export default Page;

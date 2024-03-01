interface SpendingData {
  data: ChartDataType;
}

const SpendingList = ({ data }: SpendingData) => {
  return (
    <div className="pb-4 mt-4 w-full px-10  max-h-[350px]">
      {data.labels.map((label, index) => (
        <div
          key={index}
          className="flex items-center h-10 justify-between my-2"
        >
          <div className="flex gap-2 items-center">
            <div
              className="w-4 h-4 rounded-full"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            />
            <span>{label}</span>
          </div>

          <span>{data.datasets[0].data[index]}원</span>
        </div>
      ))}
      <div className="h-[52px]" /> {/* for padding bottom by footer*/}
    </div>
  );
};
export default SpendingList;

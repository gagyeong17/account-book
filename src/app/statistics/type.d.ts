type ChartDataType = {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
  }[];
};

type OptionType = {
  value: string;
  label: string;
  icon: string;
};

type SpendingData = {
  date: Date | string;
  amount: number;
  categoryType: OptionType;
  paymentType: OptionType;
  content: string;
};

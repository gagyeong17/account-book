import { useState, ChangeEvent } from "react";

import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import ListBox from "@/app/components/ListBox";

import { CATEGORY_TYPES, PAYMENT_TYPES } from "@/app/constants/form";
const Form = () => {
  const [formData, setFormData] = useState<SpendingData>({
    date: "",
    amount: 0,
    categoryType: CATEGORY_TYPES[0],
    paymentType: PAYMENT_TYPES[0],
    content: "",
  });
  console.log(formData);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleCategoryTypeChange = (event: OptionType) => {
    setFormData({ ...formData, categoryType: event });
  };
  const handlePaymentTypeChange = (event: OptionType) => {
    setFormData({ ...formData, paymentType: event });
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <Input
          id="date"
          type="text"
          placeholder="날짜를 입력해주세요"
          onChangeInput={handleInputChange}
          value={formData.date as string}
          label="날짜"
        />

        <Input
          id="amount"
          type="tel"
          placeholder="금액 입력해주세요"
          onChangeInput={handleInputChange}
          value={formData.amount as number}
          label="금액"
        />
        <ListBox
          value={formData.categoryType}
          onChangeInput={handleCategoryTypeChange}
          list={CATEGORY_TYPES}
          label="분류"
        />
        <ListBox
          value={formData.paymentType}
          onChangeInput={handlePaymentTypeChange}
          list={PAYMENT_TYPES}
          label="자산"
        />
        {/* <Input
          id="categoryType"
          type="text"
          placeholder="분류를 입력해주세요"
          onChangeInput={handleInputChange}
          value={formData.categoryType.label}
          label="분류"
        />
        <Input
          id="paymentType"
          type="text"
          placeholder="자산을 입력해주세요"
          onChangeInput={handleInputChange}
          value={formData.paymentType.label}
          label="자산"
        /> */}
        <Input
          id="content"
          type="text"
          placeholder="내용을 입력해주세요"
          onChangeInput={handleInputChange}
          value={formData.content}
          label="내용"
        />

        <div className="h-6" />
        <Button>저장</Button>
      </div>
    </div>
  );
};

export default Form;

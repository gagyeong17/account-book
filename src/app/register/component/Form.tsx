import { useState, ChangeEvent } from "react";

import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import ListBox from "@/app/components/ListBox";

import { CATEGORY_TYPES, PAYMENT_TYPES } from "@/app/constants/form";
const Form = () => {
  const [formData, setFormData] = useState<SpendingData>({
    date: "",
    amount: "",
    categoryType: { value: "", label: "", icon: "" },
    paymentType: { value: "", label: "", icon: "" },
    content: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = () => {
    console.log({
      ...formData,
      categoryType: formData.categoryType.value,
      paymentType: formData.paymentType.value,
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="w-full flex flex-col items-center"
    >
      <div>
        <Input
          label="날짜"
          id="date"
          onChangeInput={handleInputChange}
          value={formData.date as string}
        />

        <Input
          label="금액"
          id="amount"
          type="tel"
          onChangeInput={handleInputChange}
          value={formData.amount as number}
        />
        <ListBox
          label="분류"
          list={CATEGORY_TYPES}
          value={formData.categoryType}
          onChangeInput={(event: OptionType) => {
            setFormData({ ...formData, categoryType: event });
          }}
        />
        <ListBox
          label="자산"
          list={PAYMENT_TYPES}
          value={formData.paymentType}
          onChangeInput={(event: OptionType) => {
            setFormData({ ...formData, paymentType: event });
          }}
        />
        <Input
          id="content"
          onChangeInput={handleInputChange}
          value={formData.content}
          label="내용"
        />
        <div className="h-6" />
        <Button>저장</Button>
      </div>
    </form>
  );
};

export default Form;

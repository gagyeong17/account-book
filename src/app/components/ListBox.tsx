import { useState } from "react";
import { Listbox } from "@headlessui/react";

type ListBoxProps = {
  value: OptionType;
  onChangeInput: (event: OptionType) => void;
  list: OptionType[];
  label: string;
};
const ListBox = ({ value, onChangeInput, list, label }: ListBoxProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Listbox value={value} onChange={onChangeInput}>
      <Listbox.Button
        onClick={() => setIsFocused(true)}
        className={`flex w-full items-center rounded-none p-4 ${
          isFocused
            ? "border-sky-200 caret-sky-200 border-b-2"
            : "border-gray border-b-2"
        }`}
      >
        {label && (
          <label className="text-gray-500 w-14 text-left">{label}</label>
        )}
        {value.label}
      </Listbox.Button>
      <Listbox.Options>
        {list.map((person) => (
          <Listbox.Option
            onClick={() => setIsFocused(false)}
            key={person.value}
            value={person}
            className="flex items-center justify-between p-2 text-gray-500 hover:bg-gray-100 active:bg-gray-100  cursor-pointer"
          >
            {person.icon} {person.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
export default ListBox;

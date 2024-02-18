import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface Props {
  id: string;
  type?: 'text' | 'password' | 'tel';
  placeholder?: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const CustomInput = ({
  id,
  type = 'text',
  placeholder,
  onChangeInput,
  value,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const inputPasswordType = visiblePassword ? 'text' : 'password';

  return (
    <div className="flex w-full flex-col">
      <div
        onBlur={() => setIsFocused(false)}
        className={`flex w-full items-center justify-between rounded-none border-b-2 border-white p-4 ${
          isFocused
            ? 'border-sky-200 caret-sky-200 border-b border-solid'
            : 'border-gray border-b border-solid'
        }`}
      >
        <input
          id={id}
          className="outline-none relative w-full pr-6 ouline-none border-none bg-transparent text-black"
          onFocus={() => setIsFocused(true)}
          type={type === 'password' ? inputPasswordType : type}
          placeholder={placeholder}
          autoComplete="new-password"
          onChange={onChangeInput}
          value={value}
        />

        {type === 'password' && (
          <div
            className="cursor-pointer"
            onClick={() => setVisiblePassword(!visiblePassword)}
          >
            {visiblePassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;

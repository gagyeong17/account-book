'use client';

import { useState } from 'react';
import Link from 'next/link';

import Button from '../components/Button';
import Input from '../components/Input';

const Page = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    checkPassword: '',
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };
  return (
    <div className="px-10 flex flex-col justify-center items-center">
      <p className="py-10 text-[23px] text-center">
        환영합니다!🎉
        <br />
        가계부를 이용하시려면 <br />
        회원가입이 필요합니다!
      </p>
      <Input
        id="email"
        type="text"
        placeholder="아이디를 입력해주세요"
        onChangeInput={handleInputChange}
        value={loginData.email}
      />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChangeInput={handleInputChange}
        value={loginData.password}
      />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요"
        onChangeInput={handleInputChange}
        value={loginData.password}
      />
      <div className="h-4" />
      <Button>회원가입</Button>
      <Link href="/login">
        <button className="pt-1 hover:underline underline-offset-4 text-black">
          이미 아이디가 있으신가요?
        </button>
      </Link>
    </div>
  );
};

export default Page;

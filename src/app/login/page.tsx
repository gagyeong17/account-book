"use client";

import { useState, ChangeEvent } from "react";
import Link from "next/link";

import Button from "../components/Button";
import Input from "../components/Input";

const Page = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };
  return (
    <div className="px-10 flex flex-col justify-center items-center">
      <p className="py-10 text-[23px]">
        가계부를 이용하려면
        <br />
        로그인이 필요합니다!
      </p>
      <Input
        id="email"
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
      <div className="h-4" />
      <Button>로그인</Button>
      <Link href="/signUp">
        <button className="pt-1 hover:underline underline-offset-4 text-black">
          회원가입 하러가기
        </button>
      </Link>
    </div>
  );
};

export default Page;

import Link from 'next/link';
const Page = () => {
  return (
    <div className="items-center justify-center h-full flex flex-col">
      <h1 className="title-bold my-2 text-[25px]">
        가계부에 오신 것을 환영합니다.🎉
      </h1>
      <div className="flex gap-5">
        <Link href="/signup">
          <button className="hover:underline underline-offset-4 text-black">
            회원가입
          </button>
        </Link>
        <Link href="/login">
          <button className="hover:underline underline-offset-4 text-black">
            로그인
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;

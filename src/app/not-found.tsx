import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/404.png"
        quality={100}
        width={200}
        height={200}
        priority
        alt="404-image"
      />
      <h1 className="title-bold my-5">존재하지 않는 페이지입니다.</h1>
      <Link href="/calendar">
        <button className="rounded-md border-none bg-sky-500 text-white px-10 py-2">
          가계부로 바로가기
        </button>
      </Link>
    </div>
  );
}

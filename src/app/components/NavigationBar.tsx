"use client";

import { memo } from "react";
import { useRouter } from "next/navigation";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
interface Props {
  title?: string;
  leftBtn?: React.ReactNode;
  rightBtn?: React.ReactNode;
  bgColor?: string;
}

function NavigationBar({
  title = "",
  leftBtn = <></>,
  rightBtn,
  bgColor,
}: Props) {
  const router = useRouter();
  return (
    <>
      <section
        className={`border-b-2 border-sky-100 fixed max-w-[479px] top-0 z-[99] flex h-[52px] w-full items-center justify-between bg-[${bgColor}] px-[20px] py-[14px] ${bgColor ??
          "bg-white"}`}
      >
        {/* LEFT BTN */}
        <div className="flex flex-1 items-center justify-start">{leftBtn}</div>
        {/* TITLE */}
        {title && (
          <div className="flex w-full flex-1 items-center justify-center text-base-900 body-1SB">
            {title}
          </div>
        )}
        {/* RIGHT BTN */}
        <div className="flex flex-1 items-center justify-end">
          {rightBtn ? (
            rightBtn
          ) : (
            <button
              className="border-none"
              onClick={() => router.push("/register")}
            >
              <ControlPointIcon sx={{ color: "#e0f2fe", fontSize: "32px" }} />
            </button>
          )}
        </div>
      </section>
      {/* SPACING DIV */}
      <div className="h-[52px] w-full" /> {/* for padding top */}
    </>
  );
}

export default memo(NavigationBar);

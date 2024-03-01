"use client";
import { memo } from "react";
import Link from "next/link";

import PieChartIcon from "@mui/icons-material/PieChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { CALENDAR, STATISTICS } from "../constants/routes";
const Footer = () => {
  const list = [
    { title: "달력", icon: <CalendarMonthIcon />, href: CALENDAR },
    { title: "통계", icon: <PieChartIcon />, href: STATISTICS },
  ];

  return (
    <>
      <div className="h-[52px] w-full" /> {/* for padding bottom */}
      <section className="border-t-2 border-sky-100 bg-white items-center h-[52px] flex flex-row fixed bottom-0 w-full max-w-[479px]">
        {list.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="gap-1 w-1/2 flex items-center justify-center h-full
          hover:bg-sky-100 active:bg-sky-100"
          >
            <button className="border-none">
              {item.icon}
              <span>{item.title}</span>
            </button>
          </Link>
        ))}
      </section>
    </>
  );
};
export default memo(Footer);

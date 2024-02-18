import { memo } from 'react';

interface Props {
  title?: string;
  leftBtn?: React.ReactNode;
  rightBtn?: React.ReactNode;
  bgColor?: string;
}

function NavigationBar({
  title = '',
  leftBtn = <></>,
  rightBtn = <></>,
  bgColor,
}: Props) {
  return (
    <>
      <section
        className={`fixed left-0 top-0 z-[99] flex h-[52px] w-full items-center justify-between bg-[${bgColor}] px-[20px] py-[14px] ${bgColor ??
          'bg-white'}`}
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
        <div className="flex flex-1 items-center justify-end">{rightBtn}</div>
      </section>
      {/* SPACING DIV */}
      <div className="h-[52px] w-full"></div> {/* for padding top */}
    </>
  );
}

export default memo(NavigationBar);

import Link from 'next/link';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PieChartIcon from '@mui/icons-material/PieChart';
const Footer = () => {
  const list = [
    { title: '달력', icon: <CalendarMonthIcon />, href: '/calendar' },
    { title: '통계', icon: <PieChartIcon />, href: '/statistics' },
  ];

  return (
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
  );
};

export default Footer;

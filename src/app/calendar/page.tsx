"use client";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <NavigationBar title="가계부" />
      가계부
      <Footer />
    </div>
  );
};

export default Page;

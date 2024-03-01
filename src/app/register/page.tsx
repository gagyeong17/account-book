"use client";

import { useRouter } from "next/navigation";
import NavigationBar from "../components/NavigationBar";
import Form from "./component/Form";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center">
      <NavigationBar
        title="지출"
        rightBtn
        leftBtn={
          <button className="border-none" onClick={() => router.back()}>
            <KeyboardArrowLeftIcon sx={{ color: "#6b7280" }} />
          </button>
        }
      />
      <Form />
    </div>
  );
};

export default Page;

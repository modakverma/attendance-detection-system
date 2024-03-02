import { Inter } from "next/font/google";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import DashboardPageContent from "@/components/Dashboard/DashboardPageContent";
import Sidebar from "@/components/Sidebar";
import { MouseEventHandler } from "react";

const inter = Inter({ subsets: ["latin"] });

const handleLogoutClick: MouseEventHandler<HTMLButtonElement> = (event) => {
  event.preventDefault();
  signOut();
};

export default function Home({ studentData }: { studentData: any }) {
  const session = useSession();
  const router = useRouter();
  if (session.data === null) {
    router.push("/login");
    return;
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center pt-20 ${inter.className}`}
    >
      <Sidebar />
      <div className="w-full pl-[240px] pr-10 ">
        <button
          onClick={handleLogoutClick}
          className="fixed top-8 right-8 bg-red-400/20 px-10 py-4 hover:bg-red-200/10 rounded-lg transition text-red-400  backdrop-blur-lg"
        >
          LogOut
        </button>
        <h1 className="mb-5 font-light text-lg flex items-center">
          Hi, <span className="text-blue-500">{session?.data?.user?.name}</span>{" "}
          👋🏻
          <div className="relative w-[10px] h-[10px] bg-green-300 mx-10 rounded-full flex items-center justify-center">
            {" "}
            <span className=" w-[14px] h-[14px] bg-green-400 rounded-full absolute animate-ping "></span>
          </div>
          {"("}{" "}
          <span className="text-sm">
            {" "}
            <span className="text-blue-500 uppercase">
              {" "}
              total student count
            </span>
            : {studentData?.length}
            {")"}
          </span>
        </h1>
        <DashboardPageContent data={studentData} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:4500/year=4");
  return {
    props: {
      studentData: data?.data,
    },
    revalidate: 10,
  };
}

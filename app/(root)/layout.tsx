import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-[94px] flex gap-[30px]">
      <SideBar />
      <div className="flex flex-col">
        <NavBar />
        {children}
      </div>
    </div>
  );
}

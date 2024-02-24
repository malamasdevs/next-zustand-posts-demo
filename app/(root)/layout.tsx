import { Sidebar } from "@/components/Sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className=" md:flex  h-full w-25 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="pl-40 pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;

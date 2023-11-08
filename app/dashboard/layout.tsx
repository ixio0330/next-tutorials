import SideNav from "../ui/dashboard/sidenav";

// 레이아웃은 1회만 렌더링
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* 부분 렌더링 */}
        {children} 
      </div>
    </div>
  );
}
import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import Announcements from "@/components/Announcements";

const AdminPage = () => {
  // Sample data for the chart (replace with dynamic values if needed)
  const boys = 20;
  const girls = 25;

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
        </div>

        {/* COUNT CHART */}
        <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart boys={boys} girls={girls} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;

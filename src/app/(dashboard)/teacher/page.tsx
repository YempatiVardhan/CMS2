import Announcements from "@/components/Announcements";
import Bigcalendar from "@/components/Bigcalendar";

// Example event data
const events = [
  { 
    title: 'Meeting with John', 
    start: new Date('2024-11-20T10:00:00'), 
    end: new Date('2024-11-20T11:00:00'), 
    zoomLink: 'https://zoom.us/j/1234567890' 
  },
  { 
    title: 'Lunch Break', 
    start: new Date('2024-11-20T12:00:00'), 
    end: new Date('2024-11-20T13:00:00') 
  },
  { 
    title: 'Team Meeting', 
    start: new Date('2024-11-21T09:00:00'), 
    end: new Date('2024-11-21T10:00:00'),
    zoomLink: 'https://zoom.us/j/0987654321' 
  },
  { 
    title: 'Project Review', 
    start: new Date('2024-11-21T15:00:00'), 
    end: new Date('2024-11-21T16:00:00') 
  }
];

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          {/* Pass the events data to Bigcalendar */}
          <Bigcalendar events={events} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;

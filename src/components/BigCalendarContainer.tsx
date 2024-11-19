import prisma from "@/lib/prisma";
import Bigcalendar from "./Bigcalendar";

const BigcalendarContainer = async ({
  type,
  id,
}: {
  type: "teacherId" | "classId";
  id: string | number;
}) => {
  // Fetch batches
  const batches = await prisma.batch.findMany({
    where: {
      ...(type === "teacherId"
        ? { teacherId: id as number }
        : { id: id as number }),
    },
  });

  // Map batches to calendar events
  const data = batches.flatMap((batch) => {
    const scheduledDays = getScheduledDays(); // Replace with logic for batch schedule
    return scheduledDays.map((day) => ({
      title: `Join: ${batch.zoomLink}`,
      start: day.startTime,
      end: day.endTime,
    }));
  });

  return (
    <div>
      <Bigcalendar events={data} />
    </div>
  );
};

export default BigcalendarContainer;

// Example utility function to generate scheduled days
function getScheduledDays(): { startTime: Date; endTime: Date }[] {
  const now = new Date();
  const days = [1, 3, 5]; // Example: Monday, Wednesday, Friday
  return days.map((day) => {
    const date = new Date(now);
    date.setDate(now.getDate() + ((day - now.getDay() + 7) % 7)); // Adjust to the correct day
    const startTime = new Date(date.setHours(10, 0, 0)); // Example: 10:00 AM
    const endTime = new Date(date.setHours(11, 0, 0)); // Example: 11:00 AM
    return { startTime, endTime };
  });
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import calendar from "react-calendar";
import "react-calendar/dist/calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Eventcalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  const router = useRouter();

  useEffect(() => {
    if (value instanceof Date) {
      router.push(`?date=${value}`);
    }
  }, [value, router]);

  return <calendar onChange={onChange} value={value} />;
};

export default Eventcalendar;
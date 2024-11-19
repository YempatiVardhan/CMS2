"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import calender from "react-calender";
import "react-calender/dist/calender.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Eventcalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  const router = useRouter();

  useEffect(() => {
    if (value instanceof Date) {
      router.push(`?date=${value}`);
    }
  }, [value, router]);

  return <calender onChange={onChange} value={value} />;
};

export default Eventcalender;
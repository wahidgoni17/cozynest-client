"use server";
import { FieldValues } from "react-hook-form";

export const addRequest = async (data: FieldValues) => {
  const res = await fetch(`http://localhost:4000/api/booking/booking-request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const requestInfo = await res.json();

  return requestInfo;
};

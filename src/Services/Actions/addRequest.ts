"use server";
import { FieldValues } from "react-hook-form";

export const addRequest = async (data: FieldValues) => {
  const res = await fetch(`https://cozynest-server.vercel.app/api/booking/booking-request`, {
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

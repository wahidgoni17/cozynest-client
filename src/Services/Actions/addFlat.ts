"use server";
import { FieldValues } from "react-hook-form";

export const addFlat = async (data: FieldValues) => {
  const res = await fetch(`https://cozynest-server.vercel.app/api/flats/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const flatInfo = await res.json();

  return flatInfo;
};

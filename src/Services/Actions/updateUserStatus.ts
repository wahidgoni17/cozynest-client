"use server";
import { FieldValues } from "react-hook-form";

export const updateUserStatus = async (id: string, data: FieldValues) => {
  const res = await fetch(`https://cozynest-server.vercel.app/api/user/status/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();

  return userInfo;
};

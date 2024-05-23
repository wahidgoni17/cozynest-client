"use server";
import { FieldValues } from "react-hook-form";

export const registerUser = async (data: FieldValues) => {
  const res = await fetch(`http://localhost:4000/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await res.json();
  return userInfo;
};

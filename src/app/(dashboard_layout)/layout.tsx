"use client"
import { isLoggedIn } from "@/Services/auth.service";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;

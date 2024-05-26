"use client";
import Loader from "@/components/Shared/Loader";
import { useGetMyFlatRequestQuery } from "@/redux/api/profileApi";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

const MyFlatRequestPage = () => {
  const { data, isLoading } = useGetMyFlatRequestQuery({});
  const columns: GridColDef[] = [
    { field: "location", headerName: "Flat Location", flex: 1 },
    { field: "rent", headerName: "Flat Rent", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];
  const rows = data
    ? data.data.map((item: any) => ({
        id: item.id,
        location: item.flat.location,
        rent: item.flat.rent,
        status: item.status,
      }))
    : [];
  return (
    <Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={rows} columns={columns} />
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default MyFlatRequestPage;

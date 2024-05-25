"use client"
import { useGetAllFlatsQuery } from "@/app/redux/api/flatApi";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

const ManageFlatsPage = () => {
  const {data, isLoading} = useGetAllFlatsQuery({})
  console.log(data);
  const columns: GridColDef[] = [
    { field: "squareFeet", headerName: "Square Feet", flex: 1 },
    { field: "totalRooms", headerName: "Total Rooms", flex: 1 },
    { field: "totalBedrooms", headerName: "Total Bed Rooms", flex: 1 },
    { field: "location", headerName: "Flat Location", flex: 1 },
    { field: "rent", headerName: "Rent", flex: 1 },
    { field: "advanceAmount", headerName: "Advance Amount", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "Edit Status",
      headerName: "Edit Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default ManageFlatsPage;

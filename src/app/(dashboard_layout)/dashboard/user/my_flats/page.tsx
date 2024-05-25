"use client";
import { useGetMyFlatPostsQuery } from "@/app/redux/api/profileApi";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteAFlatMutation } from "@/app/redux/api/flatApi";
import { toast } from "sonner";

const MyFlatPage = () => {
  const { data, isLoading } = useGetMyFlatPostsQuery({});
  const [deleteFlatPost] = useDeleteAFlatMutation();
  console.log(data);

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteFlatPost(id).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("Flat Post deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "squareFeet", headerName: "Square Feet", flex: 1 },
    { field: "totalRooms", headerName: "Total Rooms", flex: 1 },
    { field: "totalBedrooms", headerName: "Total Bed Rooms", flex: 1 },
    { field: "location", headerName: "Flat Location", flex: 1 },
    { field: "rent", headerName: "Rent", flex: 1 },
    { field: "advanceAmount", headerName: "Advance Amount", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton onClick={() => handleDelete(row.id)} aria-label="edit">
              <DeleteIcon sx={{ color: "red" }} />
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

export default MyFlatPage;

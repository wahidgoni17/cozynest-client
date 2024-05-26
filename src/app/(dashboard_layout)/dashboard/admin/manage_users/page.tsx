"use client";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import StatusModal from "./components/StatusModal";

const ManageUsersPage = () => {
  const { data, isLoading } = useGetAllUsersQuery({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "Edit Status",
      headerName: "Edit Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton onClick={() => setIsModalOpen(true)} aria-label="edit">
              <EditIcon />
              <StatusModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                id={row.id}
              />
            </IconButton>
          </Box>
        );
      },
    },
    {
      field: "editRole",
      headerName: "Edit Role",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              // onClick={() => handleStatus(row.id)}
              aria-label="delete"
            >
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

export default ManageUsersPage;

"use client";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import Loader from "@/components/Shared/Loader";
import StatusModal from "../../admin/manage_users/components/StatusModal";
import RoleModal from "../../admin/manage_users/components/RoleModal";

const ManageUsersPage = () => {
  const { data, isLoading } = useGetAllUsersQuery({});
  const [isStatusModalOpen, setIsStatusModalOpen] = useState<boolean>(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<{
    id: string;
    status: string;
    role: string;
  } | null>(null);

  const handleOpenStatusModal = (row: any) => {
    setSelectedRow(row);
    setIsStatusModalOpen(true);
  };

  const handleOpenRoleModal = (row: any) => {
    setSelectedRow(row);
    setIsRoleModalOpen(true);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "editStatus",
      headerName: "Edit Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box>
          <IconButton
            onClick={() => handleOpenStatusModal(row)}
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
        </Box>
      ),
    },
    {
      field: "editRole",
      headerName: "Edit Role",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box>
          <IconButton
            onClick={() => handleOpenRoleModal(row)}
            aria-label="role"
          >
            <EditIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data.data} columns={columns} />
        </Box>
      ) : (
        <Loader />
      )}
      {selectedRow && (
        <StatusModal
          open={isStatusModalOpen}
          setOpen={setIsStatusModalOpen}
          id={selectedRow.id}
          defaultValue={selectedRow.status}
        />
      )}
      {selectedRow && (
        <RoleModal
          open={isRoleModalOpen}
          setOpen={setIsRoleModalOpen}
          id={selectedRow.id}
          defaultValue={selectedRow.role}
        />
      )}
    </Box>
  );
};

export default ManageUsersPage;

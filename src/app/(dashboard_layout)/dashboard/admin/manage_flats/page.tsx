"use client";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import Loader from "@/components/Shared/Loader";
import FlatStatusModal from "./component/FlatStatusModal";

const ManageFlatsPage = () => {
  const { data, isLoading } = useGetAllFlatsQuery({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedFlat, setSelectedFlat] = useState<{ id: string; status: string } | null>(null);

  const handleOpenModal = (row: any) => {
    setSelectedFlat(row);
    setIsModalOpen(true);
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
      field: "editStatus",
      headerName: "Edit Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box>
          <IconButton onClick={() => handleOpenModal(row)} aria-label="edit">
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
      {selectedFlat && (
        <FlatStatusModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          id={selectedFlat.id}
          defaultValue={selectedFlat.status}
        />
      )}
    </Box>
  );
};

export default ManageFlatsPage;

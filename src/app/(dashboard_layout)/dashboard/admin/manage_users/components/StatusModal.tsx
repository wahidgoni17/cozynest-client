import { useChangeStatusMutation } from "@/app/redux/api/userApi";
import FormHelpar from "@/components/Forms/FormHelpar";
import ModalHelpar from "@/components/Forms/ModalHelpar";
import SelectHelpar from "@/components/Forms/SelectHelpar";
import { Button } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const StatusModal = ({ open, setOpen, id }: TProps) => {
  const [updateStatus] = useChangeStatusMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values, id);
    const res = await updateStatus({ id, values });
    if (res?.data?.id) {
      toast.success("User Status Updated");
    }
    setOpen(false);
  };
  return (
    <ModalHelpar open={open} setOpen={setOpen} title="Change Status">
      <FormHelpar onSubmit={handleFormSubmit}>
        <SelectHelpar
          size="small"
          fullWidth={true}
          sx={{
            my: 2,
          }}
          name="status"
          label="Choose A Status"
          items={["ACTIVE", "INACTIVE"]}
        />
        <Button type="submit">Update</Button>
      </FormHelpar>
    </ModalHelpar>
  );
};

export default StatusModal;

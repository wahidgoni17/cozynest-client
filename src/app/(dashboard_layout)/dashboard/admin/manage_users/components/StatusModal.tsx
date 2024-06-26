import { useChangeStatusMutation } from "@/redux/api/userApi";
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
  defaultValue: string;
};

const StatusModal = ({ open, setOpen, id, defaultValue }: TProps) => {
  const [updateStatus] = useChangeStatusMutation();
  console.log(id);
  const handleFormSubmit = async (values: FieldValues) => {
    const res = await updateStatus({ values, id });
    if (res?.data?.data?.id) {
      toast.success("User Status Updated");
    } else {
      toast.error("something went wrong");
    }
    setOpen(false);
  };
  return (
    <ModalHelpar open={open} setOpen={setOpen} title="Change Status">
      <FormHelpar onSubmit={handleFormSubmit}>
        <SelectHelpar
          size="medium"
          fullWidth={true}
          sx={{
            my: 2,
          }}
          name="status"
          defaultValue={defaultValue}
          label="Choose A Status"
          items={["ACTIVE", "INACTIVE"]}
        />
        <Button type="submit">Update</Button>
      </FormHelpar>
    </ModalHelpar>
  );
};

export default StatusModal;

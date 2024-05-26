import { useChangeStatusMutation } from "@/redux/api/userApi";
import FormHelpar from "@/components/Forms/FormHelpar";
import ModalHelpar from "@/components/Forms/ModalHelpar";
import SelectHelpar from "@/components/Forms/SelectHelpar";
import { Button } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateAFlatMutation } from "@/redux/api/flatApi";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  defaultValue?: string;
};

const FlatStatusModal = ({ open, setOpen, id, defaultValue }: TProps) => {
  const [updateStatus] = useUpdateAFlatMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    const res = await updateStatus({ values, id });
    console.log(res);
    if (res?.data?.data?.id) {
      toast.success("Flat Status Updated");
    } else {
      toast.error("something went wrong");
    }
    setOpen(false);
  };
  return (
    <ModalHelpar open={open} setOpen={setOpen} title="Change Flat Status">
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
          items={["PENDING", "APPROVED", "REJECTED"]}
        />
        <Button type="submit">Update</Button>
      </FormHelpar>
    </ModalHelpar>
  );
};

export default FlatStatusModal;

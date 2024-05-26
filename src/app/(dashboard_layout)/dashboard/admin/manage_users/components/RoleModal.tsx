import { useChangeRoleMutation, useChangeStatusMutation } from "@/redux/api/userApi";
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

const RoleModal = ({ open, setOpen, id, defaultValue }: TProps) => {
  const [updateRole] = useChangeRoleMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    const res = await updateRole({ values, id });
    if (res?.data?.data?.id) {
      toast.success("User Role Updated");
    } else {
      toast.error("something went wrong");
    }
    setOpen(false);
  };
  return (
    <ModalHelpar open={open} setOpen={setOpen} title="Change User Role">
      <FormHelpar onSubmit={handleFormSubmit}>
        <SelectHelpar
          size="medium"
          fullWidth={true}
          sx={{
            my: 2,
          }}
          name="role"
          defaultValue={defaultValue}
          label="Choose A Role"
          items={["ADMIN", "USER"]}
        />
        <Button type="submit">Update</Button>
      </FormHelpar>
    </ModalHelpar>
  );
};

export default RoleModal;

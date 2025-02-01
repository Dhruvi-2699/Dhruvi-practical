/* eslint-disable react/prop-types */
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@chakra-ui/react";
import UpdateStatusFrom from "./UpdateStatusFrom";
import { useState } from "react";
export const UpdateStatusPop = ({
  packageId,currentLoaction,
  updateStatus = { updateStatus },
}) => {const [open, setOpen] = useState(false)
  return (
    <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}  size="md" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button
          color={"black"}
          size="sm"
          fontWeight={500}
          backgroundColor={"darkgray"}
          border={"2px solid black"}
          disabled={updateStatus === "Delivered"}
        >
          Update Status
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Status Package</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <UpdateStatusFrom packageId={packageId} setOpen={setOpen} currentLoaction={currentLoaction} updateStatus={updateStatus}/>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

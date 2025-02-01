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
import UpdateLocationFrom from "./UpdateLocationFrom";
import { useState } from "react";
export const UpdateLocationPop = ({ packageId, updateStatus, currentLoaction }) => {
  const [open, setOpen] = useState(false)
   return (
     <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)} size="md" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button
          color={"black"}
          size="sm"
          fontWeight={500}
          backgroundColor={"darkgray"}
          border={"2px solid black"}
          disabled={updateStatus === "Delivered"}
        >
          Update Location
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Location Package</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <UpdateLocationFrom packageId={packageId} setOpen={setOpen} currentLoaction={currentLoaction}/>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

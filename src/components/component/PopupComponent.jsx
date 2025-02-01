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
import AddPackageForm from "./AddPackageForm";
import { useState } from "react";
export const PopupComponent = () => {
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
        >
          Add New Package
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Package</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <AddPackageForm setOpen={setOpen}/>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

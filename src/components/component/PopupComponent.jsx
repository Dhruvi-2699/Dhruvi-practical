import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Button } from '@chakra-ui/react'
import AddPackageForm from "./AddPackageForm"
export const PopupComponent = () => {
  return (
    <DialogRoot size="cover" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button color={'black'} size="sm" fontWeight={500} backgroundColor={'darkgray'} border={'2px solid black'}>
        Add New Package
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <AddPackageForm />
        </DialogBody>
      </DialogContent>
    </DialogRoot>

  )
}

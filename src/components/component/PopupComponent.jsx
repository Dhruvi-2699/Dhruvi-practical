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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          {/* <AddPackageForm /> */}
        </DialogBody>
      </DialogContent>
    </DialogRoot>

  )
}

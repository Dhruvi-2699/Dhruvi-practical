/* eslint-disable react/prop-types */
import {
  AddPackageManager
} from "@/Redux/Action/PackageManagerAction";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

const validationSchema = Yup.object({
  sender: Yup.string().required("Sender Name is required"),
  receiver: Yup.string().required("Receiver Name is required"),
  sourceLocation: Yup.string().required("Source location is required"),
  destinationLocation: Yup.string().required(
    "Destination location is required"
  ),
});

const AddPackageForm = ({setOpen}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      packageId: uuidv4(),
      sender: "",
      receiver: "",
      sourceLocation: "",
      destinationLocation: "",
      currentLoaction: "",
      updateStatus: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const payload = {
        ...values,
        currentLoaction: values.sourceLocation,
        updateStatus: "Shipped",
      };
      dispatch(AddPackageManager(payload));
      setOpen(false)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex gap={4} mb={5}>
        <Box>
          <Text mb={1} fontSize={"sm"}>
            Sender Name
          </Text>
          <Input
            id="sender"
            name="sender"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sender}
            variant="outline"
            size="md"
            mb={1}
          />
          <Text fontSize={"small"} color={"red"}>
            {formik.errors.sender}
          </Text>
        </Box>

        <Box>
          <Text fontSize="sm" mb={1}>
            Receiver Name
          </Text>
          <Input
            id="receiver"
            name="receiver"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.receiver}
            variant="outline"
            size="md"
            mb={1}
          />
          <Text fontSize={"small"} color={"red"}>
            {formik.errors.receiver}
          </Text>
        </Box>
      </Flex>

      <Flex gap={4}>
        <Box>
          <Text fontSize="sm" mb={1}>
            Source Location
          </Text>
          <Input
            id="sourceLocation"
            name="sourceLocation"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sourceLocation}
            variant="outline"
            size="md"
            mb={1}
          />
          <Text fontSize={"small"} color={"red"}>
            {formik.errors.sourceLocation}
          </Text>
        </Box>

        <Box>
          <Text fontSize="sm" mb={1}>
            Destination Location
          </Text>
          <Input
            id="destinationLocation"
            name="destinationLocation"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.destinationLocation}
            variant="outline"
            size="md"
            mb={1}
          />
          <Text fontSize={"small"} color={"red"}>
            {formik.errors.destinationLocation}
          </Text>
        </Box>
      </Flex>

      <Box textAlign="center" mt={5}>
        <Button type="submit" colorScheme="teal" size="md">
          Save
        </Button>
      </Box>
    </form>
  );
};

export default AddPackageForm;

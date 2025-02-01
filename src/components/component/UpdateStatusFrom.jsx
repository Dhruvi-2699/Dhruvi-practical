/* eslint-disable react/prop-types */
import { UpdateStatus } from "@/Redux/Action/PackageManagerAction";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object({
  currentLoaction: Yup.string().required("Sender Name is required"),
  updateStatus: Yup.string().required("Receiver Name is required"),
});

const UpdateStatusFrom = ({ packageId, setOpen, updateStatus, currentLoaction }) => {

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      currentLoaction: currentLoaction ? currentLoaction: "",
      updateStatus: updateStatus? updateStatus: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const payload = { packageId, updateValue: values };
      dispatch(UpdateStatus(payload));
      setOpen(false)
    },
  });

  return (
    <>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Update Status
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Text mb={1} fontSize={"sm"}>
            Status
          </Text>
          <select
            id="updateStatus"
            name="updateStatus"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultValue={formik.values.updateStatus}
            value={formik.values.updateStatus}
          >
            <option value={"Shipped"}>Shipped</option>
            <option value={"In-Transit"}>In-Transit</option>
            <option value={"Delivered"}>Delivered</option>
          </select>
          {/* <Input
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
          /> */}
          <Text fontSize={"small"} color={"red"}>
            {formik.errors.updateStatus}
          </Text>
        </Box>

        <Box>
          <Text fontSize="sm" mb={1}>
            Location
          </Text>
          <Input
            id="currentLoaction"
            name="currentLoaction"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.currentLoaction}
            variant="outline"
            size="md"
            mb={1}
          />
          <Text fontSize={"small"} color={"red"}>
            {formik.errors.currentLoaction}
          </Text>
        </Box>

        <Box textAlign="right" mt={4}>
          <Button type="submit" colorScheme="teal" size="md">
            Save
          </Button>
        </Box>
      </form>
    </>
  );
};

export default UpdateStatusFrom;

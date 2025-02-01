/* eslint-disable react/prop-types */
import { UpdateLocation } from "@/Redux/Action/PackageManagerAction";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object({
  currentLoaction: Yup.string().required("Sender Name is required"),
});

const UpdateLocationFrom = ({ packageId, setOpen,currentLoaction }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      currentLoaction: currentLoaction? currentLoaction : "",
    },
    validationSchema,
    onSubmit: (values) => {
      const payload = { packageId, updateValue: values };
      dispatch(UpdateLocation(payload));
      setOpen(false)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
  );
};

export default UpdateLocationFrom;

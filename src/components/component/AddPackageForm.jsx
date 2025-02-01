import MyContext from "@/Context";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  sender: Yup.string().required("Sender Name is required"),
  receiver: Yup.string().required("Receiver Name is required"),
  sourceLocation: Yup.string().required("Source location is required"),
  destinationLocation: Yup.string().required(
    "Destination location is required"
  ),
});

const AddPackageForm = () => {
  const { state, updateState } = useContext(MyContext);
  const formik = useFormik({
    initialValues: {
      sender: "",
      receiver: "",
      sourceLocation: "",
      destinationLocation: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      updateState([...state, values])
    },
  });

  return (
    <>
      {/* <Box bg="white" p={6} borderRadius="lg" boxShadow="lg" width="50%"> */}
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Add New Package
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <Flex gap={4}>
            <Box>
              <Text>Sender Name</Text>
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
              />
              <Text fontSize={"small"} color={"red"}>
                {formik.errors.sender}
              </Text>
            </Box>

            <Box>
              <Text fontSize="sm">Receiver Name</Text>
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
              />
              <Text fontSize={"small"} color={"red"}>
                {formik.errors.receiver}
              </Text>
            </Box>
          </Flex>

          <Flex gap={4}>
            <Box>
              <Text fontSize="sm">Source Location</Text>
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
              />
              <Text fontSize={"small"} color={"red"}>
                {formik.errors.sourceLocation}
              </Text>
            </Box>

            <Box>
              <Text fontSize="sm">Destination Location</Text>
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
              />
              <Text fontSize={"small"} color={"red"}>
                {formik.errors.destinationLocation}
              </Text>
            </Box>
          </Flex>

          <Box textAlign="right" mt={4}>
            <Button type="submit" colorScheme="teal" size="md">
              Save
            </Button>
          </Box>
        </form>
      {/* </Box> */}
    </>
  );
};

export default AddPackageForm;
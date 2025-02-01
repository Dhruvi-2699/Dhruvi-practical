import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, FormLabel, FormErrorMessage, Button, Grid, Box, Text } from "@chakra-ui/react";

const validationSchema = Yup.object({
    sender: Yup.string().required("Sender Name is required"),
    receiver: Yup.string().required("Receiver Name is required"),
    sourceLocation: Yup.string().required("Source location is required"),
    destinationLocation: Yup.string().required("Destination location is required")
});

const AddPackageForm = () => {
    const formik = useFormik({
        initialValues: {
            sender: '',
            receiver: '',
            sourceLocation: '',
            destinationLocation: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box position="fixed" top="0" left="0" right="0" bottom="0" display="flex" alignItems="center" justifyContent="center" bg="blackAlpha.500">
            <Box bg="white" p={6} borderRadius="lg" boxShadow="lg" width="30%">
                <Text fontSize="lg" fontWeight="bold" mb={4}>Add New Package</Text>
                <form onSubmit={formik.handleSubmit}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                        {/* <Field isInvalid={formik.touched.sender && formik.errors.sender}> */}
                            <FormLabel htmlFor="sender" fontSize="sm">Sender Name</FormLabel>
                            <Input
                                id="sender"
                                name="sender"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sender}
                                variant="outline"
                                size="md"
                            />
                            <FormErrorMessage>{formik.errors.sender}</FormErrorMessage>
                        {/* </Field> */}

                        {/* <Field isInvalid={formik.touched.receiver && formik.errors.receiver}> */}
                            <FormLabel htmlFor="receiver" fontSize="sm">Receiver Name</FormLabel>
                            <Input
                                id="receiver"
                                name="receiver"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.receiver}
                                variant="outline"
                                size="md"
                            />
                            <FormErrorMessage>{formik.errors.receiver}</FormErrorMessage>
                        {/* </Field> */}
                    </Grid>

                    <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
                        {/* <Field isInvalid={formik.touched.sourceLocation && formik.errors.sourceLocation}> */}
                            <FormLabel htmlFor="sourceLocation" fontSize="sm">Source Location</FormLabel>
                            <Input
                                id="sourceLocation"
                                name="sourceLocation"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sourceLocation}
                                variant="outline"
                                size="md"
                            />
                            <FormErrorMessage>{formik.errors.sourceLocation}</FormErrorMessage>
                        {/* </Field> */}

                        {/* <Field isInvalid={formik.touched.destinationLocation && formik.errors.destinationLocation}> */}
                            <FormLabel htmlFor="destinationLocation" fontSize="sm">Destination Location</FormLabel>
                            <Input
                                id="destinationLocation"
                                name="destinationLocation"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.destinationLocation}
                                variant="outline"
                                size="md"
                            />
                            <FormErrorMessage>{formik.errors.destinationLocation}</FormErrorMessage>
                        {/* </Field> */}
                    </Grid>

                    <Box textAlign="right" mt={4}>
                        <Button
                            type="submit"
                            colorScheme="teal"
                            size="md"
                        >
                            Save
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default AddPackageForm;

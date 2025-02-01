/* eslint-disable react/prop-types */
import { Badge, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { UpdateLocationPop } from "./UpdateLocationPop";
import { UpdateStatusPop } from "./UpdateStatusPop";

const CardComponent = ({ packageData }) => {
  const {
    packageId,
    sourceLocation,
    sender,
    receiver,
    currentLoaction,
    updateStatus,
    destinationLocation
  } = packageData;

  return (
    <Flex
      borderBottom={"1px solid #000000"}
      mt={5}
      py={2}
      justifyContent={"space-between"}
    >
      <Box flex={{ base: "1", md: "0.5" }}>
        <Text fontWeight={"bold"}>NO:{packageId}</Text>
        <Text>
          From:{sender}({sourceLocation})
        </Text>
        <Text>To:{receiver}({destinationLocation})</Text>
        <Badge
          borderRadius={"10px"}
          colorPalette={
            updateStatus === "Delivered"
              ? "green"
              : updateStatus === "In-Transit"
              ? "blue"
              : "yellow"
          }
          p={3}
        >
          {updateStatus}
        </Badge>
      </Box>
      <Box flex={{ base: "1", md: "1.5" }}  textAlign={"center"}>
        <Flex justify={"center"} gap={2} flexWrap={"wrap"}>
          <Text fontWeight={"bold"}>CURRENT LOCATION :</Text>
          <Text>{currentLoaction}</Text>
         </Flex>
      </Box>
      <Stack spacing={4} flex={{ base: "1", md: "0.5" }} align={"flex-end"}>
        <UpdateStatusPop packageId={packageId} updateStatus={updateStatus} currentLoaction={currentLoaction} />
        <UpdateLocationPop packageId={packageId} updateStatus={updateStatus} currentLoaction={currentLoaction}/>
      </Stack>
    </Flex>
  );
};

export default CardComponent;

import { Badge, Box, Button, Container, Flex, Text } from "@chakra-ui/react";
function App() {
  return (
    <Container mt={5}>
      <Flex justifyContent={"space-between"}>
        <Text fontSize={"4xl"}>Package List</Text>
        <Button>Add New Package</Button>
      </Flex>
      <Flex
        borderBottom={"1px solid #FFF"}
        mt={5}
        py={2}
        justifyContent={"space-between"}
      >
        <Box>
          <Text fontWeight={"bold"}>NO:#123</Text>
          <Text>From:#123</Text>
          <Text>To:#123</Text>
          <Badge p={3}>Shipped</Badge>
        </Box>
        <Box>
          <Button mb={1}>Add New Package</Button>
          <br />
          <Button>Add New Package</Button>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;

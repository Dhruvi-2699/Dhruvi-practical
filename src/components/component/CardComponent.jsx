import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react';

const CardComponent = () => {
   
    
  return (
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
      <Badge borderRadius={'10px'} backgroundColor={'yellow'} p={3}>Shipped</Badge>
    </Box>
    <Box alignContent={'center'}>
    <Text fontWeight={"bold"}>CURRENT LOCATION : </Text>
    <Text>Vadodara</Text>
    </Box>
    <Box>
      <Button mb={1}  color={'black'} size="sm" fontWeight={500} backgroundColor={'darkgray'} border={'2px solid black'}>Update Status</Button>
      <br />
      <Button  color={'black'} size="sm" fontWeight={500} backgroundColor={'darkgray'} border={'2px solid black'}>Update Location</Button>
    </Box>
         </Flex>
  )
}

export default CardComponent
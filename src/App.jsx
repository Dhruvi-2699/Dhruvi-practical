import { Container, Flex, Text } from '@chakra-ui/react';
import CardComponent from './components/component/CardComponent';
import { PopupComponent } from './components/component/PopupComponent';
function App() {
  return (
    <>
    <Container mt={5}>
      <Flex justifyContent={"space-between"}>
        <Text fontSize={"4xl"}>Package List</Text>
        <PopupComponent />
      </Flex>
     <CardComponent />
    </Container>
    </>
  )
}

export default App

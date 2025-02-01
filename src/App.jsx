import { Container, Flex, Text } from '@chakra-ui/react';
import CardComponent from './components/component/CardComponent';
import { PopupComponent } from './components/component/PopupComponent';
import MyContext, { MyContextProvider } from './Context';
import { useContext } from 'react';
function App() {
  const { state } = useContext(MyContext);
  console.log('state--', state);
  return (
    <MyContextProvider>
    <Container m={10}>
      <Flex justifyContent={"space-between"}>
        <Text fontSize={"4xl"}>Package List</Text>
        <PopupComponent />
      </Flex>
     <CardComponent />
    </Container>
    </MyContextProvider>
  )
}

export default App

import { Container, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CardComponent from "./components/component/CardComponent";
import { PopupComponent } from "./components/component/PopupComponent";
function App() {
  const { packageList } = useSelector((state) => state.packageList);

  return (
    <Container my={10} overflow={'hidden'}>
      <Flex justifyContent={"space-between"} alignItems={'center'}>
        <Text fontSize={"4xl"}>Package List</Text>
        <PopupComponent />
      </Flex>
      {packageList?.length > 0 &&
        packageList?.map((packageData) => (
          <CardComponent
            key={packageData.packageId}
            packageData={packageData}
          />
        ))}
    </Container>
  );
}

export default App;

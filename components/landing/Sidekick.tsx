import { Box, Text, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import GridWrapper from "../../layouts/GridWrapper";
import Butler from "./Butler";

const Sidekick = () => {
  return (
    <Box bg="blackAlpha.900" h="100vh">
      <GridWrapper columns={3}>
        <Flex align="center" justify="center" flexDirection="column" h="100vh">
          <>
            <Heading mt={"48"} as="h3" fontSize="270px" color="white">
              <Flex>
                2,20,000<Text fontSize="100px">+</Text>
              </Flex>
            </Heading>
            <Heading
              as="h4"
              fontSize="4xl"
              mt="4"
              color="white"
              textAlign="center"
            >
              Daily Transactions on Near Token
            </Heading>
          </>
          <Grid
            // h="md"
            mt="12"
            w="100%"
            templateColumns={[`repeat(${3}, 1fr)`, `repeat(${1 + 2}, 1fr)`]}
            templateRows={[`repeat(${1}, 1fr)`, `repeat(${2}, 1fr)`]}
          >
            <GridItem colSpan={[0, 1]} p="4">
              <Butler
                title={"EARN"}
                stat={"Rewards for Holding and Transferring NEAR"}
              />
            </GridItem>
            <GridItem colSpan={1} p="4">
              <Butler
                title={"One of the"}
                stat={"Most Useable & In-Demand Tokens"}
              />
            </GridItem>
            <GridItem colSpan={[0, 1]} p="4">
              <Butler title={"Highly"} stat={"Scalable"} />
            </GridItem>
            {/* <GridItem colSpan={[0, 1]} p="4">
              <Butler title={"We serve"} stat={"50,000 people"} />
            </GridItem>
            <GridItem colSpan={1} p="4">
              <Butler title={"In"} stat={"30 different countries"} />
            </GridItem>
            <GridItem colSpan={[0, 1]} p="4">
              <Butler title={"Who speak"} stat={"100 different languages"} />
            </GridItem> */}
          </Grid>
        </Flex>
      </GridWrapper>
    </Box>
  );
};

export default Sidekick;

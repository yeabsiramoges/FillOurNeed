import React from "react";
import { VStack, Divider, Box, Heading, Input } from "native-base";

export default function SearchBar() {
    return <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
            <Divider />
          </Box>}>
        <VStack w="100%" space={5} alignSelf="center">
          <Heading fontSize="lg">Cupertino</Heading>
          <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="0" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
        </VStack>
        <VStack w="100%" space={5} alignSelf="center">
          <Heading fontSize="lg">Material</Heading>
          <Input placeholder="Search People & Places" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
        </VStack>
      </VStack>;
}
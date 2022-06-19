import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, Input, Center, Image, View, Box, VStack, SectionList, Heading} from "native-base";



export default function EditCommunity({ path }: { path: string }) {
  return (
    <View>
        <SearchBar/>
        <CommunityFeed/>
        <Image source={{uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}/>

    </View>
  );
}

function SearchBar() {
  return <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
          <Divider />
        </Box>}>
      <VStack w="100%" space={5} alignSelf="center">
        <Input placeholder="Search Communities" width="100%" borderRadius="4" py="3" px="1" fontSize="14"/>
      </VStack>
    </VStack>;
}
const data = [{
  title: "Cyan",
  data: ["cyan.100", "cyan.200", "cyan.300", "cyan.400", "cyan.500"]
}, {
  title: "Yellow",
  data: ["yellow.100", "yellow.200", "yellow.300", "yellow.400", "yellow.500"]
}, {
  title: "Violet",
  data: ["violet.100", "violet.200", "violet.300", "violet.400", "violet.500"]
}];

function CommunityFeed() {
  return <Center h="80" w="100%">
  <SectionList maxW="300" w="100%" mb="4" sections={data} keyExtractor={(item, index) => item + index} renderItem={({
  item
}) => <Center py="4" bg={item}>
        {item.split(".")[1]}
      </Center>} renderSectionHeader={({
  section: {
    title
  }
}) => <Center>
        <Heading fontSize="xl" mt="8" pb="4">
          {title}
        </Heading>
      </Center>} />
</Center>;
};


function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});

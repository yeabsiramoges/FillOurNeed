import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { View } from './Themed';
import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider } from "native-base";

export default function Missions({missionText, serviceType, description}: {missionText: string, serviceType: string, description: string}) {
    const now = new Date();
    return <Box alignItems="center" padding={2}>
      <Pressable>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
              <HStack alignItems="center">
                <Badge colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                  {serviceType}
                </Badge>
                <Spacer />
                <Text fontSize={10} color="coolGray.800">
                  {now.toLocaleDateString()}
                </Text>
              </HStack>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                {missionText}
              </Text>
              <Flex>
                {isFocused ? 
                    <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600" alignSelf="flex-start">
                        <Text mt="2" fontSize="sm" color="coolGray.700"> {description} </Text>
                    </Text> : 
                    <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                    Read More
                    </Text>
                }
              </Flex>
            </Box>;
      }}
      </Pressable>
    </Box>;
}

const styles = StyleSheet.create({
    text: {
        borderWidth: 1,
        fontSize: 16,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10
    }
});
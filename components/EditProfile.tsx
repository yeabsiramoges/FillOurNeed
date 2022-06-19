import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Button, View } from 'native-base'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFlq4ModItzY4I-yK7V4vtMO3TlwPtJuE",
  authDomain: "fillourneed-80b86.firebaseapp.com",
  projectId: "fillourneed-80b86",
  storageBucket: "fillourneed-80b86.appspot.com",
  messagingSenderId: "612459122798",
  appId: "1:612459122798:web:0025de3fe6d6c98a6a567f",
  databaseURL: "https://fillourneed-80b86-default-rtdb.firebaseio.com"
};

// Initialize Firebase
initializeApp(firebaseConfig);

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

auth.languageCode = 'it';

const signin = signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (credential != null) {
    const token = credential.accessToken;
    }
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <Box alignItems="center">
      <Button onPress={() => signin }> Sign in! </Button>
    </Box>
    </View>
  );
}

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

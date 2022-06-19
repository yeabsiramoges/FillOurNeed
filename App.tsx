import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFlq4ModItzY4I-yK7V4vtMO3TlwPtJuE",
  authDomain: "fillourneed-80b86.firebaseapp.com",
  projectId: "fillourneed-80b86",
  storageBucket: "fillourneed-80b86.appspot.com",
  messagingSenderId: "612459122798",
  appId: "1:612459122798:web:0025de3fe6d6c98a6a567f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth();
auth.languageCode = 'it';

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (credential != null) {
    const token = credential.accessToken;
    }
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}


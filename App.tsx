import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFlq4ModItzY4I-yK7V4vtMO3TlwPtJuE",
  authDomain: "fillourneed-80b86.firebaseapp.com",
  projectId: "fillourneed-80b86",
  storageBucket: "fillourneed-80b86.appspot.com",
  messagingSenderId: "612459122798",
  appId: "1:612459122798:web:0025de3fe6d6c98a6a567f",
  databaseURL: "https://fillourneed-80b86-default-rtdb.firebaseio.com"
};

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

const app = initializeApp(firebaseConfig)
const database = getDatabase(app);



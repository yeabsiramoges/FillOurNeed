import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
initializeApp(firebaseConfig);
// const database = getDatabase(app);

// import { ref, set } from "firebase/database";

// function writeUserData( { name }: { name: string }, { est_time }: { est_time: number }, { mission_desc }: { mission_desc: string }) {
//   const db = getDatabase()
//   const reference = ref(db)

//   set(reference, 
//       {username: name,
//       time: est_time,
//       mission : mission_desc
//     });
// }

// writeUserData('paula', 60, 'get lost cat');



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


import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Box, Button, View } from 'native-base'

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

export default function SignIn(){
    return(
        <View>
        <Box alignItems="center">
        <Button onPress={() => signin }> Sign in! </Button>
        </Box>
        </View>
    );
}

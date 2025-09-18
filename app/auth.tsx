import { useState } from "react";
import { KeyboardAvoidingView, Platform, View, StyleSheet} from "react-native";
import {Button, Text, TextInput, useTheme} from "react-native-paper"

export default function AuthScreen() {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string | null>("")

    const theme = useTheme()


    const handleAuth = async () => {
        if (!email || !password ){
            setError("Please fill in all flieds.")
            return;
        }
    };

    const handleSwitchMode = ()=> {
        setIsSignUp((prev) => !prev)
    }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      >
        <View  style={styles.content}>
            <Text style={styles.title} variant="headlineMedium">{isSignUp ? "Create account" : "Welcome Back"}</Text>

            <TextInput style={styles.input} label="Email" autoCapitalize="none" keyboardType="email-address" placeholder="example@gmail.com" mode="outlined" onChangeText={setEmail}/>
            <TextInput style={styles.input} label="Password" autoCapitalize="none" keyboardType="email-address" mode="outlined" onChangeText={setPassword}/>

            {error && (
                <Text style={{color: theme.colors.error}}>{error}</Text>
            )}
            <Button mode="contained" style={styles.button} onPress={handleAuth}>
               {isSignUp ? "Sign Up" : "Sign In"}
            </Button>

            <Button mode="text" style={styles.switchModeButton} onPress={handleSwitchMode}>
                {isSignUp ?  "Already have an account? Sign In" : "Don't have an account? Sign Up"}
            </Button>

        </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "f5f5f5"
    },
     content: {
        flex: 1,
       padding: 16,
       justifyContent: "center",
    },
    title: {
       textAlign: "center",
       marginBottom: 24,
    },
    input: {
       marginBottom: 16,
    },
    button: {
       marginTop: 8
    },
    switchModeButton: {
       marginTop: 16
    },

})
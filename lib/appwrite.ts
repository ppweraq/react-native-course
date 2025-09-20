import { Account, Client, Databases } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_PLATFORM!);

//   EXPO_PUBLIC_APPWRITE_PROJECT_ID=68cc109c000438db49ca
// EXPO_PUBLIC_APPWRITE_PROJECT_NAME="habit-tracker"
// EXPO_PUBLIC_APPWRITE_ENDPOINT=https://nyc.cloud.appwrite.io/v1

export const account = new Account(client)
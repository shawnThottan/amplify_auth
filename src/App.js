import { Amplify } from "aws-amplify";

import {
  Authenticator,
  View,
  ThemeProvider,
  defaultDarkModeOverride,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { useRef } from "react";

import DashboardComponent from "./components/dashboard";

import { handleSignUp } from "./utils";
import SignUpForm from "./components/signupForms";
import useHeader from "./components/header";

Amplify.configure(awsExports);

const theme = {
  name: "my-theme",
  overrides: [defaultDarkModeOverride],
};

export default function App() {
  const favoriteSportRef = useRef(null);

  return (
    <ThemeProvider theme={theme} colorMode="system">
      <View id='app-view' backgroundColor="var(--amplify-colors-background-primary)">
        <Authenticator
          components={{
            Header: useHeader,
            SignUp: {
              FormFields: () => SignUpForm(favoriteSportRef),
            },
          }}
          services={{
            handleSignUp: (formData) =>
              handleSignUp(formData, favoriteSportRef),
          }}
        >
          {({ signOut, user }) => (
            <DashboardComponent signOut={signOut} user={user} />
          )}
        </Authenticator>
      </View>
    </ThemeProvider>
  );
}

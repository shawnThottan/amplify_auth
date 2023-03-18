import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { useRef } from "react";

import DashboardComponent from "./components/dashboard";

import { handleSignUp } from "./utils/functions";
import SignUpForm from "./components/signupForms";
import useHeader from "./components/header";

Amplify.configure(awsExports);

export default function App() {
  const favoriteSportRef = useRef(null);

  return (
    <Authenticator
      components={{
        Header: useHeader,
        SignUp: {
          FormFields: () => SignUpForm(favoriteSportRef),
        },
      }}
      services={{
        handleSignUp: (formData) => handleSignUp(formData, favoriteSportRef),
      }}
    >
      {({ signOut, user }) => (
        <DashboardComponent signOut={signOut} user={user} />
      )}
    </Authenticator>
  );
}

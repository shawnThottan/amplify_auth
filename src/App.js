import { Amplify } from "aws-amplify";

import { Auth } from "@aws-amplify/auth";
import {
  Authenticator,
  useTheme,
  View,
  SelectField,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { useRef } from "react";
import { SPORTS } from "./constants";
Amplify.configure(awsExports);

export default function App() {
  const favoriteSportRef = useRef(null);

  return (
    <Authenticator
      components={{
        Header() {
          const { tokens } = useTheme();

          return (
            <View textAlign="center" padding={tokens.space.large}>
              <h1>Sports Center</h1>
            </View>
          );
        },
        SignUp: {
          FormFields() {
            return (
              <>
                <Authenticator.SignUp.FormFields />
                <SelectField
                  name="mySelectField"
                  label="Favorite Sport"
                  options={SPORTS}
                  ref={favoriteSportRef}
                  required
                />
              </>
            );
          },
        },
      }}
      services={{
        async handleSignUp(formData) {
          let { username, password, attributes } = formData;
          attributes["custom:favorite_sport"] = favoriteSportRef.current.value.toUpperCase();

          return Auth.signUp({
            username,
            password,
            attributes,
            autoSignIn: {
              enabled: true,
            },
          });
        },
      }}
    >
      {({ signOut, user }) => {
        return (
          <main>
            <h1>Hello {user.attributes.email}</h1>
            <h2>
              Your favorite Sport: {user.attributes["custom:favorite_sport"]}
            </h2>
            <button onClick={signOut}>Sign out</button>
          </main>
        );
      }}
    </Authenticator>
  );
}

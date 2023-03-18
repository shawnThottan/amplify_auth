import {
    Authenticator,
    SelectField,
  } from "@aws-amplify/ui-react";
  import { SPORTS } from "../constants";
  
const SignUpForm = (favoriteSportRef) => (
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

export default SignUpForm;
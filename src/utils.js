import { Auth } from "@aws-amplify/auth";

const handleSignUp = async (formData, favoriteSportRef) => {
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
  };

export {
    handleSignUp
}
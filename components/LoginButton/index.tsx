import React from "react";
import { useAuthenticate } from "../../hooks/useAuthenticate";

import { Button } from "react-native";

export const LoginButton = ({
  clientId,
  redirectUri,
  onAuthenticationSuccessful,
  onAuthenticationFailed,
  enableAutomaticAuthentication,
  scopes = [],
  title = "Log in",
  ...rest
}: any) => {
  const {
    authenticate,
    authenticationInProgress,
    authenticationClientInitialized,
  } = useAuthenticate({
    clientId,
    redirectUri,
    onAuthenticationSuccessful,
    onAuthenticationFailed,
    scopes,
    enableAutomaticAuthentication,
  });

  const loginButtonIsDisabled =
    authenticationInProgress || authenticationClientInitialized == false;

  return (
    <Button
      title={title}
      onPress={authenticate}
      loading={loginButtonIsDisabled}
      disabled={loginButtonIsDisabled}
      {...rest}
    />
  );
};

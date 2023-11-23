"use client";

import { api } from "@/trpc/react";
import { Button } from "../ui/button";

export default function SignIn() {
  const signIn = api.auth.signIn.useMutation({
    onSuccess: (data) => console.log({ data }),
  });

  const handleSignIn = () => {
    const response = signIn.mutate({
      firstName: "rumeet",
      lastName: "goradia",
      password: "password",
    });
    console.log({ response });
  };

  return (
    <>
      Not signed in <br />
      <Button onClick={handleSignIn}>Sign in</Button>
    </>
  );
}

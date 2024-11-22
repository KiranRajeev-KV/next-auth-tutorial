"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";
function SignIn() {

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Choose a login method</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("google")}
          >
            Login with Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("github")}
          >
            Login with Github
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;

"use client"; // Ensure this is a client component for interactivity
import React, { useState } from "react";
import { signOut } from "next-auth/react"; // Import the next-auth signOut method
import { useRouter } from "next/navigation"; // For redirecting after sign out

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"; // Import the AlertDialog component
import { Button } from "@/components/ui/button";

const SignOutPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control the dialog visibility

  // Function to handle sign out
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" }); // Sign out and redirect to home page
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {/* AlertDialog component */}
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            onClick={() => setIsDialogOpen(true)}
          >
            Sign Out
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign Out</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to sign out? You will be redirected to the
              homepage.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                handleSignOut(); 
                setIsDialogOpen(false); 
              }}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SignOutPage;

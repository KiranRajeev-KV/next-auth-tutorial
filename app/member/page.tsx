import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Member = async () => {
  const session = await getServerSession(options);

  // If no session, redirect to the sign-in page
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/member");
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-white">
      <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-center mb-4">Member - Server</h1>
        <p className="text-xl font-medium text-gray-700 text-center mb-4">This page is rendered server side</p>
        <div className="mt-4">
          <p className="text-lg text-gray-900">Current User</p>
          <p className="text-md text-gray-600">Name: <span className="font-semibold">{session?.user?.name}</span></p>
          <p className="text-md text-gray-600">Email: <span className="font-semibold">{session?.user?.email}</span></p>
          <p className="text-md text-gray-600">Role: <span className="font-semibold">{session?.user?.role}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Member;

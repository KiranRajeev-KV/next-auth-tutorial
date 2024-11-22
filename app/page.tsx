const Home = () => {
  return (
    <div className="min-h-[90vh] bg-gray-50 flex items-center justify-center">
    <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-3xl w-full">
      <h1 className="text-5xl font-extrabold mb-4">
        NextAuth Tutorial Project!
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        This is a project where I learned how to implement authentication in a Next.js app using NextAuth. Below is a summary of what I've learned:
      </p>

      <div className="space-y-4 mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">What I Learned:</h2>
        <ul className="text-lg text-gray-600 list-disc list-inside">
          <li><strong>Google & GitHub Authentication:</strong> I integrated Google and GitHub login using NextAuth, allowing users to authenticate with their existing accounts.</li>
          <li><strong>Protecting Pages (Client & Server-Side):</strong> I learned how to protect both client-side and server-side pages, ensuring that only authorized users can access certain routes.</li>
          <li><strong>Middleware Usage:</strong> I explored how to use middleware to handle authentication and authorization, protecting certain routes or performing additional checks before serving content.</li>
          <li><strong>Role-Based Access:</strong> I implemented role-based access control, where users are granted different levels of access based on their role (admin, member, guest, etc.).</li>
        </ul>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        This project helped me understand how to manage authentication, handle session data securely, and implement role-based access control in a Next.js application.
      </p>

      <div className="space-x-4">
      </div>
    </div>
  </div>
  );
};

export default Home;

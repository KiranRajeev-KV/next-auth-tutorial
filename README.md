# Next.js Authentication with NextAuth

This is a **Next.js** project implementing authentication with **NextAuth** using **Google** and **GitHub** as authentication providers. It includes role-based access control, server-side and client-side page protection, and middleware for managing user sessions and access.

## Features
- **Google & GitHub Authentication**: Users can sign in using their existing Google or GitHub accounts through NextAuth.
- **Role-Based Access Control (RBAC)**: Access to different pages is restricted based on user roles (admin, member, guest).
- **Client-Side Protection**: Protected pages ensure users are authenticated before access.
- **Server-Side Protection**: Role-based protection for pages with server-side authentication checks.
- **Middleware**: Middleware is used to handle authentication and authorization across routes.

## Screenshots
![image](https://github.com/user-attachments/assets/69776be8-9bf7-4d0a-8a2d-c290ef716bbe)


## Installation

To get started with this project, follow these steps:

### 1. Clone the repository to your local machine
```bash
git clone https://github.com/KiranRajeev-KV/next-auth-tutorial.git
```

### 2. Navigate to the project folder
```bash
cd next-auth-tutorial
```
### 3. Install dependencies
```bash
npm install
```

### 4. Set up environment variables
Create a .env.local file in the root of the project and add the following environment variables:
```
GITHUB_ID = your-github-client-id
GITHUB_SECRET = your-github-client-secret
GOOGLE_ID = your-google-client-id
GOOGLE_SECRET = your-google-client-secret
NEXTAUTH_URL = http://localhost:3000
NEXTAUTH_SECRET = your-nextauth-secret
```

### 5. Run the development server
```bash
npm run dev
```
Visit http://localhost:3000 in your browser to see the project in action.

## Usage
- Authentication: The project uses NextAuth for authentication. Users can log in with their Google or GitHub accounts.
- Role-Based Access: Users are assigned roles (Admin, Github User, Google User) and can access pages based on their roles.
- Page Protection: Some pages are protected and can only be accessed by authenticated users or users with specific roles (e.g., admins).

## Technologies Used
- Next.js: A React framework for building server-side rendered applications.
- NextAuth.js: Authentication library for Next.js applications.
- Tailwind CSS: Utility-first CSS framework for styling the components.

## Conclusion
This project demonstrates how to integrate authentication in a Next.js app using NextAuth, with support for role-based access control, middleware, and protected routes. It also shows how to set up and secure your app with Google and GitHub as OAuth providers.

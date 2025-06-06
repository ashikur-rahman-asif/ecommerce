import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-5xl font-extrabold tracking-tighter text-center my-6">
            Welcome to
            <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-text-pulse">
              Pom Pom
            </span>
            E-commerce
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

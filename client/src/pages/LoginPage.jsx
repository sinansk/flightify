import { Button } from "@/components/ui/button";
import { login } from "@/services/authService";
import React, { useState } from "react";
import PlaneImage from "../assets/plane-login.jpg";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(formData);
      dispatch(setUser(data));
      navigate("/", { replace: true });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Not logined!",
        description: "Error during login.",
      });
      console.error("Error during login", error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="m-auto rounded-[0.5rem] border bg-background shadow sm:w-fit">
        <div className="container relative hidden h-[600px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">
          <img className="m-auto h-60 w-full" src={PlaneImage} />
          <a
            className="absolute right-4 top-4 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:right-8 md:top-8"
            href="/register"
          >
            Register
          </a>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
                <p className="text-sm text-muted-foreground">
                  Enter your credentials below to log in to your account
                </p>
              </div>
              <div className="grid gap-6">
                <form type="submit" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <div className="grid gap-1">
                      <label
                        className="sr-only text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="email"
                        placeholder="name@example.com"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        onChange={handleChange}
                      />
                      <input
                        name="password"
                        type="password"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id="passowrd"
                        placeholder="*****"
                        autoCapitalize="none"
                        autoCorrect="off"
                        onChange={handleChange}
                      />
                    </div>
                    <Button className="" variant="default">
                      Sign In with Email
                    </Button>
                  </div>
                </form>
              </div>
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <a
                  className="underline underline-offset-4 hover:text-primary"
                  href="/terms"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="underline underline-offset-4 hover:text-primary"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

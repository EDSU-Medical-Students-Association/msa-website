"use client";

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Container } from "~/components/layouts/base/container";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";

import { crismonPro } from "~/fonts";
import { cn } from "~/lib/utils";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { useState, useEffect } from "react"; // Import useState and useEffect for managing state and side effects
import {signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "~/components/firebase/firebase"; // Updated import path
import { FormButton } from "~/components/ui/form-button";

const userSignInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(7, "Password must be at least 7 characters long"),
});

export type UserSignUpSchema = z.infer<typeof userSignInSchema>;

const SignIn = () => {
  const[email,setEmail]= useState<string>('')
  const[pswd,setPswd]= useState<string>('')
  const[check,setCheck]= useState<Boolean>(false)
  const [message, setMessage] = useState(""); // State for error messages
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // State for checking auth
  const router = useRouter(); // Router for redirection
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        router.push("/");
      } else {
        setIsCheckingAuth(false);
      }
    });

    return () => unsubscribe();
  }, [router]);


  const onSubmit = async (e:any) => {
    e.preventDefault();
    setCheck(true);
    // setMessage(""); // Reset message state
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        pswd,
      );
      router.push("/"); // Redirect to the home page
    } catch (error: any) {

      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        setMessage("Incorrect user name or password");
        setCheck(false);
      } else if (error.code === "auth/invalid-credential") {
        setMessage("Incorrect user name or password");
        setCheck(false);
      } else {
        setMessage("Error signing in: " + error.message);
        setCheck(false);
      }
    }
  };
  const signInWithGoogle = async () => {
    setCheck(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setCheck(false);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      setCheck(false);
    }
  };

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }


  const loader = ()=>{
    if(check){
      return(<span style={{marginLeft:'5.6rem'}} className="loading loading-spinner loading-md"></span>)
    }
    else {
      return (<button className="btn btn-primary">Login</button>)
    }
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container className="w-full md:max-w-lg lg:max-w-xl p-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Sign In To <span className="font-extrabold">EDSUMSA</span> Portal
          </h1>
          {message && <p className="text-red-500 mb-4">{message}</p>}
        </div>
        <div className="card bg-base-100 w-full shadow-2xl p-6 md:p-8 lg:p-10">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setPswd(e.target.value)}
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
                >
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 3C5 3 1.73 7.11 1 9.5 1.73 11.89 5 16 10 16c5 0 8.27-4.11 9-6.5C18.27 7.11 15 3 10 3zm0 11a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a9 9 0 018.94 8.12 1 1 0 01-.75 1.1 1 1 0 01-1.1-.74A7 7 0 103.9 9.49a1 1 0 01-1.1.74 1 1 0 01-.75-1.1A9 9 0 0110 2zm0 16a8.96 8.96 0 01-7.55-4.02A8.967 8.967 0 0110 4a8.96 8.96 0 017.55 4.02A8.967 8.967 0 0110 18z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {loader()}
            </div>
          </form>
          <div className="mt-6">
            <Button variant={"outline"} asChild onClick={signInWithGoogle}>
              <Link href="">
                <span>
                  <FcGoogle />
                </span>
                <span className="px-2">Sign in with Google</span>
              </Link>
            </Button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              <Link href={"sign-up"}>Dont have an account? Sign up</Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignIn;

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
              <input
                onChange={(e) => setPswd(e.target.value)}
                type="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
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

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
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
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
      <section>
       <Container className="grid justify-center">
         <div style={{marginTop:"50%"}} className="py-20 text-center">
            {message!="" && <div><p style={{color:'red'}}>{message}</p></div>}
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={onSubmit} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input onChange={(e)=>setPswd(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    {loader()}
                  </div>
                </form>
                 <div style={{paddingBottom:"2rem"}}>
                   <Button variant={"outline"} asChild>
                    <Link href="">
                      <span>
                        <FcGoogle />
                      </span>
                      <span className="px-2">Sign in with Google</span>
                    </Link>
                  </Button>
                 </div>
                <div>
                  <p style={{fontSize:"12px"}}><a href={'sign-up'} >Dont have an account? Sign up</a></p>
                </div>
              </div>
         </div>
       </Container>
      </section>


  )
};

export default SignIn;

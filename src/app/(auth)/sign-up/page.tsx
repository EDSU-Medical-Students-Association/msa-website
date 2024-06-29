"use client";

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Container } from "~/components/layouts/base/container";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";

import { crismonPro } from "~/fonts";
import { cn } from "~/lib/utils";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "~/components/firebase/firebase";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import green tick icon
import { FormButton } from "~/components/ui/form-button";

const userSignUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(7, "Password must be at least 7 characters long"),
});

export type UserSignUpSchema = z.infer<typeof userSignUpSchema>;

const SignUp = () => {
   const[email,setEmail]= useState<string>('')
  const[pswd,setPswd]= useState<string>('')
  const[check,setCheck]= useState<Boolean>(false)
  const [message, setMessage] = useState(""); // State for success or error messages
  const router = useRouter(); // Router for redirection


  const onSubmit = async (e:any) => {
    e.preventDefault();
    setCheck(true);
    try {
      await createUserWithEmailAndPassword(auth, email, pswd)
          .then(()=>{
            router.push("/");
          })
    }
    catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setMessage("This account exists, login instead");
        setCheck(false);
      } else {
        setMessage("Error creating account: ");
        setCheck(false);
      }
    }
  };


    const loader = ()=>{
    if(check){
      return(<span style={{marginLeft:'5.6rem'}} className="loading loading-spinner loading-md"></span>)
    }
    else {
      return (<button className="btn btn-primary">Sign Up</button>)
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
                  <p style={{fontSize:'12px'}}><a href="/sign-in" >Already have an account? Sign in</a></p>
                </div>
              </div>
         </div>
       </Container>
      </section>
  );
};

export default SignUp;

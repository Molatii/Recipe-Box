"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SignUpFormDataType } from "@/utils/types";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";

const SignUpForm = () => {
  const initialValues: SignUpFormDataType = {
    email: "",
    password: "",
    username: "",
    country: "",
    userProfession: "",
  };

  //Form fields validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address is Required"),
    username: Yup.string().required("Username is required"),
    userProfession: Yup.string().required("User profession  is required"),
    country: Yup.string().required("Country Name is required"),
    password: Yup.string().required("Password is required"),
  });
    
  const userProfession = ["Chef", "Home Chef"];

  // SignInUser function
  const SignInUser = (data: SignUpFormDataType) => {
    console.log("Form data:", data);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: SignUpFormDataType) => SignInUser(values)}
    >
      <Form className="flex flex-col p-10 justify-center items-center">
        <div className="bg-green-500   justify-center lg:mt-2 mt-1 mb-4 text-center text-white font-extrabold p-4 rounded-full">
          <FaRegUser size={30} />
        </div>
        <ErrorMessage
          name="username"
          component="div"
          className="text-gray-600 text-left ml-2 text-sm font-semibold text-md mt-2"
        />
        <Field
          type="text"
          name="username"
          placeholder="Your Username"
          className="p-2 border text-base text-gray-600 border-green-500 
                sm:w-[80%] w-full sm:h-14 h-12 rounded-tl-md rounded-bl-md shadow-md shadow-green-500 mb-4"
        />
        <ErrorMessage
          name="country"
          component="div"
          className="text-gray-600 text-left ml-2 text-sm font-semibold text-md mt-2"
        />
        <Field
          type="text"
          name="country"
          placeholder="Your Country Name"
          className="p-2 border text-base text-gray-600 border-green-500 
                sm:w-[80%] w-full sm:h-14 h-12 rounded-tl-md rounded-bl-md shadow-md shadow-green-500 mb-4"
        />
        <ErrorMessage
          name="userProfession"
          component="div"
          className="text-gray-600 text-left ml-2 text-sm font-semibold text-md mt-2"
        />
        <Field
          as="select"
          name="userProfession"
          className="p-2 border text-base text-gray-600 border-green-500 
                sm:w-[80%] w-full sm:h-14 h-12 rounded-tl-md rounded-bl-md shadow-md shadow-green-500 mb-4"
        >
          <option value="" disabled className=" text-gray-600 ">
            Select Your Profession
          </option>
          {userProfession.map((profession) => (
            <option
              key={profession}
              value={profession}
            >
              {profession}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name="email"
          component="div"
          className="text-gray-600 text-left ml-2 text-sm font-semibold text-md mt-2"
        />
        <Field
          type="email"
          name="email"
          placeholder="Your email address"
          className="p-2 border text-base text-gray-600 border-green-500 
                sm:w-[80%] w-full sm:h-14 h-12 rounded-tl-md rounded-bl-md shadow-md shadow-green-500 mb-4"
        />
        <ErrorMessage
          name="password"
          component="div"
          className="text-gray-600 text-left ml-2 text-sm font-semibold text-md mt-2"
        />
        <Field
          type="password"
          name="password"
          placeholder="Your password"
          className="p-2 border text-base text-gray-600 border-green-500 
               sm:w-[80%] w-full sm:h-14 h-12 rounded-tl-md rounded-bl-md shadow-md shadow-green-500 mb-4"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-xl font-bold not-italic shadow-md shadow-green-500
             rounded-md text-white px-4 mt-8 py-2 sm:w-[80%] w-full sm:h-14 h-12"
        >
          Sign Up
        </button>
        <div className="w-full sm:w-[80%] flex mt-4 text-gray-600 text-xs justify-between">
          <p>
            Already Have an account?
            <span className="text-green-500 font-medium hover:text-green-600">
              <Link href="/sign-in"> Sign In</Link>
            </span>
          </p>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;

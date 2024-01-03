"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormDataType} from "@/utils/types";
import { FaRegUser } from "react-icons/fa6";

const ForgotPasswordForm = () => {
  const initialValues: FormDataType = {
    email: "",
  };

  //Form fields validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email Address Required"),
    password: Yup.string().required("Password is required"),
  });

  // SignInUser function
  const SignInUser = (data: FormDataType) => {
    console.log("Form data:", data);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: FormDataType) => SignInUser(values)}
    >
      <Form className="flex flex-col p-10 justify-center items-center">
        <div className="bg-green-500   justify-center lg:mt-20 mt-8 mb-14 text-center text-white font-extrabold p-4 rounded-full">
          <FaRegUser size={30} />
        </div>
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
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-xl font-bold not-italic shadow-md shadow-green-500
             rounded-md text-white px-4 mt-8 py-2 sm:w-[80%] w-full sm:h-14 h-12"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;

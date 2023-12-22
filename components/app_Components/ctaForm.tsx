"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormDataType } from "@/utils/types";

const CtaForm = () => {
  const initialValues: FormDataType = {
    email: "",
  };

  //email field validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address Required"),
  });

  //user subscribe to recipe box updates Function
  const UserSubscription = (data: FormDataType) => {
    console.log("Form data:", data);
  };

  return (
    <div className="mb-4 mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: FormDataType) => UserSubscription(values)}
      >
        <Form className="flex flex-col">
          <ErrorMessage
            name="email"
            component="div"
            className="text-gray-600 text-left ml-2 text-sm font-semibold text-md mt-2"
          />
          <div className="flex flex-row">
            <Field
              type="email"
              name="email"
              placeholder="Your email address"
              className="p-2  border text-base text-gray-600 border-green-500 lg:w-[400px]
               md:w-[250px] w-full sm:h-14 h-12 rounded-tl-md rounded-bl-md shadow-md shadow-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-xl font-bold not-italic shadow-md shadow-green-500
             rounded-r-md rounded-br-md text-white px-4 py-2 mr-2 sm:w-[232px] w-full sm:h-14 h-12"
            >
              Subscribe
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CtaForm;

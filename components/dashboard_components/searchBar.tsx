"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoIosSearch } from "react-icons/io";
import { SearchDataType } from "@/utils/types";

function SearchBar() {
  const initialValues: SearchDataType = {
    searchData: "",
  };

  //Form fields validation
  const validationSchema = Yup.object({
    searchData: Yup.string().required("Email Address Required"),
  });

  // Search function
  const searchRequest = (data: SearchDataType) => {
    console.log("Form data:", data);
  };
  return (
    <div className="flex flex-col w-11">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: SearchDataType) => searchRequest(values)}
      >
        <Form className="flex flex-col">
          <ErrorMessage
            name="searchData"
            component="div"
            className="text-gray-600 text-left ml-2 text-xs font-semibold"
          />
          <Field
            type="text"
            name="searchData"
            placeholder="Search..."
            className="p-2 border text-base text-gray-600 border-green-500 
                h-6 rounded shadow-md shadow-green-500"
          />
          <button type="submit" className="">
            <IoIosSearch />
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default SearchBar;

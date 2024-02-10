"use client";

import { Formik, Form, Field } from "formik";
import { IoIosSearch } from "react-icons/io";
import { SearchDataType } from "@/utils/types";


function SearchBar() {
  const initialValues: SearchDataType = {
    searchData: "",
  };

   // Search function
  const searchRequest = (data: SearchDataType) => {
    console.log("Form data:", data);
  };
  return (
    <div className="flex flex-col w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={(values: SearchDataType) => searchRequest(values)}
      >
        <Form className="flex flex-row">
          <Field
            type="text"
            name="searchData"
            placeholder="Search..."
            className="p-2 border text-base text-gray-600 w-full h-10 rounded-tl-md rounded-bl-md"
          />
          <button
            type="submit"
            className="bg-slate-600 hover:bg-green-500  hover:shadow-green-500 shadow-md shadow-slate-600
             rounded-r-md rounded-br-md text-white p-2 h-10"
          >
            <IoIosSearch />
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default SearchBar;

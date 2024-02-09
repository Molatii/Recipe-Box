"use client";

import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
//import Link from "next/link";

const AddRecipeForm = () => {
   //Form fields validation
  const validationSchema = Yup.object({
    title: Yup.string().required("Recipe title is required"),
    summary: Yup.string().required("Recipe summary is required"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        image: "",
        title: "",
        ingredients: [""],
        steps: [""],
        summary: "",
      }}
      onSubmit={(values) => {
        // Handle form submission logic
        console.log(values);
      }}
    >
      {({ values, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center pb-6"
        >
          {/* Upload Recipe Image */}
          <Field
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="text-md font-semibold not-italic shadow-md shadow-green-500
             rounded-md text-green-500 px-2  py-2  w-full h-12 mb-4"
          />

          {/* Recipe Title */}
          <ErrorMessage
            name="title"
            id="title"
            component="div"
            className="text-gray-600 text-left ml-2 text-sm font-semibold text-md mt-2"
          />
          <Field
            type="text"
            id="title"
            name="title"
            placeholder="Add recipe tittle"
            className="p-2 border text-base text-gray-600 border-green-500 
                w-full sm:h-14 h-12 rounded shadow-md shadow-green-500 mb-4"
          />

          {/* Recipe Ingredients */}
          <label className="text-green-500 text-md font-semibold not-italic mt-3">
            Add Recipe Ingredients
          </label>
          <FieldArray  name="ingredients">
            {(arrayHelpers) => (
              <ul>
                {values.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex flex-row">
                    <Field
                      type="text"
                      placeholder="Ingredient name"
                      name={`ingredients.${index}`}
                      className="p-2 border text-base text-gray-600 border-green-500 
                w-full sm:h-10 h-10 rounded  shadow-md shadow-green-500 mb-4"
                    />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                      className="bg-red-600 sm:h-10 h-10 text-xs p-2 px-1  rounded-lg ml-1 sm:ml-4 text-white font-semibold hover:bg-red-700 "
                    >
                      Remove
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => arrayHelpers.push("")}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-lg p-1"
                  >
                    Add Ingredient
                  </button>
                </li>
              </ul>
            )}
          </FieldArray>

          {/* Recipe Steps */}
          <label className="text-green-500 text-md font-semibold not-italic mt-3">
            Add Recipe Steps
          </label>
          <FieldArray name="steps">
            {(arrayHelpers) => (
              <ol>
                {values.steps.map((step, index) => (
                  <li key={index} className="flex flex-row">
                    <Field
                      type="text"
                      placeholder="Name your step"
                      name={`steps.${index}`}
                      className="p-2 border text-base text-gray-600 border-green-500 
                w-full sm:h-10 h-10 rounded shadow-md shadow-green-500 mb-4"
                    />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                      className="bg-red-600 sm:h-10 h-10 text-xs p-2 px-1  rounded-lg ml-1 sm:ml-4 text-white font-semibold  hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => arrayHelpers.push("")}
                    className="bg-green-500 hover:bg-green-600  text-white font-semibold text-sm rounded-lg p-1"
                  >
                    Add another Step
                  </button>
                </li>
              </ol>
            )}
          </FieldArray>

          {/* Recipe Summary */}
          <ErrorMessage
            name="summary"
            id="summary"
            component="div"
            className="text-gray-600 text-left ml-2 text-sm font-semibold text-md mt-4"
          />
          <Field
            as="textarea"
            id="summary"
            rows="4"
            name="summary"
            placeholder="Write your recipe summary"
            className="p-2 border text-base text-gray-600 border-green-500 
                w-full  rounded shadow-md shadow-green-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-xl font-bold not-italic shadow-md shadow-green-500
             rounded-md text-white px-2 mt-8 py-2  w-full sm:h-14 h-12"
          >
            Upload Recipe
          </button>
        </form>
      )}
    </Formik>
  );
};

export default AddRecipeForm;

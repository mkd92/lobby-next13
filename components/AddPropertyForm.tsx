import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { z } from "zod";
import { addPropertyToDB } from "../utils/firebase/db";
import { propertyFormSchema } from "../utils/firebase/db/types";
import { auth } from "../utils/firebase/firebase.config";
const AddPropertyForm = () => {
  const [propName, setPropName] = useState("");
  const [propAddress1, setPropAddress1] = useState("");
  const [propAddress2, setPropAddress2] = useState("");
  const [propPinCode, setPropPinCode] = useState("");
  const [propCity, setPropCity] = useState("");
  const [propState, setPropState] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [user] = useAuthState(auth);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uid = user?.uid;
    setErrors([]);
    try {
      if (uid) {
        const data = {
          uid,
          propName,
          propAddress: {
            line1: propAddress1,
            line2: propAddress2,
            pinCode: parseInt(propPinCode),
            city: propCity,
            state: propState,
          },
        };
        propertyFormSchema.parse(data);
        addPropertyToDB(data);
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        err.issues.forEach((error) => {
          if (error.path[0] === "propName") {
            if (error.code === "too_small")
              setErrors((err) => [...err, "Name Too Small"]);
          }
          if (error.path[0] === "propAddress") {
            if (error.path[1] === "line1") {
              if (error.code === "too_small") {
                setErrors((err) => [
                  ...err,
                  "Address Line_1 Should have at least 10 Chars",
                ]);
              }
            }
            if (error.path[1] === "line2") {
            }
            if (error.path[1] === "city") {
              if (error.code === "too_small") {
                setErrors((err) => [
                  ...err,
                  "City Should have at least 3 Chars",
                ]);
              }
            }
            if (error.path[1] === "state") {
              if (error.code === "too_small") {
                setErrors((err) => [
                  ...err,
                  "State Should have at least 3 Chars",
                ]);
              }
            }
            if (error.path[1] === "pinCode") {
              // if (error.code === "invalid_type") {
              setErrors((err) => [
                ...err,
                "Pincode should be a 6 digit number",
              ]);
              // }
            }
          }
        });
      }
    }
  };
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).id === "propName") {
      setPropName((e.target as HTMLInputElement).value);
    }
    if ((e.target as HTMLInputElement).id === "propAddress1") {
      setPropAddress1((e.target as HTMLInputElement).value);
    }
    if ((e.target as HTMLInputElement).id === "propAddress2") {
      setPropAddress2((e.target as HTMLInputElement).value);
    }
    if ((e.target as HTMLInputElement).id === "propPinCode") {
      setPropPinCode((e.target as HTMLInputElement).value);
    }
    if ((e.target as HTMLInputElement).id === "propCity") {
      setPropCity((e.target as HTMLInputElement).value);
    }
    if ((e.target as HTMLInputElement).id === "propState") {
      setPropState((e.target as HTMLInputElement).value);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="m-4 grid grid-cols-2 items-center">
        <div className="w-full my-2 col-span-2 ">
          <label
            htmlFor="propName"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Property Name
          </label>
          <input
            onChange={onChange}
            type="text"
            id="propName"
            className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Property Name"
            required
          />
        </div>
        <div className="w-full my-2 col-span-2">
          <label
            htmlFor="propAddress1"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Property Address Line 1
          </label>
          <input
            onChange={onChange}
            type="text"
            id="propAddress1"
            className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Property Address Line 1"
            required
          />
        </div>
        <div className="w-full my-2 col-span-2">
          <label
            htmlFor="propAddress2"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Property Address Line 2
          </label>
          <input
            onChange={onChange}
            type="text"
            id="propAddress2"
            className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Property Address Line 2"
          />
        </div>
        <div className="w-full my-2 pr-1">
          <label
            htmlFor="propPinCode"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Pincode
          </label>
          <input
            onChange={onChange}
            type="text"
            id="propPinCode"
            className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Property Pincode"
            required
          />
        </div>
        <div className="w-full my-2 pl-1">
          <label
            htmlFor="propCity"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            City
          </label>
          <input
            onChange={onChange}
            type="text"
            id="propCity"
            className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="City"
            required
          />
        </div>
        <div className="w-full my-2 col-span-2">
          <label
            htmlFor="propState"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            State
          </label>
          <input
            onChange={onChange}
            type="text"
            id="propState"
            className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="State"
            required
          />
        </div>
        <div className="w-full col-span-2">
          <button className="w-full my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Add Property
          </button>
        </div>
      </div>
      <ol>
        {errors.map((error) => {
          return <li>{error}</li>;
        })}
      </ol>
    </form>
  );
};

export default AddPropertyForm;

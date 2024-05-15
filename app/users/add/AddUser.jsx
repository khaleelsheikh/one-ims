"use client";

import SideNavbar from "@/app/components/SideNavbar";
import { addUser } from "@/app/services/userService";
import React, { useState } from "react";
import { toast } from "sonner";

const AddUser = () => {
  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    password: "",
    cpassword: "",
    role: "select_one", // assuming default value for role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the input name is "id", only allow numerical input
    if (name === "id" && !isNaN(value)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (name !== "id") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Basic validation checks
      if (formData.id === "") {
        toast.error("Please enter User Id");
        return;
      }

      if (formData.fullName === "") {
        toast.error("Please enter Full Name");
        return;
      }

      if (formData.password === "") {
        toast.error("Please enter Password");
        return;
      }

      if (formData.cpassword === "") {
        toast.error("Please confirm Password");
        return;
      }

      if (formData.password !== formData.cpassword) {
        toast.error("Passwords do not match");
        return;
      }

      if (formData.role === "select_one") {
        toast.error("Please select User Role");
        return;
      }

      // Call the addUser function to submit the form data to the database
      const response = await addUser(formData);

      // Handle success response
      if (response.user) {
        console.log(response);
        toast.success(response.message);
        // Optionally, you can reset the form after successful submission
        setFormData({
          id: "",
          fullName: "",
          password: "",
          cpassword: "",
          role: "select_one",
        });
      } else {
        // Handle error response
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      toast.error("Error in form submission");
    }
  };

  return (
    <>
      <div className="flex">
        <SideNavbar />
        <div className="flex-grow p-4 h-[96vh]">
          <div className="flex justify-center items-center mt-4">
            <div className="bg-white my-4 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <form onSubmit={handleSubmit}>
                <div className="mb-10">
                  <h3 className="text-3xl font-extrabold">Add New User</h3>
                </div>
                <div>
                  <label className="text-sm mb-2 block" htmlFor="id">
                    User Id
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="id"
                      id="id"
                      type="text"
                      // required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#4295ea]"
                      placeholder="Enter user id"
                      autoComplete="off"
                      // pattern="[0-9]*" // Only allow numerical input in modern browsers
                      // inputMode="numeric" // Show numeric keyboard on mobile devices
                      value={formData.id}
                      onChange={handleChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-sm mb-2 block" htmlFor="fullName">
                    Full Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="fullName"
                      type="text"
                      id="fullName"
                      // required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#4295ea]"
                      placeholder="Enter full name"
                      autoComplete="off"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-sm mb-2 block" htmlFor="password">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      id="password"
                      type="password"
                      // required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#4295ea]"
                      placeholder="Enter password"
                      autoComplete="off"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-sm mb-2 block" htmlFor="cpassword">
                    Confirm Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="cpassword"
                      id="cpassword"
                      type="password"
                      // required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#4295ea]"
                      placeholder="Confirm password"
                      autoComplete="off"
                      value={formData.cpassword}
                      onChange={handleChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-sm mb-2 block" htmlFor="role">
                    User Role
                  </label>
                  <div className="relative flex items-center">
                    <select
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#4295ea]"
                      name="role"
                      id="role"
                      defaultValue={"select_one"}
                      onChange={handleChange}
                    >
                      <option value={"select_one"} disabled>
                        --Select one--
                      </option>
                      <option value={"ADMIN"}>Administrator</option>
                      <option value={"ACCOUNTANT"}>Accountant</option>
                      <option value={"SALESMAN"}>Sales Rep</option>
                    </select>
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#70afef] hover:bg-[#4295ea] focus:outline-none"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/useAuth";
import "./LoginPage.css";
import { FaUser, FaLock, FaServer, FaBuilding } from "react-icons/fa";

import coke from "../../Assets/cokacola.png";
import coke1 from "../../Assets/coke1.png";
import bran from "../../Assets/Brain Oil.png";
import igloo from "../../Assets/sugar.png";
import oil from "../../Assets/branoil.png";
import sugar from "../../Assets/sugarp.png";
import wave from "../../Assets/wave.png";
import unlock from "../../Assets/aa.png";
import cokebottle from "../../Assets/cokebottle.png";

type Props = {};

type LoginFormsInputs = {
  userName: string;
  password: string;
  companyName: string;
  serverName: string;
};

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  companyName: Yup.string().required("Company Name is required"),
  serverName: Yup.string().required("Server Name is required"),
});

const images = [coke, bran, igloo];

const LoginPage = (props: Props) => {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validationSchema) });

  const handleLogin = (formData: LoginFormsInputs) => {
   // console.log("Submitting login form:", formData);
    loginUser(formData.userName, formData.password);
  };

  // const handleCancel = () => {
  //   console.log("Cancelled");
  // };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <img
        src={wave}
        className="fixed hidden lg:block inset-0 h-full"
        style={{ zIndex: -1 }}
        alt="wave background"
      />

      <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2 relative">
        {/* Circle Div */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-132 h-132 border-4 border-gray-300 rounded-full overflow-hidden z-10 shadow-2xl">
          <div className="animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-gray-200 rounded-full"></div>
          <img
            src={cokebottle}
            className="absolute top-64 right-80 w-28 m-4"
            style={{ zIndex: -1 }}
            alt="top left decoration"
          />
          <img
            src={sugar}
            className="absolute top-80 right-24 w-72 m-4"
            style={{ zIndex: -1 }}
            alt="top left decoration"
          />
          <img
            src={oil}
            className="absolute top-64 w-32 right-16 m-4"
            style={{ zIndex: -1 }}
            alt="top left decoration"
          />
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative group">
            <img
              src={unlock}
              className="hidden lg:block w-1/2 transition-all duration-500 transform group-hover:scale-150 mx-auto"
              alt="unlock image"
            />
            <div
              className="absolute inset-0 flex justify-center items-center transition-all duration-500 transform"
              style={{ zIndex: 1 }}
            >
              <img
                src={images[currentImageIndex]}
                className="w-1/4 transition-all duration-500 transform group-hover:scale-150"
                alt="rotating images"
              />
            </div>
          </div>
        </div>

        <div className="form-container w-full max-w-md px-8 py-10 border border-gray-300 rounded-lg shadow-2xl bg-white relative ml-60 top-20 z-20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(handleLogin)(e);
            }}
            className="flex flex-col justify-center items-center w-full"
          >
            <h2 className="font-display font-bold text-4xl text-gray-700 text-center mb-8">
              Welcome To ERP
            </h2>

            {/* Company Name */}
            <div className="relative mb-6 w-full">
              <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primarycolor" />
              <select
                id="companyName"
                {...register("companyName")}
                className="w-full p-4 bg-white border border-gray-300 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-14 shadow-sm"
              >
                <option
                  value=""
                  className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize shadow-sm w-36"
                >
                  Select Company
                </option>
                <option value="Abdul Monem Beverage Unit">
                  Abdul Monem Beverage Unit
                </option>
                <option value="Abdul Monem Sugar Refinery Limited">
                  Abdul Monem Sugar Refinery Limited
                </option>
              </select>
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            {/* Server Name */}
            <div className="relative mb-6 w-full">
              <FaServer className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primarycolor" />
              <select
                id="serverName"
                {...register("serverName")}
                className="w-full p-4 bg-white border border-gray-300 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-14 shadow-sm"
              >
                <option value="">Select Server</option>
                <option value="Beverage Head Office">Beverage Head Office</option>
                <option value="Beverage Factory">Beverage Factory</option>
                <option value="Bran Oil Factory">Bran Oil Factory</option>
                <option value="Bran Oil HO">Bran Oil HO</option>
              </select>
              {errors.serverName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.serverName.message}
                </p>
              )}
            </div>

            {/* Username and Password */}
            <div className="flex w-full mb-6">
              {/* Username */}
              <div className="relative flex-1 mr-4">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primarycolor" />
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  {...register("userName")}
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-14 shadow-sm"
                />
                {errors.userName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.userName.message}
                  </p>
                )}
              </div>
              {/* Password */}
              <div className="relative flex-1">
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primarycolor" />
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  {...register("password")}
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-14 shadow-sm"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="py-3 px-20 bg-primarycolor rounded-full text-white font-bold uppercase text-lg mt-6 transform hover:translate-y-1 transition-all duration-500 shadow-md"
            >
              Login
            </button>
          </form>
        </div>
        <img
          src={coke1}
          className="absolute top-20 right-48 w-2/3 lg:w-1/3 m-4"
          style={{ zIndex: -2 }}
          alt="top left decoration"
        />
      </div>
    </>
  );
};

export default LoginPage;

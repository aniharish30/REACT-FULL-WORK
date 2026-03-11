import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ReactHookForm = () => {
  const schema = z.object({
    name: z.string().min(2, { message: "Required" }),
    email: z.email(),
    message: z.string().min(5),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = (data) => {
    console.log("Form data", data);
  };

  return (
    <form
      className=" flex flex-col gap-5 p-10"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h1>React Hook Form</h1>
      <div className=" flex flex-col gap-3 ">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter you name..."
          className=" py-2 pl-1 rounded-lg outline-none border"
          {...register("name")} // name: adfasdfasdf
        />
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </div>

      <div className=" flex flex-col gap-5 ">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter you email..."
          className=" py-2 pl-1 rounded-lg outline-none border"
          {...register("email")} // email: adsfasdf
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>

      <div className=" flex flex-col gap-5 ">
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Enter you message..."
          className=" py-2 pl-1 rounded-lg outline-none border"
          {...register("message")} // email: adsfasdf
        />
        {errors.message?.message && <p>{errors.message?.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          className=" py-2 px-6 rounded-lg bg-green-600 text-white"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default ReactHookForm;

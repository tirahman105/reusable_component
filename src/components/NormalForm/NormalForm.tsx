import React from "react";
import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-slate-500 max-w-5xl p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn("border border-blue-500 grid  gap-5", {
          "md:grid-cols-2": double,
          "grid-cols-1": !double,
        })}
      >
        <div className="w-full">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="name">
            Email
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="name">
            Password
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NormalForm;

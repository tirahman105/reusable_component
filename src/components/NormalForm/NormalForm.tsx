import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "border border-gray-400 rounded-lg shadow-lg max-w-5xl p-5 mx-auto",
        {
          "max-w-5xl": double,
          "max-w-md": !double,
        }
      )}
    >
      <div
        className={cn("border grid grid-cols-1 justify-items-center  gap-5", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="w-full  max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="w-full  max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { minLength: 8 })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div
          className={cn("border grid-cols-1  grid  gap-5 py-8", {
            "md:grid-cols-2  ": double,
          })}
        >
          <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end bg-red-600 ">
            <Button className="w-full md:w-fit" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;

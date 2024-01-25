import React, { useContext } from "react";
import Button from "../ui/Button";
import cn from "../../utils/cn";
import { FormElementContext } from "./Form";

export const SubmitForm = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn(" grid-cols-1  grid  gap-5 py-8", {
        "md:grid-cols-2  ": double,
      })}
    >
      <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end ">
        <Button className="w-full md:w-fit" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

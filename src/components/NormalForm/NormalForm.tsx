// import React from "react";
// import { useForm } from "react-hook-form";
// import cn from "../../utils/cn";
// import Button from "../ui/Button";

// const NormalForm = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const double = true;
//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className={cn(
//         "border border-gray-400 rounded-lg shadow-lg max-w-5xl p-5 mx-auto",
//         {
//           "max-w-5xl": double,
//           "max-w-md": !double,
//         }
//       )}
//     >
//       <div
//         className={cn("grid  justify-items-center  gap-5", {
//           "md:grid-cols-2": double,
//           "grid-cols-1": !double,
//         })}
//       >
//         <div className="w-full max-w-md">
//           <label className="block" htmlFor="name">
//             Name
//           </label>
//           <input type="text" id="name" {...register("name")} />
//         </div>
//         <div className="w-full  max-w-md">
//           <label className="block" htmlFor="name">
//             Email
//           </label>
//           <input type="text" id="name" {...register("name")} />
//         </div>
//         <div className="w-full  max-w-md">
//           <label className="block" htmlFor="name">
//             Password
//           </label>
//           <input type="text" id="name" {...register("name")} />
//         </div>
//         <div className="w-full  max-w-md">
//           <label className="block" htmlFor="name">
//             Select option
//           </label>
//           <select>
//             <option value="one">One</option>
//             <option value="two">Two</option>
//             <option value="three">Three</option>
//           </select>
//         </div>

//         <div className="w-full">
//           <label className="block" htmlFor="name">
//             Text Area
//           </label>
//           <textarea name="" id=""></textarea>
//         </div>

//         <div className="w-full">
//           <label className="block" htmlFor="name">
//             Text Area
//           </label>
//           <input type="checkbox" name="" id="" />
//         </div>

//         <div
//           className={cn(
//             " grid grid-cols-1 justify-items-center  gap-5 bg-red-400",
//             {
//               "md:grid-cols-2 col-start-2": double,
//             }
//           )}
//         >
//           <div className="w-full max-w-md col-start-2 flex justify-end bg-red-600">
//             <Button type="submit">Submit</Button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default NormalForm;

import React from "react";
import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
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
        </div>
        <div className="w-full  max-w-md">
          <label className="block" htmlFor="name">
            Email
          </label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full  max-w-md">
          <label className="block" htmlFor="name">
            Password
          </label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full  max-w-md">
          <label className="block" htmlFor="name">
            Select option
          </label>
          <select>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>

        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Text Area
          </label>
          <textarea name="" id=""></textarea>
        </div>

        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Text Area
          </label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Text Area
          </label>
          <input type="checkbox" name="" id="" />
        </div>

        <div
          className={cn("border grid-cols-1  grid  gap-5", {
            "md:grid-cols-2  ": double,
          })}
        >
          <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end bg-red-600">
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

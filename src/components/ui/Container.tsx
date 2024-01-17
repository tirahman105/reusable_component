import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full max-w-[1250px] mx-auto bg-slate-300 ">
      {children}
    </div>
  );
};

export default Container;

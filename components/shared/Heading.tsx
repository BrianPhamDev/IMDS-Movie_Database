import React from "react";

interface Props {
  children: string;
}

const Heading = ({ children }: Props) => {
  return (
    <>
      <div className="border-l-[3px] border-solid border-brand-primary pl-3">
        <p className="text-xl">{children}</p>
      </div>
    </>
  );
};

export default Heading;

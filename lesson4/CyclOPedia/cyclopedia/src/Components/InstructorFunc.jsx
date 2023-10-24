import React, { useEffect } from "react";

const InstructorFunc = (props) => {
  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div>
      <div className="">
        Name: {props.instructor.name} <br />
        Email: {props.instructor.email} <br />
        Phone: {props.instructor.phone} <br />
      </div>
    </div>
  );
};

export default InstructorFunc;

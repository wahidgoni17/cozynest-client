import React from "react";

const page = ({params} : {params: any}) => {
  const {flatId} = params
  return (
    <div>
      <h1>this is flat request page : {flatId}</h1>
    </div>
  );
};

export default page;

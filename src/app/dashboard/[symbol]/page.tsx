import React from "react";
import PDFChat from "../PDFChat/page";

const Analyze = ({ params }: { params: { slug: string } }) => {
  console.log(params);

  return <PDFChat />;
};

export default Analyze;

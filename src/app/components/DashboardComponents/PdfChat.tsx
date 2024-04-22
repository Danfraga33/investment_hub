import React from "react";

const PdfChat = () => {
  // This gets the PDF
  // useEffect(() => {
  //   const fetchPdfData = async () => {
  //     const response = await fetch(
  //       "https://api.sec-api.io/filing-reader?token=04e643e9ca99995ce8c9a4f275b540ec5c6e5011584977204a50c94bb644e353&type=pdf&url=https://www.sec.gov/Archives/edgar/data/1833764/000089924321006812/xslF345X02/doc3.xml",
  //     );
  //     const data = await response.blob(); // Get the PDF data as a blob
  //     setPdfData(data);
  //   };

  //   fetchPdfData();
  // }, []);

  // const renderPages = (numPages: any) => {
  //   return Array.from({ length: numPages }, (_, i) => (
  //     <Page key={`page_${i + 1}`} pageNumber={i + 1} />
  //   ));
  // };

  // {
  //   pdfData ? (
  //     <Document file={pdfData}>
  //       {({ numPages }) => renderPages(numPages)}
  //     </Document>
  //   ) : (
  //     <p>Loading PDF...</p>
  //   );
  // }
  return <div>PdfChat</div>;
};

export default PdfChat;

// ClientSideSanitizer.js
import dynamic from "next/dynamic";
import React from "react";

const SanitizeHTML = ({ html }: { html: string }) => {
  // Directly importing DOMPurify here since this component is client-side only
  const DOMPurify = require("dompurify");
  const cleanHTML = DOMPurify.sanitize(html);

  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
};

// Export the component with ssr set to false to ensure it's client-side only
export default dynamic(() => Promise.resolve(SanitizeHTML), {
  ssr: false,
});

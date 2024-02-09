import React from "react";

const DownloadButton = () => {
  return (
    <div className="py-4">
      <button
        type="button"
        className="text-[#798f9f] bg-[#798f9f]/20 hover:bg-[#798f9f]/60 focus:outline-none font-sm rounded-full text-sm px-2 py-1 text-center me-2 mb-2"
      >
        - DOWNLOAD CSV -
      </button>
    </div>
  );
};

export default DownloadButton;

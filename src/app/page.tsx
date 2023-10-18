"use client";
import React, { ChangeEvent, useState } from "react";
import { convertToDirectoryStructure, printDirectoryStructure } from "../../utils";

const IndexPage = () => {
  const [directoryStructure, setDirectoryStructure] = useState("");

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      alert("请选择一个文件夹");
      return;
    }
    const dirTree = convertToDirectoryStructure(files);
    const directoryStructureString = printDirectoryStructure(dirTree, true);
    setDirectoryStructure(directoryStructureString);
  };

  const copy = () => {
    const textArea = document.getElementById("result") as HTMLTextAreaElement;
    textArea.select();
    document.execCommand("copy");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] h-[80%]">
        <div className="h-[14%] flex justify-between">
          <input
            type="file"
            id="folderInput"
            className="mb-4 outline-dashed outline-2 outline-offset-2"
            webkitdirectory=""
            directory=""
            multiple={true}
            onChange={handleFileUpload}
          />
          <div>
            <button className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={copy}>
              一键复制
            </button>
          </div>
        </div>
        <form className="w-[100%] h-[86%]">
          <textarea
            id="result"
            className="h-[100%] w-[100%] font-mono resize-none border-solid border-2 border-gray-200 rounded-md"
            value={directoryStructure}
            onChange={(e) => setDirectoryStructure(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default IndexPage;

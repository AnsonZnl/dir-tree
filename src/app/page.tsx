"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { convertToDirectoryStructure, printDirectoryStructure } from "../../utils";
import { toast } from "react-hot-toast";
import GitHubStarButton from "../../components/star";
const IndexPage = () => {
  const [directoryStructure, setDirectoryStructure] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
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
    toast.success("复制成功!");
  };

  const openFileInput = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <GitHubStarButton />
      <div className="h-[50px] flex">
        <h2 className=" items-center text-2xl text-slate-900">目录树🌲生成器</h2>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] h-[80%]">
        <div className="h-[14%] flex justify-between p-1 min-w-[100px]">
          <button onClick={openFileInput} className="w-[20%] mb-4 outline-dashed outline-2  text-sm">
            选择文件夹生成目录树
          </button>
          {/* @ts-ignore */}
          <input style={{ display: "none" }} type="file" id="folderInput" ref={fileInputRef} webkitdirectory="true" directory="" multiple={true} onChange={handleFileUpload} />
          <div>
            <button className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 user-select-none" onClick={copy}>
              一键复制
            </button>
          </div>
        </div>
        <form className="w-[100%] h-[86%]">
          <textarea
            id="result"
            className="h-[100%] w-[100%] font-mono resize-none border-solid border-2 border-gray-200 rounded-md p-2"
            value={directoryStructure}
            onChange={(e) => setDirectoryStructure(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default IndexPage;

export const convertToDirectoryStructure = (fileList: FileList) => {
  const directory = {
    name: "App",
    type: "folder",
    contents: [],
  };

  for (let i = 0; i < fileList.length; i++) {
    const pathSegments = fileList[i].webkitRelativePath.split("/");
    let currentDirectory = directory;

    for (let j = 0; j < pathSegments.length; j++) {
      const segment = pathSegments[j];
      const isDirectory = j < pathSegments.length - 1;

      let existingEntry = currentDirectory.contents.find((entry) => entry.name === segment);
      if (!existingEntry) {
        existingEntry = { name: segment };
        if (isDirectory) {
          existingEntry.type = "folder";
          existingEntry.contents = [];
        } else {
          existingEntry.type = "file";
        }
        currentDirectory.contents.push(existingEntry);
      }

      currentDirectory = existingEntry;
    }
  }

  return directory.contents[0];
};

export const printDirectoryStructure = (obj: any, isOne = false, prefix = "", isLast = true) => {
  let result = "";
  let dirName = "";
  if (obj.type === "folder") {
    if (isOne) {
      dirName = obj.name;
      result += prefix + obj.name + "\n";
    } else {
      result += prefix + (isLast ? "└─ " : "├─ ") + obj.name + "\n";
    }

    for (let i = 0; i < obj.contents.length; i++) {
      const childPrefix = prefix + (isLast ? "  " : "│   ");
      const childIsLast = i === obj.contents.length - 1;
      result += printDirectoryStructure(obj.contents[i], false, childPrefix, childIsLast);
    }
  } else {
    result += prefix + (isLast ? "└─ " : "├─ ") + obj.name + "\n";
  }

  return result;
};

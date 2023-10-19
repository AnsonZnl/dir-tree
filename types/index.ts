export interface DirectoryItem {
  name: string;
  type?: "folder" | "file";
  contents?: DirectoryItem[];
}

import React from "react";
import { Download, FolderOpen } from "lucide-react";

function ButtonGetStrated() {
  return (
    <a
      href="#"
      className="rounded-md flex bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      <Download className="w-5 h-5 mr-2" />
      PortFolio
    </a>
  );
}

export default ButtonGetStrated;

import dynamic from "next/dynamic";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

export default MDEditor;

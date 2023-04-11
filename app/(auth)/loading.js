"use client"; // this is a client component 
import { BeatLoader } from "react-spinners";

function App() {


  return (
    <div className="sweet-loading fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center z-50">
      <BeatLoader color="#0f63fe" loading={true} />
    </div>
  );
}

export default App;

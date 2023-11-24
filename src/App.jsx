import "./App.css";
import SidePanel from "./components/SidePanel/SidePanel";
import ComicStrip from "./components/ComicStrip/ComicStrip";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="main">
        <SidePanel />
        <ComicStrip />
      </div>
    </>
  );
}

export default App;

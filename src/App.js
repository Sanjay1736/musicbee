import "./App.css";
import LeftBar from "./Components/LeftBar";
import { MidBlock } from "./Components/MidBlock";
import SideBar from "./Components/SideBar";
import SideNewBar from "./Components/SideNewBar";

function App() {
  return (
    <div className="App">
      {/* <SideBar /> */}
      <SideNewBar />
      <MidBlock />
      <LeftBar />
    </div>
  );
}

export default App;

import "./App.css";
import { MidBlock } from "./Components/MidBlock";
import SideBar from "./Components/SideBar";
import SideNewBar from "./Components/SideNewBar";

function App() {
  return (
    <div className="App">
      {/* <SideBar /> */}
      <MidBlock/>
      <SideNewBar/>
    </div>
  );
}

export default App;

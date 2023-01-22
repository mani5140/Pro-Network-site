import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profilepage from "./pages/Profilepage/Profilepage";
//import Aboutpage from "./pages/Aboutpage/Aboutpage";
// import Homepage from "./pages/Homepage/Homepage.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage /> */}
      {/* <Aboutpage /> */}
      <Profilepage />

    </div>
  );
}

export default App;
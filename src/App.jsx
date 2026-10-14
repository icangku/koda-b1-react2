import { Link } from "react-router";
import "./App.css";
import Links from "./components/Links";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">
        <Links />
      </main>
    </>
  );
}

export default App;

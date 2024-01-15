import { useState } from "react";
import Navbar from "./components/Navbar"; 
import StarsCanvas from "./components/Stars";
import Header from "./containers/Header"; 

const App = () => {
  const [mode, setMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  return (
    <main
      className="bg-zinc-50 dark:bg-black select-none ease-out duration-100"
      onClick={() => {
        setMode(document.documentElement.classList.contains("dark"));
      }}
    >
      <Navbar />
      <Header />
      {mode ? <StarsCanvas /> : null}
    </main>
  );
};

export default App;

import Header from "./components/Header";
import Content from "./components/Content";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App min-h-screen bg-sky-300	p-2 flex flex-col items-center grow">
      <Header />
      <Routes>
        <Route path="/" element={<Content />}/>
      </Routes>
      
    </div>
  );
}

export default App;

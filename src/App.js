import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </>
  );
};

export default App;

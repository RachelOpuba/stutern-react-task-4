// import Header from "./components/Header";
import CardList from "./components/CardList";
import { Route, Routes } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import TestCard from "./components/TestCard";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/stutern-react-task-4" element={<CardList />} />
          <Route path="/stutern-react-task-4/:id" element={<CardDetails />} />
          <Route path="/test" element={<TestCard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

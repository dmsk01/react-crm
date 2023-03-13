import React from "react";
import WorkerTable from "./components/WorkerTable/WorkerTable";
import AddWorkerForm from "./components/WorkerForm/WorkerForm";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <AddWorkerForm />
        <WorkerTable />
      </div>
    </div>
  );
};

export default App;

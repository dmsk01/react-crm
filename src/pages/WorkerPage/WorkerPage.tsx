import React from "react";
import WorkerTable from "../../components/WorkerTable/WorkerTable";
import WorkerForm from "../../components/WorkerForm/WorkerForm";

const NOOP = () => void 0;

function WorkerPage() {
  return (
    <div>
      <WorkerForm mode="add" onEdit={NOOP} />
      <WorkerTable />
    </div>
  );
}

export default WorkerPage;

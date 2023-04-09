import React from "react";
import WorkerTable from "../../components/WorkerTable/WorkerTable";
import WorkerForm from "../../components/WorkerForm/WorkerForm";
import Header from "../../components/Header/Header";

const NOOP = () => void 0;

function WorkersListPage() {
  return (
    <>
      <WorkerForm mode="add" onEdit={NOOP} />
      <WorkerTable />
    </>
  );
}

export default WorkersListPage;

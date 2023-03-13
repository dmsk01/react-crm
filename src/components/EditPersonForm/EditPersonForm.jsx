import React from "react";
import { useSelector } from "react-redux";
import WorkerForm from "../WorkerForm/WorkerForm";

function EditPersonForm({ id, onEdit }) {
  const worker = useSelector((state) =>
    state.workers.workers.find((worker) => worker.id === id)
  );

  return <WorkerForm mode="edit" worker={worker} onEdit={onEdit} />;
}

export default EditPersonForm;

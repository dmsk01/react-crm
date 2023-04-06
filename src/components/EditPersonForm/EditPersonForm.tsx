import React from "react";
import { useSelector } from "react-redux";
import WorkerForm from "../WorkerForm/WorkerForm";
import { IState, IWorker } from "../../store/types";

interface IEditPersonForm {
  id: string;
  onEdit: () => void;
}

function EditPersonForm({ id, onEdit }: IEditPersonForm) {
  const worker = useSelector((state: IState) =>
    state.workers.workers.find((worker: IWorker) => worker.id === id)
  );

  return <WorkerForm mode="edit" worker={worker} onEdit={onEdit} />;
}

export default EditPersonForm;

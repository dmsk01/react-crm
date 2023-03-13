import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteWorker } from "../../store/workersSlice";
import "./style.css";
import WorkerRow from "./WorkerRow";

function getSortedWorkers(workers, prop, dir) {
  const workersCopy = [...workers];
  // eslint-disable-next-line
  return workersCopy.sort((workerA, workerB) => {
    if (
      !dir === false
        ? workerA[prop] < workerB[prop]
        : workerA[prop] > workerB[prop]
    ) {
      return -1;
    }
  });
}

function WorkerTable() {
  const workers = useSelector((state) => state.workers.workers);
  const dispatch = useDispatch();
  const [workersState, setWorkersState] = useState(workers);
  const [sortDirection, setSortDirection] = useState(true);

  useEffect(() => {
    const sortedWorkers = getSortedWorkers(workers, "name", false);
    setWorkersState(sortedWorkers);
  }, [workers]);

  const handleTableHeadClick = (e) => {
    const sortField = e.target.dataset.sort;
    setSortDirection((dir) => !dir);
    e.target.dataset.direction = !e.target.dataset.direction;
    const sortedWorkers = getSortedWorkers(
      workersState,
      sortField,
      sortDirection
    );
    setWorkersState(sortedWorkers);
  };

  const handleDeletePerson = (id) => {
    if (window.confirm(`Are you sure to delete person with id=${id}`)) {
      dispatch(deleteWorker({ id }));
    }
  };

  const handleEditPerson = () => {};

  return (
    <section>
      <h1>Workers</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th onClick={(e) => handleTableHeadClick(e)} data-sort="surname">
              Full name
            </th>
            <th onClick={(e) => handleTableHeadClick(e)} data-sort="birthDate">
              Birth date
            </th>
            <th onClick={(e) => handleTableHeadClick(e)} data-sort="workStart">
              Work period
            </th>
            <th onClick={(e) => handleTableHeadClick(e)} data-sort="post">
              Company post
            </th>
          </tr>
        </thead>
        <tbody id="workers-list">
          {workersState.map((worker, index) => (
            <WorkerRow
              key={worker.id}
              worker={worker}
              handleDeletePerson={() => handleDeletePerson(worker.id)}
              handleEditPerson={handleEditPerson}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default WorkerTable;

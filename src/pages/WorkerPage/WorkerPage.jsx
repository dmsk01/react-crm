import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function WorkerPage() {
  const { workerId } = useParams();
  // useEffect(() => {
  //   console.log(workers);
  // }, [workers]);
  return <div>WorkerPage with id={workerId}</div>;
}

export default WorkerPage;

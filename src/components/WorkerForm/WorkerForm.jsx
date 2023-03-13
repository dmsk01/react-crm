import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addWorker, editWorker } from "../../store/workersSlice";
import { formatDate } from "../../utils";

function WorkerForm({ mode, worker = {}, onEdit }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(worker);

  const refContainer = useRef(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((data) => !data)) {
      console.log("not enough form data");
      return;
    }

    if (mode === "edit") {
      dispatch(editWorker({ ...formData }));
      onEdit && onEdit();
    } else {
      dispatch(addWorker({ ...formData }));
    }

    setFormData({});
    refContainer.current.reset();

    return null;
  };

  const handleInputChange = (e) => {
    const target = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [target.id]: target.value.trim(),
      };
    });
  };

  return (
    <form
      ref={refContainer}
      onSubmit={(e) => handleSubmitForm(e)}
      className="mb-3 row"
    >
      <div className="mb-3 col-4">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="name"
          defaultValue={formData.name || ""}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="surname" className="form-label">
          Surname
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="surname"
          defaultValue={formData.surname || ""}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="lastname" className="form-label">
          Lastname
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="lastname"
          defaultValue={formData.lastname || ""}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="workStart" className="form-label">
          Work start
        </label>
        <input
          onChange={handleInputChange}
          type="date"
          min="1960-01-01"
          className="form-control"
          id="workStart"
          defaultValue={formData.workStart && formatDate(formData.workStart)}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="birthDate" className="form-label">
          Birth date
        </label>
        <input
          onChange={handleInputChange}
          type="date"
          min="1940-01-01"
          max="2010-01-01"
          className="form-control"
          id="birthDate"
          defaultValue={formData.birthDate && formatDate(formData.birthDate)}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="post" className="form-label">
          Post
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="post"
          defaultValue={formData.post || ""}
        />
      </div>
      <div className="mb-3 col">
        <button type="submit" className="btn btn-primary">
          {mode === "edit" ? "Edit worker" : "Add worker"}
        </button>
      </div>
    </form>
  );
}

export default WorkerForm;

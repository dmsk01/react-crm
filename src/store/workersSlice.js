import { createSlice } from "@reduxjs/toolkit";

const workersSlice = createSlice({
  name: "workers",
  initialState: {
    workers: [],
  },
  reducers: {
    addWorker(state, action) {
      state.workers.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        surname: action.payload.surname,
        lastname: action.payload.lastname,
        workStart: action.payload.workStart,
        birthDate: action.payload.birthDate,
        post: action.payload.post,
      });
    },
    deleteWorker(state, action) {
      state.workers = state.workers.filter(
        (worker) => worker.id !== action.payload.id
      );
    },
    editWorker(state, action) {
      const editedWorkerIndex = state.workers.findIndex(
        (worker) => worker.id === action.payload.id
      );
      state.workers.splice(editedWorkerIndex, 1, action.payload);
    },
  },
});

export const { addWorker, deleteWorker, editWorker } = workersSlice.actions;

export default workersSlice.reducer;

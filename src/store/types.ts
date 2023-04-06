export interface IWorker {
  id: string;
  name: string;
  surname: string;
  lastname: string;
  workStart: Date;
  birthDate: Date;
  post: string;
}


export interface IState {
  workers: {
    workers: IWorker[];
  };
}


import { IWorker } from "../../store/types";

export default class WorkerPerson {
  constructor(
    private id: string,
    private name: string,
    private surname: string,
    private lastname: string,
    private workStart: Date,
    private birthDate: Date,
    private post: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.lastname = lastname;
    this.workStart = new Date(workStart);
    this.birthDate = new Date(birthDate);
    this.post = post;
  }

  get fullName() {
    return `${this.surname} ${this.name} ${this.lastname}`;
  }

  get workPeriod() {
    const currentTime = new Date();
    return currentTime.getFullYear() - this.workStart.getFullYear();
  }

  get birthDateString() {
    const yyyy: string | number = this.birthDate.getFullYear();
    let mm: string | number = this.birthDate.getMonth() + 1;
    let dd: string | number = this.birthDate.getDate();
    if (mm < 10) mm = "0" + mm.toString();
    if (dd < 10) dd = "0" + dd.toString();

    return `${dd}.${mm}.${yyyy}`;
  }

  get age() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    let m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }

    return age;
  }
}

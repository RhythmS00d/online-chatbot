import { makeAutoObservable } from "mobx";

export class UIStore {
  showFooter: boolean;

  constructor() {
    makeAutoObservable(this);
    this.showFooter = true;
  }

  setShowFooter(value: boolean) {
    this.showFooter = value;
  }
}

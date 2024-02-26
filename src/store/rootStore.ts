import { UIStore } from "./uiStore";

class RootStore {
    uiStore;

    constructor() {
        this.uiStore = new UIStore();
    }
}

export const store = new RootStore();
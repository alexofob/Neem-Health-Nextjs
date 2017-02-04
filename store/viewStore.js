import { observable, action } from 'mobx';

class ViewStore {

  @observable snackbarOpen: boolean = false;
  @observable snackbarMessage: string = ' ';
  @observable drawerOpen: boolean = false;


  @action notifyUser = (message: string) => {
    this.snackbarMessage = message;
    this.snackbarOpen = true;
  }

  @action openDrawer = () => (this.drawerOpen = true);

  @action closeDrawer = () => (this.drawerOpen = false);
}

const viewStore = new ViewStore();

export default viewStore;

export { ViewStore };

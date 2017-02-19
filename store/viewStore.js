import { observable, action } from 'mobx';

class ViewStore {

  @observable snackbarOpen: boolean = false;
  @observable snackbarMessage: string = ' ';
  @observable drawerOpen: boolean = false;
  @observable dialogOpen: boolean = false;
  @observable dialogContent: string = 'login';


  @action notifyUser = (message: string) => {
    this.snackbarMessage = message;
    this.snackbarOpen = true;
  }

  @action openDrawer = () => (this.drawerOpen = true);

  @action closeDrawer = () => (this.drawerOpen = false);

  @action openDialog = () => (this.dialogOpen = true);

  @action closeDialog = () => (this.dialogOpen = false);

  @action showLoginDialog = () => (this.dialogContent = 'login');

  @action showValidateLoginDialog = () => (this.dialogContent = 'validateLogin');
}

const viewStore = new ViewStore();

export default viewStore;

export { ViewStore };

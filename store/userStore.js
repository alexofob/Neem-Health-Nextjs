/* eslint no-nested-ternary: "off" */

import { observable, computed, action, autorun } from 'mobx';
import { loadProfile, saveProfile, removeItem } from './utils/localStorage';

class UserStore {
  @observable currentUser;

  constructor() {
    this.currentUser = loadProfile();
    autorun(() => {
      if (this.currentUser == null) {
        removeItem('profile');
      }
      saveProfile(this.currentUser);
    });
  }

  @computed get isAuthenticated() {
    return !!this.currentUser;
  }

  @computed get user() {
    return ((this.currentUser == null) ? 'Anonymous' :
      this.currentUser.given_name ? this.currentUser.given_name :
      this.currentUser.nickname ? this.currentUser.nickname :
      this.currentUser.name ? this.currentUser.given_name :
      this.currentUser.email ? this.currentUser.email : 'Unknown');
  }

  @action updateCurrentUser = user => (this.currentUser = user);

}

const userStore = new UserStore();

export default userStore;

export { UserStore };

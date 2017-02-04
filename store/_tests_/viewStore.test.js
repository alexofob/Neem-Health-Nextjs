// Below declaration is for jest functions which are available globally
/* global describe it expect */

import { ViewStore } from '../viewStore';

describe('ViewStore', () => {
  it('notifies user of an event', () => {
    const store = new ViewStore();
    store.notifyUser('message');
    expect(store.snackbarOpen).toBe(true);
    expect(store.snackbarMessage).toBe('message');
  });
  it('opens side bar navigation', () => {
    const store = new ViewStore();
    store.openDrawer();
    expect(store.drawerOpen).toBe(true);
  });
  it('closes side bar navigation', () => {
    const store = new ViewStore();
    store.closeDrawer();
    expect(store.drawerOpen).toBe(false);
  });
});

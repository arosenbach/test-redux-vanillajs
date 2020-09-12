export default function (
  state = [
    { id: 1, name: "App 1", pinned: false },
    { id: 2, name: "App 2", pinned: false },
    { id: 3, name: "App 3", pinned: false },
    { id: 4, name: "App 4", pinned: false },
    { id: 5, name: "App 5", pinned: false },
    { id: 6, name: "App 6", pinned: false },
    { id: 7, name: "App 7", pinned: false }
  ],
  action
) {
  switch (action.type) {
    case "PIN_APP":
      return state.map((app) => {
        if (app.id === action.payload.id) {
          app.pinned = true;
        }
        return app;
      });
    case "UNPIN_APP":
      return state.map((app) => {
        if (app.id === action.payload.id) {
          app.pinned = false;
        }
        return app;
      });
    default:
      return state;
  }
}

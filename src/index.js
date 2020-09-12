import "./styles.css";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import { pinApp, unpinApp } from "./actions";
import { logger } from "./middlewares";

const pinnedAppsEl = document.getElementById("pinnedApps");
const appsEl = document.getElementById("apps");
const handleChange = () => {
  const state = store.getState();
  console.dir(state);

  pinnedAppsEl.innerHTML = state.pinnedApps;

  appsEl.innerHTML = "";
  state.apps.forEach((app) => {
    const li = document.createElement("LI");
    const label = document.createElement("LABEL");
    label.htmlFor = "pinned" + app.id;
    label.appendChild(
      document.createTextNode(
        `${app.name} : ${app.pinned ? "PINNED" : "UNPINNED"}`
      )
    );
    li.appendChild(label);
    const checkbox = document.createElement("input");
    checkbox.id = "pinned" + app.id;
    checkbox.value = app.id;
    checkbox.type = "checkbox";
    checkbox.checked = app.pinned;
    checkbox.addEventListener("change", (event) => {
      const toggle = event.target.checked ? pinApp : unpinApp;
      store.dispatch(toggle(parseInt(event.target.value, 10)));
    });
    li.appendChild(checkbox);
    appsEl.appendChild(li);
  });
};

const store = createStore(reducer, applyMiddleware(logger));

console.log("init state", store.getState());

const unsubscribe = store.subscribe(handleChange);

store.dispatch(unpinApp(1));
// unsubscribe();

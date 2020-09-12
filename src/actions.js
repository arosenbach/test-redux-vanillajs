const pinApp = (id) => ({ type: "PIN_APP", payload: { id } });
const unpinApp = (id) => ({ type: "UNPIN_APP", payload: { id } });
export { pinApp, unpinApp };

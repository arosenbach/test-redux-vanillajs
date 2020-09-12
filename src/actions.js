const addTodo = (msg) => ({type:'ADD_TODO', text: msg});
const pinApp = (appId) => ({type:'PIN_APP', payload: {appId}});
const unpinApp = (appId)=> ({type:'UNPIN_APP', payload: {appId}});
export {
  addTodo,
   pinApp,
   unpinApp
}
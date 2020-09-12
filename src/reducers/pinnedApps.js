export default function (state = [], action) {
  switch(action.type){
    case 'PIN_APP': 
      return state.concat([action.payload.appId])
    case 'UNPIN_APP': 
      return state.filter(appId => appId !== action.payload.appId)
    default: 
      return state
  }
};
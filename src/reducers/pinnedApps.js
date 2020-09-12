export default function (state = [], action) {
  switch (action.type) {
    case "PIN_APP":
      return state.concat([action.payload.id]);
    case "UNPIN_APP":
      return state.filter((id) => id !== action.payload.id);
    default:
      return state;
  }
}

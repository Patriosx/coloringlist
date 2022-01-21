export default function reducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_AOE2":
      return {
        ...state,
        AOE2: action.payload,
      };
    case "ADD_TO_RESULTS":
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    case "DELETE_FROM_RESULTS":
      return {
        ...state,
        results: state.results.filter((item) => item.id !== action.payload),
      };
    default:
      return { ...state };
  }
}

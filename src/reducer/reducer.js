export default (type, initialData) => (state = {
  loading: false,
  error:false,
  data: initialData || [],
}, action) => {
  switch (action.type) {
    case `REQUEST/${type}`:
      return {
        ...state,
        loading: true,
      };
    case `OK/${type}`:

      return {
        ...state,
        loading: false,
        data: action.payload,
        error:false
      };
    case `ERROR/${type}`:
      return {
        ...state,
        error: action.error || true,
        loading: false,
      };
    default:
      return state;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };

    case "SIGN_IN_USER_SUCCEESS":
      return {
        ...state,
        isLoading: false,
        showAlert: false,
        user: action.payload,
      };

    case "SIGN_IN_USER_ERROR":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        user: "",
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        isLoading: false,
        showAlert: false,
        user: "",
        editItem: "",
        jobs: [],
      };

    case "GET_JOBS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        showAlert: false,
        jobs: action.payload,
        editItem: "",
      };

    case "GET_JOBS_ERROR":
      return {
        ...state,
        isLoading: false,
        editItem: "",
      };

    case "CREATE_JOB_SUCCESS":
      return {
        ...state,
        isLoading: false,
        showAlert: false,
        jobs: [...state.jobs, action.payload],
      };

    case "CREATE_JOB_ERROR":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
      };

    case "DELETE_JOB_SUCCESS":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
      };

    case "GET_SINGLE_JOB_SUCCESS":
      return {
        ...state,
        isLoading: false,
        showAlert: false,
        editComplete: false,
        editItem: action.payload,
      };

    case "GET_SINGLE_JOB_ERROR":
      return {
        ...state,
        isLoading: false,
        editItem: "",
      };

    case "UPDATE_JOB_SUCCESS":
      return {
        ...state,
        isLoading: false,
        showAlert: false,
        editItem: action.payload,
        editComplete: true,
      };

    case "UPDATE_JOB_ERROR":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        editItem: "",
        editComplete: false,
      };

    default:
      return state;
  }
};

export default reducer;

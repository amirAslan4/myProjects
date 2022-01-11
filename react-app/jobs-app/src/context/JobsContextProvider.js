import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import "../axios";

//reducer
import reducer from "./reducer";

const initialState = {
  isLoading: false,
  showAlert: false,
  user: "",
  jobs: [],
  editItem: "",
  editComplete: false,
};

export const JobsContext = createContext();

const JobsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Set Loading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  //Login User
  const login = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post("/auth/login", { ...userInput });

      dispatch({ type: "SIGN_IN_USER_SUCCEESS", payload: data.user.name });

      window.localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      dispatch({ type: "SIGN_IN_USER_ERROR" });
    }
  };

  //Register User
  const register = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(`/auth/register`, { ...userInput });

      dispatch({ type: "SIGN_IN_USER_SUCCEESS", payload: data.user.name });

      window.localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      dispatch({ type: "SIGN_IN_USER_ERROR" });
    }
  };

  //Set User
  useEffect(() => {
    const user = window.localStorage.getItem("user");

    if (user) {
      const { name } = JSON.parse(user);

      dispatch({ type: "SET_USER", payload: name });
    }
  }, []);

  //Logout
  const logout = () => {
    window.localStorage.removeItem("user");

    dispatch({ type: "LOGOUT_USER" });
  };

  //Get All Jobs
  const fetchAllJobs = async () => {
    setLoading();
    try {
      const { data } = await axios.get("/jobs");

      dispatch({ type: "GET_JOBS_SUCCESS", payload: data.jobs });
    } catch (error) {
      dispatch({ type: "GET_JOBS_ERROR" });
      logout();
    }
  };

  //Create Job
  const createJob = async (userInput) => {
    setLoading();

    try {
      const { data } = await axios.post("/jobs", { ...userInput });

      dispatch({ type: "CREATE_JOB_SUCCESS", payload: data.job });
    } catch (error) {
      dispatch({ type: "CREATE_JOB_ERROR" });
    }
  };

  //Delete Job
  const deleteJob = async (id) => {
    setLoading();

    try {
      await axios.delete(`/jobs/${id}`);

      fetchAllJobs();
    } catch (error) {
      dispatch({ type: "DELETE_JOB_SUCCESS" });
    }
  };

  //Get-Single-Job
  const getSingleJob = async (id) => {
    setLoading();
    try {
      const { data } = await axios.get(`/jobs/${id}`);

      dispatch({ type: "GET_SINGLE_JOB_SUCCESS", payload: data.job });
    } catch (error) {
      dispatch({ type: "GET_SINGLE_JOB_ERROR" });
    }
  };

  //Update-Job
  const editJob = async (id, userInput) => {
    setLoading();
    try {
      const { data } = await axios.patch(`/jobs/${id}`, { ...userInput });

      dispatch({ type: "UPDATE_JOB_SUCCESS", payload: data.job });
    } catch (erro) {
      dispatch({ type: "UPDATE_JOB_ERROR" });
    }
  };

  return (
    <JobsContext.Provider
      value={{
        ...state,
        setLoading,
        login,
        register,
        logout,
        fetchAllJobs,
        createJob,
        deleteJob,
        getSingleJob,
        editJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsContextProvider;

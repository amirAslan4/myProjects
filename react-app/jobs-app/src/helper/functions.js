const setStatusColor = (status) => {
  if (status === "interview") {
    return "#0f5132";
  } else if (status === "declined") {
    return "#842029";
  } else {
    return "#927238";
  }
};

const setStatusBackground = (status) => {
  if (status === "interview") {
    return "#d1e7dd";
  } else if (status === "declined") {
    return "#f8d7da";
  } else {
    return "#f7f3d7";
  }
};

export { setStatusColor, setStatusBackground };

const usePreventLeave = () => {
  const listener = (event) => {
    console.log(event);
    console.log(event.returnValue);
    event.preventDefault();
    event.returnValue = "";
  };
  const click = (event) => {
    console.log(event);
    console.log(event.returnValue);
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", click);
  return { enablePrevent, disablePrevent };
};

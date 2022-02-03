const useConfirm = (message, onConfirm, onCancle) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onConfirm && typeof onCancle !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  };
  return confirmAction;
};

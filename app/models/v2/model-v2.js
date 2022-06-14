export function modifyBtnAccess(enableBtn, disabledBtn) {
  enableBtn.classList.remove("disabled");
  disabledBtn.classList.add("disabled");
}

export function addUpdateToggleEffect(updateBtn) {
  updateBtn.setAttribute("data-toggle", "modal");
  updateBtn.setAttribute("data-target", "#exampleModal");
}

export function toggleDataDismiss(enableBtn, disabledBtn) {
  // data-dismiss: not allow to quit the modal
  //if it is in another status (can not add in update mode)
  enableBtn.setAttribute("data-dismiss", "modal");
  disabledBtn.removeAttribute("data-dismiss");
}

export function resetDataDismiss(enableBtn, disabledBtn) {
  enableBtn.removeAttribute("data-dismiss");
  disabledBtn.removeAttribute("data-dismiss");
}

export function clearTableRenderedData(foodTable) {
  foodTable.innerHTML = "";
}

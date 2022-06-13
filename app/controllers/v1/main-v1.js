// Requirement
//--------------------------------1
// Handle Form input ---> object {} (class Food {} : folder models)
// Bấm thêm món -----> 1) render food detail
//                     2) add array global      ----->   1)  bất kì khi nào array global thay đổi -> update localstorage
//                                                                                                -> update table food list (getLocalStorage)

//--------------------------------2
// Search --> filter global array
// Filter show --> filter global array

//--------------------------------3
// Render food list phải có 2 button delete, update

//--------------------------------4
// Chức năng cập nhật:
// Disable ID field
// Nhả thông tin vào các ô input
// Xóa button Thêm

// Chức năng thêm mới
// Xóa button sửa

import { verify_input } from "../../models/v1/model-v1.js";
import { updateUI, reset_warning_message } from "../../views/foodUI.js";

let foodList = JSON.parse(localStorage.getItem("arr"));

const form = document.getElementById("foodForm");

function appendFoodItem(object) {
  localStorage.setItem(`${object.foodId}`, JSON.stringify(object));
}

// function clearFormInput() {
//   document.getElementById("foodID").value = '';
//   document.getElementById("tenMon").value = '';
//   document.getElementById("loai").value = '';
//   document.getElementById("giaMon").value = '';
//   document.getElementById("khuyenMai").value = '';
//   document.getElementById("hinhMon").value = '';
//   document.getElementById("moTa").value = '';
// }

function getUserForm(event) {
  event.preventDefault();
  reset_warning_message();

  let addedItem = {
    foodId: document.getElementById("foodID").value,
    foodName: document.getElementById("tenMon").value,
    foodCategory: document.getElementById("loai").value,
    foodPrice: document.getElementById("giaMon").value,
    discount: document.getElementById("khuyenMai").value,
    discountPrice:
      parseInt(document.getElementById("giaMon").value) *
      (1 - parseInt(document.getElementById("khuyenMai").value) / 100),
    stock: document.getElementById("tinhTrang").value,
    foodImg: document.getElementById("hinhMon").value,
    description: document.getElementById("moTa").value,
  };
 
  if(verify_input(addedItem)){
    new updateUI(addedItem);
    appendFoodItem(addedItem);
    form.reset();
    reset_warning_message();
  }
 
  

 
  //   clearFormInput();
}

// const IdVerify = document.getElementById("invalidID");
//   IdVerify.innerHTML = 'Invalid Id';

form.addEventListener("submit", getUserForm);

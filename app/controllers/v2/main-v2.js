// DOM foodtable 
const foodTable = document.getElementById("tbodyFood"); 

// DOM pop up modal 
const foodForm = document.getElementById("foodForm"); 
const foodId = document.getElementById("foodID"); 
const foodName = document.getElementById("tenMon"); 
const foodCategory = document.getElementById("loai"); 
const price = document.getElementById("giaMon"); 
const discount = document.getElementById("khuyenMai"); 
const stock = document.getElementById("tinhTrang"); 
const foodUrl = document.getElementById("hinhMon"); 
const description = document.getElementById("moTa"); 



const updateModalBtn = document.getElementById("btnCapNhat"); 
const addItemModalBtn = document.getElementById("btnThemMon"); 

const addItemBtn = document.getElementById("btnThem"); 
addItemBtn.addEventListener('click', () => {
    console.log("A"); 
   
  

    addNewItem();
    foodId.removeAttribute("disabled"); }); 

// addItemBtn.setAttribute("data-dismiss", "modal"); 
// Get the current food list in local storage 
// const foodList = JSON.parse(localStorage.getItem("foodList")); 

function renderFoodList(){

    for (const item of Object.keys(localStorage)){
        //create the element
        const itemValue =  JSON.parse(localStorage.getItem(item)); 
        // console.log(itemValue); 
        const foodElement = document.createElement('tr'); 
        insertRow(foodElement, itemValue);  
    
        //add to the table
      
    }
    
}

function addUpdateToggleEffect(updateBtn){
    updateBtn.setAttribute("data-toggle", "modal"); 
    updateBtn.setAttribute("data-target", "#exampleModal"); 

}

function addDeleteUpdateButton(foodEl, foodId){
    foodEl.insertCell(-1).innerHTML = `
    <span class="deleteBtn">
        <i class="fas fa-trash-alt fid${foodId}"></i>
    </span>
    <span class="updateBtn">
        <i class="fas fa-edit fid${foodId}"></i>
    </span>`
    foodTable.appendChild(foodEl); 
    //add update and delete button for each item 
    const deleteBtn = document.querySelector(`.fa-trash-alt.fid${foodId}`);
    const updateBtn = document.querySelector(`.fa-edit.fid${foodId}`); 
    addUpdateToggleEffect(updateBtn); 
    // updateModalBtn.setAttribute("data-dismiss", "modal"); 
    deleteBtn.addEventListener('click', deleteItem); 
    updateBtn.addEventListener('click', updateItem); 
   

}


function deleteItem(event){
    console.log("deleted")
    console.log(event.target.closest('tr').querySelector('.foodIdTag').innerHTML); 
    const selectedItem = event.target.closest('tr').querySelector('.foodIdTag').innerHTML; 
    // console.log(selectedItem)
    localStorage.removeItem(selectedItem); 
    // console.log(Object.keys(localStorage));
    // location.reload();
    
    
    foodTable.innerHTML =''; 
    renderFoodList(); 

}
function clearInput(){
    foodId.setAttribute("value", "");
    foodName.setAttribute("value", ""); 
    $('#loai').val(''); 
    price.setAttribute("value", ''); 
    $('#khuyenMai').val(''); 
    $('#tinhTrang').val('');  
    foodUrl.setAttribute("value", '');
    description.innerHTML =  ''; 

}

function addNewItem(){

    clearInput(); 
    addItemModalBtn.classList.remove("disabled"); 
    updateModalBtn.classList.add("disabled");
    addItemModalBtn.setAttribute("data-dismiss", "modal"); 
    updateModalBtn.removeAttribute("data-dismiss"); 
    addItemModalBtn.addEventListener('click', updateFoodItem); 
}

function renderFoodItemModal(updatedItem){
    foodId.setAttribute("value", updatedItem.foodId); 
    foodId.setAttribute("disabled","true");  
    foodName.setAttribute("value", updatedItem.foodName); 
    // foodCategory.setAttribute("value", updatedItem.foodCategory); 
    $('#loai').val(updatedItem.foodCategory);
    price.setAttribute("value", updatedItem.foodPrice); 
    $('#khuyenMai').val(updatedItem.discount); 
    $('#tinhTrang').val(updatedItem.stock);  
    foodUrl.setAttribute("value", updatedItem.foodImg);
    description.innerHTML =  updatedItem.description; 

}

function updateItem(event){
    //set attribute of update button with bootstrap toggle 
    const selectedItem = event.target.closest('tr').querySelector('.foodIdTag').innerHTML; 
    const updatedItem = JSON.parse(localStorage.getItem(selectedItem)); 
    // console.log(updateItem); 

    renderFoodItemModal(updatedItem); 
    
    updateModalBtn.setAttribute("data-dismiss", "modal"); 
    addItemModalBtn.removeAttribute("data-dismiss"); 


    addItemModalBtn.classList.add("disabled"); 
    updateModalBtn.classList.remove("disabled");

    updateModalBtn.addEventListener('click', updateFoodItem);
    // clearInput();  




}


function updateFoodItem(){
    const updatedItem = {
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

    localStorage.setItem(`${updatedItem.foodId}`, JSON.stringify(updatedItem)); 
    // console.log(JSON.parse(localStorage)); 

    
    foodTable.innerHTML =''; 
    renderFoodList(); 


}

function insertRow(foodEl, item){
    //add value of item in cell 
    // console.log(item, 1); 
    // console.log(item.foodId, 123)
    const fid = foodEl.insertCell(-1)
    fid.innerHTML = item.foodId; 
    fid.className = 'foodIdTag'; 
    foodEl.insertCell(-1).innerHTML = item.foodName; 
    foodEl.insertCell(-1).innerHTML = item.foodCategory;
    foodEl.insertCell(-1).innerHTML = item.foodPrice;
    foodEl.insertCell(-1).innerHTML = item.discount;
    foodEl.insertCell(-1).innerHTML = item.discountPrice;
    foodEl.insertCell(-1).innerHTML = item.stock; 



    addDeleteUpdateButton(foodEl, item.foodId); 
   

}

renderFoodList(); 




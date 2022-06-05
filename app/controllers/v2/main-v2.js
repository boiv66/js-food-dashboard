const foodTable = document.getElementById("tbodyFood"); 

// Get the current food list in local storage 
const foodList = JSON.parse(localStorage.getItem("foodList")); 

function renderFoodList(){
    for (const item of foodList){
        //create the element
        const foodElement = document.createElement('tr'); 
        insertRow(foodElement, item);  
    
        //add to the table
        foodTable.appendChild(foodElement); 
    }
    
}


function insertRow(foodEl, item){
    //add value of item in cell 
    foodEl.insertCell(-1).innerHTML = item.foodId; 
    foodEl.insertCell(-1).innerHTML = item.foodName; 
    foodEl.insertCell(-1).innerHTML = item.foodCategory;
    foodEl.insertCell(-1).innerHTML = item.foodPrice;
    foodEl.insertCell(-1).innerHTML = item.discount;
    foodEl.insertCell(-1).innerHTML = item.discountPrice;
    foodEl.insertCell(-1).innerHTML = item.stock; 
}




renderFoodList()
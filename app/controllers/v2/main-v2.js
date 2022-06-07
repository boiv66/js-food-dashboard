const foodTable = document.getElementById("tbodyFood"); 

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
        foodTable.appendChild(foodElement); 
    }
    
}


function insertRow(foodEl, item){
    //add value of item in cell 
    console.log(item, 1); 
    console.log(item.foodId, 123)
    foodEl.insertCell(-1).innerHTML = item.foodId; 
    foodEl.insertCell(-1).innerHTML = item.foodName; 
    foodEl.insertCell(-1).innerHTML = item.foodCategory;
    foodEl.insertCell(-1).innerHTML = item.foodPrice;
    foodEl.insertCell(-1).innerHTML = item.discount;
    foodEl.insertCell(-1).innerHTML = item.discountPrice;
    foodEl.insertCell(-1).innerHTML = item.stock; 
}




renderFoodList()
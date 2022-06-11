import { warning_message } from "../../views/foodUI";

export function verify_input(object){
    if (!object){
      return false; 
    }
    const array_check = [];
    array_check.push(verify_foodId(object.foodId)); 
    array_check.push(verify_character_only(object.foodName)); 
    array_check.push(verify_option(object.foodCategory, category)); 
    array_check.push(verify_option(object.discountPrice, price)); 
    array_check.push(verify_option(object.stock, stock)); 
    array_chjeck.push(verify_url(object.foodImg)); 
    array_check.push(verify_empty(object.description, 'description'))


    return array_check.every(check  => check === 'true'); 


  
  
  }
  

  function verify_empty(value, type){
      if (type === 'description' && !value.trim().length){
          warning_message("invalidMoTa", "Description can not be empty.")
        }
        return !value.trim().length; 
  }

  function verify_character_only(value){
      if (verify_empty(value)){
          warning_message("invalidTen", "Food name is empty"); 
          return false; 
      }
      if (!value.every(key => (key >= 65 && key <= 90) || key == 8)){
          warning_message("invalidTen", "Name can not contain digit"); 
          return false; 
      }
      return true; 

  }

  function verify_foodId(value){
     if (verify_empty(value)){
         warning_message("invalidID", "this field input is empty. Enter a value"); 
         return false; 
    }
     if (JSON.parse(localStorage.getItem(value) !== null )){
        warning_message("invalidID", "can not add existed food ID. Enter a different ID");
        return false; 
    }
    return true; 

     

  }

  function verify_option(value, type){
      if (type === 'category' && verify_empty(value)){
          warning_message("invalidLoai", "You haven't select category.");
          return false; 

      }
      else if (type === 'price' && verify_empty(value)){
        warning_message("invalidKM", "You haven't select discount price.");
        return false; 

      }

      else if(type === 'stock' && verify_empty(value)){
      warning_message("invalidTT", "You haven't select stock condition.");
      return false; 

      }
      return true; 
    
  }

  function verify_url(value){
      verify_empty(value)
  }


export class updateUI{
    constructor(object){
        this.foodItem = object; 
        this.imgUrl = document.getElementById("imgMonAn");
        // displayInput 
        this.foodID = document.getElementById("spMa");
        this.foodName = document.getElementById("spTenMon"); 
        this.category = document.getElementById("spLoaiMon");
        this.price = document.getElementById("spGia"); 
        this.discount = document.getElementById("spKM"); 
        this.discountPrice = document.getElementById("spGiaKM"); 
        this.stock = document.getElementById("spTT");
        this.description = document.getElementById("pMoTa"); 



        this.displayInput(); 
    }

    displayInput(){
        this.imgUrl.src = this.foodItem.foodImg; 
        this.foodID.innerHTML = this.foodItem.foodId; 
        this.foodName.innerHTML = this.foodItem.foodName; 
        this.category.innerHTML = this.foodItem.foodCategory; 
        this.price.innerHTML = this.foodItem.foodPrice; 
        this.discount.innerHTML = this.foodItem.discount; 
        this.discountPrice.innerHTML = this.foodItem.discountPrice;
        this.stock.innerHTML = this.foodItem.stock; 
        this.description.innerHTML = this.foodItem.description; 
    }
        
    
}

export function warning_message(elementID, message){
    const warningEl = document.getElementById(elementID); 
    warningEl.innerHTML = message; 

}
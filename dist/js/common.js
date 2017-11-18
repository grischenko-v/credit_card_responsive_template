(function(){
   forms = document.querySelectorAll("form");
  //http req
    sendBtn.addEventListener('click', function(e){
    e.preventDefault();   

     if(nameCheck(card_num0.value) &&
        nameCheck(card_num1.value) &&
        nameCheck(card_num2.value) &&
        nameCheck(card_num3.value) &&
        CVVCheck(cvc.value)        &&
        nameCheck(personName.value)
     	){     	
         var http = new XMLHttpRequest();
         var url = "";
         var params =  {
             cardNumber: card_num0.value + card_num1.value + card_num2.value + card_num3.value,
             name:       personName.value,
             cvv:        cvc.value,
             month:      month.options.selectedIndex,
             year:       year.options.selectedIndex

         }
         http.open("POST", url, true);
         http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         http.send(JSON.stringify(params))
         forms[0].reset();
     }     
  }, false);

   card_num0.addEventListener("keydown", cardRedBorderAdd, false);
   card_num1.addEventListener("keydown", cardRedBorderAdd, false);
   card_num2.addEventListener("keydown", cardRedBorderAdd, false);
   card_num3.addEventListener("keydown", cardRedBorderAdd, false);
   personName.addEventListener("keydown", nameRedBorderAdd, false);    
   cvc.addEventListener("keydown", cvcRedBorderAdd, false);
 

  //add red lines to inputs
  function cardRedBorderAdd(e){
  	  if(!cardNumberFieldCheck(this.value))   this.classList.add("redinputbottom");     
     else this.classList.remove("redinputbottom");   
  } 
  
  function nameRedBorderAdd(e){
  	if(!nameCheck(this.value))   this.classList.add("redinputbottom");     
     else this.classList.remove("redinputbottom"); 
  }
  
  function cvcRedBorderAdd(e){
  	if(!CVVCheck(this.value))   this.classList.add("redinputbottom");     
     else this.classList.remove("redinputbottom"); 
  }
 
  //check inputs functions
  function nameCheck(str){  
    if(/[a-z]{4,}/i.test(str)) 	return true; 
    return false;
  };
  
  function CVVCheck(str){
    if(/[0-9]{2}/.test(str) && str.length <3) return true;
    return false;
  };

  function cardNumberFieldCheck(str){
    if(/[0-9]{3}/.test(str) && str.length < 4) return true;   
    return false;
 };

})();

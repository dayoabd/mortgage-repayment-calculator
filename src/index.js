let mortageAmount = document.getElementById("Mortgage_Amount");
let interestRate =  document.getElementById("Interest_rate")
let empty = document.getElementById("empty")
let result = document.getElementById("result")
let button  = document.getElementById("Calculate")
let clearAll  = document.getElementById("clearAll")
let mortageTerm = document.getElementById("Mortgage_Term");




  function Calculate() {
    if (!mortageAmount.value) {
      let e00 = document.getElementById("e0") 
      e00.innerHTML = "This field is required......" ;
      e00.style.color = "red"
      let p1 = document.getElementById("Mortgage_Amount").style.borderColor = "red"
      let p2  = document.getElementById("just1").style.backgroundColor  = "red"
    }
    else  if(isNaN(mortageAmount.value)){
          let e00 = document.getElementById("e0") 
      e00.innerHTML = "only numbers are allowed......" ;
      e00.style.color = "red"
      let p1 = document.getElementById("Mortgage_Amount").style.borderColor = "red"
      let p2  = document.getElementById("just1").style.backgroundColor  = "red"
    }

    if (!mortageTerm.value) {
      let e11 = document.getElementById("e1") 
      e11.innerHTML = "This field is required......" ;
      e11.style.color = "red"
      let p1 = document.getElementById("Mortgage_Term").style.borderColor = "red"
      let p2  = document.getElementById("just2").style.backgroundColor  = "red"
    }
    else  if(isNaN(mortageTerm.value)){
      let e11 = document.getElementById("e1") 
      e11.innerHTML = "only numbers are allowed......" ;
      e11.style.color = "red"
      let p1 = document.getElementById("Mortgage_Term").style.borderColor = "red"
      let p2  = document.getElementById("just2").style.backgroundColor  = "red"
    }

    if (!interestRate.value) {
      let e22 = document.getElementById("e2") 
      e22.innerHTML = "This field is required ......................" ;
      e22.style.color = "red"
      let p1 = document.getElementById("Interest_rate").style.borderColor = "red"
      let p2  = document.getElementById("just3").style.backgroundColor  = "red"
    }
    else  if(isNaN(interestRate.value)){
      let e22 = document.getElementById("e2") 
      e22.innerHTML = "only numbers are allowed......" ;
      e22.style.color = "red"
      let p1 = document.getElementById("Interest_rate").style.borderColor = "red"
      let p2  = document.getElementById("just3").style.backgroundColor  = "red"
    }
    
    
    let  Calcu = Number(mortageAmount.value) * Number(interestRate.value) / 100 +  Number(mortageAmount.value);
    console.log(Calcu);
    let monthly = Number(mortageTerm) !== 0 ? (Calcu / (Number(mortageTerm.value) * 12)).toFixed(2) : 0;
    console.log(monthly);

     let month  = document.getElementById("Monthly").innerHTML  = `£${monthly}`
    let repay = document.getElementById("Repay").innerHTML  = `£${Calcu}`


     if (mortageAmount.value  !=="" &&  interestRate.value  !== ""  &&  mortageTerm.value !=="") {
      empty.style.display = "none"
      result.style.display  = "flex"
     }
  }

  function press1() {
      let e00 = document.getElementById("e0") 
      e00.innerHTML = "This field is required......" ;
      e00.style.display = "none"
      let p1 = document.getElementById("Mortgage_Amount").style.borderColor = "#99a1af"
      let p2  = document.getElementById("just1").style.backgroundColor  = "#cbfbf1"   
  }
  function press2() {
      let e11 = document.getElementById("e1") 
      e11.innerHTML = "This field is required......" ;
      e11.style.display = "none"
      let p1 = document.getElementById("Mortgage_Term").style.borderColor = "#99a1af"
      let p2  = document.getElementById("just2").style.backgroundColor  = "#cbfbf1"   
  }
  function press3() {
      let e22 = document.getElementById("e2") 
      e22.innerHTML = "This field is required......" ;
      e22.style.display = "none"
      let p1 = document.getElementById("Interest_rate").style.borderColor = "#99a1af"
      let p2  = document.getElementById("just3").style.backgroundColor  = "#cbfbf1"   
  }

  function Clear() {
    mortageAmount.value = ""
    mortageAmount.style.borderColor = "#99a1af"
    interestRate.style.borderColor = "#99a1af"
    mortageTerm.style.borderColor = "#99a1af"
    e00 = document.getElementById("e0")
    e00.innerHTML = "This field is required......" ;
    e00.style.display = "none"
    e11 = document.getElementById("e1")
    e11.innerHTML = "This field is required......" ;  
    e11.style.display = "none"
    e22 = document.getElementById("e2")
    e22.innerHTML = "This field is required......" ;
    e22.style.display = "none"
    let p1 = document.getElementById("Mortgage_Amount").style.borderColor = "#99a1af"
    let p5 = document.getElementById("Mortgage_Term").style.borderColor = "#99a1af"
    let p6 = document.getElementById("Interest_rate").style.borderColor = "#99a1af"
    let p2  = document.getElementById("just1").style.backgroundColor  = "#cbfbf1"
    let p3  = document.getElementById("just2").style.backgroundColor  = "#cbfbf1"
    let p4  = document.getElementById("just3").style.backgroundColor  = "#cbfbf1"
    interestRate.value = ""
    mortageTerm.value = ""
    empty.style.display = "flex"
    result.style.display  = "none"  }

    let radioButtons = document.querySelectorAll('input[name="mortgage-type"]');

    radioButtons.forEach(radio => {
      radio.addEventListener('change', function() {
        if (this.checked) {
          console.log("Selected mortgage type:", this.nextElementSibling.textContent);
        }});
    }); 
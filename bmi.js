
  function task(event){
    event.preventDefault();
    let cal = JSON.parse(localStorage.getItem("task")) || [];
    let age =document.getElementById("age").value;
    let gender =document.getElementById("gender").value;
    let height = document.getElementById("height").value;
    let weight =document.getElementById("weight").value;


    let data ={age,gender,height,weight}
cal.push(data)
localStorage.setItem("task", JSON.stringify(cal));
  }

  
  
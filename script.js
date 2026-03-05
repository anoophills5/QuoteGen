const btn = document.getElementById("btn");
const title = document.getElementById("title");

title.style.color = "black";


btn.addEventListener("click", ()=>{
title.textContent = "Loading the quote...";
 btn.disabled = true;

  setTimeout( async ()=>{
  try{  var res = await fetch("https://dummyjson.com/quotes/random");
    var data = await res.json();
    title.textContent = `${data.quote}  -  ${data.author}`;
  } catch(err){
    title.textContent = "Failed";
  }
  finally{
       btn.disabled = false;
  }
  },500);
 
    
})
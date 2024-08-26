    
    let ctr = 0; 
    function deletetodo(ind){
      const ele = document.getElementById(ind);
      console.log(ele);
      ele.parentNode.removeChild(ele);           
 
    }

    function addTodo(){
            ctr = ctr+1;
            const task = document.querySelector("input").value;
            const spanEl = document.createElement("span");
            const buttonEl = document.createElement("button");
            buttonEl.setAttribute("onclick", "deletetodo("+ctr+")");
            spanEl.innerHTML = task;
            buttonEl.innerHTML="delete";  
            const divEl = document.createElement("div");
            divEl.setAttribute("id", ctr);
            divEl.appendChild(spanEl);
            divEl.appendChild(buttonEl);
            
            document.querySelector("body").appendChild(divEl);
    }
    
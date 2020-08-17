"use strict";

class Article {
    constructor(firstInput,secondInput,valueInput){
        this.firstInput = firstInput;
        this.secondInput = secondInput;
        this.valueInput = valueInput;
        }


    static addArticle(article){
        let list=document.querySelector("#list");
        let link=document.createElement("li");

        link.innerHTML=
        `<a class="ctrl del">x</a>
        <article class="">${article.firstInput}
            <span>${article.secondInput}</span>
        </article>
        <input type="number" class="ctrl" value="${article.valueInput}">`;
        link.classList.add("dude-enter");
        list.appendChild(link);

    }

    static deleteArticle(){
        document.addEventListener("click",function(e){
            if(e.target.classList.contains("del")){   
                if(e.target.parentElement.classList.contains("dude-enter-active")){
                    e.target.parentElement.classList.add("dude-leave-to");
                    setTimeout(function(){
                        e.target.parentElement.remove();
                    },200);                                      
                } 
            }
               
        });
       
    }

    static cloneInputs(first,second){
        let large = document.querySelector("#preview");
        let small = document.querySelector("#small-preview");
        first.addEventListener("keyup",function(e){
            large.textContent=e.target.value;
        });
        second.addEventListener("keyup",function(e){
            small.textContent=e.target.value;
            small.style.fontSize=60+"%";
        });

        
    }
    static clearInputs(){
        document.querySelector("#first").value="";
        document.querySelector("#first").focus();
        document.querySelector("#second").value="";
        document.querySelector("#preview").textContent="";
        document.querySelector("#small-preview").textContent="";

    }

    static colorArticle(){
        document.addEventListener('input',function(e){   
            switch (true) {
            case (e.target.value<10):
              e.target.previousElementSibling.classList.add("faded");
              e.target.previousElementSibling.classList.remove("gold");
                break;
            case (e.target.value>50):
              e.target.previousElementSibling.classList.add("gold");
              e.target.previousElementSibling.classList.remove("faded");
                break;
            case(e.target.value<50 && e.target.value>10):
                e.target.previousElementSibling.classList.remove("faded");
                e.target.previousElementSibling.classList.remove("gold");
                break;           
            }
      });
    }

}

let firstInput=document.querySelector("#first");
let secondInput=document.querySelector("#second");
let valueInput=15;



document.addEventListener('keypress', (e) => {
    if (e.key == "Enter") {
    }else return false; 
    
    if(firstInput.value===""||secondInput.value===""){
        return false;
    }

 
    const article = new Article(firstInput.value,secondInput.value,valueInput);
    Article.addArticle(article);
    Article.clearInputs();
    Article.colorArticle();
    Article.deleteArticle();

    let innerLink=document.querySelectorAll("li");
    innerLink.forEach(ed=>{
            ed.classList.remove("dude-enter");
            ed.classList.add("dude-enter-active");                   
        });   
       

});
    Article.cloneInputs(firstInput,secondInput);




  
        
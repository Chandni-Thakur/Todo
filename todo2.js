let btn= document.querySelector("button");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");
btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText=inp.value;

    let delBtn= document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted")
    }
    console.log("button clicked");
});
/*/let delbtns = document.querySelector(".delete");
for(delBtn of delbtns){
    delBtn.addEventListener("click",function(){  {}
        let par=this.parentElement;
        console.log(par);
        par.remove();
    })
}*/ //becauseit does not apply on new created element 
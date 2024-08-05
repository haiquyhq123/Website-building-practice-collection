const info_ar = ["Conestoga College", "Software Engineer Technology", "Canada"]; 
let pEl = document.querySelector(".effect");
let pos = document.querySelector(".pos");
let main = document.querySelector(".main")
let cardComponet = document.querySelector(".card-component");
let res = "";
let curar = 0;
let curindex = 0;
function effect(){
    pos.textContent ="";
    if(curar < info_ar.length){
        let s = info_ar[curar];
        if(s === "Conestoga College"){
            pos.textContent = "at";
        }
        if(s === "Canada"){
            pos.textContent = "in";
        }
        if(curindex<s.length){
            res+=s[curindex];
            main.innerHTML = res;
            curindex++;
        }
        else{
            curar++;
            curindex = 0;
            
            res = "";
        }
    }
    else{
        curar = 0;
    }
    setTimeout(effect,200);
}
effect();



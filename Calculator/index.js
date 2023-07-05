(function(){
let writePad = document.querySelector("input");
let button = document.querySelectorAll("button");
let equal = document.getElementsByClassName("equal");
let reset = document.getElementsByClassName("reset");
let pop_back = document.getElementsByClassName("pop-back")


equal[0].addEventListener('click',function(e){
    if(writePad.value===""){
        writePad.value=""
    }else{
        let answer = eval(writePad.value);
        writePad.value = answer;
    }
})

button.forEach(function(btn){
    if(btn.dataset.num!=="=" && btn.dataset.num!=="<-" && btn.dataset.num!=="<-"){
    btn.addEventListener('click',function(e){
        let value = e.target.dataset.num;
        if(value === "+/-"){
            // console.log(object)
            writePad.value = String(parseInt(writePad.value)*(-1));
        }
        else
        writePad.value+=value;
    })
}
})
reset[0].addEventListener('click',function(e){
    writePad.value="";
})
pop_back[0].addEventListener('click',function(e){
    if(writePad.value!==''){
        writePad.value=writePad.value.substring(0,writePad.value.length-1);
    }
})
})();
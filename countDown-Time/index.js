const endDate = new Date();

document.getElementsByClassName('date')[0].innerHTML = endDate;
let input = document.querySelectorAll("input");
countDown = () => {
    const now = new Date();
    const diff = Math.floor((now-endDate)/1000);
    if(diff<0) return ;
    input[0].value = Math.floor(diff/24/3600);
    input[1].value = Math.floor(diff/3600%24);
    input[2].value = Math.floor(diff/60%60);
    input[3].value = Math.floor(diff%60);
}


setInterval(()=>{

    countDown();
},1000)


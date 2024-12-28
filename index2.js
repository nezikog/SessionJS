const butt = document.getElementById("click");
const ans = document.getElementById("answer");

butt.addEventListener("click", ()=>{
    ans.innerHTML = `
        <p id="txt">Нажми на меня</p>
    `
})

ans.addEventListener("click", ()=>{
    butt.remove();
})

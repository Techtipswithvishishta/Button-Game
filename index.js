const score_h = document.getElementById("score_h")
const button = document.getElementById("button")
let score = 0;

button.addEventListener("click", ()=>{
    score++
})

function main() {
    if(parseInt(score_h.innerHTML)!= score) {
        score_h.innerHTML=score
    }

   setTimeout(()=>(main()),10) 
}

main()
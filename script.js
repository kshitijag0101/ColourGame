var square=document.querySelectorAll(".square")
var h1=document.querySelector("h1")
var button=document.querySelector("button");
let randomcol=document.getElementById("randomcol");
let msg=document.getElementById("msg");
var colours;
var col;
function choosenew(){
    msg.textContent="";
    function getRandInt(min,max) {
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    function randomcolour(){
        let r=getRandInt(0,256),g=getRandInt(0,256),b=getRandInt(0,256);
        return "RGB("+r+", "+g+", "+b+")";
    }
    colours=[]
    for(let i=0;i<6;i++){
        colours.push(randomcolour())
    }
    let ind=getRandInt(0,5)
    col=colours[ind];
    randomcol.textContent=col;
    function changecolour(colour){
        for(let i=0;i<6;i++){
            square[i].style.backgroundColor=colour;
        }
    }
    h1.style.backgroundColor="darkcyan";
    button.style.color="darkcyan";
    msg.style.color="darkcyan";
    for(let i=0;i<6;i++){
        square[i].style.backgroundColor=colours[i];
        square[i].addEventListener("click", () =>{
            var ccol= colours[i];
            if(ccol===col){
                changecolour(ccol);
                h1.style.backgroundColor=ccol;
                button.style.color=ccol;
                msg.textContent="YOU WON";
                msg.style.color=ccol;
                setTimeout(()=>{
                    location.reload();
                },2000)
            }
            else{
                square[i].style.backgroundColor="black";
                msg.textContent="TRY AGAIN";
            }
        })
    }
}
const newcol=document.querySelector("#new");
newcol.addEventListener("click", () => {
    choosenew();
})
choosenew();
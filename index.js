const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn")
;
const increasebtn = document.getElementById("increasebtn")

   

;
const countlabel = document.getElementById("countlabel");
let count = 0;


increasebtn.onclick = function () {
  if(count < 10) {count++;
    countlabel.textContent = count;
}} 
resetbtn.onclick = function () {
    count=0;
    countlabel.textContent = count;
}
decreasebtn 

.onclick = function () {
   if (count > 0) {count--;
    countlabel.textContent = count;
}}
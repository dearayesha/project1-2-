const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
"Elon Musk",
"Larry Page",
"Sergey Brin",
"Jeff Bezos",
"Mark Zuckerberg",
"Larry Ellison",
"Jensen Huang",
"Bernard Arnault",
"Rob Walton",
"Warren Buffett"
];

const listitems = [];

createlist();

function createlist(){

[...richestPeople]
.map(a=>({value:a,sort:Math.random()}))
.sort((a,b)=>a.sort-b.sort)
.map(a=>a.value)
.forEach((person,index)=>{

const listItem = document.createElement("li");
listItem.classList.add("right");
listItem.setAttribute("data-index",index);

listItem.innerHTML = `
<span class="number">${index+1}</span>
<div class="draggable" draggable="true">
<p class="person-name">${person}</p>
<i class="fa-solid fa-grip-lines"></i>
</div>
`;

listitems.push(listItem);
draggable_list.appendChild(listItem);

});

}

check.addEventListener("click",shuffleNames);
check.addEventListener("click",checkOrder);

function shuffleNames(){

draggable_list.innerHTML="";
listitems.length=0;

createlist();

}
function checkOrder(){

listitems.forEach((listItem,index)=>{

const personName =
listItem.querySelector(".person-name").innerText.trim();

if(personName === richestPeople[index]){

listItem.classList.add("right");
listItem.classList.remove("wrong");

}else{

listItem.classList.add("wrong");
listItem.classList.remove("right");

}

});
}
addEventListener();
function dragStart(){
  dragStartIndex = this.closest("li").getAttribute('data-index')

}
function dragEnter(e) {
  this.classList.add('over')
}
function dragLeave() {
  this.classList.remove('over')
}
function dragOver(e) {
  e.preventDefault();
}
function dragDrop() {
  const dragEndIndex = this.closest("li").getAttribute('data-index')
  swapItems(dragStartIndex,dragEndIndex);
  this.classList.remove('over')
}
function swapItems(fromIndex,toIndex){
  const itemOne = listitems[fromIndex].querySelector('.draggable');
  const itemTwo = listitems[toIndex].querySelector('.draggable');
  listitems[fromIndex].appendChild(itemTwo);
  listitems[toIndex].appendChild(itemOne);
}
function checkOder(){
  listitems.fortEach((listitems, index) =>{
    const personName = listitems.querySelector(".draggable").innerText.trim();

    if(personName === richestPeople[index]){
      listItem.classList.add("right");
      listItem.classList.remove("wrong");
    }else{
      listItem.classList.add("wrong");
      listItem.classList.remove("right");
    }
  })
}
function addEventListener(){

const draggables = document.querySelectorAll(".draggable");
const draggable_listItems = document.querySelectorAll(".draggable-list li");

draggables.forEach(dragable=>{
dragable.addEventListener("dragstart",dragStart);
});
draggable_listItems.forEach(item=>{
item.addEventListener("dragover",dragOver);
item.addEventListener("drop",dragDrop);
item.addEventListener("dragenter",dragEnter);
item.addEventListener("dragleave",dragLeave);
});
}
check.addEventListener("click",checkOrder);
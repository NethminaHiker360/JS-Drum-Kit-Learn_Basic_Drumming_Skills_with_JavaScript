const kits=["crash","kick","Snare","tom"];

const containerEl = document.querySelector("container");

kits.forEach((kit)=>{
    const btnEl=document.createElement("button");
    btnEl.classList.add("btn");
    containerEl.appendChild(btnEl);
})
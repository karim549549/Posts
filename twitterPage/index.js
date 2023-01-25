let box=document.getElementById('twite');
let button=document.getElementById('repily');
let counter=0;

button.onclick=function(){

if(counter==0){
    counter++;
    let div=document.createElement("div");
    div.classList.add("space");
    div.classList.add("comment");
    div.innerHTML=
    ` 
    <div class="mb-3 d-flex flex-row  justify-content-center">
        <form action="">
            <input  id="value" placeholder="Comment..." class="message" type="text" name="Comment">
        </form>
        <button id="submit">
        <i class="send ms-3 d-flex align-items-center fa-solid fa-paper-plane"></i>
        </button>
    </div>
    `
    box.appendChild(div);
    let submit=document.getElementById('submit');
    let input=document.getElementById('value');
    let div2=document.createElement("div");
    div2.classList.add("space")
    div2.classList.add("w-75")
    submit.onclick=function(){
        let div=document.createElement("div");
        div.classList.add("space")
        div.classList.add("w-75")
        console.log(div);
        div.innerHTML=
        `
        <div class="fw-medium"><img src="image-amyrobson.png" alt=""><a class="  ps-2 pe-2 " href="">@Amyrobson</a></div>
        <p>${input.value}
        </p>
        `
        box.removeChild(box.lastElementChild);
        counter--;
        box.appendChild(div);

    }
}
else if(counter ==1){
    box.removeChild(box.lastElementChild);
    counter--;
}
}

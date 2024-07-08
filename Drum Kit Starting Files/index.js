

let getLetter = (letter) =>{
    switch (letter) {
        case 'w':
            const audio = new Audio(`sounds/tom-1.mp3`);
            audio.play();
            break;
        case 'a':
            const audio1 = new Audio(`sounds/tom-2.mp3`);
            audio1.play();
            break;
        case 's':
            const audio2 = new Audio(`sounds/tom-3.mp3`);
            audio2.play();
            break           
        case 'd':
            const audio3 = new Audio(`sounds/tom-4.mp3`);
            audio3.play();
            break;
        case 'j':
            const audio4 = new Audio(`sounds/snare.mp3`);
            audio4.play();
            break;
        case 'k':
            const audio5 = new Audio(`sounds/kick-bass.mp3`);
            audio5.play();
            break           
        case 'l':
            const audio6 = new Audio(`sounds/crash.mp3`);
            audio6.play();
            break                    
        default: console.log("ERROR 400!!!");
            break;
    }
}

function curentKey(key) {
    let setKey = document.querySelector("." + key);
    setKey.classList.add("pressed");
    setTimeout(()=>{
        setKey.classList.remove("pressed")
    },100)
}



let numberOfDroms = document.querySelectorAll(".drum").length;

document.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", () =>{
        console.log(button.innerHTML);
        //alert("i whas cliced !!!");

        getLetter(button.innerHTML);
        curentKey(button.innerHTML);
    })
} )

document.addEventListener("keypress", (event)=>{
    console.log("event--->", event.key)
    getLetter(event.key);
    curentKey(event.key);
})






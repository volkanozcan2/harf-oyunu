let chars = "qwertyuıopğüasdfghjklşizxcvbnmöç";
let harf = document.querySelector("#harf");
let seçilen = chars[~~(Math.random() * chars.length)];
harf.innerText = seçilen;

let collect = new Howl({
    src: ["c.mp3"]
})
let fail = new Howl({
    src: ["f.mp3"]
})
chars = chars.split("");
document.addEventListener("keydown", (e) => {
    if (e.key != "CapsLock" || e.key != "Shift") {
        if (e.key == seçilen) {
            collect.play();


            harf.style.color = "blue";
            seçilen = chars[~~(Math.random() * chars.length)]

        } else {

            fail.play();
            harf.style.color = "red";

        }
    }
    harf.innerText = seçilen;
})
document.addEventListener("keyup", (e) => {
    harf.style.color = "black";
})
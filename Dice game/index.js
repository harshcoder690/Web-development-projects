var randomno1 = Math.random();
var randomno2 = Math.random();

randomno1 = Math.ceil(randomno1 * 6);
randomno2 = Math.ceil(randomno2 * 6);

document.querySelector(".img1").setAttribute("src", `images/dice${randomno1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomno2}.png`);



if (randomno1 > randomno2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomno1 < randomno2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "Its a tie!";
}
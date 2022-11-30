const dayHeader = [
    "Day 1: Slice is Right",
    "Day 2: Feesh",
    "Day 3: Elsword",
    "Day 4: Valorant",
    "Day 5: Fall Guys",
    "Day 6: Coin Day",
    "Day 7: Crab Game",
    "Day 8: Art",
    "Day 9: Guess the Music",
    "Day 10: Mojang with Waifu",
    "Day 11: Blackjack",
    "Day 12: Marbles",
    "Day 13: Uno",
    "Day 14: Rythm game",
    "Day 15: Trivia",
    "Day 16: I'm Pomu",
    "Day 17: Cheese",
    "Day 18: OSU",
    "Day 19: Jackbox",
    "Day 20: OW2",
    "Day 21: Yu-Gi-Yo",
    "Day 22: Apex",
    "Day 23: Phasmophobia",
    "Day 24: CS:GO",
    "Day 25: League of Legends"
];

const points = [
    "Point to who's left standing."
]

var modals = document.getElementsByClassName('modal');
var btns = document.getElementsByClassName("button");
var spans=document.getElementsByClassName("close");
const d = new Date();
let numday = d.getDate();


for(let i=0;i<btns.length;i++){
    if(i + 1 <= numday && !(numday >= 26 && numday <= 30)) {
        btns[i].onclick = function() {
            modals[i].style.display = "block";
        }
    }
}

for(let i=0;i<spans.length;i++){
    spans[i].onclick = function() {
        modals[i].style.display = "none";
    }
 }



function ranOut() {
    alert("We ran out of time");
}


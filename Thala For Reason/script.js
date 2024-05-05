const obj = {
    1: "./images/gif1.gif",
    2: "./images/gif2.gif",
    3: "./images/gif3.gif",
    4: "./images/gif4.gif"
}

document.getElementById("but1").style.display = "none"
document.getElementById("but2").style.display = "none"
document.getElementById("but3").style.display = "none"
document.getElementById("text").style.display = "none"
document.getElementById("gif").style.display="none";

const HandleClick = (event) => {
    event.preventDefault()

    var value = document.getElementById("search").value;
    value = value.replace(/\s+/g, '');
    var NumValue = Number(value);
    if (NumValue) {
        if (NumValue === 7) {
            document.getElementById("first").innerText = null;
            document.getElementById("second").innerText = null;
            ThalaForReason();
        }
        else {
            if (NumValue % 7 === 0) {
                document.getElementById("first").innerText = null;
                document.getElementById("second").innerText = null;
                document.getElementById("first").innerText = `${NumValue} / ${NumValue / 7} = 7`
                ThalaForReason();
            }
            else {
                var sum = 0;
                var num = NumValue;

                while (num > 0) {
                    var lastDigit = num % 10;
                    sum += lastDigit;
                    num = Math.floor(num / 10);
                }

                if (sum % 7 === 0) {
                    var StringNum = "";
                    for (var i = 0; i < value.length; i++) {
                        if (value[i] && i === value.length - 1) {
                            StringNum += `${value[i]}`
                        }
                        else if (value[i]) {
                            StringNum += `${value[i]} + `
                        }
                    }
                    if (sum === 7) {
                        document.getElementById("first").innerText = null;
                        document.getElementById("second").innerText = null;
                        document.getElementById("first").innerText = `${StringNum} = ${sum}`
                    }
                    else {
                        document.getElementById("first").innerText = null;
                        document.getElementById("second").innerText = null;
                        document.getElementById("first").innerText = `${StringNum} = ${sum}`
                        document.getElementById("second").innerText = `${sum} / ${sum / 7} = `
                    }
                    ThalaForReason();
                }

                else {
                    NoThalaForReason();
                }
            }
        }
    }
    else {
        if (value.length % 7 === 0) {
            var StringThala = "";
            for (var i = 0; i < value.length; i++) {
                if (value[i] && i === value.length - 1) {
                    StringThala += `${value[i]}`
                }
                else {
                    StringThala += `${value[i]} + `
                }
            }
            if (value.length === 7) {
                document.getElementById("first").innerText = null;
                document.getElementById("second").innerText = null;
                document.getElementById("first").innerText = `${StringThala} = ${value.length}`
            }
            else {
                document.getElementById("first").innerText = null;
                document.getElementById("second").innerText = null;
                document.getElementById("first").innerText = `${StringThala} = ${value.length}`
                document.getElementById("second").innerText = `${value.length} / ${value.length / 7} = 7`
            }
            ThalaForReason();
        }
        else {
            NoThalaForReason();
        }
    }
}

const audio = new Audio("./ThalaForReasonAudio.mp3");

const ThalaForReason = () => {
    document.getElementById("gif").style.display="block";
    document.getElementById("gif").src = `${obj[Math.round(Math.random() * 3) + 1]}`
    audio.play()
    audio.loop = true;
    document.getElementById("but1").style.display = "block"
}

const NoThalaForReason = () => {
    audio.ended = true;
    document.getElementById("gif").style.display="block";
    audio.pause();
    document.getElementById("first").innerText = "No Thala For You"
    document.getElementById("second").innerText = null;
    document.getElementById("but1").style.display = "none"
    document.getElementById("but2").style.display = "none"
    document.getElementById("but3").style.display = "none"
    document.getElementById("text").style.display = "none"
    document.getElementById("gif").src = "./crop.gif";
}

const StopSong = () => {
    document.getElementById("text").style.display = "block"
    document.getElementById("but2").style.display = "block"
}

const StopSong2 = () => {
    document.getElementById("but2").style.display = "none"
    audio.pause();
    document.getElementById("but3").style.display = "block"
}

const PlaySong = () => {
    document.getElementById("but1").style.display = "block"
    document.getElementById("but2").style.display = "none"
    document.getElementById("but3").style.display = "none"
    document.getElementById("text").style.display = "none"
    audio.play();
}

document.getElementById("form").addEventListener("submit", HandleClick);
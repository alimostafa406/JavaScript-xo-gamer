let turn = "x";
let title = document.querySelector(".title");
let array = [];

function check(num1, num2, num3) {

    title.innerHTML = `${array[num1] }  "winner"`;

    document.getElementById("item" + num1).style.background = "#000";
    document.getElementById("item" + num2).style.background = "#000";
    document.getElementById("item" + num3).style.background = "#000";

    setInterval(() => {
        title.innerHTML += '.';
    }, 1000); 

    setTimeout(() => {
        location.reload()
    }, 4000);

} 



function winner () {

    for (let i = 1; i < 10; i++) {

        array[i] = document.getElementById("item" + i).innerHTML
    }

    if (array[1] === array[2] && array[2] === array[3] && array[1] != "") {

        check(1,2,3);
        
    }
    else if (array[4] === array[5] && array[5] === array[6] && array[4] != "") {

        check(4,5,6);
    }
    else if (array[7] === array[8] && array[8] === array[9] && array[7] != "") {

        check(7,8,9);
    }
    else if (array[1] === array[4] && array[4] === array[7] && array[7] != "") {

        check(1,4,7);
    }
    else if (array[2] === array[5] && array[5] === array[8] && array[5] != "") {

        check(2,5,8);
    }
    else if (array[3] === array[6] && array[6] === array[9] && array[6] != "") {

        check(3,6,9);
    }
    else if (array[1] === array[5] && array[5] === array[9] && array[1] != "") {

        check(1,5,9);
    }
    else if (array[3] === array[5] && array[5] === array[7] && array[5] != "") {

        check(3,5,7);
    }
    else if (array[2] === array[4] && array[4] === array[6] && array[4] != "") {

        check(2,4,6);
    }


}

function turnon(id) {

    let gamex = document.getElementById(id);
     
    if(turn === "x" && gamex.innerHTML === "") {
        gamex.innerHTML = "x";
        turn = "o"
        title.innerHTML = "o"
    }
    else if(turn == "o" && gamex.innerHTML == "") {
        gamex.innerHTML = "o";
        title.innerHTML = "x"
        turn = "x"
    }
 
    winner()
}


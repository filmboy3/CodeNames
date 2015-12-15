
    for (i = 0; i < 25; i++){
         if(wordBoardArray[i].toString().length < 7){
             document.getElementById("new' + i + '").style.marginLeft = "4vw";
             console.log("Triggered under 7 letters: " + wordBoardArray[i]);
         } else if (wordBoardArray[i].toString().length < 9){
             document.getElementById("new' + i + '").style.marginLeft = "2vw";
              console.log("Triggered 7-8 letters: " + wordBoardArray[i]);
         } else if (wordBoardArray[i].toString().length < 10) {
            document.getElementById("new' + i + '").style.marginLeft = "1vw";
            document.getElementById("new' + i + '").style.fontSize = "2.2vw";
             console.log("Triggered 9 letters: " + wordBoardArray[i]);
         } else if (wordBoardArray[i].toString().length < 11) {
            document.getElementById("new' + i + '").style.marginLeft = "1vw";
            document.getElementById("new' + i + '").style.fontSize = "2.1vw";
             console.log("Triggered 10 letters: " + wordBoardArray[i]);
         } else {
            document.getElementById("new' + i + '").style.marginLeft = ".5vw";
            document.getElementById("new' + i + '").style.fontSize = "1.8vw";
            console.log("Triggered more than 10 letters: " + wordBoardArray[i]);
         }


    }

   



      document.getElementById("new17").style.marginLeft = ""
      console.log("Triggered")
    }; console.log(wordBoardArray[16].toString().length + wordBoardArray[16]);

    document.getElementById("new1").innerHTML = wordBoardArray[0];

    document.getElementById("new2").innerHTML = wordBoardArray[1];

    document.getElementById("new3").innerHTML = wordBoardArray[2];

    document.getElementById("new4").innerHTML = wordBoardArray[3];

    document.getElementById("new5").innerHTML = wordBoardArray[4];

    document.getElementById("new6").innerHTML = wordBoardArray[5];

    document.getElementById("new7").innerHTML = wordBoardArray[6];

    document.getElementById("new8").innerHTML = wordBoardArray[7];

    document.getElementById("new9").innerHTML = wordBoardArray[8];

    document.getElementById("new10").innerHTML = wordBoardArray[9];

    document.getElementById("new11").innerHTML = wordBoardArray[10];

    document.getElementById("new12").innerHTML = wordBoardArray[11];

    document.getElementById("new13").innerHTML = wordBoardArray[12];

    document.getElementById("new14").innerHTML = wordBoardArray[13];

    document.getElementById("new15").innerHTML = wordBoardArray[14];

    document.getElementById("new16").innerHTML = wordBoardArray[15];

    document.getElementById("new17").innerHTML = wordBoardArray[16];

    document.getElementById("new18").innerHTML = wordBoardArray[17];

    document.getElementById("new19").innerHTML = wordBoardArray[18];

    document.getElementById("new20").innerHTML = wordBoardArray[19];

    document.getElementById("new21").innerHTML = wordBoardArray[20];

    document.getElementById("new22").innerHTML = wordBoardArray[21];

    document.getElementById("new23").innerHTML = wordBoardArray[22];

    document.getElementById("new24").innerHTML = wordBoardArray[23];

    document.getElementById("new25").innerHTML = wordBoardArray[24];
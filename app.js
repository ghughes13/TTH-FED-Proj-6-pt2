const phrasesList = ["Work Hard",
"Self Taught Dev",
"Team Treehouse",
"Tools of Titans",
"Holy Hand Grenade" ];

let phrase = "";
let lives = 5;
let phraseLength = "";

$('#start-btn, #restart-btn-win, #restart-btn-loss').click(() => { //Listens for click on start button and calls getPhrase and displays phrase
  $('#overlay, .win, .loss').css('display','none');
  $('#banner, #phrase, #qwerty, #scoreboard').css('display', 'initial');
  let phraseSplit = getPhrase();
  for(let i = 0; i < phraseSplit.length; i++) {
    if(phraseSplit[i] == " ") {
      $('#phrase ul').append('<li class="space"> </li>');
    } else {
      $('#phrase ul').append('<li class="letter ' + phraseSplit[i].toLowerCase() + '">'+ phraseSplit[i] + '</li>');
    }
  }
  phraseLength = phrase.replace(/\s/g, "").split('').length;
});

let getPhrase = () => { //Gets a random phrase from phrase list
  phrase = phrasesList[Math.floor((Math.random() * 4) + 1)];
  let phraseSplit = phrase.split('');
  return phraseSplit;
}

$('#qwerty button').click(function(event) {
      if(lives == 1) {
        $('.lose').css('display','flex');
        restartGame();
      } else {
        $(this).attr('disabled', 'true');
        $(this).addClass('chosen');
        checkLetter($(this).text());
      }
});

let checkLetter = (letter) => { //Check if letter is in phrase and show on board
  let splitPhrase = phrase.replace(/ /g,'').split('');
  let selector = '.' + letter;
  if($(selector).length != 0) {
    $(selector).addClass('show');
  } else { //SUBTRACT A LIFE IF GUESS NOT IN PHRASE
    let tries = $('.tries img');
    let arrayNum = lives-1;
    $(tries[arrayNum]).attr('src','images/lostHeart.png');
    lives = lives - 1;
  }
  if(phraseLength == $('.show').length) {
    $('.win').css('display','flex');
    restartGame();
  }
}

let restartGame = () => { //Reset the game
  lives = 5
  $('.tries img').attr('src','images/liveHeart.png');
  $('.letter, .space').remove();
  $('.chosen').removeClass('chosen');
  $('#qwerty button').removeAttr('disabled');
}

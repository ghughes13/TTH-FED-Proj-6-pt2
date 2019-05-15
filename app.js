const phrasesList = ["How are you doing on this sunshine day",
"Happy go lucky this brilliant moment",
"We are all winners if we apply ourselves",
"Believers in the good for all, only way to be",
"Strive and shoot for the stars; nothings impossible" ];

let phrase = "";

$('#start-btn').click(() => {
  $('#overlay').css('display','none');
  $('#banner, #phrase, #qwerty, #scoreboard').css('display', 'initial');
  let phraseSplit = getPhrase();
  for(let i = 0; i < phraseSplit.length; i++) {
    if(phraseSplit[i] == " ") {
      $('#phrase ul').append('<li class="space"> </li>');
    } else {
      $('#phrase ul').append('<li class="letter"></li>');
    }
  }
});

let getPhrase = () => {
  phrase = phrasesList[Math.floor((Math.random() * 5) + 1)];
  console.log(Math.floor((Math.random() * 5) + 1));
  let phraseSplit = phrase.split('');
  return phraseSplit;
}

$('#qwerty button').click( () => {
  // let letterclicked = this.html();
  console.log(this.text());
});

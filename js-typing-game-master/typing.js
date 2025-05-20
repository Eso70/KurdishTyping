const words = "سڵاو کوردستان بەڵی مردن سوڕانەوە ژیان ڕۆیشتن گەورە نوێ خێرا چاونەترس ژیر ئازا دڵ کڵاو ڕاکردن دیاریکردن هەولێر قەڵات سلێمانی چارەنووس ئاو نان باش خراپ ماڵ مناڵ دایک باوک خوشک برا شار گوند چیا دەریا ئاسمان خۆر مانگ شەو ڕۆژ دۆست دوژمن ئازادی جوان ناشرین پارە بازاڕ قوتابخانە زانکۆ کتێب قەڵەم خواردن خەوتن بینین بیستن ئێستا دوێنێ سبەینێ زۆر کەم گەرم سارد بەهار هاوین پایز زستان ساڵ مانگ هەفتە کات سەعات چرکە خولەک سوپاس تکایە ببوورە بەخێربێیت ماڵئاوا باران بەفر هەور با ئاگر خەون هیوا ترس گریان پێکەنین دەست سەر چاو دەم گوێ قاچ زمان گەشت مێژوو خاک نیشتمان وڵات مرۆڤ قژ هەنگوین قاوە چا شیر گۆشت سەوزە میوە دراوسێ پەنجەرە دەرگا ژوور مەلەوانی خوێندن نووسین ئاژەڵ هەڵۆ پشیلە سەگ بەرخ مەڕ مریشک کەڵەشێر ماسی مار مێروولە پەپوولە ئەسپ مێش هەنگ چۆلەکە باڵندە کۆتر هێلکە پەنیر ماست دۆ هەنار سێو پرتەقاڵ هەرمێ زەردەواڵە ترێ هەنجیر قەیسی توو گێلاس خەیار تەماتە پیاز سیر بیبەر ناوچە دێ گەڕەک شەقام دووکان جانتا قاپ چەتاڵ کەوچک چەقۆ شووشە پاسکیل فڕۆکە کەشتی شەمەندەفەر ئۆتۆمبێل باکوور باشوور ڕۆژهەڵات ڕۆژئاوا دوور نزیک لەسەرخۆ بەخێرایی زوو درەنگ چەپ ڕاست ناوەڕاست سەرەوە خوارەوە ناوەوە دەرەوە ئەمڕۆ بەیانی ئێوارە نیوەڕۆ بەرەبەیان پەرتووک دەفتەر مامۆستا وانە فێربوون وەڵام پرسیار مزگەوت ئاسمان بەهەشت دۆزەخ ئابووری سیاسەت کۆمەڵگا دادگا یاسا پۆلیس پارێزەر دکتۆر نەخۆشخانە دەرمان نەخۆش تەندروستی نەشتەرگەری دەرزی دار بریندار برین ئێش ئازار سکاڵا مەترسی هاوار پیاو ژن کچ کوڕ هاوسەرگیری خێزان تەمەن گەنج پیر نەنک باپیر ئامۆزا خاڵۆزا پوورزا هەڵبژاردن دەنگدان سەرۆک دیموکراسی سەربازی چەک فیشەک تفەنگ جەنگ شەڕ ئاشتی برسی تێر تینوو ماندوو بێزار دڵتەنگ دڵخۆش شەکەت چالاک بەهێز لاواز قەڵەو تەندروست نەخۆش وشک قورس درێژ کورت بەرز نزم درەخت گیا کانزا زێڕ زیو ئاڵتوون ئاسن خڕ لاکێشە چوارگۆشە سێگۆشە سوور شین کەسک زەرد سپی ڕەش قاوەیی پرتەقاڵی پەمەیی وەنەوشەیی گەورەیی بچووکی قەبارە ڕەنگ سارد گەرم شل ڕەق داهاتوو ئێستا ڕابردوو بڵند دوورودرێژ خۆشەویست بەناوبانگ کێو یاری وەرزش تۆپ گۆڵ کۆمپیوتەر مۆبایل ئینتەرنێت پەیوەندی ناردن وەرگرتن نامە وشە ڕستە دەق لاپەڕە بەش بابەت هەواڵ ڕۆژنامە گۆڤار ڕادیۆ فیلم ژمارە ژمێریاری کۆکردنەوە کەمکردنەوە لێدان دابەشکردن یەک دوو سێ چوار پێنج شەش حەوت هەشت نۆ دە سفر سەد هەزار ملیۆن ملیار کیلۆ گرام مەتر سانتیمەتر میلیمەتر کیلۆمەتر کاتژمێر چرکە خولەک شەممە یەکشەممە دووشەممە سێشەممە چوارشەممە پێنجشەممە هەینی یەکەم دووەم سێیەم چوارەم پێنجەم شەشەم حەوتەم هەشتەم نۆیەم دەیەم ئەڵماس ئاڵتوون نەخشە وێنە هێڵکاری ئاهەنگ جەژن بۆنە دیاری شیرینی شەکر خوێ مەلەوانی درووستکردن فەرهەنگ ئەدەب".split(" ");
const wordsCount = words.length;

function addClass(element,name) {
  element.classList.add(name);
}
function removeClass(element,name) {
  element.classList.remove(name);
}

function randomWord() {
  const randomIndex = Math.floor(Math.random() * wordsCount);
  return words[randomIndex];
}

function formatWord(word) {
  return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newGame() {
  document.getElementById('words').innerHTML = '';
  for (let i = 0; i < 50; i++) {
    document.getElementById('words').innerHTML += formatWord(randomWord());
  }
  addClass(document.querySelector('.word'), 'current');
  addClass(document.querySelector('.letter'), 'current');
}


document.getElementById('game').addEventListener('keyup', ev => {
  const key = ev.key;
  const currentWord = document.querySelector('.word.current');
  const currentLetter = document.querySelector('.letter.current');
  const expected = currentLetter?.innerHTML || ' ';
  const isLetter = key.length === 1 && key !== ' ';
  const isSpace = key === ' ';
  const isBackspace = key === 'Backspace';
  const isFirstLetter = currentLetter === currentWord.firstChild;
  
  function handleLetter(currentWord, currentLetter, expected, key) {
    if (!currentWord || !isLetter) return;

    if (currentLetter) {
      // Type character matches
      if (key === expected) {
        addClass(currentLetter, 'correct');
      } else {
        addClass(currentLetter, 'incorrect');
      }
      removeClass(currentLetter, 'current');
      if (currentLetter.nextSibling) {
        addClass(currentLetter.nextSibling, 'current');
      }
    } else {
      // Extra character
      const extraLetters = currentWord.querySelectorAll('.letter.incorrect.extra').length;
      if (extraLetters >= 5) {
        return;
      }
      const extraLetter = document.createElement('span');
      extraLetter.innerHTML = key;
      extraLetter.className = 'letter incorrect extra';
      currentWord.appendChild(extraLetter);
    }
  }

  if (isLetter) {
    handleLetter(currentWord, currentLetter, expected, key);
  } else if (isSpace && currentWord) {
    // Handle space key
    if (expected !== ' ') {
      const lettersToInvalidate = [...currentWord.querySelectorAll('.letter:not(.correct)')];
      lettersToInvalidate.forEach(letter => addClass(letter, 'incorrect'));
    }
    removeClass(currentWord, 'current');
    addClass(currentWord.nextSibling, 'current');
    if (currentLetter) removeClass(currentLetter, 'current');
    addClass(currentWord.nextSibling.firstChild, 'current');

  } else if (isBackspace && currentWord) {
    // Handle backspace
    if (currentLetter && isFirstLetter) {
      const prevWord = currentWord.previousSibling;
      if (prevWord && !prevWord.querySelectorAll('.letter.incorrect.extra').length) {
        removeClass(currentWord, 'current');
        addClass(prevWord, 'current');
        removeClass(currentLetter, 'current');
        addClass(prevWord.lastChild, 'current');
        removeClass(prevWord.lastChild, 'incorrect');
        removeClass(prevWord.lastChild, 'correct');
      }
    } else if (currentLetter && !isFirstLetter) {
      removeClass(currentLetter, 'current');
      addClass(currentLetter.previousSibling, 'current');
      removeClass(currentLetter.previousSibling, 'incorrect');
      removeClass(currentLetter.previousSibling, 'correct');
    } else if (!currentLetter) {
      const extras = currentWord.querySelectorAll('.letter.incorrect.extra');
      if (extras.length) {
        extras[extras.length - 1].remove();
      } else {
        addClass(currentWord.lastChild, 'current');
        removeClass(currentWord.lastChild, 'incorrect');
        removeClass(currentWord.lastChild, 'correct');
      }
    }
  }

  // move lines / words
  if(currentWord.getBoundingClientRect().top > 400){
        const words = document.getElementById('words');
        const margin = parseInt(words.style.marginTop || '0px');
        words.style.marginTop = (margin - 69) + 'px';
    }

  
// move cursor
const nextLetter = document.querySelector('.letter.current');
const nextWord = document.querySelector('.word.current');
const cursor = document.getElementById('cursor');
if (nextLetter) {
  const rect = nextLetter.getBoundingClientRect();
  cursor.style.right = (window.innerWidth - rect.right) + 'px';
} else {
  const rect = nextWord.getBoundingClientRect();
  cursor.style.right = (window.innerWidth - rect.left + 2) + 'px';
}
});
newGame();
const focusGame = document.getElementById('game');
document.getElementById('restartTestButton').addEventListener('click', () => {
  focusGame.focus();
  newGame();
});

function setupKeyboardShortcuts() {
  let isEnterPressed = false;
  let isCtrlPressed = false;
  document.querySelector('body').addEventListener('keydown', ev => {
    const tab = ev.key === 'Tab';
    
    if (ev.key === 'Enter') {
      isEnterPressed = true;
    }
    if (ev.key === 'Control') {
      isCtrlPressed = true;
    }
    const kurdishR = ev.key === 'ر';
    if(tab || (isEnterPressed && kurdishR)){
      ev.preventDefault();
      newGame();
    }
  });

  document.querySelector('body').addEventListener('keyup', ev => {
    const backspace = ev.key === 'Backspace';
    if (ev.key === 'Enter') {
      isEnterPressed = false;
    }
    if (ev.key === 'Control') {
      isCtrlPressed = false;
    }
    else if(isCtrlPressed && backspace){
      ev.preventDefault();
      const currentWord = document.querySelector('.word.current');
      const letters = currentWord.querySelectorAll('.letter');
      // Remove all extra incorrect letters if present
      const extras = currentWord.querySelectorAll('.letter.incorrect.extra');
      if (extras.length > 0) {
        extras.forEach(extra => extra.remove());
      }
      // Reset all letter states
      letters.forEach(letter => {
      removeClass(letter, 'correct');
      removeClass(letter, 'incorrect');
      });
      addClass(currentWord.firstChild, 'current');
      
      // Update cursor position
      const cursor = document.getElementById('cursor');
      const rect = currentWord.firstChild.getBoundingClientRect();
      cursor.style.right = (window.innerWidth - rect.right) + 'px';
    }
  });
}

function footerButtons(){
  const contactButton = document.getElementById('contactPopupButton');
  if (contactButton) {
    const createElementA = document.createElement('a');
    createElementA.setAttribute('href', 'mailto:esma3ildilshad04x@gmail.com');
    contactButton.addEventListener('click', () =>{
      createElementA.click();
    });
  }
}
footerButtons();
setupKeyboardShortcuts();

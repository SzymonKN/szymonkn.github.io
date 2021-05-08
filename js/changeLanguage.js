function onLoad(){
  document.getElementById("polishLanguage").addEventListener("click",function(){
    var english = document.getElementsByClassName('englishVersion')

    for (var i = 0; i < english.length; i++) {
     english[i].style.display = 'none';
    }

    var polish = document.getElementsByClassName('polishVersion')

    for (var i = 0; i < polish.length; i++) {
     polish[i].style.display = 'block';
    }
  })
  document.getElementById("englishLanguage").addEventListener("click",function(){
    var english = document.getElementsByClassName('englishVersion')

    for (var i = 0; i < english.length; i++) {
     english[i].style.display = 'block';
    }

    var polish = document.getElementsByClassName('polishVersion')

    for (var i = 0; i < polish.length; i++) {
     polish[i].style.display = 'none';
    }
  })

}

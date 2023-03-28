function sound(){
     var snd = new Audio('../sounds/key01.mp3')//wav is also supported
     snd.play()//plays the sound
     setTimeout("location.href = './NewMainPage.html';", 1500);
}
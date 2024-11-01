let backText=document.getElementsByClassName('background')[0]
const hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

function changeback(){
    backText.textContent='Background Color:'
    let hexcode='#'
    for(i=0;i<=5;i++){
        hexcode=hexcode+hex[Math.floor(Math.random()*16)]
    }
    backText.textContent+=hexcode
    document.body.style.backgroundColor=hexcode
}
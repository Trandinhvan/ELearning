// truncateCardTitle(); gọi hàm
// truncate card title 
window.addEventListener("load",function(){
    truncateCardTitle();
})

function truncateCardTitle(){
    var cardList = document.getElementsByClassName("card-title");
    //console.log(cardList); 
    for(var i = 0; i< cardList.length; i++){
        var text = cardList[i].innerHTML;
        var newText = truncateString(text, 50);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(chuoi, num){
    if(chuoi.length > num){
        return chuoi.slice(0,num) + "...";
    }
    else{
        return chuoi;
    }
}

/* Sidebar mini */
var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebarMini = document.querySelector('.sidebarMini');
var switchBtn = document.querySelector('#checkbox');


toggleBtn.addEventListener('click',function(){
    //neu trong ds class sidebar cos is-opened thif remove ko co thi add vao.
    sidebarMini.classList.toggle('is-opened'); 
});


switchBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkMode');
});
/*  */
(function(){
    const listAll = document.getElementsByClassName('list-all')[0];
        listAll.addEventListener("click", changeNav);
    
    function changeNav(){
        const nav = document.getElementsByTagName('nav')[0].offsetTop+52;
        document.getElementById('sitemap').style.top = nav+"px";
        document.getElementById("sitemap").style.display="block";
        listAll.classList.toggle('close');
        listAll.classList.toggle('newlist');
        }
    }
    // window.onload=function(){
    
    // }

());
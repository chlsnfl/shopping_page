(function(){
    const listAll = document.getElementsByClassName('list-all')[0];
    const cart = document.getElementById('cart');
    const close = document.getElementById('close');
 
    listAll.addEventListener("click", changeNav);
    cart.addEventListener('click', cartBoxView);
    close.addEventListener('click', cartBoxView);
   
    function changeNav(){
       const nav = document.getElementsByTagName('nav')[0].offsetTop + 52;
       const sitemap = document.getElementById('sitemap');
       listAll.classList.toggle('close');
       listAll.classList.toggle('newlist');
       console.log(listAll.className);
       if(listAll.className == 'list-all close'){
         sitemap.style.top = nav+"px";
         sitemap.style.display="block";
       }else{
          sitemap.style.display="none";
       }
    }
 
  
    function cartBoxView(){
       document.getElementsByClassName('cart-view')[0].classList.toggle('none');
    }
 
   // const bx = document.getElementById("ct");
    // console.log(bx.dataset);
 
 //    window.onload = function(){
 //    }
   
 
 //// 슬라이드쇼 
 let slideIndex = 0;
 showSlides();
 
 function showSlides() {
    let i;
    const slides = document.getElementsByClassName('img-slide');
    const dot = document.getElementsByClassName('dot');
 
    for( i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
       dot[i].classList.remove("active");
    }
    slideIndex++;
    if(slideIndex > slides.length){
       slideIndex = 1;
    }
    slides[slideIndex -1].style.display = "block";
    dot[slideIndex-1].classList.add('active');
    setTimeout(showSlides, 5000);
 }
 
 
 
 }());
 document.getElementsByClassName('tablinks')[0].click();
 
 function openBest(e, bid){
  
    const tabcontent = document.getElementsByClassName('besttabcontent');
    for(i=0; i<tabcontent.length; i++){
       tabcontent[i].style.display="none";
    }
    const tablinks = document.getElementsByClassName('tablinks');
    for(i=0; i<tablinks.length; i++){
       tablinks[i].classList.remove('active');
    }
    
    document.getElementById(bid).style.display = 'block';
    e.currentTarget.classList.add('active');
 }
 
 function viewTab(e){
    const tabcontent = document.getElementsByClassName('tabcontent');
    const tabs  = document.getElementsByClassName('tab')[0];
    console.log(tabs.children[0]);
 
    for( let i =0; i < tabcontent.length; i++) {
       tabcontent[i].classList.remove('active');
    }
  
    for( let i = 0; i < tabcontent.length; i++) {
       tabs.children[i].classList.remove('active');
    }
 
    tabcontent[e].classList.add('active');
    tabs.children[e].classList.add('active');
 }   
 
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


 function viewQuick(){
   document.getElementsByClassName('quick')[0].classList.toggle('action');
 }


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
 
//  fetch('data/test.json')
   
//   .then((res)=>res.json())
//   .then((res)=>{
//    let li = '';
//    for(i=0;i<res.shoplist.length;i++){
//       li +=
//       '<div class="col-lg-3 my-5">'+
//       '<div class="card">'+
//          '<a href="#">'+
//              '<img src="'+res.shoplist[i].img+'" class="img-fluid" alt="001">'+
//          '</a>'+
//           '<div class="pd-list">'+
//               '<li>'+
//                   '<span class="'+res.shoplist[i].color[0]+'"></span>'+
//                   '<span class="'+res.shoplist[i].color[1]+'"></span>'+
//                   '<span class="'+res.shoplist[i].color[2]+'"></span>'+
//                   '<span class="'+res.shoplist[i].color[3]+'"></span>'+
//               '</li>'+
//               '<li class="pd-title">'+
//                   '<h1>"'+res.shoplist[i].title+'"</h1>'+
//               '</li>'+
//               '<li>'+
//                   '<del>'+res.shoplist[i].delprice+'</del>'+
//                   '<br>'+
//                   '<strong>'+res.shoplist[i].saleprice+'</strong>'+
//               '</li>'+
//               '<li>'+
//                   '<p>'+res.shoplist[i].content+'</p>'+
//               '</li>'+
//               '<li class="last">'+
//                   '<span>'+res.shoplist[i].news+'</span>'+
//                   '<span>핫딜할인5%</span>'+
//               '</li>'+

//           '</div>'+
//       '</div>'+
//   '</div>'+
// '</div>'
//    }
//    document.getElementById('row').innerHTML = li;
// }
// )


fetch('./data/shoplist.json')
.then((res)=>res.json())
.then((res)=> {
    const rs = res.shoplist; 
    let div = "";

    for(let i = 0; i < rs.length; i++){
      div += `<div class="col-lg-3 my-5">
        <div class="card">
            <a href="main.html">
              <img src="${rs[i].img}" class="img-fluid" alt="${rs[i].img}" />
            </a>
            <div class="card-body">
               <ul class="pd-list">
                  <li>`;

      var color = '';   
      for(let c=0; c < rs[i].color.length; c++){
        color +=  `<span class="${rs[i].color[c]}"></span>`;
      }             
      div += color;            
      div += `</li>
                  <li class="pd-title">
                      <h1>${rs[i].title}</h1>
                  </li>
                  <li>
                      <del>${rs[i].delprice}</del>
                      <br>
                      <strong>${rs[i].saleprice}</strong>
                  </li>
                  <li>
                      <p>${rs[i].content}</p>
                  </li>
                  <li class="last">
                     <span>베스트셀러</span>
                     <span>핫딜할인5%</span>
                  </li>
               </ul> 
            </div>
        </div>
     </div>`;
    }

    document.getElementById("row").innerHTML = div;

})
.catch((err)=> console.log(err));
(function(){
    const listAll = document.getElementsByClassName('list-all')[0];
    const cart = document.getElementById('cart');
    const close = document.getElementById('close');
    const changeImg = document.querySelectorAll('.simg');
    const size = document.shopform.size;

    changeImg.forEach(function(el){
      el.addEventListener('mouseenter', function(event){
         const src = event.target.src;
         document.getElementById('bimg').src=src;
      });
    });


    size.forEach(function(sz){
      sz.addEventListener('change', function(e){
         const selectTitle = document.getElementById("title").value;
         const selectPrice = document.getElementById("price").value;
         const selectColor = document.querySelector('.color:checked').value;
         const selectSize = document.querySelector('.sizes:checked').value;
         console.log(selectSize);
      });
    });


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
 
  

   // const bx = document.getElementById("ct");
    // console.log(bx.dataset);
 
 //    window.onload = function(){
 //    }
   
 
 //// 슬라이드쇼 
 let slideIndex = 0;
//  showSlides();

const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");
const ptId = document.getElementById("btIn");
let ps = 0;

btnRight.onclick = function(){
   ps = ptIn.offsetleft;
   if(ps>-200){
      ps -= 50;
      ptIn.style.left = ps +"px";
   }
      
}


 
 
 }());
//  document.getElementsByClassName('tablinks')[0].click();

function updn(i,n){
   var ct= Number(document.getElementsByClassName('ct')[i].value);
   if(n>0){
      if(ct<=11){
         ct=ct+1;
      }
   }else{
      if(ct>0){
         ct=ct-1;
      }
   }
   document.getElementsByClassName('ctv')[i].innerHTML = ct;
   document.getElementsByClassName('ct')[i].value =ct;
 }

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
   
    let side = document.querySelector('#up', function(){
      window
    })
})
.catch((err)=> console.log(err));

// function imgchange(){
//    // document.getElementsByClassName('.bigimg').src = "images/002.jpg";
//    ('.smallimg').hover(function)
//    }

// fetch(url).then ((rs)=>rs.json()).then((rs)=>[]).fatch((err)=>console.log(err));

fetch('./data/test.json')
.then((res)=>rs.json())
.then((res)=>{
    const rs =res.shoplist;
    let div = "";
    for(let i = 0; i<rs.length; i++){
        for (let c=0; c<rs[i].color.length; c++){
            color +=` <span class="${rs[i].color[c]}"></span>`
        }

        div +=
        `<div class="col-lg-3 my-5">
        <div class="card">
           <a href="#">
               <img src="${rs[i].img}" class="img-fluid" alt="001">
           </a> 
            <div class="pd-list">
                <li>
                    ${color}
                </li>
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
                    <span>${rs[i].news}</span>
                    <span>핫딜할인5%</span>
                </li>

            </div>
        </div>
    </div>
</div>`
        
    }
    document.getElementById('row').innerHTML = div;
    
})

.catch((error)=>console.log(err))
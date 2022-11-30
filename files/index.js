// calh from id in html

let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')

let mood= 'create';
let temp;
// console.log(title , price , taxes ,ads ,discount , total ,count , category , submit)


//  function to calculate the price (get total )
function getTotal()
{
    if(price.value !='')
    {
        let result= (+price.value + +taxes.value + +ads.value) 
        - +discount.value;

        total.innerHTML =result;
        total.style.background= "#177e21";
    }
    else{
        total.innerHTML='';
        total.style.background="#632c51";
    }
}

// function to create 
// save data to localstorge
let data_product;
if (localStorage.product !=null)
{
    data_product= JSON.parse(localStorage.product)
}
else{
    data_product=[];
}


submit.onclick=function ()
{
let new_product={
    title : title.value.toLowerCase(),
    price : price.value,
    taxes : taxes.value,
    ads   : ads.value,
    discount :discount.value,
    total : total.innerHTML,
    count :count.value,
    category: category.value.toLowerCase(),
}
if(title.value!='' && price.value!='' && category.value!='' && new_product.count<=100)
{
if  (mood ==='create')
{
    if(new_product.count>1)
{
    for (let i=0 ;i<new_product.count ;i++)
    {
        data_product.push(new_product);
        
    }
}
else{
    data_product.push(new_product);
}
}else{
    data_product[temp]=new_product;
    mood='create';
    submit.innerHTML='Create';
    count.style.display='block';
}
cleardata()
}


localStorage.setItem('product',  JSON.stringify(data_product) )


// console.log(data_product);

showData()
}



// clear data after create

function cleardata()
{
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
    

}



function showData()
{
 let table='';
 for (let i=0 ;i <data_product.length ;i++)
 {
    table+=`<tr>
    <td>${i+1}</td>
    <td>${data_product[i].title}</td>
    <td>${data_product[i].price}</td>
    <td>${data_product[i].taxes}</td>
    <td>${data_product[i].ads}</td>
    <td>${data_product[i].discount}</td>
    <td>${data_product[i].total}</td>
    <td>${data_product[i].category}</td>
    <td><button onclick="update_data(${i})" id="update">update</button></td>
    <td><button onclick="delete_data(${i})" id="delete">delete</button></td>
</tr>
</tr>`;

 }
 document.getElementById('tbody').innerHTML=table;
let btndelete=document.getElementById('deleteALL');
 if(data_product.length>0)
 {
   btndelete.innerHTML =`<button onclick='deleteALL()'>DELETE ALL (${data_product.length})</button>`
 }
 else{
    btndelete.innerHTML =''
 }
 getTotal();
}

showData()


function delete_data(i){
data_product.splice(i,1);
localStorage.product =JSON.stringify(data_product);
showData();
}

function deleteALL()
{
    data_product.splice(0);
    localStorage.product=JSON.stringify(data_product);
    showData();
}


function update_data(i)
{
    title.value=data_product[i].title;
    price.value=data_product[i].price;
    taxes.value=data_product[i].taxes;
    ads.value=data_product[i].ads;
    discount.value=data_product[i].discount;
    getTotal()
    count.style.display='none';
    category.value=data_product[i].category;
    submit.innerHTML='Update';
    mood='Update'
    temp=i;
    scroll({
        top:0,
        behavior:"smooth"
    })
    
}

let search_mood='title';
function get_search(id)
{
    let search=document.getElementById('search');
    if(id=='searchTitle')
    {
        search_mood='title';
        
    }else{
        search_mood='category';
        
    }
    search.placeholder='Search By '+search_mood;
    search.focus()
    search.value='';
    showData();

}
function search_data(value)
{
    let table='';
    for (let i=0 ;i<data_product.length;i++)
    {
                if (search_mood == 'title')
                {
                    
                        if(data_product[i].title.includes(value.toLowerCase()))
                        {
                        
                                    table+=`<tr>
                                    <td>${i}</td>
                                    <td>${data_product[i].title}</td>
                                    <td>${data_product[i].price}</td>
                                    <td>${data_product[i].taxes}</td>
                                    <td>${data_product[i].ads}</td>
                                    <td>${data_product[i].discount}</td>
                                    <td>${data_product[i].total}</td>
                                    <td>${data_product[i].category}</td>
                                    <td><button onclick="update_data(${i})" id="update">update</button></td>
                                    <td><button onclick="delete_data(${i})" id="delete">delete</button></td>
                                </tr>
                                </tr>`
                        }

                }else{


                            if(data_product[i].category.includes(value.toLowerCase()))
                            {
                            
                                        table+=`<tr>
                                        <td>${i}</td>
                                        <td>${data_product[i].title}</td>
                                        <td>${data_product[i].price}</td>
                                        <td>${data_product[i].taxes}</td>
                                        <td>${data_product[i].ads}</td>
                                        <td>${data_product[i].discount}</td>
                                        <td>${data_product[i].total}</td>
                                        <td>${data_product[i].category}</td>
                                        <td><button onclick="update_data(${i})" id="update">update</button></td>
                                        <td><button onclick="delete_data(${i})" id="delete">delete</button></td>
                                    </tr>
                                    </tr>`
                                
                            }
                    }
    
    }
document.getElementById('tbody').innerHTML=table;

}


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
    title : title.value,
    price : price.value,
    taxes : taxes.value,
    ads   : ads.value,
    discount :discount.value,
    total : total.innerHTML,
    count :count.value,
    category: category.value,
}
data_product.push(new_product);
localStorage.setItem('product',  JSON.stringify(data_product) )
// console.log(data_product);

cleardata()
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

// read product

function showData()
{
 let table='';
 for (let i=0 ;i <data_product.length ;i++)
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
    <td><button id="update">update</button></td>
    <td><button id="delete">delete</button></td>
</tr>
</tr>`;

 }
 document.getElementById('tbody').innerHTML=table;
}

showData()
// count of products

//delete of product

//update product

//search

//clean input data
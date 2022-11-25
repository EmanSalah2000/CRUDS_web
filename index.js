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
let data_product;
if (localStorage.product !=null)
{
    data_product= JSON.parse(localStorage.product)
}
else{
    data_product=[];
}


submit.onclick=function create()
{
new_product={
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
localStorage.setItem('product',  JSON.stringify(data_product) );
console.log(data_product);
}

// save data to localstorge

// clear data after create

// read product

// count of products

//delete of product

//update product

//search

//clean input data
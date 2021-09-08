document.querySelector(".btn-load").addEventListener("click", load);
let imageList = document.querySelector(".div-images");
let labelNotFound = document.querySelector(".label-notFound");

let lastPictureLoadJSON = localStorage.getItem("lastPictureLoad") ;
if (lastPictureLoadJSON)
{
    let lastPictureLoad =JSON.parse(lastPictureLoadJSON);
    loadPictures(lastPictureLoad.pageNumber, lastPictureLoad.limit);
}

function load()
{
    labelNotFound.innerText = "";
    imageList.innerHTML="";
    if((limit.value>10 || limit.value.length==0 || limit.value<1) && (pageNumber.value<1 || pageNumber.value>10 || pageNumber.value.length==0))
    {
        labelNotFound.innerText = "Номер страницы и лимит вне диапазона от 1 до 10";
        return;
    }
    if(limit.value>10 || limit.value.length==0 || limit.value<1)
    {
        labelNotFound.innerText = "Лимит вне диапазона от 1 до 10";
        return;
    }
    if(pageNumber.value<1 || pageNumber.value>10 || pageNumber.value.length==0)
    {
        labelNotFound.innerText = "Номер страницы вне диапазона от 1 до 10";
        return;
    }
    
    localStorage.setItem("lastPictureLoad", JSON.stringify({limit : limit.value, pageNumber: pageNumber.value}));
    loadPictures(pageNumber.value, limit.value);
}

function loadPictures(page, pictureLimit)
{
    
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${pictureLimit}`)
    .then((response)=>
    {
        return response.json();
    })
    .then((json)=>
    {
        processResult(json);
    }
    )
    .catch(()=>{console.log("error")});
}

function processResult(result)
{
    imageList.innerHTML="";
    if (Array.isArray(result) && result.length>0)
    {
        for (let img of result)
        {
            let image = createImage(img);
            imageList.insertAdjacentElement("beforeend", image);
        }
        
    }
}

function createImage(img)
{
    let div = document.createElement('div');
    //li.classList.add("li-image");
    div.innerHTML=`<img src="${img.download_url}" alt="${img.author}" id="img${img.id}}" width=600>`
    return div
}
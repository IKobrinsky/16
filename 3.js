var resultDiv = document.querySelector(".div-result");
document.querySelector(".btn-load").addEventListener("click", loadReport);

function loadReport()
{
    startRequest();
}

function startRequest()
{
    let request = new XMLHttpRequest();
    request.open("GET", "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440");
    request.onload = function()
    {
        processResult(request.response);
    }
    request.send();
}

function processResult(response)
{
    let filteredResult = JSON.parse(response).filter(
        function (el) {
            return el.year == yearSelect.value;
          }
        )[0];
        resultDiv.innerHTML="";
   for(let quarter in filteredResult.sales)
   {
       createCard(quarter, filteredResult.sales[quarter]);
   }
}

function createCard(quarter, quarterValue)
{
    console.log(`<div class="div-card"><div class="div-cardElement">${quarter}</div><div class="div-cardElement">${quarterValue}</div>/div>`);
    let quarterHTML = `<div class="div-card"><div class="div-quarter">${getQuarterText(quarter)}</div><div class="div-quarterValue">${quarterValue}</div></div>`;
    resultDiv.innerHTML += quarterHTML;
}



function getQuarterText(quarter)
{
        return `${quarter.substr(1, quarter.length-1)} кв.`
}
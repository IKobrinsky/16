let userJSONData = localStorage.getItem("userData") ;
let options = {  year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' };
let ds = (new Date()).toLocaleDateString('ru-RU',  options);
if (!userJSONData)
{
    let userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
    if(userName.length>0)
    {
        localStorage.setItem("userData", JSON.stringify({name: userName, lastDate: ds}))
    }
}
else 
{
    let userData = JSON.parse(userJSONData);
    alert(`Добрый день, ${userData.name}! Давно не виделись. В последний раз вы были у нас ${userData.lastDate}`)
    userData.lastDate = ds;
    localStorage.setItem("userData", JSON.stringify(userData));
}
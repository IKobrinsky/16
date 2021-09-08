const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let result= Math.floor( Math.random()*101);
      if(result%2==0)
          resolve(`Завершено успешно. Сгенерированное число —  ${result}`);
       else
           reject(`Завершено с ошибкой. Сгенерированное число — ${result}`);
    }, 3000)
  });
  
    myPromise
    .then((result)=>{console.log(result);})
    .catch((error)=>{console.log(error);})
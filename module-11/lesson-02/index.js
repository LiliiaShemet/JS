const myPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Timeout 1');

      resolve();
      // reject('some error');
    }, 1000);
  });

console.log('Start');

myPromise()
  .then(() => console.log('Success'))
  .catch(message => console.log(message))
  .finally(() => console.log('Finally'));

export function delayPromise() {
    return new Promise((resolve, reject) => {
      const randomDelay = Math.random() * 5000;
        const randomNum = Math.random() * 10;
        
      setTimeout(() => {
        if(randomNum < 5) reject(new Error("Request was rejected"))
        resolve('Промис выполнен!');
      }, randomDelay);
    });
  }

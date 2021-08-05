const delay = ms => {
  // Твой код
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(ms)
        }, ms)
        
    })
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger).catch(() => console.log('error')); // Resolved after 2000ms
delay(1000).then(logger).catch(() => console.log('error')); // Resolved after 1000ms
delay(1500).then(logger).catch(() => console.log('error')); // Resolved after 1500ms
let counter = 0;
for (let i = 0; i < 5000000000; i++) {
  counter++;
}
postMessage(counter);
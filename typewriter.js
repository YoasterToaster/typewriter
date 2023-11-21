const sentence = "hello there from lighthouse labs\n";

let delay = 200;
  // print the char here
  for (const char of sentence) {
    setTimeout(() => {
    process.stdout.write(char);
  }, delay += 200) 
  }// <= 1s delay to make it noticeable. Can dial it down later.
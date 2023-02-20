import { Actor } from "apify";
await Actor.init();

// const input = await Actor.getInput();

console.log("Hello world!");

await Actor.pushData({
  firstNumebr: 1,
  secondNumber: 2,
});

// Exit successfully
await Actor.exit();

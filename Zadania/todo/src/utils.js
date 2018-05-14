import { TEXTS } from './texts';

export function printToConsole(text) {
  console.log(text);
}

export function sayHello(name) {
  printToConsole(TEXTS.HELLO) + printToConsole(name)
}

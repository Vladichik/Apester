# apester-challenge

Welcome dear candidate, to the Apester Challenge!
In the following challenge we are going to help Goku defeat Vegeta.
Yes, it's about Dragon Ball.

## Emphasis

- Code readabilty
- Performant animations, we understand (and use) the bits and bytes of the rendering pipeline. Show us that you do too :D
- The only libraries you are allowed to use are react, angular#\*, and vue. But we assume you won't need to.

## Task

Try running the project [npm start], you'll see that Goku is currently losing to Vegeta.
In order to improve Goku's countering techniques, you will have to solve the attack's algorithm!
Each attack has a mini-problem you will have to solve, the faster the algorithm, the less damage Goku receives.

### Part 1 - Help Goku Defeat Vegeta

1.  Defend against super punch - implement sortArray algorithm (apester-challenge/src/Character/Goku/algos/sortArray.js)
2.  Defend against punch - implement spinWords algorithem (apester-challenge/src/Character/Goku/algos/spinWords.js)
3.  Defend against kick - implement calculationWithFunctions algorithem (apester-challenge/src/Character/Goku/algos/calculationWithFunctions.js)

### Part 2 - Beautify HP Bar

Oh no! it seems that the HP bar is out of sync.
Maybe you can try and help us out? While you're at it, please make it prettier :D
The HP bar is implemented in the MetaData component, but you'll have to figure out how to sync it on your own.

1.  Sync the HP bar with the characters' attacks. Make it drop only when a character finishes an attack.
2.  Let's make this hp bar look better:

- Classic yellow box that mark the section to be reduced and then an animation to reduce it. Easier to understand by watching this video: https://www.youtube.com/watch?v=DaQOlBlEb0o
- Sweet and smooth animation for the health bar.

### Part 3 - Implement new attack

Teach Goku to use super punch (vertical punch)
You'll have plug in to our complicated attack machanisem, understand how animations are made. And basicly dive into legacy code and come back alive.

1.  Teach Goku to super punch :D

### Part 4 - BONUS - Works Offline

There's this PWA thing going around, lets make our app PWA!

1.  Application works offline.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Availbie scripts

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)

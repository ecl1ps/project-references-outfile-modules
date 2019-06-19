# Typescript Project References - outFile and modules
Proof of concept on using Typescript Project References with code written as ES6 modules. 

Project contains four subprojects simulating diamond references. 

Output is bundled as AMD modules using `outFile` and `prepend` compiler options. Result si a single file per root reference project (one for `cli` and one for `tests`).

## Setup

> npm i

## Build

> npm run build
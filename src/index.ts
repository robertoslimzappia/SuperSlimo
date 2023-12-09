import * as PIXI from 'pixi.js';
import spritesheetData from './assets/spritesheet.json';
import spritesheetTexture from './assets/spritesheet.png';

const pixiOptions = {
    background: '#1099bb', // Configuriamo una schermata azzurrina
    resizeTo: window // Tutta la finestra browser
};
const app = new PIXI.Application<HTMLCanvasElement>(pixiOptions); // creo pixi application

document.body.appendChild(app.view);
// const keyBinding = {
//     left: "KeyA",
//     right: "KeyD",
//     top: "KeyW",
//     bottom: "KeyS",
// }
const keyBinding = {
    left: "ArrowLeft",
    right: "ArrowRight",
    top: "ArrowUp",
    bottom: "ArrowDown",
};

const keyMap: { [key: string]: number } = {
    "KeyD": 0,
    "KeyA": 0,
    "KeyW": 0,
    "KeyS": 0,
    "ArrowLeft": 0,
    "ArrowRight": 0,
    "ArrowUp": 0,
    "ArrowDown": 0,
};
const userInput = { x: 0, y: 0 };
window.addEventListener("keydown", (event: KeyboardEvent) => {
    // if (event.code === "KeyD") {
    //     keyMap["KeyD"] = 5;
    // };
    // if (event.code === "KeyA") {
    //     keyMap["KeyA"] = -5;
    // };
    // if (event.code === "KeyW") {
    //     keyMap["KeyW"] = -5;
    // };
    // if (event.code === "KeyS") {
    //     keyMap["KeyS"] = 5;
    // };
    keyMap[event.code] = 1;

    userInput.x = keyMap[keyBinding.right] - keyMap[keyBinding.left];
    userInput.y = -keyMap[keyBinding.top] + keyMap[keyBinding.bottom];
});
window.addEventListener("keyup", (event: KeyboardEvent) => {
    // if (event.code === "KeyD") {
    //     keyMap["KeyD"] = 0;
    // };
    // if (event.code === "KeyA") {
    //     keyMap["KeyA"] = 0;
    // };
    // if (event.code === "KeyW") {
    //     keyMap["KeyW"] = 0;
    // };
    // if (event.code === "KeyS") {
    //     keyMap["KeyS"] = 0;
    // };
    keyMap[event.code] = 0;

    userInput.x = keyMap[keyBinding.right] - keyMap[keyBinding.left];
    userInput.y = -keyMap[keyBinding.top] + keyMap[keyBinding.bottom];
});
runGame();

function createHero(spriteSheet: PIXI.Spritesheet<typeof spritesheetData>) {
    const hero = new PIXI.AnimatedSprite(spriteSheet.animations['hero/idle']);
    app.stage.addChild(hero);
    hero.animationSpeed = 20 / 60;
    hero.scale.set(4);
    hero.play();
    return hero;
};
async function runGame() {
    const spriteSheet = await loadGameSpriteSheet();
    const hero = createHero(spriteSheet);

    app.ticker.add(() => {
        hero.position.x += userInput.x * 5;
        hero.position.y += userInput.y * 5;
    });
}
async function loadGameSpriteSheet() {
    const parteGrafica = await PIXI.Assets.load(spritesheetTexture);
    const spriteSheet = new PIXI.Spritesheet<typeof spritesheetData>(parteGrafica, spritesheetData);
    await spriteSheet.parse();
    return spriteSheet;
}

import * as PIXI from 'pixi.js';
import spritesheetData from './assets/spritesheet.json';
import spritesheetTexture from './assets/spritesheet.png';

const pixiOptions = {
    background: '#1099bb', // Configuriamo una schermata azzurrina
    resizeTo: window // Tutta la finestra browser
};
const app = new PIXI.Application<HTMLCanvasElement>(pixiOptions); // creo pixi application

document.body.appendChild(app.view);

loadGameSpriteSheet();

async function loadGameSpriteSheet() {
    const parteGrafica = await PIXI.Assets.load(spritesheetTexture);
    const spriteSheet = new PIXI.Spritesheet<typeof spritesheetData>(parteGrafica, spritesheetData);
    await spriteSheet.parse();

    const hero = new PIXI.AnimatedSprite(spriteSheet.animations['hero/idle']);
    app.stage.addChild(hero);
    hero.animationSpeed = 20 / 60;
    hero.scale.set(4);
    hero.play();
}

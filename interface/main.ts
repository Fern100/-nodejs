import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";

let doguinho = new Cachorro("Bolt", 18)
doguinho.som()
doguinho.movimento()

let pocoto = new Cavalo("Pé de pano", 35)
pocoto.som()
pocoto.movimento()

let preguica = new Preguica("Flash", 4)
preguica.som()
preguica.movimento()
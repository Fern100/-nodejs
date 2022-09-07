import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguiça";

let cachorro1 = new Cachorro(
    "Bolt",
    18
)
cachorro1.som()
cachorro1.movimento()

let cavalo1 = new Cavalo(
    "Pé de pano",
    35
)
cavalo1.som()
cavalo1.movimento()

let preguica1 = new Preguica(
    "Flash",
    10
)
preguica1.som()
preguica1.movimento()
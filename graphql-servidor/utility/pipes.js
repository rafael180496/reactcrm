import { MINREG, MANXREG } from "./constantes";

export const validarLimite = (limite = 0) => {
    let limiteaux = limite
    limiteaux = limiteaux < MINREG ? MINREG : limiteaux
    limiteaux = limiteaux > MANXREG ? MANXREG : limiteaux
    return limiteaux
}

export const validaroffset = (offset = 0) => {
    return offset > 0 ? offset : 0
}
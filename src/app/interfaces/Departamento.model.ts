import { Propiedad_Base } from "./Propiedad_Base.model";

export interface Departamento extends Propiedad_Base {
    tipo_propiedad: 'Departamento';
    cantidad_ambientes: number;
    cantidad_dormitorios: number;
    cantidad_baños: number;
    piso: number;
    balcon?: boolean;
    jardin?: boolean;
    piscina?: boolean;
    cochera?: boolean;
    espensas?: boolean;
}
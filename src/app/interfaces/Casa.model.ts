import { Propiedad_Base } from "./Propiedad_Base.model";

export interface Casa extends Propiedad_Base {
    tipo_propiedad: 'Casa';
    cantidad_ambientes: number;
    cantidad_dormitorios: number;
    cantidad_baños: number;
    cantidad_plantas: number;
    jardin?: boolean;
    piscina?: boolean;
    cochera?: boolean;
    capacidad_cochera?: number;
}
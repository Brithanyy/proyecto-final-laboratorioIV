import { Propiedad_Base } from "./Propiedad_Base.model";

export interface Local extends Propiedad_Base {
    tipo_propiedad: 'Local';
    superficie_total: number;
    tipoLocal: string; // Industrial, Gastronómico, oficina, etc.
    cantidad_ambientes: number;
    cantidad_baños: number;
    cantidad_plantas: number;
    habilitacionComercial?: boolean;
}
import { Propiedad_Base } from "./Propiedad_Base.model";

export interface Terreno extends Propiedad_Base {
    tipo_propiedad: 'Terreno';
    usoPermitido?: string[]; // Residencial, Industrial, etc.
    nivelacion?: boolean;
    servicio_luz?: boolean;
    servicio_gas?: boolean;
    servicio_agua?: boolean;
    servicio_cloaca?: boolean;
    servicio_internet?: boolean;
    esta_loteado?: boolean;
}
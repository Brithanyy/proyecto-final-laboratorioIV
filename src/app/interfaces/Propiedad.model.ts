import { Casa } from './Casa.model';
import { Departamento } from './Departamento.model';
import { Local } from './Local.model';
import { Terreno } from './Terreno.model';

export type Propiedad = Casa | Departamento | Local | Terreno; //?Unión de tipos. Indica que una Propiedad puede ser Terreno, Local, Casa o Departamento
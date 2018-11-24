import { Deserializable} from './deserializable.model';

import { Departamento } from './departamentos.model';
import { Local } from './locais.model';

export class Motivo implements Deserializable {
	data_criacao: Date
	data_alteracao: Date
	id: number
	nivel_prioridade: number
	descricao: string
	departamento: Departamento
	locais: Local[]

	deserialize(input: any) {
    	Object.assign(this, input);
    	this.departamento = new Departamento().deserialize(input.departamento)
    	this.locais = input.locais.map((local) => new Local().deserialize(local))

    	return this;
  	}
}
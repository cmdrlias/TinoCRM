import { Deserializable } from './deserializable.model';

import { Chamado } from './chamados.model';

export class Foto implements Deserializable {
    data_criacao: Date
    data_alteracao: Date
    id: number
    chamado: Chamado
    caminho: string

    deserialize(input: any) {
    	Object.assign(this, input);
    	this.chamado = new Chamado().deserialize(input.chamado)
    	return this;
  }
}
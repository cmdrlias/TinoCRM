import { Deserializable } from './deserializable.model';

import { Chamado } from './chamados.model';
import { Motivo } from './motivos.model';

export class Departamento implements Deserializable {
    data_criacao: Date
    data_alteracao: Date
    nome: string
    departamento_pai: Departamento
    departamentos_filhos: Departamento[]
    motivos: Motivo[]
    chamados: Chamado[]


    deserialize(input: any) {
    	Object.assign(this, input);
    	this.departamento_pai = new Departamento().deserialize(input.departamento_pai)
    	this.departamentos_filhos = input.departamentos_filhos
    								.map((departamento) => new Departamento().deserialize(departamento))
    	this.chamados = input.chamados.map((chamado) => new Chamado().deserialize(chamado))
    	this.motivos = input.motivos.map((motivo) => new Motivo().deserialize(motivo))
    	return this;
  	}
}
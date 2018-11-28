import { Deserializable } from './deserializable.model'

import { Motivo } from './motivos.model';

export class Local implements Deserializable {
	data_criacao: Date
	data_alteracao: Date
	id: number
	qrcode: number
	descricao: string
	geolocalizacao: string
	motivos: Motivo[]

	deserialize(input: any) {
    	Object.assign(this, input);
    	this.motivos = input.motivos
    								.map((motivo) => new Motivo().deserialize(motivo))
    	return this;
  	}



}
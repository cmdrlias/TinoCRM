import { Deserializable } from './deserializable.model';

import { Usuario } from './usuarios.model';
import { Chamado } from './chamados.model';


export class Comentario implements Deserializable {
    data_criacao: Date;
    data_alteracao: Date;
    chamado: Chamado;
    comentario: string;
    usuario: Usuario;

    deserialize(input: any) {
      Object.assign(this, input);
      this.usuario = new Usuario().deserialize(input.usuario);
      this.chamado = new Chamado().deserialize(input.chamado);
      return this;
    }
  }

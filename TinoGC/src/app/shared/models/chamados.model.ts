import { Deserializable } from './deserializable.model';

import { Comentario } from './comentarios.model';
import { Usuario } from './usuarios.model';
import { Departamento } from './departamentos.model';
import { Motivo } from './motivos.model';
import { Local } from './locais.model';
import { Foto } from './fotos.model';

export class Chamado implements Deserializable {
    data_criacao: Date;
    data_alteracao: Date;
    id: number;
    protocolo: number;
    obsservacao: string;
    prioridade: number;
    situacao: string;
    upvotes: number;
    local: Local;
    motivo: Motivo;
    usuario: Usuario;
    responsavel: Usuario;
    comentarios: Comentario[];
    fotos: Foto[];
    departamento: Departamento;

    deserialize(input: any) {
        Object.assign(this, input);
        this.usuario = new Usuario().deserialize(input.usuario);
        this.responsavel = new Usuario().deserialize(input.responsavel);
        this.departamento = new Departamento().deserialize(input.departamento);
        this.motivo = new Motivo().deserialize(input.motivo);
        this.local = new Local().deserialize(input.local);
        this.comentarios = input.comentarios
                                    .map((comentario) => new Comentario().deserialize(comentario));
        this.fotos = input.fotos.map((foto) => new Foto().deserialize(foto));
        return this;
    }

    getProtocolo() {
        return this.protocolo;
    }
}

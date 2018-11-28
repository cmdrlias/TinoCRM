import {Deserializable} from './deserializable.model';

export class Usuario implements Deserializable{
  nome: string
  email: string
  senha: string
  sexo: string
  registro_academico: string
  perfis: string[]
  foto_perfil: string

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
export interface Data {
  hospedaje?: string;
  puerto?: number;
  base_datos?: string;
  usuario?: string;
  contrasena?: string;
  id_usuario: number;
  procedimiento: string;
  origen_registro: string;
  campos: string
}

export interface Conf {
  method: string;
  mode?: RequestMode;
  headers: {
    'content-Type': string;
  }
  body?: string;
}
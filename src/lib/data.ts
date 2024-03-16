import type { Data, Conf } from "../types/types";

export async function fetchCompanies() {

  try {

    const data: Data = {
      id_usuario: 1,
      procedimiento: 'p_traer_registros_consulta_principal',
      origen_registro: 'empresas',
      campos: 'id_empresa as valor,empresa as descripicion '
    }

    const conf: Conf = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    }

    const petition = await fetch('http://10.0.0.97:3000/ejecutar',conf); 

    const res = await petition.json();

    return res

  } catch (error) {
    console.log(JSON.stringify(error))
  }

}
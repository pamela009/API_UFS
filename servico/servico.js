import colecaoUf from "../dados/dados.js";

export const buscarUfs = () => {
return colecaoUf;
}

export const buscarUfsPorNome = (nomeUf) => {
return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfsPorid = (id) => {
const idUF = parseInt(id);
return colecaoUf.find(uf => uf.id ===idUF)
}

export const buscarUfPorSigla = (sigla) => {
return colecaoUf.find(uf => uf.uf.toLowerCase() === sigla.toLowerCase());
};
import express from 'express';
import { buscarUfsPorid, buscarUfsPorNome, buscarUfs, buscarUfPorSigla} from "./servico/servico.js";

const app = express();

app.get('/ufs', (req, res) => {
const nomeUf = req.query.busca;
const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();

if (resultado.length > 0){
res.json(resultado);

} else {
res.status(404).send({"erro" : "Nenhuma UF encontrada"});
}
});

app.get('/ufs/sigla/:sigla', (req, res) => {
const sigla = req.params.sigla;
const uf = buscarUfPorSigla(sigla);

if (uf) {
res.json(uf);
} else {
res.status(404).json({ erro: "UF não encontrada pela sigla" });
}
});
app.get('/ufs/:iduf',(req, res) => {
const uf= buscarUfsPorid(req.params.iduf);

if (uf) {
res.json(uf);
} else if (isNaN(parseInt(req.params.iduf))) {
res.status(400).send({"erro": "UF não encontrada"});
} else {
res.status(404).send({"erro": "Nenhuma Uf encontrada"});
}

});

app.listen(8080, () => {
let data = new Date();
console.log('Servidor iniciado na porta 8080' + data);
});
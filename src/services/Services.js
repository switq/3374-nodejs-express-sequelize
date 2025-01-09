const dataSource = require('../models')

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
            where: { id: id }
        });

        return listaDeRegistrosAtualizados[0] !== 0;
    }
}

module.exports = Services;
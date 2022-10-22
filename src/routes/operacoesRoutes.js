import OperacoesController from '../controller/operacoesController.js'

const routes = (app) => {

    app.get('/somar', OperacoesController.somar)

    app.get('/subtrair', OperacoesController.subtrair)

    app.get('/multiplicar', OperacoesController.multiplicar)

    app.get('/dividir', OperacoesController.dividir)
}

export default routes
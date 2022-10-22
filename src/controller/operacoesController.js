import Operacao from "../models/Operacao.js"

class OperacoesController {

    static somar(req, res) {
        console.log(req.params)
        const valor1 = Object.values(req.query)[0]
        const valor2 = Object.values(req.query)[1]

        if (Operacao.verificaSeNumero(valor1) == false) {
            return res.status(400).json({
                mensagem: `${valor1} não é um número!`
            })
        }

        if (Operacao.verificaSeNumero(valor2) == false) {
            return res.status(400).json({
                mensagem: `${valor2} não é um número!`
            })
        }

        return res.status(200).json({
            operacao: 'Soma',
            resultado: Operacao.soma(Number(valor1), Number(valor2))
        })
    }

    static subtrair(req, res) {
        const valor1 = Object.values(req.query)[0]
        const valor2 = Object.values(req.query)[1]

        if (Operacao.verificaSeNumero(valor1) == false) {
            return res.status(400).json({
                mensagem: `${valor1} não é um número!`
            })
        }

        if (Operacao.verificaSeNumero(valor2) == false) {
            return res.status(400).json({
                mensagem: `${valor2} não é um número!`
            })
        }

        return res.status(200).json({
            operacao: 'Subtracao',
            resultado: Operacao.subtracao(Number(valor1), Number(valor2))
        })
    }

    static multiplicar(req, res) {
        const valor1 = Object.values(req.query)[0]
        const valor2 = Object.values(req.query)[1]

        if (Operacao.verificaSeNumero(valor1) == false) {
            return res.status(400).json({
                mensagem: `${valor1} não é um número!`
            })
        }

        if (Operacao.verificaSeNumero(valor2) == false) {
            return res.status(400).json({
                mensagem: `${valor2} não é um número!`
            })
        }

        return res.status(200).json({
            operacao: 'Multiplicacao',
            resultado: Operacao.multiplicacao(Number(valor1), Number(valor2))
        })
    }

    static dividir(req, res) {
        const valor1 = Object.values(req.query)[0]
        const valor2 = Object.values(req.query)[1]

        if (Operacao.verificaSeNumero(valor1) == false) {
            return res.status(400).json({
                mensagem: `${valor1} não é um número!`
            })
        }

        if (Operacao.verificaSeNumero(valor2) == false) {
            return res.status(400).json({
                mensagem: `${valor2} não é um número!`
            })
        }

        return res.status(200).json({
            operacao: 'Divisao',
            resultado: Operacao.divisao(Number(valor1), Number(valor2))
        })
    }
}

export default OperacoesController
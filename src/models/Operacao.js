class Operacao {
    static soma(a, b) {
        return a + b
    }

    static subtracao(a, b) {
        return a - b
    }

    static multiplicacao(a, b) {
        return a * b
    }

    static divisao(a, b) {
        return a / b
    }

    static verificaSeNumero(a) {
        if (isNaN(a)) {
            return false
        } else {
            return true
        }
    }
}

export default Operacao
const Utilitarios = require("../src/utilitarios");

describe('Testes da classe Utilitarios', () => {
    let utilitarios;

    beforeEach(() => {utilitarios = new Utilitarios()})

    test('Inverter string deve retornar texto invertido', () => {
        const texto = "ABC";
        const textoInvertido = "CBA";
        expect(utilitarios.inverterString(texto)).toBe(textoInvertido)
    })

    test('Contar caracteres quando tiver 5 caracteres deve retornar 5', () => {
        const parametro = 'Teste';
        const resultadoEsperado = 5;
        expect(utilitarios.contarCaracteres(parametro)).toBe(resultadoEsperado)
    })

    test('Para maiusculas deve retornar apenas LETRAS MAIUSCULAS', () => {
        const parametro = 'TesTE'; 
        const resultadoEsperado = 'TESTE';
        expect(utilitarios.paraMaiusculas(parametro)).toBe(resultadoEsperado);
    })

    test('Para minusculas deve retornar apenas letras minusculas', () => {
        const parametro = 'TesTE'; 
        const resultadoEsperado = 'teste';
        expect(utilitarios.paraMinusculas(parametro)).toBe(resultadoEsperado);
    })

    test('primeiraLetraMaiuscula deve retornar texto com primeira palavra capitalizada', () => {
        const parametro = 'teste Mantendo Outras PALAVRAS IguaIS';
        const resultadoEsperado = 'Teste Mantendo Outras PALAVRAS IguaIS';
        expect(utilitarios.primeiraLetraMaiuscula(parametro)).toBe(resultadoEsperado)
    })

    test('somar 4 + 5 deve retornar 9', () => {
        const parametroA = 4;
        const parametroB = 5;
        const resultadoEsperado = 9;
        expect(utilitarios.somar(parametroA, parametroB)).toBe(resultadoEsperado)
    })

    test('subtrair 10 - 3 deve retornar 7', () => {
        const parametroA = 10;
        const parametroB = 3;
        const resultadoEsperado = 7;
        expect(utilitarios.subtrair(parametroA, parametroB)).toBe(resultadoEsperado)
    })

    test('multiplicar 5 x 3 deve dar 15', () => {
        const parametroA = 5;
        const parametroB = 3;
        const resultadoEsperado = 15;
        expect(utilitarios.multiplicar(parametroA, parametroB)).toBe(resultadoEsperado)
    })

    test('dividir 10 / 2 deve dar 5', () => {
        const parametroA = 10;
        const parametroB = 2;
        const resultadoEsperado = 5;
        expect(utilitarios.dividir(parametroA, parametroB)).toBe(resultadoEsperado)
    })

    test('dividir por zero deve dar erro', () => {
        const parametroA = 10;
        const parametroB = 0;
        expect(() => utilitarios.dividir(parametroA, parametroB)).toThrow('Divisão por zero');
    })

    test('ehPar deve retornar true quando parametro for 10', () => {
        const parametro = 10;
        const resultadoEsperado = true;
        expect(utilitarios.ehPar(parametro)).toBe(resultadoEsperado)
    })

    test('primeiroElemento deve retornar o primeiro elementro do array', () => {
        const parametro = [4,8,12,16,20];
        const resultadoEsperado = 4;
        expect(utilitarios.primeiroElemento(parametro)).toBe(resultadoEsperado)
    })

    test('ultimoElemento deve retornar o ultimo elementro do array', () => {
        const parametro = [4,8,12,16,20];
        const resultadoEsperado = 20;
        expect(utilitarios.ultimoElemento(parametro)).toBe(resultadoEsperado)
    })

    test('tamanhoArray deve retornar o tamanho correto do array', () => {
        const parametro = [1, 2, 3, 4];
        const resultadoEsperado = 4;
        expect(utilitarios.tamanhoArray(parametro)).toBe(resultadoEsperado);
    });

    test('ordenarArray deve retornar o array ordenado', () => {
        const parametro = [3, 1, 2, 5, 4];
        const resultadoEsperado = [1, 2, 3, 4, 5];
        expect(utilitarios.ordenarArray(parametro)).toEqual(resultadoEsperado);
    });

    test('inverterArray deve retornar o array invertido', () => {
        const parametro = [1, 2, 3, 4];
        const resultadoEsperado = [4, 3, 2, 1];
        expect(utilitarios.inverterArray(parametro)).toEqual(resultadoEsperado);
    });

    test('gerarNumeroAleatorio deve retornar um número aleatório dentro do limite', () => {
        const max = 10;
        const numero = utilitarios.gerarNumeroAleatorio(max);
        expect(numero).toBeGreaterThanOrEqual(0);
        expect(numero).toBeLessThan(max);
    });

    test('ehNumero deve retornar true para um número válido', () => {
        const parametro = 42;
        const resultadoEsperado = true;
        expect(utilitarios.ehNumero(parametro)).toBe(resultadoEsperado);
    });

    test('ehNumero deve retornar false para um valor não numérico', () => {
        const parametro = 'texto';
        const resultadoEsperado = false;
        expect(utilitarios.ehNumero(parametro)).toBe(resultadoEsperado);
    });

    test('removerEspacos deve remover espaços extras da string', () => {
        const parametro = '  texto com espaços  ';
        const resultadoEsperado = 'texto com espaços';
        expect(utilitarios.removerEspacos(parametro)).toBe(resultadoEsperado);
    });

    test('repetirTexto deve repetir a string o número de vezes solicitado', () => {
        const parametro = 'abc';
        const vezes = 3;
        const resultadoEsperado = 'abcabcabc';
        expect(utilitarios.repetirTexto(parametro, vezes)).toBe(resultadoEsperado);
    });

    test('juntarArray deve juntar os elementos do array com o separador fornecido', () => {
        const parametro = [1, 2, 3, 4];
        const separador = '-';
        const resultadoEsperado = '1-2-3-4';
        expect(utilitarios.juntarArray(parametro, separador)).toBe(resultadoEsperado);
    });

    test('contarPalavras deve contar o número de palavras na string', () => {
        const parametro = 'Este é um teste';
        const resultadoEsperado = 4;
        expect(utilitarios.contarPalavras(parametro)).toBe(resultadoEsperado);
    });

    test('mediaArray deve retornar a média dos números no array', () => {
        const parametro = [1, 2, 3, 4, 5];
        const resultadoEsperado = 3;
        expect(utilitarios.mediaArray(parametro)).toBe(resultadoEsperado);
    });

    test('removerDuplicados deve retornar um array sem elementos duplicados', () => {
        const parametro = [1, 2, 2, 3, 4, 4];
        const resultadoEsperado = [1, 2, 3, 4];
        expect(utilitarios.removerDuplicados(parametro)).toEqual(resultadoEsperado);
    });

    test('ehPalindromo deve retornar true se a string for um palíndromo', () => {
        const parametro = 'A man a plan a canal Panama';
        const resultadoEsperado = true;
        expect(utilitarios.ehPalindromo(parametro)).toBe(resultadoEsperado);
    });

    test('ehPalindromo deve retornar false se a string não for um palíndromo', () => {
        const parametro = 'Texto qualquer';
        const resultadoEsperado = false;
        expect(utilitarios.ehPalindromo(parametro)).toBe(resultadoEsperado);
    });

    test('mesclarObjetos deve mesclar dois objetos corretamente', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        const resultadoEsperado = { a: 1, b: 2, c: 3, d: 4 };
        expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual(resultadoEsperado);
    });
})
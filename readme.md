<h1>TypeScript</h1>

#

* Linguagem orientada a objetos fortemente tipada

* Precisa ser convertido para JavaScript

* Abrir o terminal node

        npm install typescript 
        npm install -g typescript
        npm install -g ts-node(code runner)     
        
        tsc -- init // para criar na raiz do projeto arquivo.json
        CTRL + SHIFT + B :BUILD

        cd (nome da pasta)
        ls (para ver o arquivo dentro a pasta)
        node (nome do arquivo) 

        clear ou crtl+shift+p (para limpar o terminal)
        cd.. (para voltar uma pasta)



Sintaxe

#

* Especificar o tipo de variável

        let nomeVarialvel: TypeAnnotation = valor;  // typeAnnotation: number,string,boolean,etc..


* Number / Bigint


        let nomeVariavel:numer = valor;

        let nomeVariavel:bigint = valor (seguido com'n')


* Variáveis

        let nomeVariavel:string = valor;   // string com letra minuscula


* Arrays

        let nomeVariavel:type[] = ['elemento1' , 'elemento2'];
        ou 
        let nomeVariavel:Array <string> = ['elemento1' , 'elemento2'];
        ou
        let nomeVariavel:type[] = new Array('elemento1','elemento2')


* Tuple

- Coleção Heterogenea de valores
- Armaenamento de campos  de diferentes tipos
- Podem ser passadas como parametros para funções
- Considerada array com numeros fixos de elementos

        let nomeTupla = [valor1, valor2, valor3];


* Enums

- Enumerar os valores
- Estruturas de dados não ordenadas
- Mapeiam chaves para valores
- Suporta enums numericos e de strings
- Facilica a mudança de valores no futuro
- Reduz erros
- Funciona somente em tempo de compilação 
- Economiza o tempo de execução
- Permite criar constantes
- Permite criar constantes personalizadas

        Enum TypeName{
                constant1,
                constant2,
                ...
        }







🍎 🍍 🍌 🍓
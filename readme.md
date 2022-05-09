<h1 style:"text-align:center"> TypeScript </h1>


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

<br>


<h1> Sintaxe </h1>


<h3> Especificar o tipo de variável </h3>

        let nomeVarialvel: TypeAnnotation = valor;  // typeAnnotation: number,string,boolean,etc..


<h3> Number / Bigint </h3>


        let nomeVariavel:numer = valor;

        let nomeVariavel:bigint = valor (seguido com'n')


<h3>Variáveis </h3>

        let nomeVariavel:string = valor;   // string com letra minuscula


<h3> Arrays </h3>

        let nomeVariavel:type[] = ['elemento1' , 'elemento2'];
        ou 
        let nomeVariavel:Array <string> = ['elemento1' , 'elemento2'];
        ou
        let nomeVariavel:type[] = new Array('elemento1','elemento2')


<h3> Tuple </h3>

- Coleção Heterogenea de valores
- Armaenamento de campos  de diferentes tipos
- Podem ser passadas como parametros para funções
- Considerada array com numeros fixos de elementos

          let nomeTupla = [valor1, valor2, valor3];


<h3> Enums </h3>

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


<h3> Type - Any </h3>

- Padrinho dos tipos
- Any é padrao no TypeScript(se nao tipar, será any automaticamente)
- Evitar ao máximo usar o tipo 'any'


<h3>Type - Unknown</h3>

- Não sbe qual tipo definir
- Melhor doque any






🍎 🍍 🍌 🍓
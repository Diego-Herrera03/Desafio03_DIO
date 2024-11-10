class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome   = nome
        this.idade  = idade
        this.tipo   = tipo
        this.ataque = ataque
        
        switch (tipo){
            case "guerreiro":
                this.ataque = "espada"
                break

            case "mago":
                this.ataque = "magia"
                break

            case "monge":
                this.ataque = "artes marciais"
                break

            case "ninja":
                this.ataque = "shuriken"
                break
        }
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let ronaldo = new heroi("Ronaldo", "25", "guerreiro")

ronaldo.atacar()

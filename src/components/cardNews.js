class CardNews extends HTMLElement { /*extends significa que a classe herda o html*/
   constructor() { /*constructor é sempre o primeiro método que chamamos dentro de uma classe*/
    super(); /*super invoca o método constructor de quem você está herdando, no caso o HTMLElement - ou seja, estamos executando o constructor da nossa classe e o constructor do HTMLElement*/
    
    const shadow = this.attachShadow({mode: "open"}); /*this se refere à classe e attachShadow serve pra anexar uma sombra/*
    /*imagine que você vai renderizar isso na sua tela e você pode permitir que outro js influencie ou somente as coisas que já estão dentro 
    do js possam influenciar, deixando open ou closed*/
    shadow.innerHTML = "<h1>Hello World</h1>"; /*cria uma sombra pra mim em que js externo ṕossa influenciar e no html interno da sombra
    coloca um título hello world */
    } 
}

customElements.define('card-news', CardNews) /*tô criando um elemento customizado e tô definindo que ele vai ser utilizado através do seletor card-news
e o método construtor dele, o molde, é a CardNews */
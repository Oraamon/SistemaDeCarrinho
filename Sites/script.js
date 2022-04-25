
const items =   [
    {
        id: 0,
        nome: 'Roberto',
        img: 'unknown.png',
        quantidade:0

    },
    {
        id: 1,
        nome: 'Sueco',
        img: 'unknown1.png',
        quantidade:0

    },
    {
        id: 2,
        nome: 'Sapato',
        img: 'unknow2.png',
        quantidade:0

    },
    {
        id: 3,
        nome: 'Camiseta',
        img: 'image.png',
        quantidade:0

    },
]
    
inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos')
    
     items.map((val)=>{
         containerProdutos.innerHTML += `
         
            <div class="produto-single">
                <img width= "200px" heigth = "200px" src="`+val.img+`"  /> 
                <p> `+val.nome+` </p>
                <a key = "`+val.id+`" href="#">Adicionar ao carrinho!<a/>
            </div>
        
            `;
     })
    
}
inicializarLoja()


atualizarCarrinho = () => {
    ;
    var containerCarrinho = document.getElementById('carrinho')
        containerCarrinho.innerHTML = "";
     items.map((val)=>{
         if(val.quantidade>0){
         containerCarrinho.innerHTML += `
         
            
                <div class="carrinho">
                <p> `+val.nome+` | quantidade:`+val.quantidade+`</p>
                <input type="button" key = "`+val.id+`" value="REMOVER"></input>
                <hr>
                </div>
                
                               
                
        
            `;
            
     }
    })
    
button = document.querySelector('input')
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
            let key = this.getAttribute('key');
            items[key].quantidade++;
            atualizarCarrinho(); 
            return false               
    });

}
var button = document.getElementsByTagName('input');


$(document).on('click','input',function(){
    let key = this.getAttribute('key');
            items[key].quantidade = items[key].quantidade - 1;
            atualizarCarrinho(); 
            return false       
});
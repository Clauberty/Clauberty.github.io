
//abrir meno bola 1
function openNav(){
    
document.querySelector('.menu').style.transform="translatex(0)";
  
}
//fechar menu bola1
function closeNav(){
    
document.querySelector('.menu').style.transform="translatex(-100%)";

};
//abrir menu perfil
function openNavPerfil(){
    
    document.querySelector('.perfil').style.transform="translatex(0)";
      
    }      
//fechar menu perfil
    function closeNavPerfil(){
    
        document.querySelector('.perfil').style.transform="translatex(100%)";
        
        };
       
       /* function pop(){
            var audio = new audio();
            audio.src="img/botao.wav";
            audio.play();
        }*/

            //animações para a pagina de +rotina
       function maisRotina(){
        document.querySelector('.transparente').style.transform="translatex(100%)";
        document.querySelector('.transparente').style.visibility="hidden";
        document.querySelector('.voltar').style.transform="translatex(0)";
        document.querySelector('.criar').style.transform="translatex(0)";
        
       }
       //animaçôes para voltar pro menu
       function inicio(){

        document.querySelector('.transparente').style.transform="translatex(0)";
        document.querySelector('.transparente').style.visibility="visible";
        document.querySelector('.voltar').style.transform="translatex(130%)";
        document.querySelector('.criar').style.transform="translatex(-225%)";
       }
      
       //limpar campo de criação ao preencher tudo
       document.getElementsByClassName("botao_ok")[0].addEventListener("click",function(){ 
       meu_formulario=document.getElementsByClassName("criado")[0];
       var inputs = meu_formulario.querySelectorAll("input");
       var resetar = true;

       inputs.forEach(function(inputs) {
        if((inputs.type==="text"||inputs.type==="time")&& inputs.value===""){
            resetar= false;
        }
       
       });

       var checkboxs = document.getElementsByClassName("criado")[0].querySelectorAll('input[type="checkbox"]');

       var marcado = Array.from(checkboxs).some(function(checkbox){

            return checkbox.checked;

       });
      
       if(resetar&&marcado){
        var nome = document.querySelector(".name").value
        var horaInicial = document.querySelector(".Tinicial").value
        var horaFinal = document.querySelector(".Tfinal").value

        console.log("nome:" , nome ,"/ hora inicial:", horaInicial ,"/ hora final:", horaFinal);

        meu_formulario.reset();
       var quadrado_rotina=document.getElementsByClassName("quadradoRotina")[0];
        var novoElemento=document.createElement('div');
        novoElemento.classList.add("rotinaFeita");
        quadrado_rotina.appendChild(novoElemento);
        novoElemento.textContent=nome;
       
       
       
       }
       else{
        alert("preencha todos os campos");
       }
       
       //criaçaõ da div rotina



      
         
       });
    
       

            
    




    





let creditos = 200;

function mostrarTela(tela){

document.getElementById("home").style.display="none"
document.getElementById("buscar").style.display="none"
document.getElementById("perfil").style.display="none"

document.getElementById(tela).style.display="block"

}

function solicitarServico(valor){

if(creditos >= valor){

creditos -= valor

document.getElementById("creditosUsuario").innerText = creditos

notificar("Serviço solicitado!")

}else{

notificar("Créditos insuficientes")

}

}

function voltarHome(){

mostrarTela("home")

}

function modoDark(){

document.body.classList.toggle("dark")

}

function criarConta(){

notificar("Conta criada!")

}

function comprarCreditos(){

creditos += 100

document.getElementById("creditosUsuario").innerText = creditos

notificar("100 créditos adicionados!")

}

function entrar(){

let usuario = document.getElementById("usuario").value
let senha = document.getElementById("senha").value

if(usuario !== "" && senha !== ""){

document.getElementById("login").style.display="none"
mostrarTela("home")

notificar("Login realizado!")

}else{

alert("Preencha os campos")

}

}

function notificar(msg){

let toast=document.getElementById("notificacao")

toast.innerText=msg
toast.style.opacity=1

setTimeout(()=>{
toast.style.opacity=0
},2000)

}

function buscarProfissionais(){

let categoria=document.getElementById("categoria").value
let feed=document.getElementById("feedProfissionais")

if(categoria==="Fotógrafo"){

feed.innerHTML=`

<div class="card">

<h3>📸 Fotógrafo</h3>

<p>Fotos externas - R$50</p>
<p>Fotos em studio - R$90</p>
<p>Campanha publicitária - R$80</p>
<p>Lookbook - R$120</p>
<p>Fotos de desfile - R$150</p>
<p>Conteúdo redes sociais - R$70</p>
<p>Edição de imagens - R$40</p>

<button class="primary" onclick="notificar('Serviço solicitado!')">
Solicitar serviço
</button>

</div>

`

}

if(categoria==="Costureira"){

feed.innerHTML=`

<div class="card">

<h3>🧵 Costureira</h3>

<p>Ajustes de calça - R$30</p>
<p>Ajustes de cintura - R$20</p>
<p>Consertos básicos - R$30</p>
<p>Produção em escala (max 50) - R$130</p>
<p>Personalização - R$60</p>
<p>Free lance - R$80</p>
<p>Produção de peça piloto - R$40</p>

<button class="primary" onclick="notificar('Serviço solicitado!')">
Solicitar serviço
</button>

</div>

`

}

if(categoria==="Modelagem"){

feed.innerHTML=`

<div class="card">

<h3>📐 Modelagem</h3>

<p>Molde alfaiataria - R$130</p>
<p>Molde malharia - R$90</p>
<p>Molde simples - R$50</p>
<p>Moldes de escala (max 12) - R$150</p>
<p>Ajuste peça piloto - R$40</p>
<p>Aumentar molde - R$20</p>
<p>Diminuir molde - R$20</p>

<button class="primary" onclick="notificar('Serviço solicitado!')">
Solicitar serviço
</button>

</div>

`

}

if(categoria==="Produção"){

feed.innerHTML=`

<div class="card">

<h3>🎬 Produção</h3>

<p>Stylist de desfile - R$130</p>
<p>Styling de fotos - R$90</p>
<p>Casting - R$60</p>
<p>Editoriais - R$90</p>
<p>Produção de cenários - R$40</p>
<p>Produção de desfile - R$90</p>
<p>Rebranding visual - R$70</p>

<button class="primary" onclick="notificar('Serviço solicitado!')">
Solicitar serviço
</button>

</div>

`

}

}
function cardItem(it,base){
 return '<a class="item" href="'+base+it.url+'"><img src="'+base+it.capa+'" alt="'+(it.alt||it.titulo)+'" loading="lazy"><div><h3>'+it.titulo+'</h3><p class="sub">'+(it.subtitulo||"")+'</p><p>'+(it.resumo||"")+'</p><span class="more">'+(it.cta||"Conhecer")+' →</span></div></a>';
}
function lista(id,arr,base,vazio){
 var el=document.getElementById(id);if(!el)return;
 el.innerHTML=arr.length?arr.map(function(i){return cardItem(i,base)}).join(""):'<p class="vazio">'+vazio+'</p>';
}

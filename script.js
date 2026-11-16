(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var P={g:'#09AB5E',g2:'#009F6B',k:'#0e0c0e',p:'#f5f1f3'};
var VR=[{bg:P.g,fg:P.k,ac:P.p},{bg:P.k,fg:P.p,ac:P.g},{bg:P.p,fg:P.k,ac:P.g},{bg:P.g2,fg:P.p,ac:P.k}];
var SERIF='Instrument Serif,Times New Roman,serif';

/* ---------- Mockups (SVG générés, palette de la marque) ---------- */
function mock(type,vi,alt){
  var c=VR[vi%4],b='';
  if(type==='logo'){
    b='<circle cx="200" cy="215" r="122" fill="#f5f1f3"/><image href="images/logo.png" x="106" y="179" width="188" height="74"/><rect x="116" y="418" width="168" height="6" fill="'+c.fg+'"/><rect x="150" y="438" width="100" height="4" fill="'+c.fg+'" opacity=".5"/>';
  }else if(type==='brand'){
    b='<g stroke="'+c.fg+'" stroke-width="2"><circle cx="86" cy="92" r="34" fill="'+P.g+'"/><circle cx="168" cy="92" r="34" fill="'+P.g2+'"/><circle cx="250" cy="92" r="34" fill="'+P.k+'"/><circle cx="332" cy="92" r="34" fill="'+P.p+'"/></g>'+
      '<text x="44" y="290" font-family="'+SERIF+'" font-size="170" fill="'+c.fg+'">Aa</text><text x="248" y="290" font-family="'+SERIF+'" font-style="italic" font-size="110" fill="'+c.ac+'">Aa</text>'+
      '<rect x="44" y="330" width="312" height="3" fill="'+c.fg+'"/><rect x="44" y="352" width="220" height="8" fill="'+c.fg+'" opacity=".55"/><rect x="44" y="372" width="260" height="8" fill="'+c.fg+'" opacity=".35"/>'+
      '<rect x="44" y="414" width="96" height="40" rx="20" fill="'+c.ac+'"/><circle cx="352" cy="434" r="20" fill="'+c.ac+'"/>';
  }else if(type==='textile'){
    b='<ellipse cx="200" cy="448" rx="120" ry="10" fill="'+c.fg+'" opacity=".12"/><path d="M135 78 L80 112 L30 190 L82 226 L108 198 L108 428 L292 428 L292 198 L318 226 L370 190 L320 112 L265 78 Q200 128 135 78 Z" fill="'+c.fg+'"/>'+
      '<circle cx="200" cy="232" r="52" fill="'+c.ac+'"/><text x="200" y="262" text-anchor="middle" font-family="'+SERIF+'" font-style="italic" font-size="92" fill="'+c.bg+'">true</text><rect x="150" y="304" width="100" height="4" fill="'+c.ac+'"/>';
  }else if(type==='social'){
    b='<rect x="46" y="70" width="230" height="290" fill="'+c.fg+'" opacity=".16" transform="rotate(-6 160 215)"/><rect x="92" y="60" width="230" height="290" fill="'+c.fg+'"/>'+
      '<circle cx="207" cy="170" r="70" fill="'+c.ac+'"/><text x="207" y="200" text-anchor="middle" font-family="'+SERIF+'" font-style="italic" font-size="96" fill="'+c.bg+'">a</text>'+
      '<rect x="116" y="270" width="150" height="9" fill="'+c.bg+'"/><rect x="116" y="292" width="102" height="9" fill="'+c.bg+'" opacity=".6"/><rect x="116" y="318" width="52" height="16" rx="8" fill="'+c.ac+'"/>'+
      '<g fill="'+c.fg+'"><circle cx="170" cy="400" r="5"/><circle cx="190" cy="400" r="5" opacity=".4"/><circle cx="210" cy="400" r="5" opacity=".4"/><circle cx="230" cy="400" r="5" opacity=".4"/></g>';
  }else if(type==='print'){
    b='<g transform="rotate(-7 170 230)"><rect x="60" y="60" width="210" height="300" fill="'+c.fg+'"/><rect x="82" y="84" width="166" height="8" fill="'+c.bg+'"/><text x="82" y="200" font-family="'+SERIF+'" font-size="92" fill="'+c.bg+'">Vo</text><text x="130" y="262" font-family="'+SERIF+'" font-style="italic" font-size="92" fill="'+c.ac+'">ir</text><rect x="82" y="318" width="90" height="6" fill="'+c.bg+'" opacity=".6"/></g>'+
      '<g transform="rotate(6 280 360)"><rect x="196" y="300" width="170" height="100" fill="'+c.ac+'"/><rect x="212" y="318" width="60" height="6" fill="'+c.bg+'"/><rect x="212" y="372" width="100" height="4" fill="'+c.bg+'" opacity=".7"/><circle cx="338" cy="326" r="12" fill="'+c.bg+'"/></g>';
  }else{
    b='<rect x="34" y="40" width="190" height="230" fill="'+c.fg+'"/><circle cx="130" cy="155" r="62" fill="'+c.ac+'"/>'+
      '<rect x="236" y="40" width="130" height="108" fill="'+c.ac+'"/><path d="M236 270 L366 270 L366 160 Z" fill="'+c.fg+'" opacity=".85"/>'+
      '<rect x="34" y="284" width="130" height="176" fill="'+c.ac+'" opacity=".95"/><text x="50" y="400" font-family="'+SERIF+'" font-style="italic" font-size="84" fill="'+c.bg+'">Aa</text>'+
      '<rect x="178" y="296" width="188" height="9" fill="'+c.fg+'"/><rect x="178" y="318" width="140" height="9" fill="'+c.fg+'" opacity=".5"/><circle cx="330" cy="418" r="36" fill="'+c.fg+'"/>';
  }
  return '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="'+(alt||'')+'" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="500" fill="'+c.bg+'"/>'+b+'</svg>';
}

/* ---------- Données (à compléter facilement) ---------- */
var SERVICES=[
 {id:'identite',n:'01',t:'Identité visuelle & Branding',d:'Une identité claire et reconnaissable, du logo à l’univers de marque complet, pour que votre image inspire confiance dès le premier regard.',l:['Création de logos','Charte graphique','Univers de marque','Déclinaisons visuelles','Positionnement et cohérence graphique'],m:'logo',v:0,alt:'Concept de logo sur fond vert, création d’identité visuelle'},
 {id:'direction',n:'02',t:'Direction artistique',d:'Un cap créatif précis pour que chaque visuel, chaque campagne et chaque prise de parole racontent la même histoire.',l:['Définition d’univers créatifs','Recherche esthétique','Concepts graphiques','Cohérence visuelle des campagnes','Accompagnement créatif'],m:'art',v:1,alt:'Planche d’ambiance de direction artistique'},
 {id:'textile',n:'03',t:'Design textile',d:'Des graphismes pensés pour être portés : de l’idée au mockup, vos vêtements deviennent un véritable support de marque.',l:['Création graphique pour vêtements','Designs de t-shirts et collections','Motifs et illustrations','Mockups et présentations produits','Déclinaisons graphiques'],m:'textile',v:2,alt:'Mockup de t-shirt, design textile'},
 {id:'digital',n:'04',t:'Communication digitale & Réseaux sociaux',d:'Des contenus qui arrêtent le scroll et gardent votre identité intacte, publication après publication.',l:['Création de contenus pour les réseaux sociaux','Publications Instagram','Stories et carrousels','Bannières et visuels publicitaires','Templates de communication'],m:'social',v:3,alt:'Mockup de publication Instagram et carrousel'},
 {id:'print',n:'05',t:'Print & Supports physiques',d:'Des supports imprimés soignés qui prolongent votre marque dans le monde réel et marquent les esprits.',l:['Cartes de visite','Flyers et affiches','Dépliants et brochures','Supports de communication','Créations destinées à l’impression'],m:'print',v:1,alt:'Mockup de flyer et de carte de visite, supports print'}
];
var CATS=['Branding','Identité visuelle','Textile','Réseaux sociaux','Print','Direction artistique'];
var PROJECTS=[
 {c:'Branding',t:'Univers de marque, café de spécialité',m:'brand',v:1,d:'Exploration d’un univers de marque complet : palette, typographies, ton visuel et déclinaisons.',l:['Palette et système typographique','Logo principal et variantes','Planche de marque']},
 {c:'Identité visuelle',t:'Monogramme et logotype',m:'logo',v:0,d:'Recherche autour d’un monogramme simple et mémorable, pensé pour rester lisible en très petit comme en très grand.',l:['Monogramme','Logotype','Versions couleur et monochrome']},
 {c:'Textile',t:'Collection capsule de t-shirts',m:'textile',v:2,d:'Une série de graphismes pour t-shirts, présentée en mockups pour projeter la collection avant production.',l:['Graphismes poitrine','Déclinaisons de couleurs','Mockups produit']},
 {c:'Réseaux sociaux',t:'Carrousel de lancement',m:'social',v:3,d:'Système de publications et de carrousels cohérent, facile à décliner à chaque annonce.',l:['Templates de publications','Carrousel de 5 slides','Format story']},
 {c:'Print',t:'Papeterie et flyer',m:'print',v:1,d:'Une papeterie complète pensée pour l’impression : carte de visite, flyer et affiche dans un même univers.',l:['Carte de visite','Flyer recto','Fichiers prêts à imprimer']},
 {c:'Direction artistique',t:'Planche d’ambiance de campagne',m:'art',v:0,d:'Mise en place d’un univers visuel pour une campagne : couleurs, matières, compositions et références.',l:['Moodboard','Pistes de composition','Règles d’usage']},
 {c:'Branding',t:'Système d’identité modulaire',m:'brand',v:3,d:'Une identité construite comme un kit : éléments combinables pour garder de la liberté tout en restant cohérent.',l:['Éléments graphiques','Grille de mise en page','Exemples d’application']},
 {c:'Identité visuelle',t:'Logo à forme géométrique',m:'logo',v:1,d:'Un symbole géométrique associé à une lettre expressive pour une signature forte et facile à reconnaître.',l:['Symbole','Lettrage','Zone de protection']},
 {c:'Réseaux sociaux',t:'Template de publications Instagram',m:'social',v:0,d:'Un jeu de templates modifiables pour publier régulièrement sans perdre en cohérence.',l:['Templates éditables','Bannières','Guide d’utilisation']},
 {c:'Print',t:'Affiche typographique',m:'print',v:2,d:'Une affiche à forte identité typographique, travaillée pour l’impact à distance comme pour le détail de près.',l:['Composition typographique','Déclinaison A3 et A4','Préparation à l’impression']},
 {c:'Direction artistique',t:'Direction visuelle d’une marque',m:'art',v:3,d:'Définition d’une direction artistique globale pour harmoniser tous les supports d’une marque.',l:['Principes visuels','Références','Recommandations d’usage']}
];

/* ---------- Rendu ---------- */
function mk(m,v,alt){return '<span class="mk">'+mock(m,v,alt)+'</span>'}
$$('[data-mock]').forEach(function(el){el.innerHTML=mock(el.dataset.mock,+el.dataset.v,el.dataset.alt)});

var words=['Identité visuelle','Direction artistique','Design textile','Réseaux sociaux','Print','Création de logo','Communication visuelle'];
var mq=''; for(var i=0;i<2;i++) words.forEach(function(w){mq+='<span>'+w+'</span>'});
$('#marq').innerHTML=mq+mq;

$('#homeRows').innerHTML=SERVICES.map(function(s){return '<li><a href="#services" data-svc="'+s.id+'"><span class="n">'+s.n+'</span><span class="t">'+s.t+'</span><span class="go" aria-hidden="true">→</span></a></li>'}).join('');
$('#homeTz').innerHTML=[0,2,3].map(function(k){return PROJECTS[k]}).filter(Boolean).map(function(p){var i=PROJECTS.indexOf(p);return '<a href="#realisations" data-open="'+i+'">'+mk(p.m,p.v,p.t+', '+p.c.toLowerCase())+'<span class="cap"><b>'+p.t+'</b><small>'+p.c+'</small></span></a>'}).join('');

$('#svGrid').innerHTML=SERVICES.map(function(s,i){
  return '<article class="sv rv" id="sv-'+s.id+'">'+mk(s.m,s.v,s.alt)+'<div class="sv-b"><span class="sv-n">'+s.n+'</span><h3>'+s.t+'</h3><p>'+s.d+'</p>'+
  '<div class="det" id="det-'+s.id+'"><div><ul>'+s.l.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div></div>'+
  '<div class="sv-f"><button class="tog" type="button" aria-expanded="false" aria-controls="det-'+s.id+'"><i>+</i> Découvrir ce service</button><a class="btn sm" href="#contact" data-quote="'+s.id+'">Demander un devis <span class="ar">→</span></a></div></div></article>';
}).join('');
$$('.tog').forEach(function(b){b.addEventListener('click',function(){var a=b.closest('.sv'),o=a.classList.toggle('open');b.setAttribute('aria-expanded',o)})});

var pres=$('#presta');
pres.innerHTML='<option value="">Sélectionner</option>'+SERVICES.map(function(s){return '<option value="'+s.id+'">'+s.t+'</option>'}).join('')+'<option value="autre">Autre / je ne sais pas encore</option>';

var filt='Tous';
function renderFilters(){
  $('#filters').innerHTML=['Tous'].concat(CATS).map(function(c){return '<button class="chip" type="button" aria-pressed="'+(c===filt)+'" data-f="'+c+'">'+c+'</button>'}).join('');
}
function renderPF(){
  $('#pf').innerHTML=PROJECTS.map(function(p,i){return {p:p,i:i}}).filter(function(o){return filt==='Tous'||o.p.c===filt}).map(function(o,k){
    return '<button class="pf-i" type="button" style="animation-delay:'+(RM?0:k*60)+'ms" data-open="'+o.i+'" aria-label="Ouvrir le projet : '+o.p.t+'">'+mk(o.p.m,o.p.v,o.p.t+', '+o.p.c.toLowerCase())+'<span class="cap"><b>'+o.p.t+'</b><small>'+o.p.c+'</small></span></button>';
  }).join('');
}
renderFilters();renderPF();
$('#filters').addEventListener('click',function(e){var b=e.target.closest('[data-f]');if(!b)return;filt=b.dataset.f;renderFilters();renderPF()});

/* ---------- Modal projet ---------- */
var modal=$('#modal'),lastFocus=null;
function openProject(i){
  var p=PROJECTS[i];lastFocus=document.activeElement;
  $('#md').innerHTML=mk(p.m,p.v,p.t+', '+p.c.toLowerCase())+'<div class="md-t"><span class="eyebrow">'+p.c+'</span><h3 id="mdT">'+p.t+'</h3><p>'+p.d+'</p><h4>Ce qui a été conçu</h4><ul>'+p.l.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><div class="cta-row" style="margin-top:12px"><a class="btn" href="#contact" data-quote="" data-close="1">Un projet similaire ? <span class="ar">→</span></a></div></div>';
  modal.classList.add('on');document.body.style.overflow='hidden';$('#mdX').focus();
}
function closeProject(){modal.classList.remove('on');document.body.style.overflow='';if(lastFocus&&lastFocus.focus)try{lastFocus.focus()}catch(e){}}
$('#mdX').addEventListener('click',closeProject);
modal.addEventListener('click',function(e){if(e.target===modal||e.target.classList.contains('md-wrap'))closeProject()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&modal.classList.contains('on'))closeProject()});

/* ---------- Routage + transitions ---------- */
var ROUTES=['accueil','services','realisations','a-propos','contact'];
var cur=null,pendingQuote=null,busy=false,pendingTarget=null;
var wipe=$('#wipe'),desc=$('meta[name=description]'),defDesc=desc?desc.content:'';
function routeFromHash(){var h=(location.hash||'').replace('#','');return ROUTES.indexOf(h)>-1?h:'accueil'}
function show(r){
  $$('.page').forEach(function(p){p.classList.toggle('on',p.dataset.route===r)});
  $$('.nl').forEach(function(a){if(a.dataset.r===r)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  var pg=$('.page.on');document.title=pg.dataset.title;
  if(desc)desc.content=pg.dataset.desc||defDesc;
  closeNav();window.scrollTo(0,0);cur=r;
  if(r==='contact'&&pendingQuote!==null){if(pendingQuote)pres.value=pendingQuote;pendingQuote=null}
  setupReveal(pg);
  if(pendingTarget!==null){var t=pendingTarget;pendingTarget=null;setTimeout(function(){var el=$(t);if(el){el.scrollIntoView({behavior:RM?'auto':'smooth',block:'center'});if(el.classList.contains('sv'))el.classList.add('open'),$('.tog',el).setAttribute('aria-expanded','true')}},120)}
}
function route(){
  var r=routeFromHash();
  if(r===cur)return;
  if(cur===null||RM){show(r);return}
  if(busy){show(r);return}
  busy=true;
  var a=wipe.animate([{transform:'translateY(101%)'},{transform:'translateY(0)'}],{duration:420,easing:'cubic-bezier(.7,0,.3,1)',fill:'forwards'});
  a.onfinish=function(){show(r);var b=wipe.animate([{transform:'translateY(0)'},{transform:'translateY(-101%)'}],{duration:520,easing:'cubic-bezier(.7,0,.3,1)',fill:'forwards'});b.onfinish=function(){wipe.getAnimations().forEach(function(x){x.cancel()});busy=false}};
}
window.addEventListener('hashchange',route);

document.addEventListener('click',function(e){
  var q=e.target.closest('[data-quote]');
  if(q){pendingQuote=q.dataset.quote;if(q.dataset.close)closeProject();if(routeFromHash()==='contact'){if(pendingQuote){pres.value=pendingQuote}pendingQuote=null}}
  var s=e.target.closest('[data-svc]');if(s){pendingTarget='#sv-'+s.dataset.svc}
  var o=e.target.closest('[data-open]');
  if(o){e.preventDefault();if(routeFromHash()!=='realisations'){location.hash='#realisations';setTimeout(function(){openProject(+o.dataset.open)},RM?50:1000)}else openProject(+o.dataset.open)}
  var a=e.target.closest('a[href^="#"]');
  if(a&&!o&&a.getAttribute('href').slice(1)===routeFromHash()){e.preventDefault();if(pendingTarget){var el=$(pendingTarget);pendingTarget=null;if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('open')}}else window.scrollTo({top:0,behavior:RM?'auto':'smooth'})}
});

/* ---------- Menu mobile ---------- */
var nav=$('#nav'),burger=$('#burger');
function closeNav(){nav.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Ouvrir le menu');document.body.style.overflow=modal.classList.contains('on')?'hidden':''}
burger.addEventListener('click',function(){var o=!nav.classList.contains('open');nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu');document.body.style.overflow=o?'hidden':''});
nav.addEventListener('click',function(e){if(e.target.closest('a'))closeNav()});

/* ---------- Apparitions au défilement ---------- */
var io=null,failsafe=null;
function setupReveal(pg){
  if(io)io.disconnect();clearTimeout(failsafe);
  var els=$$('.rv',pg);
  if(RM||!('IntersectionObserver' in window)){els.forEach(function(x){x.classList.remove('rv-p')});return}
  io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.remove('rv-p');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(el){var r=el.getBoundingClientRect();if(r.top>window.innerHeight*.92){el.classList.add('rv-p');io.observe(el)}});
  failsafe=setTimeout(function(){els.forEach(function(x){x.classList.remove('rv-p')})},6000);
}

/* ---------- Parallaxe léger ---------- */
var par=$$('[data-par]'),tick=false;
function onScroll(){if(tick)return;tick=true;requestAnimationFrame(function(){var y=window.scrollY;if(y<1400)par.forEach(function(el){var s=parseFloat(el.dataset.par);if(s)el.style.translate='0 '+(y*s).toFixed(1)+'px'});tick=false})}
if(!RM)window.addEventListener('scroll',onScroll,{passive:true});

/* ---------- Formulaire ---------- */
var ENDPOINT=''; /* Branchez ici l’URL de votre service de formulaire (Formspree, Getform, API maison…) */
var form=$('#form'),ok=$('#ok');
function setErr(id,msg,inp){$('#e-'+id).textContent=msg;var f=$('#'+inp);if(msg)f.setAttribute('aria-invalid','true');else f.removeAttribute('aria-invalid')}
form.addEventListener('submit',function(e){
  e.preventDefault();var bad=null,v=function(id){return form.elements[id].value.trim()};
  var em=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setErr('nom',v('nom')?'':'Indiquez votre nom et prénom.','nom');if(!v('nom'))bad=bad||'nom';
  var eOk=em.test(v('email'));setErr('email',eOk?'':'Indiquez une adresse e-mail valide.','email');if(!eOk)bad=bad||'email';
  setErr('presta',v('prestation')?'':'Choisissez un type de prestation.','presta');if(!v('prestation'))bad=bad||'presta';
  setErr('desc',v('description')?'':'Décrivez brièvement votre projet.','desc');if(!v('description'))bad=bad||'desc';
  if(bad){$('#'+bad).focus();return}
  var data={};$$('input,select,textarea',form).forEach(function(f){if(f.name)data[f.name]=f.value});
  var done=function(){$('#okT').textContent='Merci '+(v('nom').split(' ')[0])+', votre demande est bien reçue.';form.style.display='none';ok.classList.add('on');ok.focus();window.scrollTo({top:Math.max(0,ok.getBoundingClientRect().top+window.scrollY-120),behavior:RM?'auto':'smooth'})};
  if(ENDPOINT){fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)}).then(function(r){if(!r.ok)throw 0;done()}).catch(function(){setErr('desc','L’envoi a échoué. Réessayez dans un instant.','desc')})}
  else done();
});
$('#again').addEventListener('click',function(){form.reset();form.style.display='';ok.classList.remove('on');$('#nom').focus()});

/* ---------- Intro ---------- */
var inName=$('#inName'),idx=0;
inName.innerHTML=['Authentic','&','True','Creator'].map(function(w){return '<span class="wd">'+w.split('').map(function(ch){return '<i style="--i:'+(idx++)+'">'+ch+'</i>'}).join('')+'</span>'}).join('');
var intro=$('#intro');
function endIntro(){document.documentElement.classList.remove('pre');if(intro)intro.classList.add('gone')}
if(RM){endIntro()}else{
  setTimeout(function(){document.documentElement.classList.remove('pre')},2150);
  setTimeout(function(){if(intro)intro.classList.add('gone')},3100);
  intro.addEventListener('click',function(){document.documentElement.classList.remove('pre');intro.style.animation='introOut .4s ease forwards';setTimeout(function(){intro.classList.add('gone')},420)});
}
setTimeout(function(){document.documentElement.classList.remove('pre')},5000);

/* Mesure d’audience : ajoutez ici votre script (Plausible, GA4, Matomo…) */

show(routeFromHash());
})();

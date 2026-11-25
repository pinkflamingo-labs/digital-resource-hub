window.CC_RD=1;
window.CC_RD_ASIS=1;document.documentElement.classList.add('rdasis');
(function(){
var R=document.documentElement;
function gar(){return R.classList.contains('ccgarden')}
var RT={
'':{t:'Home',g:'overview',n:'overview',view:'home'},
'this-week':{s:'this-week',t:'This Week',v:'land'},
'this-week/at-a-glance':{s:'this-week',t:'At a glance',g:'overview',view:'glance'},
'this-week/key-dates':{s:'this-week',t:'Key dates',g:'watch',n:'watch'},
'this-week/ignite':{s:'this-week',t:'Ignite',g:'ignite',n:'ignite'},
'roadmap':{s:'roadmap',t:'Roadmap',v:'land'},
'roadmap/items':{s:'roadmap',t:'Roadmap items',g:'overview',view:'roadmap'},
'roadmap/horizon':{s:'roadmap',t:'On the horizon',g:'cheshire'},
'ai-and-copilot':{s:'ai-and-copilot',t:'AI & Copilot',v:'ai'},
'ai-and-copilot/caucus-race':{s:'ai-and-copilot',t:'The Caucus Race',g:'race'},
'ai-and-copilot/live-flowers':{s:'ai-and-copilot',t:'Live Flowers',n:'court'},
'ai-and-copilot/questions':{s:'ai-and-copilot',t:'Questions',n:'alice'},
'governance':{s:'governance',t:'Governance',v:'gov',g:'court'},
'governance/decrees':{s:'governance',t:'Royal decrees',g:'court',sub:'ag-decrees',root:1},
'governance/playbooks':{s:'governance',t:'Playbooks',g:'court',sub:'ag-playbooks'},
'governance/templates':{s:'governance',t:'Templates',g:'court',sub:'ag-templates'},
'governance/how-we-decide':{s:'governance',t:'How we decide',g:'court',sub:'ag-how'},
'wonderland':{s:'wonderland',t:'Explore Wonderland',v:'hub'},
'wonderland/tea-party':{s:'wonderland',t:'The Mad Hatter\u2019s Tea Party',g:'party',xp:1},
'wonderland/caterpillar':{s:'wonderland',t:'The Caterpillar',g:'journey',xp:2},
'wonderland/rabbit-hole':{s:'wonderland',t:'Down the Rabbit Hole',g:'hole',xp:3},
'wonderland/hall-of-doors':{s:'wonderland',t:'The Hall of Doors',g:'glass',xp:4},
'learning':{s:'learning',t:'Learning & Resources',v:'land'},
'learning/library':{s:'learning',t:'The library',v:'learn'},
'learning/school':{s:'learning',t:'School',n:'school'},
'events':{s:'events',t:'Events',v:'land'},
'events/invitations':{s:'events',t:'Invitations',g:'alice'},
'sources':{t:'Sources',v:'sources'}
};
if(window.CC_RD_ASIS){RT['this-week/at-a-glance']={s:'this-week',t:'At a glance',g:'overview'};RT['this-week/whats-new']={s:'this-week',t:'What\u2019s new',g:'drink'};delete RT['roadmap/items']}
var LND={},GSW={'this-week':{s:'this-week',t:'This Week',g:'overview',n:'overview',view:'glance'},
'roadmap':{s:'roadmap',t:'Roadmap',m:'When it lands',g:'overview',n:'glass',view:'roadmap'},
'learning':{s:'learning',t:'Learning & Resources',v:'learn'},
'events':{s:'events',t:'Events',g:'alice',n:'watch'}};
var GLO={},GAL={'this-week/at-a-glance':'this-week','roadmap/items':'roadmap','learning/library':'learning','events/invitations':'events'};if(window.CC_RD_ASIS)GAL['this-week/whats-new']='this-week';
Object.keys(GSW).forEach(function(k){LND[k]=RT[k]});Object.keys(GAL).forEach(function(k){GLO[k]=RT[k]});
var SYG=null;
function syncRT(){var g=gar();if(SYG===g)return;SYG=g;Object.keys(GSW).forEach(function(k){RT[k]=g?GSW[k]:LND[k]});
 Object.keys(GLO).forEach(function(k){if(g||!GLO[k])delete RT[k];else RT[k]=GLO[k]})}
syncRT();addEventListener('cc-side',syncRT);
function res(k){syncRT();if(k==null||RT.hasOwnProperty(k))return k;var m=asMap(k,'');if(m)return m[0];return GAL.hasOwnProperty(k)?GAL[k]:k}
function asMap(k,x){if(!window.CC_RD_ASIS||gar())return null;x=x||'';
 if(k==='this-week/at-a-glance'&&/^#rd12uph/.test(x))return ['this-week/whats-new',''];
 if(k==='roadmap/items'){var el=null;try{el=x&&/^#[A-Za-z][\w-]*$/.test(x)?document.querySelector(x):null}catch(e){}return el&&el.closest&&el.closest('#p-drink')?['this-week/whats-new',x]:['this-week/at-a-glance',x||'#rmall']}
 return null}
window.ccRdAsMap=asMap;
var CHG={overview:'this-week/at-a-glance',ignite:'this-week/ignite',watch:'this-week/key-dates',drink:'this-week/at-a-glance',race:'ai-and-copilot/caucus-race',journey:'wonderland/caterpillar',party:'wonderland/tea-party',hole:'wonderland/rabbit-hole',glass:'wonderland/hall-of-doors',school:'learning/school',court:'governance/decrees',cheshire:'roadmap/horizon',alice:'events/invitations'};if(window.CC_RD_ASIS)CHG.drink='this-week/whats-new';
var LEGX=window.CC_RD_ASIS?{}:{drink:'#rd12uph'};
var CHN={overview:'this-week',watch:'events',glass:'roadmap',court:'ai-and-copilot/live-flowers',alice:'ai-and-copilot/questions'};
var OLD={'#playbooks':'governance/playbooks','#templates':'governance/templates','#decrees':'governance/decrees','#how-we-decide':'governance/how-we-decide','#hwdql':'governance/how-we-decide'};
var OLDX={'#hwdql':'#hwdql'};
var ALIASX=window.CC_RD_ASIS?{'roadmap-items':'#rmall'}:{'whats-new':'#rd12uph','this-week/whats-new':'#rd12uph'};
var ALIAS={'at-a-glance':'this-week/at-a-glance','whats-new':'this-week/at-a-glance','this-week/whats-new':'this-week/at-a-glance','roadmap-items':'roadmap/items','invitations':'events/invitations','library':'learning/library','decrees':'governance/decrees','royal-decrees':'governance/decrees','ignite':'this-week/ignite','special':'this-week/ignite','school':'learning/school','tea-party':'wonderland/tea-party','caterpillar':'wonderland/caterpillar','rabbit-hole':'wonderland/rabbit-hole','hall-of-doors':'wonderland/hall-of-doors','caucus-race':'ai-and-copilot/caucus-race','key-dates':'this-week/key-dates','horizon':'roadmap/horizon'};if(window.CC_RD_ASIS)ALIAS['whats-new']='this-week/whats-new';
function routeOf(id){if(gar()&&CHN.hasOwnProperty(id))return res(CHN[id]);return CHG.hasOwnProperty(id)?res(CHG[id]):null}
function chOf(k){syncRT();var r=RT[k];if(!r||r.v)return null;return (gar()?r.n:r.g)||null}
var ITK=['this-week/at-a-glance','this-week/key-dates','governance/decrees','roadmap/items'];if(window.CC_RD_ASIS)ITK.unshift('this-week/whats-new');
function parse(h){h=h||'';
 if(h.slice(0,2)==='#/'){var p=h.slice(2),x='',q=p.indexOf('#');if(q>=0){x=p.slice(q);p=p.slice(0,q)}try{p=decodeURIComponent(p)}catch(e){}
  p=p.replace(/^\/+|\/+$/g,'');var pl=p.toLowerCase();syncRT();if(window.CC_RD_ASIS){var am=asMap(pl,x);if(am)return {k:am[0],x:am[1],legacy:1}}
  if(!RT.hasOwnProperty(pl)&&ALIAS.hasOwnProperty(pl))return {k:res(ALIAS[pl]),x:x||ALIASX[pl]||'',legacy:1};
  if(!RT.hasOwnProperty(pl)&&GAL.hasOwnProperty(pl))return {k:GAL[pl],x:x,legacy:1};
  if(!RT.hasOwnProperty(pl)){for(var i=0;i<ITK.length;i++){var b=ITK[i];if(pl.indexOf(b+'/')===0&&pl.length>b.length+1){window.CC_RD_ITEM={k:b,id:p.slice(b.length+1)};return {k:res(b),x:'',item:1}}}}
  return {k:RT.hasOwnProperty(pl)?pl:'',x:x,miss:!RT.hasOwnProperty(pl)}}
 if(OLD.hasOwnProperty(h))return {k:OLD[h],legacy:1,x:OLDX[h]||''};
 var id=h.slice(1);if(/^[a-z]+$/.test(id)&&routeOf(id)!==null)return {k:routeOf(id),legacy:1,x:(!gar()&&LEGX[id])||''};
 return null}
window.CC_RD_RT=RT;window.ccRdRes=res;window.ccRdSync=syncRT;window.ccRdParse=parse;window.ccRdRouteOf=routeOf;window.ccRdCh=chOf;window.CC_RD_ALIAS=ALIAS;
window.ccRdNoBanner=function(id){if(id!=='overview')return false;var v=R.dataset.rdv;if(v==null){var p=window.CC_RD_P;v=(p&&RT[p.k]&&RT[p.k].view)||''}return v==='home'||(v==='glance'&&!gar())};
try{var d=location.pathname.replace(/[^\/]*$/,'');if(/^https?:$/.test(location.protocol)&&/\/redesign\/$/.test(d))window.CC_RD_UP=location.origin+d.replace(/redesign\/$/,'')}catch(e){}
try{history.scrollRestoration='manual'}catch(e){}
function elRoute(h){var el=null;h=String(h||'').replace(/^#/,'');try{el=/^[A-Za-z][\w-]*$/.test(h)?document.getElementById(h):null}catch(e){}
 var pn=el&&el.closest?el.closest('.panel'):null,k=pn?routeOf(pn.id.slice(2)):null;
 if(pn&&pn.id==='p-overview'&&!gar()){var b=el.closest('#p-overview > *');k=b&&b.matches('.charts,#rdrmgo,#rmall')?(window.CC_RD_ASIS?'this-week/at-a-glance':'roadmap/items'):(!b||b.matches('#ccprov,.ccact,.pbanner')?'':'this-week/at-a-glance')}
 return (pn&&k!==null)?{k:k,x:'#'+h}:null}
window.ccRdElRoute=elRoute;
window.ccRdStart=function(){var p=parse(location.hash);if(!p)p=elRoute(location.hash)||{k:'',keep:1};
 window.CC_RD_P=p;return chOf(p.k)||'overview'};
})();

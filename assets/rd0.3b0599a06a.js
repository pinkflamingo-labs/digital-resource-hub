window.CC_RD=1;
(function(){
var R=document.documentElement;
function gar(){return R.classList.contains('ccgarden')}
var RT={
'':{t:'Home',g:'overview',n:'overview',view:'home'},
'this-week':{s:'this-week',t:'This Week',g:'overview',n:'overview',view:'glance'},
'this-week/whats-new':{s:'this-week',t:'What\u2019s new',g:'drink'},
'this-week/key-dates':{s:'this-week',t:'Key dates',g:'watch',n:'watch'},
'this-week/ignite':{s:'this-week',t:'Ignite',g:'ignite',n:'ignite'},
'roadmap':{s:'roadmap',t:'Roadmap',m:'When it lands',g:'overview',n:'glass',view:'roadmap'},
'roadmap/horizon':{s:'roadmap',t:'On the horizon',g:'cheshire'},
'ai-and-copilot':{s:'ai-and-copilot',t:'AI & Copilot',v:'ai'},
'ai-and-copilot/caucus-race':{s:'ai-and-copilot',t:'The Caucus Race',g:'race'},
'ai-and-copilot/live-flowers':{s:'ai-and-copilot',t:'Live Flowers',n:'court'},
'ai-and-copilot/questions':{s:'ai-and-copilot',t:'Questions',n:'alice'},
'governance':{s:'governance',t:'Governance',m:'Royal decrees',g:'court',sub:'ag-decrees',root:1},
'governance/playbooks':{s:'governance',t:'Playbooks',g:'court',sub:'ag-playbooks'},
'governance/templates':{s:'governance',t:'Templates',g:'court',sub:'ag-templates'},
'governance/how-we-decide':{s:'governance',t:'How we decide',g:'court',sub:'ag-how'},
'wonderland':{s:'wonderland',t:'Explore Wonderland',v:'hub'},
'wonderland/tea-party':{s:'wonderland',t:'The Mad Hatter\u2019s Tea Party',g:'party',xp:1},
'wonderland/caterpillar':{s:'wonderland',t:'The Caterpillar',g:'journey',xp:2},
'wonderland/rabbit-hole':{s:'wonderland',t:'Down the Rabbit Hole',g:'hole',xp:3},
'wonderland/hall-of-doors':{s:'wonderland',t:'The Hall of Doors',g:'glass',xp:4},
'learning':{s:'learning',t:'Learning & Resources',v:'learn'},
'learning/school':{s:'learning',t:'School',n:'school'},
'events':{s:'events',t:'Events',g:'alice',n:'watch'},
'sources':{t:'Sources',v:'sources'}
};
var CHG={overview:'this-week',ignite:'this-week/ignite',watch:'this-week/key-dates',drink:'this-week/whats-new',race:'ai-and-copilot/caucus-race',journey:'wonderland/caterpillar',party:'wonderland/tea-party',hole:'wonderland/rabbit-hole',glass:'wonderland/hall-of-doors',school:'learning/school',court:'governance',cheshire:'roadmap/horizon',alice:'events'};
var CHN={overview:'this-week',watch:'events',glass:'roadmap',court:'ai-and-copilot/live-flowers',alice:'ai-and-copilot/questions'};
var OLD={'#playbooks':'governance/playbooks','#templates':'governance/templates','#decrees':'governance','#how-we-decide':'governance/how-we-decide','#hwdql':'governance/how-we-decide'};
var OLDX={'#hwdql':'#hwdql'};
var ALIAS={'at-a-glance':'this-week','whats-new':'this-week/whats-new','ignite':'this-week/ignite','special':'this-week/ignite','school':'learning/school','tea-party':'wonderland/tea-party','caterpillar':'wonderland/caterpillar','rabbit-hole':'wonderland/rabbit-hole','hall-of-doors':'wonderland/hall-of-doors','caucus-race':'ai-and-copilot/caucus-race','key-dates':'this-week/key-dates','horizon':'roadmap/horizon'};
function routeOf(id){if(gar()&&CHN.hasOwnProperty(id))return CHN[id];return CHG.hasOwnProperty(id)?CHG[id]:null}
function chOf(k){var r=RT[k];if(!r||r.v)return null;return (gar()?r.n:r.g)||null}
function parse(h){h=h||'';
 if(h.slice(0,2)==='#/'){var p=h.slice(2),x='',q=p.indexOf('#');if(q>=0){x=p.slice(q);p=p.slice(0,q)}try{p=decodeURIComponent(p)}catch(e){}
  p=p.replace(/^\/+|\/+$/g,'').toLowerCase();if(!RT.hasOwnProperty(p)&&ALIAS.hasOwnProperty(p))return {k:ALIAS[p],x:x,legacy:1};return {k:RT.hasOwnProperty(p)?p:'',x:x,miss:!RT.hasOwnProperty(p)}}
 if(OLD.hasOwnProperty(h))return {k:OLD[h],legacy:1,x:OLDX[h]||''};
 var id=h.slice(1);if(/^[a-z]+$/.test(id)&&routeOf(id)!==null)return {k:routeOf(id),legacy:1};
 return null}
window.CC_RD_RT=RT;window.ccRdParse=parse;window.ccRdRouteOf=routeOf;window.ccRdCh=chOf;window.CC_RD_ALIAS=ALIAS;
window.ccRdNoBanner=function(id){if(id!=='overview')return false;var v=R.dataset.rdv;if(v==null){var p=window.CC_RD_P;v=(p&&RT[p.k]&&RT[p.k].view)||''}return v==='home'||(v==='glance'&&!gar())};
try{var d=location.pathname.replace(/[^\/]*$/,'');if(/^https?:$/.test(location.protocol)&&/\/redesign\/$/.test(d))window.CC_RD_UP=location.origin+d.replace(/redesign\/$/,'')}catch(e){}
try{history.scrollRestoration='manual'}catch(e){}
function elRoute(h){var el=null;h=String(h||'').replace(/^#/,'');try{el=/^[A-Za-z][\w-]*$/.test(h)?document.getElementById(h):null}catch(e){}
 var pn=el&&el.closest?el.closest('.panel'):null,k=pn?routeOf(pn.id.slice(2)):null;
 if(pn&&pn.id==='p-overview'&&!gar()){var b=el.closest('#p-overview > *');k=b&&b.matches('.charts,#rdrmgo')?'roadmap':(!b||b.matches('#ccprov,.ccact,.pbanner')?'':'this-week')}
 return (pn&&k!==null)?{k:k,x:'#'+h}:null}
window.ccRdElRoute=elRoute;
window.ccRdStart=function(){var p=parse(location.hash);if(!p)p=elRoute(location.hash)||{k:'',keep:1};
 window.CC_RD_P=p;return chOf(p.k)||'overview'};
})();

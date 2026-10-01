(function(){
  document.documentElement.classList.remove("no-js");
  var t=document.getElementById("mob-toggle"),d=document.getElementById("mob-drawer"),o=document.getElementById("mob-overlay"),c=document.getElementById("drawer-close");
  function openNav(){d.removeAttribute("hidden");o.classList.add("visible");t.setAttribute("aria-expanded","true");t.setAttribute("aria-label","Close navigation menu");document.documentElement.style.overflow="hidden";}
  function closeNav(){d.setAttribute("hidden","");o.classList.remove("visible");t.setAttribute("aria-expanded","false");t.setAttribute("aria-label","Open navigation menu");document.documentElement.style.overflow="";}
  if(t&&d&&o){
    t.addEventListener("click",function(){if(t.getAttribute("aria-expanded")==="true"){closeNav();}else{openNav();}});
    if(c){c.addEventListener("click",closeNav);}
    o.addEventListener("click",closeNav);
    d.querySelectorAll("a").forEach(function(a){a.addEventListener("click",closeNav);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeNav();}});
    window.addEventListener("resize",function(){if(window.innerWidth>768){closeNav();}});
  }
  document.querySelectorAll(".faq-q").forEach(function(q){
    q.addEventListener("click",function(){var it=q.parentElement;var isOpen=it.classList.toggle("open");q.setAttribute("aria-expanded",isOpen?"true":"false");});
  });
  document.querySelectorAll("[data-tabs]").forEach(function(box){
    var btns=box.querySelectorAll("[role=tab]");
    box.classList.add("tabs-js");
    function select(i){btns.forEach(function(b,j){var on=(i===j);b.setAttribute("aria-selected",on?"true":"false");b.tabIndex=on?0:-1;var p=document.getElementById(b.getAttribute("aria-controls"));if(p){if(on){p.removeAttribute("hidden");}else{p.setAttribute("hidden","");}}});}
    btns.forEach(function(b,i){
      b.addEventListener("click",function(){select(i);});
      b.addEventListener("keydown",function(e){var n=null;if(e.key==="ArrowRight"){n=(i+1)%btns.length;}if(e.key==="ArrowLeft"){n=(i-1+btns.length)%btns.length;}if(n!==null){select(n);btns[n].focus();}});
    });
    select(0);
  });
})();

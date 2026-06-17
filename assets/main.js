// 靜霧 SEIMU — interactions
(function(){
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); });
    });
  }
  // contact form -> mailto (no backend on static host)
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var n = encodeURIComponent(form.name.value||'');
      var msg = encodeURIComponent(form.message.value||'');
      var em = encodeURIComponent(form.email.value||'');
      window.location.href = 'mailto:hello@seimu.studio?subject=' + n + ' 的香氛諮詢&body=' + msg + '%0A%0A聯絡信箱:' + em;
      var note = document.getElementById('form-note');
      if(note){ note.textContent = '正在開啟您的郵件程式…若未自動開啟,請來信 hello@seimu.studio'; }
    });
  }
  // footer year
  var y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();

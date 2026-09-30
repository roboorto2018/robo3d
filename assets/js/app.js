/* Robo Tools — rendering delle pagine a partire da data.js */
(function () {
  'use strict';

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function byId(id) {
    for (var i = 0; i < PLUGINS.length; i++) { if (PLUGINS[i].id === id) { return i; } }
    return -1;
  }
  /* p.video (id YouTube) diventa la prima voce della galleria, come "yt:<id>" */
  function imgs(p) {
    var list = p.images || ['assets/img/placeholder/' + p.id + '-1.svg', 'assets/img/placeholder/' + p.id + '-2.svg'];
    return p.video ? ['yt:' + p.video].concat(list) : list;
  }
  /* galleria 16:9: tutte le immagini (e l'eventuale video) nello stesso riquadro, frecce per scorrere */
  var ARR_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg>';
  var ARR_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>';
  var ICO_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  var ICO_ZOOM = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8M8 10.5h5M10.5 8v5"/></svg>';
  function gallery(list, start, alt, extra) {
    var s = '', d = '', many = list.length > 1;
    start = many ? (start % list.length) : 0;
    for (var i = 0; i < list.length; i++) {
      var item = list[i], isVideo = /^yt:/.test(item), on = i === start ? ' on' : '';
      var label = esc(alt) + (many ? ' (' + (i + 1) + '/' + list.length + ')' : '');
      var lazy = i === start ? '' : ' loading="lazy"';
      if (isVideo) {
        var vid = esc(item.slice(3));
        s += '<div class="gal-slide' + on + '" data-video="' + vid + '">' +
          '<img src="https://img.youtube.com/vi/' + vid + '/hqdefault.jpg" alt="' + label + '"' + lazy + '>' +
          '<button type="button" class="gal-play" data-video="' + vid + '" aria-label="Guarda il video">' + ICO_PLAY + '</button>' +
          '<button type="button" class="gal-zoom" data-video="' + vid + '" aria-label="Guarda il video ingrandito">' + ICO_ZOOM + '</button></div>';
      } else {
        s += '<div class="gal-slide' + on + '">' +
          '<img src="' + esc(item) + '" alt="' + label + '"' + lazy + '>' +
          '<button type="button" class="gal-zoom" data-src="' + esc(item) + '" aria-label="Ingrandisci immagine">' + ICO_ZOOM + '</button></div>';
      }
      d += '<i class="' + (i === start ? 'on' : '') + '"></i>';
    }
    return '<div class="gal' + (many ? ' multi' : '') + '" data-i="' + start + '">' + s + (extra || '') +
      (many ? '<button type="button" class="gal-btn prev" data-dir="-1" aria-label="Immagine precedente">' + ARR_L + '</button>' +
        '<button type="button" class="gal-btn next" data-dir="1" aria-label="Immagine successiva">' + ARR_R + '</button>' +
        '<span class="gal-dots">' + d + '</span>' : '') + '</div>';
  }

  /* lightbox: apre foto o video (YouTube) ingranditi, sopra il resto della pagina */
  function lightboxEl() {
    var box = $('#lightbox');
    if (box) { return box; }
    box = document.createElement('div');
    box.id = 'lightbox';
    box.className = 'lightbox';
    box.innerHTML = '<button type="button" class="lightbox-close" aria-label="Chiudi">&times;</button><div class="lightbox-inner"></div>';
    document.body.appendChild(box);
    box.addEventListener('click', function (e) {
      if (e.target === box || (e.target.closest && e.target.closest('.lightbox-close'))) { closeLightbox(); }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeLightbox(); } });
    return box;
  }
  function openLightbox(html) {
    var box = lightboxEl();
    box.querySelector('.lightbox-inner').innerHTML = html;
    box.classList.add('on');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    var box = $('#lightbox');
    if (!box || !box.classList.contains('on')) { return; }
    box.classList.remove('on');
    box.querySelector('.lightbox-inner').innerHTML = ''; // ferma il video se era in riproduzione
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    var zoom = e.target.closest ? e.target.closest('.gal-zoom, .gal-play') : null;
    if (zoom) {
      e.preventDefault(); e.stopPropagation();
      var vid = zoom.getAttribute('data-video');
      if (vid) {
        openLightbox('<iframe src="https://www.youtube.com/embed/' + vid + '?autoplay=1&rel=0" title="Video" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      } else {
        openLightbox('<img src="' + esc(zoom.getAttribute('data-src')) + '" alt="">');
      }
      return;
    }
    var b = e.target.closest ? e.target.closest('.gal-btn') : null;
    if (!b) { return; }
    e.preventDefault(); e.stopPropagation();
    var g = b.parentNode, sl = g.querySelectorAll('.gal-slide'), dots = g.querySelectorAll('.gal-dots i');
    var n = (parseInt(g.getAttribute('data-i'), 10) + parseInt(b.getAttribute('data-dir'), 10) + sl.length) % sl.length;
    for (var k = 0; k < sl.length; k++) {
      sl[k].className = 'gal-slide' + (k === n ? ' on' : '');
      if (dots[k]) { dots[k].className = k === n ? 'on' : ''; }
    }
    g.setAttribute('data-i', n);
  }, true);
  function icon(p, big) {
    return '<span class="plugin-icon"' + (big ? '' : '') + '><img src="assets/img/icons/' + esc(p.id) + '.png" alt="" width="32" height="32"></span>';
  }

  /* logo: cubo isometrico con faccia rossa */
  var LOGO = '<svg viewBox="0 0 200 200" aria-hidden="true">' +
    '<polygon points="100,10 177.9,55 177.9,145 100,190 22.1,145 22.1,55" fill="#16171a"/>' +
    '<g transform="translate(100 55) scale(.84) translate(-100 -55)"><polygon points="100,10 177.9,55 100,100 22.1,55" fill="#fff"/></g>' +
    '<g transform="translate(61 122.5) scale(.84) translate(-61 -122.5)"><polygon points="22.1,55 100,100 100,190 22.1,145" fill="#fff"/></g>' +
    '<g transform="translate(139 122.5) scale(.84) translate(-139 -122.5)"><polygon points="100,100 177.9,55 177.9,145 100,190" fill="#fff"/></g>' +
    '<g transform="translate(100 55) scale(.45) translate(-100 -55)"><polygon points="100,10 177.9,55 100,100 22.1,55" fill="#e02424"/></g>' +
    '<g transform="translate(61 122.5) scale(.45) translate(-61 -122.5)"><polygon points="22.1,55 100,100 100,190 22.1,145" fill="#9a9ca3"/></g>' +
    '<g transform="translate(139 122.5) scale(.45) translate(-139 -122.5)"><polygon points="100,100 177.9,55 177.9,145 100,190" fill="#9a9ca3"/></g></svg>';

  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* metà dei link plugin per ciascuna colonna del footer */
  function half(links, part) {
    var list = links.split('</a>').filter(function (x) { return x; });
    var cut = Math.ceil(list.length / 2);
    return (part ? list.slice(cut) : list.slice(0, cut)).join('</a>') + '</a>';
  }

  /* ------------------------------------------------------ header + footer */
  function chrome(isHome) {
    var base = isHome ? '' : 'index.html';
    $('#site-header').innerHTML =
      '<div class="wrap"><a class="brand" href="index.html">' + LOGO + '<span>' + esc(SITE.name) + '</span></a>' +
      '<nav class="nav"><a href="' + base + '#plugin">Plugin</a><a href="' + base + '#installazione">Installazione</a><a href="contatti.html">Contatti</a>' +
      '<a class="cta" href="' + base + '#plugin">Scopri i plugin</a></nav></div>';

    var links = '';
    for (var i = 0; i < PLUGINS.length; i++) {
      links += '<a href="plugin.html?id=' + PLUGINS[i].id + '">' + esc(PLUGINS[i].name) + '</a>';
    }
    $('#site-footer').innerHTML =
      '<div class="wrap"><div><a class="brand" href="index.html">' + LOGO + '<span>' + esc(SITE.name) + '</span></a>' +
      '<p>Plugin per SketchUp che semplificano il lavoro di ogni giorno.<br>Compatibili con ' + esc(SITE.compat) + '.</p>' +
      '<p style="margin-top:10px"><a href="contatti.html" style="display:inline;font-weight:600;color:#fff">Contattaci →</a></p></div>' +
      '<div><h4>Plugin</h4>' + half(links, 0) + '</div>' +
      '<div><h4>&nbsp;</h4>' + half(links, 1) + '</div>' +
      '<p class="copy">© ' + new Date().getFullYear() + ' Robo Tools. Tutti i diritti riservati.</p></div>';
  }

  /* ------------------------------------------------------------------ home */
  function card(p) {
    return '<a class="card" href="plugin.html?id=' + p.id + '" data-cat="' + esc(p.category) + '">' +
      '<div class="thumb">' + gallery(imgs(p), 0, 'Anteprima di ' + p.name, '<span class="badge">' + esc(p.category) + '</span>') + '</div>' +
      '<div class="body"><div class="head">' + icon(p) + '<div><h3>' + esc(p.name) + '</h3><span class="ver">v' + esc(p.version) + '</span></div></div>' +
      '<p>' + esc(p.tagline) + '</p><span class="more">Scopri di più →</span></div></a>';
  }

  function home() {
    chrome(true);
    $('#count').textContent = PLUGINS.length;
    var chips = '<button class="chip on" data-f="">Tutti</button>';
    for (var i = 0; i < CATEGORIES.length; i++) {
      chips += '<button class="chip" data-f="' + esc(CATEGORIES[i]) + '">' + esc(CATEGORIES[i]) + '</button>';
    }
    $('#chips').innerHTML = chips;
    var html = '';
    for (var j = 0; j < PLUGINS.length; j++) { html += card(PLUGINS[j]); }
    $('#grid').innerHTML = html;

    $('#chips').addEventListener('click', function (ev) {
      var b = ev.target.closest('.chip');
      if (!b) { return; }
      var f = b.getAttribute('data-f');
      var all = document.querySelectorAll('.chip');
      for (var k = 0; k < all.length; k++) { all[k].classList.toggle('on', all[k] === b); }
      var cards = document.querySelectorAll('#grid .card');
      for (var m = 0; m < cards.length; m++) {
        cards[m].style.display = (!f || cards[m].getAttribute('data-cat') === f) ? '' : 'none';
      }
    });
  }

  /* ---------------------------------------------------------------- plugin */
  function plugin() {
    chrome(false);
    var m = /[?&]id=([a-z_]+)/.exec(location.search);
    var idx = m ? byId(m[1]) : -1;
    var root = $('#plugin-root');
    if (idx < 0) {
      root.innerHTML = '<div class="wrap" style="padding:120px 0"><h1>Plugin non trovato</h1><p class="muted" style="margin-top:12px">Torna alla <a href="index.html#plugin" style="color:var(--red)">lista dei plugin</a>.</p></div>';
      return;
    }
    var p = PLUGINS[idx];
    var im = imgs(p);
    document.title = p.name + ' — Robo Tools';
    var meta = $('meta[name="description"]');
    if (meta) { meta.setAttribute('content', p.tagline + ' ' + p.simple); }

    var steps = '';
    for (var a = 0; a < p.steps.length; a++) { steps += '<li><span>' + esc(p.steps[a]) + '</span></li>'; }
    var how = '';
    for (var b = 0; b < p.how.length; b++) {
      how += '<div class="item"><h3><i>0' + (b + 1) + '</i>' + esc(p.how[b].t) + '</h3><p>' + esc(p.how[b].d) + '</p></div>';
    }
    var pros = '';
    for (var c = 0; c < p.pros.length; c++) { pros += '<li>' + CHECK + '<span>' + esc(p.pros[c]) + '</span></li>'; }
    var solve = '';
    for (var d = 0; d < p.solves.length; d++) {
      solve += '<div class="row"><div class="p"><small>Il problema</small>' + esc(p.solves[d].p) + '</div>' +
        '<div class="arrow">' + ARROW + '</div><div class="s"><small>Con ' + esc(p.name) + '</small>' + esc(p.solves[d].s) + '</div></div>';
    }
    var specs = '<tr><th>Versione</th><td>' + esc(p.version) + '</td></tr><tr><th>Compatibilità</th><td>' + esc(SITE.compat) + '</td></tr>';
    for (var e = 0; e < p.specs.length; e++) { specs += '<tr><th>' + esc(p.specs[e][0]) + '</th><td>' + esc(p.specs[e][1]) + '</td></tr>'; }

    var tb = TOOLBARS[p.id];
    var tbHtml = '';
    if (tb) {
      var groups = '', legend = '', total = 0;
      for (var g = 0; g < tb.groups.length; g++) {
        var btns = '';
        for (var q = 0; q < tb.groups[g].length; q++) {
          var it = tb.groups[g][q];
          total++;
          btns += '<span class="tb-btn" title="' + esc(it.l) + '"><img src="assets/img/toolbar/' + esc(p.id) + '/' + esc(it.i) + '" alt="' + esc(it.l) + '"></span>';
          legend += '<li><img src="assets/img/toolbar/' + esc(p.id) + '/' + esc(it.i) + '" alt=""><span>' + esc(it.l) + '</span></li>';
        }
        groups += (g ? '<span class="tb-sep"></span>' : '') + btns;
      }
      var shapesHtml = '';
      if (tb.shapes) {
        shapesHtml = '<h3 class="tb-shapes-title">' + esc(tb.shapesTitle || '') + '</h3><ul class="tb-shapes">';
        for (var w = 0; w < tb.shapes.length; w++) {
          var sh = tb.shapes[w];
          shapesHtml += '<li><img src="assets/img/toolbar/' + esc(p.id) + '/' + esc(sh.i) + '" alt=""><div><b>' + esc(sh.l) + '</b><span>' + esc(sh.d) + '</span></div></li>';
        }
        shapesHtml += '</ul>';
      }
      tbHtml = '<section><div class="wrap"><div class="section-head"><span class="eyebrow">Nella barra strumenti</span>' +
        '<h2>' + (total === 1 ? 'Un solo pulsante' : total + ' pulsanti') + ' a portata di clic</h2>' +
        '<p>Ecco come compare la barra <b>' + esc(tb.name) + '</b> in SketchUp. Passa il mouse sui pulsanti per leggerne il nome.</p></div>' +
        '<div class="tb-frame"><div class="tb-bar' + (total > 8 ? ' compact' : '') + '"><span class="tb-grip"></span>' + groups + '</div></div>' +
        '<ul class="tb-legend' + (total > 8 ? ' many' : '') + '">' + legend + '</ul>' + shapesHtml + '</div></section>';
    }

    var prev = PLUGINS[(idx + PLUGINS.length - 1) % PLUGINS.length];
    var next = PLUGINS[(idx + 1) % PLUGINS.length];

    root.innerHTML =
      '<div class="wrap crumbs"><a href="index.html">Home</a> / <a href="index.html#plugin">Plugin</a> / ' + esc(p.name) + '</div>' +
      '<div class="p-hero"><div class="wrap"><div>' +
        '<span class="eyebrow">' + esc(p.category) + '</span>' +
        '<div class="p-title">' + icon(p) + '<h1>' + esc(p.name) + '</h1><span class="pill dark">v' + esc(p.version) + '</span></div>' +
        '<p class="tag">' + esc(p.tagline) + '</p>' +
        '<p class="simple">' + esc(p.simple) + '</p>' +
        '<div class="actions"><a class="btn btn-red" href="#tecnica">Come funziona</a><a class="btn btn-dark" href="index.html#plugin">Tutti i plugin</a></div>' +
      '</div><div class="shot">' + gallery(im, 0, 'Immagine di ' + p.name) + '</div></div></div>' +

      tbHtml +
      '<section class="alt"><div class="wrap two"><div class="shot">' + gallery(im, 1, p.name + ' in uso') + '</div>' +
        '<div><span class="eyebrow">In parole semplici</span><h2 style="margin:10px 0 18px;font-size:clamp(1.6rem,3vw,2.2rem)">Come si usa</h2>' +
        '<ol class="usage">' + steps + '</ol></div></div></section>' +

      '<section id="tecnica"><div class="wrap"><div class="section-head"><span class="eyebrow">Approfondimento tecnico</span>' +
        '<h2>Come funziona</h2><p>Cosa succede dietro le quinte quando usi ' + esc(p.name) + '.</p></div><div class="tech">' + how + '</div></div></section>' +

      '<section class="alt"><div class="wrap"><div class="section-head"><span class="eyebrow">Perché sceglierlo</span><h2>I vantaggi</h2></div>' +
        '<ul class="pros">' + pros + '</ul></div></section>' +

      '<section><div class="wrap"><div class="section-head"><span class="eyebrow">Prima e dopo</span><h2>Quali problemi risolve</h2></div>' +
        '<div class="solve">' + solve + '</div></div></section>' +

      '<section class="alt"><div class="wrap"><div class="section-head"><span class="eyebrow">In sintesi</span><h2>Scheda tecnica</h2></div>' +
        '<table class="specs"><tbody>' + specs + '</tbody></table></div></section>' +

      '<section><div class="wrap"><div class="pn">' +
        '<a href="plugin.html?id=' + prev.id + '"><small>← Precedente</small><b>' + esc(prev.name) + '</b></a>' +
        '<a class="next" href="plugin.html?id=' + next.id + '"><small>Successivo →</small><b>' + esc(next.name) + '</b></a></div></div></section>';
  }

  /* ------------------------------------------------------------- contatti */
  // The site is static, so the form is sent through FormSubmit (formsubmit.co), a free service that forwards the
  // message to CONTACT_EMAIL. The first message ever sent asks the owner of the address to confirm it (one time).
  var CONTACT_EMAIL = 'roberto.bolletta@gmail.com';

  function contact() {
    chrome(false);
    var sel = $('#f-plugin');
    var opts = '<option value="Informazioni generali">Informazioni generali</option>';
    for (var i = 0; i < PLUGINS.length; i++) {
      opts += '<option value="' + esc(PLUGINS[i].name) + '">' + esc(PLUGINS[i].name) + '</option>';
    }
    sel.innerHTML = opts;
    var pre = /[?&]plugin=([a-z_]+)/.exec(location.search);
    if (pre && byId(pre[1]) >= 0) { sel.value = PLUGINS[byId(pre[1])].name; }

    var form = $('#contact-form'), status = $('#f-status'), btn = $('#f-send');
    function say(kind, html) {
      status.className = 'f-status ' + kind;
      status.innerHTML = html;
    }
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if ($('#f-honey').value) { return; } // hidden field only robots fill in
      var name = $('#f-name').value.trim(), email = $('#f-email').value.trim(), msg = $('#f-msg').value.trim();
      if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || msg.length < 10) {
        say('err', 'Controlla i campi: servono nome, un\'email valida e un messaggio di almeno 10 caratteri.');
        return;
      }
      if (!$('#f-privacy').checked) {
        say('err', 'Per inviare la richiesta devi acconsentire al trattamento dei dati.');
        return;
      }
      btn.disabled = true;
      say('info', 'Invio in corso…');
      var data = new FormData();
      data.append('Nome', name);
      data.append('Email', email);
      data.append('Argomento', sel.value);
      data.append('Messaggio', msg);
      data.append('_subject', 'Richiesta informazioni dal sito Robo Tools — ' + sel.value);
      data.append('_replyto', email);
      data.append('_template', 'table');
      var mailto = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Richiesta informazioni — ' + sel.value) +
        '&body=' + encodeURIComponent(msg + '\n\n' + name + ' (' + email + ')');
      fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, { method: 'POST', headers: { 'Accept': 'application/json' }, body: data })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          if (j && (j.success === true || j.success === 'true')) {
            form.reset();
            say('ok', '<b>Richiesta inviata.</b> Grazie! Ti risponderò all\'indirizzo che hai indicato.');
          } else {
            throw new Error((j && j.message) || 'errore');
          }
        })['catch'](function () {
          say('err', 'Non è stato possibile inviare il messaggio. Riprova più tardi oppure <a href="' + mailto + '">scrivi direttamente via email</a>.');
        })['then'](function () { btn.disabled = false; });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if ($('#grid')) { home(); } else if ($('#plugin-root')) { plugin(); } else if ($('#contact-form')) { contact(); }
  });
}());

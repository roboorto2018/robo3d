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

  /* lightbox: apre foto o video (YouTube) ingranditi, sopra il resto della pagina.
     Se la galleria di origine ha più di un elemento, mostra anche le frecce
     prev/next e un contatore, così si può scorrere l'intera galleria del
     plugin restando nell'immagine ingrandita. */
  var lbItems = [], lbIndex = 0, lbSourceGal = null;

  function lightboxEl() {
    var box = $('#lightbox');
    if (box) { return box; }
    box = document.createElement('div');
    box.id = 'lightbox';
    box.className = 'lightbox';
    box.innerHTML = '<button type="button" class="lightbox-close" aria-label="Chiudi">&times;</button><div class="lightbox-inner"></div>' +
      '<button type="button" class="lightbox-btn lightbox-prev" data-dir="-1" aria-label="Immagine precedente">' + ARR_L + '</button>' +
      '<button type="button" class="lightbox-btn lightbox-next" data-dir="1" aria-label="Immagine successiva">' + ARR_R + '</button>' +
      '<span class="lightbox-count"></span>';
    document.body.appendChild(box);
    box.addEventListener('click', function (e) {
      if (e.target === box || (e.target.closest && e.target.closest('.lightbox-close'))) { closeLightbox(); return; }
      var nav = e.target.closest ? e.target.closest('.lightbox-btn') : null;
      if (nav) { e.preventDefault(); e.stopPropagation(); showLightboxItem(lbIndex + parseInt(nav.getAttribute('data-dir'), 10)); }
    });
    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('on')) { return; }
      if (e.key === 'Escape') { closeLightbox(); }
      else if (e.key === 'ArrowLeft') { showLightboxItem(lbIndex - 1); }
      else if (e.key === 'ArrowRight') { showLightboxItem(lbIndex + 1); }
    });
    return box;
  }

  function lightboxItemHtml(item) {
    return item.video
      ? '<iframe src="https://www.youtube.com/embed/' + esc(item.video) + '?autoplay=1&rel=0" title="Video" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      : '<img src="' + esc(item.src) + '" alt="">';
  }

  function showLightboxItem(i) {
    if (!lbItems.length) { return; }
    lbIndex = (i + lbItems.length) % lbItems.length;
    var box = lightboxEl();
    box.querySelector('.lightbox-inner').innerHTML = lightboxItemHtml(lbItems[lbIndex]);
    var many = lbItems.length > 1;
    box.classList.toggle('multi', many);
    box.querySelector('.lightbox-count').textContent = many ? (lbIndex + 1) + ' / ' + lbItems.length : '';
    // Tiene sincronizzata la galleria di origine, così quando si chiude il
    // lightbox la pagina mostra l'ultima immagine vista ingrandita.
    if (lbSourceGal) {
      var sl = lbSourceGal.querySelectorAll('.gal-slide'), dots = lbSourceGal.querySelectorAll('.gal-dots i');
      for (var k = 0; k < sl.length; k++) {
        sl[k].className = 'gal-slide' + (k === lbIndex ? ' on' : '');
        if (dots[k]) { dots[k].className = k === lbIndex ? 'on' : ''; }
      }
      lbSourceGal.setAttribute('data-i', lbIndex);
    }
  }

  function openLightboxGallery(items, start, sourceGal) {
    lbItems = items;
    lbSourceGal = sourceGal || null;
    var box = lightboxEl();
    box.classList.add('on');
    document.body.style.overflow = 'hidden';
    showLightboxItem(start || 0);
  }

  function closeLightbox() {
    var box = $('#lightbox');
    if (!box || !box.classList.contains('on')) { return; }
    box.classList.remove('on');
    box.querySelector('.lightbox-inner').innerHTML = ''; // ferma il video se era in riproduzione
    document.body.style.overflow = '';
    lbItems = []; lbSourceGal = null;
  }

  document.addEventListener('click', function (e) {
    var zoom = e.target.closest ? e.target.closest('.gal-zoom, .gal-play') : null;
    if (zoom) {
      e.preventDefault(); e.stopPropagation();
      var gal = zoom.closest('.gal');
      var slides = gal ? gal.querySelectorAll('.gal-slide') : [zoom.closest('.gal-slide')];
      var items = [], startIndex = 0;
      for (var s = 0; s < slides.length; s++) {
        var slide = slides[s], sv = slide.getAttribute('data-video');
        items.push(sv ? { video: sv } : { src: slide.querySelector('img').getAttribute('src') });
        if (slide === zoom.closest('.gal-slide')) { startIndex = s; }
      }
      openLightboxGallery(items, startIndex, gal);
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

  /* brand wordmark: "robo" logo image (same height as the nameplate text) + "Tools" */
  var BRAND_WORD = '<span class="brand-word"><img src="assets/img/logo-robo-word.png" alt="robo"><span>Tools</span></span>';

  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* metà dei link plugin per ciascuna colonna del footer */
  function half(links, part) {
    var list = links.split('</a>').filter(function (x) { return x; });
    var cut = Math.ceil(list.length / 2);
    return (part ? list.slice(cut) : list.slice(0, cut)).join('</a>') + '</a>';
  }

  /* GLOBE (nera) — stesso disegno usato nelle finestre dei plugin (vedi robo Fillet). */
  var GLOBE = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20"></path></svg>';

  function buildLangMenu() {
    var menu = $('#langMenu');
    if (!menu) { return; }
    var cur = getLang(), html = '';
    for (var i = 0; i < LANGS.length; i++) {
      html += '<li><button type="button" class="lang-item' + (LANGS[i][0] === cur ? ' active' : '') + '" data-lang="' + LANGS[i][0] + '">' + esc(LANGS[i][1]) + '</button></li>';
    }
    menu.innerHTML = html;
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('#langBtn') : null;
    var menu = $('#langMenu');
    if (btn) {
      e.preventDefault(); e.stopPropagation();
      if (menu) { menu.hidden = !menu.hidden; }
      return;
    }
    var item = e.target.closest ? e.target.closest('.lang-item') : null;
    if (item) {
      setLang(item.getAttribute('data-lang'));
      location.reload();
      return;
    }
    if (menu && !menu.hidden && (!e.target.closest || !e.target.closest('.lang-wrap'))) { menu.hidden = true; }
  });

  /* ------------------------------------------------------ header + footer */
  /* Highlights the nav link for the current section/page (black background, bold white text). */
  function setActiveNav(which) {
    var all = document.querySelectorAll('.nav a.navlink');
    for (var i = 0; i < all.length; i++) {
      all[i].classList.toggle('nav-active', all[i].getAttribute('data-nav') === which);
    }
  }

  function chrome(isHome) {
    var base = isHome ? '' : 'index.html';
    $('#site-header').innerHTML =
      '<div class="wrap"><a class="brand" href="index.html">' + LOGO + BRAND_WORD + '</a>' +
      '<nav class="nav"><a class="navlink" data-nav="plugin" href="' + base + '#plugin">' + tUI('nav.plugin') + '</a><a class="navlink" data-nav="install" href="' + base + '#installazione">' + tUI('nav.install') + '</a><a class="navlink" data-nav="contact" href="contatti.html">' + tUI('nav.contact') + '</a>' +
      '<div class="lang-wrap"><button class="lang-btn" id="langBtn" type="button" title="' + esc(tUI('lang.title')) + '">' + GLOBE + '<span>' + esc(tUI('lang.label')) + '</span></button><ul class="lang-menu" id="langMenu" hidden></ul></div>' +
      '</nav></div>';
    buildLangMenu();

    var links = '';
    for (var i = 0; i < PLUGINS.length; i++) {
      links += '<a href="plugin.html?id=' + PLUGINS[i].id + '">' + esc(PLUGINS[i].name) + '</a>';
    }
    $('#site-footer').innerHTML =
      '<div class="wrap"><div><a class="brand" href="index.html">' + LOGO + BRAND_WORD + '</a>' +
      '<p>' + tUI('footer.tagline') + '<br>' + tUI('footer.compat') + ' ' + esc(SITE.compat) + '.</p>' +
      '<p style="margin-top:10px"><a href="contatti.html" style="display:inline;font-weight:600;color:#fff">' + tUI('footer.contact') + '</a></p></div>' +
      '<div><h4>' + tUI('nav.plugin') + '</h4>' + half(links, 0) + '</div>' +
      '<div><h4>&nbsp;</h4>' + half(links, 1) + '</div>' +
      '<p class="copy">© ' + new Date().getFullYear() + ' Robo Tools. ' + tUI('footer.copy') + '</p></div>';
  }

  /* ------------------------------------------------------------------ home */
  function card(p) {
    return '<a class="card" href="plugin.html?id=' + p.id + '" data-cat="' + esc(p.category) + '">' +
      '<div class="thumb">' + gallery(imgs(p), 0, tUI('gal.previewof').replace('{n}', p.name), '<span class="badge">' + esc(catLabel(p.category)) + '</span>') + '</div>' +
      '<div class="body"><div class="head">' + icon(p) + '<div><h3>' + esc(p.name) + '</h3><span class="ver">v' + esc(p.version) + '</span></div></div>' +
      '<p>' + esc(pf(p, 'tagline')) + '</p><span class="more">' + tUI('card.more') + '</span></div></a>';
  }

  function home() {
    chrome(true);
    applyStaticI18n();
    $('#count').textContent = PLUGINS.length;
    var chips = '<button class="chip on" data-f="">' + tUI('chip.all') + '</button>';
    for (var i = 0; i < CATEGORIES.length; i++) {
      chips += '<button class="chip" data-f="' + esc(CATEGORIES[i]) + '">' + esc(catLabel(CATEGORIES[i])) + '</button>';
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

    /* Scroll-spy: highlights "Plugin" or "Installazione" in the nav as that section scrolls into view. */
    if (window.IntersectionObserver) {
      var sections = [['plugin', $('#plugin')], ['install', $('#installazione')]].filter(function (pair) { return pair[1]; });
      var observer = new IntersectionObserver(function (entries) {
        var visible = entries.filter(function (en) { return en.isIntersecting; });
        if (!visible.length) { return; }
        visible.sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
        var id = visible[0].target.id === 'installazione' ? 'install' : visible[0].target.id;
        setActiveNav(id);
      }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, .25, .5, .75, 1] });
      sections.forEach(function (pair) { observer.observe(pair[1]); });
    }
  }

  /* ---------------------------------------------------------------- plugin */
  function plugin() {
    chrome(false);
    setActiveNav('plugin');
    var m = /[?&]id=([a-z_]+)/.exec(location.search);
    var idx = m ? byId(m[1]) : -1;
    var root = $('#plugin-root');
    if (idx < 0) {
      root.innerHTML = '<div class="wrap" style="padding:120px 0"><h1>' + tUI('plugin.notfound.title') + '</h1><p class="muted" style="margin-top:12px"><a href="index.html#plugin" style="color:var(--red)">' + tUI('plugin.notfound.back') + '</a></p></div>';
      return;
    }
    var p = PLUGINS[idx];
    var im = imgs(p);
    var tagline = pf(p, 'tagline'), simple = pf(p, 'simple'), pSteps = pf(p, 'steps'), pHow = pf(p, 'how'), pPros = pf(p, 'pros'), pSolves = pf(p, 'solves'), pSpecs = pf(p, 'specs');
    document.title = p.name + ' — Robo Tools';
    var meta = $('meta[name="description"]');
    if (meta) { meta.setAttribute('content', tagline + ' ' + simple); }

    var steps = '';
    for (var a = 0; a < pSteps.length; a++) { steps += '<li><span>' + esc(pSteps[a]) + '</span></li>'; }
    var how = '';
    for (var b = 0; b < pHow.length; b++) {
      how += '<div class="item"><h3><i>0' + (b + 1) + '</i>' + esc(pHow[b].t) + '</h3><p>' + esc(pHow[b].d) + '</p></div>';
    }
    var pros = '';
    for (var c = 0; c < pPros.length; c++) { pros += '<li>' + CHECK + '<span>' + esc(pPros[c]) + '</span></li>'; }
    var solve = '';
    for (var d = 0; d < pSolves.length; d++) {
      solve += '<div class="row"><div class="p"><small>' + tUI('plugin.solve.problem') + '</small>' + esc(pSolves[d].p) + '</div>' +
        '<div class="arrow">' + ARROW + '</div><div class="s"><small>' + tUI('plugin.solve.with') + esc(p.name) + '</small>' + esc(pSolves[d].s) + '</div></div>';
    }
    var specs = '<tr><th>' + tUI('specs.version') + '</th><td>' + esc(p.version) + '</td></tr><tr><th>' + tUI('specs.compat') + '</th><td>' + esc(SITE.compat) + '</td></tr>';
    for (var e = 0; e < pSpecs.length; e++) { specs += '<tr><th>' + esc(pSpecs[e][0]) + '</th><td>' + esc(pSpecs[e][1]) + '</td></tr>'; }

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
      tbHtml = '<section><div class="wrap"><div class="section-head"><span class="eyebrow">' + tUI('tb.eyebrow') + '</span>' +
        '<h2>' + tUI(total === 1 ? 'tb.h2.one' : 'tb.h2.many').replace('{n}', total) + '</h2>' +
        '<p>' + tUI('tb.lead').replace('{tb}', '<b>' + esc(tb.name) + '</b>') + '</p></div>' +
        '<div class="tb-frame"><div class="tb-bar' + (total > 8 ? ' compact' : '') + '"><span class="tb-grip"></span>' + groups + '</div></div>' +
        '<ul class="tb-legend' + (total > 8 ? ' many' : '') + '">' + legend + '</ul>' + shapesHtml + '</div></section>';
    }

    var prev = PLUGINS[(idx + PLUGINS.length - 1) % PLUGINS.length];
    var next = PLUGINS[(idx + 1) % PLUGINS.length];

    root.innerHTML =
      '<div class="wrap crumbs"><a href="index.html">' + tUI('crumb.home') + '</a> / <a href="index.html#plugin">' + tUI('nav.plugin') + '</a> / ' + esc(p.name) + '</div>' +
      '<div class="p-hero"><div class="wrap"><div>' +
        '<span class="eyebrow">' + esc(catLabel(p.category)) + '</span>' +
        '<div class="p-title">' + icon(p) + '<h1>' + esc(p.name) + '</h1><span class="pill dark">v' + esc(p.version) + '</span></div>' +
        '<p class="tag">' + esc(tagline) + '</p>' +
        '<p class="simple">' + esc(simple) + '</p>' +
        '<div class="actions"><a class="btn btn-red" href="https://github.com/roboorto2018/robo3d/releases/download/downloads/' + esc(p.id) + '.rbz" download>' + tUI('plugin.download') + '</a><a class="btn btn-dark" href="#tecnica">' + tUI('plugin.howbtn') + '</a><a class="btn btn-outline" href="index.html#plugin">' + tUI('plugin.allbtn') + '</a></div>' +
      '</div><div class="shot">' + gallery(im, 0, tUI('gal.imageof').replace('{n}', p.name)) + '</div></div></div>' +

      tbHtml +
      '<section class="alt"><div class="wrap two"><div class="shot">' + gallery(im, 1, tUI('gal.inuse').replace('{n}', p.name)) + '</div>' +
        '<div><span class="eyebrow">' + tUI('plugin.simple.eyebrow') + '</span><h2 style="margin:10px 0 18px;font-size:clamp(1.6rem,3vw,2.2rem)">' + tUI('plugin.simple.h2') + '</h2>' +
        '<ol class="usage">' + steps + '</ol></div></div></section>' +

      '<section id="tecnica"><div class="wrap"><div class="section-head"><span class="eyebrow">' + tUI('plugin.tech.eyebrow') + '</span>' +
        '<h2>' + tUI('plugin.tech.h2') + '</h2><p>' + tUI('plugin.tech.lead') + esc(p.name) + '.</p></div><div class="tech">' + how + '</div></div></section>' +

      '<section class="alt"><div class="wrap"><div class="section-head"><span class="eyebrow">' + tUI('plugin.pros.eyebrow') + '</span><h2>' + tUI('plugin.pros.h2') + '</h2></div>' +
        '<ul class="pros">' + pros + '</ul></div></section>' +

      '<section><div class="wrap"><div class="section-head"><span class="eyebrow">' + tUI('plugin.solve.eyebrow') + '</span><h2>' + tUI('plugin.solve.h2') + '</h2></div>' +
        '<div class="solve">' + solve + '</div></div></section>' +

      '<section class="alt"><div class="wrap"><div class="section-head"><span class="eyebrow">' + tUI('plugin.specs.eyebrow') + '</span><h2>' + tUI('plugin.specs.h2') + '</h2></div>' +
        '<table class="specs"><tbody>' + specs + '</tbody></table></div></section>' +

      '<section><div class="wrap"><div class="pn">' +
        '<a href="plugin.html?id=' + prev.id + '"><small>' + tUI('nav.prev') + '</small><b>' + esc(prev.name) + '</b></a>' +
        '<a class="next" href="plugin.html?id=' + next.id + '"><small>' + tUI('nav.next') + '</small><b>' + esc(next.name) + '</b></a></div></div></section>';
  }

  /* ------------------------------------------------------------- contatti */
  // The site is static, so the form is sent through FormSubmit (formsubmit.co), a free service that forwards the
  // message to CONTACT_EMAIL. The first message ever sent asks the owner of the address to confirm it (one time).
  var CONTACT_EMAIL = 'roberto.bolletta@gmail.com';

  function contact() {
    chrome(false);
    setActiveNav('contact');
    applyStaticI18n();
    var sel = $('#f-plugin');
    var generalLabel = tUI('form.topic.general');
    var opts = '<option value="' + esc(generalLabel) + '">' + esc(generalLabel) + '</option>';
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
        say('err', tUI('form.err.fields'));
        return;
      }
      if (!$('#f-privacy').checked) {
        say('err', tUI('form.err.privacy'));
        return;
      }
      btn.disabled = true;
      say('info', tUI('form.sending'));
      var data = new FormData();
      data.append('Nome', name);
      data.append('Email', email);
      data.append('Argomento', sel.value);
      data.append('Messaggio', msg);
      data.append('_subject', tUI('form.subject.formsubmit') + sel.value);
      data.append('_replyto', email);
      data.append('_template', 'table');
      var mailto = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(tUI('form.subject.mailto') + sel.value) +
        '&body=' + encodeURIComponent(msg + '\n\n' + name + ' (' + email + ')');
      fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, { method: 'POST', headers: { 'Accept': 'application/json' }, body: data })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          if (j && (j.success === true || j.success === 'true')) {
            form.reset();
            say('ok', tUI('form.ok'));
          } else {
            throw new Error((j && j.message) || 'errore');
          }
        })['catch'](function () {
          say('err', tUI('form.err.network') + '<a href="' + mailto + '">' + tUI('form.err.network.link') + '</a>.');
        })['then'](function () { btn.disabled = false; });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if ($('#grid')) { home(); } else if ($('#plugin-root')) { plugin(); } else if ($('#contact-form')) { contact(); }
  });
}());

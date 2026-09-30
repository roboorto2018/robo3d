/* ============================================================================
   Robo Tools — sistema di traduzione del sito (interfaccia + contenuti plugin)
   ----------------------------------------------------------------------------
   I18N_UI: testi fissi dell'interfaccia (menu, pulsanti, titoli di sezione...).
   I18N_PLUGINS: traduzioni dei campi di ogni plugin (vedi data.js) per le lingue
   diverse dall'italiano — l'italiano resta l'origine in PLUGINS stesso.
   getLang()/setLang() persistono la lingua scelta in localStorage.
   ============================================================================ */
var LANGS = [
  ['it', 'Italiano'], ['en', 'English'], ['de', 'Deutsch'], ['fr', 'Français'], ['es', 'Español']
];

function getLang() {
  try {
    var saved = localStorage.getItem('robo_lang');
    if (saved && LANGS.some(function (l) { return l[0] === saved; })) { return saved; }
  } catch (e) { /* private window / blocked storage */ }
  return 'it';
}
function setLang(code) {
  try { localStorage.setItem('robo_lang', code); } catch (e) { /* ignore */ }
}
function tUI(key, fallback) {
  var dict = I18N_UI[getLang()];
  var text = (dict && dict[key] !== undefined) ? dict[key] : fallback;
  return text === undefined ? key : text;
}
/* Campo di un plugin nella lingua corrente, con ricaduta sull'italiano (PLUGINS) se manca. */
function pf(p, field) {
  var lang = getLang();
  if (lang === 'it') { return p[field]; }
  var over = I18N_PLUGINS[lang] && I18N_PLUGINS[lang][p.id];
  return (over && over[field] !== undefined) ? over[field] : p[field];
}
/* Etichetta di un pulsante della barra strumenti nella lingua corrente. */
/* Etichetta tradotta di una categoria (il valore italiano resta la chiave interna, usata per i filtri). */
function catLabel(cat) {
  var dict = I18N_UI[getLang()];
  return (dict && dict['cat.' + cat]) || cat;
}
function tbf(id, iconFile, fallback) {
  var lang = getLang();
  var over = I18N_TOOLBARS[lang] && I18N_TOOLBARS[lang][id];
  return (over && over[iconFile] !== undefined) ? over[iconFile] : fallback;
}
/* Applica le traduzioni statiche (attributi data-i18n / data-i18n-html / data-i18n-placeholder). */
function applyStaticI18n() {
  var dict = I18N_UI[getLang()] || {};
  document.documentElement.lang = getLang();
  var i, els;
  els = document.querySelectorAll('[data-i18n]');
  for (i = 0; i < els.length; i++) {
    var k = els[i].getAttribute('data-i18n');
    if (dict[k] !== undefined) { els[i].textContent = dict[k]; }
  }
  els = document.querySelectorAll('[data-i18n-html]');
  for (i = 0; i < els.length; i++) {
    var kh = els[i].getAttribute('data-i18n-html');
    if (dict[kh] !== undefined) { els[i].innerHTML = dict[kh]; }
  }
  els = document.querySelectorAll('[data-i18n-placeholder]');
  for (i = 0; i < els.length; i++) {
    var kp = els[i].getAttribute('data-i18n-placeholder');
    if (dict[kp] !== undefined) { els[i].setAttribute('placeholder', dict[kp]); }
  }
}

var I18N_UI = {
  it: {
    'nav.plugin': 'Plugin', 'nav.install': 'Installazione', 'nav.contact': 'Contatti',
    'cat.Modellazione': 'Modellazione', 'cat.Distribuzione': 'Distribuzione', 'cat.Organizzazione': 'Organizzazione', 'cat.Ottimizzazione': 'Ottimizzazione', 'cat.Produttività': 'Produttività', 'cat.Sviluppo': 'Sviluppo',
    'lang.title': 'Cambia lingua', 'lang.label': 'Lingua',
    'hero.eyebrow': 'Plugin per SketchUp', 'hero.h1': 'Meno clic. ', 'hero.h1em': 'Più design.',
    'hero.lead': 'Robo Tools è una raccolta di plugin pensati per chi usa SketchUp ogni giorno: modellare con precisione, distribuire oggetti, alleggerire i modelli e risparmiare tempo sulle operazioni ripetitive.',
    'hero.cta1': 'Scopri i plugin', 'hero.cta2': 'Come si installano',
    'stat.plugins': 'plugin', 'stat.versions': 'versioni di SketchUp', 'stat.menu.n': '1 menu', 'stat.menu.label': 'Estensioni › Robo Tool',
    'why.eyebrow': 'Perché Robo Tools', 'why.h2': 'Strumenti coerenti, pensati per lavorare insieme',
    'why.lead': 'Ogni plugin risolve un problema preciso e si comporta come gli altri: stessa grafica, stessi criteri, stesso menu.',
    'why.v1.title': 'Un solo menu', 'why.v1.desc': 'Tutti i plugin si trovano in Estensioni › Robo Tool, con la loro icona, anche nel menu di SketchUp 2027.',
    'why.v2.title': 'Sempre annullabile', 'why.v2.desc': 'Ogni operazione sul modello è un unico passo: un solo Ctrl+Z e torni indietro, senza geometria lasciata a metà.',
    'why.v3.title': 'Rispettano il tuo modello', 'why.v3.desc': 'Usano le unità e la precisione del tuo file, mostrano un\'anteprima prima di agire e non modificano ciò che non hai selezionato.',
    'plugins.eyebrow': 'I plugin', 'plugins.h2': 'Diciassette strumenti, uno per ogni problema',
    'plugins.lead': 'Apri la scheda di ciascuno per una spiegazione semplice, una presentazione tecnica, i vantaggi e i problemi che risolve.',
    'chip.all': 'Tutti', 'card.more': 'Scopri di più →',
    'install.eyebrow': 'Installazione', 'install.h2': 'Pronti in tre passi',
    'install.lead': 'I plugin sono compatibili con SketchUp 2021.1 e successivi, su Windows e macOS.',
    'install.s1.title': 'Installa', 'install.s1.desc': 'In SketchUp apri Finestra › Gestione estensioni › Installa estensione e scegli il file .rbz del plugin.',
    'install.s2.title': 'Riavvia', 'install.s2.desc': 'Riavvia SketchUp: i plugin compaiono in Estensioni › Robo Tool e nelle barre degli strumenti.',
    'install.s3.title': 'Attiva la barra', 'install.s3.desc': 'Se non vedi il pulsante, apri Vista › Barre degli strumenti e spunta quella del plugin.',
    'footer.tagline': 'Plugin per SketchUp che semplificano il lavoro di ogni giorno.', 'footer.contact': 'Contattaci →', 'footer.compat': 'Compatibili con',
    'footer.copy': 'Tutti i diritti riservati.',
    'crumb.home': 'Home', 'plugin.notfound.title': 'Plugin non trovato', 'plugin.notfound.back': 'Torna alla lista dei plugin.',
    'plugin.download': 'Scarica (.rbz)', 'plugin.howbtn': 'Come funziona', 'plugin.allbtn': 'Tutti i plugin',
    'plugin.simple.eyebrow': 'In parole semplici', 'plugin.simple.h2': 'Come si usa',
    'plugin.tech.eyebrow': 'Approfondimento tecnico', 'plugin.tech.h2': 'Come funziona', 'plugin.tech.lead': 'Cosa succede dietro le quinte quando usi ',
    'plugin.pros.eyebrow': 'Perché sceglierlo', 'plugin.pros.h2': 'I vantaggi',
    'plugin.solve.eyebrow': 'Prima e dopo', 'plugin.solve.h2': 'Quali problemi risolve',
    'plugin.solve.problem': 'Il problema', 'plugin.solve.with': 'Con ',
    'plugin.specs.eyebrow': 'In sintesi', 'plugin.specs.h2': 'Scheda tecnica',
    'specs.version': 'Versione', 'specs.compat': 'Compatibilità',
    'nav.prev': '← Precedente', 'nav.next': 'Successivo →',
    'tb.eyebrow': 'Nella barra strumenti', 'tb.h2.one': 'Un solo pulsante a portata di clic', 'tb.h2.many': '{n} pulsanti a portata di clic',
    'tb.lead': 'Ecco come compare la barra {tb} in SketchUp. Passa il mouse sui pulsanti per leggerne il nome.',
    'gal.close': 'Chiudi', 'gal.play': 'Guarda il video', 'gal.zoomvideo': 'Guarda il video ingrandito',
    'gal.zoomimg': 'Ingrandisci immagine', 'gal.prev': 'Immagine precedente', 'gal.next': 'Immagine successiva',
    'gal.previewof': 'Anteprima di {n}', 'gal.imageof': 'Immagine di {n}', 'gal.inuse': '{n} in uso',
    'form.name': 'Nome', 'form.email': 'Email', 'form.topic': 'Argomento', 'form.message': 'La tua richiesta',
    'form.msg.placeholder': 'Scrivi qui la tua richiesta di informazioni…',
    'form.honey': 'Non compilare questo campo', 'form.privacy': 'Acconsento al trattamento dei dati inseriti per rispondere alla mia richiesta.',
    'form.submit': 'Invia la richiesta', 'form.topic.general': 'Informazioni generali',
    'contact.eyebrow': 'Contatti', 'contact.h2': 'Hai una domanda sui plugin?',
    'contact.lead': 'Scrivimi per chiedere informazioni su un plugin, segnalare un problema o proporre un\'idea. Compila il modulo: il messaggio arriva direttamente alla mia email e ti rispondo all\'indirizzo che indichi.',
    'contact.li1': 'Riceverai la risposta all\'indirizzo email che indichi nel modulo.',
    'contact.li2': 'I dati inseriti vengono inoltrati per email tramite il servizio FormSubmit e usati solo per rispondere alla tua richiesta.',
    'contact.li3': 'Preferisci scrivere dal tuo programma di posta? Usa il link che compare se l\'invio non riesce.',
    'form.err.fields': 'Controlla i campi: servono nome, un\'email valida e un messaggio di almeno 10 caratteri.',
    'form.err.privacy': 'Per inviare la richiesta devi acconsentire al trattamento dei dati.',
    'form.sending': 'Invio in corso…', 'form.ok': '<b>Richiesta inviata.</b> Grazie! Ti risponderò all\'indirizzo che hai indicato.',
    'form.err.network': 'Non è stato possibile inviare il messaggio. Riprova più tardi oppure ', 'form.err.network.link': 'scrivi direttamente via email',
    'form.subject.formsubmit': 'Richiesta informazioni dal sito Robo Tools — ', 'form.subject.mailto': 'Richiesta informazioni — '
  },
  en: {
    'nav.plugin': 'Plugins', 'nav.install': 'Installation', 'nav.contact': 'Contact',
    'cat.Modellazione': 'Modeling', 'cat.Distribuzione': 'Distribution', 'cat.Organizzazione': 'Organization', 'cat.Ottimizzazione': 'Optimization', 'cat.Produttività': 'Productivity', 'cat.Sviluppo': 'Development',
    'lang.title': 'Change language', 'lang.label': 'Language',
    'hero.eyebrow': 'Plugins for SketchUp', 'hero.h1': 'Fewer clicks. ', 'hero.h1em': 'More design.',
    'hero.lead': 'Robo Tools is a collection of plugins built for people who use SketchUp every day: model with precision, distribute objects, lighten heavy models and save time on repetitive operations.',
    'hero.cta1': 'Explore the plugins', 'hero.cta2': 'How to install them',
    'stat.plugins': 'plugins', 'stat.versions': 'SketchUp versions', 'stat.menu.n': '1 menu', 'stat.menu.label': 'Extensions › Robo Tool',
    'why.eyebrow': 'Why Robo Tools', 'why.h2': 'Consistent tools, built to work together',
    'why.lead': 'Every plugin solves one specific problem and behaves like the others: same look, same conventions, same menu.',
    'why.v1.title': 'One single menu', 'why.v1.desc': 'Every plugin lives under Extensions › Robo Tool, with its own icon, including in the SketchUp 2027 menu.',
    'why.v2.title': 'Always undoable', 'why.v2.desc': 'Every operation on the model is a single step: one Ctrl+Z takes you back, with no geometry left half-done.',
    'why.v3.title': 'They respect your model', 'why.v3.desc': 'They use your file\'s units and precision, show a preview before acting, and never touch what you have not selected.',
    'plugins.eyebrow': 'The plugins', 'plugins.h2': 'Seventeen tools, one for every problem',
    'plugins.lead': 'Open any plugin\'s page for a plain-language explanation, a technical deep dive, its advantages and the problems it solves.',
    'chip.all': 'All', 'card.more': 'Learn more →',
    'install.eyebrow': 'Installation', 'install.h2': 'Ready in three steps',
    'install.lead': 'The plugins are compatible with SketchUp 2021.1 and later, on Windows and macOS.',
    'install.s1.title': 'Install', 'install.s1.desc': 'In SketchUp open Window › Extension Manager › Install Extension and pick the plugin\'s .rbz file.',
    'install.s2.title': 'Restart', 'install.s2.desc': 'Restart SketchUp: the plugins appear under Extensions › Robo Tool and on the toolbars.',
    'install.s3.title': 'Turn on the toolbar', 'install.s3.desc': 'If you don\'t see the button, open View › Toolbars and check the plugin\'s toolbar.',
    'footer.tagline': 'SketchUp plugins that simplify everyday work.', 'footer.contact': 'Contact us →', 'footer.compat': 'Compatible with',
    'footer.copy': 'All rights reserved.',
    'crumb.home': 'Home', 'plugin.notfound.title': 'Plugin not found', 'plugin.notfound.back': 'Back to the plugin list.',
    'plugin.download': 'Download (.rbz)', 'plugin.howbtn': 'How it works', 'plugin.allbtn': 'All plugins',
    'plugin.simple.eyebrow': 'In plain words', 'plugin.simple.h2': 'How to use it',
    'plugin.tech.eyebrow': 'Technical deep dive', 'plugin.tech.h2': 'How it works', 'plugin.tech.lead': 'What happens behind the scenes when you use ',
    'plugin.pros.eyebrow': 'Why choose it', 'plugin.pros.h2': 'The advantages',
    'plugin.solve.eyebrow': 'Before and after', 'plugin.solve.h2': 'Which problems it solves',
    'plugin.solve.problem': 'The problem', 'plugin.solve.with': 'With ',
    'plugin.specs.eyebrow': 'At a glance', 'plugin.specs.h2': 'Technical sheet',
    'specs.version': 'Version', 'specs.compat': 'Compatibility',
    'nav.prev': '← Previous', 'nav.next': 'Next →',
    'tb.eyebrow': 'On the toolbar', 'tb.h2.one': 'One button, one click away', 'tb.h2.many': '{n} buttons, one click away',
    'tb.lead': 'Here is how the {tb} toolbar looks in SketchUp. Hover a button to read its name.',
    'gal.close': 'Close', 'gal.play': 'Watch the video', 'gal.zoomvideo': 'Watch the video enlarged',
    'gal.zoomimg': 'Enlarge image', 'gal.prev': 'Previous image', 'gal.next': 'Next image',
    'gal.previewof': 'Preview of {n}', 'gal.imageof': 'Image of {n}', 'gal.inuse': '{n} in use',
    'form.name': 'Name', 'form.email': 'Email', 'form.topic': 'Topic', 'form.message': 'Your message',
    'form.msg.placeholder': 'Write your question here…',
    'form.honey': 'Leave this field empty', 'form.privacy': 'I agree that the data I entered is used to reply to my request.',
    'form.submit': 'Send request', 'form.topic.general': 'General information',
    'contact.eyebrow': 'Contact', 'contact.h2': 'Have a question about the plugins?',
    'contact.lead': 'Write to me to ask about a plugin, report an issue or suggest an idea. Fill in the form: the message goes straight to my email and I\'ll reply to the address you give.',
    'contact.li1': 'You\'ll get the reply at the email address you enter in the form.',
    'contact.li2': 'The data you enter is forwarded by email through the FormSubmit service and used only to reply to your request.',
    'contact.li3': 'Prefer to write from your own mail app? Use the link that appears if sending fails.',
    'form.err.fields': 'Check the fields: you need a name, a valid email and a message of at least 10 characters.',
    'form.err.privacy': 'To send the request you must agree to the data being processed.',
    'form.sending': 'Sending…', 'form.ok': '<b>Request sent.</b> Thank you! I\'ll reply to the address you gave.',
    'form.err.network': 'The message could not be sent. Try again later, or ', 'form.err.network.link': 'write directly by email',
    'form.subject.formsubmit': 'Information request from the Robo Tools site — ', 'form.subject.mailto': 'Information request — '
  },
  de: {
    'nav.plugin': 'Plugins', 'nav.install': 'Installation', 'nav.contact': 'Kontakt',
    'cat.Modellazione': 'Modellierung', 'cat.Distribuzione': 'Verteilung', 'cat.Organizzazione': 'Organisation', 'cat.Ottimizzazione': 'Optimierung', 'cat.Produttività': 'Produktivität', 'cat.Sviluppo': 'Entwicklung',
    'lang.title': 'Sprache ändern', 'lang.label': 'Sprache',
    'hero.eyebrow': 'Plugins für SketchUp', 'hero.h1': 'Weniger Klicks. ', 'hero.h1em': 'Mehr Design.',
    'hero.lead': 'Robo Tools ist eine Sammlung von Plugins für alle, die SketchUp täglich nutzen: präzise modellieren, Objekte verteilen, Modelle leichter machen und Zeit bei wiederkehrenden Aufgaben sparen.',
    'hero.cta1': 'Plugins entdecken', 'hero.cta2': 'So werden sie installiert',
    'stat.plugins': 'Plugins', 'stat.versions': 'SketchUp-Versionen', 'stat.menu.n': '1 Menü', 'stat.menu.label': 'Erweiterungen › Robo Tool',
    'why.eyebrow': 'Warum Robo Tools', 'why.h2': 'Konsistente Werkzeuge, für das Zusammenspiel gemacht',
    'why.lead': 'Jedes Plugin löst ein genaues Problem und verhält sich wie die anderen: gleiche Optik, gleiche Kriterien, gleiches Menü.',
    'why.v1.title': 'Ein einziges Menü', 'why.v1.desc': 'Alle Plugins finden sich unter Erweiterungen › Robo Tool, mit eigenem Symbol, auch im Menü von SketchUp 2027.',
    'why.v2.title': 'Immer rückgängig zu machen', 'why.v2.desc': 'Jede Operation am Modell ist ein einziger Schritt: ein Strg+Z genügt, ohne halb fertige Geometrie.',
    'why.v3.title': 'Sie respektieren Ihr Modell', 'why.v3.desc': 'Sie verwenden die Einheiten und die Genauigkeit Ihrer Datei, zeigen eine Vorschau vor der Aktion und ändern nie, was Sie nicht ausgewählt haben.',
    'plugins.eyebrow': 'Die Plugins', 'plugins.h2': 'Siebzehn Werkzeuge, eines für jedes Problem',
    'plugins.lead': 'Öffnen Sie die Seite jedes Plugins für eine einfache Erklärung, eine technische Vorstellung, die Vorteile und die Probleme, die es löst.',
    'chip.all': 'Alle', 'card.more': 'Mehr erfahren →',
    'install.eyebrow': 'Installation', 'install.h2': 'In drei Schritten startklar',
    'install.lead': 'Die Plugins sind kompatibel mit SketchUp 2021.1 und neuer, unter Windows und macOS.',
    'install.s1.title': 'Installieren', 'install.s1.desc': 'Öffnen Sie in SketchUp Fenster › Erweiterungsverwaltung › Erweiterung installieren und wählen Sie die .rbz-Datei des Plugins.',
    'install.s2.title': 'Neu starten', 'install.s2.desc': 'Starten Sie SketchUp neu: die Plugins erscheinen unter Erweiterungen › Robo Tool und in den Symbolleisten.',
    'install.s3.title': 'Symbolleiste aktivieren', 'install.s3.desc': 'Falls die Schaltfläche fehlt, öffnen Sie Ansicht › Symbolleisten und aktivieren die des Plugins.',
    'footer.tagline': 'SketchUp-Plugins, die die tägliche Arbeit vereinfachen.', 'footer.contact': 'Kontakt →', 'footer.compat': 'Kompatibel mit',
    'footer.copy': 'Alle Rechte vorbehalten.',
    'crumb.home': 'Startseite', 'plugin.notfound.title': 'Plugin nicht gefunden', 'plugin.notfound.back': 'Zurück zur Plugin-Liste.',
    'plugin.download': 'Herunterladen (.rbz)', 'plugin.howbtn': 'So funktioniert es', 'plugin.allbtn': 'Alle Plugins',
    'plugin.simple.eyebrow': 'Einfach erklärt', 'plugin.simple.h2': 'So wird es benutzt',
    'plugin.tech.eyebrow': 'Technischer Einblick', 'plugin.tech.h2': 'So funktioniert es', 'plugin.tech.lead': 'Was hinter den Kulissen passiert, wenn Sie ',
    'plugin.pros.eyebrow': 'Warum dieses Plugin', 'plugin.pros.h2': 'Die Vorteile',
    'plugin.solve.eyebrow': 'Vorher und nachher', 'plugin.solve.h2': 'Welche Probleme es löst',
    'plugin.solve.problem': 'Das Problem', 'plugin.solve.with': 'Mit ',
    'plugin.specs.eyebrow': 'Auf einen Blick', 'plugin.specs.h2': 'Technisches Datenblatt',
    'specs.version': 'Version', 'specs.compat': 'Kompatibilität',
    'nav.prev': '← Zurück', 'nav.next': 'Weiter →',
    'tb.eyebrow': 'In der Symbolleiste', 'tb.h2.one': 'Eine Schaltfläche, einen Klick entfernt', 'tb.h2.many': '{n} Schaltflächen, einen Klick entfernt',
    'tb.lead': 'So sieht die Symbolleiste {tb} in SketchUp aus. Fahren Sie mit der Maus über eine Schaltfläche, um ihren Namen zu lesen.',
    'gal.close': 'Schließen', 'gal.play': 'Video ansehen', 'gal.zoomvideo': 'Video vergrößert ansehen',
    'gal.zoomimg': 'Bild vergrößern', 'gal.prev': 'Vorheriges Bild', 'gal.next': 'Nächstes Bild',
    'gal.previewof': 'Vorschau von {n}', 'gal.imageof': 'Bild von {n}', 'gal.inuse': '{n} im Einsatz',
    'form.name': 'Name', 'form.email': 'E-Mail', 'form.topic': 'Thema', 'form.message': 'Ihre Anfrage',
    'form.msg.placeholder': 'Schreiben Sie hier Ihre Anfrage…',
    'form.honey': 'Dieses Feld nicht ausfüllen', 'form.privacy': 'Ich stimme zu, dass die eingegebenen Daten zur Beantwortung meiner Anfrage verwendet werden.',
    'form.submit': 'Anfrage senden', 'form.topic.general': 'Allgemeine Informationen',
    'contact.eyebrow': 'Kontakt', 'contact.h2': 'Eine Frage zu den Plugins?',
    'contact.lead': 'Schreiben Sie mir, um sich nach einem Plugin zu erkundigen, ein Problem zu melden oder eine Idee vorzuschlagen. Füllen Sie das Formular aus: die Nachricht geht direkt an meine E-Mail, und ich antworte an die von Ihnen angegebene Adresse.',
    'contact.li1': 'Sie erhalten die Antwort an die im Formular angegebene E-Mail-Adresse.',
    'contact.li2': 'Die eingegebenen Daten werden per E-Mail über den Dienst FormSubmit weitergeleitet und nur zur Beantwortung Ihrer Anfrage verwendet.',
    'contact.li3': 'Schreiben Sie lieber aus Ihrem E-Mail-Programm? Nutzen Sie den Link, der erscheint, falls das Senden fehlschlägt.',
    'form.err.fields': 'Bitte prüfen Sie die Felder: Name, eine gültige E-Mail und eine Nachricht mit mindestens 10 Zeichen sind nötig.',
    'form.err.privacy': 'Um die Anfrage zu senden, müssen Sie der Datenverarbeitung zustimmen.',
    'form.sending': 'Wird gesendet…', 'form.ok': '<b>Anfrage gesendet.</b> Danke! Ich antworte an die angegebene Adresse.',
    'form.err.network': 'Die Nachricht konnte nicht gesendet werden. Versuchen Sie es später erneut, oder ', 'form.err.network.link': 'schreiben Sie direkt per E-Mail',
    'form.subject.formsubmit': 'Informationsanfrage von der Robo-Tools-Website — ', 'form.subject.mailto': 'Informationsanfrage — '
  },
  fr: {
    'nav.plugin': 'Plugins', 'nav.install': 'Installation', 'nav.contact': 'Contact',
    'cat.Modellazione': 'Modélisation', 'cat.Distribuzione': 'Distribution', 'cat.Organizzazione': 'Organisation', 'cat.Ottimizzazione': 'Optimisation', 'cat.Produttività': 'Productivité', 'cat.Sviluppo': 'Développement',
    'lang.title': 'Changer de langue', 'lang.label': 'Langue',
    'hero.eyebrow': 'Plugins pour SketchUp', 'hero.h1': 'Moins de clics. ', 'hero.h1em': 'Plus de design.',
    'hero.lead': 'Robo Tools est une collection de plugins conçus pour ceux qui utilisent SketchUp au quotidien : modéliser avec précision, distribuer des objets, alléger les modèles et gagner du temps sur les opérations répétitives.',
    'hero.cta1': 'Découvrir les plugins', 'hero.cta2': 'Comment les installer',
    'stat.plugins': 'plugins', 'stat.versions': 'versions de SketchUp', 'stat.menu.n': '1 menu', 'stat.menu.label': 'Extensions › Robo Tool',
    'why.eyebrow': 'Pourquoi Robo Tools', 'why.h2': 'Des outils cohérents, conçus pour fonctionner ensemble',
    'why.lead': 'Chaque plugin résout un problème précis et se comporte comme les autres : même style, mêmes critères, même menu.',
    'why.v1.title': 'Un seul menu', 'why.v1.desc': 'Tous les plugins se trouvent dans Extensions › Robo Tool, avec leur icône, y compris dans le menu de SketchUp 2027.',
    'why.v2.title': 'Toujours annulable', 'why.v2.desc': 'Chaque opération sur le modèle est une seule étape : un Ctrl+Z suffit pour revenir en arrière, sans géométrie laissée à moitié faite.',
    'why.v3.title': 'Ils respectent votre modèle', 'why.v3.desc': 'Ils utilisent les unités et la précision de votre fichier, affichent un aperçu avant d\'agir et ne modifient jamais ce que vous n\'avez pas sélectionné.',
    'plugins.eyebrow': 'Les plugins', 'plugins.h2': 'Dix-sept outils, un pour chaque problème',
    'plugins.lead': 'Ouvrez la fiche de chacun pour une explication simple, une présentation technique, les avantages et les problèmes qu\'il résout.',
    'chip.all': 'Tous', 'card.more': 'En savoir plus →',
    'install.eyebrow': 'Installation', 'install.h2': 'Prêt en trois étapes',
    'install.lead': 'Les plugins sont compatibles avec SketchUp 2021.1 et versions ultérieures, sur Windows et macOS.',
    'install.s1.title': 'Installer', 'install.s1.desc': 'Dans SketchUp, ouvrez Fenêtre › Gestionnaire d\'extensions › Installer une extension et choisissez le fichier .rbz du plugin.',
    'install.s2.title': 'Redémarrer', 'install.s2.desc': 'Redémarrez SketchUp : les plugins apparaissent dans Extensions › Robo Tool et dans les barres d\'outils.',
    'install.s3.title': 'Activer la barre', 'install.s3.desc': 'Si vous ne voyez pas le bouton, ouvrez Affichage › Barres d\'outils et cochez celle du plugin.',
    'footer.tagline': 'Des plugins SketchUp qui simplifient le travail quotidien.', 'footer.contact': 'Contactez-nous →', 'footer.compat': 'Compatible avec',
    'footer.copy': 'Tous droits réservés.',
    'crumb.home': 'Accueil', 'plugin.notfound.title': 'Plugin introuvable', 'plugin.notfound.back': 'Retour à la liste des plugins.',
    'plugin.download': 'Télécharger (.rbz)', 'plugin.howbtn': 'Comment ça marche', 'plugin.allbtn': 'Tous les plugins',
    'plugin.simple.eyebrow': 'En termes simples', 'plugin.simple.h2': 'Comment l\'utiliser',
    'plugin.tech.eyebrow': 'Approfondissement technique', 'plugin.tech.h2': 'Comment ça marche', 'plugin.tech.lead': 'Ce qui se passe en coulisses quand vous utilisez ',
    'plugin.pros.eyebrow': 'Pourquoi le choisir', 'plugin.pros.h2': 'Les avantages',
    'plugin.solve.eyebrow': 'Avant et après', 'plugin.solve.h2': 'Quels problèmes il résout',
    'plugin.solve.problem': 'Le problème', 'plugin.solve.with': 'Avec ',
    'plugin.specs.eyebrow': 'En résumé', 'plugin.specs.h2': 'Fiche technique',
    'specs.version': 'Version', 'specs.compat': 'Compatibilité',
    'nav.prev': '← Précédent', 'nav.next': 'Suivant →',
    'tb.eyebrow': 'Dans la barre d\'outils', 'tb.h2.one': 'Un seul bouton, à portée de clic', 'tb.h2.many': '{n} boutons, à portée de clic',
    'tb.lead': 'Voici à quoi ressemble la barre {tb} dans SketchUp. Survolez un bouton pour lire son nom.',
    'gal.close': 'Fermer', 'gal.play': 'Regarder la vidéo', 'gal.zoomvideo': 'Regarder la vidéo agrandie',
    'gal.zoomimg': 'Agrandir l\'image', 'gal.prev': 'Image précédente', 'gal.next': 'Image suivante',
    'gal.previewof': 'Aperçu de {n}', 'gal.imageof': 'Image de {n}', 'gal.inuse': '{n} en action',
    'form.name': 'Nom', 'form.email': 'Email', 'form.topic': 'Sujet', 'form.message': 'Votre demande',
    'form.msg.placeholder': 'Écrivez ici votre demande d\'information…',
    'form.honey': 'Ne remplissez pas ce champ', 'form.privacy': 'J\'accepte que les données saisies soient utilisées pour répondre à ma demande.',
    'form.submit': 'Envoyer la demande', 'form.topic.general': 'Informations générales',
    'contact.eyebrow': 'Contact', 'contact.h2': 'Une question sur les plugins ?',
    'contact.lead': 'Écrivez-moi pour demander des informations sur un plugin, signaler un problème ou proposer une idée. Remplissez le formulaire : le message arrive directement sur mon email et je vous réponds à l\'adresse indiquée.',
    'contact.li1': 'Vous recevrez la réponse à l\'adresse email indiquée dans le formulaire.',
    'contact.li2': 'Les données saisies sont transmises par email via le service FormSubmit et utilisées uniquement pour répondre à votre demande.',
    'contact.li3': 'Vous préférez écrire depuis votre logiciel de messagerie ? Utilisez le lien qui apparaît si l\'envoi échoue.',
    'form.err.fields': 'Vérifiez les champs : il faut un nom, un email valide et un message d\'au moins 10 caractères.',
    'form.err.privacy': 'Pour envoyer la demande, vous devez accepter le traitement des données.',
    'form.sending': 'Envoi en cours…', 'form.ok': '<b>Demande envoyée.</b> Merci ! Je vous répondrai à l\'adresse indiquée.',
    'form.err.network': 'Impossible d\'envoyer le message. Réessayez plus tard, ou ', 'form.err.network.link': 'écrivez directement par email',
    'form.subject.formsubmit': 'Demande d\'information depuis le site Robo Tools — ', 'form.subject.mailto': 'Demande d\'information — '
  },
  es: {
    'nav.plugin': 'Plugins', 'nav.install': 'Instalación', 'nav.contact': 'Contacto',
    'cat.Modellazione': 'Modelado', 'cat.Distribuzione': 'Distribución', 'cat.Organizzazione': 'Organización', 'cat.Ottimizzazione': 'Optimización', 'cat.Produttività': 'Productividad', 'cat.Sviluppo': 'Desarrollo',
    'lang.title': 'Cambiar idioma', 'lang.label': 'Idioma',
    'hero.eyebrow': 'Plugins para SketchUp', 'hero.h1': 'Menos clics. ', 'hero.h1em': 'Más diseño.',
    'hero.lead': 'Robo Tools es una colección de plugins pensados para quienes usan SketchUp cada día: modelar con precisión, distribuir objetos, aligerar los modelos y ahorrar tiempo en las operaciones repetitivas.',
    'hero.cta1': 'Descubre los plugins', 'hero.cta2': 'Cómo se instalan',
    'stat.plugins': 'plugins', 'stat.versions': 'versiones de SketchUp', 'stat.menu.n': '1 menú', 'stat.menu.label': 'Extensiones › Robo Tool',
    'why.eyebrow': 'Por qué Robo Tools', 'why.h2': 'Herramientas coherentes, pensadas para trabajar juntas',
    'why.lead': 'Cada plugin resuelve un problema concreto y se comporta como los demás: mismo aspecto, mismos criterios, mismo menú.',
    'why.v1.title': 'Un solo menú', 'why.v1.desc': 'Todos los plugins están en Extensiones › Robo Tool, con su icono, también en el menú de SketchUp 2027.',
    'why.v2.title': 'Siempre reversible', 'why.v2.desc': 'Cada operación sobre el modelo es un único paso: un solo Ctrl+Z y vuelves atrás, sin geometría a medias.',
    'why.v3.title': 'Respetan tu modelo', 'why.v3.desc': 'Usan las unidades y la precisión de tu archivo, muestran una vista previa antes de actuar y no modifican lo que no has seleccionado.',
    'plugins.eyebrow': 'Los plugins', 'plugins.h2': 'Diecisiete herramientas, una para cada problema',
    'plugins.lead': 'Abre la ficha de cada uno para una explicación sencilla, una presentación técnica, las ventajas y los problemas que resuelve.',
    'chip.all': 'Todos', 'card.more': 'Saber más →',
    'install.eyebrow': 'Instalación', 'install.h2': 'Listo en tres pasos',
    'install.lead': 'Los plugins son compatibles con SketchUp 2021.1 y posteriores, en Windows y macOS.',
    'install.s1.title': 'Instala', 'install.s1.desc': 'En SketchUp abre Ventana › Gestor de extensiones › Instalar extensión y elige el archivo .rbz del plugin.',
    'install.s2.title': 'Reinicia', 'install.s2.desc': 'Reinicia SketchUp: los plugins aparecen en Extensiones › Robo Tool y en las barras de herramientas.',
    'install.s3.title': 'Activa la barra', 'install.s3.desc': 'Si no ves el botón, abre Ver › Barras de herramientas y marca la del plugin.',
    'footer.tagline': 'Plugins de SketchUp que simplifican el trabajo diario.', 'footer.contact': 'Contáctanos →', 'footer.compat': 'Compatible con',
    'footer.copy': 'Todos los derechos reservados.',
    'crumb.home': 'Inicio', 'plugin.notfound.title': 'Plugin no encontrado', 'plugin.notfound.back': 'Volver a la lista de plugins.',
    'plugin.download': 'Descargar (.rbz)', 'plugin.howbtn': 'Cómo funciona', 'plugin.allbtn': 'Todos los plugins',
    'plugin.simple.eyebrow': 'En palabras simples', 'plugin.simple.h2': 'Cómo se usa',
    'plugin.tech.eyebrow': 'Detalle técnico', 'plugin.tech.h2': 'Cómo funciona', 'plugin.tech.lead': 'Qué ocurre entre bastidores cuando usas ',
    'plugin.pros.eyebrow': 'Por qué elegirlo', 'plugin.pros.h2': 'Las ventajas',
    'plugin.solve.eyebrow': 'Antes y después', 'plugin.solve.h2': 'Qué problemas resuelve',
    'plugin.solve.problem': 'El problema', 'plugin.solve.with': 'Con ',
    'plugin.specs.eyebrow': 'En resumen', 'plugin.specs.h2': 'Ficha técnica',
    'specs.version': 'Versión', 'specs.compat': 'Compatibilidad',
    'nav.prev': '← Anterior', 'nav.next': 'Siguiente →',
    'tb.eyebrow': 'En la barra de herramientas', 'tb.h2.one': 'Un solo botón, a un clic de distancia', 'tb.h2.many': '{n} botones, a un clic de distancia',
    'tb.lead': 'Así se ve la barra {tb} en SketchUp. Pasa el ratón sobre un botón para leer su nombre.',
    'gal.close': 'Cerrar', 'gal.play': 'Ver el vídeo', 'gal.zoomvideo': 'Ver el vídeo ampliado',
    'gal.zoomimg': 'Ampliar imagen', 'gal.prev': 'Imagen anterior', 'gal.next': 'Imagen siguiente',
    'gal.previewof': 'Vista previa de {n}', 'gal.imageof': 'Imagen de {n}', 'gal.inuse': '{n} en uso',
    'form.name': 'Nombre', 'form.email': 'Email', 'form.topic': 'Asunto', 'form.message': 'Tu solicitud',
    'form.msg.placeholder': 'Escribe aquí tu solicitud de información…',
    'form.honey': 'No rellenes este campo', 'form.privacy': 'Acepto que los datos introducidos se usen para responder a mi solicitud.',
    'form.submit': 'Enviar solicitud', 'form.topic.general': 'Información general',
    'contact.eyebrow': 'Contacto', 'contact.h2': '¿Tienes una pregunta sobre los plugins?',
    'contact.lead': 'Escríbeme para pedir información sobre un plugin, reportar un problema o proponer una idea. Rellena el formulario: el mensaje llega directamente a mi email y te respondo a la dirección que indiques.',
    'contact.li1': 'Recibirás la respuesta en la dirección de email que indiques en el formulario.',
    'contact.li2': 'Los datos introducidos se reenvían por email a través del servicio FormSubmit y se usan solo para responder a tu solicitud.',
    'contact.li3': '¿Prefieres escribir desde tu programa de correo? Usa el enlace que aparece si el envío falla.',
    'form.err.fields': 'Revisa los campos: hacen falta un nombre, un email válido y un mensaje de al menos 10 caracteres.',
    'form.err.privacy': 'Para enviar la solicitud debes aceptar el tratamiento de los datos.',
    'form.sending': 'Enviando…', 'form.ok': '<b>Solicitud enviada.</b> ¡Gracias! Te responderé a la dirección indicada.',
    'form.err.network': 'No se pudo enviar el mensaje. Inténtalo más tarde o ', 'form.err.network.link': 'escribe directamente por email',
    'form.subject.formsubmit': 'Solicitud de información desde el sitio Robo Tools — ', 'form.subject.mailto': 'Solicitud de información — '
  }
};

/* Traduzioni dei campi di ogni plugin (vedi data.js/PLUGINS per l'italiano, origine). */
var I18N_PLUGINS = { en: {}, de: {}, fr: {}, es: {} };
/* Traduzioni delle etichette dei pulsanti nella barra strumenti (vedi data.js/TOOLBARS). */
var I18N_TOOLBARS = { en: {}, de: {}, fr: {}, es: {} };

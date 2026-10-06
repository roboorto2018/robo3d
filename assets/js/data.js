/* ============================================================================
   Robo Tools — contenuti del sito
   ----------------------------------------------------------------------------
   Questo file è l'UNICA fonte dei testi: per cambiare un testo, una versione o
   un'immagine modifica solo qui. Le immagini "images" sono segnaposto (SVG):
   per usare uno screenshot vero, metti il file in assets/img/screenshots/ e
   cambia il percorso, ad esempio  images: ["assets/img/screenshots/baseform-1.png", ...]
   ============================================================================ */
var SITE = {
  name: 'Robo Tools',
  compat: 'SketchUp 2021.1 – 2027',
  menu: 'Estensioni › Robo Tool'
};

var CATEGORIES = ['Modellazione', 'Distribuzione', 'Organizzazione', 'Ottimizzazione', 'Produttività', 'Sviluppo'];

var PLUGINS = [
  /* ------------------------------------------------------------------ BASEFORM */
  {
    id: 'baseform', name: 'robo baseform', version: '1.0', category: 'Modellazione', hue: 12,
    donationPrompt: true,
    video: 'cxTEqsZ_Cpo',
    images: ['assets/img/screenshots/baseform-1.png', 'assets/img/screenshots/baseform-2.png', 'assets/img/screenshots/baseform-3.png'],
    tagline: 'Cubo, cilindro, cono, sfere e toro: forme precise in un clic.',
    simple: 'Scegli dall\'elenco l\'oggetto che ti serve (cubo, cilindro, cono, tronco di cono, sfera, icosfera o toro), imposta le misure e clicca nel modello: la forma compare esattamente dove vuoi, già liscia e pronta all\'uso.',
    intro: [
      'robo baseform è un pannello per creare in pochi secondi le forme di base del 3D: cubo, cilindro, cono, tronco di cono, sfera, icosfera e toro. Invece di disegnare ogni volta un profilo e poi estruderlo o farlo ruotare, scrivi le misure e la forma è pronta.',
      'Serve quando ti occorrono volumi precisi e puliti: un blocco di partenza per un mobile, un pilastro, una colonna, una sfera per un lampadario, un anello. Sono già chiusi, lisci e con le misure esatte, quindi puoi usarli subito o modificarli come qualsiasi altra geometria.'
    ],
    main: [
      { t: 'Sette forme in un solo strumento', d: 'Scegli dall\'elenco cubo, cilindro, cono, tronco di cono, sfera, icosfera o toro. Per ognuno compaiono solo le misure che servono, come raggio, altezza o numero di segmenti.' },
      { t: 'Anteprima prima di confermare', d: 'Una piccola anteprima nella finestra mostra le proporzioni mentre scrivi i valori. Quando confermi, la forma fantasma segue il mouse nel modello e la posizioni con un clic.' },
      { t: 'Le misure del tuo modello', d: 'Scrivi i valori nelle unità che stai già usando, centimetri, metri o pollici, senza conversioni e senza errori di arrotondamento.' },
      { t: 'Cubo sempre proporzionato', d: 'Una catenina collega larghezza, profondità e altezza: scrivi un valore e gli altri si adeguano. Se la sganci, il cubo diventa un parallelepipedo.' },
      { t: 'Punto di inserimento a scelta', d: 'Decidi se agganciare la forma per un angolo, per il centro della base o per il centro, così nasce esattamente dove la vuoi.' }
    ],
    steps: ['Apri robo baseform dalla barra strumenti o dal menu Robo Tool.', 'Scegli l\'oggetto dall\'elenco e inserisci le sue misure.', 'Muovi il mouse: vedi la forma fantasma. Clicca per posizionarla.'],
    how: [
      { t: 'Il problema che risolve', d: 'Per avere un cubo, un cilindro o una sfera precisi, in SketchUp servono più strumenti e più passaggi: disegni un profilo, lo estrudi o lo fai ruotare, controlli le misure, correggi le facce. Se devi farlo spesso, perdi molto tempo. robo baseform riunisce tutto in un solo pannello: scegli la forma, scrivi le misure e la ottieni già chiusa, liscia e pronta.' },
      { t: 'Passo 1 · Scegli la forma', d: 'Dall\'elenco scegli cubo, cilindro, cono, tronco di cono, sfera (UV Sphere), icosfera o toro. Ogni forma ha il suo disegno e, cambiando forma, cambiano i campi da compilare: per un cilindro servono raggio e altezza, per un toro i due raggi, per una sfera il numero di segmenti e di anelli.' },
      { t: 'Passo 2 · Scrivi le misure e guarda l\'anteprima', d: 'Mentre digiti, una piccola anteprima 3D nella finestra si aggiorna e puoi ruotarla trascinando con il mouse. Vedi subito le proporzioni, prima ancora di toccare il modello. Le misure sono lette e scritte nelle unità del tuo modello: se lavori in centimetri scrivi centimetri, se lavori in pollici scrivi pollici, senza conversioni.' },
      { t: 'Passo 3 · Posiziona con un clic', d: 'Confermi e si attiva uno strumento di posizionamento: la forma fantasma segue il mouse direttamente nel modello, con i marker colorati degli assi. Clicchi nel punto voluto e la forma nasce lì. Puoi decidere se il punto di inserimento è l\'angolo del riquadro di ingombro, il centro della base o il centro dell\'oggetto.' },
      { t: 'Il cubo con la catenina', d: 'Il cubo ha larghezza, profondità e altezza collegate da una catenina: scrivi un solo valore e gli altri si adeguano, così ottieni sempre un cubo perfetto. Se sblocchi la catenina, ogni valore si modifica da solo e il cubo diventa un parallelepipedo. Quando la ricolleghi, i rapporti restano quelli impostati.' },
      { t: 'Assi e origine visibili', d: 'Nell\'anteprima sono disegnati gli assi X (rosso), Y (verde) e Z (blu) e si spostano appena cambi la posizione dell\'origine. Vedi in anticipo dove sarà il punto di inserimento e dove si troveranno gli assi del gruppo o del componente, senza provare e correggere.' },
      { t: 'Solidi chiusi, lisci e annullabili', d: 'Ogni forma è un solido chiuso con le facce orientate verso l\'esterno. Sfere, cilindri e coni hanno gli spigoli ammorbiditi, quindi appaiono lisci ma restano modificabili come qualsiasi geometria. La creazione è un\'unica operazione: un solo Ctrl+Z annulla tutto.' },
      { t: 'Guida e impostazioni', d: 'Il pulsante Help apre una guida con una scheda colorata per ogni oggetto e segue la lingua scelta: italiano, inglese, tedesco, francese o spagnolo. Oggetto, valori, catenina, posizione e lingua vengono salvati e ritrovati alla prossima apertura di SketchUp.' },
      { t: 'Un esempio concreto', d: 'Devi disegnare quattro pilastri cilindrici da 30 cm di diametro e 280 cm di altezza. Apri robo baseform, scegli Cilindro, scrivi raggio 15 e altezza 280, guardi l\'anteprima e premi conferma. Clicchi sul primo angolo: il pilastro è lì, già chiuso e liscio. Ripeti il clic per gli altri tre. Se sbagli, un Ctrl+Z annulla l\'ultimo.' }
    ],
    pros: ['Guida integrata in cinque lingue', 'Assi dell\'oggetto visibili nell\'anteprima', 'Sette forme di base in un solo strumento', 'Anteprima prima di confermare', 'Nessun errore di conversione tra unità', 'Annullamento immediato con un Ctrl+Z'],
    solves: [
      { p: 'Per un cubo, un cilindro o una sfera precisi servono più strumenti e passaggi, ogni volta.', s: 'Un unico comando: scegli la forma, inserisci le misure e clicca.' },
      { p: 'Non sai dove atterrerà il volume finché non è disegnato.', s: 'L\'anteprima fantasma mostra posizione e ingombro prima del clic.' },
      { p: 'Capire dove sarà l\'origine, cioè gli assi, dell\'oggetto creato richiede di provare e correggere.', s: 'Gli assi compaiono nell\'anteprima e si spostano appena cambi la posizione.' }
    ],
    specs: [['Oggetti', 'Cubo (X, Y, Z collegabili), cilindro, cono, tronco di cono, UV Sphere, icosfera, toro'], ['Finestra', 'Si adatta al contenuto, con anteprima 3D live'], ['Guida', 'Finestra di 640 px, in 5 lingue'], ['Menu', 'Robo Tool › robo baseform'], ['Barra strumenti', '1 pulsante'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* --------------------------------------------------------------- EXTRACT */
  {
    id: 'extract', name: 'robo extract', version: '1.1', category: 'Modellazione', hue: 170,
    donationPrompt: true,
    video: 'Gi4nG6UZF0I',
    images: ['assets/img/screenshots/extract-1.png'],
    tagline: 'Copia facce e linee fuori dai gruppi, nella stessa posizione.',
    simple: 'Passa il mouse su una faccia o una linea di qualsiasi gruppo o componente, anche chiuso: Robo la evidenzia e, con un clic, ne crea una copia fuori dal gruppo, nella stessa identica posizione e inclinazione. Funziona su piani inclinati e su forme organiche, e non serve aprire né selezionare nulla.',
    intro: [
      'robo extract è lo strumento per prendere una faccia o una linea dall\'interno di un gruppo o di un componente e averne una copia fuori, nella stessa identica posizione. Non devi aprire il gruppo, né copiare e incollare: basta passare il mouse e cliccare.',
      'Serve ogni volta che ti occorre usare una parte di un oggetto già modellato: la sagoma di una parete per disegnarci sopra, il profilo di un pezzo per costruirne un altro, una superficie organica da riutilizzare. La copia arriva già al posto giusto, anche su piani inclinati.'
    ],
    main: [
      { t: 'Funziona dentro i gruppi chiusi', d: 'Evidenzia e copia facce e linee anche dentro gruppi e componenti annidati, senza aprirli e senza selezionare nulla prima.' },
      { t: 'Stessa posizione e inclinazione', d: 'La copia si sovrappone all\'originale, anche se l\'oggetto è stato ruotato, ingrandito o specchiato. Se preferisci, puoi farla comparire accanto.' },
      { t: 'Superfici organiche', d: 'Su una forma curva prende in un colpo solo tutta la zona liscia, con un limite regolabile da una barra con anteprima.' },
      { t: 'Più elementi insieme', d: 'Con Maiusc aggiungi altre facce o linee e le copi tutte in un unico nuovo gruppo. Su un arco o un cerchio prende la curva intera.' }
    ],
    steps: ['Clicca il pulsante robo extract nella barra strumenti (o nel menu): parte lo strumento e si apre la finestra delle preferenze.', 'Passa il mouse su una faccia o una linea: diventa arancione e la barra di stato dice dove andrà la copia.', 'Clicca: la copia compare in un nuovo gruppo, già selezionata. Maiusc+clic per aggiungerne altre.'],
    how: [
      { t: 'Il problema che risolve', d: 'Quando una faccia o una linea sta dentro un gruppo o un componente, per usarla devi aprire il gruppo, copiare, uscire e incollare, con il rischio di spostarla o di sbagliare livello. Se poi l\'oggetto è stato ruotato, ingrandito o specchiato, rimetterla nel punto esatto diventa un lavoro lungo. robo extract fa tutto con un clic, senza aprire nulla.' },
      { t: 'Passo 1 · Attiva lo strumento', d: 'Premi il pulsante robo extract (o la voce di menu): parte lo strumento e si apre la finestra delle preferenze. Non devi selezionare niente prima e non devi entrare nei gruppi: lo strumento arriva da solo a facce e linee dentro gruppi e componenti chiusi, anche annidati.' },
      { t: 'Passo 2 · Passa il mouse e guarda', d: 'Muovendo il mouse sopra una faccia o una linea, questa diventa arancione e la barra di stato ti dice dove andrà la copia. Il plugin legge la posizione dall\'istanza esatta sotto il cursore, quindi traslazioni, rotazioni, scale e specchi non spostano il risultato.' },
      { t: 'Passo 3 · Clicca per copiare', d: 'Con un clic la copia compare in un nuovo gruppo, già selezionata. Con Maiusc+clic aggiungi altre facce, segmenti o curve dello stesso gruppo e li copi tutti insieme. Se punti un segmento di un arco o di un cerchio, prende la curva intera.' },
      { t: 'Dove finisce la copia', d: 'Con niente di aperto la copia nasce nella radice del modello, fuori dal gruppo di origine. Se hai un gruppo aperto per la modifica, e scegli la geometria di un altro gruppo, la copia entra nel gruppo aperto; se scegli la sua stessa geometria, sale di un livello.' },
      { t: 'Superfici organiche', d: 'Una superficie curva è fatta di centinaia di piccole facce. Cliccandone una, lo strumento la estende alle facce vicine finché la piega non supera il "limite di levigatezza". Nelle Preferenze uno slider con anteprima in tempo reale mostra quanto cambia la selezione.' },
      { t: 'Stessa posizione o accanto', d: 'Di default la copia si sovrappone esattamente all\'originale. Disattivando "Copia nella stessa posizione" compare invece accanto, spostata di lato, così le vedi entrambe. Il pulsante "Applica" salva le impostazioni e conferma gli elementi raccolti, come il tasto Invio. Materiali, tag e interfaccia sono disponibili in cinque lingue.' },
      { t: 'Un esempio concreto', d: 'Hai un edificio modellato in tanti gruppi e vuoi disegnare un serramento sulla facciata di una parete inclinata. Attivi robo extract, passi il mouse sulla parete, che si colora, e clicchi: la copia della faccia appare esattamente sulla parete, con la stessa inclinazione, fuori dal gruppo. Ora puoi disegnarci sopra senza aprire niente. Un Ctrl+Z annulla la copia.' }
    ],
    pros: ['Non serve aprire i gruppi', 'Posizione e inclinazione identiche all\'originale', 'Funziona su superfici inclinate e organiche', 'Materiali, tag e interfaccia in 5 lingue'],
    solves: [
      { p: 'Estrarre una faccia da un gruppo significa aprirlo, copiare e incollare, con il rischio di spostarla.', s: 'Un clic crea la copia già nella posizione giusta, senza aprire nulla.' },
      { p: 'Le superfici organiche sono fatte di centinaia di piccole facce.', s: 'La porzione liscia viene presa tutta in un colpo, con un limite regolabile.' }
    ],
    specs: [['Menu', 'Robo Tool › robo extract (una sola voce)'], ['Barra strumenti', '1 pulsante'], ['Lingue', 'Italiano, English, Deutsch, Français, Español'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* --------------------------------------------------------------- DEMOLITION */
  {
    id: 'demolition', name: 'robo demolition', version: '1.1', category: 'Modellazione', hue: 15,
    noDownload: true,
    video: 'Zgdt30Fkshw',
    images: ['assets/img/screenshots/demolition-1.png', 'assets/img/screenshots/demolition-2.png', 'assets/img/screenshots/demolition-3.png'],
    tagline: 'Riduce i triangoli di una mesh pesante, mantenendo la forma.',
    simple: 'Seleziona facce, gruppi o componenti pesanti: robo demolition ne mostra in anteprima la versione più leggera, disegnata sul modello, e con una barra decidi quanto demolire. Usa Open3D (Python, in locale sul tuo computer); gli oggetti interni restano oggetti e i materiali restano al loro posto.',
    intro: [
      'robo demolition alleggerisce gli oggetti con troppi triangoli, per esempio quelli importati da altri programmi o scaricati da internet. Ne crea una versione più semplice che conserva la forma, ma pesa molto meno.',
      'Serve quando il modello è lento, il file è enorme o SketchUp fatica a muoversi. Vedi il risultato in anteprima sul modello e decidi tu quanto semplificare con una barra, prima di applicare.'
    ],
    main: [
      { t: 'Anteprima con barra di regolazione', d: 'La versione alleggerita compare in blu sopra l\'oggetto: muovi la barra per demolire di più o di meno e guarda subito come cambia la forma.' },
      { t: 'Due modi di semplificare', d: 'Uno privilegia la qualità della forma, l\'altro è velocissimo e leggerissimo. Scegli in base all\'oggetto.' },
      { t: 'Gruppi e componenti restano separati', d: 'Ogni oggetto viene alleggerito al suo posto, senza essere unito agli altri.' },
      { t: 'Materiali e tag mantenuti', d: 'Colori, texture e tag restano come prima, e le facce rovesciate sulle forme chiuse vengono sistemate.' },
      { t: 'Tutto sul tuo computer', d: 'Il lavoro avviene in locale, senza servizi online, e un solo Ctrl+Z ripristina tutto.' }
    ],
    steps: ['Seleziona le facce, i gruppi o i componenti da alleggerire.', 'Premi Anteprima: la mesh più leggera viene disegnata in blu sul modello. Muovi la barra per demolire di più o di meno.', 'Premi Applica: un solo Ctrl+Z ripristina tutto.'],
    how: [
      { t: 'Il problema che risolve', d: 'Ogni superficie in SketchUp è fatta di facce, e un oggetto curvo o scansionato può averne centinaia di migliaia. Il modello diventa lento, la vista va a scatti, il file pesa decine di megabyte e il rendering fatica. Molte di quelle facce però sono invisibili a occhio: su una superficie quasi piatta servono pochissimi triangoli per avere lo stesso aspetto. robo demolition elimina quelli inutili e tiene quelli che contano.' },
      { t: 'Passo 1 · Scegli cosa alleggerire', d: 'Seleziona facce sciolte, gruppi o componenti, anche tanti insieme. La finestra mostra subito quante facce contiene la selezione. Se è enorme, il plugin avvisa che il lavoro può richiedere tempo e chiede se vuoi continuare.' },
      { t: 'Passo 2 · Muovi la barra e guarda', d: 'Con la barra "Quantità di demolizione" decidi quanto togliere: più è alta, più il modello è leggero. Premi Anteprima e una bozza dell\'oggetto semplificato viene disegnata in blu sopra l\'originale, con sotto i numeri "facce prima → dopo" e la percentuale in meno. Muovi la barra e rivedi il risultato finché la forma ti soddisfa: nel modello non cambia nulla finché non confermi.' },
      { t: 'Passo 3 · Applica, o conserva l\'originale', d: 'Con "Applica" il risultato entra nel modello in un\'unica operazione: un solo Ctrl+Z ripristina tutto. Di default l\'originale resta e accanto, nella stessa posizione, nasce la copia demolita; se disattivi "Mantieni l\'oggetto originale", l\'originale viene sostituito. Dopo l\'anteprima, se modifichi il modello, il plugin ti chiede di rifarla, per non applicare un risultato non più valido.' },
      { t: 'Due metodi di riduzione', d: 'Quadric elimina per primi i triangoli che cambiano meno la forma, ed è quello da scegliere quando conta la qualità. Voxel divide lo spazio in una griglia di celle e unisce tutto ciò che sta nella stessa cella: è velocissimo e dà risultati molto leggeri, ma più grossolani. In entrambi i casi la barra significa la stessa cosa, cioè quanto viene tolto.' },
      { t: 'Tre motori, scegli tu', d: 'Il motore "Veloce" è il consigliato: si installa in pochi secondi (circa 35 MB). "Alta precisione" usa Open3D (circa 300 MB), è un po\' più lento ma in media un po\' più accurato. "Nativo" è incluso nel plugin e non richiede alcuna installazione: è velocissimo, un po\' meno raffinato con riduzioni molto spinte. Se Python o il motore mancano, un assistente li installa per te, passo dopo passo, solo sul tuo computer.' },
      { t: 'Oggetti, materiali e bordi', d: 'Ogni gruppo e componente dentro la selezione viene ridotto al proprio posto: resta un oggetto separato, con il suo nome e la sua posizione, e non viene unito agli altri. I componenti usati più volte sono ridotti una volta sola. Materiali (fronte e retro) e tag restano. Puoi proteggere i bordi aperti, così le superfici non si restringono; correggere le facce rovesciate sulle forme chiuse; e ammorbidire gli spigoli tra facce quasi piane, per un aspetto liscio. Il risultato è fatto di triangoli, ma la mappatura delle texture (UV) viene riportata dalle facce originali: le texture mantengono il loro aspetto.' },
      { t: 'Tutto in locale, senza bloccarti', d: 'Il calcolo gira sul tuo computer: non viene inviato nulla su internet. Avviene in background, quindi SketchUp resta utilizzabile; vedi il tempo trascorso e puoi premere Annulla in qualsiasi momento.' },
      { t: 'Un esempio concreto', d: 'Hai scaricato una poltrona da internet: ha 480.000 facce e il modello si trascina. La selezioni, premi Anteprima e porti la barra al 90%: i numeri mostrano 480.000 → 48.000 facce, e la bozza blu sembra ancora la stessa poltrona. Spingi al 97% e iniziano a vedersi spigoli sui braccioli: torni al 93% e confermi. Applichi: la copia leggera prende il posto dell\'originale (o gli sta accanto, se lo hai conservato) con i suoi tessuti e materiali, e il modello torna fluido. Se non ti piace, un Ctrl+Z e sei di nuovo all\'inizio.' }
    ],
    pros: ['Gratuito e offline', 'Anteprima con barra di regolazione', 'Gruppi e componenti restano oggetti separati', 'Materiali mantenuti', 'Un solo Undo'],
    solves: [
      { p: 'Le mesh importate hanno centinaia di migliaia di triangoli e rallentano il modello.', s: 'Una copia con la percentuale di triangoli che scegli, con la forma quasi identica.' }
    ],
    specs: [['Menu', 'Robo Tool › robo demolition (una sola voce)'], ['Barra strumenti', '1 pulsante'], ['Richiede', 'Python 3 + Open3D (pip install open3d)'], ['Lingue', 'Italiano, English, Deutsch, Français, Español']]
  },

  /* --------------------------------------------------------------- EXPORT OBJECT */
  {
    id: 'export_object', name: 'robo export object', version: '0.2', category: 'Produttività', hue: 5,
    donationPrompt: true,
    tagline: 'Esporta gli oggetti selezionati in un nuovo file .skp, nella versione che scegli.',
    simple: 'Selezioni una parte del modello: si apre una finestra con il nome già compilato (quello del gruppo o componente), la cartella e la versione di SketchUp. Robo la salva in un file separato, nella stessa posizione, senza toccare il tuo modello aperto.',
    intro: [
      'robo export object salva solo la parte del modello che selezioni in un nuovo file .skp, separato dal tuo progetto. Non devi più copiare, aprire un file vuoto e incollare.',
      'Serve per condividere un singolo mobile, un arredo o un dettaglio con un collega o un cliente, per costruirti una libreria personale di componenti, o per consegnare un file che si apra anche con una versione di SketchUp più vecchia.'
    ],
    main: [
      { t: 'Esporta la selezione', d: 'Selezioni uno o più oggetti, premi il pulsante e il file viene creato con tutto ciò che serve, materiali e componenti compresi.' },
      { t: 'Nome già pronto', d: 'Il nome del file è quello del gruppo o del componente. Puoi cambiarlo nella finestra.' },
      { t: 'Versione di SketchUp a scelta', d: 'Salvi per la versione corrente oppure per una precedente, utile quando il destinatario ha un programma meno recente.' },
      { t: 'Il tuo modello non viene toccato', d: 'Il file aperto resta com\'è: non viene modificato, chiuso o salvato.' },
      { t: 'Stessa posizione', d: 'Gli oggetti mantengono le coordinate che avevano, così puoi reimportarli senza spostamenti.' }
    ],
    steps: ['Seleziona gli oggetti da esportare.', 'Premi robo export object: il nome del file è già quello del gruppo o componente, puoi cambiarlo.', 'Scegli cartella e versione di SketchUp e premi Esporta.'],
    how: [
      { t: 'Il problema che risolve', d: 'Per salvare una sola parte del modello, di solito devi copiarla, aprire un nuovo file, incollarla sul posto e salvare; oppure salvare "con nome" e cancellare il resto, rischiando di rovinare il file originale. robo export object fa tutto con un comando: selezioni, scegli nome e versione, esporti.' },
      { t: 'Passo 1 · Seleziona gli oggetti', d: 'Seleziona nel modello uno o più gruppi o componenti. Premi il pulsante robo export object: si apre una finestra con il nome del file già compilato. Se hai selezionato un solo gruppo o componente, il nome è il suo (o quello della definizione); con più oggetti propone nome_selezione.' },
      { t: 'Passo 2 · Scegli nome, cartella e versione', d: 'Puoi cambiare il nome, scegliere la cartella e la versione di SketchUp per cui salvare: quella corrente oppure 2021 e precedenti (scelta disponibile da SketchUp 2022). I caratteri non validi per Windows nel nome vengono sostituiti da soli. Se il file esiste già, ti viene chiesto se vuoi sovrascriverlo.' },
      { t: 'Passo 3 · Esporta', d: 'Premi Esporta e il file .skp viene creato. Il tuo modello non viene chiuso, riaperto né modificato: la selezione viene racchiusa per un istante in un gruppo temporaneo, salvata su disco e subito dopo l\'operazione viene annullata.' },
      { t: 'Posizione e contenuto', d: 'Gli oggetti nel nuovo file restano nelle stesse coordinate che avevano nel modello, così puoi reimportarli o allinearli senza spostamenti. Insieme agli oggetti vengono salvati i componenti e i materiali che usano, senza portarsi dietro il resto del modello: ottieni un file pulito.' },
      { t: 'Attenzione alle versioni più vecchie', d: 'Salvando per una versione più vecchia puoi perdere ciò che quella versione non conosce, come stili o funzioni recenti. Inoltre il tuo SketchUp potrebbe non accettare le versioni molto vecchie.' },
      { t: 'Finestra, guida e lingue', d: 'La finestra segue lo stile Robo, si adatta in altezza al contenuto e ricorda cartella e versione scelte. Il pulsante Help e il globo in alto a destra aprono la guida e cambiano la lingua: italiano, inglese, tedesco, francese o spagnolo.' },
      { t: 'Un esempio concreto', d: 'Hai un progetto d\'arredo con una cucina completa e vuoi mandare al cliente solo il mobile bar. Lo selezioni, premi robo export object: il nome proposto è "Mobile_bar". Scegli la cartella e la versione 2021, perché il cliente ha un programma più vecchio, e premi Esporta. In pochi secondi hai un file leggero con solo quel mobile, nelle sue coordinate, mentre il tuo progetto è rimasto intatto.' }
    ],
    pros: ['Nome già compilato e modificabile', 'Versione di SketchUp a scelta (da SketchUp 2022)', 'Un file pulito con solo ciò che serve', 'Il modello aperto non viene toccato', 'Coordinate originali preservate', 'Finestra e guida in cinque lingue'],
    solves: [
      { p: 'Per salvare una sola parte del modello si copia, si apre un nuovo file e si incolla sul posto.', s: 'Un comando: selezioni ed esporti.' },
      { p: 'Chi ha una versione di SketchUp più vecchia non riesce ad aprire il file.', s: 'Scegli la versione di salvataggio direttamente nella finestra.' },
      { p: 'Salvare "con nome" e cancellare il resto rischia di rovinare il file originale.', s: 'L\'esportazione avviene senza modificare il file aperto.' }
    ],
    specs: [['Menu', 'Robo Tool › robo export object'], ['Barra strumenti', '1 pulsante'], ['Finestra', 'Nome file, cartella e versione; altezza automatica'], ['Versione di salvataggio', 'A scelta da SketchUp 2022'], ['Formato', 'File .skp'], ['Lingue', '5 (IT, EN, DE, FR, ES)'], ['Annullamento', 'Il modello non viene modificato']],
    images: ['assets/img/screenshots/export_object-2.png']
  },

  /* ---------------------------------------------------------------- FILLET */
  {
    id: 'fillet', name: 'robo fillet', version: '1.2', category: 'Modellazione', hue: 200,
    donationPrompt: true,
    video: 'sGrRxU-Thlo',
    images: ['assets/img/screenshots/fillet-1.png', 'assets/img/screenshots/fillet-2.png', 'assets/img/screenshots/fillet-3.png', 'assets/img/screenshots/fillet-4.png', 'assets/img/screenshots/fillet-5.png'],
    tagline: 'Raccordi e smussi tra due linee, su qualsiasi piano.',
    simple: 'Clicca due linee che si incontrano in un angolo, scegli il raggio: l\'angolo spigoloso diventa una curva morbida (oppure uno smusso). Funziona su qualsiasi piano nello spazio, non solo sul pavimento.',
    intro: [
      'robo fillet arrotonda l\'angolo formato da due linee: lo trasforma in una curva morbida, detta raccordo, oppure in uno smusso. Clicchi le due linee, scrivi il raggio e l\'angolo viene sistemato.',
      'Serve nel disegno di profili, piante, mobili, lamiere e in qualsiasi forma con spigoli da ammorbidire. A differenza di altri metodi funziona su qualsiasi piano, anche inclinato, e anche quando le due linee non si toccano davvero.'
    ],
    main: [
      { t: 'Due clic e un raggio', d: 'Clicchi la prima linea, poi la seconda, scrivi il raggio nelle unità del modello e confermi.' },
      { t: 'Anteprima dal vivo', d: 'Mentre cambi il raggio vedi subito la curva risultante. Il raggio massimo possibile è calcolato per te, così non ottieni raccordi impossibili.' },
      { t: 'Raccordo o smusso', d: 'Con un solo segmento ottieni uno smusso netto, con più segmenti un arco sempre più liscio.' },
      { t: 'Su qualsiasi piano', d: 'Funziona anche su piani inclinati e nello spazio, non solo sul piano orizzontale.' },
      { t: 'Pronto per il raccordo successivo', d: 'Dopo aver applicato lo strumento resta attivo e ricorda raggio e segmenti, per arrotondare gli angoli uno dopo l\'altro.' }
    ],
    steps: ['Attiva robo fillet e clicca la prima linea (si colora di rosso).', 'Clicca la seconda linea (blu) e inserisci raggio e numero di segmenti.', 'Controlla l\'anteprima verde e premi Applica.'],
    how: [
      { t: 'Il problema che risolve', d: 'Arrotondare l\'angolo tra due spigoli in SketchUp richiede di costruire l\'arco a mano, trovare il centro giusto, tagliare le due linee nel punto di tangenza e cancellare i pezzi che avanzano. Sui piani inclinati diventa lento e impreciso. robo fillet fa tutto con due clic e un raggio.' },
      { t: 'Passo 1 · Scegli le due linee', d: 'Attivi robo fillet e clicchi la prima linea, che si colora di rosso, poi la seconda, che diventa blu. Le linee devono giacere sullo stesso piano: lo strumento lo verifica e calcola da solo il punto in cui si incontrano, anche quando non si toccano davvero (un "angolo virtuale").' },
      { t: 'Passo 2 · Imposta raggio e segmenti', d: 'Scrivi il raggio nelle unità del tuo modello e il numero di segmenti, da 1 a 99. Con 1 segmento ottieni uno smusso netto; con più segmenti un arco sempre più liscio. Il raggio massimo possibile viene calcolato per te, così non ottieni raccordi impossibili.' },
      { t: 'Passo 3 · Controlla l\'anteprima e applica', d: 'Mentre cambi i valori vedi subito l\'arco risultante, disegnato in verde. Quando ti piace premi Applica: le due linee vengono tagliate al punto giusto e l\'arco viene creato. Un solo Ctrl+Z annulla il raccordo.' },
      { t: 'Su qualsiasi piano', d: 'Il calcolo avviene sul piano delle due linee, qualunque sia la sua orientazione: orizzontale, verticale o inclinato nello spazio. Non serve ruotare la vista né costruire piani ausiliari.' },
      { t: 'Pronto per il raccordo successivo', d: 'Dopo Applica lo strumento resta attivo e ricorda raggio e segmenti, così puoi arrotondare gli angoli uno dopo l\'altro. Se le linee non si toccavano, propone di unirle; al centro dell\'arco viene lasciato un punto guida.' },
      { t: 'Un esempio concreto', d: 'Hai disegnato in pianta il contorno di un bancone con quattro angoli vivi e vuoi arrotondarli con raggio 10 cm. Attivi robo fillet, clicchi le due linee del primo angolo, scrivi 10 e vedi l\'arco verde. Premi Applica e passi all\'angolo successivo: il raggio è già impostato, bastano due clic. In meno di un minuto il contorno è completo e pulito.' }
    ],
    pros: ['Raggio preciso nelle unità del modello', 'Funziona su piani inclinati e in 3D', 'Anche con spigoli che non si toccano', 'Raggio e segmenti ricordati tra un raccordo e l\'altro'],
    solves: [
      { p: 'Arrotondare un angolo tra due spigoli richiede di costruire l\'arco a mano e poi tagliare le linee.', s: 'Due clic e un raggio: arco costruito e spigoli sistemati.' },
      { p: 'Sui piani inclinati costruire un arco tangente è lento e impreciso.', s: 'Il calcolo avviene sul piano delle due linee, qualunque sia la sua orientazione.' }
    ],
    specs: [['Menu', 'Robo Tool › robo fillet'], ['Segmenti', '1 – 99 (1 = smusso)'], ['Piani', 'Qualsiasi orientamento'], ['Annullamento', 'Un solo Ctrl+Z per raccordo']]
  },

  /* ------------------------------------------------------- GROUP TO COMPONENT */
  {
    id: 'group_to_component', name: 'robo group to component', version: '1.2', category: 'Organizzazione', hue: 32,
    donationPrompt: true,
    video: 'BLo3ZGXY1F4',
    images: ['assets/img/screenshots/group_to_component-1.png', 'assets/img/screenshots/group_to_component-2.png', 'assets/img/screenshots/group_to_component-3.png', 'assets/img/screenshots/group_to_component-4.png'],
    tagline: 'Trasforma i gruppi in componenti, unendo quelli identici.',
    simple: 'Seleziona molti gruppi: Robo riconosce quelli con la stessa forma e li trasforma in copie dello stesso componente. Il file diventa più leggero e, modificandone uno, cambiano tutti.',
    intro: [
      'robo group to component trasforma i gruppi in componenti e, soprattutto, riconosce i gruppi identici e li fa diventare copie dello stesso componente. Prima di convertire ti mostra quanti sono uguali e quanti unici.',
      'Serve quando il modello è pieno di gruppi duplicati, per esempio sedie, finestre o viti copiate e incollate. Con un solo componente il file pesa meno e, modificandone uno, cambiano tutti. È anche un buon passo di preparazione per rendering e proxy.'
    ],
    main: [
      { t: 'Riconosce i gruppi uguali', d: 'Confronta la forma di ogni gruppo e raggruppa quelli identici, anche se sono in punti diversi del modello.' },
      { t: 'Analisi prima di convertire', d: 'Vedi quanti gruppi sono identici e quanti unici, e decidi se procedere.' },
      { t: 'Precisione regolabile', d: 'Puoi scegliere quanto rigoroso deve essere il confronto: più veloce o più preciso.' },
      { t: 'Nomi e numerazione automatici', d: 'Dai un nome al componente e le copie vengono numerate in ordine.' }
    ],
    steps: ['Seleziona i gruppi da convertire.', 'Apri robo group to component: vedi quanti sono identici e quanti unici.', 'Scegli nome e opzioni e conferma.'],
    how: [
      { t: 'Il problema che risolve', d: 'Un modello pieno di gruppi duplicati, per esempio sedie o finestre copiate e incollate, pesa molto e va modificato copia per copia. Un gruppo, a differenza di un componente, non condivide la geometria con le sue copie. Capire a occhio quali gruppi sono davvero uguali è impossibile. robo group to component li riconosce e li trasforma in copie dello stesso componente.' },
      { t: 'Passo 1 · Seleziona i gruppi', d: 'Seleziona i gruppi da convertire, anche centinaia. Apri robo group to component: il pannello analizza la selezione e ti mostra quanti gruppi sono identici e quanti unici, prima di cambiare qualsiasi cosa.' },
      { t: 'Come li riconosce', d: 'Per ogni gruppo viene calcolata una "impronta" geometrica: numero di facce, volume e posizione dei vertici. Due gruppi con la stessa impronta sono considerati identici, anche se si trovano in punti diversi o ruotati nel modello.' },
      { t: 'Passo 2 · Regola il confronto', d: 'Puoi regolare la tolleranza, cioè quanto due forme possono differire per essere considerate uguali. Con il confronto vertice per vertice ("Deep Vertex Hash") l\'analisi è più lenta ma più rigorosa: utile quando forme simili ma non identiche rischierebbero di essere unite.' },
      { t: 'Passo 3 · Nome, numerazione e conferma', d: 'Assegni un nome al componente e scegli la numerazione automatica: Nome_1, Nome_2… oppure 0001, 0002… Confermi e i gruppi identici diventano istanze della stessa definizione: la geometria è memorizzata una sola volta.' },
      { t: 'Cosa ottieni', d: 'Il file diventa più leggero, e modificando un componente cambiano tutte le sue copie. Il modello è anche pronto per usare proxy leggeri e per il rendering. Un solo Ctrl+Z ripristina tutto.' },
      { t: 'Un esempio concreto', d: 'Hai un ristorante con 60 sedie, tutte gruppi copiati e incollati. Le selezioni e apri robo group to component: il pannello dice "58 identici, 2 unici". Scrivi il nome "Sedia", scegli la numerazione e confermi. Ora ci sono due componenti "Sedia" e le 58 copie condividono la stessa definizione: il file pesa meno e, se cambi il colore della seduta in una, cambia in tutte.' }
    ],
    pros: ['File più leggero', 'Una modifica si propaga a tutte le copie', 'Prepara il modello per proxy e rendering', 'Nomi e numerazione automatici'],
    solves: [
      { p: 'Un modello pieno di gruppi duplicati pesa molto e va modificato copia per copia.', s: 'I duplicati diventano un solo componente, modificabile una volta.' },
      { p: 'Capire quali gruppi sono davvero uguali a occhio è impossibile.', s: 'Il pannello di analisi mostra identici e unici prima di convertire.' }
    ],
    specs: [['Finestra', '480 × 700 px, ridimensionabile'], ['Menu', 'Robo Tool › robo group to component'], ['Confronto', 'Impronta geometrica + tolleranza'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* ---------------------------------------------------------------- IMPACT */
  {
    id: 'impact_object', name: 'robo impact object', version: '1.2', category: 'Ottimizzazione', hue: 348,
    donationPrompt: true,
    video: 'hU1Xp5oTKqg',
    images: ['assets/img/screenshots/impact_object-1.png', 'assets/img/screenshots/impact_object-2.png'],
    tagline: 'Scopri quali oggetti appesantiscono il tuo modello.',
    simple: 'Una tabella ordinabile ti mostra quanto "pesa" ogni componente del modello, tenendo conto anche di quante volte è ripetuto. Così trovi subito alberi, arredi o dettagli che rallentano SketchUp.',
    intro: [
      'robo impact object è una tabella che mostra quanto pesa ogni componente del modello, tenendo conto anche di quante volte è ripetuto. In pratica ti dice chi sta rallentando SketchUp.',
      'Serve quando il modello è lento e non sai da dove cominciare: alberi, arredi molto dettagliati o piccoli oggetti ripetuti centinaia di volte diventano subito visibili, così sai su cosa intervenire.'
    ],
    main: [
      { t: 'Classifica per peso', d: 'Ordini la tabella e trovi in pochi secondi gli oggetti più pesanti.' },
      { t: 'Conta anche le ripetizioni', d: 'Un oggetto piccolo ma copiato mille volte può pesare più di uno grande e unico: la tabella lo mostra.' },
      { t: 'Livelli annidati', d: 'I componenti dentro altri componenti si aprono come un albero, un livello alla volta.' },
      { t: 'Azioni dalla stessa riga', d: 'Selezioni l\'oggetto nel modello, lo isoli, ci fai zoom o ripulisci i componenti inutilizzati.' },
      { t: 'Dimensione in MB su richiesta', d: 'Il peso in MB si calcola solo quando lo chiedi, così i modelli grandi non rallentano.' }
    ],
    steps: ['Apri robo impact object dal menu.', 'Ordina la tabella per Totale e individua le righe più pesanti.', 'Selezionale, isolale con lo zoom o elimina ciò che non serve.'],
    how: [
      { t: 'Il problema che risolve', d: 'Un modello lento è difficile da diagnosticare: non si vede quale oggetto lo appesantisce. Spesso il colpevole non è l\'oggetto più grande, ma uno piccolo copiato centinaia di volte, come un albero, un arredo o un dettaglio. robo impact object mette in classifica tutti i componenti per peso reale.' },
      { t: 'Passo 1 · Apri la tabella', d: 'Dal menu apri robo impact object: compare una tabella con una riga per ogni definizione del modello e le colonne Livello, Entità, Istanze, Totale e MB. I componenti contenuti in altri componenti si espandono ad albero: all\'apertura vedi solo i livelli principali, un clic apre i figli.' },
      { t: 'Come si calcola il peso', d: 'Per ogni definizione viene contato il numero di entità (facce, linee, gruppi…) e quante volte compare nel modello. Il prodotto, entità × istanze, è l\'impatto reale sul programma, e si legge nella colonna Totale.' },
      { t: 'Passo 2 · Ordina e individua', d: 'Ordini la tabella per Totale e in pochi secondi vedi le righe più pesanti. Un oggetto piccolo ma molto ripetuto può pesare più di uno grande e unico: la tabella rende visibile questo effetto.' },
      { t: 'Passo 3 · Agisci dalla riga', d: 'Per ogni riga puoi selezionare l\'oggetto nel modello, isolarlo e fare zoom, oppure pulire i componenti inutilizzati. La selezione è sincronizzata nei due sensi: selezioni nel modello e si evidenzia la riga, e viceversa. Dopo lo zoom, lo stato del modello viene ripristinato.' },
      { t: 'Dimensione in MB su richiesta', d: 'Il peso in MB viene calcolato solo quando lo chiedi, così i modelli molto grandi non rallentano all\'apertura della tabella.' },
      { t: 'Un esempio concreto', d: 'Il tuo modello di giardino è lentissimo. Apri robo impact object e ordini per Totale: in cima c\'è "Siepe", un piccolo componente di 800 entità copiato 300 volte. Lo selezioni, vedi dove si trova nel modello e decidi di sostituirlo con un proxy leggero, magari con robo proxy manager. Il modello torna fluido.' }
    ],
    pros: ['Trovi i colli di bottiglia in pochi secondi', 'Tabella ordinabile e albero espandibile', 'Nessun rallentamento sui modelli grandi', 'Isolamento e pulizia dallo stesso pannello'],
    solves: [
      { p: 'Il modello è lento ma non sai quale oggetto è il colpevole.', s: 'La classifica per peso totale lo mostra subito.' },
      { p: 'Un piccolo oggetto molto ripetuto pesa più di uno grande e unico.', s: 'Il calcolo entità × istanze rende visibile l\'effetto della ripetizione.' }
    ],
    specs: [['Finestra', '820 × 570 px, ridimensionabile'], ['Menu', 'Robo Tool › robo impact objects'], ['Colonne', 'Livello, Entità, Istanze, Totale, MB'], ['Annullamento', 'Stato del modello ripristinato']]
  },

  /* -------------------------------------------------------------- LIBRARY EXPLORER */
  {
    id: 'library_explorer', name: 'robo library explorer', version: '1.2', category: 'Organizzazione', hue: 190,
    donationPrompt: true,
    video: '27grL1GDQQM',
    images: ['assets/img/screenshots/library_explorer-1.png', 'assets/img/screenshots/library_explorer-2.png', 'assets/img/screenshots/library_explorer-3.png', 'assets/img/screenshots/library_explorer-4.png', 'assets/img/screenshots/library_explorer-5.png', 'assets/img/screenshots/library_explorer-6.png', 'assets/img/screenshots/library_explorer-7.png'],
    tagline: 'Sfoglia le tue librerie con anteprime vere e inserisci con un clic.',
    simple: 'Indica le cartelle dove tieni componenti e materiali: Robo li mostra con le anteprime, ordinati per cartella, con tag e preferiti. Un clic e l\'oggetto entra nel modello.',
    intro: [
      'robo library explorer è un pannello per sfogliare le tue librerie di componenti e materiali con le anteprime vere, come in una galleria. Indichi le cartelle dove tieni i file e li ritrovi tutti in un unico posto.',
      'Serve quando hai centinaia di file .skp e .skm e non vuoi aprirli uno a uno per capire cosa contengono. Cerchi per nome o per tag, trovi l\'oggetto che ti serve e lo inserisci nel modello con un clic.'
    ],
    main: [
      { t: 'Anteprime vere', d: 'Vedi l\'immagine reale di ogni componente e di ogni materiale, non solo il nome del file.' },
      { t: 'Inserimento con un clic', d: 'Clicchi un componente e lo inserisci nel modello, clicchi un materiale e lo applichi alla selezione.' },
      { t: 'Cerca, filtra e organizza', d: 'Ricerca per nome, tag per classificare gli oggetti e cuore per i preferiti.' },
      { t: 'Una voce per cartella', d: 'Ogni cartella aggiunta diventa un elenco con le sue sottocartelle. I file sul disco non vengono toccati.' },
      { t: 'Viste a scelta', d: 'Passi da elenco con dettagli a icone piccole, medie o grandi, secondo come preferisci lavorare.' }
    ],
    steps: ['Premi "Cartella" e scegli la cartella della tua libreria.', 'Sfoglia le anteprime, filtra per tag o cerca per nome.', 'Clicca un componente per inserirlo, un materiale per applicarlo alla selezione.'],
    how: [
      { t: 'Il problema che risolve', d: 'Chi lavora da anni ha centinaia di componenti e materiali sparsi in molte cartelle. Trovarne uno significa aprire i file uno a uno o ricordarsi il nome esatto. robo library explorer li raccoglie in un solo pannello, con le anteprime vere, e li inserisce nel modello con un clic.' },
      { t: 'Passo 1 · Aggiungi le tue cartelle', d: 'Premi "Cartella" e scegli la cartella della tua libreria. Ogni cartella aggiunta diventa un elenco a sé, con le sue sottocartelle. Puoi anche rinominare il nome mostrato (tasto destro › Edit Name) senza toccare la cartella sul disco: i tuoi file non vengono mai modificati.' },
      { t: 'Anteprime reali', d: 'Per i file .skp l\'anteprima è l\'immagine che SketchUp ha salvato dentro il file; per i materiali .skm viene ricavata caricandoli un istante nel modello. Le anteprime mancanti vengono create in background. Per molti file l\'immagine viene letta direttamente dall\'inizio del .skp, senza aprirlo, e la scansione esplora ogni cartella una sola volta: l\'aggiornamento è rapido.' },
      { t: 'Passo 2 · Sfoglia, filtra, cerca', d: 'Scegli la vista a dettagli oppure a icone piccole, medie o grandi. Cerca per nome, etichetta gli oggetti con i tag e segna i preferiti con il cuore per ritrovarli subito.' },
      { t: 'Passo 3 · Inserisci con un clic', d: 'Clicca un componente e viene inserito nel modello; clicca un materiale e viene applicato alla selezione. Se un componente è stato salvato con una versione di SketchUp più recente della tua, viene inserito come con File › Importa (SketchUp ti avvisa) invece di fallire. I file vuoti non vengono elencati.' },
      { t: 'Proxy, 3D Warehouse e cloud', d: 'Per gli oggetti creati con robo proxy manager mostra anche il proxy. Un pulsante apre il 3D Warehouse per scaricare modelli nella libreria. Il backup nel cloud salva l\'elenco in una cartella OneDrive o Google Drive: la password non passa mai dal plugin.' },
      { t: 'Sicurezza', d: 'Il plugin elimina file solo dentro le cartelle di libreria, e solo dopo la tua conferma.' },
      { t: 'Un esempio concreto', d: 'Stai arredando un bagno e ricordi di avere un lavabo "bianco, tondo" da qualche parte tra 400 file. Apri robo library explorer, scrivi "lavabo" nella ricerca e vedi tre anteprime. Clicchi quella giusta e il componente entra nel modello. Lo segni con il cuore: la prossima volta lo trovi tra i preferiti.' }
    ],
    pros: ['Anteprime vere, non solo nomi di file', 'Inserimento con un clic', 'Tag, preferiti e ricerca', 'I file sul disco non vengono toccati'],
    solves: [
      { p: 'Trovare un componente tra centinaia di file obbliga ad aprirli uno a uno.', s: 'Le anteprime e i filtri lo mostrano subito.' },
      { p: 'Le librerie sparse in molte cartelle sono difficili da tenere in ordine.', s: 'Un unico pannello le raccoglie, ciascuna con il suo elenco.' }
    ],
    specs: [['Menu', 'Robo Tool › robo library explorer'], ['Barra strumenti', '1 pulsante'], ['File', '.skp (componenti) e .skm (materiali)'], ['Sicurezza', 'Elimina solo file dentro le cartelle di libreria, dopo conferma']]
  },

  /* ------------------------------------------------------------- PLACEMENT */
  {
    id: 'placement', name: 'robo placement', version: '0.9', category: 'Distribuzione', hue: 130,
    donationPrompt: true,
    video: 'BuxBGvKxEGM',
    images: ['assets/img/screenshots/placement-1.png', 'assets/img/screenshots/placement-2.png', 'assets/img/screenshots/placement-3.png', 'assets/img/screenshots/placement-4.png'],
    tagline: 'Distribuisci oggetti a caso su qualsiasi superficie.',
    simple: 'Scegli un oggetto (un albero, un sasso, un mobile) e una superficie: Robo ne dispone tante copie sparse in modo naturale, con scala e rotazione leggermente diverse per ogni copia.',
    intro: [
      'robo placement distribuisce molte copie di un oggetto su una superficie, in modo casuale e naturale. Scegli l\'oggetto e la superficie, regoli quantità e variazioni, e le copie vengono sparse da sole.',
      'Serve per riempire in fretta un terreno di alberi, cespugli o sassi, o per disporre elementi che non devono sembrare messi in fila. Ogni copia ha scala e rotazione leggermente diverse, così il risultato è credibile.'
    ],
    main: [
      { t: 'Su qualsiasi superficie', d: 'Funziona su facce piane, inclinate e su terreni irregolari.' },
      { t: 'Variazioni controllate', d: 'Imposti quantità, scala minima e massima e rotazione. Con lo stesso valore di partenza ottieni lo stesso risultato.' },
      { t: 'Copie che non si sovrappongono', d: 'Una distanza minima evita che gli oggetti si compenetrino, e puoi indicare zone da evitare.' },
      { t: 'Anteprima dal vivo', d: 'Vedi le copie sul modello mentre regoli i valori, e la geometria viene creata solo quando confermi.' }
    ],
    steps: ['Seleziona il componente o gruppo da distribuire.', 'Indica la faccia bersaglio e regola quantità, scala e rotazione.', 'Guarda l\'anteprima dal vivo e premi Applica.'],
    how: [
      { t: 'Il problema che risolve', d: 'Piazzare a mano decine di alberi, sassi o cespugli su un terreno è lungo, e il risultato viene quasi sempre troppo regolare. Le copie che si compenetrano rovinano il render. robo placement distribuisce fino a 1000 copie in una sola operazione, con variazioni casuali e senza sovrapposizioni.' },
      { t: 'Passo 1 · Scegli oggetto e superficie', d: 'Seleziona il componente o il gruppo da distribuire, poi indica la faccia bersaglio. Funziona su facce piane, inclinate e su mesh organiche: sceglie i punti sull\'intera superficie collegata, in proporzione alla sua area.' },
      { t: 'Passo 2 · Regola le variazioni', d: 'Imposti la quantità, da 1 a 1000, la scala minima e massima, la rotazione casuale sui tre assi e l\'allineamento alla normale della superficie. C\'è anche un "seme" (seed): con lo stesso seme ottieni sempre lo stesso risultato, cambiandolo ottieni una disposizione nuova.' },
      { t: 'Distanza minima e ostacoli', d: 'Un controllo anti-collisione sulle scatole di ingombro evita che le copie si sovrappongano; puoi anche indicare ostacoli da evitare, come un sentiero o una costruzione.' },
      { t: 'Passo 3 · Anteprima e applica', d: 'Vedi le copie disegnate sopra la vista mentre regoli i parametri, anche durante orbita e pan, senza creare geometria. Solo quando premi Applica le copie vengono create davvero; un solo Ctrl+Z le annulla tutte.' },
      { t: 'Un esempio concreto', d: 'Hai un terreno collinare e vuoi un boschetto di 150 pini. Selezioni il componente "Pino", indichi il terreno e imposti scala tra 80% e 120%, rotazione casuale e distanza minima 2 m. Guardi l\'anteprima: se non ti piace cambi il seme. Premi Applica e in un attimo hai un bosco naturale, già posato sul pendio.' }
    ],
    pros: ['Risultato naturale, non "a griglia"', 'Ripetibile grazie al seed', 'Anteprima prima di creare qualsiasi cosa', 'Funziona anche su terreni irregolari'],
    solves: [
      { p: 'Piazzare a mano decine di alberi o sassi è lungo e viene sempre troppo regolare.', s: 'Una sola operazione distribuisce fino a 1000 copie con variazioni casuali.' },
      { p: 'Le copie che si compenetrano rovinano il render.', s: 'La distanza minima le tiene separate.' }
    ],
    specs: [['Finestra', '400 × 567 px, espandibile'], ['Menu', 'Robo Tool › robo placement'], ['Quantità', '1 – 1000 copie'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* ----------------------------------------------------------------- PROXY */
  {
    id: 'proxy_manager', name: 'robo proxy manager', version: '0.6', category: 'Ottimizzazione', hue: 220,
    donationPrompt: true,
    video: 'ThxhD9J6eC0',
    images: ['assets/img/screenshots/proxy_manager-1.png', 'assets/img/screenshots/proxy_manager-2.png', 'assets/img/screenshots/proxy_manager-3.png', 'assets/img/screenshots/proxy_manager-4.png'],
    tagline: 'Sostituisci gli oggetti pesanti con proxy leggeri.',
    simple: 'Alberi, arredi e persone dettagliati rendono il modello lentissimo. Con Robo li sostituisci con "segnaposto" leggeri e li ritrovi identici quando ti servono, con un clic destro.',
    intro: [
      'robo proxy manager sostituisce gli oggetti molto pesanti, come alberi, persone e arredi dettagliati, con segnaposto leggeri chiamati proxy. L\'originale viene salvato in un file e resta sempre recuperabile.',
      'Serve per lavorare con fluidità nelle scene grandi: orbiti, fai zoom e disegni senza scatti. Quando ti serve il dettaglio, per esempio per il rendering, ripristini gli originali con un clic.'
    ],
    main: [
      { t: 'Due tipi di proxy', d: 'Una semplice scatola, la più leggera, oppure una versione semplificata che somiglia ancora alla forma reale.' },
      { t: 'L\'originale è al sicuro', d: 'Viene salvato su disco in una cartella dedicata: il modello si alleggerisce senza perdere nulla.' },
      { t: 'Ripristino quando serve', d: 'Torni all\'oggetto vero dal pannello o con il clic destro.' },
      { t: 'Elenco di tutti i proxy', d: 'Il Manager mostra i proxy del modello e segnala quelli con file mancanti o danneggiati, aiutandoti a ricollegarli.' }
    ],
    steps: ['Seleziona gli oggetti pesanti e scegli il tipo di proxy.', 'Robo salva l\'originale in un file esterno e mette al suo posto il proxy.', 'Gestisci o ripristina gli originali dal Proxy Manager o col clic destro.'],
    how: [
      { t: 'Il problema che risolve', d: 'Alberi, persone e arredi dettagliati possono avere centinaia di migliaia di facce ciascuno. In una scena con molti oggetti così, orbitare o fare zoom diventa impossibile. Cancellarli per alleggerire fa perdere il lavoro. robo proxy manager li sostituisce con segnaposto leggeri e conserva gli originali, che puoi riavere in qualsiasi momento.' },
      { t: 'Passo 1 · Seleziona e scegli il tipo', d: 'Seleziona gli oggetti pesanti e scegli il tipo di proxy. Il proxy a scatola (Bounding Box) è il più leggero: una semplice scatola delle stesse dimensioni. Il proxy Low Resolution mantiene una versione semplificata della forma reale, così riconosci ancora l\'oggetto.' },
      { t: 'Passo 2 · L\'originale viene messo al sicuro', d: 'Il plugin salva la geometria originale come file .skp nella cartella Robo_ProxyAssets, insieme alle informazioni per ritrovarla, e mette al suo posto il proxy. Il modello si alleggerisce senza perdere nulla.' },
      { t: 'Passo 3 · Ripristina quando serve', d: 'Con "Restore Proxy", dal pannello o dal clic destro sull\'oggetto, torni all\'originale. Nelle impostazioni scegli, tra l\'altro, se cancellare il file esterno dopo il ripristino.' },
      { t: 'Il pannello di controllo', d: 'Il Manager elenca tutti i proxy del modello. Se sposti o rinomini i file, segnala i proxy con stato ok, mancante o danneggiato e li ricollega.' },
      { t: 'Un esempio concreto', d: 'Hai una scena di giardino con 200 alberi dettagliati e SketchUp scatta a ogni movimento. Selezioni gli alberi e crei proxy a scatola: la scena ora scorre fluida e puoi lavorare sul progetto. Prima del render ripristini gli originali con un clic, oppure lasci i proxy Low Resolution per una resa intermedia.' }
    ],
    pros: ['Viewport fluido anche in scene enormi', 'File di modello molto più leggeri', 'Gli originali restano recuperabili', 'Elenco e controllo di tutti i proxy'],
    solves: [
      { p: 'Scene con vegetazione e arredi dettagliati sono impossibili da orbitare.', s: 'I proxy leggeri rendono la vista fluida; gli originali tornano per il render.' },
      { p: 'Cancellare gli oggetti per alleggerire fa perdere il lavoro.', s: 'L\'originale è salvato su disco e ripristinabile in ogni momento.' }
    ],
    specs: [['Finestre', 'Manager, Impostazioni, Low Resolution, Guida'], ['Menu', 'Robo Tool › robo proxy manager (6 voci)'], ['Barra strumenti', '6 pulsanti'], ['Cartella asset', 'Robo_ProxyAssets']]
  },

  /* ----------------------------------------------------------------- SCALE */
  {
    id: 'scale_definition', name: 'robo scale definition', version: '0.7', category: 'Organizzazione', hue: 24,
    donationPrompt: true,
    video: 'GI1vYGhCF_E',
    images: ['assets/img/screenshots/scale_definition-1.png', 'assets/img/screenshots/scale_definition-2.png', 'assets/img/screenshots/scale_definition-3.png'],
    tagline: 'Fissa la scala nella geometria e riporta tutto a 1.0.',
    simple: 'Se hai ingrandito o rimpicciolito un componente, SketchUp ricorda quel "fattore di scala" a parte. Robo lo incorpora nella geometria e riporta la scala a 1.0: dimensioni e materiali diventano corretti per il rendering.',
    intro: [
      'Quando ingrandisci o rimpicciolisci un gruppo o un componente, SketchUp non cambia la sua geometria: ricorda a parte un fattore di scala. robo scale definition incorpora quel fattore nella geometria e riporta la scala a 1.0.',
      'Serve per avere oggetti con dimensioni vere e materiali corretti, in particolare prima del rendering o dell\'esportazione. Le texture non risultano più stirate o fuori misura, e il lavoro si fa su tutta la selezione in una volta.'
    ],
    main: [
      { t: 'Scala riportata a 1.0', d: 'La dimensione diventa parte della forma, anche se la scala era diversa nei tre assi.' },
      { t: 'Texture corrette', d: 'Puoi far ricalcolare le texture perché non risultino deformate dopo la modifica.' },
      { t: 'Più oggetti insieme', d: 'Selezioni molti gruppi o componenti e li sistemi in un\'unica operazione, anche se annidati.' },
      { t: 'Le altre copie non cambiano', d: 'Ogni oggetto viene reso unico prima della modifica, così le copie con la stessa definizione restano intatte.' },
      { t: 'Riepilogo finale', d: 'Alla fine vedi cosa è stato fatto e cosa è stato saltato, con il motivo.' }
    ],
    steps: ['Seleziona uno o più gruppi o componenti.', 'Apri robo scale definition e scegli la modalità.', 'Clicca Applica: leggi il riepilogo dell\'operazione.'],
    how: [
      { t: 'Il problema che risolve', d: 'Quando ingrandisci o rimpicciolisci un gruppo o un componente, SketchUp non modifica la sua geometria: ricorda a parte un fattore di scala. Le dimensioni sembrano giuste, ma texture, misure e alcuni rendering risultano sbagliati. Il "Reset scala" nativo è limitato e non gestisce le texture. robo scale definition incorpora la scala nella geometria e la riporta a 1.0.' },
      { t: 'Passo 1 · Seleziona', d: 'Seleziona uno o più gruppi o componenti, anche tanti insieme e anche annidati. Gli elementi nidificati sono elaborati dal più interno al più esterno, così ogni livello viene sistemato una sola volta.' },
      { t: 'Passo 2 · Scegli la modalità', d: 'Apri robo scale definition e scegli tra tre modalità. "Solo scala" cambia la geometria e basta. "Scala + Tri-Planar World" riproietta le texture in coordinate globali. "Scala + Tri-Planar Fit" le riproietta in coordinate locali, così la texture segue l\'oggetto.' },
      { t: 'Cosa succede alla geometria', d: 'La scala visiva di ogni istanza, anche non uniforme, viene applicata ai punti della definizione e la trasformazione torna a 1.0. Prima di farlo le istanze vengono rese uniche, così le altre copie della stessa definizione non vengono toccate.' },
      { t: 'Passo 3 · Applica e leggi il riepilogo', d: 'Premi Applica: il lavoro avviene in blocco su tutta la selezione e un solo Ctrl+Z annulla tutto. Alla fine leggi un riepilogo di ciò che è stato fatto.' },
      { t: 'Casi speciali', d: 'Componenti dinamici, oggetti bloccati e riferimenti specchiati o deformati non vengono modificati: sono elencati a fine operazione con il motivo, così sai cosa è stato saltato e perché.' },
      { t: 'Un esempio concreto', d: 'Hai scaricato un tavolo e l\'hai ridimensionato a 180 cm trascinando le maniglie di scala. Nel render il legno appare stirato. Selezioni il tavolo, scegli "Scala + Tri-Planar Fit" e premi Applica: il tavolo ora ha scala 1.0, le sue misure sono vere e la texture del legno ha la proporzione giusta.' }
    ],
    pros: ['Batch su tutta la selezione', 'Materiali corretti grazie al tri-planare', 'Non tocca le altre copie della definizione', 'Elenca ciò che salta e perché'],
    solves: [
      { p: 'Componenti scalati possono dare texture e dimensioni sbagliate nel render.', s: 'Con scala 1.0 e geometria corretta il risultato è prevedibile.' },
      { p: 'Il "Reset scala" nativo è limitato e non gestisce le texture.', s: 'Robo lavora in blocco e riproietta le texture se lo chiedi.' }
    ],
    specs: [['Finestra', '340 × 490 px (guida 360 × 620)'], ['Menu', 'Robo Tool › robo scale definition'], ['Tolleranza', '0.0001'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* --------------------------------------------------------------- SECTION */
  {
    id: 'section', name: 'robo section', version: '1.2', category: 'Organizzazione', hue: 210,
    donationPrompt: true,
    video: 'KAbKr1Lui84',
    images: ['assets/img/screenshots/section-1.png', 'assets/img/screenshots/section-2.png', 'assets/img/screenshots/section-3.png', 'assets/img/screenshots/section-4.png', 'assets/img/screenshots/section-5.png'],
    tagline: 'Tutti i piani di sezione in un solo pannello.',
    simple: 'Nei modelli complessi i piani di sezione sono sparsi dentro gruppi e componenti. Robo li trova tutti, li mostra in un elenco e ti permette di attivarli, rinominarli, spostarli e collegarli alle scene.',
    intro: [
      'robo section è un pannello che raccoglie tutti i piani di sezione del modello in un elenco, anche quelli nascosti dentro gruppi e componenti. Da qui li gestisci senza doverli cercare.',
      'Serve per preparare tagli, prospetti e viste di sezione nei progetti complessi, dove i piani sono molti e sparsi. Attivi, rinomini e sposti i piani, e li colleghi alle scene perché ogni vista abbia la sua sezione.'
    ],
    main: [
      { t: 'Tutti i piani in una lista', d: 'Ogni piano compare con il suo nome e con il gruppo o componente in cui si trova.' },
      { t: 'Selezione nei due sensi', d: 'Selezioni una riga e il piano si seleziona nel modello, e viceversa.' },
      { t: 'Attiva e rinomina', d: 'Accendi o spegni i piani e dai loro nomi chiari, senza entrare nei gruppi.' },
      { t: 'Collegamento con le scene', d: 'Salvi lo stato delle sezioni nelle scene, lo copi da una all\'altra o lo applichi a tutte.' },
      { t: 'Isola in un gruppo sezionabile', d: 'Racchiudi gli oggetti in un gruppo che puoi tagliare senza toccare il resto.' }
    ],
    steps: ['Apri il pannello robo section: compare l\'elenco di tutti i piani.', 'Attiva, rinomina o seleziona un piano dalla lista.', 'Salva lo stato nelle scene, oppure isola gli oggetti in un gruppo sezionabile.'],
    how: [
      { t: 'Il problema che risolve', d: 'Nei modelli complessi i piani di sezione sono sparsi dentro gruppi e componenti annidati. Trovarli, attivarli o spegnerli significa entrare nei gruppi uno per uno, ed è facile dimenticarne qualcuno acceso. Ripetere la stessa sezione in più scene è laborioso. robo section li raccoglie tutti in un unico pannello.' },
      { t: 'Passo 1 · Apri il pannello', d: 'Apri robo section: il plugin percorre il modello e tutti i gruppi e componenti annidati, e raccoglie ogni piano di sezione con il suo nome, il contesto in cui si trova e lo stato attivo. Compare un elenco completo, senza che tu debba entrare in nessun gruppo.' },
      { t: 'Passo 2 · Gestisci i piani', d: 'Dall\'elenco attivi, rinomini e selezioni i piani. La selezione funziona nei due sensi: scegli una riga e il piano si seleziona nel modello, scegli un piano nel modello e la riga si evidenzia.' },
      { t: 'Sposta e isola', d: 'Puoi spostare i piani in un altro contesto mantenendo posizione e orientamento. Oppure avvolgi la selezione in un gruppo sezionabile: gli oggetti vengono isolati in un gruppo che puoi tagliare senza toccare il resto del modello.' },
      { t: 'Collegamento con le scene', d: 'Lo stato dei piani può essere salvato nelle scene, copiato da una scena all\'altra o applicato a tutte, così ogni vista ha la sua sezione e non devi riattivare i piani a mano ogni volta.' },
      { t: 'Un esempio concreto', d: 'Hai un edificio con 12 piani di sezione sparsi nei gruppi dei vari piani, e devi preparare tre scene: pianta, sezione A e sezione B. Apri robo section e vedi tutti i piani con i loro nomi. Attivi solo quelli della sezione A, salvi lo stato nella scena "Sezione A", poi fai lo stesso con la B. Le scene si richiamano con un clic, senza più entrare nei gruppi.' }
    ],
    pros: ['Panoramica di tutti i piani', 'Gestione senza entrare nei gruppi', 'Sezioni collegate alle scene', 'Isolamento in un clic'],
    solves: [
      { p: 'Trovare un piano di sezione dentro gruppi annidati è una caccia al tesoro.', s: 'La scansione li elenca tutti, con il loro contesto.' },
      { p: 'Ripetere la stessa sezione in più scene è laborioso.', s: 'Copi o applichi lo stato a tutte le scene.' }
    ],
    specs: [['Finestra', 'Pannello di controllo + guida'], ['Menu', 'Robo Tool › robo section'], ['Barra strumenti', '2 pulsanti (gestione, isola)'], ['Annullamento', 'Operazioni annullabili']]
  },

  /* --------------------------------------------------------------- SPACING */
  {
    id: 'spacing_tool', name: 'robo spacing tool', version: '1.2', category: 'Distribuzione', hue: 268,
    donationPrompt: true,
    video: 'mMk6vg4fEns',
    images: ['assets/img/screenshots/spacing_tool-1.png', 'assets/img/screenshots/spacing_tool-2.png', 'assets/img/screenshots/spacing_tool-3.png', 'assets/img/screenshots/spacing_tool-4.png', 'assets/img/screenshots/spacing_tool-5.png', 'assets/img/screenshots/spacing_tool-6.png', 'assets/img/screenshots/spacing_tool-7.png', 'assets/img/screenshots/spacing_tool-8.png', 'assets/img/screenshots/spacing_tool-9.png', 'assets/img/screenshots/spacing_tool-10.png', 'assets/img/screenshots/spacing_tool-11.png', 'assets/img/screenshots/spacing_tool-12.png'],
    tagline: 'Copie perfettamente spaziate lungo una linea o una curva.',
    simple: 'Scegli un oggetto e un percorso (una linea, un arco, una curva anche chiusa): Robo mette le copie a distanza regolare lungo il percorso, come lampioni lungo una strada o sedie attorno a un tavolo.',
    intro: [
      'robo spacing tool crea copie di un oggetto lungo una linea, un arco o una curva, a distanza regolare. Scegli l\'oggetto e il percorso e le copie si dispongono da sole, senza misurare né copiare a mano.',
      'Serve per tutto ciò che si ripete con ordine: lampioni lungo una strada, pali di una recinzione, alberi di un viale, sedie attorno a un tavolo. Se cambi idea sul numero o sulla distanza, aggiorni il valore e rivedi subito il risultato.'
    ],
    main: [
      { t: 'Numero o distanza', d: 'Scegli quante copie vuoi, equidistanti, oppure un passo fisso, per esempio una ogni metro.' },
      { t: 'Linee, curve e anelli', d: 'Il percorso può essere un segmento, una curva o una forma chiusa come un cerchio.' },
      { t: 'Rotazione e scala', d: 'Le copie possono ruotare e cambiare dimensione, in modo casuale o crescente lungo il percorso.' },
      { t: 'Anteprima prima di confermare', d: 'Vedi dove andranno le copie e in che direzione, e modifichi i valori fino al risultato voluto.' }
    ],
    steps: ['Seleziona l\'oggetto e il percorso (le linee).', 'Scegli "Numero" di copie oppure "Distanza" fissa.', 'Regola rotazione e scala, guarda l\'anteprima e conferma.'],
    how: [
      { t: 'Il problema che risolve', d: 'Copiare e posizionare a mano oggetti lungo una curva dà distanze irregolari, e se cambi idea sul numero di copie devi rifare tutto. robo spacing tool calcola i punti lungo il percorso con precisione, e se modifichi un valore l\'anteprima si aggiorna subito.' },
      { t: 'Passo 1 · Scegli oggetto e percorso', d: 'Seleziona l\'oggetto da copiare e il percorso, cioè le linee. Il percorso può essere un segmento, un arco, una curva, anche chiusa ad anello. Con "Linea intera" la selezione si estende a tutta la catena di segmenti collegati.' },
      { t: 'Passo 2 · Numero o distanza', d: 'Con "Numero" ottieni N copie equidistanti lungo il percorso. Con "Distanza" ottieni un passo fisso, per esempio 100 cm tra una copia e l\'altra. Puoi impostare anche uno scarto iniziale e finale.' },
      { t: 'Rotazione e scala', d: 'Rotazione e scala possono essere casuali oppure progressive, cioè crescono o diminuiscono con gradualità lungo il percorso. Puoi scegliere l\'asse di inserimento e mantenere la verticale rispetto al mondo.' },
      { t: 'Passo 3 · Anteprima e conferma', d: 'L\'anteprima mostra i contorni degli oggetti e frecce di direzione. Per non rallentare, limita automaticamente il numero di copie disegnate. La finestra non è modale: resta aperta mentre lavori. Un solo Ctrl+Z annulla tutto.' },
      { t: 'Un esempio concreto', d: 'Devi mettere un lampione ogni 12 metri lungo una strada curva. Selezioni il lampione e la linea dell\'asse stradale, scegli "Distanza" e scrivi 12 m. Vedi l\'anteprima con le frecce di direzione, ruoti i lampioni verso la strada e confermi. Se poi il committente chiede 15 metri, annulli e rifai in dieci secondi.' }
    ],
    pros: ['Spaziatura regolare e ripetibile', 'Funziona su curve e anelli chiusi', 'Rotazione e scala progressive', 'Finestra non modale, sempre a portata'],
    solves: [
      { p: 'Copiare e posizionare a mano oggetti lungo una curva dà distanze irregolari.', s: 'Robo calcola i punti lungo il percorso con precisione.' },
      { p: 'Cambiare il numero di copie significa rifare tutto.', s: 'Modifichi il valore e l\'anteprima si aggiorna.' }
    ],
    specs: [['Finestra', '500 × 640 px, non modale'], ['Menu', 'Robo Tool › robo spacing tool'], ['Modalità', 'Numero / Distanza'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* ---------------------------------------------------------------- STANDARD */
  {
    id: 'standard', name: 'robo standard', version: '1.1', category: 'Produttività', hue: 100,
    donationPrompt: true,
    tagline: 'I comandi di tutti i giorni in una barra con icone Robo.',
    simple: 'Nuovo, Apri, Salva, Taglia, Copia, Incolla, Annulla… i comandi più usati di SketchUp riuniti in una sola barra, con icone chiare e nello stile Robo.',
    intro: [
      'robo standard è una barra degli strumenti con i comandi che usi più spesso: Nuovo, Apri, Salva, Taglia, Copia, Incolla, Annulla e Ripristina. Hanno icone chiare, nello stesso stile degli altri plugin Robo.',
      'Serve a non cercare i comandi di base tra i menu. Include anche due funzioni utili, Incolla sul posto ed Elimina, ciascuna in un solo pulsante.'
    ],
    main: [
      { t: 'Comandi di base a portata di clic', d: 'File, appunti e modifica, riuniti in una sola barra e divisi in gruppi.' },
      { t: 'Incolla sul posto', d: 'Incolla gli oggetti esattamente dove si trovavano, in un unico passo annullabile.' },
      { t: 'Elimina la selezione', d: 'Cancella gli oggetti selezionati con un pulsante.' },
      { t: 'Anche nel menu', d: 'Gli stessi comandi sono in Estensioni › Robo Tool, con la loro icona.' }
    ],
    steps: ['Attiva la barra "robo standard" da Vista › Barre degli strumenti.', 'Usa i pulsanti al posto dei menu.', 'Gli stessi comandi sono anche in Estensioni › Robo Tool › robo standard.'],
    how: [
      { t: 'Il problema che risolve', d: 'I comandi più usati di SketchUp, come Nuovo, Apri, Salva o Incolla, sono sparsi tra menu e barre diverse, e alcune azioni utili, come incollare nella posizione originale, richiedono di cercare la voce giusta ogni volta. robo standard li riunisce in una sola barra, con icone chiare e nello stile Robo.' },
      { t: 'Passo 1 · Attiva la barra', d: 'Dal menu Vista › Barre degli strumenti attiva "robo standard". Gli stessi comandi sono anche in Estensioni › Robo Tool › robo standard, ciascuno con la sua icona.' },
      { t: 'Passo 2 · Usa i pulsanti', d: 'I pulsanti sono divisi in quattro gruppi, File, Appunti, Modifica e altri, e nella barra di stato compare la scorciatoia abituale di ogni comando. Nuovo, Apri, Taglia, Copia e Incolla richiamano le azioni di SketchUp; Salva e Salva con nome usano le finestre standard.' },
      { t: 'Incolla sul posto', d: 'Incolla gli oggetti esattamente nella loro posizione originale, sia su Windows sia su macOS, in un\'unica operazione annullabile. È utile per spostare oggetti da un file all\'altro senza perdere le coordinate.' },
      { t: 'Elimina la selezione', d: 'Cancella gli oggetti selezionati in un solo passo, annullabile con un Ctrl+Z.' },
      { t: 'Un esempio concreto', d: 'Devi copiare un arredo da un file a un altro mantenendo la posizione. Selezioni l\'oggetto, premi Copia nella barra; apri l\'altro file con il pulsante Apri e premi Incolla sul posto: l\'oggetto compare esattamente alle stesse coordinate, senza dover cercare il comando nei menu.' }
    ],
    pros: ['Tutti i comandi base a portata di clic', 'Icone coerenti con il resto di Robo Tools', 'Incolla sul posto incluso', 'Voci anche nel menu, con icona'],
    solves: [
      { p: 'I comandi base sono sparsi tra menu e barre diverse.', s: 'Una sola barra con tutto quello che serve.' },
      { p: 'Incollare nella posizione originale richiede di cercare il comando nei menu.', s: 'Un pulsante dedicato.' }
    ],
    specs: [['Menu', 'Robo Tool › robo standard (11 voci)'], ['Barra strumenti', '11 pulsanti in 4 gruppi'], ['Comandi', 'Nuovo, Apri, Salva, Salva con nome, Taglia, Copia, Incolla, Incolla sul posto, Elimina, Annulla, Ripristina'], ['Annullamento', 'Un solo Ctrl+Z per azione']],
    images: ['assets/img/screenshots/standard-1.png']
  },

  /* ----------------------------------------------------------------- START */
  {
    id: 'start', name: 'robo start', version: '1.0', category: 'Produttività', hue: 350,
    donationPrompt: true,
    tagline: 'Oltre 20 comandi rapidi in un\'unica barra.',
    simple: 'Una barra con le operazioni di ogni giorno: crea gruppi e componenti, seleziona, nascondi, cancella guide e quote. Ogni pulsante ha una sua icona e una scorciatoia da tastiera. Dalle Impostazioni puoi anche abilitare o disabilitare i singoli pulsanti che vuoi vedere nella barra.',
    intro: [
      'robo start è una barra con oltre venti comandi rapidi per le operazioni di ogni giorno: creare gruppi e componenti, esplodere, selezionare, nascondere, togliere guide e quote, fare zoom. Ogni pulsante ha la sua icona e una scorciatoia da tastiera.',
      'Serve a velocizzare i gesti che ripeti di continuo, evitando menu e clic destro. Se una parte della barra non ti serve, dalle Impostazioni nascondi i pulsanti che non usi.'
    ],
    main: [
      { t: 'Venti comandi in una barra', d: 'Gruppi e componenti, selezione, visibilità, guide e quote, zoom e altro ancora, divisi per tipo.' },
      { t: 'Scorciatoie da tastiera', d: 'Ogni comando ha la sua scorciatoia, e l\'elenco completo si apre con un pulsante.' },
      { t: 'Barra su misura', d: 'Scegli dalle Impostazioni quali pulsanti mostrare: la scelta viene ricordata.' },
      { t: 'Annullabile con Ctrl+Z', d: 'Ogni azione sul modello è un\'unica operazione, quindi puoi tornare indietro con un solo passo.' }
    ],
    steps: ['Attiva la barra "robo start" da Vista › Barre degli strumenti.', 'Usa i pulsanti o le scorciatoie da tastiera.', 'Da Impostazioni scegli quali pulsanti mostrare.'],
    how: [
      { t: 'Il problema che risolve', d: 'Molte operazioni di ogni giorno, come creare un gruppo, esplodere, nascondere, cancellare guide e quote, richiedono menu o clic destro ogni volta. Rimuovere guide o quote sparse nel modello è noioso. robo start le mette in un\'unica barra, con un pulsante e una scorciatoia per ciascuna.' },
      { t: 'Passo 1 · Attiva la barra', d: 'Dal menu Vista › Barre degli strumenti attiva "robo start". La barra contiene oltre venti comandi, ognuno con la sua icona.' },
      { t: 'I comandi, raggruppati', d: 'Gruppi e componenti, esplosione, selezione (tutto, inverti, deseleziona), visibilità, guide e quote, zoom e ricerca del centro: ogni funzione è un pulsante. Un solo pulsante rimuove tutte le guide, un altro tutte le quote.' },
      { t: 'Passo 2 · Usa i pulsanti o le scorciatoie', d: 'Ogni comando ha una scorciatoia da tastiera. La Shortcut List le mostra tutte in una finestra con l\'elenco dei comandi, e nel codice puoi cambiarle.' },
      { t: 'Passo 3 · Personalizza la barra', d: 'Da Impostazioni scegli quali pulsanti mostrare e nascondi quelli che non usi. La scelta viene ricordata alla prossima apertura.' },
      { t: 'Operazioni sicure', d: 'Ogni azione sul modello è un\'unica operazione: se qualcosa non ti piace, un Ctrl+Z la annulla.' },
      { t: 'Un esempio concreto', d: 'Hai importato una planimetria piena di guide e quote che ti disturbano. Invece di cercarle una a una, premi il pulsante che le rimuove tutte. Poi selezioni dei profili, premi il pulsante Crea gruppo e continui a lavorare senza aprire un solo menu. Se non usi le quote, dalle Impostazioni nascondi i pulsanti relativi e la barra resta più corta.' }
    ],
    pros: ['Tutto a portata di clic', 'Scorciatoie coerenti', 'Barra personalizzabile', 'Guida integrata con l\'elenco dei comandi'],
    solves: [
      { p: 'Le operazioni ripetitive richiedono menu e clic destro ogni volta.', s: 'Un pulsante, o una scorciatoia, per ciascuna.' },
      { p: 'Rimuovere guide o quote sparse nel modello è noioso.', s: 'Un pulsante le rimuove tutte.' }
    ],
    specs: [['Menu', 'Robo Tool › robo start (Elenco scorciatoie, Impostazioni, Guida)'], ['Barra strumenti', 'robo start, personalizzabile'], ['Guida', 'Finestra con elenco comandi'], ['Annullamento', 'Un solo Ctrl+Z per azione']],
    images: ['assets/img/screenshots/start-1.png']
  },

  /* --------------------------------------------------------------- TANGENT */
  {
    id: 'tangent', name: 'robo tangent', version: '1.2', category: 'Modellazione', hue: 160,
    donationPrompt: true,
    video: 'RsSOjk3k7NE',
    images: ['assets/img/screenshots/tangent-8.png'],
    tagline: 'La tangente esatta tra archi, cerchi e segmenti.',
    simple: 'Clicca due cerchi (o un cerchio e una linea) e lo strumento disegna la linea che li tocca esattamente in un punto ciascuno. Vedi le possibilità in anteprima e scegli quella che ti serve muovendo il mouse.',
    intro: [
      'robo tangent disegna la linea tangente tra due cerchi o archi, oppure tra un cerchio e una linea. La tangente è la linea che sfiora la curva in un solo punto, senza attraversarla.',
      'Serve nel disegno di profili, ingranaggi, pulegge, cinghie, tracciati stradali e in ogni forma dove una linea deve raccordarsi a una curva con precisione. Con i soli strumenti di SketchUp non è possibile trovare quel punto esatto.'
    ],
    main: [
      { t: 'Calcolo esatto', d: 'Il punto di contatto viene calcolato con la geometria, non a occhio.' },
      { t: 'Tutte le soluzioni in anteprima', d: 'Tra due cerchi esistono fino a quattro tangenti possibili: le vedi e scegli quella giusta muovendo il mouse.' },
      { t: 'Protezione dagli errori', d: 'Se i due elementi non sono sullo stesso piano, lo strumento lo segnala invece di disegnare una linea sbagliata.' },
      { t: 'Precisione a scelta', d: 'Puoi usare il punto esatto oppure agganciare il vertice reale della curva, utile quando il cerchio è fatto di segmenti.' }
    ],
    steps: ['Attiva robo tangent: passa sopra gli elementi, si illuminano di giallo.', 'Clicca il primo (rosso) e il secondo elemento (blu).', 'Muovi il mouse per scegliere la tangente verde e clicca per disegnarla.'],
    how: [
      { t: 'Il problema che risolve', d: 'Una tangente è la linea che sfiora una curva in un solo punto, senza attraversarla. Con le sole inferenze di SketchUp è impossibile trovarla esattamente tra due cerchi. Inoltre le curve di SketchUp sono poligoni: una tangente "esatta" può non toccare mai la curva. robo tangent calcola il punto di tangenza per te.' },
      { t: 'Passo 1 · Scegli i due elementi', d: 'Attiva robo tangent e passa sopra gli elementi: si illuminano di giallo. Clicca il primo (diventa rosso) e il secondo (diventa blu). Possono essere due cerchi, due archi, oppure un cerchio e un segmento.' },
      { t: 'Calcolo con la geometria', d: 'Le tangenti sono calcolate analiticamente, non "a occhio". Per due cerchi esistono fino a quattro soluzioni: due esterne e due interne. Per un cerchio e un segmento se ne trovano due per ogni estremo.' },
      { t: 'Passo 2 · Scegli la tangente in anteprima', d: 'Le soluzioni possibili compaiono in anteprima: quella più vicina al cursore è verde, le altre restano grigie e tratteggiate. Muovendo il mouse scegli quella che ti serve.' },
      { t: 'Passo 3 · Clicca per disegnare', d: 'Un clic disegna la linea e lo strumento riparte da capo, pronto per la coppia successiva. ESC annulla la scelta in corso; Ctrl+Z toglie l\'ultima linea disegnata.' },
      { t: 'Protezione dai casi impossibili', d: 'Se i due elementi non stanno sullo stesso piano, la coppia viene rifiutata invece di produrre una linea sbagliata.' },
      { t: 'Precisione a scelta', d: 'Da Impostazioni scegli tra "Esatta", il punto matematico, e "Arrotondata", in cui la linea tocca il vertice reale della curva poligonale: utile con cerchi fatti di segmenti, perché la linea tocca davvero la curva.' },
      { t: 'Un esempio concreto', d: 'Devi disegnare la cinghia che collega due pulegge di diametro diverso. Attivi robo tangent, clicchi la prima puleggia e poi la seconda: compaiono le quattro tangenti possibili. Muovi il mouse verso quella esterna superiore, che diventa verde, e clicchi. Ripeti per la tangente inferiore: la cinghia è completa e le linee toccano davvero i cerchi.' }
    ],
    pros: ['Tangenti esatte, senza tentativi', 'Vedi tutte le soluzioni prima di scegliere', 'Rifiuta i casi non validi', 'Modalità che agganciano davvero la curva'],
    solves: [
      { p: 'Disegnare a mano una tangente comune non è possibile con le sole inferenze di SketchUp.', s: 'Il punto di tangenza viene calcolato per te.' },
      { p: 'Le curve di SketchUp sono poligoni: una tangente "esatta" può non toccare mai la curva.', s: 'La modalità Arrotondata aggancia il vertice più vicino, così la linea tocca davvero.' }
    ],
    specs: [['Menu', 'Robo Tool › robo tangent (+ Impostazioni)'], ['Soluzioni', '2 – 4 candidate'], ['Precisione', 'Esatta / Arrotondata'], ['Annullamento', 'ESC annulla, Ctrl+Z toglie l\'ultima linea']]
  },

  /* --------------------------------------------------------------- UPLEVEL */
  {
    id: 'uplevel', name: 'robo uplevel', version: '1.0', category: 'Produttività', hue: 45,
    donationPrompt: true,
    video: 'whuBMKHEvjE',
    tagline: 'Porta gli oggetti fuori dal gruppo, senza spostarli.',
    simple: 'Sei dentro un gruppo o un componente e vuoi tirare fuori alcuni oggetti al livello superiore, restando esattamente dove sono. Un clic e li sposta nella gerarchia senza cambiarne la posizione.',
    intro: [
      'robo uplevel porta degli oggetti fuori dal gruppo o dal componente in cui si trovano, di un livello verso l\'alto, senza spostarli nello spazio. Rimangono esattamente dove sono: cambia solo la loro posizione nella gerarchia.',
      'Serve quando, lavorando dentro un gruppo, ti accorgi che alcuni elementi devono stare fuori. Il metodo normale, taglia e incolla sul posto, richiede più passaggi e può sbagliare livello nei gruppi annidati.'
    ],
    main: [
      { t: 'Un clic, un livello più su', d: 'Selezioni gli oggetti dentro il gruppo, premi il pulsante e passano al contenitore superiore.' },
      { t: 'Nessuno spostamento', d: 'La posizione, la rotazione e la scala degli oggetti restano identiche.' },
      { t: 'Funziona anche nei gruppi annidati', d: 'Sai sempre dove finiscono gli oggetti: un livello alla volta.' },
      { t: 'Un solo Ctrl+Z', d: 'Se qualcosa non va, annulli tutto in un passo.' }
    ],
    steps: ['Entra nel gruppo o componente e seleziona gli oggetti.', 'Premi il pulsante robo uplevel.', 'Gli oggetti passano al livello superiore, nella stessa posizione.'],
    how: [
      { t: 'Il problema che risolve', d: 'Quando sei dentro un gruppo e ti accorgi che alcuni elementi devono stare fuori, il metodo normale è taglia, esci e "incolla sul posto". Sono più passaggi, e con più livelli annidati è facile sbagliare livello o spostare gli oggetti. robo uplevel li porta al livello superiore con un clic, restando esattamente dove sono.' },
      { t: 'Passo 1 · Entra e seleziona', d: 'Entra nel gruppo o nel componente per la modifica e seleziona gli oggetti da portare fuori. Se non sei dentro un gruppo, o non hai selezionato nulla, un messaggio te lo spiega.' },
      { t: 'Passo 2 · Premi il pulsante', d: 'Premi robo uplevel (anche disponibile in robo start). Il comando parte dal gruppo o componente aperto e porta gli oggetti nel contenitore che lo contiene o, se è il livello più alto, nel modello.' },
      { t: 'Come mantiene la posizione', d: 'Gli oggetti passano per un contenitore temporaneo che compone la trasformazione del livello interno con quella del livello esterno. Il contenitore viene poi esploso: nessuna geometria si sposta, né in posizione, né in rotazione, né in scala.' },
      { t: 'Un livello alla volta', d: 'Gli oggetti salgono sempre esattamente di un livello. Con più livelli annidati sai così dove finiscono, e puoi ripetere il comando per salire ancora.' },
      { t: 'Un solo annullamento', d: 'L\'intera operazione è racchiusa in un unico passo: un Ctrl+Z la annulla e, in caso di errore, tutto torna come prima.' },
      { t: 'Un esempio concreto', d: 'Stai lavorando dentro il gruppo "Cucina" e noti che il lavello, modellato lì dentro, in realtà va tenuto come oggetto a sé nel gruppo "Casa". Lo selezioni, premi robo uplevel: il lavello esce di un livello, restando nella stessa identica posizione. Prima servivano taglia, esci e incolla sul posto, con il rischio di sbagliare.' }
    ],
    pros: ['Sposta di livello senza spostare nello spazio', 'Un clic al posto di taglia e "incolla sul posto"', 'Annullabile con un solo Ctrl+Z', 'Disponibile anche in robo start'],
    solves: [
      { p: 'Estrarre oggetti da un gruppo con taglia e incolla rischia di spostarli o di sbagliare livello.', s: 'La trasformazione viene compensata automaticamente.' },
      { p: 'Con più livelli annidati non è chiaro dove finiscono gli oggetti.', s: 'Vanno sempre esattamente un livello più in alto.' }
    ],
    specs: [['Comando', 'Estrai al Livello Superiore'], ['Barra strumenti', '1 pulsante'], ['Livelli', 'Un livello alla volta'], ['Annullamento', 'Un solo Ctrl+Z']],
    images: ['assets/img/screenshots/uplevel-1.png', 'assets/img/screenshots/uplevel-2.png']
  },

  /* --------------------------------------------------------------- TOOLBAR */
  {
    id: 'toolbar', name: 'robo toolbar', version: '1.0', category: 'Produttività', hue: 270,
    noDownload: true,
    video: 'hBBJ5wyCEUQ',
    images: ['assets/img/screenshots/toolbar-1.png', 'assets/img/screenshots/toolbar-2.png'],
    tagline: 'Costruisci le tue barre degli strumenti, trascinando i comandi.',
    simple: 'Scegli i comandi che usi di più — gli strumenti di SketchUp, i pulsanti dei plugin Robo e le voci del menu Estensioni — e trascinali in una barra tutta tua. Dai un nome alla barra, salvala e la ritrovi in SketchUp, sempre pronta.',
    intro: [
      'robo toolbar ti permette di creare le tue barre degli strumenti di SketchUp. Apri la finestra, trascini i comandi che ti servono nell’anteprima della barra, li riordini, scrivi il nome e salvi: la barra compare subito in SketchUp.',
      'Serve quando i pulsanti che usi ogni giorno sono sparsi in tante barre e menu. Con robo toolbar li raccogli tutti in un punto solo, nell’ordine che preferisci, e puoi creare quante barre vuoi, una per ogni tipo di lavoro.'
    ],
    main: [
      { t: 'Trascina e riordina', d: 'Trascini i comandi nell’anteprima della barra, li sposti per cambiarne l’ordine e li togli con la x rossa. In alternativa clicchi il + accanto al comando.' },
      { t: 'Tutti i comandi in un elenco', d: 'Gli strumenti di SketchUp, i comandi dei plugin Robo e le voci del menu Estensioni sono in un unico elenco, con filtro per plugin, campo di ricerca e scorciatoie da tastiera.' },
      { t: 'Anche le voci senza icona', d: 'I comandi che non hanno un’icona compaiono con un’icona generica grigia. Puoi sostituirla con la tua: due immagini PNG da 16 e 24 pixel, oppure un solo file SVG.' },
      { t: 'Linee di separazione', d: 'Con “Inserisci separatore” aggiungi una linea verticale tra i pulsanti, per raggrupparli come nelle barre di SketchUp.' },
      { t: 'Barre salvate, modificabili', d: 'Nell’elenco “Le mie barre” puoi modificare, mostrare o eliminare ogni barra. Se hai modifiche non salvate, il plugin te lo ricorda prima di passare a un’altra barra.' },
      { t: 'Backup e ripristino', d: 'Con “Esporta backup” salvi tutte le barre (e le icone personalizzate) in un file; con “Importa backup” le ripristini, anche su un altro SketchUp.' },
      { t: 'Avviso sui comandi spariti', d: 'Se il plugin di un pulsante viene eliminato, il pulsante diventa rosso con un crocino bianco e un messaggio ti spiega cosa è successo; lo togli quando vuoi.' },
      { t: 'In cinque lingue', d: 'Finestra, messaggi e guida sono in italiano, inglese, tedesco, francese e spagnolo.' }
    ],
    steps: ['Apri robo toolbar dal menu Estensioni › Robo Tool.', 'Trascina i comandi nell’anteprima della barra e riordinali.', 'Scrivi il nome della barra e premi Salva barra: compare subito in SketchUp.'],
    how: [
      { t: 'Il problema che risolve', d: 'In SketchUp i comandi che usi di continuo sono sparsi in molte barre e in menu annidati, e le barre standard non si possono ricomporre a piacere. robo toolbar ti dà una barra costruita su misura, con solo ciò che serve a te.' },
      { t: 'Passo 1 · Scegli i comandi', d: 'A sinistra trovi l’elenco di tutti i comandi disponibili. Con il menu in alto filtri per plugin, oppure scegli “Solo plugin senza icone” o “Solo plugin con icone”; la voce Scorciatoie mostra solo i comandi che hanno una scorciatoia da tastiera. Il campo di ricerca cerca per nome.' },
      { t: 'Passo 2 · Componi la barra', d: 'Trascina i comandi nell’anteprima, oppure clicca il + accanto al comando. Per cambiare l’ordine trascina le icone già inserite, per toglierne una clicca la x rossa che compare al passaggio del mouse. “Inserisci separatore” aggiunge una linea verticale a destra dell’ultima icona; puoi anche trascinarla tra due icone.' },
      { t: 'Passo 3 · Salva', d: 'Scrivi il nome della barra e premi Salva barra. Una barra nuova compare subito in SketchUp. Le modifiche a una barra già esistente (icone tolte, aggiunte o riordinate) si vedono al prossimo avvio di SketchUp, perché SketchUp non può togliere pulsanti da una barra già aperta.' },
      { t: 'Icone generiche: come cambiarle', d: 'I comandi senza icona hanno un’icona generica grigia con un crocino rosso. Passandoci sopra nell’anteprima compare un contorno rosso con una matita: cliccala. Scegli prima un’immagine da 16 × 16 pixel, poi una da 24 × 24 (PNG, JPG o BMP), oppure un solo file SVG, nel qual caso la seconda non serve. Se l’immagine non ha la misura giusta, un messaggio ti dice quanto è grande e quanto serve, e puoi riprovare. L’icona resta legata a quel comando in tutte le barre.' },
      { t: 'Le mie barre e le modifiche non salvate', d: 'In basso trovi le barre salvate, con i pulsanti Modifica, Mostra ed Elimina (per eliminare si clicca due volte). Se premi Modifica su un’altra barra mentre hai modifiche non salvate, una finestra ti chiede se vuoi salvarle: Sì le salva e apre l’altra barra, No le scarta, Annulla ti lascia dove sei.' },
      { t: 'Backup delle barre', d: 'In alto trovi Esporta backup e Importa backup. Esporta salva in un unico file .json tutte le barre e le icone personalizzate che hai scelto: serve come copia di sicurezza o per portare le barre su un altro computer. Importa legge il file e ricrea le barre: quelle nuove compaiono subito; se ne esiste già una con lo stesso nome, una finestra chiede se sostituirla (Sì), tenere l’attuale (No) o interrompere (Annulla). I pulsanti ritrovano i comandi per nome, quindi sull’altro computer servono gli stessi plugin.' },
      { t: 'L’icona grigia e l’icona rossa', d: 'L’icona grigia con il crocino rosso indica un comando senza icona propria, che puoi sostituire con la tua. L’icona rossa con il crocino bianco indica un comando non più disponibile, perché il suo plugin è stato eliminato o non è installato: il controllo avviene a ogni avvio di SketchUp e ogni volta che apri la finestra. Nella barra di SketchUp il pulsante rosso mostra un messaggio; nella finestra lo togli con la x rossa.' },
      { t: 'Un esempio concreto', d: 'Lavori spesso con linea, rettangolo, sposta, ruota, scala e hai due plugin Robo che usi di continuo. Apri robo toolbar, li trascini in una barra chiamata “Modellazione”, metti un separatore tra gli strumenti di SketchUp e quelli dei plugin e salvi. Da quel momento hai tutto sotto mano in una sola barra, nell’ordine che hai deciso.' }
    ],
    pros: ['Barre su misura, quante ne vuoi', 'Strumenti SketchUp e plugin Robo nello stesso elenco', 'Icone personalizzabili (PNG o SVG)', 'Avviso se hai modifiche non salvate', 'Backup e ripristino anche su un altro SketchUp'],
    solves: [
      { p: 'I comandi che usi più spesso sono sparsi in tante barre e menu.', s: 'Li raccogli in una sola barra, nell’ordine che preferisci.' },
      { p: 'Alcuni comandi dei plugin non hanno un’icona da mettere in una barra.', s: 'Ricevono un’icona generica che puoi sostituire con la tua.' }
    ],
    specs: [['Finestra', '900 × 600 px, ridimensionabile'], ['Menu', 'Robo Tool › robo toolbar'], ['Icone personalizzate', 'PNG 16 e 24 px, oppure SVG'], ['Backup', 'File .json con barre e icone personalizzate'], ['Lingue', 'Italiano, English, Deutsch, Français, Español']]
  }
];

/* Elenco dei plugin sempre in ordine alfabetico (per nome, senza distinguere maiuscole). */
PLUGINS.sort(function (x, y) { return x.name.toLowerCase().localeCompare(y.name.toLowerCase()); });

/* ------------------------------------------------------------------
   Barre strumenti mostrate nelle schede (icone reali dei plugin,
   copiate in assets/img/toolbar/<id>/). Ogni gruppo = un blocco di
   pulsanti separato da una linea, come in SketchUp.
   ------------------------------------------------------------------ */
var TOOLBARS = {
  baseform: { name: 'robo baseform', groups: [[{ i: 'cube.png', l: 'robo baseform: crea un oggetto 3D' }]],
    shapesTitle: 'I 7 oggetti che puoi creare',
    shapes: [
      { i: 'shape_cube.svg', l: 'Cubo', d: 'Cubo o parallelepipedo: X, Y, Z collegabili.' },
      { i: 'shape_cylinder.svg', l: 'Cilindro', d: 'Raggio, altezza e numero di segmenti.' },
      { i: 'shape_cone.svg', l: 'Cono', d: 'Base circolare che termina in un punto.' },
      { i: 'shape_frustum.svg', l: 'Tronco di cono', d: 'Cono con raggio di base e raggio superiore.' },
      { i: 'shape_uvsphere.svg', l: 'UV Sphere', d: 'Sfera a meridiani e paralleli.' },
      { i: 'shape_icosphere.svg', l: 'Icosphere', d: 'Sfera a triangoli, con suddivisioni 0–4.' },
      { i: 'shape_torus.svg', l: 'Toro', d: 'Anello con raggio del cerchio e del tubo.' }
    ] },
  fillet: { name: 'robo fillet', groups: [[{ i: 'fillet.png', l: 'robo fillet: raccorda due linee' }]] },
  tangent: { name: 'robo tangent', groups: [[{ i: 'tangent.png', l: 'robo tangent: disegna la tangente' }]] },
  group_to_component: { name: 'robo group to component', groups: [[{ i: 'g2c.png', l: 'Converti i gruppi in componenti' }]] },
  impact_object: { name: 'robo impact object', groups: [[{ i: 'impact.png', l: 'Apri il report del peso geometrico' }]] },
  placement: { name: 'robo placement', groups: [[{ i: 'placement.png', l: 'robo placement: distribuisci su superficie' }]] },
  spacing_tool: { name: 'robo spacing tool', groups: [[{ i: 'spacing.png', l: 'robo spacing tool: copie lungo un percorso' }]] },
  proxy_manager: { name: 'robo proxy manager', groups: [[{ i: 'bbox.png', l: 'Crea proxy (scatola)' }, { i: 'lowres.png', l: 'Crea proxy (bassa risoluzione)' }, { i: 'restore.png', l: 'Ripristina proxy' }, { i: 'manager.png', l: 'Proxy Manager' }, { i: 'settings.png', l: 'Impostazioni' }, { i: 'help.png', l: 'Guida' }]] },
  scale_definition: { name: 'robo scale definition', groups: [[{ i: 'scale.png', l: 'Applica la scala alla geometria' }]] },
  section: { name: 'robo section', groups: [[{ i: 'main.png', l: 'Pannello dei piani di sezione' }, { i: 'isolate.png', l: 'Sposta / isola in un gruppo sezionabile' }]] },
  uplevel: { name: 'robo uplevel', groups: [[{ i: 'uplevel.png', l: 'Estrai al livello superiore' }]] },
  start: { name: 'robo start', note: 'Dalle Impostazioni di robo start puoi abilitare o disabilitare i singoli pulsanti che vuoi vedere nella barra.', groups: [[{ i: 'enter.png', l: 'Robo Enter' }, { i: 'rsel.png', l: 'Robo Select All' }], [{ i: 'grp.png', l: 'Crea gruppo' }, { i: 'cmp.png', l: 'Crea componente' }, { i: 'uniq.png', l: 'Rendi unico' }], [{ i: 'expl.png', l: 'Esplodi' }, { i: 'explc.png', l: 'Esplodi curve' }], [{ i: 'sall.png', l: 'Seleziona tutto' }, { i: 'inv.png', l: 'Inverti selezione' }, { i: 'clr.png', l: 'Deseleziona' }, { i: 'close.png', l: 'Chiudi gruppo' }, { i: 'up.png', l: 'Estrai al livello superiore' }, { i: 'weld.png', l: 'Salda spigoli' }, { i: 'face.png', l: 'Crea faccia' }], [{ i: 'hide.png', l: 'Nascondi oggetto' }, { i: 'unh1.png', l: "Mostra l'ultimo nascosto" }, { i: 'unhall.png', l: 'Mostra tutto' }], [{ i: 'guides.png', l: 'Rimuovi guide' }, { i: 'dims.png', l: 'Rimuovi quote' }], [{ i: 'zoom.png', l: 'Zoom sulla selezione' }, { i: 'center.png', l: 'Trova il centro' }], [{ i: 'cpt.png', l: 'Aggiungi punto centrale' }], [{ i: 'fix.png', l: 'Fix 101' }], [{ i: 'help.png', l: 'Guida' }]] },
  extract: { name: 'robo extract', groups: [[{ i: 'copy.png', l: 'robo extract: copia facce e linee fuori dal gruppo' }]] },
  toolbar: { name: 'robo toolbar', groups: [[{ i: 'toolbar.png', l: 'robo toolbar: costruisci le tue barre degli strumenti' }]] },
  demolition: { name: 'robo demolition', groups: [[{ i: 'demolition.png', l: 'robo demolition: riduce i triangoli della selezione' }]] },
  export_object: { name: 'robo export object', groups: [[{ i: 'export.png', l: "Esporta la selezione in un nuovo file .skp" }]] },
  library_explorer: { name: 'robo library explorer', groups: [[{ i: 'explorer.png', l: "Apri robo library explorer" }]] },
  standard: { name: 'robo standard', groups: [[{ i: 'nuovo.png', l: "Nuovo" }, { i: 'apri.png', l: "Apri" }, { i: 'salva.png', l: "Salva" }, { i: 'salvanome.png', l: "Salva con nome" }], [{ i: 'taglia.png', l: "Taglia" }, { i: 'copia.png', l: "Copia" }, { i: 'incolla.png', l: "Incolla" }, { i: 'incollaposto.png', l: "Incolla sul posto" }], [{ i: 'elimina.png', l: "Elimina" }], [{ i: 'annulla.png', l: "Annulla" }, { i: 'ripristina.png', l: "Ripristina" }]] }
};

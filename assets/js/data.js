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
    images: ['assets/img/screenshots/baseform-1.png', 'assets/img/screenshots/baseform-2.png', 'assets/img/screenshots/baseform-3.png'],
    tagline: 'Cubo, cilindro, cono, sfere e toro: forme precise in un clic.',
    simple: 'Scegli dall\'elenco l\'oggetto che ti serve (cubo, cilindro, cono, tronco di cono, sfera, icosfera o toro), imposta le misure e clicca nel modello: la forma compare esattamente dove vuoi, già liscia e pronta all\'uso.',
    steps: ['Apri robo baseform dalla barra strumenti o dal menu Robo Tool.', 'Scegli l\'oggetto dall\'elenco e inserisci le sue misure.', 'Muovi il mouse: vedi la forma fantasma. Clicca per posizionarla.'],
    how: [
      { t: 'Sette oggetti in un elenco', d: 'Cubo, cilindro, cono, tronco di cono, UV Sphere, icosfera e toro, ciascuno con il suo disegno. Cambiando oggetto cambiano i campi da compilare: raggi, altezza, segmenti, anelli o suddivisioni.' },
      { t: 'Catenina per le tre dimensioni', d: 'Il cubo ha larghezza, profondità e altezza collegate da una catenina: basta scrivere un solo valore e gli altri si adeguano, così ottieni sempre un cubo. Sbloccando la catenina ogni valore si modifica da solo e il cubo diventa un parallelepipedo; ricollegandola, i rapporti restano quelli impostati.' },
      { t: 'Anteprima live nella finestra', d: 'Nella finestra una piccola anteprima 3D si aggiorna mentre digiti o cambi i valori, e puoi ruotarla trascinando. Così vedi subito le proporzioni della forma prima di inserirla.' },
      { t: 'Origine e assi dell\'oggetto', d: 'Scegli se l\'origine dell\'oggetto è l\'angolo del riquadro di ingombro, il centro della base o il centro dell\'oggetto. Gli assi X (rosso), Y (verde) e Z (blu) sono disegnati nell\'anteprima e si spostano subito quando cambi la posizione: vedi dove sarà il punto di inserimento e dove si troveranno gli assi del gruppo o del componente.' },
      { t: 'Anteprima nella vista 3D', d: 'Quando confermi si attiva uno strumento di posizionamento che mostra la forma fantasma direttamente nel modello, con marker colorati per gli assi. La finestra si adatta da sola in larghezza e altezza.' },
      { t: 'Rispetta le unità del modello', d: 'Le misure sono lette e scritte con le unità e la precisione del tuo modello: se lavori in centimetri inserisci centimetri, se lavori in pollici inserisci pollici, senza conversioni.' },
      { t: 'Solidi chiusi e lisci', d: 'Ogni forma è un solido chiuso con le facce orientate verso l\'esterno; sfere, cilindri e coni hanno gli spigoli ammorbiditi, così appaiono lisci ma restano modificabili. La creazione è un\'unica operazione: un Ctrl+Z annulla tutto.' },
      { t: 'Guida in cinque lingue', d: 'Il pulsante Help, in alto accanto al globo delle lingue, apre una guida che spiega ogni funzione. Si affianca alla finestra principale, ha la sua stessa altezza (640 px di larghezza), ogni oggetto ha una scheda colorata con il suo disegno e segue la lingua scelta: italiano, inglese, tedesco, francese e spagnolo.' },
      { t: 'Impostazioni ricordate', d: 'Oggetto, valori, catenina, tipo, posizione e lingua vengono salvati e ritrovati alla prossima apertura di SketchUp.' }
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
    id: 'extract', name: 'robo Extract', version: '1.0', category: 'Modellazione', hue: 170,
    images: ['assets/img/screenshots/extract-1.png'],
    tagline: 'Copia facce e linee fuori dai gruppi, nella stessa posizione.',
    simple: 'Passa il mouse su una faccia o una linea di qualsiasi gruppo o componente, anche chiuso: Robo la evidenzia e, con un clic, ne crea una copia fuori dal gruppo, nella stessa identica posizione e inclinazione. Funziona su piani inclinati e su forme organiche, e non serve aprire né selezionare nulla.',
    steps: ['Clicca il pulsante robo Extract nella barra strumenti (o nel menu): parte lo strumento e si apre la finestra delle preferenze.', 'Passa il mouse su una faccia o una linea: diventa arancione e la barra di stato dice dove andrà la copia.', 'Clicca: la copia compare in un nuovo gruppo, già selezionata. Maiusc+clic per aggiungerne altre.'],
    how: [
      { t: 'Raggiunge qualsiasi contesto', d: 'Lo strumento arriva alle facce e alle linee dentro gruppi e componenti chiusi, anche annidati, e legge la posizione dall\'istanza esatta sotto il cursore: traslazioni, rotazioni, scale e specchi non spostano la copia.' },
      { t: 'Dove va la copia', d: 'Con niente di aperto la copia nasce nella radice del modello, fuori dal gruppo di origine. Con un gruppo aperto: se scegli la geometria di un altro gruppo entra nel gruppo aperto, se scegli la sua stessa geometria sale di un livello.' },
      { t: 'Forme organiche', d: 'Su una superficie organica una faccia si estende alle facce vicine finché la piega non supera il "limite di levigatezza". Nelle Preferenze uno slider con anteprima in tempo reale mostra quanto cambia la selezione.' },
      { t: 'Selezione multipla e curve', d: 'Maiusc+clic aggiunge più facce, segmenti o curve dello stesso gruppo e li copia insieme in un unico gruppo. Puntando un segmento di un arco o di un cerchio si prende l\'intera curva.' }
    ],
    pros: ['Non serve aprire i gruppi', 'Posizione e inclinazione identiche all\'originale', 'Funziona su superfici inclinate e organiche', 'Materiali, tag e interfaccia in 5 lingue'],
    solves: [
      { p: 'Estrarre una faccia da un gruppo significa aprirlo, copiare e incollare, con il rischio di spostarla.', s: 'Un clic crea la copia già nella posizione giusta, senza aprire nulla.' },
      { p: 'Le superfici organiche sono fatte di centinaia di piccole facce.', s: 'La porzione liscia viene presa tutta in un colpo, con un limite regolabile.' }
    ],
    specs: [['Menu', 'Robo Tool › robo Extract (una sola voce)'], ['Barra strumenti', '1 pulsante'], ['Lingue', 'Italiano, English, Deutsch, Français, Español'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* --------------------------------------------------------------- DEMOLITION */
  {
    id: 'demolition', name: 'robo Demolition', version: '1.0', category: 'Modellazione', hue: 15,
    images: ['assets/img/screenshots/demolition-1.png', 'assets/img/screenshots/demolition-2.png', 'assets/img/screenshots/demolition-3.png'],
    tagline: 'Riduce i triangoli di una mesh pesante, mantenendo la forma.',
    simple: 'Seleziona facce, gruppi o componenti pesanti: robo Demolition ne mostra in anteprima la versione più leggera, disegnata sul modello, e con una barra decidi quanto demolire. Usa Open3D (Python, in locale sul tuo computer); gli oggetti interni restano oggetti e i materiali restano al loro posto.',
    steps: ['Seleziona le facce, i gruppi o i componenti da alleggerire.', 'Premi Anteprima: la mesh più leggera viene disegnata in blu sul modello. Muovi la barra per demolire di più o di meno.', 'Premi Applica: un solo Ctrl+Z ripristina tutto.'],
    how: [
      { t: 'Tutto in locale', d: 'Nessun server e nessun servizio online: il plugin avvia direttamente uno script Python con Open3D, in background, senza bloccare SketchUp. Il tempo trascorso è visibile e c\'è un pulsante Annulla.' },
      { t: 'Due metodi', d: 'Quadric toglie i triangoli che cambiano meno la forma (qualità migliore). Voxel unisce i punti in celle di una griglia (velocissimo e leggerissimo).' },
      { t: 'Oggetti, materiali e facce', d: 'Ogni gruppo e componente annidato viene ridotto nel proprio posto: resta un oggetto separato e non viene unito agli altri. I materiali (fronte e retro) e i tag vengono mantenuti, e le facce rovesciate sulle forme chiuse vengono corrette.' }
    ],
    pros: ['Gratuito e offline', 'Anteprima con barra di regolazione', 'Gruppi e componenti restano oggetti separati', 'Materiali mantenuti', 'Un solo Undo'],
    solves: [
      { p: 'Le mesh importate hanno centinaia di migliaia di triangoli e rallentano il modello.', s: 'Una copia con la percentuale di triangoli che scegli, con la forma quasi identica.' }
    ],
    specs: [['Menu', 'Robo Tool › robo Demolition (una sola voce)'], ['Barra strumenti', '1 pulsante'], ['Richiede', 'Python 3 + Open3D (pip install open3d)'], ['Lingue', 'Italiano, English, Deutsch, Français, Español']]
  },

  /* --------------------------------------------------------------- EXPORT OBJECT */
  {
    id: 'export_object', name: 'robo Export object', version: '0.1', category: 'Produttività', hue: 5,
    tagline: 'Esporta gli oggetti selezionati in un nuovo file .skp.',
    simple: 'Selezioni una parte del modello, scegli cartella e nome: Robo la salva in un file SketchUp separato, nella stessa posizione, senza toccare il tuo modello aperto.',
    steps: ['Seleziona gli oggetti da esportare.', 'Premi robo Export object e scegli la cartella di destinazione.', 'Conferma il nome del file: viene creato il nuovo .skp.'],
    how: [
      { t: 'Il modello resta intatto', d: 'La selezione viene racchiusa per un istante in un gruppo temporaneo, salvata su disco e subito dopo l\'operazione viene annullata: il modello aperto non viene chiuso, riaperto né modificato.' },
      { t: 'Posizione originale mantenuta', d: 'Gli oggetti nel nuovo file restano nelle stesse coordinate che avevano nel modello, così puoi riimportarli o allinearli senza spostamenti.' },
      { t: 'Con tutto ciò che serve', d: 'Insieme agli oggetti vengono salvati i componenti e i materiali che usano, senza portarsi dietro il resto del modello.' },
      { t: 'Nome suggerito e protezioni', d: 'Il nome proposto deriva dal file corrente (nome_selezione); i caratteri non validi per Windows vengono sostituiti e, se il file esiste già, ti viene chiesto se sovrascriverlo.' }
    ],
    pros: ['Un file pulito con solo ciò che serve', 'Il modello aperto non viene toccato', 'Nessun copia-incolla tra finestre', 'Coordinate originali preservate'],
    solves: [
      { p: 'Per salvare una sola parte del modello si copia, si apre un nuovo file e si incolla sul posto.', s: 'Un comando: selezioni ed esporti.' },
      { p: 'Salvare "con nome" e cancellare il resto rischia di rovinare il file originale.', s: 'L\'esportazione avviene senza modificare il file aperto.' }
    ],
    specs: [['Menu', 'Robo Tool › robo Export object'], ['Barra strumenti', '1 pulsante'], ['Formato', 'File .skp'], ['Annullamento', 'Il modello non viene modificato']]
  },

  /* ---------------------------------------------------------------- FILLET */
  {
    id: 'fillet', name: 'robo Fillet', version: '1.1', category: 'Modellazione', hue: 200,
    images: ['assets/img/screenshots/fillet-1.png', 'assets/img/screenshots/fillet-2.png', 'assets/img/screenshots/fillet-3.png', 'assets/img/screenshots/fillet-4.png', 'assets/img/screenshots/fillet-5.png'],
    tagline: 'Raccordi e smussi tra due linee, su qualsiasi piano.',
    simple: 'Clicca due linee che si incontrano in un angolo, scegli il raggio: l\'angolo spigoloso diventa una curva morbida (oppure uno smusso). Funziona su qualsiasi piano nello spazio, non solo sul pavimento.',
    steps: ['Attiva robo Fillet e clicca la prima linea (si colora di rosso).', 'Clicca la seconda linea (blu) e inserisci raggio e numero di segmenti.', 'Controlla l\'anteprima verde e premi Applica.'],
    how: [
      { t: 'Controllo di complanarità', d: 'Lo strumento verifica che le due linee giacciano sullo stesso piano e calcola l\'intersezione, anche quando le linee non si toccano davvero (angolo virtuale).' },
      { t: 'Anteprima verde dal vivo', d: 'Mentre cambi il raggio vedi subito l\'arco risultante. Il raggio massimo possibile viene calcolato per te, così non ottieni raccordi impossibili.' },
      { t: 'Curva o smusso', d: 'Il numero di segmenti va da 1 a 99: con 1 ottieni uno smusso netto, con più segmenti un arco sempre più liscio.' },
      { t: 'Pronto per il raccordo successivo', d: 'Dopo Applica lo strumento resta armato. Se le linee non si toccavano, propone di unirle; al centro dell\'arco viene lasciato un punto guida.' }
    ],
    pros: ['Raggio preciso nelle unità del modello', 'Funziona su piani inclinati e in 3D', 'Anche con spigoli che non si toccano', 'Raggio e segmenti ricordati tra un raccordo e l\'altro'],
    solves: [
      { p: 'Arrotondare un angolo tra due spigoli richiede di costruire l\'arco a mano e poi tagliare le linee.', s: 'Due clic e un raggio: arco costruito e spigoli sistemati.' },
      { p: 'Sui piani inclinati costruire un arco tangente è lento e impreciso.', s: 'Il calcolo avviene sul piano delle due linee, qualunque sia la sua orientazione.' }
    ],
    specs: [['Menu', 'Robo Tool › robo Fillet'], ['Segmenti', '1 – 99 (1 = smusso)'], ['Piani', 'Qualsiasi orientamento'], ['Annullamento', 'Un solo Ctrl+Z per raccordo']]
  },

  /* ------------------------------------------------------- GROUP TO COMPONENT */
  {
    id: 'group_to_component', name: 'robo Group to Component', version: '1.2', category: 'Organizzazione', hue: 32,
    images: ['assets/img/screenshots/group_to_component-1.png', 'assets/img/screenshots/group_to_component-2.png', 'assets/img/screenshots/group_to_component-3.png', 'assets/img/screenshots/group_to_component-4.png'],
    tagline: 'Trasforma i gruppi in componenti, unendo quelli identici.',
    simple: 'Seleziona molti gruppi: Robo riconosce quelli con la stessa forma e li trasforma in copie dello stesso componente. Il file diventa più leggero e, modificandone uno, cambiano tutti.',
    steps: ['Seleziona i gruppi da convertire.', 'Apri robo Group to Component: vedi quanti sono identici e quanti unici.', 'Scegli nome e opzioni e conferma.'],
    how: [
      { t: 'Impronta geometrica', d: 'Per ogni gruppo viene calcolata un\'"impronta" (numero di facce, volume, posizione dei vertici). Due gruppi con la stessa impronta sono considerati identici.' },
      { t: 'Definizione condivisa', d: 'I gruppi identici diventano istanze della stessa definizione di componente: la geometria è memorizzata una volta sola.' },
      { t: 'Tolleranza e analisi profonda', d: 'Puoi regolare la tolleranza del confronto e attivare il confronto vertice per vertice ("Deep Vertex Hash"), più lento ma più rigoroso.' },
      { t: 'Nomi ordinati', d: 'Assegni un nome al componente e una numerazione automatica (Nome_1, Nome_2… oppure 0001, 0002…).' }
    ],
    pros: ['File più leggero', 'Una modifica si propaga a tutte le copie', 'Prepara il modello per proxy e rendering', 'Nomi e numerazione automatici'],
    solves: [
      { p: 'Un modello pieno di gruppi duplicati pesa molto e va modificato copia per copia.', s: 'I duplicati diventano un solo componente, modificabile una volta.' },
      { p: 'Capire quali gruppi sono davvero uguali a occhio è impossibile.', s: 'Il pannello di analisi mostra identici e unici prima di convertire.' }
    ],
    specs: [['Finestra', '480 × 700 px, ridimensionabile'], ['Menu', 'Robo Tool › Robo Group to Component'], ['Confronto', 'Impronta geometrica + tolleranza'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* ---------------------------------------------------------------- IMPACT */
  {
    id: 'impact_object', name: 'robo Impact Object', version: '1.1', category: 'Ottimizzazione', hue: 348,
    images: ['assets/img/screenshots/impact_object-1.png', 'assets/img/screenshots/impact_object-2.png'],
    tagline: 'Scopri quali oggetti appesantiscono il tuo modello.',
    simple: 'Una tabella ordinabile ti mostra quanto "pesa" ogni componente del modello, tenendo conto anche di quante volte è ripetuto. Così trovi subito alberi, arredi o dettagli che rallentano SketchUp.',
    steps: ['Apri robo Impact Object dal menu.', 'Ordina la tabella per Totale e individua le righe più pesanti.', 'Selezionale, isolale con lo zoom o elimina ciò che non serve.'],
    how: [
      { t: 'Peso = entità × istanze', d: 'Per ogni definizione viene contato il numero di entità e quante volte compare nel modello. Il prodotto è l\'impatto reale sul programma.' },
      { t: 'Albero dei livelli annidati', d: 'I componenti contenuti in altri componenti si espandono ad albero: all\'apertura vedi solo i livelli principali, un clic apre i figli.' },
      { t: 'Dimensione in MB su richiesta', d: 'Il peso in MB è calcolato solo quando lo chiedi, così i modelli molto grandi non rallentano all\'apertura della tabella.' },
      { t: 'Azioni per riga', d: 'Seleziona nel modello, isola e zoomma sull\'oggetto, pulisci i componenti inutilizzati. La selezione è sincronizzata in entrambe le direzioni. Lo stato del modello viene ripristinato dopo lo zoom.' }
    ],
    pros: ['Trovi i colli di bottiglia in pochi secondi', 'Tabella ordinabile e albero espandibile', 'Nessun rallentamento sui modelli grandi', 'Isolamento e pulizia dallo stesso pannello'],
    solves: [
      { p: 'Il modello è lento ma non sai quale oggetto è il colpevole.', s: 'La classifica per peso totale lo mostra subito.' },
      { p: 'Un piccolo oggetto molto ripetuto pesa più di uno grande e unico.', s: 'Il calcolo entità × istanze rende visibile l\'effetto della ripetizione.' }
    ],
    specs: [['Finestra', '820 × 570 px, ridimensionabile'], ['Menu', 'Robo Tool › Robo Impact Objects'], ['Colonne', 'Livello, Entità, Istanze, Totale, MB'], ['Annullamento', 'Stato del modello ripristinato']]
  },

  /* ---------------------------------------------------------------- LEANS ON */
  {
    id: 'leans_on', name: 'robo Leans on', version: '0.1', category: 'Modellazione', hue: 285,
    tagline: 'Appoggia gli oggetti a una superficie, come nella realtà.',
    simple: 'Seleziona un mobile o qualsiasi oggetto e indica la superficie: Robo lo appoggia esattamente lì, sul piano della faccia scelta oppure fermandolo al primo ostacolo che incontra.',
    steps: ['Seleziona gli oggetti da appoggiare.', 'Scegli lo strumento: "Lean On Surface" oppure "Lean Until Blocked".', 'Passa sulla superficie, guarda l\'anteprima e clicca per appoggiare.'],
    how: [
      { t: 'Due strumenti', d: '"Lean On Surface" porta gli oggetti sul piano della faccia scelta; "Lean Until Blocked" li fa scendere lungo un raggio finché non toccano il primo ostacolo reale, ideale per pareti, pavimenti e superfici inclinate o organiche.' },
      { t: 'Distanza e perpendicolarità', d: 'Da una piccola finestra Opzioni (o digitando nella casella delle misure) imposti la distanza dalla superficie e se l\'oggetto deve disporsi perpendicolare ad essa.' },
      { t: 'Calcolo geometrico', d: 'Per ogni oggetto viene calcolato l\'ingombro reale e la normale della superficie, quindi la traslazione e la rotazione necessarie per farlo aderire.' },
      { t: 'Annullamento semplice', d: 'Ogni appoggio è un\'unica operazione: Ctrl+Z lo annulla; ESC interrompe lo strumento.' }
    ],
    pros: ['Appoggio preciso in un clic', 'Funziona anche su superfici inclinate', 'Si ferma al primo ostacolo vero', 'Distanza e perpendicolarità regolabili'],
    solves: [
      { p: 'Far aderire un oggetto a una parete o a un piano inclinato richiede movimenti e rotazioni a occhio.', s: 'Lo strumento calcola posizione e orientamento in automatico.' },
      { p: 'Oggetti che restano sospesi o affondano nella superficie.', s: 'La distanza impostata evita sia il vuoto sia la compenetrazione.' }
    ],
    specs: [['Menu', 'Robo Tool › robo Leans on (4 voci)'], ['Barra strumenti', '2 pulsanti'], ['Opzioni', 'Distanza + Perpendicolare'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* -------------------------------------------------------------- LIBRARY EXPLORER */
  {
    id: 'library_explorer', name: 'robo Library Explorer', version: '1.0', category: 'Organizzazione', hue: 190,
    video: 'xW22R5CD1Dk',
    images: ['assets/img/screenshots/library_explorer-1.png', 'assets/img/screenshots/library_explorer-2.png', 'assets/img/screenshots/library_explorer-3.png', 'assets/img/screenshots/library_explorer-4.png', 'assets/img/screenshots/library_explorer-5.png', 'assets/img/screenshots/library_explorer-6.png', 'assets/img/screenshots/library_explorer-7.png'],
    tagline: 'Sfoglia le tue librerie con anteprime vere e inserisci con un clic.',
    simple: 'Indica le cartelle dove tieni componenti e materiali: Robo li mostra con le anteprime, ordinati per cartella, con tag e preferiti. Un clic e l\'oggetto entra nel modello.',
    steps: ['Premi "Cartella" e scegli la cartella della tua libreria.', 'Sfoglia le anteprime, filtra per tag o cerca per nome.', 'Clicca un componente per inserirlo, un materiale per applicarlo alla selezione.'],
    how: [
      { t: 'Un elenco per ogni cartella', d: 'Ogni cartella aggiunta diventa un argomento a sé, con le sue sottocartelle. Puoi anche rinominare il nome mostrato di una cartella (tasto destro › Edit Name) senza toccare la cartella sul disco.' },
      { t: 'Anteprime reali', d: 'L\'immagine di un file .skp è quella salvata da SketchUp dentro il file; per i materiali .skm viene ricavata caricandoli un istante nel modello. Le anteprime mancanti vengono create in background.' },
      { t: 'Tag, preferiti e viste', d: 'Etichetta gli oggetti con tag, segna i preferiti con il cuore, cerca per nome e scegli tra vista a dettagli e icone piccole, medie o grandi.' },
      { t: 'Proxy, 3D Warehouse e cloud', d: 'Per gli oggetti creati con robo Proxy Manager mostra anche il proxy. Un pulsante apre il 3D Warehouse per scaricare modelli nella libreria, e il backup nel cloud salva l\'elenco in una cartella OneDrive o Google Drive: la password non passa mai dal plugin.' }
    ],
    pros: ['Anteprime vere, non solo nomi di file', 'Inserimento con un clic', 'Tag, preferiti e ricerca', 'I file sul disco non vengono toccati'],
    solves: [
      { p: 'Trovare un componente tra centinaia di file obbliga ad aprirli uno a uno.', s: 'Le anteprime e i filtri lo mostrano subito.' },
      { p: 'Le librerie sparse in molte cartelle sono difficili da tenere in ordine.', s: 'Un unico pannello le raccoglie, ciascuna con il suo elenco.' }
    ],
    specs: [['Menu', 'Robo Tool › robo Library Explorer'], ['Barra strumenti', '1 pulsante'], ['File', '.skp (componenti) e .skm (materiali)'], ['Sicurezza', 'Elimina solo file dentro le cartelle di libreria, dopo conferma']]
  },

  /* ------------------------------------------------------------- PLACEMENT */
  {
    id: 'placement', name: 'robo Placement', version: '0.9', category: 'Distribuzione', hue: 130,
    images: ['assets/img/screenshots/placement-1.png', 'assets/img/screenshots/placement-2.png', 'assets/img/screenshots/placement-3.png', 'assets/img/screenshots/placement-4.png'],
    tagline: 'Distribuisci oggetti a caso su qualsiasi superficie.',
    simple: 'Scegli un oggetto (un albero, un sasso, un mobile) e una superficie: Robo ne dispone tante copie sparse in modo naturale, con scala e rotazione leggermente diverse per ogni copia.',
    steps: ['Seleziona il componente o gruppo da distribuire.', 'Indica la faccia bersaglio e regola quantità, scala e rotazione.', 'Guarda l\'anteprima dal vivo e premi Applica.'],
    how: [
      { t: 'Superfici anche organiche', d: 'Funziona su facce piane, inclinate e su mesh organiche: sceglie i punti sull\'intera superficie collegata, in proporzione alla sua area.' },
      { t: 'Casualità controllata', d: 'Quantità da 1 a 1000, scala minima/massima, rotazione casuale sui tre assi, allineamento alla normale e un "seme" (seed): stesso seme, stesso risultato.' },
      { t: 'Distanza minima tra copie', d: 'Un controllo anti-collisione sulle scatole di ingombro evita che le copie si sovrappongano; puoi anche indicare ostacoli da evitare.' },
      { t: 'Anteprima in tempo reale', d: 'Vedi le copie disegnate sopra la vista mentre regoli i parametri, anche durante orbita e pan, senza creare geometria finché non applichi.' }
    ],
    pros: ['Risultato naturale, non "a griglia"', 'Ripetibile grazie al seed', 'Anteprima prima di creare qualsiasi cosa', 'Funziona anche su terreni irregolari'],
    solves: [
      { p: 'Piazzare a mano decine di alberi o sassi è lungo e viene sempre troppo regolare.', s: 'Una sola operazione distribuisce fino a 1000 copie con variazioni casuali.' },
      { p: 'Le copie che si compenetrano rovinano il render.', s: 'La distanza minima le tiene separate.' }
    ],
    specs: [['Finestra', '400 × 567 px, espandibile'], ['Menu', 'Robo Tool › robo Placement'], ['Quantità', '1 – 1000 copie'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* ----------------------------------------------------------------- PROXY */
  {
    id: 'proxy_manager', name: 'robo Proxy Manager', version: '0.5', category: 'Ottimizzazione', hue: 220,
    images: ['assets/img/screenshots/proxy_manager-1.png', 'assets/img/screenshots/proxy_manager-2.png', 'assets/img/screenshots/proxy_manager-3.png', 'assets/img/screenshots/proxy_manager-4.png'],
    tagline: 'Sostituisci gli oggetti pesanti con proxy leggeri.',
    simple: 'Alberi, arredi e persone dettagliati rendono il modello lentissimo. Con Robo li sostituisci con "segnaposto" leggeri e li ritrovi identici quando ti servono, con un clic destro.',
    steps: ['Seleziona gli oggetti pesanti e scegli il tipo di proxy.', 'Robo salva l\'originale in un file esterno e mette al suo posto il proxy.', 'Gestisci o ripristina gli originali dal Proxy Manager o col clic destro.'],
    how: [
      { t: 'Due tipi di proxy', d: 'Il proxy a scatola (Bounding Box) è il più leggero; il proxy Low Resolution mantiene una versione semplificata della forma reale.' },
      { t: 'Originale al sicuro', d: 'La geometria originale viene salvata come file .skp nella cartella Robo_ProxyAssets, insieme alle informazioni per ritrovarla. Il modello si alleggerisce senza perdere nulla.' },
      { t: 'Ripristino e ricollegamento', d: 'Con "Restore Proxy" torni all\'oggetto originale. Se sposti i file, il Manager segnala i proxy con stato ok / mancante / danneggiato e li ricollega.' },
      { t: 'Pannello di controllo', d: 'Il Manager elenca tutti i proxy del modello. Nelle impostazioni scegli, tra l\'altro, se cancellare il file esterno dopo il ripristino.' }
    ],
    pros: ['Viewport fluido anche in scene enormi', 'File di modello molto più leggeri', 'Gli originali restano recuperabili', 'Elenco e controllo di tutti i proxy'],
    solves: [
      { p: 'Scene con vegetazione e arredi dettagliati sono impossibili da orbitare.', s: 'I proxy leggeri rendono la vista fluida; gli originali tornano per il render.' },
      { p: 'Cancellare gli oggetti per alleggerire fa perdere il lavoro.', s: 'L\'originale è salvato su disco e ripristinabile in ogni momento.' }
    ],
    specs: [['Finestre', 'Manager, Impostazioni, Low Resolution, Guida'], ['Menu', 'Robo Tool › robo Proxy Manager (6 voci)'], ['Barra strumenti', '6 pulsanti'], ['Cartella asset', 'Robo_ProxyAssets']]
  },

  /* ---------------------------------------------------------------- RELOAD */
  {
    id: 'reload', name: 'Robo Reload', version: '1.0', category: 'Sviluppo', hue: 240,
    tagline: 'Ricarica un plugin Ruby senza riavviare SketchUp.',
    simple: 'Strumento per chi sviluppa plugin: modifichi il codice, premi un pulsante e SketchUp ricarica subito il plugin, senza chiudere e riaprire il programma.',
    steps: ['Con "Change Target Plugin" scegli il file del plugin da ricaricare.', 'Modifica il codice nel tuo editor.', 'Premi "Reload Plugin": il plugin viene ricaricato subito.'],
    how: [
      { t: 'Purga e ricarico', d: 'Robo individua il file di avvio e la cartella con lo stesso nome, toglie tutti i loro file dall\'elenco dei file già caricati (anche nelle varianti cifrate .rbe) e li carica di nuovo.' },
      { t: 'Codice davvero rieseguito', d: 'Dopo il file di avvio viene ricaricato anche il punto di ingresso indicato nell\'estensione, così il codice modificato viene realmente applicato.' },
      { t: 'Impostazioni di sessione', d: 'Una finestra mostra il plugin bersaglio, lo stato e la cartella da cui iniziare la ricerca; in "modalità persistente" il bersaglio viene ricordato al riavvio.' },
      { t: 'Errori chiari', d: 'Eventuali errori appaiono in un messaggio e nella Console Ruby con i dettagli. Le finestre HTML già aperte vanno chiuse e riaperte per vedere le modifiche.' }
    ],
    pros: ['Cicli di prova molto più rapidi', 'Nessun riavvio di SketchUp', 'Bersaglio ricordato tra le sessioni', 'Errori mostrati in modo chiaro'],
    solves: [
      { p: 'Ogni modifica al codice richiede di chiudere e riaprire SketchUp.', s: 'Un pulsante e il plugin è aggiornato.' },
      { p: 'Ricaricare a mano nella Console Ruby è lungo e soggetto a errori.', s: 'Robo purga e ricarica tutti i file del plugin in automatico.' }
    ],
    specs: [['Menu', 'Robo Tool › Robo Reload (4 voci)'], ['Barra strumenti', '2 pulsanti'], ['Destinatari', 'Sviluppatori di plugin'], ['Persistenza', 'Bersaglio e cartella ricordati']]
  },

  /* ----------------------------------------------------------------- SCALE */
  {
    id: 'scale_definition', name: 'robo Scale Definition', version: '0.7', category: 'Organizzazione', hue: 24,
    images: ['assets/img/screenshots/scale_definition-1.png', 'assets/img/screenshots/scale_definition-2.png', 'assets/img/screenshots/scale_definition-3.png'],
    tagline: 'Fissa la scala nella geometria e riporta tutto a 1.0.',
    simple: 'Se hai ingrandito o rimpicciolito un componente, SketchUp ricorda quel "fattore di scala" a parte. Robo lo incorpora nella geometria e riporta la scala a 1.0: dimensioni e materiali diventano corretti per il rendering.',
    steps: ['Seleziona uno o più gruppi o componenti.', 'Apri robo Scale Definition e scegli la modalità.', 'Clicca Applica: leggi il riepilogo dell\'operazione.'],
    how: [
      { t: 'Scala "cotta" nella geometria', d: 'La scala visiva di ogni istanza (anche non uniforme) viene applicata ai punti della definizione e la trasformazione è riportata a 1.0. Le istanze sono rese uniche prima, così le altre copie non vengono toccate.' },
      { t: 'Tre modalità', d: 'Solo scala; Scala + Tri-Planar World (texture riproiettate in coordinate globali); Scala + Tri-Planar Fit (coordinate locali, la texture segue l\'oggetto).' },
      { t: 'Oggetti annidati', d: 'Gli elementi nidificati sono elaborati dal più interno al più esterno, così ogni livello viene sistemato una sola volta.' },
      { t: 'Casi speciali gestiti', d: 'Componenti dinamici, oggetti bloccati e riferimenti specchiati o deformati non vengono modificati: sono elencati a fine operazione con il motivo.' }
    ],
    pros: ['Batch su tutta la selezione', 'Materiali corretti grazie al tri-planare', 'Non tocca le altre copie della definizione', 'Elenca ciò che salta e perché'],
    solves: [
      { p: 'Componenti scalati possono dare texture e dimensioni sbagliate nel render.', s: 'Con scala 1.0 e geometria corretta il risultato è prevedibile.' },
      { p: 'Il "Reset scala" nativo è limitato e non gestisce le texture.', s: 'Robo lavora in blocco e riproietta le texture se lo chiedi.' }
    ],
    specs: [['Finestra', '340 × 490 px (guida 360 × 620)'], ['Menu', 'Robo Tool › Robo Scale Definition'], ['Tolleranza', '0.0001'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* --------------------------------------------------------------- SECTION */
  {
    id: 'section', name: 'robo section', version: '1.2', category: 'Organizzazione', hue: 210,
    images: ['assets/img/screenshots/section-1.png', 'assets/img/screenshots/section-2.png', 'assets/img/screenshots/section-3.png', 'assets/img/screenshots/section-4.png', 'assets/img/screenshots/section-5.png'],
    tagline: 'Tutti i piani di sezione in un solo pannello.',
    simple: 'Nei modelli complessi i piani di sezione sono sparsi dentro gruppi e componenti. Robo li trova tutti, li mostra in un elenco e ti permette di attivarli, rinominarli, spostarli e collegarli alle scene.',
    steps: ['Apri il pannello robo section: compare l\'elenco di tutti i piani.', 'Attiva, rinomina o seleziona un piano dalla lista.', 'Salva lo stato nelle scene, oppure isola gli oggetti in un gruppo sezionabile.'],
    how: [
      { t: 'Scansione ricorsiva', d: 'Robo percorre modello, gruppi e componenti annidati e raccoglie ogni piano di sezione con nome, contesto e stato attivo.' },
      { t: 'Selezione bidirezionale', d: 'Selezioni una riga e il piano si seleziona nel modello, e viceversa.' },
      { t: 'Sposta e isola', d: 'Sposti i piani in un altro contesto mantenendo posizione e orientamento, oppure avvolgi la selezione in un gruppo sezionabile.' },
      { t: 'Sincronizzazione con le scene', d: 'Lo stato dei piani viene salvato nelle scene, copiato tra scene o applicato a tutte, così ogni vista ha la sua sezione.' }
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
    id: 'spacing_tool', name: 'robo Spacing Tool', version: '1.2', category: 'Distribuzione', hue: 268,
    images: ['assets/img/screenshots/spacing_tool-1.png', 'assets/img/screenshots/spacing_tool-2.png', 'assets/img/screenshots/spacing_tool-3.png', 'assets/img/screenshots/spacing_tool-4.png', 'assets/img/screenshots/spacing_tool-5.png', 'assets/img/screenshots/spacing_tool-6.png', 'assets/img/screenshots/spacing_tool-7.png', 'assets/img/screenshots/spacing_tool-8.png', 'assets/img/screenshots/spacing_tool-9.png', 'assets/img/screenshots/spacing_tool-10.png', 'assets/img/screenshots/spacing_tool-11.png', 'assets/img/screenshots/spacing_tool-12.png'],
    tagline: 'Copie perfettamente spaziate lungo una linea o una curva.',
    simple: 'Scegli un oggetto e un percorso (una linea, un arco, una curva anche chiusa): Robo mette le copie a distanza regolare lungo il percorso, come lampioni lungo una strada o sedie attorno a un tavolo.',
    steps: ['Seleziona l\'oggetto e il percorso (le linee).', 'Scegli "Numero" di copie oppure "Distanza" fissa.', 'Regola rotazione e scala, guarda l\'anteprima e conferma.'],
    how: [
      { t: 'Due modi di spaziare', d: 'Con "Numero" ottieni N copie equidistanti; con "Distanza" un passo fisso (ad esempio 100 cm). Puoi impostare uno scarto iniziale e finale.' },
      { t: 'Percorsi completi', d: '"Linea intera" estende la selezione a tutta la catena di segmenti collegati, anche se il percorso è chiuso ad anello.' },
      { t: 'Rotazione e scala', d: 'Rotazione e scala possono essere casuali oppure progressive (crescono o diminuiscono con gradualità lungo il percorso). Puoi scegliere l\'asse di inserimento e mantenere la verticale rispetto al mondo.' },
      { t: 'Anteprima leggera', d: 'L\'anteprima mostra i contorni degli oggetti e frecce di direzione; per non rallentare limita automaticamente il numero di copie disegnate.' }
    ],
    pros: ['Spaziatura regolare e ripetibile', 'Funziona su curve e anelli chiusi', 'Rotazione e scala progressive', 'Finestra non modale, sempre a portata'],
    solves: [
      { p: 'Copiare e posizionare a mano oggetti lungo una curva dà distanze irregolari.', s: 'Robo calcola i punti lungo il percorso con precisione.' },
      { p: 'Cambiare il numero di copie significa rifare tutto.', s: 'Modifichi il valore e l\'anteprima si aggiorna.' }
    ],
    specs: [['Finestra', '500 × 640 px, non modale'], ['Menu', 'Robo Tool › robo Spacing Tool'], ['Modalità', 'Numero / Distanza'], ['Annullamento', 'Un solo Ctrl+Z']]
  },

  /* ---------------------------------------------------------------- STANDARD */
  {
    id: 'standard', name: 'robo Standard', version: '1.1', category: 'Produttività', hue: 100,
    tagline: 'I comandi di tutti i giorni in una barra con icone Robo.',
    simple: 'Nuovo, Apri, Salva, Taglia, Copia, Incolla, Annulla… i comandi più usati di SketchUp riuniti in una sola barra, con icone chiare e nello stile Robo.',
    steps: ['Attiva la barra "robo Standard" da Vista › Barre degli strumenti.', 'Usa i pulsanti al posto dei menu.', 'Gli stessi comandi sono anche in Estensioni › Robo Tool › robo Standard.'],
    how: [
      { t: 'Comandi nativi', d: 'Nuovo, Apri, Taglia, Copia e Incolla richiamano le azioni di SketchUp; Salva e Salva con nome usano le finestre standard.' },
      { t: 'Incolla sul posto', d: 'Incolla gli oggetti nella loro posizione originale, sia su Windows sia su macOS, in un\'unica operazione annullabile.' },
      { t: 'Elimina la selezione', d: 'Cancella gli oggetti selezionati in un solo passo, annullabile con un Ctrl+Z.' },
      { t: 'Raggruppati per uso', d: 'I pulsanti sono divisi in gruppi (File, Appunti, Modifica) e nella barra di stato compare la scorciatoia abituale.' }
    ],
    pros: ['Tutti i comandi base a portata di clic', 'Icone coerenti con il resto di Robo Tools', 'Incolla sul posto incluso', 'Voci anche nel menu, con icona'],
    solves: [
      { p: 'I comandi base sono sparsi tra menu e barre diverse.', s: 'Una sola barra con tutto quello che serve.' },
      { p: 'Incollare nella posizione originale richiede di cercare il comando nei menu.', s: 'Un pulsante dedicato.' }
    ],
    specs: [['Menu', 'Robo Tool › robo Standard (11 voci)'], ['Barra strumenti', '11 pulsanti in 4 gruppi'], ['Comandi', 'Nuovo, Apri, Salva, Salva con nome, Taglia, Copia, Incolla, Incolla sul posto, Elimina, Annulla, Ripristina'], ['Annullamento', 'Un solo Ctrl+Z per azione']]
  },

  /* ----------------------------------------------------------------- START */
  {
    id: 'start', name: 'robo start', version: '1.0', category: 'Produttività', hue: 350,
    tagline: 'Oltre 20 comandi rapidi in un\'unica barra.',
    simple: 'Una barra con le operazioni di ogni giorno: crea gruppi e componenti, seleziona, nascondi, cancella guide e quote. Ogni pulsante ha una sua icona e una scorciatoia da tastiera.',
    steps: ['Attiva la barra "robo start" da Vista › Barre degli strumenti.', 'Usa i pulsanti o le scorciatoie da tastiera.', 'Da Impostazioni scegli quali pulsanti mostrare.'],
    how: [
      { t: 'Comandi raggruppati', d: 'Gruppi e componenti, esplosione, selezione (tutto, inverti, deseleziona), visibilità, guide e quote, zoom e ricerca del centro: ogni funzione è un pulsante.' },
      { t: 'Scorciatoie personalizzabili', d: 'Ogni comando ha una scorciatoia; la Shortcut List le mostra tutte e nel codice puoi cambiarle.' },
      { t: 'Barra su misura', d: 'Da Impostazioni nascondi i pulsanti che non usi; la scelta viene ricordata.' },
      { t: 'Operazioni sicure', d: 'Ogni azione sul modello è un\'unica operazione annullabile con Ctrl+Z.' }
    ],
    pros: ['Tutto a portata di clic', 'Scorciatoie coerenti', 'Barra personalizzabile', 'Guida integrata con l\'elenco dei comandi'],
    solves: [
      { p: 'Le operazioni ripetitive richiedono menu e clic destro ogni volta.', s: 'Un pulsante, o una scorciatoia, per ciascuna.' },
      { p: 'Rimuovere guide o quote sparse nel modello è noioso.', s: 'Un pulsante le rimuove tutte.' }
    ],
    specs: [['Menu', 'Robo Tool › robo start (Elenco scorciatoie, Impostazioni, Guida)'], ['Barra strumenti', 'robo start, personalizzabile'], ['Guida', 'Finestra con elenco comandi'], ['Annullamento', 'Un solo Ctrl+Z per azione']]
  },

  /* --------------------------------------------------------------- TANGENT */
  {
    id: 'tangent', name: 'robo Tangent', version: '1.2', category: 'Modellazione', hue: 160,
    images: ['assets/img/screenshots/tangent-1.png', 'assets/img/screenshots/tangent-2.png', 'assets/img/screenshots/tangent-3.png', 'assets/img/screenshots/tangent-4.png', 'assets/img/screenshots/tangent-5.png', 'assets/img/screenshots/tangent-6.png', 'assets/img/screenshots/tangent-7.png'],
    tagline: 'La tangente esatta tra archi, cerchi e segmenti.',
    simple: 'Clicca due cerchi (o un cerchio e una linea) e lo strumento disegna la linea che li tocca esattamente in un punto ciascuno. Vedi le possibilità in anteprima e scegli quella che ti serve muovendo il mouse.',
    steps: ['Attiva robo Tangent: passa sopra gli elementi, si illuminano di giallo.', 'Clicca il primo (rosso) e il secondo elemento (blu).', 'Muovi il mouse per scegliere la tangente verde e clicca per disegnarla.'],
    how: [
      { t: 'Calcolo analitico', d: 'Le tangenti sono calcolate con la geometria, non "a occhio": per due cerchi esistono fino a quattro soluzioni (due esterne e due interne), per cerchio e segmento se ne trovano due per ogni estremo.' },
      { t: 'Candidate in anteprima', d: 'Quella più vicina al cursore è verde; le altre restano grigie e tratteggiate. Un clic conferma e lo strumento riparte da capo.' },
      { t: 'Protezione dai casi impossibili', d: 'Se i due elementi non stanno sullo stesso piano, la coppia viene rifiutata invece di produrre una linea sbagliata.' },
      { t: 'Precisione a scelta', d: 'Da Impostazioni scegli tra "Esatta" (punto matematico) e "Arrotondata" (la linea tocca il vertice reale della curva poligonale), utile con cerchi fatti di segmenti.' }
    ],
    pros: ['Tangenti esatte, senza tentativi', 'Vedi tutte le soluzioni prima di scegliere', 'Rifiuta i casi non validi', 'Modalità che agganciano davvero la curva'],
    solves: [
      { p: 'Disegnare a mano una tangente comune non è possibile con le sole inferenze di SketchUp.', s: 'Il punto di tangenza viene calcolato per te.' },
      { p: 'Le curve di SketchUp sono poligoni: una tangente "esatta" può non toccare mai la curva.', s: 'La modalità Arrotondata aggancia il vertice più vicino, così la linea tocca davvero.' }
    ],
    specs: [['Menu', 'Robo Tool › robo Tangent (+ Impostazioni)'], ['Soluzioni', '2 – 4 candidate'], ['Precisione', 'Esatta / Arrotondata'], ['Annullamento', 'ESC annulla, Ctrl+Z toglie l\'ultima linea']]
  },

  /* --------------------------------------------------------------- UPLEVEL */
  {
    id: 'uplevel', name: 'robo Uplevel', version: '1.0', category: 'Produttività', hue: 45,
    tagline: 'Porta gli oggetti fuori dal gruppo, senza spostarli.',
    simple: 'Sei dentro un gruppo o un componente e vuoi tirare fuori alcuni oggetti al livello superiore, restando esattamente dove sono. Un clic e li sposta nella gerarchia senza cambiarne la posizione.',
    steps: ['Entra nel gruppo o componente e seleziona gli oggetti.', 'Premi il pulsante robo Uplevel.', 'Gli oggetti passano al livello superiore, nella stessa posizione.'],
    how: [
      { t: 'Contesto attivo', d: 'Il comando parte dal gruppo o componente aperto per la modifica e porta gli oggetti nel contenitore che lo contiene (o nel modello, se è il livello più alto).' },
      { t: 'Posizione preservata', d: 'Gli oggetti vengono passati tramite un contenitore temporaneo che compone la trasformazione del livello interno con quella del livello esterno. Il contenitore viene poi esploso: nessuna geometria si sposta.' },
      { t: 'Un solo annullamento', d: 'L\'intera operazione è racchiusa in un unico passo: in caso di errore tutto torna come prima.' },
      { t: 'Avvisi chiari', d: 'Se non sei dentro un gruppo, o non hai selezionato nulla, un messaggio te lo spiega.' }
    ],
    pros: ['Sposta di livello senza spostare nello spazio', 'Un clic al posto di taglia e "incolla sul posto"', 'Annullabile con un solo Ctrl+Z', 'Disponibile anche in robo start'],
    solves: [
      { p: 'Estrarre oggetti da un gruppo con taglia e incolla rischia di spostarli o di sbagliare livello.', s: 'La trasformazione viene compensata automaticamente.' },
      { p: 'Con più livelli annidati non è chiaro dove finiscono gli oggetti.', s: 'Vanno sempre esattamente un livello più in alto.' }
    ],
    specs: [['Comando', 'Estrai al Livello Superiore'], ['Barra strumenti', '1 pulsante'], ['Livelli', 'Un livello alla volta'], ['Annullamento', 'Un solo Ctrl+Z']]
  }
];

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
  fillet: { name: 'robo Fillet', groups: [[{ i: 'fillet.png', l: 'robo Fillet: raccorda due linee' }]] },
  tangent: { name: 'robo Tangent', groups: [[{ i: 'tangent.png', l: 'robo Tangent: disegna la tangente' }]] },
  group_to_component: { name: 'Robo Group to Component', groups: [[{ i: 'g2c.png', l: 'Converti i gruppi in componenti' }]] },
  impact_object: { name: 'Robo Impact Object', groups: [[{ i: 'impact.png', l: 'Apri il report del peso geometrico' }]] },
  placement: { name: 'robo Placement', groups: [[{ i: 'placement.png', l: 'robo Placement: distribuisci su superficie' }]] },
  spacing_tool: { name: 'robo Spacing Tool', groups: [[{ i: 'spacing.png', l: 'robo Spacing Tool: copie lungo un percorso' }]] },
  proxy_manager: { name: 'robo Proxy Manager', groups: [[{ i: 'bbox.png', l: 'Crea proxy (scatola)' }, { i: 'lowres.png', l: 'Crea proxy (bassa risoluzione)' }, { i: 'restore.png', l: 'Ripristina proxy' }, { i: 'manager.png', l: 'Proxy Manager' }, { i: 'settings.png', l: 'Impostazioni' }, { i: 'help.png', l: 'Guida' }]] },
  scale_definition: { name: 'robo Scale Definition', groups: [[{ i: 'scale.png', l: 'Applica la scala alla geometria' }]] },
  section: { name: 'robo section', groups: [[{ i: 'main.png', l: 'Pannello dei piani di sezione' }, { i: 'isolate.png', l: 'Sposta / isola in un gruppo sezionabile' }]] },
  uplevel: { name: 'Robo Uplevel', groups: [[{ i: 'uplevel.png', l: 'Estrai al livello superiore' }]] },
  start: { name: 'robo start', groups: [[{ i: 'enter.png', l: 'Robo Enter' }, { i: 'rsel.png', l: 'Robo Select All' }], [{ i: 'grp.png', l: 'Crea gruppo' }, { i: 'cmp.png', l: 'Crea componente' }, { i: 'uniq.png', l: 'Rendi unico' }], [{ i: 'expl.png', l: 'Esplodi' }, { i: 'explc.png', l: 'Esplodi curve' }], [{ i: 'sall.png', l: 'Seleziona tutto' }, { i: 'inv.png', l: 'Inverti selezione' }, { i: 'clr.png', l: 'Deseleziona' }, { i: 'close.png', l: 'Chiudi gruppo' }, { i: 'up.png', l: 'Estrai al livello superiore' }, { i: 'weld.png', l: 'Salda spigoli' }, { i: 'face.png', l: 'Crea faccia' }], [{ i: 'hide.png', l: 'Nascondi oggetto' }, { i: 'unh1.png', l: "Mostra l'ultimo nascosto" }, { i: 'unhall.png', l: 'Mostra tutto' }], [{ i: 'guides.png', l: 'Rimuovi guide' }, { i: 'dims.png', l: 'Rimuovi quote' }], [{ i: 'zoom.png', l: 'Zoom sulla selezione' }, { i: 'center.png', l: 'Trova il centro' }], [{ i: 'cpt.png', l: 'Aggiungi punto centrale' }], [{ i: 'fix.png', l: 'Fix 101' }], [{ i: 'help.png', l: 'Guida' }]] },
  extract: { name: 'robo Extract', groups: [[{ i: 'copy.png', l: 'robo Extract: copia facce e linee fuori dal gruppo' }]] },
  demolition: { name: 'robo Demolition', groups: [[{ i: 'demolition.png', l: 'robo Demolition: riduce i triangoli della selezione' }]] },
  export_object: { name: 'robo Export object', groups: [[{ i: 'export.png', l: "Esporta la selezione in un nuovo file .skp" }]] },
  leans_on: { name: 'robo Leans on', groups: [[{ i: 'face.png', l: "Lean On Surface: appoggia alla faccia" }, { i: 'obstacle.png', l: "Lean Until Blocked: fino al primo ostacolo" }]] },
  library_explorer: { name: 'robo Library Explorer', groups: [[{ i: 'explorer.png', l: "Apri robo Library Explorer" }]] },
  reload: { name: 'Robo Reload', groups: [[{ i: 'reload.png', l: "Reload Plugin: ricarica il plugin" }, { i: 'target.png', l: "Change Target Plugin: scegli il plugin" }]] },
  standard: { name: 'robo Standard', groups: [[{ i: 'nuovo.png', l: "Nuovo" }, { i: 'apri.png', l: "Apri" }, { i: 'salva.png', l: "Salva" }, { i: 'salvanome.png', l: "Salva con nome" }], [{ i: 'taglia.png', l: "Taglia" }, { i: 'copia.png', l: "Copia" }, { i: 'incolla.png', l: "Incolla" }, { i: 'incollaposto.png', l: "Incolla sul posto" }], [{ i: 'elimina.png', l: "Elimina" }], [{ i: 'annulla.png', l: "Annulla" }, { i: 'ripristina.png', l: "Ripristina" }]] }
};

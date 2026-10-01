/* ============================================================================
   Robo Tools — traduzioni dei contenuti dei plugin (EN/DE/FR/ES)
   ----------------------------------------------------------------------------
   L'italiano resta l'origine in data.js/PLUGINS. Ogni blocco qui sotto aggiunge
   a I18N_PLUGINS[lang][id] i campi tradotti: tagline, simple, steps, how, pros,
   solves, specs — stessa struttura dei campi in PLUGINS. Un campo mancante
   ricade sull'italiano (vedi pf() in i18n.js).
   ============================================================================ */

/* ================================================================== BASEFORM */
I18N_PLUGINS.en.baseform = {
  tagline: 'Cube, cylinder, cone, spheres and torus: precise shapes in one click.',
  simple: 'Pick the object you need from the list (cube, cylinder, cone, frustum, sphere, icosphere or torus), set its measurements and click in the model: the shape appears exactly where you want, already smooth and ready to use.',
  steps: ['Open robo baseform from the toolbar or the Robo Tool menu.', 'Pick the object from the list and enter its measurements.', 'Move the mouse: you see the ghost shape. Click to place it.'],
  how: [
    { t: 'Seven objects in one list', d: 'Cube, cylinder, cone, frustum, UV Sphere, icosphere and torus, each with its own diagram. Changing the object changes which fields you fill in: radii, height, segments, rings or subdivisions.' },
    { t: 'Chain link for the three dimensions', d: 'The cube has width, depth and height linked by a chain: type one value and the others follow, so you always get a cube. Unlock the chain and each value changes on its own, turning the cube into a box; re-link it and the ratios you set stay fixed.' },
    { t: 'Live preview in the window', d: 'A small 3D preview inside the window updates as you type or change values, and you can rotate it by dragging. So you see the shape\'s proportions right away, before placing it.' },
    { t: 'Origin and axes of the object', d: 'Choose whether the object\'s origin is the corner of its bounding box, the centre of its base, or the centre of the object. The X (red), Y (green) and Z (blue) axes are drawn in the preview and move instantly when you change the position: you see where the insertion point will be and where the group\'s or component\'s axes will end up.' },
    { t: 'Preview in the 3D view', d: 'Once you confirm, a placement tool activates that shows the ghost shape directly in the model, with coloured markers for the axes. The window resizes itself in width and height.' },
    { t: 'Respects the model\'s units', d: 'Measurements are read and written using your model\'s units and precision: if you work in centimetres you enter centimetres, in inches you enter inches — no conversions.' },
    { t: 'Closed, smooth solids', d: 'Every shape is a closed solid with faces facing outward; spheres, cylinders and cones have softened edges, so they look smooth but stay editable. Creation is a single operation: one Ctrl+Z undoes everything.' },
    { t: 'Guide in five languages', d: 'The Help button, at the top next to the language globe, opens a guide that explains every function. It sits beside the main window, at the same height (640px wide), each object has a coloured card with its diagram, and it follows the chosen language: Italian, English, German, French and Spanish.' },
    { t: 'Settings remembered', d: 'Object, values, chain, type, position and language are saved and restored the next time you open SketchUp.' }
  ],
  pros: ['Built-in guide in five languages', 'Object axes visible in the preview', 'Seven basic shapes in one tool', 'Preview before confirming', 'No unit-conversion mistakes', 'Instant undo with one Ctrl+Z'],
  solves: [
    { p: 'A precise cube, cylinder or sphere normally takes several tools and steps, every time.', s: 'One single command: pick the shape, enter the measurements and click.' },
    { p: 'You don\'t know where the volume will land until it\'s drawn.', s: 'The ghost preview shows position and footprint before the click.' },
    { p: 'Figuring out where the created object\'s origin (its axes) will be takes trial and error.', s: 'The axes appear in the preview and move as soon as you change the position.' }
  ],
  specs: [['Objects', 'Cube (linkable X, Y, Z), cylinder, cone, frustum, UV Sphere, icosphere, torus'], ['Window', 'Fits its content, with a live 3D preview'], ['Guide', '640px window, in 5 languages'], ['Menu', 'Robo Tool › robo baseform'], ['Toolbar', '1 button'], ['Undo', 'A single Ctrl+Z']]
};
I18N_PLUGINS.de.baseform = {
  tagline: 'Würfel, Zylinder, Kegel, Kugeln und Torus: präzise Formen mit einem Klick.',
  simple: 'Wählen Sie das gewünschte Objekt aus der Liste (Würfel, Zylinder, Kegel, Kegelstumpf, Kugel, Ikosphäre oder Torus), stellen Sie die Maße ein und klicken Sie ins Modell: die Form erscheint genau dort, glatt und einsatzbereit.',
  steps: ['Öffnen Sie robo baseform über die Symbolleiste oder das Menü Robo Tool.', 'Wählen Sie das Objekt aus der Liste und geben Sie die Maße ein.', 'Bewegen Sie die Maus: Sie sehen die Geisterform. Klicken Sie, um sie zu platzieren.'],
  how: [
    { t: 'Sieben Objekte in einer Liste', d: 'Würfel, Zylinder, Kegel, Kegelstumpf, UV Sphere, Ikosphäre und Torus, jedes mit eigener Zeichnung. Beim Wechsel des Objekts ändern sich die auszufüllenden Felder: Radien, Höhe, Segmente, Ringe oder Unterteilungen.' },
    { t: 'Kette für die drei Dimensionen', d: 'Beim Würfel sind Breite, Tiefe und Höhe durch eine Kette verbunden: Geben Sie nur einen Wert ein, die anderen passen sich an, so bleibt es immer ein Würfel. Entsperren Sie die Kette, ändert sich jeder Wert einzeln und der Würfel wird zum Quader; verknüpfen Sie sie erneut, bleiben die eingestellten Verhältnisse erhalten.' },
    { t: 'Live-Vorschau im Fenster', d: 'Eine kleine 3D-Vorschau im Fenster aktualisiert sich beim Eingeben oder Ändern der Werte, und Sie können sie per Ziehen drehen. So sehen Sie sofort die Proportionen der Form, bevor Sie sie einfügen.' },
    { t: 'Ursprung und Achsen des Objekts', d: 'Wählen Sie, ob der Ursprung des Objekts die Ecke der Bounding Box, die Mitte der Basis oder die Mitte des Objekts ist. Die Achsen X (rot), Y (grün) und Z (blau) werden in der Vorschau gezeichnet und bewegen sich sofort bei Positionsänderung: Sie sehen, wo der Einfügepunkt und die Achsen der Gruppe oder Komponente liegen werden.' },
    { t: 'Vorschau in der 3D-Ansicht', d: 'Nach der Bestätigung aktiviert sich ein Platzierungswerkzeug, das die Geisterform direkt im Modell zeigt, mit farbigen Markierungen für die Achsen. Das Fenster passt sich selbst in Breite und Höhe an.' },
    { t: 'Respektiert die Einheiten des Modells', d: 'Die Maße werden mit den Einheiten und der Genauigkeit Ihres Modells gelesen und geschrieben: Arbeiten Sie in Zentimetern, geben Sie Zentimeter ein, in Zoll entsprechend Zoll — ohne Umrechnung.' },
    { t: 'Geschlossene, glatte Volumenkörper', d: 'Jede Form ist ein geschlossener Volumenkörper mit nach außen gerichteten Flächen; Kugeln, Zylinder und Kegel haben weiche Kanten, wirken also glatt, bleiben aber bearbeitbar. Die Erstellung ist ein einziger Vorgang: ein Strg+Z macht alles rückgängig.' },
    { t: 'Anleitung in fünf Sprachen', d: 'Die Schaltfläche Hilfe, oben neben dem Sprachen-Globus, öffnet eine Anleitung, die jede Funktion erklärt. Sie steht neben dem Hauptfenster, mit derselben Höhe (640px breit), jedes Objekt hat eine farbige Karte mit seiner Zeichnung und folgt der gewählten Sprache: Italienisch, Englisch, Deutsch, Französisch und Spanisch.' },
    { t: 'Gespeicherte Einstellungen', d: 'Objekt, Werte, Kette, Typ, Position und Sprache werden gespeichert und beim nächsten Start von SketchUp wiederhergestellt.' }
  ],
  pros: ['Integrierte Anleitung in fünf Sprachen', 'Objektachsen in der Vorschau sichtbar', 'Sieben Grundformen in einem Werkzeug', 'Vorschau vor der Bestätigung', 'Keine Einheiten-Umrechnungsfehler', 'Sofortiges Rückgängigmachen mit einem Strg+Z'],
  solves: [
    { p: 'Für einen präzisen Würfel, Zylinder oder eine Kugel braucht es normalerweise mehrere Werkzeuge und Schritte, jedes Mal.', s: 'Ein einziger Befehl: Form wählen, Maße eingeben, klicken.' },
    { p: 'Sie wissen nicht, wo das Volumen landet, bevor es gezeichnet ist.', s: 'Die Geistervorschau zeigt Position und Ausmaß vor dem Klick.' },
    { p: 'Zu verstehen, wo der Ursprung (die Achsen) des erstellten Objekts liegen wird, erfordert Ausprobieren.', s: 'Die Achsen erscheinen in der Vorschau und bewegen sich sofort bei Positionsänderung.' }
  ],
  specs: [['Objekte', 'Würfel (verknüpfbare X, Y, Z), Zylinder, Kegel, Kegelstumpf, UV Sphere, Ikosphäre, Torus'], ['Fenster', 'Passt sich dem Inhalt an, mit Live-3D-Vorschau'], ['Anleitung', '640px Fenster, in 5 Sprachen'], ['Menü', 'Robo Tool › robo baseform'], ['Symbolleiste', '1 Schaltfläche'], ['Rückgängig', 'Ein einziges Strg+Z']]
};
I18N_PLUGINS.fr.baseform = {
  tagline: 'Cube, cylindre, cône, sphères et tore : des formes précises en un clic.',
  simple: 'Choisissez dans la liste l\'objet dont vous avez besoin (cube, cylindre, cône, tronc de cône, sphère, icosphère ou tore), réglez les dimensions et cliquez dans le modèle : la forme apparaît exactement où vous voulez, déjà lisse et prête à l\'emploi.',
  steps: ['Ouvrez robo baseform depuis la barre d\'outils ou le menu Robo Tool.', 'Choisissez l\'objet dans la liste et saisissez ses dimensions.', 'Déplacez la souris : vous voyez la forme fantôme. Cliquez pour la placer.'],
  how: [
    { t: 'Sept objets dans une liste', d: 'Cube, cylindre, cône, tronc de cône, UV Sphere, icosphère et tore, chacun avec son schéma. Changer d\'objet change les champs à remplir : rayons, hauteur, segments, anneaux ou subdivisions.' },
    { t: 'Chaîne pour les trois dimensions', d: 'Le cube a largeur, profondeur et hauteur reliées par une chaîne : il suffit d\'écrire une seule valeur pour que les autres s\'ajustent, afin d\'obtenir toujours un cube. En déverrouillant la chaîne, chaque valeur se modifie seule et le cube devient un parallélépipède ; en la reliant, les rapports définis restent fixes.' },
    { t: 'Aperçu en direct dans la fenêtre', d: 'Un petit aperçu 3D dans la fenêtre se met à jour pendant que vous tapez ou changez les valeurs, et vous pouvez le faire pivoter en le glissant. Vous voyez ainsi tout de suite les proportions de la forme avant de l\'insérer.' },
    { t: 'Origine et axes de l\'objet', d: 'Choisissez si l\'origine de l\'objet est le coin de sa boîte englobante, le centre de sa base ou le centre de l\'objet. Les axes X (rouge), Y (vert) et Z (bleu) sont dessinés dans l\'aperçu et se déplacent instantanément quand vous changez la position : vous voyez où sera le point d\'insertion et où se trouveront les axes du groupe ou du composant.' },
    { t: 'Aperçu dans la vue 3D', d: 'Une fois confirmé, un outil de positionnement s\'active et montre la forme fantôme directement dans le modèle, avec des repères colorés pour les axes. La fenêtre s\'adapte d\'elle-même en largeur et en hauteur.' },
    { t: 'Respecte les unités du modèle', d: 'Les dimensions sont lues et écrites avec les unités et la précision de votre modèle : si vous travaillez en centimètres, saisissez des centimètres, en pouces des pouces — sans conversion.' },
    { t: 'Solides fermés et lisses', d: 'Chaque forme est un solide fermé aux faces orientées vers l\'extérieur ; sphères, cylindres et cônes ont des arêtes adoucies, donc lisses en apparence mais toujours modifiables. La création est une seule opération : un Ctrl+Z annule tout.' },
    { t: 'Guide en cinq langues', d: 'Le bouton Aide, en haut à côté du globe des langues, ouvre un guide qui explique chaque fonction. Il se place à côté de la fenêtre principale, à la même hauteur (640 px de large), chaque objet a une fiche colorée avec son schéma et suit la langue choisie : italien, anglais, allemand, français et espagnol.' },
    { t: 'Réglages mémorisés', d: 'Objet, valeurs, chaîne, type, position et langue sont enregistrés et retrouvés à la prochaine ouverture de SketchUp.' }
  ],
  pros: ['Guide intégré en cinq langues', 'Axes de l\'objet visibles dans l\'aperçu', 'Sept formes de base en un seul outil', 'Aperçu avant confirmation', 'Aucune erreur de conversion d\'unités', 'Annulation immédiate avec un Ctrl+Z'],
  solves: [
    { p: 'Un cube, un cylindre ou une sphère précis demandent normalement plusieurs outils et étapes, à chaque fois.', s: 'Une seule commande : choisissez la forme, saisissez les dimensions et cliquez.' },
    { p: 'Vous ne savez pas où le volume atterrira avant qu\'il ne soit dessiné.', s: 'L\'aperçu fantôme montre la position et l\'encombrement avant le clic.' },
    { p: 'Comprendre où se trouvera l\'origine (les axes) de l\'objet créé demande des essais.', s: 'Les axes apparaissent dans l\'aperçu et se déplacent dès que vous changez la position.' }
  ],
  specs: [['Objets', 'Cube (X, Y, Z reliables), cylindre, cône, tronc de cône, UV Sphere, icosphère, tore'], ['Fenêtre', 'S\'adapte au contenu, avec aperçu 3D en direct'], ['Guide', 'Fenêtre de 640 px, en 5 langues'], ['Menu', 'Robo Tool › robo baseform'], ['Barre d\'outils', '1 bouton'], ['Annulation', 'Un seul Ctrl+Z']]
};
I18N_PLUGINS.es.baseform = {
  tagline: 'Cubo, cilindro, cono, esferas y toro: formas precisas en un clic.',
  simple: 'Elige de la lista el objeto que necesitas (cubo, cilindro, cono, tronco de cono, esfera, icosfera o toro), ajusta las medidas y haz clic en el modelo: la forma aparece exactamente donde quieres, ya lisa y lista para usar.',
  steps: ['Abre robo baseform desde la barra de herramientas o el menú Robo Tool.', 'Elige el objeto de la lista e introduce sus medidas.', 'Mueve el ratón: ves la forma fantasma. Haz clic para colocarla.'],
  how: [
    { t: 'Siete objetos en una lista', d: 'Cubo, cilindro, cono, tronco de cono, UV Sphere, icosfera y toro, cada uno con su dibujo. Al cambiar de objeto cambian los campos a rellenar: radios, altura, segmentos, anillos o subdivisiones.' },
    { t: 'Cadena para las tres dimensiones', d: 'El cubo tiene anchura, profundidad y altura unidas por una cadena: basta escribir un solo valor y los demás se ajustan, así siempre obtienes un cubo. Al desbloquear la cadena cada valor cambia por su cuenta y el cubo se convierte en un paralelepípedo; al volver a enlazarla, las proporciones fijadas se mantienen.' },
    { t: 'Vista previa en vivo en la ventana', d: 'Una pequeña vista previa 3D en la ventana se actualiza mientras escribes o cambias valores, y puedes rotarla arrastrando. Así ves enseguida las proporciones de la forma antes de insertarla.' },
    { t: 'Origen y ejes del objeto', d: 'Elige si el origen del objeto es la esquina de su caja envolvente, el centro de su base o el centro del objeto. Los ejes X (rojo), Y (verde) y Z (azul) se dibujan en la vista previa y se mueven al instante al cambiar la posición: ves dónde estará el punto de inserción y dónde quedarán los ejes del grupo o componente.' },
    { t: 'Vista previa en la vista 3D', d: 'Al confirmar se activa una herramienta de colocación que muestra la forma fantasma directamente en el modelo, con marcadores de color para los ejes. La ventana se ajusta sola en ancho y alto.' },
    { t: 'Respeta las unidades del modelo', d: 'Las medidas se leen y escriben con las unidades y la precisión de tu modelo: si trabajas en centímetros introduces centímetros, en pulgadas pulgadas, sin conversiones.' },
    { t: 'Sólidos cerrados y lisos', d: 'Cada forma es un sólido cerrado con las caras orientadas hacia fuera; esferas, cilindros y conos tienen los bordes suavizados, así parecen lisos pero siguen siendo editables. La creación es una sola operación: un Ctrl+Z lo deshace todo.' },
    { t: 'Guía en cinco idiomas', d: 'El botón Ayuda, arriba junto al globo de idiomas, abre una guía que explica cada función. Se coloca junto a la ventana principal, con su misma altura (640 px de ancho), cada objeto tiene una ficha de color con su dibujo y sigue el idioma elegido: italiano, inglés, alemán, francés y español.' },
    { t: 'Ajustes recordados', d: 'Objeto, valores, cadena, tipo, posición e idioma se guardan y se recuperan la próxima vez que abras SketchUp.' }
  ],
  pros: ['Guía integrada en cinco idiomas', 'Ejes del objeto visibles en la vista previa', 'Siete formas básicas en una sola herramienta', 'Vista previa antes de confirmar', 'Sin errores de conversión de unidades', 'Deshacer inmediato con un Ctrl+Z'],
  solves: [
    { p: 'Un cubo, cilindro o esfera precisos normalmente requieren varias herramientas y pasos, cada vez.', s: 'Un solo comando: elige la forma, introduce las medidas y haz clic.' },
    { p: 'No sabes dónde aterrizará el volumen hasta que está dibujado.', s: 'La vista previa fantasma muestra posición y tamaño antes del clic.' },
    { p: 'Entender dónde estará el origen (los ejes) del objeto creado requiere prueba y error.', s: 'Los ejes aparecen en la vista previa y se mueven en cuanto cambias la posición.' }
  ],
  specs: [['Objetos', 'Cubo (X, Y, Z enlazables), cilindro, cono, tronco de cono, UV Sphere, icosfera, toro'], ['Ventana', 'Se ajusta al contenido, con vista previa 3D en vivo'], ['Guía', 'Ventana de 640 px, en 5 idiomas'], ['Menú', 'Robo Tool › robo baseform'], ['Barra de herramientas', '1 botón'], ['Deshacer', 'Un solo Ctrl+Z']]
};

/* =================================================================== EXTRACT */
I18N_PLUGINS.en.extract = {
  tagline: 'Copy faces and lines out of groups, in the same position.',
  simple: 'Hover a face or a line of any group or component, even closed ones: Robo highlights it and, with one click, makes a copy of it outside the group, in the exact same position and slope. Works on tilted planes and organic shapes, and there\'s nothing to open or select first.',
  steps: ['Click the robo Extract button on the toolbar (or in the menu): the tool starts and the preferences window opens.', 'Hover a face or a line: it turns orange and the status bar says where the copy will go.', 'Click: the copy appears in a new group, already selected. Shift+click to add more.'],
  how: [
    { t: 'Reaches any context', d: 'The tool reaches faces and lines inside closed groups and components, even nested ones, and reads the position from the exact instance under the cursor: translations, rotations, scaling and mirroring never move the copy.' },
    { t: 'Where the copy goes', d: 'With nothing open the copy is created at the model root, outside the source group. With a group open: if you pick geometry from another group it goes into the open group; if you pick geometry from the same group it goes up one level.' },
    { t: 'Organic shapes', d: 'On an organic surface a face extends to neighbouring faces until the fold exceeds the "smoothness limit". In Preferences a slider with a live preview shows how much the selection changes.' },
    { t: 'Multi-select and curves', d: 'Shift+click adds several faces, segments or curves from the same group and copies them together into one group. Pointing at one segment of an arc or a circle takes the whole curve.' }
  ],
  pros: ['No need to open groups', 'Position and slope identical to the original', 'Works on tilted and organic surfaces', 'Materials, tags and interface in 5 languages'],
  solves: [
    { p: 'Extracting a face from a group means opening it, copying and pasting, risking moving it.', s: 'One click creates the copy already in the right position, without opening anything.' },
    { p: 'Organic surfaces are made of hundreds of small faces.', s: 'The smooth patch is taken all at once, with an adjustable limit.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Extract (one entry)'], ['Toolbar', '1 button'], ['Languages', 'Italiano, English, Deutsch, Français, Español'], ['Undo', 'A single Ctrl+Z']]
};
I18N_PLUGINS.de.extract = {
  tagline: 'Kopiert Flächen und Linien aus Gruppen, an derselben Position.',
  simple: 'Fahren Sie mit der Maus über eine Fläche oder eine Linie einer beliebigen, auch geschlossenen Gruppe oder Komponente: Robo hebt sie hervor und erstellt mit einem Klick eine Kopie außerhalb der Gruppe, an exakt derselben Position und Neigung. Funktioniert auf geneigten Ebenen und organischen Formen, ohne dass Sie etwas öffnen oder auswählen müssen.',
  steps: ['Klicken Sie auf robo Extract in der Symbolleiste (oder im Menü): das Werkzeug startet und das Einstellungsfenster öffnet sich.', 'Fahren Sie mit der Maus über eine Fläche oder Linie: sie wird orange und die Statusleiste zeigt, wohin die Kopie geht.', 'Klicken Sie: die Kopie erscheint in einer neuen, bereits ausgewählten Gruppe. Umschalt+Klick fügt weitere hinzu.'],
  how: [
    { t: 'Erreicht jeden Kontext', d: 'Das Werkzeug erreicht Flächen und Linien in geschlossenen, auch verschachtelten Gruppen und Komponenten und liest die Position aus der exakten Instanz unter dem Cursor: Verschiebungen, Drehungen, Skalierungen und Spiegelungen verschieben die Kopie nicht.' },
    { t: 'Wohin die Kopie geht', d: 'Ohne geöffneten Kontext entsteht die Kopie an der Modellwurzel, außerhalb der Ursprungsgruppe. Bei geöffneter Gruppe: Wählen Sie Geometrie einer anderen Gruppe, landet sie in der geöffneten Gruppe; wählen Sie Geometrie derselben Gruppe, geht sie eine Ebene höher.' },
    { t: 'Organische Formen', d: 'Auf einer organischen Oberfläche erweitert sich eine Fläche auf benachbarte Flächen, bis die Knickung das "Glättungslimit" überschreitet. In den Einstellungen zeigt ein Schieberegler mit Live-Vorschau, wie stark sich die Auswahl ändert.' },
    { t: 'Mehrfachauswahl und Kurven', d: 'Umschalt+Klick fügt mehrere Flächen, Segmente oder Kurven derselben Gruppe hinzu und kopiert sie zusammen in eine Gruppe. Zeigt man auf ein Segment eines Bogens oder Kreises, wird die ganze Kurve übernommen.' }
  ],
  pros: ['Gruppen müssen nicht geöffnet werden', 'Position und Neigung identisch zum Original', 'Funktioniert auf geneigten und organischen Oberflächen', 'Materialien, Tags und Oberfläche in 5 Sprachen'],
  solves: [
    { p: 'Eine Fläche aus einer Gruppe zu extrahieren bedeutet Öffnen, Kopieren und Einfügen, mit dem Risiko, sie zu verschieben.', s: 'Ein Klick erstellt die Kopie sofort an der richtigen Position, ohne etwas zu öffnen.' },
    { p: 'Organische Oberflächen bestehen aus Hunderten kleiner Flächen.', s: 'Der glatte Bereich wird auf einmal übernommen, mit einstellbarem Limit.' }
  ],
  specs: [['Menü', 'Robo Tool › robo Extract (ein Eintrag)'], ['Symbolleiste', '1 Schaltfläche'], ['Sprachen', 'Italiano, English, Deutsch, Français, Español'], ['Rückgängig', 'Ein einziges Strg+Z']]
};
I18N_PLUGINS.fr.extract = {
  tagline: 'Copie faces et lignes hors des groupes, à la même position.',
  simple: 'Survolez une face ou une ligne de n\'importe quel groupe ou composant, même fermé : Robo la met en surbrillance et, en un clic, en crée une copie hors du groupe, exactement à la même position et inclinaison. Fonctionne sur des plans inclinés et des formes organiques, sans rien ouvrir ni sélectionner.',
  steps: ['Cliquez sur le bouton robo Extract dans la barre d\'outils (ou dans le menu) : l\'outil démarre et la fenêtre des préférences s\'ouvre.', 'Survolez une face ou une ligne : elle devient orange et la barre d\'état indique où ira la copie.', 'Cliquez : la copie apparaît dans un nouveau groupe, déjà sélectionnée. Maj+clic pour en ajouter d\'autres.'],
  how: [
    { t: 'Atteint n\'importe quel contexte', d: 'L\'outil atteint les faces et les lignes à l\'intérieur de groupes et composants fermés, même imbriqués, et lit la position depuis l\'instance exacte sous le curseur : translations, rotations, mises à l\'échelle et symétries ne déplacent jamais la copie.' },
    { t: 'Où va la copie', d: 'Sans rien d\'ouvert, la copie naît à la racine du modèle, hors du groupe d\'origine. Avec un groupe ouvert : si vous choisissez la géométrie d\'un autre groupe, elle entre dans le groupe ouvert ; si vous choisissez sa propre géométrie, elle monte d\'un niveau.' },
    { t: 'Formes organiques', d: 'Sur une surface organique, une face s\'étend aux faces voisines jusqu\'à ce que le pli dépasse la « limite de lissage ». Dans les Préférences, un curseur avec aperçu en direct montre à quel point la sélection change.' },
    { t: 'Sélection multiple et courbes', d: 'Maj+clic ajoute plusieurs faces, segments ou courbes du même groupe et les copie ensemble dans un seul groupe. Pointer un segment d\'un arc ou d\'un cercle prend toute la courbe.' }
  ],
  pros: ['Pas besoin d\'ouvrir les groupes', 'Position et inclinaison identiques à l\'original', 'Fonctionne sur surfaces inclinées et organiques', 'Matériaux, tags et interface en 5 langues'],
  solves: [
    { p: 'Extraire une face d\'un groupe signifie l\'ouvrir, copier-coller, avec le risque de la déplacer.', s: 'Un clic crée la copie déjà à la bonne position, sans rien ouvrir.' },
    { p: 'Les surfaces organiques sont faites de centaines de petites faces.', s: 'La portion lisse est prise en une fois, avec une limite réglable.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Extract (une seule entrée)'], ['Barre d\'outils', '1 bouton'], ['Langues', 'Italiano, English, Deutsch, Français, Español'], ['Annulation', 'Un seul Ctrl+Z']]
};
I18N_PLUGINS.es.extract = {
  tagline: 'Copia caras y líneas fuera de los grupos, en la misma posición.',
  simple: 'Pasa el ratón sobre una cara o una línea de cualquier grupo o componente, incluso cerrado: Robo la resalta y, con un clic, crea una copia fuera del grupo, en la misma posición e inclinación exactas. Funciona en planos inclinados y formas orgánicas, sin necesidad de abrir ni seleccionar nada.',
  steps: ['Haz clic en el botón robo Extract de la barra de herramientas (o en el menú): la herramienta se inicia y se abre la ventana de preferencias.', 'Pasa el ratón sobre una cara o línea: se vuelve naranja y la barra de estado indica adónde irá la copia.', 'Haz clic: la copia aparece en un nuevo grupo, ya seleccionada. Mayús+clic para añadir más.'],
  how: [
    { t: 'Llega a cualquier contexto', d: 'La herramienta llega a caras y líneas dentro de grupos y componentes cerrados, incluso anidados, y lee la posición desde la instancia exacta bajo el cursor: traslaciones, rotaciones, escalados y simetrías nunca mueven la copia.' },
    { t: 'Adónde va la copia', d: 'Sin nada abierto la copia nace en la raíz del modelo, fuera del grupo de origen. Con un grupo abierto: si eliges geometría de otro grupo entra en el grupo abierto; si eliges su propia geometría, sube un nivel.' },
    { t: 'Formas orgánicas', d: 'En una superficie orgánica una cara se extiende a las caras vecinas hasta que el pliegue supera el "límite de suavizado". En Preferencias, un deslizador con vista previa en vivo muestra cuánto cambia la selección.' },
    { t: 'Selección múltiple y curvas', d: 'Mayús+clic añade varias caras, segmentos o curvas del mismo grupo y las copia juntas en un solo grupo. Señalar un segmento de un arco o círculo toma toda la curva.' }
  ],
  pros: ['No hace falta abrir los grupos', 'Posición e inclinación idénticas al original', 'Funciona en superficies inclinadas y orgánicas', 'Materiales, etiquetas e interfaz en 5 idiomas'],
  solves: [
    { p: 'Extraer una cara de un grupo significa abrirlo, copiar y pegar, con el riesgo de moverla.', s: 'Un clic crea la copia ya en la posición correcta, sin abrir nada.' },
    { p: 'Las superficies orgánicas están hechas de cientos de caras pequeñas.', s: 'La porción lisa se toma de una vez, con un límite ajustable.' }
  ],
  specs: [['Menú', 'Robo Tool › robo Extract (una sola entrada)'], ['Barra de herramientas', '1 botón'], ['Idiomas', 'Italiano, English, Deutsch, Français, Español'], ['Deshacer', 'Un solo Ctrl+Z']]
};

/* ================================================================ DEMOLITION */
I18N_PLUGINS.en.demolition = {
  tagline: 'Reduces the triangle count of a heavy mesh, keeping its shape.',
  simple: 'Select heavy faces, groups or components: robo Demolition previews a lighter version, drawn on the model, and a slider lets you decide how much to reduce. Uses Open3D (Python, locally on your computer); nested objects stay separate objects and materials stay in place.',
  steps: ['Select the faces, groups or components to lighten.', 'Press Preview: the lighter mesh is drawn in blue on the model. Move the slider to reduce more or less.', 'Press Apply: a single Ctrl+Z restores everything.'],
  how: [
    { t: 'Everything local', d: 'No server, no online service: the plugin runs a Python script with Open3D directly, in the background, without blocking SketchUp. Elapsed time is shown and there\'s a Cancel button.' },
    { t: 'Two methods', d: 'Quadric removes the triangles that change the shape least (better quality). Voxel merges points into grid cells (very fast and very light).' },
    { t: 'Objects, materials and faces', d: 'Every nested group and component is reduced in its own place: it stays a separate object and is never merged with the others. Materials (front and back) and tags are kept, and reversed faces on closed shapes are corrected.' }
  ],
  pros: ['Free and offline', 'Preview with an adjustment slider', 'Groups and components stay separate objects', 'Materials preserved', 'A single Undo'],
  solves: [
    { p: 'Imported meshes have hundreds of thousands of triangles and slow the model down.', s: 'A copy with the triangle percentage you choose, with nearly the same shape.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Demolition (one entry)'], ['Toolbar', '1 button'], ['Requires', 'Python 3 + Open3D (pip install open3d)'], ['Languages', 'Italiano, English, Deutsch, Français, Español']]
};
I18N_PLUGINS.de.demolition = {
  tagline: 'Reduziert die Dreiecke eines schweren Mesh, ohne die Form zu verändern.',
  simple: 'Wählen Sie schwere Flächen, Gruppen oder Komponenten: robo Demolition zeigt die leichtere Version als Vorschau direkt im Modell, und ein Regler bestimmt, wie stark reduziert wird. Nutzt Open3D (Python, lokal auf Ihrem Computer); innere Objekte bleiben eigene Objekte, Materialien bleiben an ihrem Platz.',
  steps: ['Wählen Sie die zu erleichternden Flächen, Gruppen oder Komponenten aus.', 'Drücken Sie Vorschau: das leichtere Mesh wird blau im Modell gezeichnet. Bewegen Sie den Regler, um mehr oder weniger zu reduzieren.', 'Drücken Sie Anwenden: ein einziges Strg+Z stellt alles wieder her.'],
  how: [
    { t: 'Alles lokal', d: 'Kein Server, kein Online-Dienst: das Plugin startet direkt ein Python-Skript mit Open3D im Hintergrund, ohne SketchUp zu blockieren. Die verstrichene Zeit ist sichtbar, und es gibt eine Abbrechen-Schaltfläche.' },
    { t: 'Zwei Methoden', d: 'Quadric entfernt die Dreiecke, die die Form am wenigsten verändern (bessere Qualität). Voxel fasst Punkte in Rasterzellen zusammen (sehr schnell und sehr leicht).' },
    { t: 'Objekte, Materialien und Flächen', d: 'Jede verschachtelte Gruppe und Komponente wird an ihrem Platz reduziert: sie bleibt ein eigenes Objekt und wird nicht mit anderen zusammengeführt. Materialien (Vorder- und Rückseite) und Tags bleiben erhalten, umgekehrte Flächen auf geschlossenen Formen werden korrigiert.' }
  ],
  pros: ['Kostenlos und offline', 'Vorschau mit Regler', 'Gruppen und Komponenten bleiben eigene Objekte', 'Materialien bleiben erhalten', 'Ein einziges Undo'],
  solves: [
    { p: 'Importierte Meshes haben Hunderttausende Dreiecke und verlangsamen das Modell.', s: 'Eine Kopie mit dem gewählten Dreiecksanteil, mit fast identischer Form.' }
  ],
  specs: [['Menü', 'Robo Tool › robo Demolition (ein Eintrag)'], ['Symbolleiste', '1 Schaltfläche'], ['Erfordert', 'Python 3 + Open3D (pip install open3d)'], ['Sprachen', 'Italiano, English, Deutsch, Français, Español']]
};
I18N_PLUGINS.fr.demolition = {
  tagline: 'Réduit les triangles d\'un maillage lourd, en gardant la forme.',
  simple: 'Sélectionnez des faces, groupes ou composants lourds : robo Demolition affiche un aperçu de la version plus légère, dessinée sur le modèle, et une barre permet de décider combien démolir. Utilise Open3D (Python, en local sur votre ordinateur) ; les objets internes restent des objets et les matériaux restent en place.',
  steps: ['Sélectionnez les faces, groupes ou composants à alléger.', 'Appuyez sur Aperçu : le maillage plus léger est dessiné en bleu sur le modèle. Déplacez la barre pour démolir plus ou moins.', 'Appuyez sur Appliquer : un seul Ctrl+Z restaure tout.'],
  how: [
    { t: 'Tout en local', d: 'Aucun serveur ni service en ligne : le plugin lance directement un script Python avec Open3D, en arrière-plan, sans bloquer SketchUp. Le temps écoulé est visible et un bouton Annuler est disponible.' },
    { t: 'Deux méthodes', d: 'Quadric retire les triangles qui changent le moins la forme (meilleure qualité). Voxel fusionne les points en cellules d\'une grille (très rapide et très léger).' },
    { t: 'Objets, matériaux et faces', d: 'Chaque groupe et composant imbriqué est réduit à sa place : il reste un objet séparé et n\'est pas fusionné avec les autres. Les matériaux (avant et arrière) et les tags sont conservés, et les faces inversées sur les formes fermées sont corrigées.' }
  ],
  pros: ['Gratuit et hors ligne', 'Aperçu avec curseur de réglage', 'Groupes et composants restent des objets séparés', 'Matériaux conservés', 'Un seul Undo'],
  solves: [
    { p: 'Les maillages importés ont des centaines de milliers de triangles et ralentissent le modèle.', s: 'Une copie avec le pourcentage de triangles choisi, avec une forme presque identique.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Demolition (une seule entrée)'], ['Barre d\'outils', '1 bouton'], ['Nécessite', 'Python 3 + Open3D (pip install open3d)'], ['Langues', 'Italiano, English, Deutsch, Français, Español']]
};
I18N_PLUGINS.es.demolition = {
  tagline: 'Reduce los triángulos de una malla pesada, manteniendo la forma.',
  simple: 'Selecciona caras, grupos o componentes pesados: robo Demolition muestra una vista previa de la versión más ligera, dibujada sobre el modelo, y una barra decide cuánto demoler. Usa Open3D (Python, en local en tu ordenador); los objetos internos siguen siendo objetos y los materiales permanecen en su sitio.',
  steps: ['Selecciona las caras, grupos o componentes a aligerar.', 'Pulsa Vista previa: la malla más ligera se dibuja en azul sobre el modelo. Mueve la barra para demoler más o menos.', 'Pulsa Aplicar: un solo Ctrl+Z restaura todo.'],
  how: [
    { t: 'Todo en local', d: 'Sin servidor ni servicio en línea: el plugin ejecuta directamente un script Python con Open3D en segundo plano, sin bloquear SketchUp. El tiempo transcurrido es visible y hay un botón Cancelar.' },
    { t: 'Dos métodos', d: 'Quadric elimina los triángulos que cambian menos la forma (mejor calidad). Voxel une los puntos en celdas de una cuadrícula (muy rápido y muy ligero).' },
    { t: 'Objetos, materiales y caras', d: 'Cada grupo y componente anidado se reduce en su propio lugar: sigue siendo un objeto separado y no se fusiona con los demás. Los materiales (frente y reverso) y las etiquetas se mantienen, y las caras invertidas en formas cerradas se corrigen.' }
  ],
  pros: ['Gratis y sin conexión', 'Vista previa con control deslizante', 'Grupos y componentes siguen siendo objetos separados', 'Materiales conservados', 'Un solo deshacer'],
  solves: [
    { p: 'Las mallas importadas tienen cientos de miles de triángulos y ralentizan el modelo.', s: 'Una copia con el porcentaje de triángulos que elijas, con la forma casi idéntica.' }
  ],
  specs: [['Menú', 'Robo Tool › robo Demolition (una sola entrada)'], ['Barra de herramientas', '1 botón'], ['Requiere', 'Python 3 + Open3D (pip install open3d)'], ['Idiomas', 'Italiano, English, Deutsch, Français, Español']]
};

/* ============================================================= EXPORT OBJECT */
I18N_PLUGINS.en.export_object = {
  tagline: 'Export the selected objects to a new .skp file.',
  simple: 'Select part of the model, choose a folder and a name: Robo saves it as a separate SketchUp file, in the same position, without touching your open model.',
  steps: ['Select the objects to export.', 'Press robo Export object and choose the destination folder.', 'Confirm the file name: the new .skp is created.'],
  how: [
    { t: 'The model stays untouched', d: 'The selection is briefly wrapped in a temporary group, saved to disk, and the operation is undone right after: the open model is never closed, reopened or altered.' },
    { t: 'Original position kept', d: 'Objects in the new file stay at the same coordinates they had in the model, so you can re-import or align them without any shift.' },
    { t: 'With everything it needs', d: 'The components and materials the objects use are saved along with them, without dragging along the rest of the model.' },
    { t: 'Suggested name and protections', d: 'The proposed name comes from the current file (name_selection); characters not valid on Windows are replaced, and if the file already exists you\'re asked whether to overwrite it.' }
  ],
  pros: ['A clean file with only what\'s needed', 'The open model is never touched', 'No copy-paste between windows', 'Original coordinates preserved'],
  solves: [
    { p: 'Saving just one part of the model means copying, opening a new file and pasting in place.', s: 'One command: select and export.' },
    { p: '"Save as" and deleting the rest risks ruining the original file.', s: 'The export happens without modifying the open file.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Export object'], ['Toolbar', '1 button'], ['Format', '.skp file'], ['Undo', 'The model is never modified']]
};
I18N_PLUGINS.de.export_object = {
  tagline: 'Exportiert die ausgewählten Objekte in eine neue .skp-Datei.',
  simple: 'Wählen Sie einen Teil des Modells aus, wählen Sie Ordner und Namen: Robo speichert ihn als separate SketchUp-Datei, an derselben Position, ohne Ihr geöffnetes Modell zu berühren.',
  steps: ['Wählen Sie die zu exportierenden Objekte aus.', 'Drücken Sie robo Export object und wählen Sie den Zielordner.', 'Bestätigen Sie den Dateinamen: die neue .skp-Datei wird erstellt.'],
  how: [
    { t: 'Das Modell bleibt unberührt', d: 'Die Auswahl wird kurz in eine temporäre Gruppe eingeschlossen, auf der Festplatte gespeichert, und der Vorgang wird sofort danach rückgängig gemacht: das geöffnete Modell wird nie geschlossen, wieder geöffnet oder verändert.' },
    { t: 'Ursprüngliche Position erhalten', d: 'Die Objekte in der neuen Datei behalten dieselben Koordinaten wie im Modell, sodass Sie sie ohne Verschiebung wieder importieren oder ausrichten können.' },
    { t: 'Mit allem Nötigen', d: 'Die von den Objekten verwendeten Komponenten und Materialien werden mitgespeichert, ohne den Rest des Modells mitzunehmen.' },
    { t: 'Vorgeschlagener Name und Schutz', d: 'Der vorgeschlagene Name stammt aus der aktuellen Datei (name_auswahl); für Windows ungültige Zeichen werden ersetzt, und falls die Datei bereits existiert, werden Sie gefragt, ob überschrieben werden soll.' }
  ],
  pros: ['Eine saubere Datei mit nur dem Nötigen', 'Das geöffnete Modell wird nie berührt', 'Kein Kopieren-Einfügen zwischen Fenstern', 'Ursprüngliche Koordinaten erhalten'],
  solves: [
    { p: 'Um nur einen Teil des Modells zu speichern, muss man kopieren, eine neue Datei öffnen und einfügen.', s: 'Ein Befehl: auswählen und exportieren.' },
    { p: '"Speichern unter" und den Rest löschen riskiert, die Originaldatei zu beschädigen.', s: 'Der Export erfolgt, ohne die geöffnete Datei zu verändern.' }
  ],
  specs: [['Menü', 'Robo Tool › robo Export object'], ['Symbolleiste', '1 Schaltfläche'], ['Format', '.skp-Datei'], ['Rückgängig', 'Das Modell wird nie verändert']]
};
I18N_PLUGINS.fr.export_object = {
  tagline: 'Exporte les objets sélectionnés dans un nouveau fichier .skp.',
  simple: 'Sélectionnez une partie du modèle, choisissez un dossier et un nom : Robo l\'enregistre dans un fichier SketchUp séparé, à la même position, sans toucher votre modèle ouvert.',
  steps: ['Sélectionnez les objets à exporter.', 'Appuyez sur robo Export object et choisissez le dossier de destination.', 'Confirmez le nom du fichier : le nouveau .skp est créé.'],
  how: [
    { t: 'Le modèle reste intact', d: 'La sélection est brièvement enfermée dans un groupe temporaire, enregistrée sur disque, puis l\'opération est immédiatement annulée : le modèle ouvert n\'est jamais fermé, rouvert ni modifié.' },
    { t: 'Position d\'origine conservée', d: 'Les objets du nouveau fichier gardent les mêmes coordonnées qu\'ils avaient dans le modèle, afin de pouvoir les réimporter ou les aligner sans décalage.' },
    { t: 'Avec tout ce qu\'il faut', d: 'Les composants et matériaux utilisés par les objets sont enregistrés avec eux, sans emporter le reste du modèle.' },
    { t: 'Nom suggéré et protections', d: 'Le nom proposé vient du fichier actuel (nom_sélection) ; les caractères non valides pour Windows sont remplacés, et si le fichier existe déjà, on vous demande si vous voulez l\'écraser.' }
  ],
  pros: ['Un fichier propre avec seulement le nécessaire', 'Le modèle ouvert n\'est jamais touché', 'Aucun copier-coller entre fenêtres', 'Coordonnées d\'origine préservées'],
  solves: [
    { p: 'Pour enregistrer une seule partie du modèle, il faut copier, ouvrir un nouveau fichier et coller.', s: 'Une commande : vous sélectionnez et exportez.' },
    { p: '« Enregistrer sous » puis supprimer le reste risque d\'abîmer le fichier d\'origine.', s: 'L\'export se fait sans modifier le fichier ouvert.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Export object'], ['Barre d\'outils', '1 bouton'], ['Format', 'Fichier .skp'], ['Annulation', 'Le modèle n\'est jamais modifié']]
};
I18N_PLUGINS.es.export_object = {
  tagline: 'Exporta los objetos seleccionados a un nuevo archivo .skp.',
  simple: 'Selecciona una parte del modelo, elige carpeta y nombre: Robo la guarda en un archivo SketchUp separado, en la misma posición, sin tocar tu modelo abierto.',
  steps: ['Selecciona los objetos a exportar.', 'Pulsa robo Export object y elige la carpeta de destino.', 'Confirma el nombre del archivo: se crea el nuevo .skp.'],
  how: [
    { t: 'El modelo permanece intacto', d: 'La selección se encierra brevemente en un grupo temporal, se guarda en disco y justo después la operación se deshace: el modelo abierto nunca se cierra, se reabre ni se modifica.' },
    { t: 'Posición original mantenida', d: 'Los objetos en el nuevo archivo conservan las mismas coordenadas que tenían en el modelo, para poder reimportarlos o alinearlos sin desplazamientos.' },
    { t: 'Con todo lo necesario', d: 'Los componentes y materiales que usan los objetos se guardan junto con ellos, sin arrastrar el resto del modelo.' },
    { t: 'Nombre sugerido y protecciones', d: 'El nombre propuesto deriva del archivo actual (nombre_selección); los caracteres no válidos en Windows se sustituyen, y si el archivo ya existe se pregunta si sobrescribirlo.' }
  ],
  pros: ['Un archivo limpio con solo lo necesario', 'El modelo abierto nunca se toca', 'Sin copiar y pegar entre ventanas', 'Coordenadas originales preservadas'],
  solves: [
    { p: 'Guardar solo una parte del modelo obliga a copiar, abrir un nuevo archivo y pegar.', s: 'Un comando: seleccionas y exportas.' },
    { p: '"Guardar como" y borrar el resto arriesga a dañar el archivo original.', s: 'La exportación ocurre sin modificar el archivo abierto.' }
  ],
  specs: [['Menú', 'Robo Tool › robo Export object'], ['Barra de herramientas', '1 botón'], ['Formato', 'Archivo .skp'], ['Deshacer', 'El modelo nunca se modifica']]
};

/* ---------------------------------------------------------------- FILLET */
I18N_PLUGINS.en.fillet = {
  tagline: 'Fillets and chamfers between two lines, on any plane.',
  simple: 'Click two lines that meet at a corner, choose the radius: the sharp corner becomes a smooth curve (or a chamfer). Works on any plane in space, not just the floor.',
  steps: ['Activate robo Fillet and click the first line (it turns red).', 'Click the second line (blue) and enter radius and segment count.', 'Check the green preview and press Apply.'],
  how: [
    { t: 'Coplanarity check', d: 'The tool checks that the two lines lie on the same plane and computes the intersection, even when the lines don\'t actually touch (a virtual corner).' },
    { t: 'Live green preview', d: 'As you change the radius you immediately see the resulting arc. The maximum possible radius is computed for you, so you never get an impossible fillet.' },
    { t: 'Curve or chamfer', d: 'The segment count goes from 1 to 99: with 1 you get a clean chamfer, with more segments an increasingly smooth arc.' },
    { t: 'Ready for the next fillet', d: 'After Apply the tool stays armed. If the lines didn\'t touch, it offers to join them; a guide point is left at the centre of the arc.' }
  ],
  pros: ['Precise radius in the model\'s units', 'Works on tilted planes and in 3D', 'Even with edges that don\'t touch', 'Radius and segments remembered between fillets'],
  solves: [
    { p: 'Rounding a corner between two edges means building the arc by hand and then trimming the lines.', s: 'Two clicks and a radius: arc built and edges cleaned up.' },
    { p: 'On tilted planes, building a tangent arc is slow and imprecise.', s: 'The calculation happens on the plane of the two lines, whatever its orientation.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Fillet'], ['Segments', '1 – 99 (1 = chamfer)'], ['Planes', 'Any orientation'], ['Undo', 'A single Ctrl+Z per fillet']]
};
I18N_PLUGINS.de.fillet = {
  tagline: 'Rundungen und Fasen zwischen zwei Linien, auf jeder Ebene.',
  simple: 'Klicken Sie auf zwei Linien, die sich in einem Winkel treffen, wählen Sie den Radius: die scharfe Ecke wird zu einer weichen Kurve (oder einer Fase). Funktioniert auf jeder Ebene im Raum, nicht nur auf dem Boden.',
  steps: ['Aktivieren Sie robo Fillet und klicken Sie die erste Linie (färbt sich rot).', 'Klicken Sie die zweite Linie (blau) und geben Sie Radius und Segmentzahl ein.', 'Prüfen Sie die grüne Vorschau und drücken Sie Anwenden.'],
  how: [
    { t: 'Komplanaritätsprüfung', d: 'Das Werkzeug prüft, ob die zwei Linien auf derselben Ebene liegen, und berechnet den Schnittpunkt, auch wenn sich die Linien nicht wirklich berühren (virtueller Winkel).' },
    { t: 'Live-Vorschau in Grün', d: 'Während Sie den Radius ändern, sehen Sie sofort den entstehenden Bogen. Der maximal mögliche Radius wird für Sie berechnet, sodass Sie nie eine unmögliche Rundung erhalten.' },
    { t: 'Kurve oder Fase', d: 'Die Segmentzahl reicht von 1 bis 99: mit 1 erhalten Sie eine klare Fase, mit mehr Segmenten einen zunehmend glatten Bogen.' },
    { t: 'Bereit für die nächste Rundung', d: 'Nach Anwenden bleibt das Werkzeug aktiv. Berührten sich die Linien nicht, wird angeboten, sie zu verbinden; in der Mitte des Bogens bleibt ein Hilfspunkt.' }
  ],
  pros: ['Präziser Radius in den Einheiten des Modells', 'Funktioniert auf geneigten Ebenen und in 3D', 'Auch bei Kanten, die sich nicht berühren', 'Radius und Segmente werden zwischen Rundungen gemerkt'],
  solves: [
    { p: 'Eine Ecke zwischen zwei Kanten abzurunden erfordert normalerweise, den Bogen von Hand zu bauen und die Linien zu schneiden.', s: 'Zwei Klicks und ein Radius: Bogen gebaut, Kanten bereinigt.' },
    { p: 'Auf geneigten Ebenen einen tangentialen Bogen zu bauen ist langsam und ungenau.', s: 'Die Berechnung erfolgt auf der Ebene der beiden Linien, unabhängig von ihrer Ausrichtung.' }
  ],
  specs: [['Menü', 'Robo Tool › robo Fillet'], ['Segmente', '1 – 99 (1 = Fase)'], ['Ebenen', 'Beliebige Ausrichtung'], ['Rückgängig', 'Ein einziges Strg+Z pro Rundung']]
};
I18N_PLUGINS.fr.fillet = {
  tagline: 'Raccords et chanfreins entre deux lignes, sur n\'importe quel plan.',
  simple: 'Cliquez sur deux lignes qui se rencontrent en un angle, choisissez le rayon : l\'angle vif devient une courbe douce (ou un chanfrein). Fonctionne sur n\'importe quel plan dans l\'espace, pas seulement le sol.',
  steps: ['Activez robo Fillet et cliquez sur la première ligne (elle devient rouge).', 'Cliquez sur la seconde ligne (bleue) et saisissez le rayon et le nombre de segments.', 'Vérifiez l\'aperçu vert et appuyez sur Appliquer.'],
  how: [
    { t: 'Vérification de coplanarité', d: 'L\'outil vérifie que les deux lignes reposent sur le même plan et calcule l\'intersection, même quand les lignes ne se touchent pas vraiment (angle virtuel).' },
    { t: 'Aperçu vert en direct', d: 'Pendant que vous changez le rayon, vous voyez immédiatement l\'arc résultant. Le rayon maximal possible est calculé pour vous, afin de ne jamais obtenir un raccord impossible.' },
    { t: 'Courbe ou chanfrein', d: 'Le nombre de segments va de 1 à 99 : avec 1 vous obtenez un chanfrein net, avec plus de segments un arc de plus en plus lisse.' },
    { t: 'Prêt pour le raccord suivant', d: 'Après Appliquer, l\'outil reste armé. Si les lignes ne se touchaient pas, il propose de les relier ; un point guide est laissé au centre de l\'arc.' }
  ],
  pros: ['Rayon précis dans les unités du modèle', 'Fonctionne sur plans inclinés et en 3D', 'Même avec des arêtes qui ne se touchent pas', 'Rayon et segments mémorisés entre les raccords'],
  solves: [
    { p: 'Arrondir un angle entre deux arêtes demande normalement de construire l\'arc à la main puis de couper les lignes.', s: 'Deux clics et un rayon : arc construit et arêtes ajustées.' },
    { p: 'Sur les plans inclinés, construire un arc tangent est lent et imprécis.', s: 'Le calcul se fait sur le plan des deux lignes, quelle que soit son orientation.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Fillet'], ['Segments', '1 – 99 (1 = chanfrein)'], ['Plans', 'Toute orientation'], ['Annulation', 'Un seul Ctrl+Z par raccord']]
};
I18N_PLUGINS.es.fillet = {
  tagline: 'Redondeos y chaflanes entre dos líneas, en cualquier plano.',
  simple: 'Haz clic en dos líneas que se encuentran en un ángulo, elige el radio: el ángulo vivo se convierte en una curva suave (o un chaflán). Funciona en cualquier plano del espacio, no solo en el suelo.',
  steps: ['Activa robo Fillet y haz clic en la primera línea (se colorea de rojo).', 'Haz clic en la segunda línea (azul) e introduce radio y número de segmentos.', 'Comprueba la vista previa verde y pulsa Aplicar.'],
  how: [
    { t: 'Comprobación de coplanaridad', d: 'La herramienta comprueba que las dos líneas estén en el mismo plano y calcula la intersección, incluso cuando las líneas no se tocan realmente (ángulo virtual).' },
    { t: 'Vista previa verde en vivo', d: 'Mientras cambias el radio ves de inmediato el arco resultante. El radio máximo posible se calcula por ti, así nunca obtienes un redondeo imposible.' },
    { t: 'Curva o chaflán', d: 'El número de segmentos va de 1 a 99: con 1 obtienes un chaflán limpio, con más segmentos un arco cada vez más suave.' },
    { t: 'Listo para el siguiente redondeo', d: 'Tras Aplicar la herramienta sigue activa. Si las líneas no se tocaban, propone unirlas; en el centro del arco queda un punto guía.' }
  ],
  pros: ['Radio preciso en las unidades del modelo', 'Funciona en planos inclinados y en 3D', 'Incluso con bordes que no se tocan', 'Radio y segmentos recordados entre redondeos'],
  solves: [
    { p: 'Redondear un ángulo entre dos bordes requiere normalmente construir el arco a mano y luego recortar las líneas.', s: 'Dos clics y un radio: arco construido y bordes arreglados.' },
    { p: 'En planos inclinados, construir un arco tangente es lento e impreciso.', s: 'El cálculo se realiza en el plano de las dos líneas, sea cual sea su orientación.' }
  ],
  specs: [['Menú', 'Robo Tool › robo Fillet'], ['Segmentos', '1 – 99 (1 = chaflán)'], ['Planos', 'Cualquier orientación'], ['Deshacer', 'Un solo Ctrl+Z por redondeo']]
};

/* ---------------------------------------------------- GROUP TO COMPONENT */
I18N_PLUGINS.en.group_to_component = {
  tagline: 'Turns groups into components, merging identical ones.',
  simple: 'Select many groups: Robo recognises the ones with the same shape and turns them into copies of the same component. The file gets lighter, and editing one changes them all.',
  steps: ['Select the groups to convert.', 'Open robo Group to Component: you see how many are identical and how many unique.', 'Choose a name and options and confirm.'],
  how: [
    { t: 'Geometric fingerprint', d: 'A "fingerprint" is computed for each group (face count, volume, vertex positions). Two groups with the same fingerprint are considered identical.' },
    { t: 'Shared definition', d: 'Identical groups become instances of the same component definition: the geometry is stored only once.' },
    { t: 'Tolerance and deep analysis', d: 'You can adjust the comparison tolerance and enable a vertex-by-vertex check ("Deep Vertex Hash"), slower but more rigorous.' },
    { t: 'Ordered names', d: 'You assign a component name and automatic numbering (Name_1, Name_2… or 0001, 0002…).' }
  ],
  pros: ['Lighter file', 'One edit propagates to every copy', 'Prepares the model for proxies and rendering', 'Automatic names and numbering'],
  solves: [
    { p: 'A model full of duplicate groups is heavy and has to be edited copy by copy.', s: 'The duplicates become a single component, editable once.' },
    { p: 'Telling which groups are truly identical by eye is impossible.', s: 'The analysis panel shows identical and unique ones before converting.' }
  ],
  specs: [['Window', '480 × 700px, resizable'], ['Menu', 'Robo Tool › Robo Group to Component'], ['Comparison', 'Geometric fingerprint + tolerance'], ['Undo', 'A single Ctrl+Z']]
};
I18N_PLUGINS.de.group_to_component = {
  tagline: 'Verwandelt Gruppen in Komponenten und vereint identische.',
  simple: 'Wählen Sie viele Gruppen aus: Robo erkennt die mit gleicher Form und macht sie zu Kopien derselben Komponente. Die Datei wird leichter, und die Änderung einer Kopie ändert alle.',
  steps: ['Wählen Sie die zu konvertierenden Gruppen aus.', 'Öffnen Sie robo Group to Component: Sie sehen, wie viele identisch und wie viele einzigartig sind.', 'Wählen Sie Namen und Optionen und bestätigen Sie.'],
  how: [
    { t: 'Geometrischer Fingerabdruck', d: 'Für jede Gruppe wird ein "Fingerabdruck" berechnet (Anzahl Flächen, Volumen, Position der Eckpunkte). Zwei Gruppen mit gleichem Fingerabdruck gelten als identisch.' },
    { t: 'Gemeinsame Definition', d: 'Identische Gruppen werden zu Instanzen derselben Komponentendefinition: die Geometrie wird nur einmal gespeichert.' },
    { t: 'Toleranz und tiefe Analyse', d: 'Sie können die Vergleichstoleranz anpassen und einen Vertex-für-Vertex-Vergleich aktivieren ("Deep Vertex Hash"), langsamer, aber strenger.' },
    { t: 'Geordnete Namen', d: 'Sie vergeben einen Komponentennamen und automatische Nummerierung (Name_1, Name_2… oder 0001, 0002…).' }
  ],
  pros: ['Leichtere Datei', 'Eine Änderung überträgt sich auf alle Kopien', 'Bereitet das Modell für Proxys und Rendering vor', 'Automatische Namen und Nummerierung'],
  solves: [
    { p: 'Ein Modell voller doppelter Gruppen ist schwer und muss Kopie für Kopie bearbeitet werden.', s: 'Die Duplikate werden zu einer einzigen, einmal bearbeitbaren Komponente.' },
    { p: 'Von Auge zu erkennen, welche Gruppen wirklich gleich sind, ist unmöglich.', s: 'Das Analysepanel zeigt Identische und Einzigartige vor der Umwandlung.' }
  ],
  specs: [['Fenster', '480 × 700px, skalierbar'], ['Menü', 'Robo Tool › Robo Group to Component'], ['Vergleich', 'Geometrischer Fingerabdruck + Toleranz'], ['Rückgängig', 'Ein einziges Strg+Z']]
};
I18N_PLUGINS.fr.group_to_component = {
  tagline: 'Transforme les groupes en composants, en fusionnant les identiques.',
  simple: 'Sélectionnez de nombreux groupes : Robo reconnaît ceux ayant la même forme et les transforme en copies du même composant. Le fichier devient plus léger et, en modifiant l\'un, tous changent.',
  steps: ['Sélectionnez les groupes à convertir.', 'Ouvrez robo Group to Component : vous voyez combien sont identiques et combien uniques.', 'Choisissez un nom et des options et confirmez.'],
  how: [
    { t: 'Empreinte géométrique', d: 'Une « empreinte » est calculée pour chaque groupe (nombre de faces, volume, position des sommets). Deux groupes avec la même empreinte sont considérés comme identiques.' },
    { t: 'Définition partagée', d: 'Les groupes identiques deviennent des instances de la même définition de composant : la géométrie est stockée une seule fois.' },
    { t: 'Tolérance et analyse approfondie', d: 'Vous pouvez régler la tolérance de comparaison et activer une comparaison sommet par sommet (« Deep Vertex Hash »), plus lente mais plus rigoureuse.' },
    { t: 'Noms ordonnés', d: 'Vous attribuez un nom au composant et une numérotation automatique (Nom_1, Nom_2… ou 0001, 0002…).' }
  ],
  pros: ['Fichier plus léger', 'Une modification se propage à toutes les copies', 'Prépare le modèle pour les proxys et le rendu', 'Noms et numérotation automatiques'],
  solves: [
    { p: 'Un modèle plein de groupes dupliqués est lourd et doit être modifié copie par copie.', s: 'Les doublons deviennent un seul composant, modifiable une fois.' },
    { p: 'Distinguer à l\'œil les groupes vraiment identiques est impossible.', s: 'Le panneau d\'analyse montre identiques et uniques avant conversion.' }
  ],
  specs: [['Fenêtre', '480 × 700px, redimensionnable'], ['Menu', 'Robo Tool › Robo Group to Component'], ['Comparaison', 'Empreinte géométrique + tolérance'], ['Annulation', 'Un seul Ctrl+Z']]
};
I18N_PLUGINS.es.group_to_component = {
  tagline: 'Convierte grupos en componentes, fusionando los idénticos.',
  simple: 'Selecciona muchos grupos: Robo reconoce los que tienen la misma forma y los convierte en copias del mismo componente. El archivo se vuelve más ligero y, al modificar uno, cambian todos.',
  steps: ['Selecciona los grupos a convertir.', 'Abre robo Group to Component: ves cuántos son idénticos y cuántos únicos.', 'Elige nombre y opciones y confirma.'],
  how: [
    { t: 'Huella geométrica', d: 'Para cada grupo se calcula una "huella" (número de caras, volumen, posición de los vértices). Dos grupos con la misma huella se consideran idénticos.' },
    { t: 'Definición compartida', d: 'Los grupos idénticos se convierten en instancias de la misma definición de componente: la geometría se almacena una sola vez.' },
    { t: 'Tolerancia y análisis profundo', d: 'Puedes ajustar la tolerancia de comparación y activar la comparación vértice por vértice ("Deep Vertex Hash"), más lenta pero más rigurosa.' },
    { t: 'Nombres ordenados', d: 'Asignas un nombre al componente y una numeración automática (Nombre_1, Nombre_2… o 0001, 0002…).' }
  ],
  pros: ['Archivo más ligero', 'Una modificación se propaga a todas las copias', 'Prepara el modelo para proxies y renderizado', 'Nombres y numeración automáticos'],
  solves: [
    { p: 'Un modelo lleno de grupos duplicados pesa mucho y hay que modificarlo copia por copia.', s: 'Los duplicados se convierten en un solo componente, modificable una vez.' },
    { p: 'Distinguir a simple vista qué grupos son realmente iguales es imposible.', s: 'El panel de análisis muestra idénticos y únicos antes de convertir.' }
  ],
  specs: [['Ventana', '480 × 700px, redimensionable'], ['Menú', 'Robo Tool › Robo Group to Component'], ['Comparación', 'Huella geométrica + tolerancia'], ['Deshacer', 'Un solo Ctrl+Z']]
};

/* ---------------------------------------------------------------- IMPACT */
I18N_PLUGINS.en.impact_object = {
  tagline: 'Find out which objects are weighing your model down.',
  simple: 'A sortable table shows how much each component in the model "weighs", counting how many times it repeats too. So you instantly find the trees, furniture or details slowing SketchUp down.',
  steps: ['Open robo Impact Object from the menu.', 'Sort the table by Total and spot the heaviest rows.', 'Select them, isolate with zoom, or delete what you don\'t need.'],
  how: [
    { t: 'Weight = entities × instances', d: 'For each definition, the entity count is measured and how many times it appears in the model. The product is the real impact on the program.' },
    { t: 'Nested-level tree', d: 'Components inside other components expand as a tree: on open you only see the top levels, one click opens the children.' },
    { t: 'Size in MB on request', d: 'Weight in MB is computed only when you ask for it, so very large models don\'t slow down when opening the table.' },
    { t: 'Per-row actions', d: 'Select in the model, isolate and zoom on the object, purge unused components. Selection is synced in both directions. Model state is restored after zooming.' }
  ],
  pros: ['Find bottlenecks in seconds', 'Sortable table and expandable tree', 'No slowdown on large models', 'Isolation and cleanup from the same panel'],
  solves: [
    { p: 'The model is slow but you don\'t know which object is to blame.', s: 'The ranking by total weight shows it right away.' },
    { p: 'A small, heavily repeated object weighs more than a large, unique one.', s: 'The entities × instances calculation reveals the effect of repetition.' }
  ],
  specs: [['Window', '820 × 570px, resizable'], ['Menu', 'Robo Tool › Robo Impact Objects'], ['Columns', 'Level, Entities, Instances, Total, MB'], ['Undo', 'Model state restored']]
};
I18N_PLUGINS.de.impact_object = {
  tagline: 'Finden Sie heraus, welche Objekte Ihr Modell belasten.',
  simple: 'Eine sortierbare Tabelle zeigt, wie viel jede Komponente im Modell "wiegt", auch unter Berücksichtigung ihrer Wiederholungen. So finden Sie sofort Bäume, Möbel oder Details, die SketchUp verlangsamen.',
  steps: ['Öffnen Sie robo Impact Object über das Menü.', 'Sortieren Sie die Tabelle nach Gesamt und finden Sie die schwersten Zeilen.', 'Wählen Sie sie aus, isolieren Sie sie mit Zoom, oder löschen Sie, was nicht gebraucht wird.'],
  how: [
    { t: 'Gewicht = Entitäten × Instanzen', d: 'Für jede Definition wird die Anzahl der Entitäten gezählt und wie oft sie im Modell vorkommt. Das Produkt ist die tatsächliche Auswirkung auf das Programm.' },
    { t: 'Baum verschachtelter Ebenen', d: 'Komponenten innerhalb anderer Komponenten werden als Baum erweitert: beim Öffnen sehen Sie nur die oberen Ebenen, ein Klick öffnet die Kinder.' },
    { t: 'Größe in MB auf Anfrage', d: 'Das Gewicht in MB wird nur auf Anfrage berechnet, damit sehr große Modelle die Tabelle nicht beim Öffnen verlangsamen.' },
    { t: 'Aktionen pro Zeile', d: 'Im Modell auswählen, das Objekt isolieren und heranzoomen, ungenutzte Komponenten bereinigen. Die Auswahl ist in beide Richtungen synchronisiert. Der Modellzustand wird nach dem Zoom wiederhergestellt.' }
  ],
  pros: ['Engpässe in Sekunden finden', 'Sortierbare Tabelle und erweiterbarer Baum', 'Keine Verlangsamung bei großen Modellen', 'Isolierung und Bereinigung im selben Panel'],
  solves: [
    { p: 'Das Modell ist langsam, aber Sie wissen nicht, welches Objekt schuld ist.', s: 'Die Rangliste nach Gesamtgewicht zeigt es sofort.' },
    { p: 'Ein kleines, oft wiederholtes Objekt wiegt mehr als ein großes, einzigartiges.', s: 'Die Berechnung Entitäten × Instanzen macht den Effekt der Wiederholung sichtbar.' }
  ],
  specs: [['Fenster', '820 × 570px, skalierbar'], ['Menü', 'Robo Tool › Robo Impact Objects'], ['Spalten', 'Ebene, Entitäten, Instanzen, Gesamt, MB'], ['Rückgängig', 'Modellzustand wiederhergestellt']]
};
I18N_PLUGINS.fr.impact_object = {
  tagline: 'Découvrez quels objets alourdissent votre modèle.',
  simple: 'Un tableau triable montre combien "pèse" chaque composant du modèle, en tenant compte aussi de ses répétitions. Vous trouvez ainsi immédiatement les arbres, meubles ou détails qui ralentissent SketchUp.',
  steps: ['Ouvrez robo Impact Object depuis le menu.', 'Triez le tableau par Total et repérez les lignes les plus lourdes.', 'Sélectionnez-les, isolez avec le zoom, ou supprimez ce qui n\'est pas utile.'],
  how: [
    { t: 'Poids = entités × instances', d: 'Pour chaque définition, le nombre d\'entités est compté ainsi que le nombre d\'apparitions dans le modèle. Le produit est l\'impact réel sur le programme.' },
    { t: 'Arbre des niveaux imbriqués', d: 'Les composants contenus dans d\'autres composants se développent en arbre : à l\'ouverture vous ne voyez que les niveaux principaux, un clic ouvre les enfants.' },
    { t: 'Taille en Mo sur demande', d: 'Le poids en Mo n\'est calculé que sur demande, afin que les très grands modèles ne ralentissent pas à l\'ouverture du tableau.' },
    { t: 'Actions par ligne', d: 'Sélectionner dans le modèle, isoler et zoomer sur l\'objet, purger les composants inutilisés. La sélection est synchronisée dans les deux sens. L\'état du modèle est restauré après le zoom.' }
  ],
  pros: ['Trouvez les goulots d\'étranglement en quelques secondes', 'Tableau triable et arbre extensible', 'Aucun ralentissement sur les grands modèles', 'Isolation et nettoyage depuis le même panneau'],
  solves: [
    { p: 'Le modèle est lent mais vous ne savez pas quel objet en est responsable.', s: 'Le classement par poids total le montre immédiatement.' },
    { p: 'Un petit objet très répété pèse plus qu\'un grand objet unique.', s: 'Le calcul entités × instances rend visible l\'effet de la répétition.' }
  ],
  specs: [['Fenêtre', '820 × 570px, redimensionnable'], ['Menu', 'Robo Tool › Robo Impact Objects'], ['Colonnes', 'Niveau, Entités, Instances, Total, Mo'], ['Annulation', 'État du modèle restauré']]
};
I18N_PLUGINS.es.impact_object = {
  tagline: 'Descubre qué objetos hacen pesado tu modelo.',
  simple: 'Una tabla ordenable muestra cuánto "pesa" cada componente del modelo, contando también cuántas veces se repite. Así encuentras al instante árboles, muebles o detalles que ralentizan SketchUp.',
  steps: ['Abre robo Impact Object desde el menú.', 'Ordena la tabla por Total y localiza las filas más pesadas.', 'Selecciónalas, aíslalas con zoom o elimina lo que no necesites.'],
  how: [
    { t: 'Peso = entidades × instancias', d: 'Para cada definición se cuenta el número de entidades y cuántas veces aparece en el modelo. El producto es el impacto real sobre el programa.' },
    { t: 'Árbol de niveles anidados', d: 'Los componentes contenidos en otros componentes se expanden en árbol: al abrir solo ves los niveles principales, un clic abre los hijos.' },
    { t: 'Tamaño en MB bajo demanda', d: 'El peso en MB se calcula solo cuando lo pides, así los modelos muy grandes no ralentizan la apertura de la tabla.' },
    { t: 'Acciones por fila', d: 'Selecciona en el modelo, aísla y haz zoom sobre el objeto, limpia componentes no usados. La selección está sincronizada en ambas direcciones. El estado del modelo se restaura tras el zoom.' }
  ],
  pros: ['Encuentra los cuellos de botella en segundos', 'Tabla ordenable y árbol expandible', 'Sin ralentización en modelos grandes', 'Aislamiento y limpieza desde el mismo panel'],
  solves: [
    { p: 'El modelo es lento pero no sabes qué objeto es el culpable.', s: 'La clasificación por peso total lo muestra de inmediato.' },
    { p: 'Un objeto pequeño muy repetido pesa más que uno grande y único.', s: 'El cálculo entidades × instancias hace visible el efecto de la repetición.' }
  ],
  specs: [['Ventana', '820 × 570px, redimensionable'], ['Menú', 'Robo Tool › Robo Impact Objects'], ['Columnas', 'Nivel, Entidades, Instancias, Total, MB'], ['Deshacer', 'Estado del modelo restaurado']]
};

/* -------------------------------------------------------- LIBRARY EXPLORER */
I18N_PLUGINS.en.library_explorer = {
  tagline: 'Browse your libraries with real previews and insert with one click.',
  simple: 'Point to the folders where you keep components and materials: Robo shows them with previews, sorted by folder, with tags and favourites. One click and the object enters the model.',
  steps: ['Press "Folder" and choose your library folder.', 'Browse the previews, filter by tag or search by name.', 'Click a component to insert it, a material to apply it to the selection.'],
  how: [
    { t: 'A list for every folder', d: 'Every added folder becomes its own topic, with its subfolders. You can also rename a folder\'s displayed name (right-click › Edit Name) without touching the folder on disk.' },
    { t: 'Real previews', d: 'The image of a .skp file is the one SketchUp itself saved inside the file; for .skm materials it\'s obtained by loading them for a moment into the model. Missing previews are generated in the background.' },
    { t: 'Tags, favourites and views', d: 'Label objects with tags, mark favourites with the heart, search by name, and choose between a detail view and small, medium or large icons.' },
    { t: 'Proxy, 3D Warehouse and cloud', d: 'For objects created with robo Proxy Manager it also shows the proxy. A button opens 3D Warehouse to download models into the library, and cloud backup saves the list in a OneDrive or Google Drive folder: the password never passes through the plugin.' }
  ],
  pros: ['Real previews, not just file names', 'One-click insertion', 'Tags, favourites and search', 'Files on disk are never touched'],
  solves: [
    { p: 'Finding a component among hundreds of files forces you to open them one by one.', s: 'The previews and filters show it right away.' },
    { p: 'Libraries scattered across many folders are hard to keep tidy.', s: 'One panel collects them all, each with its own list.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Library Explorer'], ['Toolbar', '1 button'], ['Files', '.skp (components) and .skm (materials)'], ['Safety', 'Only deletes files inside library folders, after confirmation']]
};
I18N_PLUGINS.de.library_explorer = {
  tagline: 'Durchsuchen Sie Ihre Bibliotheken mit echten Vorschauen und fügen Sie mit einem Klick ein.',
  simple: 'Geben Sie die Ordner an, in denen Sie Komponenten und Materialien aufbewahren: Robo zeigt sie mit Vorschauen, nach Ordner sortiert, mit Tags und Favoriten. Ein Klick und das Objekt gelangt ins Modell.',
  steps: ['Drücken Sie "Ordner" und wählen Sie den Bibliotheksordner.', 'Durchsuchen Sie die Vorschauen, filtern Sie nach Tag oder suchen Sie nach Namen.', 'Klicken Sie eine Komponente zum Einfügen, ein Material zum Anwenden auf die Auswahl.'],
  how: [
    { t: 'Eine Liste pro Ordner', d: 'Jeder hinzugefügte Ordner wird zu einem eigenen Thema, mit seinen Unterordnern. Sie können auch den angezeigten Namen eines Ordners ändern (Rechtsklick › Namen bearbeiten), ohne den Ordner auf der Festplatte zu berühren.' },
    { t: 'Echte Vorschauen', d: 'Das Bild einer .skp-Datei ist das, was SketchUp selbst in der Datei gespeichert hat; bei .skm-Materialien wird es durch kurzes Laden ins Modell gewonnen. Fehlende Vorschauen werden im Hintergrund erstellt.' },
    { t: 'Tags, Favoriten und Ansichten', d: 'Beschriften Sie Objekte mit Tags, markieren Sie Favoriten mit dem Herz, suchen Sie nach Namen und wählen Sie zwischen Detailansicht und kleinen, mittleren oder großen Symbolen.' },
    { t: 'Proxy, 3D Warehouse und Cloud', d: 'Für mit robo Proxy Manager erstellte Objekte wird auch der Proxy angezeigt. Eine Schaltfläche öffnet 3D Warehouse zum Herunterladen von Modellen in die Bibliothek, und das Cloud-Backup speichert die Liste in einem OneDrive- oder Google-Drive-Ordner: das Passwort läuft nie über das Plugin.' }
  ],
  pros: ['Echte Vorschauen, nicht nur Dateinamen', 'Einfügen mit einem Klick', 'Tags, Favoriten und Suche', 'Dateien auf der Festplatte werden nie berührt'],
  solves: [
    { p: 'Eine Komponente unter Hunderten Dateien zu finden zwingt, sie einzeln zu öffnen.', s: 'Die Vorschauen und Filter zeigen sie sofort.' },
    { p: 'Über viele Ordner verstreute Bibliotheken sind schwer zu ordnen.', s: 'Ein einziges Panel sammelt sie alle, jede mit ihrer eigenen Liste.' }
  ],
  specs: [['Menü', 'Robo Tool › robo Library Explorer'], ['Symbolleiste', '1 Schaltfläche'], ['Dateien', '.skp (Komponenten) und .skm (Materialien)'], ['Sicherheit', 'Löscht nur Dateien innerhalb der Bibliotheksordner, nach Bestätigung']]
};
I18N_PLUGINS.fr.library_explorer = {
  tagline: 'Parcourez vos bibliothèques avec de vrais aperçus et insérez en un clic.',
  simple: 'Indiquez les dossiers où vous gardez composants et matériaux : Robo les montre avec des aperçus, triés par dossier, avec tags et favoris. Un clic et l\'objet entre dans le modèle.',
  steps: ['Appuyez sur « Dossier » et choisissez le dossier de votre bibliothèque.', 'Parcourez les aperçus, filtrez par tag ou cherchez par nom.', 'Cliquez sur un composant pour l\'insérer, un matériau pour l\'appliquer à la sélection.'],
  how: [
    { t: 'Une liste par dossier', d: 'Chaque dossier ajouté devient un sujet à part, avec ses sous-dossiers. Vous pouvez aussi renommer le nom affiché d\'un dossier (clic droit › Edit Name) sans toucher au dossier sur le disque.' },
    { t: 'Aperçus réels', d: 'L\'image d\'un fichier .skp est celle enregistrée par SketchUp lui-même dans le fichier ; pour les matériaux .skm, elle est obtenue en les chargeant un instant dans le modèle. Les aperçus manquants sont créés en arrière-plan.' },
    { t: 'Tags, favoris et vues', d: 'Étiquetez les objets avec des tags, marquez les favoris avec le cœur, cherchez par nom et choisissez entre vue détaillée et icônes petites, moyennes ou grandes.' },
    { t: 'Proxy, 3D Warehouse et cloud', d: 'Pour les objets créés avec robo Proxy Manager, le proxy est aussi affiché. Un bouton ouvre 3D Warehouse pour télécharger des modèles dans la bibliothèque, et la sauvegarde cloud enregistre la liste dans un dossier OneDrive ou Google Drive : le mot de passe ne passe jamais par le plugin.' }
  ],
  pros: ['De vrais aperçus, pas seulement des noms de fichiers', 'Insertion en un clic', 'Tags, favoris et recherche', 'Les fichiers sur le disque ne sont jamais touchés'],
  solves: [
    { p: 'Trouver un composant parmi des centaines de fichiers oblige à les ouvrir un par un.', s: 'Les aperçus et les filtres le montrent immédiatement.' },
    { p: 'Les bibliothèques dispersées dans de nombreux dossiers sont difficiles à ranger.', s: 'Un seul panneau les rassemble, chacune avec sa propre liste.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Library Explorer'], ['Barre d\'outils', '1 bouton'], ['Fichiers', '.skp (composants) et .skm (matériaux)'], ['Sécurité', 'Ne supprime que les fichiers dans les dossiers de bibliothèque, après confirmation']]
};
I18N_PLUGINS.es.library_explorer = {
  tagline: 'Explora tus bibliotecas con vistas previas reales e inserta con un clic.',
  simple: 'Indica las carpetas donde guardas componentes y materiales: Robo los muestra con vistas previas, ordenados por carpeta, con etiquetas y favoritos. Un clic y el objeto entra en el modelo.',
  steps: ['Pulsa "Carpeta" y elige la carpeta de tu biblioteca.', 'Explora las vistas previas, filtra por etiqueta o busca por nombre.', 'Haz clic en un componente para insertarlo, en un material para aplicarlo a la selección.'],
  how: [
    { t: 'Una lista por cada carpeta', d: 'Cada carpeta añadida se convierte en un tema propio, con sus subcarpetas. También puedes renombrar el nombre mostrado de una carpeta (clic derecho › Edit Name) sin tocar la carpeta en el disco.' },
    { t: 'Vistas previas reales', d: 'La imagen de un archivo .skp es la que el propio SketchUp guardó dentro del archivo; para los materiales .skm se obtiene cargándolos un instante en el modelo. Las vistas previas que faltan se generan en segundo plano.' },
    { t: 'Etiquetas, favoritos y vistas', d: 'Etiqueta objetos con tags, marca favoritos con el corazón, busca por nombre y elige entre vista de detalles e iconos pequeños, medianos o grandes.' },
    { t: 'Proxy, 3D Warehouse y nube', d: 'Para los objetos creados con robo Proxy Manager también muestra el proxy. Un botón abre 3D Warehouse para descargar modelos a la biblioteca, y la copia de seguridad en la nube guarda la lista en una carpeta de OneDrive o Google Drive: la contraseña nunca pasa por el plugin.' }
  ],
  pros: ['Vistas previas reales, no solo nombres de archivo', 'Inserción con un clic', 'Etiquetas, favoritos y búsqueda', 'Los archivos del disco nunca se tocan'],
  solves: [
    { p: 'Encontrar un componente entre cientos de archivos obliga a abrirlos uno a uno.', s: 'Las vistas previas y los filtros lo muestran de inmediato.' },
    { p: 'Las bibliotecas dispersas en muchas carpetas son difíciles de mantener ordenadas.', s: 'Un solo panel las reúne, cada una con su propia lista.' }
  ],
  specs: [['Menú', 'Robo Tool › robo Library Explorer'], ['Barra de herramientas', '1 botón'], ['Archivos', '.skp (componentes) y .skm (materiales)'], ['Seguridad', 'Solo elimina archivos dentro de las carpetas de biblioteca, tras confirmación']]
};

/* ------------------------------------------------------------- PLACEMENT */
I18N_PLUGINS.en.placement = {
  tagline: 'Scatter objects randomly over any surface.',
  simple: 'Choose an object (a tree, a rock, a piece of furniture) and a surface: Robo scatters many copies of it naturally, with slightly different scale and rotation for each copy.',
  steps: ['Select the component or group to scatter.', 'Pick the target face and adjust quantity, scale and rotation.', 'Watch the live preview and press Apply.'],
  how: [
    { t: 'Even organic surfaces', d: 'Works on flat, tilted and organic mesh faces: it picks points across the whole connected surface, proportionally to its area.' },
    { t: 'Controlled randomness', d: 'Quantity from 1 to 1000, minimum/maximum scale, random rotation on the three axes, alignment to the normal, and a "seed": same seed, same result.' },
    { t: 'Minimum distance between copies', d: 'An anti-collision check on the bounding boxes keeps copies from overlapping; you can also mark obstacles to avoid.' },
    { t: 'Real-time preview', d: 'You see the copies drawn over the view as you adjust the parameters, even while orbiting and panning, without creating any geometry until you apply.' }
  ],
  pros: ['Natural result, not "gridded"', 'Repeatable thanks to the seed', 'Preview before creating anything', 'Works even on uneven terrain'],
  solves: [
    { p: 'Placing dozens of trees or rocks by hand is slow and always ends up too regular.', s: 'One operation scatters up to 1000 copies with random variation.' },
    { p: 'Overlapping copies ruin the render.', s: 'The minimum distance keeps them apart.' }
  ],
  specs: [['Window', '400 × 567px, expandable'], ['Menu', 'Robo Tool › robo Placement'], ['Quantity', '1 – 1000 copies'], ['Undo', 'A single Ctrl+Z']]
};
I18N_PLUGINS.de.placement = {
  tagline: 'Verteilt Objekte zufällig auf jeder Oberfläche.',
  simple: 'Wählen Sie ein Objekt (einen Baum, einen Stein, ein Möbelstück) und eine Oberfläche: Robo verteilt viele Kopien davon auf natürliche Weise, mit leicht unterschiedlicher Skalierung und Drehung für jede Kopie.',
  steps: ['Wählen Sie die zu verteilende Komponente oder Gruppe aus.', 'Geben Sie die Zielfläche an und stellen Sie Menge, Skalierung und Drehung ein.', 'Betrachten Sie die Live-Vorschau und drücken Sie Anwenden.'],
  how: [
    { t: 'Auch organische Oberflächen', d: 'Funktioniert auf flachen, geneigten und organischen Mesh-Flächen: es wählt Punkte über die gesamte verbundene Oberfläche, proportional zu ihrer Fläche.' },
    { t: 'Kontrollierte Zufälligkeit', d: 'Menge von 1 bis 1000, minimale/maximale Skalierung, zufällige Drehung auf den drei Achsen, Ausrichtung an der Normale, und ein "Seed": gleicher Seed, gleiches Ergebnis.' },
    { t: 'Mindestabstand zwischen Kopien', d: 'Eine Anti-Kollisionsprüfung auf den Bounding Boxes verhindert Überlappungen; Sie können auch zu vermeidende Hindernisse markieren.' },
    { t: 'Echtzeit-Vorschau', d: 'Sie sehen die Kopien über die Ansicht gezeichnet, während Sie die Parameter anpassen, auch beim Orbit und Pan, ohne dass Geometrie entsteht, bis Sie anwenden.' }
  ],
  pros: ['Natürliches Ergebnis, nicht "rasterartig"', 'Wiederholbar dank Seed', 'Vorschau vor jeder Erstellung', 'Funktioniert auch auf unebenem Gelände'],
  solves: [
    { p: 'Dutzende Bäume oder Steine von Hand zu platzieren ist langwierig und wirkt immer zu regelmäßig.', s: 'Ein Vorgang verteilt bis zu 1000 Kopien mit zufälliger Variation.' },
    { p: 'Sich überschneidende Kopien ruinieren das Rendering.', s: 'Der Mindestabstand hält sie getrennt.' }
  ],
  specs: [['Fenster', '400 × 567px, erweiterbar'], ['Menü', 'Robo Tool › robo Placement'], ['Menge', '1 – 1000 Kopien'], ['Rückgängig', 'Ein einziges Strg+Z']]
};
I18N_PLUGINS.fr.placement = {
  tagline: 'Distribue des objets aléatoirement sur n\'importe quelle surface.',
  simple: 'Choisissez un objet (un arbre, une pierre, un meuble) et une surface : Robo en dispose de nombreuses copies dispersées de façon naturelle, avec une échelle et une rotation légèrement différentes pour chaque copie.',
  steps: ['Sélectionnez le composant ou groupe à distribuer.', 'Indiquez la face cible et réglez quantité, échelle et rotation.', 'Regardez l\'aperçu en direct et appuyez sur Appliquer.'],
  how: [
    { t: 'Même sur surfaces organiques', d: 'Fonctionne sur des faces planes, inclinées et des maillages organiques : il choisit des points sur toute la surface connectée, proportionnellement à sa superficie.' },
    { t: 'Hasard contrôlé', d: 'Quantité de 1 à 1000, échelle minimale/maximale, rotation aléatoire sur les trois axes, alignement à la normale, et une « graine » (seed) : même graine, même résultat.' },
    { t: 'Distance minimale entre copies', d: 'Un contrôle anti-collision sur les boîtes englobantes évite que les copies se chevauchent ; vous pouvez aussi indiquer des obstacles à éviter.' },
    { t: 'Aperçu en temps réel', d: 'Vous voyez les copies dessinées sur la vue pendant que vous réglez les paramètres, même en orbite et en panoramique, sans créer de géométrie avant d\'appliquer.' }
  ],
  pros: ['Résultat naturel, pas « en grille »', 'Reproductible grâce à la graine', 'Aperçu avant toute création', 'Fonctionne même sur terrain irrégulier'],
  solves: [
    { p: 'Placer à la main des dizaines d\'arbres ou de pierres est long et toujours trop régulier.', s: 'Une seule opération distribue jusqu\'à 1000 copies avec des variations aléatoires.' },
    { p: 'Les copies qui se chevauchent abîment le rendu.', s: 'La distance minimale les maintient séparées.' }
  ],
  specs: [['Fenêtre', '400 × 567px, extensible'], ['Menu', 'Robo Tool › robo Placement'], ['Quantité', '1 – 1000 copies'], ['Annulation', 'Un seul Ctrl+Z']]
};
I18N_PLUGINS.es.placement = {
  tagline: 'Distribuye objetos al azar sobre cualquier superficie.',
  simple: 'Elige un objeto (un árbol, una piedra, un mueble) y una superficie: Robo dispone muchas copias esparcidas de forma natural, con escala y rotación ligeramente distintas en cada copia.',
  steps: ['Selecciona el componente o grupo a distribuir.', 'Indica la cara objetivo y ajusta cantidad, escala y rotación.', 'Mira la vista previa en vivo y pulsa Aplicar.'],
  how: [
    { t: 'Incluso superficies orgánicas', d: 'Funciona en caras planas, inclinadas y mallas orgánicas: elige puntos en toda la superficie conectada, proporcionalmente a su área.' },
    { t: 'Aleatoriedad controlada', d: 'Cantidad de 1 a 1000, escala mínima/máxima, rotación aleatoria en los tres ejes, alineación a la normal, y una "semilla": misma semilla, mismo resultado.' },
    { t: 'Distancia mínima entre copias', d: 'Un control anticolisión sobre las cajas envolventes evita que las copias se superpongan; también puedes indicar obstáculos a evitar.' },
    { t: 'Vista previa en tiempo real', d: 'Ves las copias dibujadas sobre la vista mientras ajustas los parámetros, incluso durante órbita y paneo, sin crear geometría hasta que aplicas.' }
  ],
  pros: ['Resultado natural, no "en cuadrícula"', 'Repetible gracias a la semilla', 'Vista previa antes de crear nada', 'Funciona incluso en terrenos irregulares'],
  solves: [
    { p: 'Colocar a mano decenas de árboles o piedras es lento y siempre queda demasiado regular.', s: 'Una sola operación distribuye hasta 1000 copias con variaciones aleatorias.' },
    { p: 'Las copias que se solapan arruinan el render.', s: 'La distancia mínima las mantiene separadas.' }
  ],
  specs: [['Ventana', '400 × 567px, expandible'], ['Menú', 'Robo Tool › robo Placement'], ['Cantidad', '1 – 1000 copias'], ['Deshacer', 'Un solo Ctrl+Z']]
};

/* ----------------------------------------------------------------- PROXY */
I18N_PLUGINS.en.proxy_manager = {
  tagline: 'Replace heavy objects with lightweight proxies.',
  simple: 'Detailed trees, furniture and people make the model painfully slow. With Robo you replace them with lightweight "placeholders" and get them back identical when you need them, with a right-click.',
  steps: ['Select the heavy objects and choose the proxy type.', 'Robo saves the original to an external file and puts the proxy in its place.', 'Manage or restore originals from Proxy Manager or with a right-click.'],
  how: [
    { t: 'Two proxy types', d: 'The Bounding Box proxy is the lightest; the Low Resolution proxy keeps a simplified version of the real shape.' },
    { t: 'Original kept safe', d: 'The original geometry is saved as a .skp file in the Robo_ProxyAssets folder, along with the information needed to find it again. The model gets lighter without losing anything.' },
    { t: 'Restore and relink', d: 'With "Restore Proxy" you go back to the original object. If you move the files, the Manager flags proxies as ok / missing / damaged and relinks them.' },
    { t: 'Control panel', d: 'The Manager lists every proxy in the model. In the settings you can choose, among other things, whether to delete the external file after restoring.' }
  ],
  pros: ['Smooth viewport even in huge scenes', 'Much lighter model files', 'Originals stay recoverable', 'A list and control of every proxy'],
  solves: [
    { p: 'Scenes with detailed vegetation and furniture are impossible to orbit.', s: 'Light proxies keep the view smooth; originals return for rendering.' },
    { p: 'Deleting objects to lighten the file loses your work.', s: 'The original is saved to disk and restorable at any time.' }
  ],
  specs: [['Windows', 'Manager, Settings, Low Resolution, Guide'], ['Menu', 'Robo Tool › robo Proxy Manager (6 entries)'], ['Toolbar', '6 buttons'], ['Asset folder', 'Robo_ProxyAssets']]
};
I18N_PLUGINS.de.proxy_manager = {
  tagline: 'Ersetzt schwere Objekte durch leichte Proxys.',
  simple: 'Detaillierte Bäume, Möbel und Personen machen das Modell sehr langsam. Mit Robo ersetzen Sie sie durch leichte "Platzhalter" und finden sie bei Bedarf identisch wieder, per Rechtsklick.',
  steps: ['Wählen Sie die schweren Objekte aus und wählen Sie den Proxy-Typ.', 'Robo speichert das Original in einer externen Datei und setzt den Proxy an seine Stelle.', 'Verwalten oder stellen Sie Originale über den Proxy Manager oder per Rechtsklick wieder her.'],
  how: [
    { t: 'Zwei Proxy-Typen', d: 'Der Bounding-Box-Proxy ist der leichteste; der Low-Resolution-Proxy behält eine vereinfachte Version der echten Form.' },
    { t: 'Original in Sicherheit', d: 'Die Originalgeometrie wird als .skp-Datei im Ordner Robo_ProxyAssets gespeichert, zusammen mit den Informationen, um sie wiederzufinden. Das Modell wird leichter, ohne etwas zu verlieren.' },
    { t: 'Wiederherstellen und neu verknüpfen', d: 'Mit "Restore Proxy" kehren Sie zum Originalobjekt zurück. Verschieben Sie Dateien, meldet der Manager Proxys als ok / fehlend / beschädigt und verknüpft sie neu.' },
    { t: 'Kontrollpanel', d: 'Der Manager listet alle Proxys des Modells auf. In den Einstellungen wählen Sie unter anderem, ob die externe Datei nach der Wiederherstellung gelöscht werden soll.' }
  ],
  pros: ['Flüssiger Viewport auch bei riesigen Szenen', 'Deutlich leichtere Modelldateien', 'Originale bleiben wiederherstellbar', 'Liste und Kontrolle aller Proxys'],
  solves: [
    { p: 'Szenen mit detaillierter Vegetation und Möbeln lassen sich unmöglich orbiten.', s: 'Leichte Proxys machen die Ansicht flüssig; Originale kommen fürs Rendering zurück.' },
    { p: 'Objekte zu löschen, um die Datei zu erleichtern, kostet Arbeit.', s: 'Das Original ist auf der Festplatte gespeichert und jederzeit wiederherstellbar.' }
  ],
  specs: [['Fenster', 'Manager, Einstellungen, Low Resolution, Anleitung'], ['Menü', 'Robo Tool › robo Proxy Manager (6 Einträge)'], ['Symbolleiste', '6 Schaltflächen'], ['Asset-Ordner', 'Robo_ProxyAssets']]
};
I18N_PLUGINS.fr.proxy_manager = {
  tagline: 'Remplace les objets lourds par des proxys légers.',
  simple: 'Arbres, meubles et personnages détaillés rendent le modèle très lent. Avec Robo, vous les remplacez par des « marque-emplacements » légers et les retrouvez identiques quand il le faut, d\'un clic droit.',
  steps: ['Sélectionnez les objets lourds et choisissez le type de proxy.', 'Robo enregistre l\'original dans un fichier externe et met le proxy à sa place.', 'Gérez ou restaurez les originaux depuis Proxy Manager ou par clic droit.'],
  how: [
    { t: 'Deux types de proxy', d: 'Le proxy Bounding Box est le plus léger ; le proxy Low Resolution conserve une version simplifiée de la forme réelle.' },
    { t: 'Original en sécurité', d: 'La géométrie d\'origine est enregistrée en fichier .skp dans le dossier Robo_ProxyAssets, avec les informations pour la retrouver. Le modèle s\'allège sans rien perdre.' },
    { t: 'Restauration et reconnexion', d: 'Avec « Restore Proxy » vous revenez à l\'objet d\'origine. Si vous déplacez les fichiers, le Manager signale les proxys ok / manquant / endommagé et les reconnecte.' },
    { t: 'Panneau de contrôle', d: 'Le Manager liste tous les proxys du modèle. Dans les paramètres, vous choisissez entre autres si le fichier externe doit être supprimé après restauration.' }
  ],
  pros: ['Vue fluide même dans d\'énormes scènes', 'Fichiers de modèle bien plus légers', 'Les originaux restent récupérables', 'Liste et contrôle de tous les proxys'],
  solves: [
    { p: 'Les scènes avec végétation et mobilier détaillés sont impossibles à faire pivoter.', s: 'Les proxys légers rendent la vue fluide ; les originaux reviennent pour le rendu.' },
    { p: 'Supprimer des objets pour alléger fait perdre le travail.', s: 'L\'original est enregistré sur disque et restaurable à tout moment.' }
  ],
  specs: [['Fenêtres', 'Manager, Paramètres, Low Resolution, Guide'], ['Menu', 'Robo Tool › robo Proxy Manager (6 entrées)'], ['Barre d\'outils', '6 boutons'], ['Dossier assets', 'Robo_ProxyAssets']]
};
I18N_PLUGINS.es.proxy_manager = {
  tagline: 'Sustituye los objetos pesados por proxies ligeros.',
  simple: 'Árboles, muebles y personas detallados hacen el modelo lentísimo. Con Robo los sustituyes por "marcadores" ligeros y los recuperas idénticos cuando los necesitas, con un clic derecho.',
  steps: ['Selecciona los objetos pesados y elige el tipo de proxy.', 'Robo guarda el original en un archivo externo y pone el proxy en su lugar.', 'Gestiona o restaura los originales desde Proxy Manager o con clic derecho.'],
  how: [
    { t: 'Dos tipos de proxy', d: 'El proxy de caja (Bounding Box) es el más ligero; el proxy Low Resolution mantiene una versión simplificada de la forma real.' },
    { t: 'Original a salvo', d: 'La geometría original se guarda como archivo .skp en la carpeta Robo_ProxyAssets, junto con la información para encontrarla. El modelo se aligera sin perder nada.' },
    { t: 'Restauración y reconexión', d: 'Con "Restore Proxy" vuelves al objeto original. Si mueves los archivos, el Manager marca los proxies como ok / ausente / dañado y los reconecta.' },
    { t: 'Panel de control', d: 'El Manager lista todos los proxies del modelo. En los ajustes eliges, entre otras cosas, si eliminar el archivo externo tras restaurar.' }
  ],
  pros: ['Viewport fluido incluso en escenas enormes', 'Archivos de modelo mucho más ligeros', 'Los originales siguen siendo recuperables', 'Lista y control de todos los proxies'],
  solves: [
    { p: 'Escenas con vegetación y mobiliario detallados son imposibles de orbitar.', s: 'Los proxies ligeros hacen la vista fluida; los originales vuelven para el render.' },
    { p: 'Eliminar objetos para aligerar hace perder el trabajo.', s: 'El original se guarda en disco y es restaurable en cualquier momento.' }
  ],
  specs: [['Ventanas', 'Manager, Ajustes, Low Resolution, Guía'], ['Menú', 'Robo Tool › robo Proxy Manager (6 entradas)'], ['Barra de herramientas', '6 botones'], ['Carpeta assets', 'Robo_ProxyAssets']]
};

/* ----------------------------------------------------------------- SCALE */
I18N_PLUGINS.en.scale_definition = {
  tagline: 'Bakes the scale into the geometry and resets it to 1.0.',
  simple: 'If you\'ve enlarged or shrunk a component, SketchUp remembers that "scale factor" separately. Robo bakes it into the geometry and resets the scale to 1.0: dimensions and materials become correct for rendering.',
  steps: ['Select one or more groups or components.', 'Open robo Scale Definition and choose the mode.', 'Click Apply: read the operation summary.'],
  how: [
    { t: 'Scale "baked" into the geometry', d: 'Each instance\'s visual scale (even non-uniform) is applied to the definition\'s points and the transform is reset to 1.0. Instances are made unique first, so other copies are not touched.' },
    { t: 'Three modes', d: 'Scale only; Scale + Tri-Planar World (textures reprojected in global coordinates); Scale + Tri-Planar Fit (local coordinates, texture follows the object).' },
    { t: 'Nested objects', d: 'Nested elements are processed from innermost to outermost, so every level is fixed only once.' },
    { t: 'Special cases handled', d: 'Dynamic components, locked objects, and mirrored or deformed references are left unchanged: they are listed at the end of the operation with the reason.' }
  ],
  pros: ['Batch over the whole selection', 'Correct materials thanks to tri-planar', 'Doesn\'t touch other copies of the definition', 'Lists what it skips and why'],
  solves: [
    { p: 'Scaled components can give wrong textures and dimensions in render.', s: 'With scale 1.0 and correct geometry the result is predictable.' },
    { p: 'The native "Reset Scale" is limited and doesn\'t handle textures.', s: 'Robo works in bulk and reprojects textures if you ask.' }
  ],
  specs: [['Window', '340 × 490px (guide 360 × 620)'], ['Menu', 'Robo Tool › Robo Scale Definition'], ['Tolerance', '0.0001'], ['Undo', 'A single Ctrl+Z']]
};
I18N_PLUGINS.de.scale_definition = {
  tagline: 'Brennt die Skalierung in die Geometrie ein und setzt sie auf 1,0 zurück.',
  simple: 'Wenn Sie eine Komponente vergrößert oder verkleinert haben, merkt sich SketchUp diesen "Skalierungsfaktor" separat. Robo brennt ihn in die Geometrie ein und setzt die Skalierung auf 1,0 zurück: Abmessungen und Materialien werden für das Rendering korrekt.',
  steps: ['Wählen Sie eine oder mehrere Gruppen oder Komponenten aus.', 'Öffnen Sie robo Scale Definition und wählen Sie den Modus.', 'Klicken Sie auf Anwenden: lesen Sie die Zusammenfassung des Vorgangs.'],
  how: [
    { t: 'Skalierung in die Geometrie "eingebrannt"', d: 'Die visuelle Skalierung jeder Instanz (auch ungleichmäßig) wird auf die Punkte der Definition angewendet, und die Transformation wird auf 1,0 zurückgesetzt. Instanzen werden zuerst eindeutig gemacht, sodass andere Kopien nicht berührt werden.' },
    { t: 'Drei Modi', d: 'Nur Skalierung; Skalierung + Tri-Planar World (Texturen in globalen Koordinaten neu projiziert); Skalierung + Tri-Planar Fit (lokale Koordinaten, Textur folgt dem Objekt).' },
    { t: 'Verschachtelte Objekte', d: 'Verschachtelte Elemente werden von innen nach außen verarbeitet, sodass jede Ebene nur einmal korrigiert wird.' },
    { t: 'Sonderfälle behandelt', d: 'Dynamische Komponenten, gesperrte Objekte sowie gespiegelte oder verformte Referenzen werden nicht verändert: sie werden am Ende des Vorgangs mit Begründung aufgelistet.' }
  ],
  pros: ['Stapelverarbeitung über die gesamte Auswahl', 'Korrekte Materialien dank Tri-Planar', 'Berührt keine anderen Kopien der Definition', 'Listet auf, was übersprungen wird und warum'],
  solves: [
    { p: 'Skalierte Komponenten können im Rendering falsche Texturen und Maße ergeben.', s: 'Mit Skalierung 1,0 und korrekter Geometrie ist das Ergebnis vorhersehbar.' },
    { p: 'Das native "Reset Scale" ist begrenzt und behandelt keine Texturen.', s: 'Robo arbeitet im Stapel und projiziert Texturen neu, wenn Sie es wünschen.' }
  ],
  specs: [['Fenster', '340 × 490px (Anleitung 360 × 620)'], ['Menü', 'Robo Tool › Robo Scale Definition'], ['Toleranz', '0,0001'], ['Rückgängig', 'Ein einziges Strg+Z']]
};
I18N_PLUGINS.fr.scale_definition = {
  tagline: 'Fige l\'échelle dans la géométrie et la remet à 1,0.',
  simple: 'Si vous avez agrandi ou réduit un composant, SketchUp mémorise ce « facteur d\'échelle » à part. Robo l\'incorpore dans la géométrie et remet l\'échelle à 1,0 : dimensions et matériaux deviennent corrects pour le rendu.',
  steps: ['Sélectionnez un ou plusieurs groupes ou composants.', 'Ouvrez robo Scale Definition et choisissez le mode.', 'Cliquez sur Appliquer : lisez le résumé de l\'opération.'],
  how: [
    { t: 'Échelle « figée » dans la géométrie', d: 'L\'échelle visuelle de chaque instance (même non uniforme) est appliquée aux points de la définition et la transformation est ramenée à 1,0. Les instances sont d\'abord rendues uniques, afin que les autres copies ne soient pas touchées.' },
    { t: 'Trois modes', d: 'Échelle seule ; Échelle + Tri-Planar World (textures reprojetées en coordonnées globales) ; Échelle + Tri-Planar Fit (coordonnées locales, la texture suit l\'objet).' },
    { t: 'Objets imbriqués', d: 'Les éléments imbriqués sont traités du plus interne au plus externe, afin que chaque niveau soit corrigé une seule fois.' },
    { t: 'Cas particuliers gérés', d: 'Les composants dynamiques, les objets verrouillés et les références en miroir ou déformées ne sont pas modifiés : ils sont listés à la fin de l\'opération avec la raison.' }
  ],
  pros: ['Traitement par lot sur toute la sélection', 'Matériaux corrects grâce au tri-planaire', 'Ne touche pas les autres copies de la définition', 'Liste ce qui est ignoré et pourquoi'],
  solves: [
    { p: 'Des composants mis à l\'échelle peuvent donner des textures et dimensions erronées au rendu.', s: 'Avec une échelle de 1,0 et une géométrie correcte, le résultat est prévisible.' },
    { p: 'Le « Reset Scale » natif est limité et ne gère pas les textures.', s: 'Robo travaille en bloc et reprojette les textures si vous le demandez.' }
  ],
  specs: [['Fenêtre', '340 × 490px (guide 360 × 620)'], ['Menu', 'Robo Tool › Robo Scale Definition'], ['Tolérance', '0,0001'], ['Annulation', 'Un seul Ctrl+Z']]
};
I18N_PLUGINS.es.scale_definition = {
  tagline: 'Fija la escala en la geometría y la devuelve a 1.0.',
  simple: 'Si has ampliado o reducido un componente, SketchUp recuerda ese "factor de escala" aparte. Robo lo incorpora a la geometría y devuelve la escala a 1.0: dimensiones y materiales quedan correctos para el renderizado.',
  steps: ['Selecciona uno o varios grupos o componentes.', 'Abre robo Scale Definition y elige el modo.', 'Haz clic en Aplicar: lee el resumen de la operación.'],
  how: [
    { t: 'Escala "cocida" en la geometría', d: 'La escala visual de cada instancia (incluso no uniforme) se aplica a los puntos de la definición y la transformación vuelve a 1.0. Las instancias se hacen únicas antes, así las demás copias no se tocan.' },
    { t: 'Tres modos', d: 'Solo escala; Escala + Tri-Planar World (texturas reproyectadas en coordenadas globales); Escala + Tri-Planar Fit (coordenadas locales, la textura sigue al objeto).' },
    { t: 'Objetos anidados', d: 'Los elementos anidados se procesan del más interno al más externo, así cada nivel se corrige una sola vez.' },
    { t: 'Casos especiales gestionados', d: 'Componentes dinámicos, objetos bloqueados y referencias reflejadas o deformadas no se modifican: se listan al final de la operación con el motivo.' }
  ],
  pros: ['Procesamiento por lotes de toda la selección', 'Materiales correctos gracias al tri-planar', 'No toca las demás copias de la definición', 'Lista qué se omite y por qué'],
  solves: [
    { p: 'Los componentes escalados pueden dar texturas y dimensiones erróneas en el render.', s: 'Con escala 1.0 y geometría correcta el resultado es predecible.' },
    { p: 'El "Reset Scale" nativo es limitado y no gestiona las texturas.', s: 'Robo trabaja en bloque y reproyecta las texturas si lo pides.' }
  ],
  specs: [['Ventana', '340 × 490px (guía 360 × 620)'], ['Menú', 'Robo Tool › Robo Scale Definition'], ['Tolerancia', '0.0001'], ['Deshacer', 'Un solo Ctrl+Z']]
};

/* --------------------------------------------------------------- SECTION */
I18N_PLUGINS.en.section = {
  tagline: 'Every section plane in a single panel.',
  simple: 'In complex models section planes are scattered inside groups and components. Robo finds them all, lists them and lets you activate, rename, move and link them to scenes.',
  steps: ['Open the robo section panel: the list of every plane appears.', 'Activate, rename or select a plane from the list.', 'Save the state to scenes, or isolate objects in a sectionable group.'],
  how: [
    { t: 'Recursive scan', d: 'Robo walks the model, groups and nested components and collects every section plane with its name, context and active state.' },
    { t: 'Two-way selection', d: 'Select a row and the plane selects in the model, and vice versa.' },
    { t: 'Move and isolate', d: 'Move planes into another context keeping position and orientation, or wrap the selection in a sectionable group.' },
    { t: 'Scene synchronization', d: 'The planes\' state is saved into scenes, copied between scenes, or applied to all, so every view has its own section.' }
  ],
  pros: ['Overview of every plane', 'Manage without entering groups', 'Sections linked to scenes', 'One-click isolation'],
  solves: [
    { p: 'Finding a section plane inside nested groups is a treasure hunt.', s: 'The scan lists them all, with their context.' },
    { p: 'Repeating the same section across several scenes is tedious.', s: 'You copy or apply the state to all scenes.' }
  ],
  specs: [['Window', 'Control panel + guide'], ['Menu', 'Robo Tool › robo section'], ['Toolbar', '2 buttons (manage, isolate)'], ['Undo', 'Undoable operations']]
};
I18N_PLUGINS.de.section = {
  tagline: 'Alle Schnittebenen in einem Panel.',
  simple: 'In komplexen Modellen sind Schnittebenen in Gruppen und Komponenten verstreut. Robo findet sie alle, zeigt sie in einer Liste und lässt Sie sie aktivieren, umbenennen, verschieben und mit Szenen verknüpfen.',
  steps: ['Öffnen Sie das robo section-Panel: die Liste aller Ebenen erscheint.', 'Aktivieren, benennen Sie um oder wählen Sie eine Ebene aus der Liste.', 'Speichern Sie den Zustand in Szenen, oder isolieren Sie Objekte in einer schneidbaren Gruppe.'],
  how: [
    { t: 'Rekursiver Scan', d: 'Robo durchläuft Modell, Gruppen und verschachtelte Komponenten und sammelt jede Schnittebene mit Name, Kontext und aktivem Zustand.' },
    { t: 'Beidseitige Auswahl', d: 'Wählen Sie eine Zeile aus, wird die Ebene im Modell ausgewählt, und umgekehrt.' },
    { t: 'Verschieben und isolieren', d: 'Verschieben Sie Ebenen in einen anderen Kontext unter Beibehaltung von Position und Ausrichtung, oder fassen Sie die Auswahl in einer schneidbaren Gruppe zusammen.' },
    { t: 'Synchronisierung mit Szenen', d: 'Der Zustand der Ebenen wird in Szenen gespeichert, zwischen Szenen kopiert oder auf alle angewendet, sodass jede Ansicht ihren eigenen Schnitt hat.' }
  ],
  pros: ['Überblick über alle Ebenen', 'Verwaltung ohne Gruppen zu öffnen', 'Schnitte mit Szenen verknüpft', 'Isolierung mit einem Klick'],
  solves: [
    { p: 'Eine Schnittebene in verschachtelten Gruppen zu finden ist eine Schatzsuche.', s: 'Der Scan listet sie alle auf, mit ihrem Kontext.' },
    { p: 'Denselben Schnitt in mehreren Szenen zu wiederholen ist mühsam.', s: 'Sie kopieren oder wenden den Zustand auf alle Szenen an.' }
  ],
  specs: [['Fenster', 'Kontrollpanel + Anleitung'], ['Menü', 'Robo Tool › robo section'], ['Symbolleiste', '2 Schaltflächen (Verwalten, Isolieren)'], ['Rückgängig', 'Rückgängig zu machende Vorgänge']]
};
I18N_PLUGINS.fr.section = {
  tagline: 'Tous les plans de coupe dans un seul panneau.',
  simple: 'Dans les modèles complexes, les plans de coupe sont dispersés dans des groupes et composants. Robo les trouve tous, les liste et vous permet de les activer, renommer, déplacer et lier aux scènes.',
  steps: ['Ouvrez le panneau robo section : la liste de tous les plans apparaît.', 'Activez, renommez ou sélectionnez un plan dans la liste.', 'Enregistrez l\'état dans les scènes, ou isolez les objets dans un groupe sécable.'],
  how: [
    { t: 'Analyse récursive', d: 'Robo parcourt le modèle, les groupes et composants imbriqués et rassemble chaque plan de coupe avec son nom, son contexte et son état actif.' },
    { t: 'Sélection bidirectionnelle', d: 'Vous sélectionnez une ligne et le plan se sélectionne dans le modèle, et inversement.' },
    { t: 'Déplacer et isoler', d: 'Déplacez les plans vers un autre contexte en conservant position et orientation, ou enveloppez la sélection dans un groupe sécable.' },
    { t: 'Synchronisation avec les scènes', d: 'L\'état des plans est enregistré dans les scènes, copié entre scènes ou appliqué à toutes, afin que chaque vue ait sa propre coupe.' }
  ],
  pros: ['Vue d\'ensemble de tous les plans', 'Gestion sans entrer dans les groupes', 'Sections liées aux scènes', 'Isolation en un clic'],
  solves: [
    { p: 'Trouver un plan de coupe dans des groupes imbriqués est une chasse au trésor.', s: 'L\'analyse les liste tous, avec leur contexte.' },
    { p: 'Répéter la même coupe dans plusieurs scènes est laborieux.', s: 'Vous copiez ou appliquez l\'état à toutes les scènes.' }
  ],
  specs: [['Fenêtre', 'Panneau de contrôle + guide'], ['Menu', 'Robo Tool › robo section'], ['Barre d\'outils', '2 boutons (gestion, isolation)'], ['Annulation', 'Opérations annulables']]
};
I18N_PLUGINS.es.section = {
  tagline: 'Todos los planos de sección en un solo panel.',
  simple: 'En modelos complejos los planos de sección están dispersos dentro de grupos y componentes. Robo los encuentra todos, los muestra en una lista y te permite activarlos, renombrarlos, moverlos y vincularlos a escenas.',
  steps: ['Abre el panel robo section: aparece la lista de todos los planos.', 'Activa, renombra o selecciona un plano de la lista.', 'Guarda el estado en las escenas, o aísla los objetos en un grupo seccionable.'],
  how: [
    { t: 'Escaneo recursivo', d: 'Robo recorre el modelo, grupos y componentes anidados y recopila cada plano de sección con su nombre, contexto y estado activo.' },
    { t: 'Selección bidireccional', d: 'Seleccionas una fila y el plano se selecciona en el modelo, y viceversa.' },
    { t: 'Mover y aislar', d: 'Mueves los planos a otro contexto manteniendo posición y orientación, o envuelves la selección en un grupo seccionable.' },
    { t: 'Sincronización con las escenas', d: 'El estado de los planos se guarda en las escenas, se copia entre escenas o se aplica a todas, así cada vista tiene su propia sección.' }
  ],
  pros: ['Panorama de todos los planos', 'Gestión sin entrar en los grupos', 'Secciones vinculadas a las escenas', 'Aislamiento en un clic'],
  solves: [
    { p: 'Encontrar un plano de sección dentro de grupos anidados es una búsqueda del tesoro.', s: 'El escaneo los lista todos, con su contexto.' },
    { p: 'Repetir la misma sección en varias escenas es laborioso.', s: 'Copias o aplicas el estado a todas las escenas.' }
  ],
  specs: [['Ventana', 'Panel de control + guía'], ['Menú', 'Robo Tool › robo section'], ['Barra de herramientas', '2 botones (gestión, aislar)'], ['Deshacer', 'Operaciones deshacibles']]
};

/* --------------------------------------------------------------- SPACING */
I18N_PLUGINS.en.spacing_tool = {
  tagline: 'Perfectly spaced copies along a line or a curve.',
  simple: 'Choose an object and a path (a line, an arc, even a closed curve): Robo places the copies at a regular distance along the path, like lamp posts along a street or chairs around a table.',
  steps: ['Select the object and the path (the lines).', 'Choose "Count" of copies or a fixed "Distance".', 'Adjust rotation and scale, watch the preview and confirm.'],
  how: [
    { t: 'Two ways to space', d: 'With "Count" you get N equally spaced copies; with "Distance" a fixed step (e.g. 100 cm). You can set a starting and ending offset.' },
    { t: 'Full paths', d: '"Full line" extends the selection to the whole chain of connected segments, even if the path is a closed loop.' },
    { t: 'Rotation and scale', d: 'Rotation and scale can be random or progressive (growing or shrinking gradually along the path). You can choose the insertion axis and keep upright relative to the world.' },
    { t: 'Lightweight preview', d: 'The preview shows the objects\' outlines and direction arrows; to stay fast it automatically caps how many copies are drawn.' }
  ],
  pros: ['Regular, repeatable spacing', 'Works on closed curves and loops', 'Progressive rotation and scale', 'Non-modal window, always at hand'],
  solves: [
    { p: 'Copying and placing objects by hand along a curve gives irregular distances.', s: 'Robo computes the points along the path precisely.' },
    { p: 'Changing the number of copies means starting over.', s: 'You change the value and the preview updates.' }
  ],
  specs: [['Window', '500 × 640px, non-modal'], ['Menu', 'Robo Tool › robo Spacing Tool'], ['Mode', 'Count / Distance'], ['Undo', 'A single Ctrl+Z']]
};
I18N_PLUGINS.de.spacing_tool = {
  tagline: 'Perfekt verteilte Kopien entlang einer Linie oder Kurve.',
  simple: 'Wählen Sie ein Objekt und einen Pfad (eine Linie, einen Bogen, auch eine geschlossene Kurve): Robo setzt die Kopien in regelmäßigem Abstand entlang des Pfads, wie Laternenpfähle entlang einer Straße oder Stühle um einen Tisch.',
  steps: ['Wählen Sie das Objekt und den Pfad (die Linien) aus.', 'Wählen Sie "Anzahl" der Kopien oder eine feste "Distanz".', 'Stellen Sie Drehung und Skalierung ein, betrachten Sie die Vorschau und bestätigen Sie.'],
  how: [
    { t: 'Zwei Arten der Verteilung', d: 'Mit "Anzahl" erhalten Sie N gleichmäßig verteilte Kopien; mit "Distanz" einen festen Abstand (z. B. 100 cm). Sie können einen Anfangs- und Endversatz einstellen.' },
    { t: 'Vollständige Pfade', d: '"Ganze Linie" erweitert die Auswahl auf die gesamte Kette verbundener Segmente, auch wenn der Pfad eine geschlossene Schleife ist.' },
    { t: 'Drehung und Skalierung', d: 'Drehung und Skalierung können zufällig oder progressiv sein (allmählich zu- oder abnehmend entlang des Pfads). Sie können die Einfügeachse wählen und senkrecht zur Welt bleiben.' },
    { t: 'Leichte Vorschau', d: 'Die Vorschau zeigt die Umrisse der Objekte und Richtungspfeile; um schnell zu bleiben, begrenzt sie automatisch, wie viele Kopien gezeichnet werden.' }
  ],
  pros: ['Regelmäßiger, wiederholbarer Abstand', 'Funktioniert auf geschlossenen Kurven und Schleifen', 'Progressive Drehung und Skalierung', 'Nicht-modales Fenster, immer griffbereit'],
  solves: [
    { p: 'Objekte von Hand entlang einer Kurve zu kopieren und zu platzieren ergibt unregelmäßige Abstände.', s: 'Robo berechnet die Punkte entlang des Pfads präzise.' },
    { p: 'Die Anzahl der Kopien zu ändern bedeutet, alles neu zu machen.', s: 'Sie ändern den Wert und die Vorschau aktualisiert sich.' }
  ],
  specs: [['Fenster', '500 × 640px, nicht modal'], ['Menü', 'Robo Tool › robo Spacing Tool'], ['Modus', 'Anzahl / Distanz'], ['Rückgängig', 'Ein einziges Strg+Z']]
};
I18N_PLUGINS.fr.spacing_tool = {
  tagline: 'Copies parfaitement espacées le long d\'une ligne ou d\'une courbe.',
  simple: 'Choisissez un objet et un chemin (une ligne, un arc, même une courbe fermée) : Robo place les copies à distance régulière le long du chemin, comme des lampadaires le long d\'une rue ou des chaises autour d\'une table.',
  steps: ['Sélectionnez l\'objet et le chemin (les lignes).', 'Choisissez « Nombre » de copies ou une « Distance » fixe.', 'Réglez rotation et échelle, regardez l\'aperçu et confirmez.'],
  how: [
    { t: 'Deux façons d\'espacer', d: 'Avec « Nombre » vous obtenez N copies équidistantes ; avec « Distance » un pas fixe (par exemple 100 cm). Vous pouvez définir un décalage initial et final.' },
    { t: 'Chemins complets', d: '« Ligne entière » étend la sélection à toute la chaîne de segments connectés, même si le chemin forme une boucle fermée.' },
    { t: 'Rotation et échelle', d: 'Rotation et échelle peuvent être aléatoires ou progressives (croissantes ou décroissantes graduellement le long du chemin). Vous pouvez choisir l\'axe d\'insertion et garder la verticale par rapport au monde.' },
    { t: 'Aperçu léger', d: 'L\'aperçu montre les contours des objets et des flèches de direction ; pour rester rapide, il limite automatiquement le nombre de copies dessinées.' }
  ],
  pros: ['Espacement régulier et reproductible', 'Fonctionne sur courbes et boucles fermées', 'Rotation et échelle progressives', 'Fenêtre non modale, toujours à portée'],
  solves: [
    { p: 'Copier et positionner des objets à la main le long d\'une courbe donne des distances irrégulières.', s: 'Robo calcule les points le long du chemin avec précision.' },
    { p: 'Changer le nombre de copies signifie tout refaire.', s: 'Vous modifiez la valeur et l\'aperçu se met à jour.' }
  ],
  specs: [['Fenêtre', '500 × 640px, non modale'], ['Menu', 'Robo Tool › robo Spacing Tool'], ['Mode', 'Nombre / Distance'], ['Annulation', 'Un seul Ctrl+Z']]
};
I18N_PLUGINS.es.spacing_tool = {
  tagline: 'Copias perfectamente espaciadas a lo largo de una línea o curva.',
  simple: 'Elige un objeto y un recorrido (una línea, un arco, incluso una curva cerrada): Robo coloca las copias a distancia regular a lo largo del recorrido, como farolas a lo largo de una calle o sillas alrededor de una mesa.',
  steps: ['Selecciona el objeto y el recorrido (las líneas).', 'Elige "Número" de copias o una "Distancia" fija.', 'Ajusta rotación y escala, mira la vista previa y confirma.'],
  how: [
    { t: 'Dos formas de espaciar', d: 'Con "Número" obtienes N copias equidistantes; con "Distancia" un paso fijo (por ejemplo 100 cm). Puedes fijar un desfase inicial y final.' },
    { t: 'Recorridos completos', d: '"Línea entera" extiende la selección a toda la cadena de segmentos conectados, incluso si el recorrido es un anillo cerrado.' },
    { t: 'Rotación y escala', d: 'Rotación y escala pueden ser aleatorias o progresivas (crecen o disminuyen gradualmente a lo largo del recorrido). Puedes elegir el eje de inserción y mantener la vertical respecto al mundo.' },
    { t: 'Vista previa ligera', d: 'La vista previa muestra los contornos de los objetos y flechas de dirección; para no ralentizar, limita automáticamente cuántas copias se dibujan.' }
  ],
  pros: ['Espaciado regular y repetible', 'Funciona en curvas y anillos cerrados', 'Rotación y escala progresivas', 'Ventana no modal, siempre a mano'],
  solves: [
    { p: 'Copiar y colocar objetos a mano a lo largo de una curva da distancias irregulares.', s: 'Robo calcula los puntos a lo largo del recorrido con precisión.' },
    { p: 'Cambiar el número de copias significa rehacerlo todo.', s: 'Modificas el valor y la vista previa se actualiza.' }
  ],
  specs: [['Ventana', '500 × 640px, no modal'], ['Menú', 'Robo Tool › robo Spacing Tool'], ['Modo', 'Número / Distancia'], ['Deshacer', 'Un solo Ctrl+Z']]
};

/* ---------------------------------------------------------------- STANDARD */
I18N_PLUGINS.en.standard = {
  tagline: 'Everyday commands in one toolbar with Robo icons.',
  simple: 'New, Open, Save, Cut, Copy, Paste, Undo… SketchUp\'s most used commands gathered in a single toolbar, with clear icons in the Robo style.',
  steps: ['Turn on the "robo Standard" toolbar from View › Toolbars.', 'Use the buttons instead of the menus.', 'The same commands are also under Extensions › Robo Tool › robo Standard.'],
  how: [
    { t: 'Native commands', d: 'New, Open, Cut, Copy and Paste call SketchUp\'s own actions; Save and Save As use the standard dialogs.' },
    { t: 'Paste in place', d: 'Pastes objects at their original position, on both Windows and macOS, as a single undoable operation.' },
    { t: 'Delete selection', d: 'Deletes the selected objects in one step, undoable with a Ctrl+Z.' },
    { t: 'Grouped by use', d: 'Buttons are split into groups (File, Clipboard, Edit), and the status bar shows the usual shortcut.' }
  ],
  pros: ['Every basic command one click away', 'Icons consistent with the rest of Robo Tools', 'Paste in place included', 'Menu entries too, with icons'],
  solves: [
    { p: 'Basic commands are scattered across different menus and toolbars.', s: 'One toolbar with everything you need.' },
    { p: 'Pasting at the original position means digging through menus.', s: 'A dedicated button.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Standard (11 entries)'], ['Toolbar', '11 buttons in 4 groups'], ['Commands', 'New, Open, Save, Save As, Cut, Copy, Paste, Paste in Place, Delete, Undo, Redo'], ['Undo', 'A single Ctrl+Z per action']]
};
I18N_PLUGINS.de.standard = {
  tagline: 'Alltägliche Befehle in einer Symbolleiste mit Robo-Icons.',
  simple: 'Neu, Öffnen, Speichern, Ausschneiden, Kopieren, Einfügen, Rückgängig… die meistgenutzten SketchUp-Befehle in einer einzigen Symbolleiste, mit klaren Icons im Robo-Stil.',
  steps: ['Aktivieren Sie die Symbolleiste "robo Standard" über Ansicht › Symbolleisten.', 'Nutzen Sie die Schaltflächen statt der Menüs.', 'Dieselben Befehle finden Sie auch unter Erweiterungen › Robo Tool › robo Standard.'],
  how: [
    { t: 'Native Befehle', d: 'Neu, Öffnen, Ausschneiden, Kopieren und Einfügen rufen die SketchUp-eigenen Aktionen auf; Speichern und Speichern unter nutzen die Standarddialoge.' },
    { t: 'An Ort einfügen', d: 'Fügt Objekte an ihrer ursprünglichen Position ein, sowohl unter Windows als auch macOS, als einzelnen rückgängig machbaren Vorgang.' },
    { t: 'Auswahl löschen', d: 'Löscht die ausgewählten Objekte in einem Schritt, rückgängig zu machen mit Strg+Z.' },
    { t: 'Nach Nutzung gruppiert', d: 'Die Schaltflächen sind in Gruppen unterteilt (Datei, Zwischenablage, Bearbeiten), und in der Statusleiste erscheint die übliche Tastenkombination.' }
  ],
  pros: ['Alle Grundbefehle griffbereit', 'Icons passend zum restlichen Robo Tools', 'An Ort einfügen inklusive', 'Auch Menüeinträge, mit Icon'],
  solves: [
    { p: 'Grundbefehle sind über verschiedene Menüs und Leisten verstreut.', s: 'Eine einzige Leiste mit allem Nötigen.' },
    { p: 'An der Originalposition einzufügen erfordert die Suche in den Menüs.', s: 'Eine eigene Schaltfläche.' }
  ],
  specs: [['Menü', 'Robo Tool › robo Standard (11 Einträge)'], ['Symbolleiste', '11 Schaltflächen in 4 Gruppen'], ['Befehle', 'Neu, Öffnen, Speichern, Speichern unter, Ausschneiden, Kopieren, Einfügen, An Ort einfügen, Löschen, Rückgängig, Wiederholen'], ['Rückgängig', 'Ein einziges Strg+Z pro Aktion']]
};
I18N_PLUGINS.fr.standard = {
  tagline: 'Les commandes quotidiennes dans une barre avec icônes Robo.',
  simple: 'Nouveau, Ouvrir, Enregistrer, Couper, Copier, Coller, Annuler… les commandes les plus utilisées de SketchUp réunies dans une seule barre, avec des icônes claires dans le style Robo.',
  steps: ['Activez la barre « robo Standard » depuis Affichage › Barres d\'outils.', 'Utilisez les boutons à la place des menus.', 'Les mêmes commandes se trouvent aussi dans Extensions › Robo Tool › robo Standard.'],
  how: [
    { t: 'Commandes natives', d: 'Nouveau, Ouvrir, Couper, Copier et Coller appellent les actions de SketchUp ; Enregistrer et Enregistrer sous utilisent les fenêtres standard.' },
    { t: 'Coller sur place', d: 'Colle les objets à leur position d\'origine, sous Windows comme sous macOS, en une seule opération annulable.' },
    { t: 'Supprimer la sélection', d: 'Supprime les objets sélectionnés en une seule étape, annulable avec un Ctrl+Z.' },
    { t: 'Regroupées par usage', d: 'Les boutons sont répartis en groupes (Fichier, Presse-papiers, Édition), et la barre d\'état affiche le raccourci habituel.' }
  ],
  pros: ['Toutes les commandes de base à portée de clic', 'Icônes cohérentes avec le reste de Robo Tools', 'Coller sur place inclus', 'Entrées aussi dans le menu, avec icône'],
  solves: [
    { p: 'Les commandes de base sont dispersées entre différents menus et barres.', s: 'Une seule barre avec tout ce qu\'il faut.' },
    { p: 'Coller à la position d\'origine demande de chercher la commande dans les menus.', s: 'Un bouton dédié.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Standard (11 entrées)'], ['Barre d\'outils', '11 boutons en 4 groupes'], ['Commandes', 'Nouveau, Ouvrir, Enregistrer, Enregistrer sous, Couper, Copier, Coller, Coller sur place, Supprimer, Annuler, Rétablir'], ['Annulation', 'Un seul Ctrl+Z par action']]
};
I18N_PLUGINS.es.standard = {
  tagline: 'Los comandos de cada día en una barra con iconos Robo.',
  simple: 'Nuevo, Abrir, Guardar, Cortar, Copiar, Pegar, Deshacer… los comandos más usados de SketchUp reunidos en una sola barra, con iconos claros al estilo Robo.',
  steps: ['Activa la barra "robo Standard" desde Ver › Barras de herramientas.', 'Usa los botones en lugar de los menús.', 'Los mismos comandos también están en Extensiones › Robo Tool › robo Standard.'],
  how: [
    { t: 'Comandos nativos', d: 'Nuevo, Abrir, Cortar, Copiar y Pegar invocan las acciones de SketchUp; Guardar y Guardar como usan las ventanas estándar.' },
    { t: 'Pegar en su sitio', d: 'Pega los objetos en su posición original, tanto en Windows como en macOS, en una sola operación deshacible.' },
    { t: 'Eliminar la selección', d: 'Elimina los objetos seleccionados en un solo paso, deshacible con un Ctrl+Z.' },
    { t: 'Agrupados por uso', d: 'Los botones están divididos en grupos (Archivo, Portapapeles, Edición), y en la barra de estado aparece el atajo habitual.' }
  ],
  pros: ['Todos los comandos básicos a un clic', 'Iconos coherentes con el resto de Robo Tools', 'Pegar en su sitio incluido', 'También en el menú, con icono'],
  solves: [
    { p: 'Los comandos básicos están dispersos entre distintos menús y barras.', s: 'Una sola barra con todo lo necesario.' },
    { p: 'Pegar en la posición original obliga a buscar el comando en los menús.', s: 'Un botón dedicado.' }
  ],
  specs: [['Menú', 'Robo Tool › robo Standard (11 entradas)'], ['Barra de herramientas', '11 botones en 4 grupos'], ['Comandos', 'Nuevo, Abrir, Guardar, Guardar como, Cortar, Copiar, Pegar, Pegar en su sitio, Eliminar, Deshacer, Rehacer'], ['Deshacer', 'Un solo Ctrl+Z por acción']]
};

/* ----------------------------------------------------------------- START */
I18N_PLUGINS.en.start = {
  tagline: 'Over 20 quick commands in a single toolbar.',
  simple: 'A toolbar with everyday operations: create groups and components, select, hide, delete guides and dimensions. Every button has its own icon and a keyboard shortcut.',
  steps: ['Turn on the "robo start" toolbar from View › Toolbars.', 'Use the buttons or the keyboard shortcuts.', 'From Settings choose which buttons to show.'],
  how: [
    { t: 'Grouped commands', d: 'Groups and components, explode, selection (all, invert, deselect), visibility, guides and dimensions, zoom and find centre: every function is a button.' },
    { t: 'Customizable shortcuts', d: 'Every command has a shortcut; the Shortcut List shows them all, and you can change them in the code.' },
    { t: 'Toolbar tailored to you', d: 'From Settings, hide the buttons you don\'t use; the choice is remembered.' },
    { t: 'Safe operations', d: 'Every action on the model is a single operation, undoable with Ctrl+Z.' }
  ],
  pros: ['Everything one click away', 'Consistent shortcuts', 'Customizable toolbar', 'Built-in guide with the command list'],
  solves: [
    { p: 'Repetitive operations require menus and right-clicks every time.', s: 'One button, or one shortcut, for each.' },
    { p: 'Removing guides or dimensions scattered around the model is tedious.', s: 'One button removes them all.' }
  ],
  specs: [['Menu', 'Robo Tool › robo start (Shortcut List, Settings, Guide)'], ['Toolbar', 'robo start, customizable'], ['Guide', 'Window with the command list'], ['Undo', 'A single Ctrl+Z per action']]
};
I18N_PLUGINS.de.start = {
  tagline: 'Über 20 schnelle Befehle in einer Symbolleiste.',
  simple: 'Eine Symbolleiste mit den täglichen Aufgaben: Gruppen und Komponenten erstellen, auswählen, ausblenden, Hilfslinien und Maße löschen. Jede Schaltfläche hat ein eigenes Icon und eine Tastenkombination.',
  steps: ['Aktivieren Sie die Symbolleiste "robo start" über Ansicht › Symbolleisten.', 'Nutzen Sie die Schaltflächen oder die Tastenkombinationen.', 'Wählen Sie in den Einstellungen, welche Schaltflächen angezeigt werden.'],
  how: [
    { t: 'Gruppierte Befehle', d: 'Gruppen und Komponenten, Explodieren, Auswahl (alles, umkehren, aufheben), Sichtbarkeit, Hilfslinien und Maße, Zoom und Mittelpunktsuche: jede Funktion ist eine Schaltfläche.' },
    { t: 'Anpassbare Tastenkombinationen', d: 'Jeder Befehl hat eine Tastenkombination; die Shortcut List zeigt alle, und im Code können Sie sie ändern.' },
    { t: 'Maßgeschneiderte Leiste', d: 'In den Einstellungen blenden Sie nicht genutzte Schaltflächen aus; die Wahl wird gemerkt.' },
    { t: 'Sichere Vorgänge', d: 'Jede Aktion am Modell ist ein einziger, mit Strg+Z rückgängig zu machender Vorgang.' }
  ],
  pros: ['Alles griffbereit', 'Konsistente Tastenkombinationen', 'Anpassbare Symbolleiste', 'Integrierte Anleitung mit Befehlsliste'],
  solves: [
    { p: 'Wiederkehrende Vorgänge erfordern jedes Mal Menüs und Rechtsklicks.', s: 'Eine Schaltfläche oder eine Tastenkombination für jeden.' },
    { p: 'Im Modell verstreute Hilfslinien oder Maße zu entfernen ist mühsam.', s: 'Eine Schaltfläche entfernt sie alle.' }
  ],
  specs: [['Menü', 'Robo Tool › robo start (Shortcut List, Einstellungen, Anleitung)'], ['Symbolleiste', 'robo start, anpassbar'], ['Anleitung', 'Fenster mit Befehlsliste'], ['Rückgängig', 'Ein einziges Strg+Z pro Aktion']]
};
I18N_PLUGINS.fr.start = {
  tagline: 'Plus de 20 commandes rapides dans une seule barre.',
  simple: 'Une barre avec les opérations quotidiennes : créer des groupes et composants, sélectionner, masquer, supprimer les repères et cotes. Chaque bouton a sa propre icône et un raccourci clavier.',
  steps: ['Activez la barre « robo start » depuis Affichage › Barres d\'outils.', 'Utilisez les boutons ou les raccourcis clavier.', 'Depuis Paramètres, choisissez quels boutons afficher.'],
  how: [
    { t: 'Commandes regroupées', d: 'Groupes et composants, exploser, sélection (tout, inverser, désélectionner), visibilité, repères et cotes, zoom et recherche du centre : chaque fonction est un bouton.' },
    { t: 'Raccourcis personnalisables', d: 'Chaque commande a un raccourci ; la Shortcut List les montre tous, et vous pouvez les modifier dans le code.' },
    { t: 'Barre sur mesure', d: 'Depuis Paramètres, masquez les boutons que vous n\'utilisez pas ; le choix est mémorisé.' },
    { t: 'Opérations sûres', d: 'Chaque action sur le modèle est une seule opération, annulable avec Ctrl+Z.' }
  ],
  pros: ['Tout à portée de clic', 'Raccourcis cohérents', 'Barre personnalisable', 'Guide intégré avec la liste des commandes'],
  solves: [
    { p: 'Les opérations répétitives demandent menus et clics droits à chaque fois.', s: 'Un bouton, ou un raccourci, pour chacune.' },
    { p: 'Supprimer les repères ou cotes dispersés dans le modèle est fastidieux.', s: 'Un bouton les supprime tous.' }
  ],
  specs: [['Menu', 'Robo Tool › robo start (Shortcut List, Paramètres, Guide)'], ['Barre d\'outils', 'robo start, personnalisable'], ['Guide', 'Fenêtre avec la liste des commandes'], ['Annulation', 'Un seul Ctrl+Z par action']]
};
I18N_PLUGINS.es.start = {
  tagline: 'Más de 20 comandos rápidos en una sola barra.',
  simple: 'Una barra con las operaciones de cada día: crea grupos y componentes, selecciona, oculta, borra guías y cotas. Cada botón tiene su icono y un atajo de teclado.',
  steps: ['Activa la barra "robo start" desde Ver › Barras de herramientas.', 'Usa los botones o los atajos de teclado.', 'Desde Ajustes elige qué botones mostrar.'],
  how: [
    { t: 'Comandos agrupados', d: 'Grupos y componentes, explosionar, selección (todo, invertir, deseleccionar), visibilidad, guías y cotas, zoom y búsqueda de centro: cada función es un botón.' },
    { t: 'Atajos personalizables', d: 'Cada comando tiene un atajo; la Shortcut List los muestra todos, y en el código puedes cambiarlos.' },
    { t: 'Barra a tu medida', d: 'Desde Ajustes ocultas los botones que no usas; la elección se recuerda.' },
    { t: 'Operaciones seguras', d: 'Cada acción sobre el modelo es una sola operación, deshacible con Ctrl+Z.' }
  ],
  pros: ['Todo a un clic', 'Atajos coherentes', 'Barra personalizable', 'Guía integrada con la lista de comandos'],
  solves: [
    { p: 'Las operaciones repetitivas exigen menús y clic derecho cada vez.', s: 'Un botón, o un atajo, para cada una.' },
    { p: 'Eliminar guías o cotas dispersas por el modelo es tedioso.', s: 'Un botón las elimina todas.' }
  ],
  specs: [['Menú', 'Robo Tool › robo start (Shortcut List, Ajustes, Guía)'], ['Barra de herramientas', 'robo start, personalizable'], ['Guía', 'Ventana con la lista de comandos'], ['Deshacer', 'Un solo Ctrl+Z por acción']]
};

/* --------------------------------------------------------------- TANGENT */
I18N_PLUGINS.en.tangent = {
  tagline: 'The exact tangent between arcs, circles and segments.',
  simple: 'Click two circles (or a circle and a line) and the tool draws the line that touches each one exactly at one point. See the possibilities in preview and choose the one you need by moving the mouse.',
  steps: ['Activate robo Tangent: hover the elements, they light up yellow.', 'Click the first (red) and the second element (blue).', 'Move the mouse to pick the green tangent and click to draw it.'],
  how: [
    { t: 'Analytical calculation', d: 'Tangents are computed geometrically, not by eye: for two circles there are up to four solutions (two external, two internal); for a circle and a segment, two per endpoint.' },
    { t: 'Candidates in preview', d: 'The one closest to the cursor is green; the others stay grey and dashed. A click confirms and the tool starts over.' },
    { t: 'Protection from impossible cases', d: 'If the two elements don\'t lie on the same plane, the pair is rejected instead of producing a wrong line.' },
    { t: 'Precision on demand', d: 'From Settings choose between "Exact" (mathematical point) and "Rounded" (the line touches the real vertex of the polygonal curve), useful with circles made of segments.' }
  ],
  pros: ['Exact tangents, no trial and error', 'See every solution before choosing', 'Rejects invalid cases', 'Modes that truly snap to the curve'],
  solves: [
    { p: 'Drawing a common tangent by hand isn\'t possible with SketchUp\'s inferences alone.', s: 'The tangent point is computed for you.' },
    { p: 'SketchUp\'s curves are polygons: an "exact" tangent may never actually touch the curve.', s: 'Rounded mode snaps to the nearest vertex, so the line really touches.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Tangent (+ Settings)'], ['Solutions', '2 – 4 candidates'], ['Precision', 'Exact / Rounded'], ['Undo', 'Esc cancels, Ctrl+Z removes the last line']]
};
I18N_PLUGINS.de.tangent = {
  tagline: 'Die exakte Tangente zwischen Bögen, Kreisen und Segmenten.',
  simple: 'Klicken Sie auf zwei Kreise (oder einen Kreis und eine Linie), und das Werkzeug zeichnet die Linie, die jeden davon exakt in einem Punkt berührt. Sehen Sie die Möglichkeiten in der Vorschau und wählen Sie die gewünschte durch Bewegen der Maus.',
  steps: ['Aktivieren Sie robo Tangent: Fahren Sie über die Elemente, sie leuchten gelb.', 'Klicken Sie das erste (rot) und das zweite Element (blau).', 'Bewegen Sie die Maus, um die grüne Tangente zu wählen, und klicken Sie zum Zeichnen.'],
  how: [
    { t: 'Analytische Berechnung', d: 'Die Tangenten werden geometrisch berechnet, nicht nach Augenmaß: für zwei Kreise gibt es bis zu vier Lösungen (zwei äußere, zwei innere), für Kreis und Segment zwei pro Endpunkt.' },
    { t: 'Kandidaten in der Vorschau', d: 'Die dem Cursor nächste ist grün; die anderen bleiben grau und gestrichelt. Ein Klick bestätigt, und das Werkzeug beginnt von vorn.' },
    { t: 'Schutz vor unmöglichen Fällen', d: 'Liegen die beiden Elemente nicht in derselben Ebene, wird das Paar abgelehnt, statt eine falsche Linie zu erzeugen.' },
    { t: 'Präzision nach Wahl', d: 'In den Einstellungen wählen Sie zwischen "Exakt" (mathematischer Punkt) und "Gerundet" (die Linie berührt den echten Eckpunkt der Polygonkurve), nützlich bei aus Segmenten bestehenden Kreisen.' }
  ],
  pros: ['Exakte Tangenten, ohne Ausprobieren', 'Alle Lösungen vor der Wahl sichtbar', 'Lehnt ungültige Fälle ab', 'Modi, die wirklich an der Kurve einrasten'],
  solves: [
    { p: 'Eine gemeinsame Tangente von Hand zu zeichnen ist mit den Inferenzen von SketchUp allein nicht möglich.', s: 'Der Tangentenpunkt wird für Sie berechnet.' },
    { p: 'SketchUp-Kurven sind Polygone: eine "exakte" Tangente berührt die Kurve manchmal nie.', s: 'Der Modus Gerundet rastet am nächsten Eckpunkt ein, sodass die Linie wirklich berührt.' }
  ],
  specs: [['Menü', 'Robo Tool › robo Tangent (+ Einstellungen)'], ['Lösungen', '2 – 4 Kandidaten'], ['Präzision', 'Exakt / Gerundet'], ['Rückgängig', 'Esc bricht ab, Strg+Z entfernt die letzte Linie']]
};
I18N_PLUGINS.fr.tangent = {
  tagline: 'La tangente exacte entre arcs, cercles et segments.',
  simple: 'Cliquez sur deux cercles (ou un cercle et une ligne) et l\'outil dessine la ligne qui les touche exactement en un point chacun. Voyez les possibilités en aperçu et choisissez celle qu\'il vous faut en déplaçant la souris.',
  steps: ['Activez robo Tangent : survolez les éléments, ils s\'illuminent en jaune.', 'Cliquez sur le premier (rouge) puis le second élément (bleu).', 'Déplacez la souris pour choisir la tangente verte et cliquez pour la dessiner.'],
  how: [
    { t: 'Calcul analytique', d: 'Les tangentes sont calculées géométriquement, pas à l\'œil : pour deux cercles il existe jusqu\'à quatre solutions (deux externes et deux internes), pour cercle et segment deux par extrémité.' },
    { t: 'Candidates en aperçu', d: 'Celle la plus proche du curseur est verte ; les autres restent grises et pointillées. Un clic confirme et l\'outil recommence.' },
    { t: 'Protection contre les cas impossibles', d: 'Si les deux éléments ne sont pas sur le même plan, la paire est rejetée au lieu de produire une ligne erronée.' },
    { t: 'Précision au choix', d: 'Depuis Paramètres, choisissez entre « Exacte » (point mathématique) et « Arrondie » (la ligne touche le vrai sommet de la courbe polygonale), utile avec des cercles faits de segments.' }
  ],
  pros: ['Tangentes exactes, sans tâtonnement', 'Voyez toutes les solutions avant de choisir', 'Rejette les cas non valides', 'Modes qui accrochent vraiment la courbe'],
  solves: [
    { p: 'Dessiner à la main une tangente commune n\'est pas possible avec les seules inférences de SketchUp.', s: 'Le point de tangence est calculé pour vous.' },
    { p: 'Les courbes de SketchUp sont des polygones : une tangente « exacte » peut ne jamais toucher la courbe.', s: 'Le mode Arrondie accroche le sommet le plus proche, afin que la ligne touche vraiment.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Tangent (+ Paramètres)'], ['Solutions', '2 – 4 candidates'], ['Précision', 'Exacte / Arrondie'], ['Annulation', 'Échap annule, Ctrl+Z retire la dernière ligne']]
};
I18N_PLUGINS.es.tangent = {
  tagline: 'La tangente exacta entre arcos, círculos y segmentos.',
  simple: 'Haz clic en dos círculos (o un círculo y una línea) y la herramienta dibuja la línea que toca a cada uno exactamente en un punto. Ve las posibilidades en vista previa y elige la que necesitas moviendo el ratón.',
  steps: ['Activa robo Tangent: pasa por los elementos, se iluminan en amarillo.', 'Haz clic en el primero (rojo) y el segundo elemento (azul).', 'Mueve el ratón para elegir la tangente verde y haz clic para dibujarla.'],
  how: [
    { t: 'Cálculo analítico', d: 'Las tangentes se calculan geométricamente, no a ojo: para dos círculos hay hasta cuatro soluciones (dos externas y dos internas), para círculo y segmento dos por cada extremo.' },
    { t: 'Candidatas en vista previa', d: 'La más cercana al cursor es verde; las demás quedan grises y discontinuas. Un clic confirma y la herramienta reinicia.' },
    { t: 'Protección ante casos imposibles', d: 'Si los dos elementos no están en el mismo plano, el par se rechaza en lugar de producir una línea incorrecta.' },
    { t: 'Precisión a elegir', d: 'Desde Ajustes elige entre "Exacta" (punto matemático) y "Redondeada" (la línea toca el vértice real de la curva poligonal), útil con círculos hechos de segmentos.' }
  ],
  pros: ['Tangentes exactas, sin tanteo', 'Ves todas las soluciones antes de elegir', 'Rechaza los casos no válidos', 'Modos que realmente se enganchan a la curva'],
  solves: [
    { p: 'Dibujar a mano una tangente común no es posible solo con las inferencias de SketchUp.', s: 'El punto de tangencia se calcula por ti.' },
    { p: 'Las curvas de SketchUp son polígonos: una tangente "exacta" puede no tocar nunca la curva.', s: 'El modo Redondeada se engancha al vértice más cercano, así la línea toca de verdad.' }
  ],
  specs: [['Menú', 'Robo Tool › robo Tangent (+ Ajustes)'], ['Soluciones', '2 – 4 candidatas'], ['Precisión', 'Exacta / Redondeada'], ['Deshacer', 'Esc cancela, Ctrl+Z quita la última línea']]
};

/* --------------------------------------------------------------- UPLEVEL */
I18N_PLUGINS.en.uplevel = {
  tagline: 'Brings objects out of a group, without moving them.',
  simple: 'You are inside a group or component and want to pull some objects up to the level above, staying exactly where they are. One click moves them up in the hierarchy without changing their position.',
  steps: ['Enter the group or component and select the objects.', 'Press the robo Uplevel button.', 'The objects move to the level above, at the same position.'],
  how: [
    { t: 'Active context', d: 'The command starts from the group or component currently open for editing and brings the objects into the container that holds it (or into the model, if it\'s the top level).' },
    { t: 'Position preserved', d: 'Objects are passed through a temporary container that combines the inner level\'s transform with the outer one\'s. The container is then exploded: no geometry moves.' },
    { t: 'A single undo', d: 'The whole operation is wrapped in one step: if something goes wrong, everything returns to how it was.' },
    { t: 'Clear warnings', d: 'If you\'re not inside a group, or nothing is selected, a message explains it.' }
  ],
  pros: ['Moves up a level without moving in space', 'One click instead of cut and "paste in place"', 'Undoable with a single Ctrl+Z', 'Also available in robo start'],
  solves: [
    { p: 'Extracting objects from a group with cut and paste risks moving them or getting the level wrong.', s: 'The transform is compensated automatically.' },
    { p: 'With several nested levels it\'s not clear where the objects end up.', s: 'They always go exactly one level higher.' }
  ],
  specs: [['Command', 'Extract to Top Level'], ['Toolbar', '1 button'], ['Levels', 'One level at a time'], ['Undo', 'A single Ctrl+Z']]
};
I18N_PLUGINS.de.uplevel = {
  tagline: 'Holt Objekte aus einer Gruppe heraus, ohne sie zu verschieben.',
  simple: 'Sie befinden sich in einer Gruppe oder Komponente und möchten einige Objekte auf die übergeordnete Ebene ziehen, genau an ihrem Platz bleibend. Ein Klick verschiebt sie in der Hierarchie, ohne ihre Position zu ändern.',
  steps: ['Betreten Sie die Gruppe oder Komponente und wählen Sie die Objekte aus.', 'Drücken Sie die Schaltfläche robo Uplevel.', 'Die Objekte wechseln auf die übergeordnete Ebene, an derselben Position.'],
  how: [
    { t: 'Aktiver Kontext', d: 'Der Befehl geht von der zur Bearbeitung geöffneten Gruppe oder Komponente aus und bringt die Objekte in den Container, der sie enthält (oder ins Modell, wenn es die oberste Ebene ist).' },
    { t: 'Position erhalten', d: 'Die Objekte werden über einen temporären Container geleitet, der die Transformation der inneren mit der äußeren Ebene kombiniert. Der Container wird danach aufgelöst: keine Geometrie bewegt sich.' },
    { t: 'Ein einziges Rückgängig', d: 'Der gesamte Vorgang ist in einem Schritt zusammengefasst: bei einem Fehler kehrt alles zum vorherigen Zustand zurück.' },
    { t: 'Klare Hinweise', d: 'Sind Sie nicht in einer Gruppe, oder ist nichts ausgewählt, erklärt eine Meldung dies.' }
  ],
  pros: ['Wechselt die Ebene, ohne im Raum zu verschieben', 'Ein Klick statt Ausschneiden und "An Ort einfügen"', 'Mit einem einzigen Strg+Z rückgängig', 'Auch in robo start verfügbar'],
  solves: [
    { p: 'Objekte mit Ausschneiden und Einfügen aus einer Gruppe zu holen riskiert, sie zu verschieben oder die Ebene zu verfehlen.', s: 'Die Transformation wird automatisch ausgeglichen.' },
    { p: 'Bei mehreren verschachtelten Ebenen ist unklar, wo die Objekte landen.', s: 'Sie gehen immer genau eine Ebene höher.' }
  ],
  specs: [['Befehl', 'Auf oberste Ebene extrahieren'], ['Symbolleiste', '1 Schaltfläche'], ['Ebenen', 'Eine Ebene pro Mal'], ['Rückgängig', 'Ein einziges Strg+Z']]
};
I18N_PLUGINS.fr.uplevel = {
  tagline: 'Sort les objets d\'un groupe, sans les déplacer.',
  simple: 'Vous êtes dans un groupe ou un composant et voulez faire remonter certains objets au niveau supérieur, en restant exactement à leur place. Un clic les déplace dans la hiérarchie sans changer leur position.',
  steps: ['Entrez dans le groupe ou le composant et sélectionnez les objets.', 'Appuyez sur le bouton robo Uplevel.', 'Les objets passent au niveau supérieur, à la même position.'],
  how: [
    { t: 'Contexte actif', d: 'La commande part du groupe ou composant ouvert pour modification et amène les objets dans le conteneur qui le contient (ou dans le modèle, si c\'est le niveau le plus haut).' },
    { t: 'Position préservée', d: 'Les objets passent par un conteneur temporaire qui compose la transformation du niveau interne avec celle du niveau externe. Le conteneur est ensuite explosé : aucune géométrie ne se déplace.' },
    { t: 'Une seule annulation', d: 'Toute l\'opération est enfermée dans une seule étape : en cas d\'erreur, tout revient comme avant.' },
    { t: 'Avertissements clairs', d: 'Si vous n\'êtes pas dans un groupe, ou si rien n\'est sélectionné, un message l\'explique.' }
  ],
  pros: ['Change de niveau sans déplacer dans l\'espace', 'Un clic au lieu de couper et « coller sur place »', 'Annulable avec un seul Ctrl+Z', 'Aussi disponible dans robo start'],
  solves: [
    { p: 'Extraire des objets d\'un groupe avec couper-coller risque de les déplacer ou de se tromper de niveau.', s: 'La transformation est compensée automatiquement.' },
    { p: 'Avec plusieurs niveaux imbriqués, on ne sait pas où finissent les objets.', s: 'Ils vont toujours exactement un niveau plus haut.' }
  ],
  specs: [['Commande', 'Extraire au niveau supérieur'], ['Barre d\'outils', '1 bouton'], ['Niveaux', 'Un niveau à la fois'], ['Annulation', 'Un seul Ctrl+Z']]
};
I18N_PLUGINS.es.uplevel = {
  tagline: 'Saca los objetos de un grupo, sin moverlos.',
  simple: 'Estás dentro de un grupo o componente y quieres subir algunos objetos al nivel superior, quedándose exactamente donde están. Un clic los mueve en la jerarquía sin cambiar su posición.',
  steps: ['Entra en el grupo o componente y selecciona los objetos.', 'Pulsa el botón robo Uplevel.', 'Los objetos pasan al nivel superior, en la misma posición.'],
  how: [
    { t: 'Contexto activo', d: 'El comando parte del grupo o componente abierto para edición y lleva los objetos al contenedor que lo contiene (o al modelo, si es el nivel más alto).' },
    { t: 'Posición preservada', d: 'Los objetos pasan a través de un contenedor temporal que combina la transformación del nivel interno con la del externo. El contenedor se explosiona después: ninguna geometría se mueve.' },
    { t: 'Un solo deshacer', d: 'Toda la operación queda encerrada en un solo paso: si algo falla, todo vuelve a como estaba.' },
    { t: 'Avisos claros', d: 'Si no estás dentro de un grupo, o no has seleccionado nada, un mensaje te lo explica.' }
  ],
  pros: ['Cambia de nivel sin desplazar en el espacio', 'Un clic en vez de cortar y "pegar en su sitio"', 'Deshacible con un solo Ctrl+Z', 'También disponible en robo start'],
  solves: [
    { p: 'Extraer objetos de un grupo con cortar y pegar arriesga a moverlos o a equivocar el nivel.', s: 'La transformación se compensa automáticamente.' },
    { p: 'Con varios niveles anidados no está claro dónde acaban los objetos.', s: 'Siempre van exactamente un nivel más arriba.' }
  ],
  specs: [['Comando', 'Extraer al Nivel Superior'], ['Barra de herramientas', '1 botón'], ['Niveles', 'Un nivel cada vez'], ['Deshacer', 'Un solo Ctrl+Z']]
};

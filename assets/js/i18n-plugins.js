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
    { t: 'Multi-select and curves', d: 'Shift+click adds several faces, segments or curves from the same group and copies them together into one group. Pointing at one segment of an arc or a circle takes the whole curve.' },
    { t: 'Same position or beside it', d: 'In the preferences, "Copy in the same position" (on by default) puts the copy exactly on top of the original; switched off, the copy appears beside it, shifted sideways, so you see both. Geometry at the model root is duplicated in place. The "Apply" button saves the settings and confirms the collected items, like the Enter key.' }
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
    { t: 'Mehrfachauswahl und Kurven', d: 'Umschalt+Klick fügt mehrere Flächen, Segmente oder Kurven derselben Gruppe hinzu und kopiert sie zusammen in eine Gruppe. Zeigt man auf ein Segment eines Bogens oder Kreises, wird die ganze Kurve übernommen.' },
    { t: 'Gleiche Position oder daneben', d: 'In den Einstellungen legt "In derselben Position kopieren" (standardmäßig an) die Kopie genau auf das Original; ausgeschaltet erscheint die Kopie daneben, seitlich verschoben, sodass Sie beide sehen. Geometrie im Modellstamm wird an Ort und Stelle dupliziert. Die Schaltfläche "Anwenden" speichert die Einstellungen und bestätigt die gesammelten Elemente, wie die Enter-Taste.' }
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
    { t: 'Sélection multiple et courbes', d: 'Maj+clic ajoute plusieurs faces, segments ou courbes du même groupe et les copie ensemble dans un seul groupe. Pointer un segment d\'un arc ou d\'un cercle prend toute la courbe.' },
    { t: 'Même position ou à côté', d: 'Dans les préférences, « Copier à la même position » (activé par défaut) place la copie exactement sur l\'original ; désactivé, la copie apparaît à côté, décalée latéralement, pour voir les deux. La géométrie à la racine du modèle est dupliquée sur place. Le bouton « Appliquer » enregistre les réglages et valide les éléments collectés, comme la touche Entrée.' }
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
    { t: 'Selección múltiple y curvas', d: 'Mayús+clic añade varias caras, segmentos o curvas del mismo grupo y las copia juntas en un solo grupo. Señalar un segmento de un arco o círculo toma toda la curva.' },
    { t: 'Misma posición o al lado', d: 'En las preferencias, «Copiar en la misma posición» (activado por defecto) coloca la copia exactamente sobre el original; desactivado, la copia aparece al lado, desplazada lateralmente, para ver ambos. La geometría en la raíz del modelo se duplica en el sitio. El botón «Aplicar» guarda los ajustes y confirma los elementos reunidos, como la tecla Intro.' }
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
  tagline: 'Export the selected objects to a new .skp file, in the version you choose.',
  simple: 'Select part of the model: a window opens with the name already filled in (that of the group or component), the folder and the SketchUp version. Robo saves it as a separate file, in the same position, without touching your open model.',
  steps: ['Select the objects to export.', 'Press robo Export object: the file name is already that of the group or component, you can change it.', 'Choose the folder and the SketchUp version, then press Export.'],
  how: [
    { t: 'The model stays untouched', d: 'The selection is briefly wrapped in a temporary group, saved to disk, and the operation is undone right after: the open model is never closed, reopened or altered.' },
    { t: 'Name already filled in', d: 'With a single group or component selected, the file name is its own (or its definition\'s); with several objects it proposes name_selection. You edit it in the window; characters not valid on Windows are replaced.' },
    { t: 'SketchUp version of your choice', d: 'Pick the version to save for from the menu: the current one, or 2021 and earlier. The choice is available from SketchUp 2022. An older version may lose what it does not know (styles, recent features), and your SketchUp may refuse very old versions.' },
    { t: 'Original position kept', d: 'Objects in the new file stay at the same coordinates they had in the model, so you can re-import or align them without any shift.' },
    { t: 'With everything it needs', d: 'The components and materials the objects use are saved along with them, without dragging along the rest of the model.' },
    { t: 'Robo window, Help and five languages', d: 'The window follows the Robo style, fits its height to the content and remembers the folder and version you chose. The Help button and the globe at the top right open the guide and change the language (Italian, English, German, French, Spanish). If the file already exists you are asked whether to overwrite it.' }
  ],
  pros: ['Name already filled in and editable', 'SketchUp version of your choice (from SketchUp 2022)', 'A clean file with only what\'s needed', 'The open model is never touched', 'Original coordinates preserved', 'Window and guide in five languages'],
  solves: [
    { p: 'Saving just one part of the model means copying, opening a new file and pasting in place.', s: 'One command: select and export.' },
    { p: 'Someone with an older SketchUp cannot open the file.', s: 'Choose the save version right in the window.' },
    { p: '"Save as" and deleting the rest risks ruining the original file.', s: 'The export happens without modifying the open file.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Export object'], ['Toolbar', '1 button'], ['Window', 'File name, folder and version; automatic height'], ['Save version', 'Your choice, from SketchUp 2022'], ['Format', '.skp file'], ['Languages', '5 (IT, EN, DE, FR, ES)'], ['Undo', 'The model is never modified']]
};
I18N_PLUGINS.de.export_object = {
  tagline: 'Exportiere die ausgewählten Objekte in eine neue .skp-Datei, in der gewünschten Version.',
  simple: 'Wähle einen Teil des Modells aus: Es öffnet sich ein Fenster mit bereits ausgefülltem Namen (dem der Gruppe oder Komponente), dem Ordner und der SketchUp-Version. Robo speichert ihn als separate Datei, an derselben Position, ohne dein geöffnetes Modell anzutasten.',
  steps: ['Die zu exportierenden Objekte auswählen.', 'robo Export object drücken: Der Dateiname ist schon der der Gruppe oder Komponente, du kannst ihn ändern.', 'Ordner und SketchUp-Version wählen und auf Exportieren drücken.'],
  how: [
    { t: 'Das Modell bleibt unberührt', d: 'Die Auswahl wird kurz in eine temporäre Gruppe gepackt, auf die Festplatte gespeichert und der Vorgang gleich danach rückgängig gemacht: Das geöffnete Modell wird weder geschlossen, neu geöffnet noch verändert.' },
    { t: 'Name bereits ausgefüllt', d: 'Ist genau eine Gruppe oder Komponente ausgewählt, ist der Dateiname ihr eigener (oder der ihrer Definition); bei mehreren Objekten schlägt er name_auswahl vor. Du änderst ihn im Fenster; unter Windows ungültige Zeichen werden ersetzt.' },
    { t: 'SketchUp-Version nach Wahl', d: 'Im Menü wählst du die Version, für die gespeichert wird: die aktuelle oder 2021 und älter. Die Auswahl gibt es ab SketchUp 2022. Eine ältere Version kann verlieren, was sie nicht kennt (Stile, neue Funktionen), und dein SketchUp lehnt sehr alte Versionen eventuell ab.' },
    { t: 'Ursprüngliche Position bleibt erhalten', d: 'Die Objekte in der neuen Datei behalten dieselben Koordinaten wie im Modell, sodass du sie ohne Verschiebung wieder importieren oder ausrichten kannst.' },
    { t: 'Mit allem, was dazugehört', d: 'Die von den Objekten verwendeten Komponenten und Materialien werden mitgespeichert, ohne den Rest des Modells mitzuschleppen.' },
    { t: 'Robo-Fenster, Hilfe und fünf Sprachen', d: 'Das Fenster folgt dem Robo-Stil, passt seine Höhe dem Inhalt an und merkt sich Ordner und Version. Die Hilfe-Schaltfläche und die Weltkugel oben rechts öffnen die Anleitung und ändern die Sprache (Italienisch, Englisch, Deutsch, Französisch, Spanisch). Existiert die Datei schon, wirst du gefragt, ob sie überschrieben werden soll.' }
  ],
  pros: ['Name bereits ausgefüllt und änderbar', 'SketchUp-Version nach Wahl (ab SketchUp 2022)', 'Eine saubere Datei nur mit dem Nötigen', 'Das geöffnete Modell wird nie angetastet', 'Ursprüngliche Koordinaten bleiben erhalten', 'Fenster und Anleitung in fünf Sprachen'],
  solves: [
    { p: 'Um nur einen Teil des Modells zu speichern, kopiert man, öffnet eine neue Datei und fügt an der Stelle ein.', s: 'Ein Befehl: auswählen und exportieren.' },
    { p: 'Wer ein älteres SketchUp hat, kann die Datei nicht öffnen.', s: 'Die Speicherversion direkt im Fenster wählen.' },
    { p: '„Speichern unter“ und den Rest löschen kann die Originaldatei ruinieren.', s: 'Der Export erfolgt, ohne die geöffnete Datei zu verändern.' }
  ],
  specs: [['Menü', 'Robo Tool › robo Export object'], ['Symbolleiste', '1 Schaltfläche'], ['Fenster', 'Dateiname, Ordner und Version; automatische Höhe'], ['Speicherversion', 'Nach Wahl, ab SketchUp 2022'], ['Format', '.skp-Datei'], ['Sprachen', '5 (IT, EN, DE, FR, ES)'], ['Rückgängig', 'Das Modell wird nie verändert']]
};
I18N_PLUGINS.fr.export_object = {
  tagline: 'Exporte les objets sélectionnés vers un nouveau fichier .skp, dans la version de ton choix.',
  simple: 'Sélectionne une partie du modèle : une fenêtre s\'ouvre avec le nom déjà rempli (celui du groupe ou du composant), le dossier et la version de SketchUp. Robo l\'enregistre dans un fichier séparé, à la même position, sans toucher à ton modèle ouvert.',
  steps: ['Sélectionne les objets à exporter.', 'Appuie sur robo Export object : le nom du fichier est déjà celui du groupe ou du composant, tu peux le modifier.', 'Choisis le dossier et la version de SketchUp, puis appuie sur Exporter.'],
  how: [
    { t: 'Le modèle reste intact', d: 'La sélection est brièvement placée dans un groupe temporaire, enregistrée sur le disque, puis l\'opération est annulée aussitôt : le modèle ouvert n\'est jamais fermé, rouvert ni modifié.' },
    { t: 'Nom déjà rempli', d: 'Avec un seul groupe ou composant sélectionné, le nom du fichier est le sien (ou celui de sa définition) ; avec plusieurs objets, il propose nom_selection. Tu le modifies dans la fenêtre ; les caractères non valides sous Windows sont remplacés.' },
    { t: 'Version de SketchUp au choix', d: 'Dans le menu, choisis la version pour laquelle enregistrer : la version actuelle, ou 2021 et antérieures. Le choix est disponible à partir de SketchUp 2022. Une version plus ancienne peut perdre ce qu\'elle ne connaît pas (styles, fonctions récentes), et ton SketchUp peut refuser les versions très anciennes.' },
    { t: 'Position d\'origine conservée', d: 'Les objets du nouveau fichier gardent les mêmes coordonnées que dans le modèle, tu peux donc les réimporter ou les aligner sans décalage.' },
    { t: 'Avec tout ce qu\'il faut', d: 'Les composants et matériaux utilisés par les objets sont enregistrés avec eux, sans traîner le reste du modèle.' },
    { t: 'Fenêtre Robo, aide et cinq langues', d: 'La fenêtre suit le style Robo, ajuste sa hauteur au contenu et mémorise le dossier et la version choisis. Le bouton Aide et le globe en haut à droite ouvrent le guide et changent la langue (italien, anglais, allemand, français, espagnol). Si le fichier existe déjà, on te demande s\'il faut le remplacer.' }
  ],
  pros: ['Nom déjà rempli et modifiable', 'Version de SketchUp au choix (à partir de SketchUp 2022)', 'Un fichier propre avec seulement l\'essentiel', 'Le modèle ouvert n\'est jamais touché', 'Coordonnées d\'origine préservées', 'Fenêtre et guide en cinq langues'],
  solves: [
    { p: 'Pour n\'enregistrer qu\'une partie du modèle, on copie, on ouvre un nouveau fichier et on colle sur place.', s: 'Une commande : tu sélectionnes et tu exportes.' },
    { p: 'Quelqu\'un avec un SketchUp plus ancien ne peut pas ouvrir le fichier.', s: 'Choisis la version d\'enregistrement directement dans la fenêtre.' },
    { p: '« Enregistrer sous » puis supprimer le reste risque d\'abîmer le fichier d\'origine.', s: 'L\'exportation se fait sans modifier le fichier ouvert.' }
  ],
  specs: [['Menu', 'Robo Tool › robo Export object'], ['Barre d\'outils', '1 bouton'], ['Fenêtre', 'Nom du fichier, dossier et version ; hauteur automatique'], ['Version d\'enregistrement', 'Au choix, à partir de SketchUp 2022'], ['Format', 'Fichier .skp'], ['Langues', '5 (IT, EN, DE, FR, ES)'], ['Annulation', 'Le modèle n\'est jamais modifié']]
};
I18N_PLUGINS.es.export_object = {
  tagline: 'Exporta los objetos seleccionados a un nuevo archivo .skp, en la versión que elijas.',
  simple: 'Selecciona una parte del modelo: se abre una ventana con el nombre ya escrito (el del grupo o componente), la carpeta y la versión de SketchUp. Robo la guarda en un archivo aparte, en la misma posición, sin tocar tu modelo abierto.',
  steps: ['Selecciona los objetos a exportar.', 'Pulsa robo Export object: el nombre del archivo ya es el del grupo o componente, puedes cambiarlo.', 'Elige la carpeta y la versión de SketchUp y pulsa Exportar.'],
  how: [
    { t: 'El modelo queda intacto', d: 'La selección se envuelve un instante en un grupo temporal, se guarda en disco y justo después la operación se deshace: el modelo abierto nunca se cierra, se reabre ni se modifica.' },
    { t: 'Nombre ya escrito', d: 'Con un solo grupo o componente seleccionado, el nombre del archivo es el suyo (o el de su definición); con varios objetos propone nombre_seleccion. Lo editas en la ventana; los caracteres no válidos en Windows se sustituyen.' },
    { t: 'Versión de SketchUp a elegir', d: 'En el menú eliges la versión para la que guardar: la actual, o 2021 y anteriores. La elección está disponible desde SketchUp 2022. Una versión más antigua puede perder lo que no conoce (estilos, funciones recientes) y tu SketchUp puede rechazar las versiones muy antiguas.' },
    { t: 'Posición original conservada', d: 'Los objetos del nuevo archivo mantienen las mismas coordenadas que tenían en el modelo, así puedes reimportarlos o alinearlos sin desplazamientos.' },
    { t: 'Con todo lo necesario', d: 'Los componentes y materiales que usan los objetos se guardan junto con ellos, sin arrastrar el resto del modelo.' },
    { t: 'Ventana Robo, ayuda y cinco idiomas', d: 'La ventana sigue el estilo Robo, ajusta su altura al contenido y recuerda la carpeta y la versión elegidas. El botón Ayuda y el globo arriba a la derecha abren la guía y cambian el idioma (italiano, inglés, alemán, francés, español). Si el archivo ya existe, se pregunta si se quiere sobrescribir.' }
  ],
  pros: ['Nombre ya escrito y editable', 'Versión de SketchUp a elegir (desde SketchUp 2022)', 'Un archivo limpio solo con lo necesario', 'El modelo abierto nunca se toca', 'Coordenadas originales preservadas', 'Ventana y guía en cinco idiomas'],
  solves: [
    { p: 'Para guardar solo una parte del modelo hay que copiar, abrir un archivo nuevo y pegar en su sitio.', s: 'Un comando: seleccionas y exportas.' },
    { p: 'Quien tiene un SketchUp más antiguo no puede abrir el archivo.', s: 'Elige la versión de guardado directamente en la ventana.' },
    { p: '«Guardar como» y borrar el resto arriesga estropear el archivo original.', s: 'La exportación se hace sin modificar el archivo abierto.' }
  ],
  specs: [['Menú', 'Robo Tool › robo Export object'], ['Barra de herramientas', '1 botón'], ['Ventana', 'Nombre del archivo, carpeta y versión; altura automática'], ['Versión de guardado', 'A elegir, desde SketchUp 2022'], ['Formato', 'Archivo .skp'], ['Idiomas', '5 (IT, EN, DE, FR, ES)'], ['Deshacer', 'El modelo nunca se modifica']]
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
    { t: 'Proxy, 3D Warehouse and cloud', d: 'For objects created with robo Proxy Manager it also shows the proxy. A button opens 3D Warehouse to download models into the library, and cloud backup saves the list in a OneDrive or Google Drive folder: the password never passes through the plugin.' },
    { t: 'Files from newer versions', d: 'If a component was saved with a newer SketchUp than yours, it is inserted the way File › Import does (SketchUp warns you) instead of failing or loading only part of it. Empty files (0 bytes) are no longer listed.' },
    { t: 'Faster Refresh and previews', d: 'The scan walks each folder only once and, for many files, the preview is read straight from the start of the .skp, without opening it.' }
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
    { t: 'Proxy, 3D Warehouse und Cloud', d: 'Für mit robo Proxy Manager erstellte Objekte wird auch der Proxy angezeigt. Eine Schaltfläche öffnet 3D Warehouse zum Herunterladen von Modellen in die Bibliothek, und das Cloud-Backup speichert die Liste in einem OneDrive- oder Google-Drive-Ordner: das Passwort läuft nie über das Plugin.' },
    { t: 'Dateien aus neueren Versionen', d: 'Wurde eine Komponente mit einem neueren SketchUp als deinem gespeichert, wird sie wie bei Datei › Importieren eingefügt (SketchUp warnt dich), statt zu scheitern oder nur teilweise zu laden. Leere Dateien (0 Byte) werden nicht mehr aufgelistet.' },
    { t: 'Schnelleres Aktualisieren und Vorschauen', d: 'Der Scan durchläuft jeden Ordner nur einmal, und bei vielen Dateien wird die Vorschau direkt vom Anfang der .skp gelesen, ohne sie zu öffnen.' }
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
    { t: 'Proxy, 3D Warehouse et cloud', d: 'Pour les objets créés avec robo Proxy Manager, le proxy est aussi affiché. Un bouton ouvre 3D Warehouse pour télécharger des modèles dans la bibliothèque, et la sauvegarde cloud enregistre la liste dans un dossier OneDrive ou Google Drive : le mot de passe ne passe jamais par le plugin.' },
    { t: 'Fichiers de versions plus récentes', d: 'Si un composant a été enregistré avec une version de SketchUp plus récente que la tienne, il est inséré comme avec Fichier › Importer (SketchUp t\'avertit) au lieu d\'échouer ou de n\'en charger qu\'une partie. Les fichiers vides (0 octet) ne sont plus listés.' },
    { t: 'Actualisation et aperçus plus rapides', d: 'L\'analyse ne parcourt chaque dossier qu\'une fois et, pour beaucoup de fichiers, l\'aperçu est lu directement au début du .skp, sans l\'ouvrir.' }
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
    { t: 'Proxy, 3D Warehouse y nube', d: 'Para los objetos creados con robo Proxy Manager también muestra el proxy. Un botón abre 3D Warehouse para descargar modelos a la biblioteca, y la copia de seguridad en la nube guarda la lista en una carpeta de OneDrive o Google Drive: la contraseña nunca pasa por el plugin.' },
    { t: 'Archivos de versiones más recientes', d: 'Si un componente se guardó con un SketchUp más reciente que el tuyo, se inserta como con Archivo › Importar (SketchUp te avisa) en lugar de fallar o cargar solo una parte. Los archivos vacíos (0 bytes) ya no se listan.' },
    { t: 'Actualizar y vistas previas más rápidas', d: 'El análisis recorre cada carpeta una sola vez y, en muchos archivos, la vista previa se lee directamente del inicio del .skp, sin abrirlo.' }
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
  simple: 'A toolbar with everyday operations: create groups and components, select, hide, delete guides and dimensions. Every button has its own icon and a keyboard shortcut. From Settings you can also enable or disable the individual buttons you want to see on the toolbar.',
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
  simple: 'Eine Symbolleiste mit den täglichen Aufgaben: Gruppen und Komponenten erstellen, auswählen, ausblenden, Hilfslinien und Maße löschen. Jede Schaltfläche hat ein eigenes Icon und eine Tastenkombination. In den Einstellungen können Sie außerdem die einzelnen Schaltflächen aktivieren oder deaktivieren, die in der Symbolleiste erscheinen sollen.',
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
  simple: 'Une barre avec les opérations quotidiennes : créer des groupes et composants, sélectionner, masquer, supprimer les repères et cotes. Chaque bouton a sa propre icône et un raccourci clavier. Depuis Paramètres, vous pouvez aussi activer ou désactiver les boutons que vous souhaitez voir dans la barre.',
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
  simple: 'Una barra con las operaciones de cada día: crea grupos y componentes, selecciona, oculta, borra guías y cotas. Cada botón tiene su icono y un atajo de teclado. Desde Ajustes también puedes activar o desactivar los botones que quieras ver en la barra.',
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


/* ================================================================== APPROFONDIMENTI (intro, main, how) */
/* Spiegazione estesa di ogni plugin in EN/DE/FR/ES. L'italiano e' in data.js. */
I18N_PLUGINS.en.baseform = I18N_PLUGINS.en.baseform || {};
I18N_PLUGINS.en.baseform.intro = [
  'robo baseform is a panel for creating the basic 3D shapes in seconds: cube, cylinder, cone, frustum, sphere, icosphere and torus. Instead of drawing a profile and then extruding or revolving it each time, you type the measurements and the shape is ready.',
  'It is useful whenever you need precise, clean volumes: a starting block for a piece of furniture, a pillar, a column, a sphere for a chandelier, a ring. They are already closed, smooth and exact, so you can use them straight away or edit them like any other geometry.'
];
I18N_PLUGINS.en.baseform.main = [
  { t: 'Seven shapes in one tool', d: 'Pick a cube, cylinder, cone, frustum, sphere, icosphere or torus from the list. Only the measurements that matter appear for each one, such as radius, height or number of segments.' },
  { t: 'Preview before you confirm', d: 'A small preview in the window shows the proportions as you type. When you confirm, the ghost shape follows the mouse in the model and you place it with a click.' },
  { t: 'Your model\'s measurements', d: 'Type values in the units you are already using, centimeters, meters or inches, with no conversions and no rounding errors.' },
  { t: 'A cube that stays proportioned', d: 'A chain links width, depth and height: type one value and the others follow. If you unlock it, the cube becomes a cuboid.' },
  { t: 'Insertion point of your choice', d: 'Decide whether to anchor the shape by a corner, the center of the base or the center, so it appears exactly where you want it.' }
];
I18N_PLUGINS.en.baseform.how = [
  { t: 'The problem it solves', d: 'To get a precise cube, cylinder or sphere, SketchUp needs several tools and several steps: you draw a profile, extrude or revolve it, check the measurements, fix the faces. If you do this often, you lose a lot of time. robo baseform puts it all in a single panel: pick the shape, type the measurements and get it already closed, smooth and ready.' },
  { t: 'Step 1 · Pick the shape', d: 'From the list choose cube, cylinder, cone, frustum, sphere (UV Sphere), icosphere or torus. Each shape has its own drawing and, when you change shape, the fields change too: a cylinder needs radius and height, a torus its two radii, a sphere the number of segments and rings.' },
  { t: 'Step 2 · Type the measurements and watch the preview', d: 'As you type, a small 3D preview in the window updates and you can rotate it by dragging. You see the proportions right away, before touching the model. Measurements are read and written in your model\'s units: if you work in centimeters you type centimeters, if you work in inches you type inches, with no conversions.' },
  { t: 'Step 3 · Place it with a click', d: 'You confirm and a placement tool starts: the ghost shape follows the mouse directly in the model, with colored markers for the axes. Click at the spot you want and the shape is created there. You can choose whether the insertion point is the corner of the bounding box, the center of the base or the center of the object.' },
  { t: 'The cube with the chain', d: 'The cube has width, depth and height linked by a chain: type a single value and the others follow, so you always get a perfect cube. If you unlock the chain, each value changes on its own and the cube becomes a cuboid. When you link it again, the ratios stay as you set them.' },
  { t: 'Visible axes and origin', d: 'The preview draws the X (red), Y (green) and Z (blue) axes and they move as soon as you change the origin. You see in advance where the insertion point will be and where the axes of the group or component will end up, without trial and error.' },
  { t: 'Closed, smooth, undoable solids', d: 'Every shape is a closed solid with faces pointing outward. Spheres, cylinders and cones have softened edges, so they look smooth but stay editable like any geometry. Creation is a single operation: one Ctrl+Z undoes everything.' },
  { t: 'Guide and settings', d: 'The Help button opens a guide with a colored card for each object and follows the language you chose: Italian, English, German, French or Spanish. Object, values, chain, position and language are saved and restored the next time you open SketchUp.' },
  { t: 'A concrete example', d: 'You need to draw four cylindrical pillars, 30 cm in diameter and 280 cm tall. Open robo baseform, choose Cylinder, type radius 15 and height 280, check the preview and confirm. Click on the first corner: the pillar is there, already closed and smooth. Repeat the click for the other three. If you make a mistake, one Ctrl+Z undoes the last one.' }
];
I18N_PLUGINS.de.baseform = I18N_PLUGINS.de.baseform || {};
I18N_PLUGINS.de.baseform.intro = [
  'robo baseform ist ein Fenster, mit dem Sie die Grundformen des 3D-Modellierens in Sekunden erstellen: Würfel, Zylinder, Kegel, Kegelstumpf, Kugel, Ikosphäre und Torus. Statt jedes Mal ein Profil zu zeichnen und zu extrudieren oder zu drehen, geben Sie die Maße ein, und die Form ist fertig.',
  'Es ist nützlich, wenn Sie präzise, saubere Körper brauchen: einen Rohling für ein Möbelstück, einen Pfeiler, eine Säule, eine Kugel für einen Kronleuchter, einen Ring. Sie sind bereits geschlossen, glatt und maßgenau und lassen sich sofort verwenden oder wie jede andere Geometrie bearbeiten.'
];
I18N_PLUGINS.de.baseform.main = [
  { t: 'Sieben Formen in einem Werkzeug', d: 'Wählen Sie aus der Liste Würfel, Zylinder, Kegel, Kegelstumpf, Kugel, Ikosphäre oder Torus. Für jede Form erscheinen nur die nötigen Maße, etwa Radius, Höhe oder Anzahl der Segmente.' },
  { t: 'Vorschau vor der Bestätigung', d: 'Eine kleine Vorschau im Fenster zeigt die Proportionen, während Sie tippen. Nach der Bestätigung folgt die Geisterform der Maus im Modell, und Sie platzieren sie mit einem Klick.' },
  { t: 'Die Maße Ihres Modells', d: 'Geben Sie die Werte in den Einheiten ein, die Sie ohnehin verwenden, Zentimeter, Meter oder Zoll, ohne Umrechnung und ohne Rundungsfehler.' },
  { t: 'Ein Würfel mit stets gleichen Proportionen', d: 'Eine Kette verbindet Breite, Tiefe und Höhe: Geben Sie einen Wert ein, und die anderen passen sich an. Lösen Sie die Kette, wird der Würfel zum Quader.' },
  { t: 'Einfügepunkt nach Wahl', d: 'Legen Sie fest, ob die Form an einer Ecke, am Mittelpunkt der Grundfläche oder am Mittelpunkt verankert wird, damit sie genau dort entsteht, wo Sie sie wollen.' }
];
I18N_PLUGINS.de.baseform.how = [
  { t: 'Das Problem, das es löst', d: 'Für einen präzisen Würfel, Zylinder oder eine Kugel braucht SketchUp mehrere Werkzeuge und Schritte: Profil zeichnen, extrudieren oder drehen, Maße prüfen, Flächen korrigieren. Wer das oft tut, verliert viel Zeit. robo baseform vereint alles in einem Fenster: Form wählen, Maße eingeben, und sie ist bereits geschlossen, glatt und einsatzbereit.' },
  { t: 'Schritt 1 · Form wählen', d: 'Wählen Sie aus der Liste Würfel, Zylinder, Kegel, Kegelstumpf, Kugel (UV Sphere), Ikosphäre oder Torus. Jede Form hat ihre eigene Zeichnung, und beim Wechsel ändern sich auch die Felder: Ein Zylinder braucht Radius und Höhe, ein Torus seine zwei Radien, eine Kugel die Anzahl der Segmente und Ringe.' },
  { t: 'Schritt 2 · Maße eingeben und Vorschau ansehen', d: 'Beim Tippen aktualisiert sich eine kleine 3D-Vorschau im Fenster, und Sie können sie durch Ziehen drehen. Sie sehen sofort die Proportionen, noch bevor Sie das Modell berühren. Die Maße werden in den Einheiten Ihres Modells gelesen und geschrieben: Wer in Zentimetern arbeitet, gibt Zentimeter ein, wer in Zoll arbeitet, Zoll, ohne Umrechnung.' },
  { t: 'Schritt 3 · Mit einem Klick platzieren', d: 'Sie bestätigen, und ein Platzierungswerkzeug startet: Die Geisterform folgt der Maus direkt im Modell, mit farbigen Markierungen für die Achsen. Klicken Sie an die gewünschte Stelle, und die Form entsteht dort. Sie können wählen, ob der Einfügepunkt die Ecke des Begrenzungsrahmens, der Mittelpunkt der Grundfläche oder der Mittelpunkt des Objekts ist.' },
  { t: 'Der Würfel mit der Kette', d: 'Beim Würfel sind Breite, Tiefe und Höhe durch eine Kette verbunden: Geben Sie einen einzigen Wert ein, und die anderen folgen, sodass Sie immer einen perfekten Würfel erhalten. Lösen Sie die Kette, ändert sich jeder Wert einzeln und der Würfel wird zum Quader. Verbinden Sie sie wieder, bleiben die eingestellten Verhältnisse erhalten.' },
  { t: 'Sichtbare Achsen und Ursprung', d: 'Die Vorschau zeichnet die Achsen X (rot), Y (grün) und Z (blau), und sie verschieben sich, sobald Sie den Ursprung ändern. Sie sehen vorab, wo der Einfügepunkt liegt und wo die Achsen der Gruppe oder der Komponente landen, ohne Ausprobieren und Korrigieren.' },
  { t: 'Geschlossene, glatte, rückgängig zu machende Körper', d: 'Jede Form ist ein geschlossener Körper mit nach außen zeigenden Flächen. Kugeln, Zylinder und Kegel haben weichgezeichnete Kanten, wirken also glatt, bleiben aber wie jede Geometrie bearbeitbar. Das Erstellen ist ein einziger Vorgang: Ein Strg+Z macht alles rückgängig.' },
  { t: 'Anleitung und Einstellungen', d: 'Die Schaltfläche Help öffnet eine Anleitung mit einer farbigen Karte für jedes Objekt, in der gewählten Sprache: Italienisch, Englisch, Deutsch, Französisch oder Spanisch. Objekt, Werte, Kette, Position und Sprache werden gespeichert und beim nächsten Start von SketchUp wiederhergestellt.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie müssen vier zylindrische Pfeiler mit 30 cm Durchmesser und 280 cm Höhe zeichnen. Öffnen Sie robo baseform, wählen Sie Zylinder, geben Sie Radius 15 und Höhe 280 ein, prüfen Sie die Vorschau und bestätigen Sie. Klicken Sie auf die erste Ecke: Der Pfeiler steht dort, bereits geschlossen und glatt. Wiederholen Sie den Klick für die anderen drei. Bei einem Fehler macht ein Strg+Z den letzten rückgängig.' }
];
I18N_PLUGINS.fr.baseform = I18N_PLUGINS.fr.baseform || {};
I18N_PLUGINS.fr.baseform.intro = [
  'robo baseform est un panneau qui permet de créer en quelques secondes les formes de base de la 3D : cube, cylindre, cône, tronc de cône, sphère, icosphère et tore. Au lieu de dessiner un profil puis de l\'extruder ou de le faire pivoter à chaque fois, vous saisissez les dimensions et la forme est prête.',
  'Il sert chaque fois que vous avez besoin de volumes précis et propres : un bloc de départ pour un meuble, un pilier, une colonne, une sphère pour un lustre, un anneau. Ils sont déjà fermés, lisses et exacts : vous pouvez les utiliser tout de suite ou les modifier comme n\'importe quelle géométrie.'
];
I18N_PLUGINS.fr.baseform.main = [
  { t: 'Sept formes dans un seul outil', d: 'Choisissez dans la liste cube, cylindre, cône, tronc de cône, sphère, icosphère ou tore. Pour chacun, seules les dimensions utiles apparaissent, comme le rayon, la hauteur ou le nombre de segments.' },
  { t: 'Aperçu avant de confirmer', d: 'Un petit aperçu dans la fenêtre montre les proportions pendant que vous saisissez. Une fois confirmé, la forme fantôme suit la souris dans le modèle et vous la placez d\'un clic.' },
  { t: 'Les unités de votre modèle', d: 'Saisissez les valeurs dans les unités que vous utilisez déjà, centimètres, mètres ou pouces, sans conversion et sans erreur d\'arrondi.' },
  { t: 'Un cube toujours proportionné', d: 'Une chaîne relie largeur, profondeur et hauteur : saisissez une valeur et les autres suivent. Si vous la déverrouillez, le cube devient un parallélépipède.' },
  { t: 'Point d\'insertion au choix', d: 'Décidez si la forme est ancrée par un angle, par le centre de la base ou par le centre, pour qu\'elle apparaisse exactement où vous le souhaitez.' }
];
I18N_PLUGINS.fr.baseform.how = [
  { t: 'Le problème qu\'il résout', d: 'Pour obtenir un cube, un cylindre ou une sphère précis, SketchUp demande plusieurs outils et plusieurs étapes : dessiner un profil, l\'extruder ou le faire pivoter, vérifier les dimensions, corriger les faces. Si vous le faites souvent, vous perdez beaucoup de temps. robo baseform réunit tout dans un seul panneau : choisissez la forme, saisissez les dimensions et vous l\'obtenez déjà fermée, lisse et prête.' },
  { t: 'Étape 1 · Choisissez la forme', d: 'Dans la liste, choisissez cube, cylindre, cône, tronc de cône, sphère (UV Sphere), icosphère ou tore. Chaque forme a son propre dessin et, quand vous changez de forme, les champs changent aussi : un cylindre demande un rayon et une hauteur, un tore ses deux rayons, une sphère le nombre de segments et d\'anneaux.' },
  { t: 'Étape 2 · Saisissez les dimensions et regardez l\'aperçu', d: 'Pendant que vous saisissez, un petit aperçu 3D dans la fenêtre se met à jour et vous pouvez le faire pivoter en le faisant glisser. Vous voyez tout de suite les proportions, avant même de toucher au modèle. Les dimensions sont lues et écrites dans les unités de votre modèle : si vous travaillez en centimètres, vous saisissez des centimètres, si vous travaillez en pouces, des pouces, sans conversion.' },
  { t: 'Étape 3 · Placez d\'un clic', d: 'Vous confirmez et un outil de placement démarre : la forme fantôme suit la souris directement dans le modèle, avec des repères colorés pour les axes. Cliquez à l\'endroit voulu et la forme y est créée. Vous pouvez choisir si le point d\'insertion est l\'angle de la boîte englobante, le centre de la base ou le centre de l\'objet.' },
  { t: 'Le cube avec la chaîne', d: 'Le cube a largeur, profondeur et hauteur reliées par une chaîne : saisissez une seule valeur et les autres suivent, vous obtenez donc toujours un cube parfait. Si vous déverrouillez la chaîne, chaque valeur se modifie séparément et le cube devient un parallélépipède. Quand vous la reliez de nouveau, les rapports restent ceux que vous avez définis.' },
  { t: 'Axes et origine visibles', d: 'L\'aperçu dessine les axes X (rouge), Y (vert) et Z (bleu), et ils se déplacent dès que vous changez l\'origine. Vous voyez à l\'avance où sera le point d\'insertion et où se trouveront les axes du groupe ou du composant, sans essais ni corrections.' },
  { t: 'Solides fermés, lisses et annulables', d: 'Chaque forme est un solide fermé dont les faces sont orientées vers l\'extérieur. Les sphères, cylindres et cônes ont des arêtes adoucies : ils paraissent lisses tout en restant modifiables comme n\'importe quelle géométrie. La création est une seule opération : un seul Ctrl+Z annule tout.' },
  { t: 'Guide et réglages', d: 'Le bouton Help ouvre un guide avec une fiche colorée pour chaque objet, dans la langue choisie : italien, anglais, allemand, français ou espagnol. L\'objet, les valeurs, la chaîne, la position et la langue sont enregistrés et retrouvés à la prochaine ouverture de SketchUp.' },
  { t: 'Un exemple concret', d: 'Vous devez dessiner quatre piliers cylindriques de 30 cm de diamètre et 280 cm de hauteur. Ouvrez robo baseform, choisissez Cylindre, saisissez rayon 15 et hauteur 280, vérifiez l\'aperçu et confirmez. Cliquez sur le premier angle : le pilier est là, déjà fermé et lisse. Répétez le clic pour les trois autres. En cas d\'erreur, un Ctrl+Z annule le dernier.' }
];
I18N_PLUGINS.es.baseform = I18N_PLUGINS.es.baseform || {};
I18N_PLUGINS.es.baseform.intro = [
  'robo baseform es un panel para crear en segundos las formas básicas del 3D: cubo, cilindro, cono, tronco de cono, esfera, icosfera y toro. En lugar de dibujar cada vez un perfil y luego extruirlo o hacerlo girar, escribes las medidas y la forma está lista.',
  'Sirve siempre que necesites volúmenes precisos y limpios: un bloque de partida para un mueble, un pilar, una columna, una esfera para una lámpara, un anillo. Ya son cerrados, lisos y exactos, así que puedes usarlos enseguida o editarlos como cualquier otra geometría.'
];
I18N_PLUGINS.es.baseform.main = [
  { t: 'Siete formas en una sola herramienta', d: 'Elige en la lista cubo, cilindro, cono, tronco de cono, esfera, icosfera o toro. Para cada una aparecen solo las medidas necesarias, como radio, altura o número de segmentos.' },
  { t: 'Vista previa antes de confirmar', d: 'Una pequeña vista previa en la ventana muestra las proporciones mientras escribes. Al confirmar, la forma fantasma sigue al ratón en el modelo y la colocas con un clic.' },
  { t: 'Las medidas de tu modelo', d: 'Escribe los valores en las unidades que ya usas, centímetros, metros o pulgadas, sin conversiones ni errores de redondeo.' },
  { t: 'Un cubo siempre proporcionado', d: 'Una cadena enlaza ancho, profundidad y altura: escribe un valor y los demás se ajustan. Si la desbloqueas, el cubo se convierte en un paralelepípedo.' },
  { t: 'Punto de inserción a elegir', d: 'Decide si la forma se ancla por una esquina, por el centro de la base o por el centro, para que aparezca exactamente donde quieres.' }
];
I18N_PLUGINS.es.baseform.how = [
  { t: 'El problema que resuelve', d: 'Para obtener un cubo, un cilindro o una esfera precisos, SketchUp necesita varias herramientas y varios pasos: dibujar un perfil, extruirlo o hacerlo girar, comprobar las medidas, corregir las caras. Si lo haces a menudo, pierdes mucho tiempo. robo baseform lo reúne todo en un solo panel: eliges la forma, escribes las medidas y la obtienes ya cerrada, lisa y lista.' },
  { t: 'Paso 1 · Elige la forma', d: 'En la lista elige cubo, cilindro, cono, tronco de cono, esfera (UV Sphere), icosfera o toro. Cada forma tiene su propio dibujo y, al cambiar de forma, cambian también los campos: un cilindro necesita radio y altura, un toro sus dos radios, una esfera el número de segmentos y de anillos.' },
  { t: 'Paso 2 · Escribe las medidas y mira la vista previa', d: 'Mientras escribes, una pequeña vista previa 3D en la ventana se actualiza y puedes girarla arrastrando. Ves enseguida las proporciones, antes de tocar el modelo. Las medidas se leen y se escriben en las unidades de tu modelo: si trabajas en centímetros escribes centímetros, si trabajas en pulgadas escribes pulgadas, sin conversiones.' },
  { t: 'Paso 3 · Coloca con un clic', d: 'Confirmas y se activa una herramienta de colocación: la forma fantasma sigue al ratón directamente en el modelo, con marcadores de colores para los ejes. Haces clic en el punto deseado y la forma nace allí. Puedes elegir si el punto de inserción es la esquina de la caja envolvente, el centro de la base o el centro del objeto.' },
  { t: 'El cubo con la cadena', d: 'El cubo tiene ancho, profundidad y altura enlazados por una cadena: escribe un solo valor y los demás se ajustan, así siempre obtienes un cubo perfecto. Si desbloqueas la cadena, cada valor se modifica por separado y el cubo se convierte en un paralelepípedo. Al volver a enlazarla, las proporciones quedan como las habías puesto.' },
  { t: 'Ejes y origen visibles', d: 'La vista previa dibuja los ejes X (rojo), Y (verde) y Z (azul) y se mueven en cuanto cambias el origen. Ves de antemano dónde estará el punto de inserción y dónde quedarán los ejes del grupo o del componente, sin probar y corregir.' },
  { t: 'Sólidos cerrados, lisos y anulables', d: 'Cada forma es un sólido cerrado con las caras orientadas hacia fuera. Las esferas, cilindros y conos tienen los bordes suavizados, así que parecen lisos pero siguen siendo editables como cualquier geometría. La creación es una sola operación: un solo Ctrl+Z lo deshace todo.' },
  { t: 'Guía y ajustes', d: 'El botón Help abre una guía con una ficha de color para cada objeto, en el idioma elegido: italiano, inglés, alemán, francés o español. Objeto, valores, cadena, posición e idioma se guardan y se recuperan la próxima vez que abras SketchUp.' },
  { t: 'Un ejemplo concreto', d: 'Tienes que dibujar cuatro pilares cilíndricos de 30 cm de diámetro y 280 cm de altura. Abre robo baseform, elige Cilindro, escribe radio 15 y altura 280, mira la vista previa y confirma. Haz clic en la primera esquina: el pilar está ahí, ya cerrado y liso. Repite el clic para los otros tres. Si te equivocas, un Ctrl+Z deshace el último.' }
];
I18N_PLUGINS.en.extract = I18N_PLUGINS.en.extract || {};
I18N_PLUGINS.en.extract.intro = [
  'robo Extract takes a face or an edge from inside a group or component and gives you a copy outside it, in exactly the same position. You don\'t need to open the group or copy and paste: just hover and click.',
  'It is useful whenever you want to reuse part of an object you\'ve already modeled: the outline of a wall to draw on, the profile of a piece to build another, an organic surface to reuse. The copy arrives already in the right place, even on sloped planes.'
];
I18N_PLUGINS.en.extract.main = [
  { t: 'Works inside closed groups', d: 'It highlights and copies faces and edges even inside nested groups and components, without opening them and without selecting anything first.' },
  { t: 'Same position and slope', d: 'The copy overlaps the original, even if the object was rotated, scaled or mirrored. If you prefer, you can make it appear beside it.' },
  { t: 'Organic surfaces', d: 'On a curved shape it picks up the whole smooth area in one go, with a limit you can adjust using a slider with preview.' },
  { t: 'Several items at once', d: 'With Shift you add more faces or edges and copy them all into a single new group. On an arc or circle it takes the whole curve.' }
];
I18N_PLUGINS.en.extract.how = [
  { t: 'The problem it solves', d: 'When a face or an edge is inside a group or component, to use it you have to open the group, copy, exit and paste, with the risk of moving it or choosing the wrong level. If the object was also rotated, scaled or mirrored, putting it back in the exact spot is a long job. robo Extract does it all with a click, without opening anything.' },
  { t: 'Step 1 · Start the tool', d: 'Press the robo Extract button (or the menu entry): the tool starts and the preferences window opens. You don\'t have to select anything first and you don\'t have to enter groups: the tool reaches faces and edges inside closed, even nested, groups and components on its own.' },
  { t: 'Step 2 · Hover and look', d: 'As you move the mouse over a face or edge, it turns orange and the status bar tells you where the copy will go. The plugin reads the position from the exact instance under the cursor, so translations, rotations, scales and mirrors don\'t shift the result.' },
  { t: 'Step 3 · Click to copy', d: 'With a click the copy appears in a new group, already selected. With Shift+click you add more faces, segments or curves of the same group and copy them all together. If you point at a segment of an arc or circle, it takes the whole curve.' },
  { t: 'Where the copy goes', d: 'With nothing open, the copy is created at the model root, outside the source group. If you have a group open for editing and pick the geometry of another group, the copy goes into the open group; if you pick its own geometry, it goes up one level.' },
  { t: 'Organic surfaces', d: 'A curved surface is made of hundreds of small faces. When you click one, the tool extends it to nearby faces until the fold exceeds the "smoothness limit". In Preferences, a slider with a live preview shows how the selection changes.' },
  { t: 'Same position or beside it', d: 'By default the copy overlaps the original exactly. If you turn off "Copy in the same position", it appears beside it instead, shifted aside, so you see both. The "Apply" button saves the settings and confirms the collected items, like the Enter key. Materials, tags and the interface are available in five languages.' },
  { t: 'A concrete example', d: 'You have a building modeled in many groups and want to draw a window on the facade of a sloped wall. You start robo Extract, hover over the wall, which highlights, and click: the copy of the face appears exactly on the wall, with the same slope, outside the group. Now you can draw on it without opening anything. One Ctrl+Z undoes the copy.' }
];
I18N_PLUGINS.de.extract = I18N_PLUGINS.de.extract || {};
I18N_PLUGINS.de.extract.intro = [
  'robo Extract nimmt eine Fläche oder eine Kante aus dem Inneren einer Gruppe oder Komponente und liefert eine Kopie außerhalb, an exakt derselben Position. Sie müssen die Gruppe nicht öffnen oder kopieren und einfügen: Maus darüberführen und klicken.',
  'Es ist nützlich, wenn Sie einen Teil eines bereits modellierten Objekts wiederverwenden möchten: die Kontur einer Wand zum Daraufzeichnen, das Profil eines Teils, um ein anderes zu bauen, eine organische Oberfläche. Die Kopie liegt bereits an der richtigen Stelle, auch auf geneigten Ebenen.'
];
I18N_PLUGINS.de.extract.main = [
  { t: 'Funktioniert in geschlossenen Gruppen', d: 'Es hebt Flächen und Kanten hervor und kopiert sie auch in verschachtelten Gruppen und Komponenten, ohne sie zu öffnen und ohne vorher etwas auszuwählen.' },
  { t: 'Gleiche Position und Neigung', d: 'Die Kopie liegt auf dem Original, auch wenn das Objekt gedreht, skaliert oder gespiegelt wurde. Wenn Sie möchten, erscheint sie daneben.' },
  { t: 'Organische Oberflächen', d: 'Auf einer gekrümmten Form erfasst es die ganze glatte Zone auf einmal, mit einem Grenzwert, den Sie über einen Regler mit Vorschau einstellen.' },
  { t: 'Mehrere Elemente gleichzeitig', d: 'Mit Umschalt fügen Sie weitere Flächen oder Kanten hinzu und kopieren alle in eine einzige neue Gruppe. Bei einem Bogen oder Kreis wird die ganze Kurve genommen.' }
];
I18N_PLUGINS.de.extract.how = [
  { t: 'Das Problem, das es löst', d: 'Liegt eine Fläche oder Kante in einer Gruppe oder Komponente, müssen Sie die Gruppe öffnen, kopieren, verlassen und einfügen, mit dem Risiko, sie zu verschieben oder die falsche Ebene zu erwischen. War das Objekt zudem gedreht, skaliert oder gespiegelt, ist es mühsam, sie exakt zurückzusetzen. robo Extract erledigt alles mit einem Klick, ohne etwas zu öffnen.' },
  { t: 'Schritt 1 · Werkzeug starten', d: 'Drücken Sie die Schaltfläche robo Extract (oder den Menüeintrag): Das Werkzeug startet und das Einstellungsfenster öffnet sich. Sie müssen vorher nichts auswählen und keine Gruppen betreten: Das Werkzeug erreicht Flächen und Kanten in geschlossenen, auch verschachtelten Gruppen und Komponenten von selbst.' },
  { t: 'Schritt 2 · Maus darüberführen und hinsehen', d: 'Wenn Sie die Maus über eine Fläche oder Kante bewegen, wird sie orange, und die Statusleiste zeigt, wohin die Kopie kommt. Das Plugin liest die Position von der genauen Instanz unter dem Cursor, sodass Verschiebungen, Drehungen, Skalierungen und Spiegelungen das Ergebnis nicht verfälschen.' },
  { t: 'Schritt 3 · Zum Kopieren klicken', d: 'Mit einem Klick erscheint die Kopie in einer neuen, bereits ausgewählten Gruppe. Mit Umschalt+Klick fügen Sie weitere Flächen, Segmente oder Kurven derselben Gruppe hinzu und kopieren alle zusammen. Zeigen Sie auf ein Segment eines Bogens oder Kreises, wird die ganze Kurve genommen.' },
  { t: 'Wohin die Kopie kommt', d: 'Ist nichts geöffnet, entsteht die Kopie in der Wurzel des Modells, außerhalb der Ausgangsgruppe. Haben Sie eine Gruppe zum Bearbeiten geöffnet und wählen die Geometrie einer anderen Gruppe, kommt die Kopie in die geöffnete Gruppe; wählen Sie deren eigene Geometrie, steigt sie eine Ebene nach oben.' },
  { t: 'Organische Oberflächen', d: 'Eine gekrümmte Oberfläche besteht aus Hunderten kleiner Flächen. Beim Klick auf eine erweitert das Werkzeug sie auf benachbarte Flächen, bis der Knick die „Glättungsgrenze“ überschreitet. In den Einstellungen zeigt ein Regler mit Echtzeitvorschau, wie sich die Auswahl ändert.' },
  { t: 'Gleiche Position oder daneben', d: 'Standardmäßig liegt die Kopie genau auf dem Original. Schalten Sie „In derselben Position kopieren“ aus, erscheint sie stattdessen daneben, seitlich verschoben, sodass Sie beide sehen. Die Schaltfläche „Anwenden“ speichert die Einstellungen und bestätigt die gesammelten Elemente, wie die Eingabetaste. Materialien, Tags und Oberfläche gibt es in fünf Sprachen.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie haben ein Gebäude in vielen Gruppen modelliert und möchten ein Fenster auf die Fassade einer geneigten Wand zeichnen. Sie starten robo Extract, fahren über die Wand, die sich färbt, und klicken: Die Kopie der Fläche erscheint exakt auf der Wand, mit derselben Neigung, außerhalb der Gruppe. Nun können Sie darauf zeichnen, ohne etwas zu öffnen. Ein Strg+Z macht die Kopie rückgängig.' }
];
I18N_PLUGINS.fr.extract = I18N_PLUGINS.fr.extract || {};
I18N_PLUGINS.fr.extract.intro = [
  'robo Extract prend une face ou une arête à l\'intérieur d\'un groupe ou d\'un composant et vous en donne une copie à l\'extérieur, exactement à la même position. Pas besoin d\'ouvrir le groupe ni de copier-coller : il suffit de survoler et de cliquer.',
  'Il sert chaque fois que vous voulez réutiliser une partie d\'un objet déjà modélisé : le contour d\'un mur pour dessiner dessus, le profil d\'une pièce pour en construire une autre, une surface organique. La copie arrive déjà au bon endroit, même sur des plans inclinés.'
];
I18N_PLUGINS.fr.extract.main = [
  { t: 'Fonctionne dans les groupes fermés', d: 'Il met en évidence et copie faces et arêtes même dans des groupes et composants imbriqués, sans les ouvrir et sans rien sélectionner au préalable.' },
  { t: 'Même position et même inclinaison', d: 'La copie se superpose à l\'original, même si l\'objet a été pivoté, mis à l\'échelle ou en miroir. Si vous préférez, elle peut apparaître à côté.' },
  { t: 'Surfaces organiques', d: 'Sur une forme courbe, il prend d\'un coup toute la zone lisse, avec une limite réglable par un curseur avec aperçu.' },
  { t: 'Plusieurs éléments à la fois', d: 'Avec Maj, vous ajoutez d\'autres faces ou arêtes et les copiez toutes dans un seul nouveau groupe. Sur un arc ou un cercle, il prend la courbe entière.' }
];
I18N_PLUGINS.fr.extract.how = [
  { t: 'Le problème qu\'il résout', d: 'Quand une face ou une arête est dans un groupe ou un composant, pour l\'utiliser il faut ouvrir le groupe, copier, sortir et coller, au risque de la déplacer ou de se tromper de niveau. Si l\'objet a en plus été pivoté, mis à l\'échelle ou en miroir, la remettre exactement en place est long. robo Extract fait tout d\'un clic, sans rien ouvrir.' },
  { t: 'Étape 1 · Activez l\'outil', d: 'Appuyez sur le bouton robo Extract (ou l\'entrée de menu) : l\'outil démarre et la fenêtre des préférences s\'ouvre. Rien à sélectionner avant et pas besoin d\'entrer dans les groupes : l\'outil atteint de lui-même les faces et arêtes dans des groupes et composants fermés, même imbriqués.' },
  { t: 'Étape 2 · Survolez et regardez', d: 'En déplaçant la souris sur une face ou une arête, elle devient orange et la barre d\'état indique où ira la copie. Le plugin lit la position de l\'instance exacte sous le curseur : translations, rotations, échelles et miroirs ne décalent donc pas le résultat.' },
  { t: 'Étape 3 · Cliquez pour copier', d: 'D\'un clic, la copie apparaît dans un nouveau groupe, déjà sélectionnée. Avec Maj+clic, vous ajoutez d\'autres faces, segments ou courbes du même groupe et les copiez ensemble. Si vous pointez un segment d\'un arc ou d\'un cercle, il prend la courbe entière.' },
  { t: 'Où va la copie', d: 'Si rien n\'est ouvert, la copie est créée à la racine du modèle, hors du groupe d\'origine. Si un groupe est ouvert en édition et que vous choisissez la géométrie d\'un autre groupe, la copie entre dans le groupe ouvert ; si vous choisissez sa propre géométrie, elle monte d\'un niveau.' },
  { t: 'Surfaces organiques', d: 'Une surface courbe est faite de centaines de petites faces. En cliquant sur l\'une d\'elles, l\'outil l\'étend aux faces voisines jusqu\'à ce que le pli dépasse la « limite de lissage ». Dans les Préférences, un curseur avec aperçu en temps réel montre comment la sélection change.' },
  { t: 'Même position ou à côté', d: 'Par défaut, la copie se superpose exactement à l\'original. Si vous désactivez « Copier à la même position », elle apparaît à côté, décalée, pour que vous voyiez les deux. Le bouton « Appliquer » enregistre les réglages et confirme les éléments collectés, comme la touche Entrée. Matériaux, tags et interface existent en cinq langues.' },
  { t: 'Un exemple concret', d: 'Vous avez un bâtiment modélisé en plusieurs groupes et voulez dessiner une fenêtre sur la façade d\'un mur incliné. Vous activez robo Extract, survolez le mur, qui se colore, et cliquez : la copie de la face apparaît exactement sur le mur, avec la même inclinaison, hors du groupe. Vous pouvez dessiner dessus sans rien ouvrir. Un Ctrl+Z annule la copie.' }
];
I18N_PLUGINS.es.extract = I18N_PLUGINS.es.extract || {};
I18N_PLUGINS.es.extract.intro = [
  'robo Extract toma una cara o una arista del interior de un grupo o componente y te da una copia fuera, exactamente en la misma posición. No hace falta abrir el grupo ni copiar y pegar: basta pasar el ratón y hacer clic.',
  'Sirve siempre que quieras reutilizar una parte de un objeto ya modelado: el contorno de una pared para dibujar encima, el perfil de una pieza para construir otra, una superficie orgánica. La copia llega ya en el lugar correcto, incluso en planos inclinados.'
];
I18N_PLUGINS.es.extract.main = [
  { t: 'Funciona dentro de grupos cerrados', d: 'Resalta y copia caras y aristas incluso dentro de grupos y componentes anidados, sin abrirlos y sin seleccionar nada antes.' },
  { t: 'Misma posición e inclinación', d: 'La copia se superpone al original, aunque el objeto esté girado, escalado o reflejado. Si prefieres, puede aparecer al lado.' },
  { t: 'Superficies orgánicas', d: 'En una forma curva toma de golpe toda la zona lisa, con un límite ajustable mediante un control deslizante con vista previa.' },
  { t: 'Varios elementos a la vez', d: 'Con Mayús añades más caras o aristas y las copias todas en un único grupo nuevo. En un arco o círculo toma la curva entera.' }
];
I18N_PLUGINS.es.extract.how = [
  { t: 'El problema que resuelve', d: 'Cuando una cara o una arista está dentro de un grupo o componente, para usarla hay que abrir el grupo, copiar, salir y pegar, con el riesgo de moverla o de equivocarse de nivel. Si además el objeto estaba girado, escalado o reflejado, volver a ponerla en el punto exacto es un trabajo largo. robo Extract lo hace todo con un clic, sin abrir nada.' },
  { t: 'Paso 1 · Activa la herramienta', d: 'Pulsa el botón robo Extract (o la entrada de menú): la herramienta arranca y se abre la ventana de preferencias. No tienes que seleccionar nada antes ni entrar en los grupos: la herramienta llega sola a caras y aristas dentro de grupos y componentes cerrados, incluso anidados.' },
  { t: 'Paso 2 · Pasa el ratón y mira', d: 'Al mover el ratón sobre una cara o arista, esta se vuelve naranja y la barra de estado te dice dónde irá la copia. El plugin lee la posición de la instancia exacta bajo el cursor, así que traslaciones, giros, escalas y reflejos no desplazan el resultado.' },
  { t: 'Paso 3 · Haz clic para copiar', d: 'Con un clic la copia aparece en un grupo nuevo, ya seleccionada. Con Mayús+clic añades más caras, segmentos o curvas del mismo grupo y las copias todas juntas. Si apuntas a un segmento de un arco o círculo, toma la curva entera.' },
  { t: 'Dónde va la copia', d: 'Con nada abierto, la copia nace en la raíz del modelo, fuera del grupo de origen. Si tienes un grupo abierto para editar y eliges la geometría de otro grupo, la copia entra en el grupo abierto; si eliges su propia geometría, sube un nivel.' },
  { t: 'Superficies orgánicas', d: 'Una superficie curva está hecha de cientos de caras pequeñas. Al hacer clic en una, la herramienta la extiende a las caras vecinas hasta que el pliegue supera el «límite de suavidad». En Preferencias, un control deslizante con vista previa en tiempo real muestra cuánto cambia la selección.' },
  { t: 'Misma posición o al lado', d: 'Por defecto la copia se superpone exactamente al original. Si desactivas «Copiar en la misma posición», aparece en cambio al lado, desplazada, para que veas ambas. El botón «Aplicar» guarda los ajustes y confirma los elementos recogidos, como la tecla Intro. Materiales, etiquetas e interfaz están en cinco idiomas.' },
  { t: 'Un ejemplo concreto', d: 'Tienes un edificio modelado en muchos grupos y quieres dibujar una ventana en la fachada de una pared inclinada. Activas robo Extract, pasas el ratón sobre la pared, que se colorea, y haces clic: la copia de la cara aparece exactamente sobre la pared, con la misma inclinación, fuera del grupo. Ahora puedes dibujar encima sin abrir nada. Un Ctrl+Z deshace la copia.' }
];
I18N_PLUGINS.en.demolition = I18N_PLUGINS.en.demolition || {};
I18N_PLUGINS.en.demolition.intro = [
  'robo Demolition lightens objects with too many triangles, for example those imported from other programs or downloaded from the internet. It creates a simpler version that keeps the shape but weighs far less.',
  'It is useful when the model is slow, the file is huge or SketchUp struggles to move. You see the result as a preview on the model and decide how much to simplify with a slider, before applying.'
];
I18N_PLUGINS.en.demolition.main = [
  { t: 'Preview with an adjustment slider', d: 'The lightened version appears in blue over the object: move the slider to demolish more or less and see right away how the shape changes.' },
  { t: 'Two ways to simplify', d: 'One favors the quality of the shape, the other is very fast and very light. Choose according to the object.' },
  { t: 'Groups and components stay separate', d: 'Each object is lightened in place, without being merged with the others.' },
  { t: 'Materials and tags kept', d: 'Colors, textures and tags stay as before, and reversed faces on closed shapes are fixed.' },
  { t: 'All on your computer', d: 'The work happens locally, with no online services, and a single Ctrl+Z restores everything.' }
];
I18N_PLUGINS.en.demolition.how = [
  { t: 'The problem it solves', d: 'Every surface in SketchUp is made of faces, and a curved or scanned object can have hundreds of thousands. The model becomes slow, the view stutters, the file weighs tens of megabytes and rendering struggles. Many of those faces are invisible to the eye though: on an almost flat surface you need very few triangles to look the same. robo Demolition removes the useless ones and keeps those that matter.' },
  { t: 'Step 1 · Choose what to lighten', d: 'Select loose faces, groups or components, even many at once. The window immediately shows how many faces the selection contains. If it is huge, the plugin warns that the job may take time and asks whether you want to continue.' },
  { t: 'Step 2 · Move the slider and watch', d: 'With the "Demolition amount" slider you decide how much to remove: the higher it is, the lighter the model. Press Preview and a draft of the simplified object is drawn in blue over the original, with the "faces before → after" numbers and the percentage reduction below. Move the slider and review the result until the shape satisfies you: nothing in the model changes until you confirm.' },
  { t: 'Step 3 · Apply, or keep the original', d: 'With "Apply" the result enters the model in a single operation: one Ctrl+Z restores everything. By default the original stays and the demolished copy is created beside it, in the same position; if you turn off "Keep the original object", the original is replaced. After the preview, if you change the model, the plugin asks you to redo it, so it never applies an outdated result.' },
  { t: 'Two reduction methods', d: 'Quadric removes first the triangles that change the shape least, and is the one to choose when quality matters. Voxel divides space into a grid of cells and merges everything in the same cell: it is very fast and gives very light but coarser results. In both cases the slider means the same thing: how much is removed.' },
  { t: 'Three engines, your choice', d: 'The "Fast" engine is recommended: it installs in a few seconds (about 35 MB). "High precision" uses Open3D (about 300 MB), is a bit slower but on average a bit more accurate. "Native" is included in the plugin and needs no installation: it is very fast, a bit less refined with very aggressive reductions. If Python or the engine is missing, an assistant installs it for you, step by step, only on your computer.' },
  { t: 'Objects, materials and edges', d: 'Each group and component inside the selection is reduced in place: it remains a separate object, with its own name and position, and is not merged with the others. Components used several times are reduced only once. Materials (front and back) and tags remain. You can protect open edges so surfaces don\'t shrink; fix reversed faces on closed shapes; and soften the edges between nearly flat faces for a smooth look. The result is made of triangles and texture positions are not kept.' },
  { t: 'All local, without blocking you', d: 'The calculation runs on your computer: nothing is sent over the internet. It happens in the background, so SketchUp stays usable; you see the elapsed time and can press Cancel at any moment.' },
  { t: 'A concrete example', d: 'You downloaded an armchair from the internet: it has 480,000 faces and the model crawls. You select it, press Preview and bring the slider to 90%: the numbers show 480,000 → 48,000 faces, and the blue draft still looks like the same armchair. Push to 97% and edges start to show on the armrests: go back to 93% and confirm. You apply: the light copy takes the place of the original (or sits beside it, if you kept it) with its fabrics and materials, and the model is fluid again. If you don\'t like it, one Ctrl+Z and you are back at the start.' }
];
I18N_PLUGINS.de.demolition = I18N_PLUGINS.de.demolition || {};
I18N_PLUGINS.de.demolition.intro = [
  'robo Demolition erleichtert Objekte mit zu vielen Dreiecken, zum Beispiel solche, die aus anderen Programmen importiert oder aus dem Internet geladen wurden. Es erstellt eine einfachere Version, die die Form behält, aber deutlich weniger wiegt.',
  'Es ist nützlich, wenn das Modell langsam ist, die Datei riesig ist oder SketchUp ins Stocken gerät. Sie sehen das Ergebnis als Vorschau auf dem Modell und entscheiden mit einem Regler, wie stark vereinfacht wird, bevor Sie anwenden.'
];
I18N_PLUGINS.de.demolition.main = [
  { t: 'Vorschau mit Regler', d: 'Die erleichterte Version erscheint blau über dem Objekt: Bewegen Sie den Regler, um mehr oder weniger zu reduzieren, und sehen Sie sofort, wie sich die Form ändert.' },
  { t: 'Zwei Arten der Vereinfachung', d: 'Die eine bevorzugt die Qualität der Form, die andere ist sehr schnell und sehr leicht. Wählen Sie je nach Objekt.' },
  { t: 'Gruppen und Komponenten bleiben getrennt', d: 'Jedes Objekt wird an Ort und Stelle erleichtert, ohne mit den anderen verschmolzen zu werden.' },
  { t: 'Materialien und Tags bleiben erhalten', d: 'Farben, Texturen und Tags bleiben wie zuvor, und verdrehte Flächen auf geschlossenen Formen werden korrigiert.' },
  { t: 'Alles auf Ihrem Computer', d: 'Die Arbeit erfolgt lokal, ohne Online-Dienste, und ein einziges Strg+Z stellt alles wieder her.' }
];
I18N_PLUGINS.de.demolition.how = [
  { t: 'Das Problem, das es löst', d: 'Jede Oberfläche in SketchUp besteht aus Flächen, und ein gekrümmtes oder gescanntes Objekt kann Hunderttausende haben. Das Modell wird langsam, die Ansicht ruckelt, die Datei wiegt Dutzende Megabyte und das Rendern tut sich schwer. Viele dieser Flächen sind für das Auge unsichtbar: Auf einer fast ebenen Oberfläche genügen sehr wenige Dreiecke für dasselbe Aussehen. robo Demolition entfernt die überflüssigen und behält die wichtigen.' },
  { t: 'Schritt 1 · Wählen, was erleichtert wird', d: 'Wählen Sie lose Flächen, Gruppen oder Komponenten aus, auch viele gleichzeitig. Das Fenster zeigt sofort, wie viele Flächen die Auswahl enthält. Ist sie riesig, warnt das Plugin, dass die Arbeit dauern kann, und fragt, ob Sie fortfahren möchten.' },
  { t: 'Schritt 2 · Regler bewegen und hinsehen', d: 'Mit dem Regler „Reduzierungsmenge“ legen Sie fest, wie viel entfernt wird: Je höher, desto leichter das Modell. Klicken Sie auf Vorschau, und ein Entwurf des vereinfachten Objekts wird blau über das Original gezeichnet, darunter die Zahlen „Flächen vorher → nachher“ und der prozentuale Rückgang. Bewegen Sie den Regler und prüfen Sie das Ergebnis, bis die Form passt: Im Modell ändert sich nichts, bis Sie bestätigen.' },
  { t: 'Schritt 3 · Anwenden oder Original behalten', d: 'Mit „Anwenden“ gelangt das Ergebnis in einem einzigen Vorgang ins Modell: Ein Strg+Z stellt alles wieder her. Standardmäßig bleibt das Original, und daneben entsteht an derselben Position die reduzierte Kopie; schalten Sie „Originalobjekt behalten“ aus, wird das Original ersetzt. Ändern Sie nach der Vorschau das Modell, bittet das Plugin Sie, sie zu wiederholen, damit kein veraltetes Ergebnis angewendet wird.' },
  { t: 'Zwei Reduzierungsmethoden', d: 'Quadric entfernt zuerst die Dreiecke, die die Form am wenigsten verändern, und ist die Wahl, wenn Qualität zählt. Voxel teilt den Raum in ein Raster aus Zellen und fasst alles in derselben Zelle zusammen: Es ist sehr schnell und liefert sehr leichte, aber gröbere Ergebnisse. In beiden Fällen bedeutet der Regler dasselbe: wie viel entfernt wird.' },
  { t: 'Drei Engines zur Wahl', d: 'Die Engine „Schnell“ wird empfohlen: Sie ist in wenigen Sekunden installiert (etwa 35 MB). „Hohe Präzision“ nutzt Open3D (etwa 300 MB), ist etwas langsamer, aber im Schnitt etwas genauer. „Nativ“ ist im Plugin enthalten und braucht keine Installation: Sie ist sehr schnell, bei sehr starken Reduzierungen etwas weniger fein. Fehlt Python oder die Engine, installiert ein Assistent sie Schritt für Schritt für Sie, nur auf Ihrem Computer.' },
  { t: 'Objekte, Materialien und Kanten', d: 'Jede Gruppe und Komponente in der Auswahl wird an Ort und Stelle reduziert: Sie bleibt ein eigenes Objekt mit eigenem Namen und eigener Position und wird nicht mit den anderen verschmolzen. Mehrfach verwendete Komponenten werden nur einmal reduziert. Materialien (Vorder- und Rückseite) und Tags bleiben erhalten. Sie können offene Kanten schützen, damit Flächen nicht schrumpfen, verdrehte Flächen auf geschlossenen Formen korrigieren und die Kanten zwischen fast ebenen Flächen weichzeichnen. Das Ergebnis besteht aus Dreiecken; die Texturpositionen bleiben nicht erhalten.' },
  { t: 'Alles lokal, ohne Sie zu blockieren', d: 'Die Berechnung läuft auf Ihrem Computer: Es wird nichts über das Internet gesendet. Sie erfolgt im Hintergrund, sodass SketchUp nutzbar bleibt; Sie sehen die verstrichene Zeit und können jederzeit Abbrechen drücken.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie haben einen Sessel aus dem Internet geladen: Er hat 480.000 Flächen, und das Modell schleppt sich. Sie wählen ihn aus, klicken auf Vorschau und stellen den Regler auf 90 %: Die Zahlen zeigen 480.000 → 48.000 Flächen, und der blaue Entwurf sieht noch wie derselbe Sessel aus. Bei 97 % werden an den Armlehnen Kanten sichtbar: Gehen Sie auf 93 % zurück und bestätigen Sie. Sie wenden an: Die leichte Kopie ersetzt das Original (oder steht daneben, falls Sie es behalten haben) mit Stoffen und Materialien, und das Modell läuft wieder flüssig. Gefällt es Ihnen nicht, ein Strg+Z, und Sie sind wieder am Anfang.' }
];
I18N_PLUGINS.fr.demolition = I18N_PLUGINS.fr.demolition || {};
I18N_PLUGINS.fr.demolition.intro = [
  'robo Demolition allège les objets qui ont trop de triangles, par exemple ceux importés d\'autres logiciels ou téléchargés sur internet. Il crée une version plus simple qui garde la forme mais pèse beaucoup moins.',
  'Il sert quand le modèle est lent, que le fichier est énorme ou que SketchUp peine à bouger. Vous voyez le résultat en aperçu sur le modèle et décidez avec un curseur de combien simplifier, avant d\'appliquer.'
];
I18N_PLUGINS.fr.demolition.main = [
  { t: 'Aperçu avec curseur de réglage', d: 'La version allégée apparaît en bleu sur l\'objet : déplacez le curseur pour réduire plus ou moins et voyez tout de suite comment la forme change.' },
  { t: 'Deux façons de simplifier', d: 'L\'une privilégie la qualité de la forme, l\'autre est très rapide et très légère. Choisissez selon l\'objet.' },
  { t: 'Groupes et composants restent séparés', d: 'Chaque objet est allégé sur place, sans être fusionné avec les autres.' },
  { t: 'Matériaux et tags conservés', d: 'Couleurs, textures et tags restent comme avant, et les faces inversées sur les formes fermées sont corrigées.' },
  { t: 'Tout sur votre ordinateur', d: 'Le travail se fait en local, sans service en ligne, et un seul Ctrl+Z rétablit tout.' }
];
I18N_PLUGINS.fr.demolition.how = [
  { t: 'Le problème qu\'il résout', d: 'Chaque surface dans SketchUp est faite de faces, et un objet courbe ou scanné peut en avoir des centaines de milliers. Le modèle devient lent, la vue saccade, le fichier pèse des dizaines de mégaoctets et le rendu peine. Beaucoup de ces faces sont pourtant invisibles à l\'œil : sur une surface presque plane, très peu de triangles suffisent pour le même aspect. robo Demolition supprime les inutiles et garde ceux qui comptent.' },
  { t: 'Étape 1 · Choisissez quoi alléger', d: 'Sélectionnez des faces isolées, des groupes ou des composants, même nombreux. La fenêtre indique tout de suite combien de faces contient la sélection. Si elle est énorme, le plugin prévient que le travail peut prendre du temps et demande si vous voulez continuer.' },
  { t: 'Étape 2 · Déplacez le curseur et regardez', d: 'Avec le curseur « Quantité de démolition », vous décidez de combien retirer : plus il est haut, plus le modèle est léger. Appuyez sur Aperçu et un brouillon de l\'objet simplifié est dessiné en bleu sur l\'original, avec dessous les chiffres « faces avant → après » et le pourcentage de réduction. Déplacez le curseur et revoyez le résultat jusqu\'à ce que la forme vous convienne : rien ne change dans le modèle tant que vous ne confirmez pas.' },
  { t: 'Étape 3 · Appliquez, ou gardez l\'original', d: 'Avec « Appliquer », le résultat entre dans le modèle en une seule opération : un seul Ctrl+Z rétablit tout. Par défaut l\'original reste et la copie réduite est créée à côté, à la même position ; si vous désactivez « Conserver l\'objet d\'origine », l\'original est remplacé. Après l\'aperçu, si vous modifiez le modèle, le plugin vous demande de le refaire, pour ne jamais appliquer un résultat périmé.' },
  { t: 'Deux méthodes de réduction', d: 'Quadric supprime d\'abord les triangles qui changent le moins la forme, et c\'est le choix quand la qualité compte. Voxel divise l\'espace en une grille de cellules et fusionne tout ce qui est dans la même cellule : il est très rapide et donne des résultats très légers mais plus grossiers. Dans les deux cas, le curseur signifie la même chose : combien on retire.' },
  { t: 'Trois moteurs au choix', d: 'Le moteur « Rapide » est recommandé : il s\'installe en quelques secondes (environ 35 Mo). « Haute précision » utilise Open3D (environ 300 Mo), est un peu plus lent mais en moyenne un peu plus précis. « Natif » est inclus dans le plugin et ne demande aucune installation : il est très rapide, un peu moins raffiné pour des réductions très poussées. Si Python ou le moteur manque, un assistant l\'installe pour vous, pas à pas, uniquement sur votre ordinateur.' },
  { t: 'Objets, matériaux et bords', d: 'Chaque groupe et composant de la sélection est réduit sur place : il reste un objet séparé, avec son nom et sa position, et n\'est pas fusionné avec les autres. Les composants utilisés plusieurs fois ne sont réduits qu\'une fois. Matériaux (recto et verso) et tags restent. Vous pouvez protéger les bords ouverts pour que les surfaces ne rétrécissent pas, corriger les faces inversées sur les formes fermées et adoucir les arêtes entre faces presque planes pour un aspect lisse. Le résultat est fait de triangles et la position des textures n\'est pas conservée.' },
  { t: 'Tout en local, sans vous bloquer', d: 'Le calcul tourne sur votre ordinateur : rien n\'est envoyé sur internet. Il se fait en arrière-plan, SketchUp reste donc utilisable ; vous voyez le temps écoulé et pouvez appuyer sur Annuler à tout moment.' },
  { t: 'Un exemple concret', d: 'Vous avez téléchargé un fauteuil sur internet : il a 480 000 faces et le modèle rame. Vous le sélectionnez, appuyez sur Aperçu et amenez le curseur à 90 % : les chiffres indiquent 480 000 → 48 000 faces, et le brouillon bleu ressemble toujours au même fauteuil. À 97 %, des arêtes apparaissent sur les accoudoirs : revenez à 93 % et confirmez. Vous appliquez : la copie légère prend la place de l\'original (ou se met à côté, si vous l\'avez conservé) avec ses tissus et matériaux, et le modèle redevient fluide. Si le résultat ne vous plaît pas, un Ctrl+Z et vous revenez au départ.' }
];
I18N_PLUGINS.es.demolition = I18N_PLUGINS.es.demolition || {};
I18N_PLUGINS.es.demolition.intro = [
  'robo Demolition aligera los objetos con demasiados triángulos, por ejemplo los importados de otros programas o descargados de internet. Crea una versión más simple que conserva la forma pero pesa mucho menos.',
  'Sirve cuando el modelo va lento, el archivo es enorme o SketchUp se atasca. Ves el resultado como vista previa sobre el modelo y decides con un control deslizante cuánto simplificar, antes de aplicar.'
];
I18N_PLUGINS.es.demolition.main = [
  { t: 'Vista previa con control deslizante', d: 'La versión aligerada aparece en azul sobre el objeto: mueve el control para reducir más o menos y ve enseguida cómo cambia la forma.' },
  { t: 'Dos modos de simplificar', d: 'Uno favorece la calidad de la forma, el otro es muy rápido y muy ligero. Elige según el objeto.' },
  { t: 'Grupos y componentes siguen separados', d: 'Cada objeto se aligera en su sitio, sin fusionarse con los demás.' },
  { t: 'Materiales y etiquetas conservados', d: 'Colores, texturas y etiquetas quedan como antes, y las caras invertidas en formas cerradas se corrigen.' },
  { t: 'Todo en tu ordenador', d: 'El trabajo se hace en local, sin servicios en línea, y un solo Ctrl+Z lo restablece todo.' }
];
I18N_PLUGINS.es.demolition.how = [
  { t: 'El problema que resuelve', d: 'Cada superficie en SketchUp está hecha de caras, y un objeto curvo o escaneado puede tener cientos de miles. El modelo se vuelve lento, la vista va a tirones, el archivo pesa decenas de megabytes y el render sufre. Muchas de esas caras son invisibles a simple vista: en una superficie casi plana bastan muy pocos triángulos para el mismo aspecto. robo Demolition elimina los inútiles y conserva los que cuentan.' },
  { t: 'Paso 1 · Elige qué aligerar', d: 'Selecciona caras sueltas, grupos o componentes, incluso muchos a la vez. La ventana muestra enseguida cuántas caras contiene la selección. Si es enorme, el plugin avisa de que el trabajo puede tardar y pregunta si quieres continuar.' },
  { t: 'Paso 2 · Mueve el control y mira', d: 'Con el control «Cantidad de demolición» decides cuánto quitar: cuanto más alto, más ligero el modelo. Pulsa Vista previa y un borrador del objeto simplificado se dibuja en azul sobre el original, con debajo los números «caras antes → después» y el porcentaje de reducción. Mueve el control y revisa el resultado hasta que la forma te convenza: nada cambia en el modelo hasta que confirmes.' },
  { t: 'Paso 3 · Aplica, o conserva el original', d: 'Con «Aplicar» el resultado entra en el modelo en una sola operación: un Ctrl+Z lo restablece todo. Por defecto el original se queda y al lado, en la misma posición, nace la copia reducida; si desactivas «Conservar el objeto original», el original se sustituye. Tras la vista previa, si modificas el modelo, el plugin te pide rehacerla, para no aplicar un resultado obsoleto.' },
  { t: 'Dos métodos de reducción', d: 'Quadric elimina primero los triángulos que menos cambian la forma, y es la elección cuando importa la calidad. Voxel divide el espacio en una cuadrícula de celdas y fusiona todo lo que está en la misma celda: es muy rápido y da resultados muy ligeros pero más toscos. En ambos casos el control significa lo mismo: cuánto se quita.' },
  { t: 'Tres motores, a tu elección', d: 'El motor «Rápido» es el recomendado: se instala en pocos segundos (unos 35 MB). «Alta precisión» usa Open3D (unos 300 MB), es algo más lento pero de media algo más preciso. «Nativo» viene incluido en el plugin y no necesita instalación: es muy rápido, algo menos refinado con reducciones muy fuertes. Si faltan Python o el motor, un asistente los instala por ti, paso a paso, solo en tu ordenador.' },
  { t: 'Objetos, materiales y bordes', d: 'Cada grupo y componente dentro de la selección se reduce en su sitio: sigue siendo un objeto separado, con su nombre y su posición, y no se fusiona con los demás. Los componentes usados varias veces se reducen una sola vez. Materiales (anverso y reverso) y etiquetas se conservan. Puedes proteger los bordes abiertos para que las superficies no se encojan, corregir las caras invertidas en formas cerradas y suavizar las aristas entre caras casi planas para un aspecto liso. El resultado está hecho de triángulos y la posición de las texturas no se conserva.' },
  { t: 'Todo en local, sin bloquearte', d: 'El cálculo corre en tu ordenador: no se envía nada por internet. Se hace en segundo plano, así que SketchUp sigue siendo utilizable; ves el tiempo transcurrido y puedes pulsar Cancelar en cualquier momento.' },
  { t: 'Un ejemplo concreto', d: 'Has descargado un sillón de internet: tiene 480.000 caras y el modelo se arrastra. Lo seleccionas, pulsas Vista previa y llevas el control al 90 %: los números muestran 480.000 → 48.000 caras, y el borrador azul sigue pareciendo el mismo sillón. Al 97 % empiezan a verse aristas en los reposabrazos: vuelves al 93 % y confirmas. Aplicas: la copia ligera ocupa el lugar del original (o se queda al lado, si lo conservaste) con sus telas y materiales, y el modelo vuelve a ir fluido. Si no te gusta, un Ctrl+Z y estás de nuevo al principio.' }
];
I18N_PLUGINS.en.export_object = I18N_PLUGINS.en.export_object || {};
I18N_PLUGINS.en.export_object.intro = [
  'robo Export object saves only the part of the model you select into a new .skp file, separate from your project. You no longer have to copy, open an empty file and paste.',
  'It is useful for sharing a single piece of furniture, a fixture or a detail with a colleague or client, for building your own library of components, or for delivering a file that opens even with an older version of SketchUp.'
];
I18N_PLUGINS.en.export_object.main = [
  { t: 'Exports the selection', d: 'You select one or more objects, press the button and the file is created with everything needed, materials and components included.' },
  { t: 'Name already filled in', d: 'The file name is that of the group or component. You can change it in the window.' },
  { t: 'SketchUp version of your choice', d: 'You save for the current version or an earlier one, useful when the recipient has an older program.' },
  { t: 'Your model is not touched', d: 'The open file stays as it is: it is not modified, closed or saved.' },
  { t: 'Same position', d: 'Objects keep the coordinates they had, so you can re-import them with no shifts.' }
];
I18N_PLUGINS.en.export_object.how = [
  { t: 'The problem it solves', d: 'To save only one part of the model, you usually have to copy it, open a new file, paste it in place and save; or save "as" and delete the rest, risking damage to the original file. robo Export object does it all with one command: select, choose name and version, export.' },
  { t: 'Step 1 · Select the objects', d: 'Select one or more groups or components in the model. Press the robo Export object button: a window opens with the file name already filled in. If you selected a single group or component, the name is its own (or that of its definition); with several objects it suggests name_selection.' },
  { t: 'Step 2 · Choose name, folder and version', d: 'You can change the name, choose the folder and the SketchUp version to save for: the current one or 2021 and earlier (available from SketchUp 2022). Characters that are invalid for Windows in the name are replaced automatically. If the file already exists, you are asked whether to overwrite it.' },
  { t: 'Step 3 · Export', d: 'Press Export and the .skp file is created. Your model is not closed, reopened or modified: the selection is wrapped for an instant in a temporary group, saved to disk and the operation is undone right after.' },
  { t: 'Position and content', d: 'Objects in the new file stay at the same coordinates they had in the model, so you can re-import or align them with no shifts. Along with the objects, the components and materials they use are saved, without dragging along the rest of the model: you get a clean file.' },
  { t: 'Beware of older versions', d: 'Saving for an older version, you may lose what that version doesn\'t know, such as styles or recent features. Also, your SketchUp may not accept very old versions.' },
  { t: 'Window, guide and languages', d: 'The window follows the Robo style, adapts its height to the content and remembers the folder and version you chose. The Help button and the globe at the top right open the guide and change the language: Italian, English, German, French or Spanish.' },
  { t: 'A concrete example', d: 'You have a furniture project with a full kitchen and want to send the client only the bar unit. You select it, press robo Export object: the suggested name is "Bar_unit". You choose the folder and version 2021, because the client has an older program, and press Export. In a few seconds you have a light file with only that unit, at its coordinates, while your project remained untouched.' }
];
I18N_PLUGINS.de.export_object = I18N_PLUGINS.de.export_object || {};
I18N_PLUGINS.de.export_object.intro = [
  'robo Export object speichert nur den ausgewählten Teil des Modells in einer neuen .skp-Datei, getrennt von Ihrem Projekt. Sie müssen nicht mehr kopieren, eine leere Datei öffnen und einfügen.',
  'Es ist nützlich, um ein einzelnes Möbelstück, eine Einrichtung oder ein Detail mit einem Kollegen oder Kunden zu teilen, eine eigene Bibliothek von Komponenten aufzubauen oder eine Datei zu liefern, die sich auch mit einer älteren SketchUp-Version öffnen lässt.'
];
I18N_PLUGINS.de.export_object.main = [
  { t: 'Exportiert die Auswahl', d: 'Sie wählen ein oder mehrere Objekte, drücken die Schaltfläche, und die Datei wird mit allem Nötigen erstellt, Materialien und Komponenten inklusive.' },
  { t: 'Name bereits ausgefüllt', d: 'Der Dateiname ist der der Gruppe oder Komponente. Sie können ihn im Fenster ändern.' },
  { t: 'SketchUp-Version nach Wahl', d: 'Sie speichern für die aktuelle oder eine frühere Version, nützlich, wenn der Empfänger ein älteres Programm hat.' },
  { t: 'Ihr Modell bleibt unberührt', d: 'Die geöffnete Datei bleibt, wie sie ist: Sie wird weder geändert noch geschlossen oder gespeichert.' },
  { t: 'Gleiche Position', d: 'Die Objekte behalten ihre Koordinaten, sodass Sie sie ohne Verschiebung wieder importieren können.' }
];
I18N_PLUGINS.de.export_object.how = [
  { t: 'Das Problem, das es löst', d: 'Um nur einen Teil des Modells zu speichern, müssen Sie ihn meist kopieren, eine neue Datei öffnen, ihn an Ort und Stelle einfügen und speichern; oder „Speichern unter“ und den Rest löschen, mit dem Risiko, die Originaldatei zu beschädigen. robo Export object erledigt alles mit einem Befehl: auswählen, Name und Version wählen, exportieren.' },
  { t: 'Schritt 1 · Objekte auswählen', d: 'Wählen Sie im Modell eine oder mehrere Gruppen oder Komponenten aus. Drücken Sie die Schaltfläche robo Export object: Ein Fenster öffnet sich mit bereits ausgefülltem Dateinamen. Haben Sie eine einzelne Gruppe oder Komponente gewählt, ist der Name deren eigener (oder der ihrer Definition); bei mehreren Objekten schlägt es Name_Auswahl vor.' },
  { t: 'Schritt 2 · Name, Ordner und Version wählen', d: 'Sie können den Namen ändern, den Ordner und die SketchUp-Version zum Speichern wählen: die aktuelle oder 2021 und früher (ab SketchUp 2022 verfügbar). Für Windows ungültige Zeichen im Namen werden automatisch ersetzt. Existiert die Datei bereits, werden Sie gefragt, ob sie überschrieben werden soll.' },
  { t: 'Schritt 3 · Exportieren', d: 'Klicken Sie auf Exportieren, und die .skp-Datei wird erstellt. Ihr Modell wird nicht geschlossen, neu geöffnet oder verändert: Die Auswahl wird kurz in eine temporäre Gruppe gepackt, auf die Festplatte gespeichert, und der Vorgang wird sofort danach rückgängig gemacht.' },
  { t: 'Position und Inhalt', d: 'Die Objekte in der neuen Datei behalten dieselben Koordinaten wie im Modell, sodass Sie sie ohne Verschiebung neu importieren oder ausrichten können. Zusammen mit den Objekten werden die verwendeten Komponenten und Materialien gespeichert, ohne den Rest des Modells mitzuschleppen: Sie erhalten eine saubere Datei.' },
  { t: 'Vorsicht bei älteren Versionen', d: 'Beim Speichern für eine ältere Version kann verloren gehen, was diese Version nicht kennt, etwa Stile oder neuere Funktionen. Außerdem akzeptiert Ihr SketchUp sehr alte Versionen möglicherweise nicht.' },
  { t: 'Fenster, Anleitung und Sprachen', d: 'Das Fenster folgt dem Robo-Stil, passt seine Höhe dem Inhalt an und merkt sich Ordner und Version. Die Schaltfläche Help und der Globus oben rechts öffnen die Anleitung und wechseln die Sprache: Italienisch, Englisch, Deutsch, Französisch oder Spanisch.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie haben ein Einrichtungsprojekt mit einer kompletten Küche und möchten dem Kunden nur den Barschrank schicken. Sie wählen ihn aus und drücken robo Export object: Der vorgeschlagene Name ist „Barschrank“. Sie wählen Ordner und Version 2021, weil der Kunde ein älteres Programm hat, und klicken auf Exportieren. In wenigen Sekunden haben Sie eine leichte Datei mit nur diesem Möbel, an seinen Koordinaten, während Ihr Projekt unberührt blieb.' }
];
I18N_PLUGINS.fr.export_object = I18N_PLUGINS.fr.export_object || {};
I18N_PLUGINS.fr.export_object.intro = [
  'robo Export object enregistre uniquement la partie du modèle que vous sélectionnez dans un nouveau fichier .skp, séparé de votre projet. Fini le copier, ouvrir un fichier vide et coller.',
  'Il sert à partager un seul meuble, un équipement ou un détail avec un collègue ou un client, à construire votre propre bibliothèque de composants, ou à livrer un fichier qui s\'ouvre même avec une version plus ancienne de SketchUp.'
];
I18N_PLUGINS.fr.export_object.main = [
  { t: 'Exporte la sélection', d: 'Vous sélectionnez un ou plusieurs objets, appuyez sur le bouton et le fichier est créé avec tout le nécessaire, matériaux et composants compris.' },
  { t: 'Nom déjà rempli', d: 'Le nom du fichier est celui du groupe ou du composant. Vous pouvez le modifier dans la fenêtre.' },
  { t: 'Version de SketchUp au choix', d: 'Vous enregistrez pour la version actuelle ou une précédente, utile quand le destinataire a un logiciel plus ancien.' },
  { t: 'Votre modèle n\'est pas touché', d: 'Le fichier ouvert reste tel quel : il n\'est ni modifié, ni fermé, ni enregistré.' },
  { t: 'Même position', d: 'Les objets gardent leurs coordonnées, vous pouvez donc les réimporter sans décalage.' }
];
I18N_PLUGINS.fr.export_object.how = [
  { t: 'Le problème qu\'il résout', d: 'Pour enregistrer une seule partie du modèle, il faut en général la copier, ouvrir un nouveau fichier, la coller sur place et enregistrer ; ou « Enregistrer sous » puis supprimer le reste, au risque d\'abîmer le fichier d\'origine. robo Export object fait tout en une commande : sélectionnez, choisissez nom et version, exportez.' },
  { t: 'Étape 1 · Sélectionnez les objets', d: 'Sélectionnez dans le modèle un ou plusieurs groupes ou composants. Appuyez sur le bouton robo Export object : une fenêtre s\'ouvre avec le nom du fichier déjà rempli. Si vous avez sélectionné un seul groupe ou composant, le nom est le sien (ou celui de sa définition) ; avec plusieurs objets, il propose nom_sélection.' },
  { t: 'Étape 2 · Choisissez nom, dossier et version', d: 'Vous pouvez changer le nom, choisir le dossier et la version de SketchUp pour laquelle enregistrer : l\'actuelle ou 2021 et antérieures (disponible à partir de SketchUp 2022). Les caractères invalides sous Windows dans le nom sont remplacés automatiquement. Si le fichier existe déjà, on vous demande si vous voulez l\'écraser.' },
  { t: 'Étape 3 · Exportez', d: 'Appuyez sur Exporter et le fichier .skp est créé. Votre modèle n\'est ni fermé, ni rouvert, ni modifié : la sélection est enveloppée un instant dans un groupe temporaire, enregistrée sur disque et l\'opération est annulée juste après.' },
  { t: 'Position et contenu', d: 'Les objets du nouveau fichier gardent les mêmes coordonnées que dans le modèle, vous pouvez donc les réimporter ou les aligner sans décalage. Avec les objets sont enregistrés les composants et matériaux qu\'ils utilisent, sans traîner le reste du modèle : vous obtenez un fichier propre.' },
  { t: 'Attention aux versions plus anciennes', d: 'En enregistrant pour une version plus ancienne, vous pouvez perdre ce que cette version ne connaît pas, comme des styles ou des fonctions récentes. De plus, votre SketchUp peut ne pas accepter les versions très anciennes.' },
  { t: 'Fenêtre, guide et langues', d: 'La fenêtre suit le style Robo, adapte sa hauteur au contenu et se souvient du dossier et de la version choisis. Le bouton Help et le globe en haut à droite ouvrent le guide et changent la langue : italien, anglais, allemand, français ou espagnol.' },
  { t: 'Un exemple concret', d: 'Vous avez un projet d\'aménagement avec une cuisine complète et voulez envoyer au client seulement le meuble bar. Vous le sélectionnez, appuyez sur robo Export object : le nom proposé est « Meuble_bar ». Vous choisissez le dossier et la version 2021, parce que le client a un logiciel plus ancien, et appuyez sur Exporter. En quelques secondes, vous avez un fichier léger avec seulement ce meuble, à ses coordonnées, tandis que votre projet est resté intact.' }
];
I18N_PLUGINS.es.export_object = I18N_PLUGINS.es.export_object || {};
I18N_PLUGINS.es.export_object.intro = [
  'robo Export object guarda solo la parte del modelo que seleccionas en un archivo .skp nuevo, separado de tu proyecto. Ya no tienes que copiar, abrir un archivo vacío y pegar.',
  'Sirve para compartir un solo mueble, un accesorio o un detalle con un colega o cliente, para crear tu propia biblioteca de componentes, o para entregar un archivo que se abra incluso con una versión más antigua de SketchUp.'
];
I18N_PLUGINS.es.export_object.main = [
  { t: 'Exporta la selección', d: 'Seleccionas uno o más objetos, pulsas el botón y el archivo se crea con todo lo necesario, materiales y componentes incluidos.' },
  { t: 'Nombre ya rellenado', d: 'El nombre del archivo es el del grupo o componente. Puedes cambiarlo en la ventana.' },
  { t: 'Versión de SketchUp a elegir', d: 'Guardas para la versión actual o una anterior, útil cuando el destinatario tiene un programa más antiguo.' },
  { t: 'Tu modelo no se toca', d: 'El archivo abierto se queda como está: no se modifica, cierra ni guarda.' },
  { t: 'Misma posición', d: 'Los objetos mantienen las coordenadas que tenían, así puedes reimportarlos sin desplazamientos.' }
];
I18N_PLUGINS.es.export_object.how = [
  { t: 'El problema que resuelve', d: 'Para guardar solo una parte del modelo, normalmente tienes que copiarla, abrir un archivo nuevo, pegarla en su sitio y guardar; o «Guardar como» y borrar el resto, con el riesgo de estropear el archivo original. robo Export object lo hace todo con un comando: seleccionas, eliges nombre y versión, exportas.' },
  { t: 'Paso 1 · Selecciona los objetos', d: 'Selecciona en el modelo uno o más grupos o componentes. Pulsa el botón robo Export object: se abre una ventana con el nombre del archivo ya rellenado. Si has seleccionado un solo grupo o componente, el nombre es el suyo (o el de su definición); con varios objetos propone nombre_selección.' },
  { t: 'Paso 2 · Elige nombre, carpeta y versión', d: 'Puedes cambiar el nombre, elegir la carpeta y la versión de SketchUp para la que guardar: la actual o 2021 y anteriores (disponible desde SketchUp 2022). Los caracteres no válidos en Windows en el nombre se sustituyen solos. Si el archivo ya existe, se te pregunta si quieres sobrescribirlo.' },
  { t: 'Paso 3 · Exporta', d: 'Pulsa Exportar y se crea el archivo .skp. Tu modelo no se cierra, reabre ni modifica: la selección se envuelve un instante en un grupo temporal, se guarda en disco y la operación se deshace justo después.' },
  { t: 'Posición y contenido', d: 'Los objetos del nuevo archivo conservan las mismas coordenadas que tenían en el modelo, así puedes reimportarlos o alinearlos sin desplazamientos. Junto con los objetos se guardan los componentes y materiales que usan, sin arrastrar el resto del modelo: obtienes un archivo limpio.' },
  { t: 'Cuidado con las versiones antiguas', d: 'Al guardar para una versión más antigua puedes perder lo que esa versión no conoce, como estilos o funciones recientes. Además, tu SketchUp puede no aceptar versiones muy antiguas.' },
  { t: 'Ventana, guía e idiomas', d: 'La ventana sigue el estilo Robo, adapta su altura al contenido y recuerda la carpeta y la versión elegidas. El botón Help y el globo arriba a la derecha abren la guía y cambian el idioma: italiano, inglés, alemán, francés o español.' },
  { t: 'Un ejemplo concreto', d: 'Tienes un proyecto de interiorismo con una cocina completa y quieres enviar al cliente solo el mueble bar. Lo seleccionas, pulsas robo Export object: el nombre propuesto es «Mueble_bar». Eliges la carpeta y la versión 2021, porque el cliente tiene un programa más antiguo, y pulsas Exportar. En pocos segundos tienes un archivo ligero con solo ese mueble, en sus coordenadas, mientras tu proyecto ha quedado intacto.' }
];
I18N_PLUGINS.en.fillet = I18N_PLUGINS.en.fillet || {};
I18N_PLUGINS.en.fillet.intro = [
  'robo Fillet rounds the corner formed by two lines: it turns it into a soft curve, called a fillet, or into a chamfer. You click the two lines, type the radius and the corner is fixed.',
  'It is useful when drawing profiles, plans, furniture, sheet metal and any shape with edges to soften. Unlike other methods it works on any plane, even a sloped one, and even when the two lines don\'t actually touch.'
];
I18N_PLUGINS.en.fillet.main = [
  { t: 'Two clicks and a radius', d: 'You click the first line, then the second, type the radius in the model\'s units and confirm.' },
  { t: 'Live preview', d: 'As you change the radius you immediately see the resulting curve. The maximum possible radius is calculated for you, so you never get impossible fillets.' },
  { t: 'Fillet or chamfer', d: 'With a single segment you get a sharp chamfer, with more segments an increasingly smooth arc.' },
  { t: 'On any plane', d: 'It also works on sloped planes and in space, not just the horizontal plane.' },
  { t: 'Ready for the next fillet', d: 'After applying, the tool stays active and remembers radius and segments, so you can round corners one after another.' }
];
I18N_PLUGINS.en.fillet.how = [
  { t: 'The problem it solves', d: 'Rounding the corner between two edges in SketchUp means building the arc by hand, finding the right center, cutting the two lines at the tangent point and deleting the leftover pieces. On sloped planes it becomes slow and imprecise. robo Fillet does it all with two clicks and a radius.' },
  { t: 'Step 1 · Choose the two lines', d: 'You start robo Fillet and click the first line, which turns red, then the second, which turns blue. The lines must lie on the same plane: the tool checks this and calculates by itself the point where they meet, even when they don\'t actually touch (a "virtual corner").' },
  { t: 'Step 2 · Set radius and segments', d: 'Type the radius in your model\'s units and the number of segments, from 1 to 99. With 1 segment you get a sharp chamfer; with more segments an increasingly smooth arc. The maximum possible radius is calculated for you, so you never get impossible fillets.' },
  { t: 'Step 3 · Check the preview and apply', d: 'As you change the values you immediately see the resulting arc, drawn in green. When you like it, press Apply: the two lines are cut at the right point and the arc is created. A single Ctrl+Z undoes the fillet.' },
  { t: 'On any plane', d: 'The calculation happens on the plane of the two lines, whatever its orientation: horizontal, vertical or sloped in space. You don\'t have to rotate the view or build auxiliary planes.' },
  { t: 'Ready for the next fillet', d: 'After Apply the tool stays active and remembers radius and segments, so you can round corners one after another. If the lines didn\'t touch, it offers to join them; a guide point is left at the center of the arc.' },
  { t: 'A concrete example', d: 'You drew the outline of a counter in plan with four sharp corners and want to round them with a 10 cm radius. You start robo Fillet, click the two lines of the first corner, type 10 and see the green arc. Press Apply and move to the next corner: the radius is already set, two clicks are enough. In under a minute the outline is complete and clean.' }
];
I18N_PLUGINS.de.fillet = I18N_PLUGINS.de.fillet || {};
I18N_PLUGINS.de.fillet.intro = [
  'robo Fillet rundet die Ecke zweier Linien ab: Es verwandelt sie in eine weiche Kurve, eine Verrundung, oder in eine Fase. Sie klicken die beiden Linien an, geben den Radius ein, und die Ecke ist bearbeitet.',
  'Es ist nützlich beim Zeichnen von Profilen, Grundrissen, Möbeln, Blechteilen und jeder Form mit Kanten, die weicher werden sollen. Anders als andere Methoden funktioniert es auf jeder Ebene, auch geneigt, und auch wenn sich die beiden Linien gar nicht berühren.'
];
I18N_PLUGINS.de.fillet.main = [
  { t: 'Zwei Klicks und ein Radius', d: 'Sie klicken die erste Linie, dann die zweite, geben den Radius in den Einheiten des Modells ein und bestätigen.' },
  { t: 'Live-Vorschau', d: 'Während Sie den Radius ändern, sehen Sie sofort die entstehende Kurve. Der maximal mögliche Radius wird für Sie berechnet, sodass keine unmöglichen Verrundungen entstehen.' },
  { t: 'Verrundung oder Fase', d: 'Mit einem Segment erhalten Sie eine scharfe Fase, mit mehr Segmenten einen immer glatteren Bogen.' },
  { t: 'Auf jeder Ebene', d: 'Es funktioniert auch auf geneigten Ebenen und im Raum, nicht nur auf der waagerechten Ebene.' },
  { t: 'Bereit für die nächste Verrundung', d: 'Nach dem Anwenden bleibt das Werkzeug aktiv und merkt sich Radius und Segmente, sodass Sie Ecken nacheinander abrunden können.' }
];
I18N_PLUGINS.de.fillet.how = [
  { t: 'Das Problem, das es löst', d: 'Die Ecke zwischen zwei Kanten in SketchUp abzurunden heißt, den Bogen von Hand zu konstruieren, den richtigen Mittelpunkt zu finden, die beiden Linien am Tangentenpunkt zu kürzen und die Reste zu löschen. Auf geneigten Ebenen wird das langsam und ungenau. robo Fillet erledigt alles mit zwei Klicks und einem Radius.' },
  { t: 'Schritt 1 · Die zwei Linien wählen', d: 'Sie starten robo Fillet und klicken die erste Linie an, die sich rot färbt, dann die zweite, die blau wird. Die Linien müssen in derselben Ebene liegen: Das Werkzeug prüft das und berechnet selbst den Punkt, an dem sie sich treffen, auch wenn sie sich nicht wirklich berühren (eine „virtuelle Ecke“).' },
  { t: 'Schritt 2 · Radius und Segmente einstellen', d: 'Geben Sie den Radius in den Einheiten Ihres Modells und die Anzahl der Segmente von 1 bis 99 ein. Mit 1 Segment erhalten Sie eine scharfe Fase, mit mehr Segmenten einen immer glatteren Bogen. Der maximal mögliche Radius wird für Sie berechnet, sodass keine unmöglichen Verrundungen entstehen.' },
  { t: 'Schritt 3 · Vorschau prüfen und anwenden', d: 'Während Sie die Werte ändern, sehen Sie sofort den entstehenden Bogen, grün gezeichnet. Gefällt er Ihnen, klicken Sie auf Anwenden: Die beiden Linien werden an der richtigen Stelle gekürzt, und der Bogen wird erstellt. Ein einziges Strg+Z macht die Verrundung rückgängig.' },
  { t: 'Auf jeder Ebene', d: 'Die Berechnung erfolgt in der Ebene der beiden Linien, gleich welcher Ausrichtung: waagerecht, senkrecht oder im Raum geneigt. Sie müssen weder die Ansicht drehen noch Hilfsebenen bauen.' },
  { t: 'Bereit für die nächste Verrundung', d: 'Nach Anwenden bleibt das Werkzeug aktiv und merkt sich Radius und Segmente, sodass Sie Ecken nacheinander abrunden können. Berührten sich die Linien nicht, bietet es an, sie zu verbinden; in der Mitte des Bogens bleibt ein Hilfspunkt.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie haben die Kontur einer Theke im Grundriss mit vier scharfen Ecken gezeichnet und möchten sie mit 10 cm Radius abrunden. Sie starten robo Fillet, klicken die beiden Linien der ersten Ecke an, geben 10 ein und sehen den grünen Bogen. Klicken Sie auf Anwenden und gehen Sie zur nächsten Ecke: Der Radius ist schon eingestellt, zwei Klicks genügen. In weniger als einer Minute ist die Kontur fertig und sauber.' }
];
I18N_PLUGINS.fr.fillet = I18N_PLUGINS.fr.fillet || {};
I18N_PLUGINS.fr.fillet.intro = [
  'robo Fillet arrondit l\'angle formé par deux lignes : il le transforme en courbe douce, appelée congé, ou en chanfrein. Vous cliquez sur les deux lignes, saisissez le rayon et l\'angle est traité.',
  'Il sert pour le dessin de profils, de plans, de meubles, de tôlerie et de toute forme aux arêtes à adoucir. Contrairement à d\'autres méthodes, il fonctionne sur n\'importe quel plan, même incliné, et même quand les deux lignes ne se touchent pas vraiment.'
];
I18N_PLUGINS.fr.fillet.main = [
  { t: 'Deux clics et un rayon', d: 'Vous cliquez sur la première ligne, puis sur la seconde, saisissez le rayon dans les unités du modèle et confirmez.' },
  { t: 'Aperçu en direct', d: 'Pendant que vous changez le rayon, vous voyez tout de suite la courbe obtenue. Le rayon maximal possible est calculé pour vous, vous n\'obtenez donc jamais de congés impossibles.' },
  { t: 'Congé ou chanfrein', d: 'Avec un seul segment, vous obtenez un chanfrein net, avec plus de segments un arc de plus en plus lisse.' },
  { t: 'Sur n\'importe quel plan', d: 'Il fonctionne aussi sur des plans inclinés et dans l\'espace, pas seulement sur le plan horizontal.' },
  { t: 'Prêt pour le congé suivant', d: 'Après l\'application, l\'outil reste actif et mémorise rayon et segments, pour arrondir les angles les uns après les autres.' }
];
I18N_PLUGINS.fr.fillet.how = [
  { t: 'Le problème qu\'il résout', d: 'Arrondir l\'angle entre deux arêtes dans SketchUp oblige à construire l\'arc à la main, trouver le bon centre, couper les deux lignes au point de tangence et supprimer les morceaux restants. Sur des plans inclinés, c\'est lent et imprécis. robo Fillet fait tout en deux clics et un rayon.' },
  { t: 'Étape 1 · Choisissez les deux lignes', d: 'Vous activez robo Fillet et cliquez sur la première ligne, qui devient rouge, puis sur la seconde, qui devient bleue. Les lignes doivent être dans le même plan : l\'outil le vérifie et calcule lui-même le point où elles se rencontrent, même quand elles ne se touchent pas vraiment (un « angle virtuel »).' },
  { t: 'Étape 2 · Réglez rayon et segments', d: 'Saisissez le rayon dans les unités de votre modèle et le nombre de segments, de 1 à 99. Avec 1 segment, vous obtenez un chanfrein net ; avec plus de segments, un arc de plus en plus lisse. Le rayon maximal possible est calculé pour vous, vous n\'obtenez donc jamais de congés impossibles.' },
  { t: 'Étape 3 · Vérifiez l\'aperçu et appliquez', d: 'Pendant que vous changez les valeurs, vous voyez tout de suite l\'arc obtenu, dessiné en vert. Quand il vous plaît, appuyez sur Appliquer : les deux lignes sont coupées au bon point et l\'arc est créé. Un seul Ctrl+Z annule le congé.' },
  { t: 'Sur n\'importe quel plan', d: 'Le calcul se fait dans le plan des deux lignes, quelle que soit son orientation : horizontal, vertical ou incliné dans l\'espace. Pas besoin de tourner la vue ni de construire des plans auxiliaires.' },
  { t: 'Prêt pour le congé suivant', d: 'Après Appliquer, l\'outil reste actif et mémorise rayon et segments, pour arrondir les angles les uns après les autres. Si les lignes ne se touchaient pas, il propose de les joindre ; un point guide est laissé au centre de l\'arc.' },
  { t: 'Un exemple concret', d: 'Vous avez dessiné en plan le contour d\'un comptoir avec quatre angles vifs et voulez les arrondir avec un rayon de 10 cm. Vous activez robo Fillet, cliquez sur les deux lignes du premier angle, saisissez 10 et voyez l\'arc vert. Appuyez sur Appliquer et passez à l\'angle suivant : le rayon est déjà réglé, deux clics suffisent. En moins d\'une minute, le contour est complet et propre.' }
];
I18N_PLUGINS.es.fillet = I18N_PLUGINS.es.fillet || {};
I18N_PLUGINS.es.fillet.intro = [
  'robo Fillet redondea la esquina formada por dos líneas: la convierte en una curva suave, llamada empalme, o en un chaflán. Haces clic en las dos líneas, escribes el radio y la esquina queda resuelta.',
  'Sirve al dibujar perfiles, plantas, muebles, chapa y cualquier forma con aristas que suavizar. A diferencia de otros métodos funciona en cualquier plano, incluso inclinado, e incluso cuando las dos líneas no se tocan realmente.'
];
I18N_PLUGINS.es.fillet.main = [
  { t: 'Dos clics y un radio', d: 'Haces clic en la primera línea, luego en la segunda, escribes el radio en las unidades del modelo y confirmas.' },
  { t: 'Vista previa en vivo', d: 'Mientras cambias el radio ves enseguida la curva resultante. El radio máximo posible se calcula por ti, así nunca obtienes empalmes imposibles.' },
  { t: 'Empalme o chaflán', d: 'Con un solo segmento obtienes un chaflán neto, con más segmentos un arco cada vez más liso.' },
  { t: 'En cualquier plano', d: 'Funciona también en planos inclinados y en el espacio, no solo en el plano horizontal.' },
  { t: 'Listo para el siguiente empalme', d: 'Tras aplicar, la herramienta sigue activa y recuerda radio y segmentos, para redondear las esquinas una tras otra.' }
];
I18N_PLUGINS.es.fillet.how = [
  { t: 'El problema que resuelve', d: 'Redondear la esquina entre dos aristas en SketchUp obliga a construir el arco a mano, encontrar el centro correcto, cortar las dos líneas en el punto de tangencia y borrar los trozos sobrantes. En planos inclinados resulta lento e impreciso. robo Fillet lo hace todo con dos clics y un radio.' },
  { t: 'Paso 1 · Elige las dos líneas', d: 'Activas robo Fillet y haces clic en la primera línea, que se vuelve roja, y luego en la segunda, que se vuelve azul. Las líneas deben estar en el mismo plano: la herramienta lo comprueba y calcula sola el punto donde se encuentran, incluso cuando no se tocan realmente (una «esquina virtual»).' },
  { t: 'Paso 2 · Ajusta radio y segmentos', d: 'Escribe el radio en las unidades de tu modelo y el número de segmentos, de 1 a 99. Con 1 segmento obtienes un chaflán neto; con más segmentos, un arco cada vez más liso. El radio máximo posible se calcula por ti, así nunca obtienes empalmes imposibles.' },
  { t: 'Paso 3 · Revisa la vista previa y aplica', d: 'Mientras cambias los valores ves enseguida el arco resultante, dibujado en verde. Cuando te guste, pulsa Aplicar: las dos líneas se cortan en el punto correcto y se crea el arco. Un solo Ctrl+Z deshace el empalme.' },
  { t: 'En cualquier plano', d: 'El cálculo se hace en el plano de las dos líneas, sea cual sea su orientación: horizontal, vertical o inclinado en el espacio. No hace falta girar la vista ni construir planos auxiliares.' },
  { t: 'Listo para el siguiente empalme', d: 'Tras Aplicar, la herramienta sigue activa y recuerda radio y segmentos, para redondear las esquinas una tras otra. Si las líneas no se tocaban, propone unirlas; en el centro del arco queda un punto guía.' },
  { t: 'Un ejemplo concreto', d: 'Has dibujado en planta el contorno de una barra con cuatro esquinas vivas y quieres redondearlas con radio 10 cm. Activas robo Fillet, haces clic en las dos líneas de la primera esquina, escribes 10 y ves el arco verde. Pulsa Aplicar y pasa a la esquina siguiente: el radio ya está ajustado, bastan dos clics. En menos de un minuto el contorno está completo y limpio.' }
];
I18N_PLUGINS.en.group_to_component = I18N_PLUGINS.en.group_to_component || {};
I18N_PLUGINS.en.group_to_component.intro = [
  'robo Group to Component turns groups into components and, above all, recognizes identical groups and makes them copies of the same component. Before converting, it shows you how many are the same and how many are unique.',
  'It is useful when the model is full of duplicate groups, such as chairs, windows or screws copied and pasted. With a single component the file weighs less and, editing one, all change. It is also a good preparation step for rendering and proxies.'
];
I18N_PLUGINS.en.group_to_component.main = [
  { t: 'Recognizes identical groups', d: 'It compares the shape of each group and gathers the identical ones, even if they are in different parts of the model.' },
  { t: 'Analysis before converting', d: 'You see how many groups are identical and how many unique, and decide whether to proceed.' },
  { t: 'Adjustable precision', d: 'You can choose how strict the comparison should be: faster or more precise.' },
  { t: 'Automatic names and numbering', d: 'You give the component a name and the copies are numbered in order.' }
];
I18N_PLUGINS.en.group_to_component.how = [
  { t: 'The problem it solves', d: 'A model full of duplicate groups, such as chairs or windows copied and pasted, weighs a lot and must be edited copy by copy. A group, unlike a component, doesn\'t share geometry with its copies. Telling by eye which groups are really the same is impossible. robo Group to Component recognizes them and turns them into copies of the same component.' },
  { t: 'Step 1 · Select the groups', d: 'Select the groups to convert, even hundreds. Open robo Group to Component: the panel analyzes the selection and shows you how many groups are identical and how many unique, before changing anything.' },
  { t: 'How it recognizes them', d: 'For each group a geometric "fingerprint" is calculated: number of faces, volume and vertex positions. Two groups with the same fingerprint are considered identical, even if they are in different places or rotated in the model.' },
  { t: 'Step 2 · Adjust the comparison', d: 'You can adjust the tolerance, meaning how much two shapes may differ to be considered equal. With vertex-by-vertex comparison ("Deep Vertex Hash") the analysis is slower but more rigorous: useful when similar but not identical shapes risk being merged.' },
  { t: 'Step 3 · Name, numbering and confirm', d: 'You give the component a name and choose automatic numbering: Name_1, Name_2… or 0001, 0002… You confirm and the identical groups become instances of the same definition: the geometry is stored only once.' },
  { t: 'What you get', d: 'The file becomes lighter, and editing a component changes all its copies. The model is also ready for light proxies and for rendering. A single Ctrl+Z restores everything.' },
  { t: 'A concrete example', d: 'You have a restaurant with 60 chairs, all groups copied and pasted. You select them and open robo Group to Component: the panel says "58 identical, 2 unique". You type the name "Chair", choose the numbering and confirm. Now there are two "Chair" components and the 58 copies share the same definition: the file weighs less and, if you change the seat color in one, it changes in all.' }
];
I18N_PLUGINS.de.group_to_component = I18N_PLUGINS.de.group_to_component || {};
I18N_PLUGINS.de.group_to_component.intro = [
  'robo Group to Component verwandelt Gruppen in Komponenten und erkennt vor allem identische Gruppen, die es zu Kopien derselben Komponente macht. Vor dem Umwandeln zeigt es Ihnen, wie viele gleich und wie viele einzigartig sind.',
  'Es ist nützlich, wenn das Modell voller doppelter Gruppen ist, etwa kopierter Stühle, Fenster oder Schrauben. Mit einer einzigen Komponente wird die Datei leichter, und bei Änderung einer ändern sich alle. Es ist auch ein guter Vorbereitungsschritt für Rendering und Proxys.'
];
I18N_PLUGINS.de.group_to_component.main = [
  { t: 'Erkennt identische Gruppen', d: 'Es vergleicht die Form jeder Gruppe und fasst die identischen zusammen, auch wenn sie an verschiedenen Stellen im Modell liegen.' },
  { t: 'Analyse vor der Umwandlung', d: 'Sie sehen, wie viele Gruppen identisch und wie viele einzigartig sind, und entscheiden, ob Sie fortfahren.' },
  { t: 'Einstellbare Genauigkeit', d: 'Sie können wählen, wie streng der Vergleich sein soll: schneller oder genauer.' },
  { t: 'Automatische Namen und Nummerierung', d: 'Sie geben der Komponente einen Namen, und die Kopien werden der Reihe nach nummeriert.' }
];
I18N_PLUGINS.de.group_to_component.how = [
  { t: 'Das Problem, das es löst', d: 'Ein Modell voller doppelter Gruppen, etwa kopierter Stühle oder Fenster, wiegt viel und muss Kopie für Kopie bearbeitet werden. Eine Gruppe teilt im Gegensatz zu einer Komponente ihre Geometrie nicht mit ihren Kopien. Mit bloßem Auge zu erkennen, welche Gruppen wirklich gleich sind, ist unmöglich. robo Group to Component erkennt sie und macht sie zu Kopien derselben Komponente.' },
  { t: 'Schritt 1 · Gruppen auswählen', d: 'Wählen Sie die umzuwandelnden Gruppen aus, auch Hunderte. Öffnen Sie robo Group to Component: Das Fenster analysiert die Auswahl und zeigt, wie viele Gruppen identisch und wie viele einzigartig sind, bevor etwas geändert wird.' },
  { t: 'Wie es sie erkennt', d: 'Für jede Gruppe wird ein geometrischer „Fingerabdruck“ berechnet: Anzahl der Flächen, Volumen und Position der Eckpunkte. Zwei Gruppen mit demselben Fingerabdruck gelten als identisch, auch wenn sie an verschiedenen Stellen liegen oder im Modell gedreht sind.' },
  { t: 'Schritt 2 · Vergleich einstellen', d: 'Sie können die Toleranz einstellen, also wie stark sich zwei Formen unterscheiden dürfen, um als gleich zu gelten. Beim Vergleich Eckpunkt für Eckpunkt („Deep Vertex Hash“) ist die Analyse langsamer, aber strenger: nützlich, wenn ähnliche, aber nicht identische Formen sonst zusammengelegt würden.' },
  { t: 'Schritt 3 · Name, Nummerierung und Bestätigung', d: 'Sie geben der Komponente einen Namen und wählen die automatische Nummerierung: Name_1, Name_2… oder 0001, 0002… Sie bestätigen, und die identischen Gruppen werden zu Instanzen derselben Definition: Die Geometrie wird nur einmal gespeichert.' },
  { t: 'Was Sie erhalten', d: 'Die Datei wird leichter, und beim Ändern einer Komponente ändern sich alle ihre Kopien. Das Modell ist außerdem bereit für leichte Proxys und für das Rendering. Ein einziges Strg+Z stellt alles wieder her.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie haben ein Restaurant mit 60 Stühlen, alle als kopierte Gruppen. Sie wählen sie aus und öffnen robo Group to Component: Das Fenster sagt „58 identisch, 2 einzigartig“. Sie geben den Namen „Stuhl“ ein, wählen die Nummerierung und bestätigen. Nun gibt es zwei „Stuhl“-Komponenten, und die 58 Kopien teilen sich dieselbe Definition: Die Datei wiegt weniger, und wenn Sie die Sitzfarbe bei einem ändern, ändert sie sich bei allen.' }
];
I18N_PLUGINS.fr.group_to_component = I18N_PLUGINS.fr.group_to_component || {};
I18N_PLUGINS.fr.group_to_component.intro = [
  'robo Group to Component transforme les groupes en composants et, surtout, reconnaît les groupes identiques et en fait des copies du même composant. Avant de convertir, il vous montre combien sont identiques et combien sont uniques.',
  'Il sert quand le modèle est plein de groupes dupliqués, comme des chaises, fenêtres ou vis copiées-collées. Avec un seul composant, le fichier est plus léger et, en modifiant un, tous changent. C\'est aussi une bonne étape de préparation pour le rendu et les proxys.'
];
I18N_PLUGINS.fr.group_to_component.main = [
  { t: 'Reconnaît les groupes identiques', d: 'Il compare la forme de chaque groupe et regroupe les identiques, même s\'ils sont à des endroits différents du modèle.' },
  { t: 'Analyse avant conversion', d: 'Vous voyez combien de groupes sont identiques et combien sont uniques, et décidez de poursuivre ou non.' },
  { t: 'Précision réglable', d: 'Vous pouvez choisir la rigueur de la comparaison : plus rapide ou plus précise.' },
  { t: 'Noms et numérotation automatiques', d: 'Vous donnez un nom au composant et les copies sont numérotées dans l\'ordre.' }
];
I18N_PLUGINS.fr.group_to_component.how = [
  { t: 'Le problème qu\'il résout', d: 'Un modèle plein de groupes dupliqués, comme des chaises ou des fenêtres copiées-collées, pèse lourd et doit être modifié copie par copie. Un groupe, contrairement à un composant, ne partage pas sa géométrie avec ses copies. Savoir à l\'œil quels groupes sont vraiment identiques est impossible. robo Group to Component les reconnaît et en fait des copies du même composant.' },
  { t: 'Étape 1 · Sélectionnez les groupes', d: 'Sélectionnez les groupes à convertir, même des centaines. Ouvrez robo Group to Component : le panneau analyse la sélection et vous montre combien de groupes sont identiques et combien sont uniques, avant de rien changer.' },
  { t: 'Comment il les reconnaît', d: 'Pour chaque groupe, une « empreinte » géométrique est calculée : nombre de faces, volume et position des sommets. Deux groupes avec la même empreinte sont considérés identiques, même s\'ils sont à des endroits différents ou pivotés dans le modèle.' },
  { t: 'Étape 2 · Réglez la comparaison', d: 'Vous pouvez régler la tolérance, c\'est-à-dire de combien deux formes peuvent différer pour être jugées égales. Avec la comparaison sommet par sommet (« Deep Vertex Hash »), l\'analyse est plus lente mais plus rigoureuse : utile quand des formes semblables mais non identiques risqueraient d\'être fusionnées.' },
  { t: 'Étape 3 · Nom, numérotation et confirmation', d: 'Vous donnez un nom au composant et choisissez la numérotation automatique : Nom_1, Nom_2… ou 0001, 0002… Vous confirmez et les groupes identiques deviennent des instances de la même définition : la géométrie n\'est stockée qu\'une fois.' },
  { t: 'Ce que vous obtenez', d: 'Le fichier devient plus léger, et modifier un composant change toutes ses copies. Le modèle est aussi prêt pour des proxys légers et pour le rendu. Un seul Ctrl+Z rétablit tout.' },
  { t: 'Un exemple concret', d: 'Vous avez un restaurant avec 60 chaises, toutes des groupes copiés-collés. Vous les sélectionnez et ouvrez robo Group to Component : le panneau indique « 58 identiques, 2 uniques ». Vous saisissez le nom « Chaise », choisissez la numérotation et confirmez. Il y a maintenant deux composants « Chaise » et les 58 copies partagent la même définition : le fichier pèse moins et, si vous changez la couleur de l\'assise dans l\'une, elle change dans toutes.' }
];
I18N_PLUGINS.es.group_to_component = I18N_PLUGINS.es.group_to_component || {};
I18N_PLUGINS.es.group_to_component.intro = [
  'robo Group to Component convierte grupos en componentes y, sobre todo, reconoce los grupos idénticos y los convierte en copias del mismo componente. Antes de convertir, te muestra cuántos son iguales y cuántos únicos.',
  'Sirve cuando el modelo está lleno de grupos duplicados, como sillas, ventanas o tornillos copiados y pegados. Con un solo componente el archivo pesa menos y, al editar uno, cambian todos. Es también un buen paso de preparación para el renderizado y los proxies.'
];
I18N_PLUGINS.es.group_to_component.main = [
  { t: 'Reconoce los grupos idénticos', d: 'Compara la forma de cada grupo y reúne los idénticos, aunque estén en puntos distintos del modelo.' },
  { t: 'Análisis antes de convertir', d: 'Ves cuántos grupos son idénticos y cuántos únicos, y decides si continuar.' },
  { t: 'Precisión ajustable', d: 'Puedes elegir lo estricta que debe ser la comparación: más rápida o más precisa.' },
  { t: 'Nombres y numeración automáticos', d: 'Das un nombre al componente y las copias se numeran en orden.' }
];
I18N_PLUGINS.es.group_to_component.how = [
  { t: 'El problema que resuelve', d: 'Un modelo lleno de grupos duplicados, como sillas o ventanas copiadas y pegadas, pesa mucho y hay que editarlo copia por copia. Un grupo, a diferencia de un componente, no comparte la geometría con sus copias. Saber a ojo qué grupos son realmente iguales es imposible. robo Group to Component los reconoce y los convierte en copias del mismo componente.' },
  { t: 'Paso 1 · Selecciona los grupos', d: 'Selecciona los grupos a convertir, incluso cientos. Abre robo Group to Component: el panel analiza la selección y te muestra cuántos grupos son idénticos y cuántos únicos, antes de cambiar nada.' },
  { t: 'Cómo los reconoce', d: 'Para cada grupo se calcula una «huella» geométrica: número de caras, volumen y posición de los vértices. Dos grupos con la misma huella se consideran idénticos, aunque estén en sitios distintos o girados en el modelo.' },
  { t: 'Paso 2 · Ajusta la comparación', d: 'Puedes ajustar la tolerancia, es decir, cuánto pueden diferir dos formas para considerarse iguales. Con la comparación vértice a vértice («Deep Vertex Hash») el análisis es más lento pero más riguroso: útil cuando formas parecidas pero no idénticas podrían fusionarse.' },
  { t: 'Paso 3 · Nombre, numeración y confirmación', d: 'Das un nombre al componente y eliges la numeración automática: Nombre_1, Nombre_2… o 0001, 0002… Confirmas y los grupos idénticos pasan a ser instancias de la misma definición: la geometría se guarda una sola vez.' },
  { t: 'Qué obtienes', d: 'El archivo se aligera, y al modificar un componente cambian todas sus copias. El modelo queda además listo para usar proxies ligeros y para el renderizado. Un solo Ctrl+Z lo restablece todo.' },
  { t: 'Un ejemplo concreto', d: 'Tienes un restaurante con 60 sillas, todas grupos copiados y pegados. Las seleccionas y abres robo Group to Component: el panel dice «58 idénticos, 2 únicos». Escribes el nombre «Silla», eliges la numeración y confirmas. Ahora hay dos componentes «Silla» y las 58 copias comparten la misma definición: el archivo pesa menos y, si cambias el color del asiento en una, cambia en todas.' }
];
I18N_PLUGINS.en.impact_object = I18N_PLUGINS.en.impact_object || {};
I18N_PLUGINS.en.impact_object.intro = [
  'robo Impact Object is a table that shows how much each component in the model weighs, also taking into account how many times it is repeated. In practice it tells you who is slowing SketchUp down.',
  'It is useful when the model is slow and you don\'t know where to start: trees, very detailed furniture or small objects repeated hundreds of times become immediately visible, so you know where to intervene.'
];
I18N_PLUGINS.en.impact_object.main = [
  { t: 'Ranking by weight', d: 'You sort the table and find the heaviest objects in a few seconds.' },
  { t: 'Counts repetitions too', d: 'A small object copied a thousand times can weigh more than a large unique one: the table shows it.' },
  { t: 'Nested levels', d: 'Components inside other components open like a tree, one level at a time.' },
  { t: 'Actions from the same row', d: 'You select the object in the model, isolate it, zoom to it or clean up unused components.' },
  { t: 'Size in MB on request', d: 'The weight in MB is calculated only when you ask, so large models don\'t slow down.' }
];
I18N_PLUGINS.en.impact_object.how = [
  { t: 'The problem it solves', d: 'A slow model is hard to diagnose: you can\'t see which object is weighing it down. Often the culprit is not the biggest object, but a small one copied hundreds of times, like a tree, a piece of furniture or a detail. robo Impact Object ranks all components by real weight.' },
  { t: 'Step 1 · Open the table', d: 'From the menu open robo Impact Object: a table appears with one row for each definition in the model and the columns Level, Entities, Instances, Total and MB. Components contained in other components expand as a tree: on opening you see only the main levels, a click opens the children.' },
  { t: 'How the weight is calculated', d: 'For each definition the number of entities (faces, edges, groups…) is counted, along with how many times it appears in the model. The product, entities × instances, is the real impact on the program, and is read in the Total column.' },
  { t: 'Step 2 · Sort and spot', d: 'Sort the table by Total and in a few seconds you see the heaviest rows. A small but heavily repeated object can weigh more than a large unique one: the table makes this effect visible.' },
  { t: 'Step 3 · Act from the row', d: 'For each row you can select the object in the model, isolate it and zoom, or clean up unused components. Selection is synchronized both ways: select in the model and the row is highlighted, and vice versa. After zooming, the state of the model is restored.' },
  { t: 'Size in MB on request', d: 'The weight in MB is calculated only when you ask, so very large models don\'t slow down when the table opens.' },
  { t: 'A concrete example', d: 'Your garden model is very slow. You open robo Impact Object and sort by Total: at the top is "Hedge", a small component of 800 entities copied 300 times. You select it, see where it is in the model and decide to replace it with a light proxy, perhaps with robo Proxy Manager. The model is fluid again.' }
];
I18N_PLUGINS.de.impact_object = I18N_PLUGINS.de.impact_object || {};
I18N_PLUGINS.de.impact_object.intro = [
  'robo Impact Object ist eine Tabelle, die zeigt, wie viel jede Komponente im Modell wiegt, auch unter Berücksichtigung, wie oft sie wiederholt wird. Praktisch sagt sie Ihnen, wer SketchUp ausbremst.',
  'Es ist nützlich, wenn das Modell langsam ist und Sie nicht wissen, wo Sie anfangen sollen: Bäume, sehr detaillierte Möbel oder hundertfach wiederholte kleine Objekte werden sofort sichtbar, sodass Sie wissen, wo Sie eingreifen müssen.'
];
I18N_PLUGINS.de.impact_object.main = [
  { t: 'Rangliste nach Gewicht', d: 'Sie sortieren die Tabelle und finden in wenigen Sekunden die schwersten Objekte.' },
  { t: 'Zählt auch die Wiederholungen', d: 'Ein kleines, tausendfach kopiertes Objekt kann mehr wiegen als ein großes einzelnes: Die Tabelle zeigt es.' },
  { t: 'Verschachtelte Ebenen', d: 'Komponenten in anderen Komponenten öffnen sich wie ein Baum, eine Ebene nach der anderen.' },
  { t: 'Aktionen aus derselben Zeile', d: 'Sie wählen das Objekt im Modell aus, isolieren es, zoomen darauf oder bereinigen unbenutzte Komponenten.' },
  { t: 'Größe in MB auf Anfrage', d: 'Das Gewicht in MB wird nur berechnet, wenn Sie danach fragen, sodass große Modelle nicht ausgebremst werden.' }
];
I18N_PLUGINS.de.impact_object.how = [
  { t: 'Das Problem, das es löst', d: 'Ein langsames Modell ist schwer zu diagnostizieren: Man sieht nicht, welches Objekt es belastet. Oft ist nicht das größte Objekt der Übeltäter, sondern ein kleines, hundertfach kopiertes, wie ein Baum, ein Möbelstück oder ein Detail. robo Impact Object ordnet alle Komponenten nach ihrem tatsächlichen Gewicht.' },
  { t: 'Schritt 1 · Tabelle öffnen', d: 'Öffnen Sie robo Impact Object über das Menü: Eine Tabelle erscheint mit einer Zeile je Definition im Modell und den Spalten Ebene, Elemente, Instanzen, Gesamt und MB. In anderen Komponenten enthaltene Komponenten klappen sich wie ein Baum auf: Beim Öffnen sehen Sie nur die Hauptebenen, ein Klick öffnet die Untergeordneten.' },
  { t: 'Wie das Gewicht berechnet wird', d: 'Für jede Definition wird die Anzahl der Elemente (Flächen, Kanten, Gruppen …) gezählt, sowie wie oft sie im Modell vorkommt. Das Produkt, Elemente × Instanzen, ist die tatsächliche Belastung des Programms und steht in der Spalte Gesamt.' },
  { t: 'Schritt 2 · Sortieren und erkennen', d: 'Sortieren Sie die Tabelle nach Gesamt, und in wenigen Sekunden sehen Sie die schwersten Zeilen. Ein kleines, aber oft wiederholtes Objekt kann mehr wiegen als ein großes einzelnes: Die Tabelle macht diesen Effekt sichtbar.' },
  { t: 'Schritt 3 · Aus der Zeile handeln', d: 'Zu jeder Zeile können Sie das Objekt im Modell auswählen, isolieren und darauf zoomen oder unbenutzte Komponenten bereinigen. Die Auswahl ist in beide Richtungen synchronisiert: Wählen Sie im Modell, wird die Zeile hervorgehoben, und umgekehrt. Nach dem Zoomen wird der Modellzustand wiederhergestellt.' },
  { t: 'Größe in MB auf Anfrage', d: 'Das Gewicht in MB wird nur berechnet, wenn Sie danach fragen, sodass sehr große Modelle beim Öffnen der Tabelle nicht ausgebremst werden.' },
  { t: 'Ein konkretes Beispiel', d: 'Ihr Gartenmodell ist sehr langsam. Sie öffnen robo Impact Object und sortieren nach Gesamt: Ganz oben steht „Hecke“, eine kleine Komponente mit 800 Elementen, 300-mal kopiert. Sie wählen sie aus, sehen, wo sie im Modell liegt, und beschließen, sie durch einen leichten Proxy zu ersetzen, vielleicht mit robo Proxy Manager. Das Modell läuft wieder flüssig.' }
];
I18N_PLUGINS.fr.impact_object = I18N_PLUGINS.fr.impact_object || {};
I18N_PLUGINS.fr.impact_object.intro = [
  'robo Impact Object est un tableau qui montre combien pèse chaque composant du modèle, en tenant compte aussi du nombre de fois où il est répété. En pratique, il vous dit qui ralentit SketchUp.',
  'Il sert quand le modèle est lent et que vous ne savez pas par où commencer : arbres, mobilier très détaillé ou petits objets répétés des centaines de fois deviennent immédiatement visibles, et vous savez où intervenir.'
];
I18N_PLUGINS.fr.impact_object.main = [
  { t: 'Classement par poids', d: 'Vous triez le tableau et trouvez en quelques secondes les objets les plus lourds.' },
  { t: 'Compte aussi les répétitions', d: 'Un petit objet copié mille fois peut peser plus qu\'un grand objet unique : le tableau le montre.' },
  { t: 'Niveaux imbriqués', d: 'Les composants dans d\'autres composants s\'ouvrent comme un arbre, un niveau à la fois.' },
  { t: 'Actions depuis la même ligne', d: 'Vous sélectionnez l\'objet dans le modèle, l\'isolez, zoomez dessus ou nettoyez les composants inutilisés.' },
  { t: 'Taille en Mo sur demande', d: 'Le poids en Mo n\'est calculé que lorsque vous le demandez, les grands modèles ne ralentissent donc pas.' }
];
I18N_PLUGINS.fr.impact_object.how = [
  { t: 'Le problème qu\'il résout', d: 'Un modèle lent est difficile à diagnostiquer : on ne voit pas quel objet l\'alourdit. Souvent le coupable n\'est pas le plus grand objet, mais un petit copié des centaines de fois, comme un arbre, un meuble ou un détail. robo Impact Object classe tous les composants par poids réel.' },
  { t: 'Étape 1 · Ouvrez le tableau', d: 'Depuis le menu, ouvrez robo Impact Object : un tableau apparaît avec une ligne par définition du modèle et les colonnes Niveau, Entités, Instances, Total et Mo. Les composants contenus dans d\'autres composants se déploient comme un arbre : à l\'ouverture, vous ne voyez que les niveaux principaux, un clic ouvre les enfants.' },
  { t: 'Comment le poids est calculé', d: 'Pour chaque définition, on compte le nombre d\'entités (faces, arêtes, groupes…) et le nombre de fois où elle apparaît dans le modèle. Le produit, entités × instances, est l\'impact réel sur le programme, et se lit dans la colonne Total.' },
  { t: 'Étape 2 · Triez et repérez', d: 'Triez le tableau par Total et en quelques secondes vous voyez les lignes les plus lourdes. Un petit objet très répété peut peser plus qu\'un grand objet unique : le tableau rend cet effet visible.' },
  { t: 'Étape 3 · Agissez depuis la ligne', d: 'Pour chaque ligne, vous pouvez sélectionner l\'objet dans le modèle, l\'isoler et zoomer, ou nettoyer les composants inutilisés. La sélection est synchronisée dans les deux sens : vous sélectionnez dans le modèle et la ligne est surlignée, et inversement. Après le zoom, l\'état du modèle est rétabli.' },
  { t: 'Taille en Mo sur demande', d: 'Le poids en Mo n\'est calculé que lorsque vous le demandez, les très grands modèles ne ralentissent donc pas à l\'ouverture du tableau.' },
  { t: 'Un exemple concret', d: 'Votre modèle de jardin est très lent. Vous ouvrez robo Impact Object et triez par Total : en tête, « Haie », un petit composant de 800 entités copié 300 fois. Vous le sélectionnez, voyez où il se trouve dans le modèle et décidez de le remplacer par un proxy léger, par exemple avec robo Proxy Manager. Le modèle redevient fluide.' }
];
I18N_PLUGINS.es.impact_object = I18N_PLUGINS.es.impact_object || {};
I18N_PLUGINS.es.impact_object.intro = [
  'robo Impact Object es una tabla que muestra cuánto pesa cada componente del modelo, teniendo en cuenta también cuántas veces se repite. En la práctica te dice quién está ralentizando SketchUp.',
  'Sirve cuando el modelo va lento y no sabes por dónde empezar: árboles, mobiliario muy detallado u objetos pequeños repetidos cientos de veces se hacen visibles de inmediato, y sabes dónde intervenir.'
];
I18N_PLUGINS.es.impact_object.main = [
  { t: 'Clasificación por peso', d: 'Ordenas la tabla y encuentras en pocos segundos los objetos más pesados.' },
  { t: 'Cuenta también las repeticiones', d: 'Un objeto pequeño copiado mil veces puede pesar más que uno grande y único: la tabla lo muestra.' },
  { t: 'Niveles anidados', d: 'Los componentes dentro de otros componentes se abren como un árbol, un nivel cada vez.' },
  { t: 'Acciones desde la misma fila', d: 'Seleccionas el objeto en el modelo, lo aíslas, haces zoom o limpias los componentes sin usar.' },
  { t: 'Tamaño en MB a petición', d: 'El peso en MB se calcula solo cuando lo pides, así los modelos grandes no se ralentizan.' }
];
I18N_PLUGINS.es.impact_object.how = [
  { t: 'El problema que resuelve', d: 'Un modelo lento es difícil de diagnosticar: no se ve qué objeto lo recarga. A menudo el culpable no es el objeto más grande, sino uno pequeño copiado cientos de veces, como un árbol, un mueble o un detalle. robo Impact Object clasifica todos los componentes por su peso real.' },
  { t: 'Paso 1 · Abre la tabla', d: 'Desde el menú abre robo Impact Object: aparece una tabla con una fila por cada definición del modelo y las columnas Nivel, Entidades, Instancias, Total y MB. Los componentes contenidos en otros componentes se expanden como un árbol: al abrir solo ves los niveles principales, un clic abre los hijos.' },
  { t: 'Cómo se calcula el peso', d: 'Para cada definición se cuenta el número de entidades (caras, aristas, grupos…) y cuántas veces aparece en el modelo. El producto, entidades × instancias, es el impacto real en el programa, y se lee en la columna Total.' },
  { t: 'Paso 2 · Ordena y localiza', d: 'Ordena la tabla por Total y en pocos segundos ves las filas más pesadas. Un objeto pequeño pero muy repetido puede pesar más que uno grande y único: la tabla hace visible este efecto.' },
  { t: 'Paso 3 · Actúa desde la fila', d: 'Para cada fila puedes seleccionar el objeto en el modelo, aislarlo y hacer zoom, o limpiar los componentes sin usar. La selección está sincronizada en los dos sentidos: seleccionas en el modelo y se resalta la fila, y viceversa. Tras el zoom, se restablece el estado del modelo.' },
  { t: 'Tamaño en MB a petición', d: 'El peso en MB se calcula solo cuando lo pides, así los modelos muy grandes no se ralentizan al abrir la tabla.' },
  { t: 'Un ejemplo concreto', d: 'Tu modelo de jardín va lentísimo. Abres robo Impact Object y ordenas por Total: arriba está «Seto», un pequeño componente de 800 entidades copiado 300 veces. Lo seleccionas, ves dónde está en el modelo y decides sustituirlo por un proxy ligero, quizá con robo Proxy Manager. El modelo vuelve a ir fluido.' }
];
I18N_PLUGINS.en.library_explorer = I18N_PLUGINS.en.library_explorer || {};
I18N_PLUGINS.en.library_explorer.intro = [
  'robo Library Explorer is a panel for browsing your libraries of components and materials with real previews, like a gallery. You point to the folders where you keep your files and find them all in one place.',
  'It is useful when you have hundreds of .skp and .skm files and don\'t want to open them one by one to see what they contain. You search by name or tag, find the object you need and insert it into the model with a click.'
];
I18N_PLUGINS.en.library_explorer.main = [
  { t: 'Real previews', d: 'You see the real image of each component and each material, not just the file name.' },
  { t: 'One-click insertion', d: 'Click a component and you insert it into the model, click a material and you apply it to the selection.' },
  { t: 'Search, filter and organize', d: 'Search by name, tags to classify objects, and a heart for favorites.' },
  { t: 'One list per folder', d: 'Each folder you add becomes a list with its subfolders. The files on disk are not touched.' },
  { t: 'Views of your choice', d: 'Switch from a detailed list to small, medium or large icons, depending on how you like to work.' }
];
I18N_PLUGINS.en.library_explorer.how = [
  { t: 'The problem it solves', d: 'Anyone who has worked for years has hundreds of components and materials scattered across many folders. Finding one means opening files one by one or remembering the exact name. robo Library Explorer gathers them in a single panel, with real previews, and inserts them into the model with a click.' },
  { t: 'Step 1 · Add your folders', d: 'Press "Folder" and choose your library folder. Each folder you add becomes a list of its own, with its subfolders. You can also rename the displayed name (right-click › Edit Name) without touching the folder on disk: your files are never modified.' },
  { t: 'Real previews', d: 'For .skp files the preview is the image SketchUp saved inside the file; for .skm materials it is obtained by loading them into the model for an instant. Missing previews are created in the background. For many files the image is read straight from the start of the .skp, without opening it, and the scan explores each folder only once: refreshing is quick.' },
  { t: 'Step 2 · Browse, filter, search', d: 'Choose the detail view or small, medium or large icons. Search by name, label objects with tags and mark favorites with the heart to find them again right away.' },
  { t: 'Step 3 · Insert with a click', d: 'Click a component and it is inserted into the model; click a material and it is applied to the selection. If a component was saved with a SketchUp version newer than yours, it is inserted as with File › Import (SketchUp warns you) instead of failing. Empty files are not listed.' },
  { t: 'Proxy, 3D Warehouse and cloud', d: 'For objects created with robo Proxy Manager it also shows the proxy. A button opens the 3D Warehouse to download models into the library. Cloud backup saves the list in a OneDrive or Google Drive folder: your password never goes through the plugin.' },
  { t: 'Safety', d: 'The plugin deletes files only inside the library folders, and only after your confirmation.' },
  { t: 'A concrete example', d: 'You are furnishing a bathroom and remember having a "white, round" sink somewhere among 400 files. You open robo Library Explorer, type "sink" in the search and see three previews. You click the right one and the component enters the model. You mark it with the heart: next time you find it among the favorites.' }
];
I18N_PLUGINS.de.library_explorer = I18N_PLUGINS.de.library_explorer || {};
I18N_PLUGINS.de.library_explorer.intro = [
  'robo Library Explorer ist ein Fenster, um Ihre Bibliotheken von Komponenten und Materialien mit echten Vorschaubildern wie in einer Galerie zu durchsuchen. Sie geben die Ordner an, in denen Sie Ihre Dateien aufbewahren, und finden alles an einem Ort.',
  'Es ist nützlich, wenn Sie Hunderte .skp- und .skm-Dateien haben und nicht jede einzeln öffnen wollen, um zu sehen, was sie enthält. Sie suchen nach Name oder Tag, finden das gewünschte Objekt und fügen es mit einem Klick ins Modell ein.'
];
I18N_PLUGINS.de.library_explorer.main = [
  { t: 'Echte Vorschaubilder', d: 'Sie sehen das echte Bild jeder Komponente und jedes Materials, nicht nur den Dateinamen.' },
  { t: 'Einfügen mit einem Klick', d: 'Klicken Sie auf eine Komponente, und sie wird ins Modell eingefügt; klicken Sie auf ein Material, und es wird auf die Auswahl angewendet.' },
  { t: 'Suchen, filtern und ordnen', d: 'Suche nach Name, Tags zur Klassifizierung der Objekte und ein Herz für Favoriten.' },
  { t: 'Eine Liste je Ordner', d: 'Jeder hinzugefügte Ordner wird zu einer Liste mit seinen Unterordnern. Die Dateien auf der Festplatte werden nicht angetastet.' },
  { t: 'Ansichten nach Wahl', d: 'Wechseln Sie von der Detailliste zu kleinen, mittleren oder großen Symbolen, je nachdem, wie Sie gern arbeiten.' }
];
I18N_PLUGINS.de.library_explorer.how = [
  { t: 'Das Problem, das es löst', d: 'Wer seit Jahren arbeitet, hat Hunderte Komponenten und Materialien in vielen Ordnern verstreut. Eine zu finden bedeutet, Dateien einzeln zu öffnen oder sich den genauen Namen zu merken. robo Library Explorer sammelt sie in einem Fenster, mit echten Vorschaubildern, und fügt sie mit einem Klick ins Modell ein.' },
  { t: 'Schritt 1 · Ihre Ordner hinzufügen', d: 'Klicken Sie auf „Ordner“ und wählen Sie Ihren Bibliotheksordner. Jeder hinzugefügte Ordner wird zu einer eigenen Liste mit seinen Unterordnern. Sie können den angezeigten Namen auch umbenennen (Rechtsklick › Edit Name), ohne den Ordner auf der Festplatte anzutasten: Ihre Dateien werden nie verändert.' },
  { t: 'Echte Vorschaubilder', d: 'Bei .skp-Dateien ist die Vorschau das Bild, das SketchUp in der Datei gespeichert hat; bei .skm-Materialien wird es gewonnen, indem sie kurz ins Modell geladen werden. Fehlende Vorschauen werden im Hintergrund erstellt. Bei vielen Dateien wird das Bild direkt vom Anfang der .skp gelesen, ohne sie zu öffnen, und der Scan durchsucht jeden Ordner nur einmal: Das Aktualisieren geht schnell.' },
  { t: 'Schritt 2 · Durchsuchen, filtern, suchen', d: 'Wählen Sie die Detailansicht oder kleine, mittlere oder große Symbole. Suchen Sie nach Name, versehen Sie Objekte mit Tags und markieren Sie Favoriten mit dem Herz, um sie sofort wiederzufinden.' },
  { t: 'Schritt 3 · Mit einem Klick einfügen', d: 'Klicken Sie auf eine Komponente, und sie wird ins Modell eingefügt; klicken Sie auf ein Material, und es wird auf die Auswahl angewendet. Wurde eine Komponente mit einer neueren SketchUp-Version als Ihrer gespeichert, wird sie wie bei Datei › Importieren eingefügt (SketchUp warnt Sie), statt zu scheitern. Leere Dateien werden nicht aufgelistet.' },
  { t: 'Proxy, 3D Warehouse und Cloud', d: 'Bei mit robo Proxy Manager erstellten Objekten zeigt es auch den Proxy an. Eine Schaltfläche öffnet das 3D Warehouse, um Modelle in die Bibliothek herunterzuladen. Das Cloud-Backup speichert die Liste in einem OneDrive- oder Google-Drive-Ordner: Ihr Passwort läuft nie über das Plugin.' },
  { t: 'Sicherheit', d: 'Das Plugin löscht Dateien nur innerhalb der Bibliotheksordner, und nur nach Ihrer Bestätigung.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie richten ein Bad ein und erinnern sich, irgendwo unter 400 Dateien ein „weißes, rundes“ Waschbecken zu haben. Sie öffnen robo Library Explorer, geben „Waschbecken“ in die Suche ein und sehen drei Vorschauen. Sie klicken auf die richtige, und die Komponente kommt ins Modell. Sie markieren sie mit dem Herz: Beim nächsten Mal finden Sie sie bei den Favoriten.' }
];
I18N_PLUGINS.fr.library_explorer = I18N_PLUGINS.fr.library_explorer || {};
I18N_PLUGINS.fr.library_explorer.intro = [
  'robo Library Explorer est un panneau pour parcourir vos bibliothèques de composants et de matériaux avec de vraies miniatures, comme dans une galerie. Vous indiquez les dossiers où vous rangez vos fichiers et les retrouvez tous au même endroit.',
  'Il sert quand vous avez des centaines de fichiers .skp et .skm et ne voulez pas les ouvrir un par un pour voir ce qu\'ils contiennent. Vous cherchez par nom ou par tag, trouvez l\'objet voulu et l\'insérez dans le modèle d\'un clic.'
];
I18N_PLUGINS.fr.library_explorer.main = [
  { t: 'Vraies miniatures', d: 'Vous voyez l\'image réelle de chaque composant et de chaque matériau, pas seulement le nom du fichier.' },
  { t: 'Insertion en un clic', d: 'Cliquez sur un composant pour l\'insérer dans le modèle, sur un matériau pour l\'appliquer à la sélection.' },
  { t: 'Rechercher, filtrer, organiser', d: 'Recherche par nom, tags pour classer les objets et cœur pour les favoris.' },
  { t: 'Une liste par dossier', d: 'Chaque dossier ajouté devient une liste avec ses sous-dossiers. Les fichiers sur le disque ne sont pas touchés.' },
  { t: 'Vues au choix', d: 'Passez de la liste détaillée aux petites, moyennes ou grandes icônes, selon votre façon de travailler.' }
];
I18N_PLUGINS.fr.library_explorer.how = [
  { t: 'Le problème qu\'il résout', d: 'Quand on travaille depuis des années, on a des centaines de composants et de matériaux éparpillés dans de nombreux dossiers. En trouver un oblige à ouvrir les fichiers un par un ou à se souvenir du nom exact. robo Library Explorer les réunit dans un seul panneau, avec de vraies miniatures, et les insère dans le modèle d\'un clic.' },
  { t: 'Étape 1 · Ajoutez vos dossiers', d: 'Appuyez sur « Dossier » et choisissez le dossier de votre bibliothèque. Chaque dossier ajouté devient une liste à part, avec ses sous-dossiers. Vous pouvez aussi renommer le nom affiché (clic droit › Edit Name) sans toucher au dossier sur le disque : vos fichiers ne sont jamais modifiés.' },
  { t: 'Vraies miniatures', d: 'Pour les fichiers .skp, la miniature est l\'image que SketchUp a enregistrée dans le fichier ; pour les matériaux .skm, elle est obtenue en les chargeant un instant dans le modèle. Les miniatures manquantes sont créées en arrière-plan. Pour de nombreux fichiers, l\'image est lue directement au début du .skp, sans l\'ouvrir, et l\'analyse n\'explore chaque dossier qu\'une fois : l\'actualisation est rapide.' },
  { t: 'Étape 2 · Parcourez, filtrez, cherchez', d: 'Choisissez la vue détaillée ou les petites, moyennes ou grandes icônes. Cherchez par nom, étiquetez les objets avec des tags et marquez les favoris avec le cœur pour les retrouver tout de suite.' },
  { t: 'Étape 3 · Insérez d\'un clic', d: 'Cliquez sur un composant et il est inséré dans le modèle ; cliquez sur un matériau et il est appliqué à la sélection. Si un composant a été enregistré avec une version de SketchUp plus récente que la vôtre, il est inséré comme avec Fichier › Importer (SketchUp vous avertit) au lieu d\'échouer. Les fichiers vides ne sont pas listés.' },
  { t: 'Proxy, 3D Warehouse et cloud', d: 'Pour les objets créés avec robo Proxy Manager, il affiche aussi le proxy. Un bouton ouvre le 3D Warehouse pour télécharger des modèles dans la bibliothèque. La sauvegarde dans le cloud enregistre la liste dans un dossier OneDrive ou Google Drive : votre mot de passe ne passe jamais par le plugin.' },
  { t: 'Sécurité', d: 'Le plugin ne supprime des fichiers que dans les dossiers de bibliothèque, et seulement après votre confirmation.' },
  { t: 'Un exemple concret', d: 'Vous aménagez une salle de bains et vous vous souvenez d\'avoir un lavabo « blanc, rond » quelque part parmi 400 fichiers. Vous ouvrez robo Library Explorer, saisissez « lavabo » dans la recherche et voyez trois miniatures. Vous cliquez sur la bonne et le composant entre dans le modèle. Vous le marquez avec le cœur : la prochaine fois, vous le trouvez parmi les favoris.' }
];
I18N_PLUGINS.es.library_explorer = I18N_PLUGINS.es.library_explorer || {};
I18N_PLUGINS.es.library_explorer.intro = [
  'robo Library Explorer es un panel para explorar tus bibliotecas de componentes y materiales con miniaturas reales, como en una galería. Indicas las carpetas donde guardas tus archivos y los encuentras todos en un mismo lugar.',
  'Sirve cuando tienes cientos de archivos .skp y .skm y no quieres abrirlos uno a uno para ver qué contienen. Buscas por nombre o etiqueta, encuentras el objeto que necesitas y lo insertas en el modelo con un clic.'
];
I18N_PLUGINS.es.library_explorer.main = [
  { t: 'Miniaturas reales', d: 'Ves la imagen real de cada componente y de cada material, no solo el nombre del archivo.' },
  { t: 'Inserción con un clic', d: 'Haz clic en un componente y lo insertas en el modelo, haz clic en un material y lo aplicas a la selección.' },
  { t: 'Buscar, filtrar y organizar', d: 'Búsqueda por nombre, etiquetas para clasificar los objetos y corazón para los favoritos.' },
  { t: 'Una lista por carpeta', d: 'Cada carpeta añadida se convierte en una lista con sus subcarpetas. Los archivos del disco no se tocan.' },
  { t: 'Vistas a elegir', d: 'Pasa de la lista con detalles a iconos pequeños, medianos o grandes, según cómo prefieras trabajar.' }
];
I18N_PLUGINS.es.library_explorer.how = [
  { t: 'El problema que resuelve', d: 'Quien trabaja desde hace años tiene cientos de componentes y materiales repartidos en muchas carpetas. Encontrar uno obliga a abrir archivos uno a uno o a recordar el nombre exacto. robo Library Explorer los reúne en un solo panel, con miniaturas reales, y los inserta en el modelo con un clic.' },
  { t: 'Paso 1 · Añade tus carpetas', d: 'Pulsa «Carpeta» y elige la carpeta de tu biblioteca. Cada carpeta añadida se convierte en una lista propia, con sus subcarpetas. También puedes renombrar el nombre mostrado (clic derecho › Edit Name) sin tocar la carpeta del disco: tus archivos nunca se modifican.' },
  { t: 'Miniaturas reales', d: 'Para los archivos .skp la miniatura es la imagen que SketchUp guardó dentro del archivo; para los materiales .skm se obtiene cargándolos un instante en el modelo. Las miniaturas que faltan se crean en segundo plano. Para muchos archivos la imagen se lee directamente del inicio del .skp, sin abrirlo, y el escaneo explora cada carpeta una sola vez: la actualización es rápida.' },
  { t: 'Paso 2 · Explora, filtra, busca', d: 'Elige la vista con detalles o iconos pequeños, medianos o grandes. Busca por nombre, etiqueta los objetos con tags y marca los favoritos con el corazón para encontrarlos enseguida.' },
  { t: 'Paso 3 · Inserta con un clic', d: 'Haz clic en un componente y se inserta en el modelo; haz clic en un material y se aplica a la selección. Si un componente se guardó con una versión de SketchUp más reciente que la tuya, se inserta como con Archivo › Importar (SketchUp te avisa) en lugar de fallar. Los archivos vacíos no se listan.' },
  { t: 'Proxy, 3D Warehouse y nube', d: 'Para los objetos creados con robo Proxy Manager muestra también el proxy. Un botón abre el 3D Warehouse para descargar modelos a la biblioteca. La copia de seguridad en la nube guarda la lista en una carpeta de OneDrive o Google Drive: tu contraseña nunca pasa por el plugin.' },
  { t: 'Seguridad', d: 'El plugin elimina archivos solo dentro de las carpetas de la biblioteca, y solo tras tu confirmación.' },
  { t: 'Un ejemplo concreto', d: 'Estás amueblando un baño y recuerdas tener un lavabo «blanco, redondo» en algún lugar entre 400 archivos. Abres robo Library Explorer, escribes «lavabo» en la búsqueda y ves tres miniaturas. Haces clic en la correcta y el componente entra en el modelo. Lo marcas con el corazón: la próxima vez lo encuentras entre los favoritos.' }
];
I18N_PLUGINS.en.placement = I18N_PLUGINS.en.placement || {};
I18N_PLUGINS.en.placement.intro = [
  'robo Placement distributes many copies of an object over a surface, randomly and naturally. You choose the object and the surface, adjust quantity and variations, and the copies are scattered by themselves.',
  'It is useful for quickly filling a terrain with trees, bushes or rocks, or for arranging elements that shouldn\'t look lined up. Each copy has slightly different scale and rotation, so the result is believable.'
];
I18N_PLUGINS.en.placement.main = [
  { t: 'On any surface', d: 'Works on flat and sloped faces and on uneven terrain.' },
  { t: 'Controlled variations', d: 'You set quantity, minimum and maximum scale and rotation. With the same starting value you get the same result.' },
  { t: 'Copies that don\'t overlap', d: 'A minimum distance keeps objects from interpenetrating, and you can indicate zones to avoid.' },
  { t: 'Live preview', d: 'You see the copies on the model as you adjust the values, and geometry is created only when you confirm.' }
];
I18N_PLUGINS.en.placement.how = [
  { t: 'The problem it solves', d: 'Placing dozens of trees, rocks or bushes on a terrain by hand is long, and the result almost always looks too regular. Copies that interpenetrate ruin the render. robo Placement distributes up to 1000 copies in a single operation, with random variations and no overlaps.' },
  { t: 'Step 1 · Choose object and surface', d: 'Select the component or group to distribute, then indicate the target face. It works on flat faces, sloped faces and organic meshes: it picks points over the entire connected surface, in proportion to its area.' },
  { t: 'Step 2 · Adjust the variations', d: 'You set the quantity, from 1 to 1000, the minimum and maximum scale, random rotation on the three axes and alignment to the surface normal. There is also a "seed": with the same seed you always get the same result, change it and you get a new arrangement.' },
  { t: 'Minimum distance and obstacles', d: 'An anti-collision control on the bounding boxes keeps copies from overlapping; you can also indicate obstacles to avoid, such as a path or a building.' },
  { t: 'Step 3 · Preview and apply', d: 'You see the copies drawn over the view while you adjust the parameters, even during orbit and pan, without creating geometry. Only when you press Apply are the copies really created; a single Ctrl+Z undoes them all.' },
  { t: 'A concrete example', d: 'You have a hilly terrain and want a grove of 150 pines. You select the "Pine" component, indicate the terrain and set scale between 80% and 120%, random rotation and a minimum distance of 2 m. You look at the preview: if you don\'t like it you change the seed. You press Apply and in an instant you have a natural wood, already resting on the slope.' }
];
I18N_PLUGINS.de.placement = I18N_PLUGINS.de.placement || {};
I18N_PLUGINS.de.placement.intro = [
  'robo Placement verteilt viele Kopien eines Objekts zufällig und natürlich auf einer Fläche. Sie wählen Objekt und Fläche, stellen Menge und Variationen ein, und die Kopien werden von selbst gestreut.',
  'Es ist nützlich, um ein Gelände schnell mit Bäumen, Büschen oder Steinen zu füllen oder Elemente anzuordnen, die nicht wie aufgereiht wirken sollen. Jede Kopie hat leicht unterschiedliche Skalierung und Drehung, sodass das Ergebnis glaubwürdig wirkt.'
];
I18N_PLUGINS.de.placement.main = [
  { t: 'Auf jeder Fläche', d: 'Funktioniert auf ebenen und geneigten Flächen und auf unebenem Gelände.' },
  { t: 'Kontrollierte Variationen', d: 'Sie legen Menge, minimale und maximale Skalierung und Drehung fest. Mit demselben Startwert erhalten Sie dasselbe Ergebnis.' },
  { t: 'Kopien ohne Überschneidung', d: 'Ein Mindestabstand verhindert, dass sich Objekte durchdringen, und Sie können Bereiche angeben, die gemieden werden.' },
  { t: 'Live-Vorschau', d: 'Sie sehen die Kopien auf dem Modell, während Sie die Werte einstellen, und Geometrie wird erst bei Bestätigung erstellt.' }
];
I18N_PLUGINS.de.placement.how = [
  { t: 'Das Problem, das es löst', d: 'Dutzende Bäume, Steine oder Büsche von Hand auf einem Gelände zu platzieren ist langwierig, und das Ergebnis wirkt fast immer zu regelmäßig. Sich durchdringende Kopien ruinieren das Rendering. robo Placement verteilt bis zu 1000 Kopien in einem einzigen Vorgang, mit zufälligen Variationen und ohne Überschneidungen.' },
  { t: 'Schritt 1 · Objekt und Fläche wählen', d: 'Wählen Sie die zu verteilende Komponente oder Gruppe aus und geben Sie dann die Zielfläche an. Es funktioniert auf ebenen, geneigten Flächen und organischen Meshes: Es wählt Punkte über die gesamte zusammenhängende Fläche, im Verhältnis zu deren Größe.' },
  { t: 'Schritt 2 · Variationen einstellen', d: 'Sie legen die Menge von 1 bis 1000 fest, die minimale und maximale Skalierung, zufällige Drehung um die drei Achsen und die Ausrichtung an der Flächennormalen. Dazu gibt es einen „Seed“ (Startwert): Mit demselben Seed erhalten Sie immer dasselbe Ergebnis, ändern Sie ihn, erhalten Sie eine neue Anordnung.' },
  { t: 'Mindestabstand und Hindernisse', d: 'Eine Kollisionskontrolle an den Begrenzungsboxen verhindert, dass sich Kopien überschneiden; Sie können auch Hindernisse angeben, die gemieden werden, etwa einen Weg oder ein Gebäude.' },
  { t: 'Schritt 3 · Vorschau und anwenden', d: 'Sie sehen die Kopien über die Ansicht gezeichnet, während Sie die Parameter einstellen, auch beim Orbit und Pan, ohne Geometrie zu erzeugen. Erst mit Anwenden werden die Kopien wirklich erstellt; ein einziges Strg+Z macht sie alle rückgängig.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie haben ein hügeliges Gelände und möchten ein Wäldchen aus 150 Kiefern. Sie wählen die Komponente „Kiefer“, geben das Gelände an und stellen Skalierung zwischen 80 % und 120 %, zufällige Drehung und Mindestabstand 2 m ein. Sie sehen sich die Vorschau an: Gefällt sie Ihnen nicht, ändern Sie den Seed. Sie klicken auf Anwenden, und im Nu haben Sie einen natürlichen Wald, bereits auf dem Hang aufgesetzt.' }
];
I18N_PLUGINS.fr.placement = I18N_PLUGINS.fr.placement || {};
I18N_PLUGINS.fr.placement.intro = [
  'robo Placement répartit de nombreuses copies d\'un objet sur une surface, de façon aléatoire et naturelle. Vous choisissez l\'objet et la surface, réglez quantité et variations, et les copies sont dispersées toutes seules.',
  'Il sert à remplir rapidement un terrain d\'arbres, de buissons ou de rochers, ou à disposer des éléments qui ne doivent pas paraître alignés. Chaque copie a une échelle et une rotation légèrement différentes, le résultat est donc crédible.'
];
I18N_PLUGINS.fr.placement.main = [
  { t: 'Sur n\'importe quelle surface', d: 'Fonctionne sur des faces planes et inclinées et sur des terrains irréguliers.' },
  { t: 'Variations contrôlées', d: 'Vous réglez quantité, échelle minimale et maximale et rotation. Avec la même valeur de départ, vous obtenez le même résultat.' },
  { t: 'Copies sans chevauchement', d: 'Une distance minimale évite que les objets se compénètrent, et vous pouvez indiquer des zones à éviter.' },
  { t: 'Aperçu en direct', d: 'Vous voyez les copies sur le modèle pendant que vous réglez, et la géométrie n\'est créée que lorsque vous confirmez.' }
];
I18N_PLUGINS.fr.placement.how = [
  { t: 'Le problème qu\'il résout', d: 'Placer à la main des dizaines d\'arbres, de rochers ou de buissons sur un terrain est long, et le résultat paraît presque toujours trop régulier. Les copies qui se compénètrent ruinent le rendu. robo Placement répartit jusqu\'à 1000 copies en une seule opération, avec des variations aléatoires et sans chevauchements.' },
  { t: 'Étape 1 · Choisissez objet et surface', d: 'Sélectionnez le composant ou le groupe à répartir, puis indiquez la face cible. Il fonctionne sur des faces planes, inclinées et des maillages organiques : il choisit des points sur toute la surface connectée, proportionnellement à son aire.' },
  { t: 'Étape 2 · Réglez les variations', d: 'Vous réglez la quantité, de 1 à 1000, l\'échelle minimale et maximale, la rotation aléatoire sur les trois axes et l\'alignement sur la normale de la surface. Il y a aussi une « graine » (seed) : avec la même graine, vous obtenez toujours le même résultat ; en la changeant, vous obtenez une nouvelle disposition.' },
  { t: 'Distance minimale et obstacles', d: 'Un contrôle anti-collision sur les boîtes englobantes évite que les copies se chevauchent ; vous pouvez aussi indiquer des obstacles à éviter, comme un sentier ou une construction.' },
  { t: 'Étape 3 · Aperçu et application', d: 'Vous voyez les copies dessinées sur la vue pendant que vous réglez les paramètres, même en orbite et en panoramique, sans créer de géométrie. Ce n\'est qu\'en appuyant sur Appliquer que les copies sont vraiment créées ; un seul Ctrl+Z les annule toutes.' },
  { t: 'Un exemple concret', d: 'Vous avez un terrain vallonné et voulez un bosquet de 150 pins. Vous sélectionnez le composant « Pin », indiquez le terrain et réglez une échelle entre 80 % et 120 %, une rotation aléatoire et une distance minimale de 2 m. Vous regardez l\'aperçu : s\'il ne vous plaît pas, vous changez la graine. Vous appuyez sur Appliquer et en un instant vous avez un bois naturel, déjà posé sur la pente.' }
];
I18N_PLUGINS.es.placement = I18N_PLUGINS.es.placement || {};
I18N_PLUGINS.es.placement.intro = [
  'robo Placement distribuye muchas copias de un objeto sobre una superficie, de forma aleatoria y natural. Eliges el objeto y la superficie, ajustas cantidad y variaciones, y las copias se esparcen solas.',
  'Sirve para llenar rápidamente un terreno de árboles, arbustos o rocas, o para disponer elementos que no deben parecer alineados. Cada copia tiene escala y rotación ligeramente distintas, así que el resultado resulta creíble.'
];
I18N_PLUGINS.es.placement.main = [
  { t: 'En cualquier superficie', d: 'Funciona en caras planas e inclinadas y en terrenos irregulares.' },
  { t: 'Variaciones controladas', d: 'Ajustas cantidad, escala mínima y máxima y rotación. Con el mismo valor de partida obtienes el mismo resultado.' },
  { t: 'Copias que no se solapan', d: 'Una distancia mínima evita que los objetos se interpenetren, y puedes indicar zonas a evitar.' },
  { t: 'Vista previa en vivo', d: 'Ves las copias sobre el modelo mientras ajustas los valores, y la geometría solo se crea cuando confirmas.' }
];
I18N_PLUGINS.es.placement.how = [
  { t: 'El problema que resuelve', d: 'Colocar a mano decenas de árboles, rocas o arbustos en un terreno es largo, y el resultado casi siempre resulta demasiado regular. Las copias que se interpenetran estropean el render. robo Placement distribuye hasta 1000 copias en una sola operación, con variaciones aleatorias y sin solapes.' },
  { t: 'Paso 1 · Elige objeto y superficie', d: 'Selecciona el componente o grupo a distribuir y luego indica la cara destino. Funciona en caras planas, inclinadas y mallas orgánicas: elige puntos sobre toda la superficie conectada, en proporción a su área.' },
  { t: 'Paso 2 · Ajusta las variaciones', d: 'Ajustas la cantidad, de 1 a 1000, la escala mínima y máxima, la rotación aleatoria en los tres ejes y la alineación a la normal de la superficie. Hay también una «semilla» (seed): con la misma semilla obtienes siempre el mismo resultado; si la cambias, obtienes una disposición nueva.' },
  { t: 'Distancia mínima y obstáculos', d: 'Un control anticolisión sobre las cajas envolventes evita que las copias se solapen; también puedes indicar obstáculos a evitar, como un sendero o una construcción.' },
  { t: 'Paso 3 · Vista previa y aplicar', d: 'Ves las copias dibujadas sobre la vista mientras ajustas los parámetros, incluso durante órbita y desplazamiento, sin crear geometría. Solo al pulsar Aplicar se crean realmente las copias; un solo Ctrl+Z las deshace todas.' },
  { t: 'Un ejemplo concreto', d: 'Tienes un terreno con colinas y quieres un bosquecillo de 150 pinos. Seleccionas el componente «Pino», indicas el terreno y ajustas escala entre 80 % y 120 %, rotación aleatoria y distancia mínima de 2 m. Miras la vista previa: si no te gusta, cambias la semilla. Pulsas Aplicar y en un instante tienes un bosque natural, ya apoyado en la pendiente.' }
];
I18N_PLUGINS.en.proxy_manager = I18N_PLUGINS.en.proxy_manager || {};
I18N_PLUGINS.en.proxy_manager.intro = [
  'robo Proxy Manager replaces very heavy objects, such as trees, people and detailed furniture, with light placeholders called proxies. The original is saved in a file and always stays recoverable.',
  'It is useful for working smoothly in large scenes: you orbit, zoom and draw without stutter. When you need the detail, for example for rendering, you restore the originals with a click.'
];
I18N_PLUGINS.en.proxy_manager.main = [
  { t: 'Two proxy types', d: 'A simple box, the lightest, or a simplified version that still resembles the real shape.' },
  { t: 'The original is safe', d: 'It is saved on disk in a dedicated folder: the model gets lighter without losing anything.' },
  { t: 'Restore when needed', d: 'You go back to the real object from the panel or with a right-click.' },
  { t: 'List of all proxies', d: 'The Manager shows the model\'s proxies and flags those with missing or damaged files, helping you relink them.' }
];
I18N_PLUGINS.en.proxy_manager.how = [
  { t: 'The problem it solves', d: 'Trees, people and detailed furniture can each have hundreds of thousands of faces. In a scene with many such objects, orbiting or zooming becomes impossible. Deleting them to lighten the model loses the work. robo Proxy Manager replaces them with light placeholders and keeps the originals, which you can get back at any time.' },
  { t: 'Step 1 · Select and choose the type', d: 'Select the heavy objects and choose the proxy type. The Bounding Box proxy is the lightest: a simple box of the same size. The Low Resolution proxy keeps a simplified version of the real shape, so you can still recognize the object.' },
  { t: 'Step 2 · The original is put in a safe place', d: 'The plugin saves the original geometry as a .skp file in the Robo_ProxyAssets folder, along with the information to find it again, and puts the proxy in its place. The model gets lighter without losing anything.' },
  { t: 'Step 3 · Restore when needed', d: 'With "Restore Proxy", from the panel or the right-click on the object, you go back to the original. In the settings you choose, among other things, whether to delete the external file after restoring.' },
  { t: 'The control panel', d: 'The Manager lists all the proxies in the model. If you move or rename files, it flags proxies with status ok, missing or damaged and relinks them.' },
  { t: 'A concrete example', d: 'You have a garden scene with 200 detailed trees and SketchUp stutters at every move. You select the trees and create bounding-box proxies: the scene now runs smoothly and you can work on the project. Before rendering you restore the originals with a click, or leave the Low Resolution proxies for an intermediate result.' }
];
I18N_PLUGINS.de.proxy_manager = I18N_PLUGINS.de.proxy_manager || {};
I18N_PLUGINS.de.proxy_manager.intro = [
  'robo Proxy Manager ersetzt sehr schwere Objekte, wie Bäume, Personen und detaillierte Möbel, durch leichte Platzhalter, sogenannte Proxys. Das Original wird in einer Datei gespeichert und bleibt immer wiederherstellbar.',
  'Es ist nützlich, um in großen Szenen flüssig zu arbeiten: Sie orbitieren, zoomen und zeichnen ohne Ruckeln. Brauchen Sie das Detail, etwa für das Rendering, stellen Sie die Originale mit einem Klick wieder her.'
];
I18N_PLUGINS.de.proxy_manager.main = [
  { t: 'Zwei Proxy-Typen', d: 'Eine einfache Box, die leichteste, oder eine vereinfachte Version, die der echten Form noch ähnelt.' },
  { t: 'Das Original ist sicher', d: 'Es wird in einem eigenen Ordner auf der Festplatte gespeichert: Das Modell wird leichter, ohne etwas zu verlieren.' },
  { t: 'Wiederherstellen, wenn nötig', d: 'Sie gehen über das Fenster oder per Rechtsklick zum echten Objekt zurück.' },
  { t: 'Liste aller Proxys', d: 'Der Manager zeigt die Proxys des Modells und markiert solche mit fehlenden oder beschädigten Dateien, damit Sie sie neu verknüpfen können.' }
];
I18N_PLUGINS.de.proxy_manager.how = [
  { t: 'Das Problem, das es löst', d: 'Bäume, Personen und detaillierte Möbel können jeweils Hunderttausende Flächen haben. In einer Szene mit vielen solchen Objekten wird Orbitieren oder Zoomen unmöglich. Sie zu löschen, um das Modell zu erleichtern, vernichtet Arbeit. robo Proxy Manager ersetzt sie durch leichte Platzhalter und behält die Originale, die Sie jederzeit zurückholen können.' },
  { t: 'Schritt 1 · Auswählen und Typ wählen', d: 'Wählen Sie die schweren Objekte aus und den Proxy-Typ. Der Bounding-Box-Proxy ist der leichteste: eine einfache Box gleicher Größe. Der Low-Resolution-Proxy behält eine vereinfachte Version der echten Form, sodass Sie das Objekt noch erkennen.' },
  { t: 'Schritt 2 · Das Original wird sicher abgelegt', d: 'Das Plugin speichert die ursprüngliche Geometrie als .skp-Datei im Ordner Robo_ProxyAssets, samt den Informationen zum Wiederfinden, und setzt den Proxy an ihre Stelle. Das Modell wird leichter, ohne etwas zu verlieren.' },
  { t: 'Schritt 3 · Bei Bedarf wiederherstellen', d: 'Mit „Restore Proxy“, über das Fenster oder per Rechtsklick auf das Objekt, kehren Sie zum Original zurück. In den Einstellungen legen Sie unter anderem fest, ob die externe Datei nach der Wiederherstellung gelöscht wird.' },
  { t: 'Das Kontrollfenster', d: 'Der Manager listet alle Proxys im Modell auf. Verschieben oder benennen Sie Dateien um, markiert er Proxys mit dem Status ok, fehlend oder beschädigt und verknüpft sie neu.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie haben eine Gartenszene mit 200 detaillierten Bäumen, und SketchUp ruckelt bei jeder Bewegung. Sie wählen die Bäume aus und erstellen Bounding-Box-Proxys: Die Szene läuft jetzt flüssig, und Sie können am Projekt arbeiten. Vor dem Rendern stellen Sie die Originale mit einem Klick wieder her oder lassen die Low-Resolution-Proxys für ein mittleres Ergebnis.' }
];
I18N_PLUGINS.fr.proxy_manager = I18N_PLUGINS.fr.proxy_manager || {};
I18N_PLUGINS.fr.proxy_manager.intro = [
  'robo Proxy Manager remplace les objets très lourds, comme les arbres, les personnages et le mobilier détaillé, par des substituts légers appelés proxys. L\'original est enregistré dans un fichier et reste toujours récupérable.',
  'Il sert à travailler avec fluidité dans de grandes scènes : vous orbitez, zoomez et dessinez sans saccades. Quand vous avez besoin du détail, par exemple pour le rendu, vous restaurez les originaux d\'un clic.'
];
I18N_PLUGINS.fr.proxy_manager.main = [
  { t: 'Deux types de proxy', d: 'Une simple boîte, la plus légère, ou une version simplifiée qui ressemble encore à la forme réelle.' },
  { t: 'L\'original est en sécurité', d: 'Il est enregistré sur le disque dans un dossier dédié : le modèle s\'allège sans rien perdre.' },
  { t: 'Restauration en cas de besoin', d: 'Vous revenez à l\'objet réel depuis le panneau ou par clic droit.' },
  { t: 'Liste de tous les proxys', d: 'Le Manager montre les proxys du modèle et signale ceux dont les fichiers sont manquants ou endommagés, pour vous aider à les relier à nouveau.' }
];
I18N_PLUGINS.fr.proxy_manager.how = [
  { t: 'Le problème qu\'il résout', d: 'Arbres, personnages et mobilier détaillé peuvent avoir chacun des centaines de milliers de faces. Dans une scène avec beaucoup de tels objets, orbiter ou zoomer devient impossible. Les supprimer pour alléger fait perdre le travail. robo Proxy Manager les remplace par des substituts légers et conserve les originaux, que vous pouvez récupérer à tout moment.' },
  { t: 'Étape 1 · Sélectionnez et choisissez le type', d: 'Sélectionnez les objets lourds et choisissez le type de proxy. Le proxy Bounding Box est le plus léger : une simple boîte de mêmes dimensions. Le proxy Low Resolution garde une version simplifiée de la forme réelle, vous reconnaissez donc encore l\'objet.' },
  { t: 'Étape 2 · L\'original est mis en lieu sûr', d: 'Le plugin enregistre la géométrie d\'origine comme fichier .skp dans le dossier Robo_ProxyAssets, avec les informations pour la retrouver, et met le proxy à sa place. Le modèle s\'allège sans rien perdre.' },
  { t: 'Étape 3 · Restaurez quand il le faut', d: 'Avec « Restore Proxy », depuis le panneau ou le clic droit sur l\'objet, vous revenez à l\'original. Dans les réglages, vous choisissez notamment si le fichier externe est supprimé après la restauration.' },
  { t: 'Le panneau de contrôle', d: 'Le Manager liste tous les proxys du modèle. Si vous déplacez ou renommez des fichiers, il signale les proxys avec l\'état ok, manquant ou endommagé et les relie à nouveau.' },
  { t: 'Un exemple concret', d: 'Vous avez une scène de jardin avec 200 arbres détaillés et SketchUp saccade à chaque mouvement. Vous sélectionnez les arbres et créez des proxys boîte : la scène défile maintenant fluidement et vous pouvez travailler sur le projet. Avant le rendu, vous restaurez les originaux d\'un clic, ou vous laissez les proxys Low Resolution pour un rendu intermédiaire.' }
];
I18N_PLUGINS.es.proxy_manager = I18N_PLUGINS.es.proxy_manager || {};
I18N_PLUGINS.es.proxy_manager.intro = [
  'robo Proxy Manager sustituye los objetos muy pesados, como árboles, personas y mobiliario detallado, por marcadores ligeros llamados proxies. El original se guarda en un archivo y siempre se puede recuperar.',
  'Sirve para trabajar con fluidez en escenas grandes: orbitas, haces zoom y dibujas sin tirones. Cuando necesitas el detalle, por ejemplo para el renderizado, restauras los originales con un clic.'
];
I18N_PLUGINS.es.proxy_manager.main = [
  { t: 'Dos tipos de proxy', d: 'Una simple caja, la más ligera, o una versión simplificada que aún se parece a la forma real.' },
  { t: 'El original está a salvo', d: 'Se guarda en disco en una carpeta dedicada: el modelo se aligera sin perder nada.' },
  { t: 'Restaurar cuando haga falta', d: 'Vuelves al objeto real desde el panel o con el clic derecho.' },
  { t: 'Lista de todos los proxies', d: 'El Manager muestra los proxies del modelo y señala los que tienen archivos que faltan o están dañados, ayudándote a reenlazarlos.' }
];
I18N_PLUGINS.es.proxy_manager.how = [
  { t: 'El problema que resuelve', d: 'Árboles, personas y mobiliario detallado pueden tener cada uno cientos de miles de caras. En una escena con muchos objetos así, orbitar o hacer zoom resulta imposible. Borrarlos para aligerar hace perder el trabajo. robo Proxy Manager los sustituye por marcadores ligeros y conserva los originales, que puedes recuperar en cualquier momento.' },
  { t: 'Paso 1 · Selecciona y elige el tipo', d: 'Selecciona los objetos pesados y elige el tipo de proxy. El proxy Bounding Box es el más ligero: una simple caja del mismo tamaño. El proxy Low Resolution conserva una versión simplificada de la forma real, así que aún reconoces el objeto.' },
  { t: 'Paso 2 · El original se pone a salvo', d: 'El plugin guarda la geometría original como archivo .skp en la carpeta Robo_ProxyAssets, junto con la información para encontrarla, y pone el proxy en su lugar. El modelo se aligera sin perder nada.' },
  { t: 'Paso 3 · Restaura cuando haga falta', d: 'Con «Restore Proxy», desde el panel o con el clic derecho sobre el objeto, vuelves al original. En los ajustes eliges, entre otras cosas, si se borra el archivo externo tras la restauración.' },
  { t: 'El panel de control', d: 'El Manager lista todos los proxies del modelo. Si mueves o renombras archivos, señala los proxies con estado ok, falta o dañado y los reenlaza.' },
  { t: 'Un ejemplo concreto', d: 'Tienes una escena de jardín con 200 árboles detallados y SketchUp va a tirones a cada movimiento. Seleccionas los árboles y creas proxies de caja: la escena ahora fluye y puedes trabajar en el proyecto. Antes del render restauras los originales con un clic, o dejas los proxies Low Resolution para un resultado intermedio.' }
];
I18N_PLUGINS.en.scale_definition = I18N_PLUGINS.en.scale_definition || {};
I18N_PLUGINS.en.scale_definition.intro = [
  'When you enlarge or shrink a group or component, SketchUp doesn\'t change its geometry: it remembers a scale factor on the side. robo Scale Definition builds that factor into the geometry and brings the scale back to 1.0.',
  'It is useful for having objects with true dimensions and correct materials, especially before rendering or exporting. Textures no longer look stretched or out of size, and the work is done on the whole selection at once.'
];
I18N_PLUGINS.en.scale_definition.main = [
  { t: 'Scale brought back to 1.0', d: 'The size becomes part of the shape, even if the scale was different on the three axes.' },
  { t: 'Correct textures', d: 'You can have textures recalculated so they don\'t look distorted after the change.' },
  { t: 'Several objects at once', d: 'You select many groups or components and fix them in a single operation, even nested ones.' },
  { t: 'Other copies don\'t change', d: 'Each object is made unique before the change, so copies sharing the same definition stay intact.' },
  { t: 'Final summary', d: 'At the end you see what was done and what was skipped, with the reason.' }
];
I18N_PLUGINS.en.scale_definition.how = [
  { t: 'The problem it solves', d: 'When you enlarge or shrink a group or component, SketchUp doesn\'t modify its geometry: it remembers a scale factor on the side. Dimensions look right, but textures, measurements and some renders come out wrong. The native "Reset scale" is limited and doesn\'t handle textures. robo Scale Definition builds the scale into the geometry and brings it back to 1.0.' },
  { t: 'Step 1 · Select', d: 'Select one or more groups or components, even many together and even nested. Nested elements are processed from the innermost to the outermost, so each level is fixed only once.' },
  { t: 'Step 2 · Choose the mode', d: 'Open robo Scale Definition and choose among three modes. "Scale only" changes the geometry and nothing else. "Scale + Tri-Planar World" reprojects textures in global coordinates. "Scale + Tri-Planar Fit" reprojects them in local coordinates, so the texture follows the object.' },
  { t: 'What happens to the geometry', d: 'The visual scale of each instance, even non-uniform, is applied to the points of the definition and the transformation goes back to 1.0. Before doing so the instances are made unique, so other copies of the same definition are not touched.' },
  { t: 'Step 3 · Apply and read the summary', d: 'Press Apply: the work happens in bulk on the whole selection and a single Ctrl+Z undoes everything. At the end you read a summary of what was done.' },
  { t: 'Special cases', d: 'Dynamic components, locked objects and mirrored or distorted references are not modified: they are listed at the end of the operation with the reason, so you know what was skipped and why.' },
  { t: 'A concrete example', d: 'You downloaded a table and resized it to 180 cm by dragging the scale handles. In the render the wood looks stretched. You select the table, choose "Scale + Tri-Planar Fit" and press Apply: the table now has scale 1.0, its measurements are true and the wood texture has the right proportion.' }
];
I18N_PLUGINS.de.scale_definition = I18N_PLUGINS.de.scale_definition || {};
I18N_PLUGINS.de.scale_definition.intro = [
  'Wenn Sie eine Gruppe oder Komponente vergrößern oder verkleinern, ändert SketchUp ihre Geometrie nicht: Es merkt sich nebenbei einen Skalierungsfaktor. robo Scale Definition baut diesen Faktor in die Geometrie ein und setzt die Skalierung auf 1,0 zurück.',
  'Es ist nützlich, um Objekte mit echten Maßen und korrekten Materialien zu haben, besonders vor dem Rendern oder Exportieren. Texturen wirken nicht mehr gestreckt oder falsch dimensioniert, und die Arbeit erfolgt an der ganzen Auswahl auf einmal.'
];
I18N_PLUGINS.de.scale_definition.main = [
  { t: 'Skalierung auf 1,0 zurückgesetzt', d: 'Die Größe wird Teil der Form, auch wenn die Skalierung auf den drei Achsen verschieden war.' },
  { t: 'Korrekte Texturen', d: 'Sie können Texturen neu berechnen lassen, damit sie nach der Änderung nicht verzerrt wirken.' },
  { t: 'Mehrere Objekte gleichzeitig', d: 'Sie wählen viele Gruppen oder Komponenten aus und bearbeiten sie in einem Vorgang, auch verschachtelte.' },
  { t: 'Andere Kopien bleiben unverändert', d: 'Jedes Objekt wird vor der Änderung einzigartig gemacht, sodass Kopien mit derselben Definition intakt bleiben.' },
  { t: 'Abschließende Zusammenfassung', d: 'Am Ende sehen Sie, was getan und was übersprungen wurde, mit Begründung.' }
];
I18N_PLUGINS.de.scale_definition.how = [
  { t: 'Das Problem, das es löst', d: 'Wenn Sie eine Gruppe oder Komponente vergrößern oder verkleinern, ändert SketchUp ihre Geometrie nicht: Es merkt sich nebenbei einen Skalierungsfaktor. Die Maße wirken richtig, aber Texturen, Messungen und manche Renderings werden falsch. Das native „Skalierung zurücksetzen“ ist eingeschränkt und behandelt Texturen nicht. robo Scale Definition baut die Skalierung in die Geometrie ein und setzt sie auf 1,0 zurück.' },
  { t: 'Schritt 1 · Auswählen', d: 'Wählen Sie eine oder mehrere Gruppen oder Komponenten aus, auch viele zusammen und auch verschachtelte. Verschachtelte Elemente werden von innen nach außen bearbeitet, sodass jede Ebene nur einmal korrigiert wird.' },
  { t: 'Schritt 2 · Modus wählen', d: 'Öffnen Sie robo Scale Definition und wählen Sie unter drei Modi. „Nur Skalierung“ ändert nur die Geometrie. „Skalierung + Tri-Planar World“ projiziert Texturen in globalen Koordinaten neu. „Skalierung + Tri-Planar Fit“ projiziert sie in lokalen Koordinaten neu, sodass die Textur dem Objekt folgt.' },
  { t: 'Was mit der Geometrie geschieht', d: 'Die visuelle Skalierung jeder Instanz, auch nicht gleichmäßige, wird auf die Punkte der Definition angewendet, und die Transformation geht auf 1,0 zurück. Zuvor werden die Instanzen einzigartig gemacht, sodass andere Kopien derselben Definition nicht berührt werden.' },
  { t: 'Schritt 3 · Anwenden und Zusammenfassung lesen', d: 'Klicken Sie auf Anwenden: Die Arbeit erfolgt gebündelt an der ganzen Auswahl, und ein einziges Strg+Z macht alles rückgängig. Am Ende lesen Sie eine Zusammenfassung dessen, was getan wurde.' },
  { t: 'Sonderfälle', d: 'Dynamische Komponenten, gesperrte Objekte und gespiegelte oder verzerrte Referenzen werden nicht verändert: Sie werden am Ende des Vorgangs mit dem Grund aufgelistet, sodass Sie wissen, was übersprungen wurde und warum.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie haben einen Tisch heruntergeladen und ihn durch Ziehen an den Skalierungsgriffen auf 180 cm verändert. Im Rendering wirkt das Holz gestreckt. Sie wählen den Tisch, wählen „Skalierung + Tri-Planar Fit“ und klicken auf Anwenden: Der Tisch hat jetzt Skalierung 1,0, seine Maße sind echt, und die Holztextur hat das richtige Verhältnis.' }
];
I18N_PLUGINS.fr.scale_definition = I18N_PLUGINS.fr.scale_definition || {};
I18N_PLUGINS.fr.scale_definition.intro = [
  'Quand vous agrandissez ou réduisez un groupe ou un composant, SketchUp ne change pas sa géométrie : il mémorise à part un facteur d\'échelle. robo Scale Definition intègre ce facteur dans la géométrie et ramène l\'échelle à 1,0.',
  'Il sert à avoir des objets aux dimensions vraies et aux matériaux corrects, surtout avant le rendu ou l\'export. Les textures ne paraissent plus étirées ou à la mauvaise taille, et le travail se fait sur toute la sélection d\'un coup.'
];
I18N_PLUGINS.fr.scale_definition.main = [
  { t: 'Échelle ramenée à 1,0', d: 'La taille devient partie intégrante de la forme, même si l\'échelle était différente sur les trois axes.' },
  { t: 'Textures correctes', d: 'Vous pouvez faire recalculer les textures pour qu\'elles ne soient pas déformées après la modification.' },
  { t: 'Plusieurs objets à la fois', d: 'Vous sélectionnez de nombreux groupes ou composants et les corrigez en une seule opération, même imbriqués.' },
  { t: 'Les autres copies ne changent pas', d: 'Chaque objet est rendu unique avant la modification, les copies partageant la même définition restent donc intactes.' },
  { t: 'Résumé final', d: 'À la fin, vous voyez ce qui a été fait et ce qui a été ignoré, avec la raison.' }
];
I18N_PLUGINS.fr.scale_definition.how = [
  { t: 'Le problème qu\'il résout', d: 'Quand vous agrandissez ou réduisez un groupe ou un composant, SketchUp ne modifie pas sa géométrie : il mémorise à part un facteur d\'échelle. Les dimensions semblent justes, mais les textures, les mesures et certains rendus sont faux. La « Réinitialisation d\'échelle » native est limitée et ne gère pas les textures. robo Scale Definition intègre l\'échelle dans la géométrie et la ramène à 1,0.' },
  { t: 'Étape 1 · Sélectionnez', d: 'Sélectionnez un ou plusieurs groupes ou composants, même nombreux et même imbriqués. Les éléments imbriqués sont traités du plus interne au plus externe, chaque niveau n\'est donc corrigé qu\'une fois.' },
  { t: 'Étape 2 · Choisissez le mode', d: 'Ouvrez robo Scale Definition et choisissez parmi trois modes. « Échelle seule » change la géométrie et rien d\'autre. « Échelle + Tri-Planar World » reprojette les textures en coordonnées globales. « Échelle + Tri-Planar Fit » les reprojette en coordonnées locales, la texture suit donc l\'objet.' },
  { t: 'Ce qui arrive à la géométrie', d: 'L\'échelle visuelle de chaque instance, même non uniforme, est appliquée aux points de la définition et la transformation revient à 1,0. Avant cela, les instances sont rendues uniques, les autres copies de la même définition ne sont donc pas touchées.' },
  { t: 'Étape 3 · Appliquez et lisez le résumé', d: 'Appuyez sur Appliquer : le travail se fait en bloc sur toute la sélection et un seul Ctrl+Z annule tout. À la fin, vous lisez un résumé de ce qui a été fait.' },
  { t: 'Cas particuliers', d: 'Les composants dynamiques, objets verrouillés et références en miroir ou déformées ne sont pas modifiés : ils sont listés à la fin de l\'opération avec la raison, pour que vous sachiez ce qui a été ignoré et pourquoi.' },
  { t: 'Un exemple concret', d: 'Vous avez téléchargé une table et l\'avez redimensionnée à 180 cm en faisant glisser les poignées d\'échelle. Dans le rendu, le bois paraît étiré. Vous sélectionnez la table, choisissez « Échelle + Tri-Planar Fit » et appuyez sur Appliquer : la table a maintenant une échelle de 1,0, ses mesures sont vraies et la texture du bois a la bonne proportion.' }
];
I18N_PLUGINS.es.scale_definition = I18N_PLUGINS.es.scale_definition || {};
I18N_PLUGINS.es.scale_definition.intro = [
  'Cuando agrandas o reduces un grupo o componente, SketchUp no cambia su geometría: recuerda aparte un factor de escala. robo Scale Definition incorpora ese factor en la geometría y devuelve la escala a 1.0.',
  'Sirve para tener objetos con dimensiones reales y materiales correctos, sobre todo antes del renderizado o la exportación. Las texturas ya no se ven estiradas ni fuera de tamaño, y el trabajo se hace sobre toda la selección de una vez.'
];
I18N_PLUGINS.es.scale_definition.main = [
  { t: 'Escala devuelta a 1.0', d: 'El tamaño pasa a formar parte de la forma, aunque la escala fuera distinta en los tres ejes.' },
  { t: 'Texturas correctas', d: 'Puedes hacer que se recalculen las texturas para que no queden deformadas tras el cambio.' },
  { t: 'Varios objetos a la vez', d: 'Seleccionas muchos grupos o componentes y los arreglas en una sola operación, incluso anidados.' },
  { t: 'Las otras copias no cambian', d: 'Cada objeto se hace único antes del cambio, así las copias con la misma definición quedan intactas.' },
  { t: 'Resumen final', d: 'Al final ves qué se hizo y qué se omitió, con el motivo.' }
];
I18N_PLUGINS.es.scale_definition.how = [
  { t: 'El problema que resuelve', d: 'Cuando agrandas o reduces un grupo o componente, SketchUp no modifica su geometría: recuerda aparte un factor de escala. Las dimensiones parecen correctas, pero las texturas, las medidas y algunos renders salen mal. El «Restablecer escala» nativo es limitado y no gestiona las texturas. robo Scale Definition incorpora la escala en la geometría y la devuelve a 1.0.' },
  { t: 'Paso 1 · Selecciona', d: 'Selecciona uno o más grupos o componentes, incluso muchos juntos e incluso anidados. Los elementos anidados se procesan del más interno al más externo, así cada nivel se arregla una sola vez.' },
  { t: 'Paso 2 · Elige el modo', d: 'Abre robo Scale Definition y elige entre tres modos. «Solo escala» cambia la geometría y nada más. «Escala + Tri-Planar World» reproyecta las texturas en coordenadas globales. «Escala + Tri-Planar Fit» las reproyecta en coordenadas locales, así la textura sigue al objeto.' },
  { t: 'Qué pasa con la geometría', d: 'La escala visual de cada instancia, incluso no uniforme, se aplica a los puntos de la definición y la transformación vuelve a 1.0. Antes de hacerlo, las instancias se hacen únicas, así las otras copias de la misma definición no se tocan.' },
  { t: 'Paso 3 · Aplica y lee el resumen', d: 'Pulsa Aplicar: el trabajo se hace en bloque sobre toda la selección y un solo Ctrl+Z lo deshace todo. Al final lees un resumen de lo que se hizo.' },
  { t: 'Casos especiales', d: 'Los componentes dinámicos, objetos bloqueados y referencias reflejadas o deformadas no se modifican: se listan al final de la operación con el motivo, para que sepas qué se omitió y por qué.' },
  { t: 'Un ejemplo concreto', d: 'Has descargado una mesa y la has redimensionado a 180 cm arrastrando los tiradores de escala. En el render la madera se ve estirada. Seleccionas la mesa, eliges «Escala + Tri-Planar Fit» y pulsas Aplicar: la mesa tiene ahora escala 1.0, sus medidas son reales y la textura de la madera tiene la proporción correcta.' }
];
I18N_PLUGINS.en.section = I18N_PLUGINS.en.section || {};
I18N_PLUGINS.en.section.intro = [
  'robo section is a panel that gathers all the model\'s section planes in a list, even those hidden inside groups and components. From here you manage them without having to hunt for them.',
  'It is useful for preparing cuts, elevations and section views in complex projects, where the planes are many and scattered. You activate, rename and move planes, and link them to scenes so every view has its own section.'
];
I18N_PLUGINS.en.section.main = [
  { t: 'All the planes in one list', d: 'Each plane appears with its name and the group or component where it sits.' },
  { t: 'Selection both ways', d: 'You select a row and the plane is selected in the model, and vice versa.' },
  { t: 'Activate and rename', d: 'Turn planes on or off and give them clear names, without entering groups.' },
  { t: 'Link to scenes', d: 'You save the state of the sections in scenes, copy it from one to another or apply it to all.' },
  { t: 'Isolate in a sectionable group', d: 'You wrap objects in a group you can cut without touching the rest.' }
];
I18N_PLUGINS.en.section.how = [
  { t: 'The problem it solves', d: 'In complex models the section planes are scattered inside nested groups and components. Finding, activating or turning them off means entering groups one by one, and it is easy to forget one left on. Repeating the same section in several scenes is laborious. robo section gathers them all in a single panel.' },
  { t: 'Step 1 · Open the panel', d: 'Open robo section: the plugin walks through the model and all nested groups and components, and collects every section plane with its name, the context it is in and its active state. A complete list appears, without you having to enter any group.' },
  { t: 'Step 2 · Manage the planes', d: 'From the list you activate, rename and select planes. Selection works both ways: choose a row and the plane is selected in the model, choose a plane in the model and the row is highlighted.' },
  { t: 'Move and isolate', d: 'You can move planes to another context while keeping position and orientation. Or wrap the selection in a sectionable group: the objects are isolated in a group you can cut without touching the rest of the model.' },
  { t: 'Link to scenes', d: 'The state of the planes can be saved in scenes, copied from one scene to another or applied to all, so each view has its own section and you don\'t have to reactivate planes by hand each time.' },
  { t: 'A concrete example', d: 'You have a building with 12 section planes scattered in the groups of the various floors, and you must prepare three scenes: plan, section A and section B. You open robo section and see all the planes with their names. You activate only those of section A, save the state in the scene "Section A", then do the same for B. The scenes recall with a click, without entering groups anymore.' }
];
I18N_PLUGINS.de.section = I18N_PLUGINS.de.section || {};
I18N_PLUGINS.de.section.intro = [
  'robo section ist ein Fenster, das alle Schnittebenen des Modells in einer Liste sammelt, auch solche, die in Gruppen und Komponenten versteckt sind. Von hier aus verwalten Sie sie, ohne sie suchen zu müssen.',
  'Es ist nützlich, um in komplexen Projekten Schnitte, Ansichten und Schnittdarstellungen vorzubereiten, wo die Ebenen zahlreich und verstreut sind. Sie aktivieren, benennen und verschieben Ebenen und verknüpfen sie mit Szenen, damit jede Ansicht ihren eigenen Schnitt hat.'
];
I18N_PLUGINS.de.section.main = [
  { t: 'Alle Ebenen in einer Liste', d: 'Jede Ebene erscheint mit ihrem Namen und der Gruppe oder Komponente, in der sie liegt.' },
  { t: 'Auswahl in beide Richtungen', d: 'Sie wählen eine Zeile, und die Ebene wird im Modell ausgewählt, und umgekehrt.' },
  { t: 'Aktivieren und umbenennen', d: 'Schalten Sie Ebenen ein oder aus und geben Sie ihnen klare Namen, ohne Gruppen zu betreten.' },
  { t: 'Verknüpfung mit Szenen', d: 'Sie speichern den Zustand der Schnitte in Szenen, kopieren ihn von einer zur anderen oder wenden ihn auf alle an.' },
  { t: 'In einer schneidbaren Gruppe isolieren', d: 'Sie fassen Objekte in einer Gruppe zusammen, die Sie schneiden können, ohne den Rest zu berühren.' }
];
I18N_PLUGINS.de.section.how = [
  { t: 'Das Problem, das es löst', d: 'In komplexen Modellen sind die Schnittebenen in verschachtelten Gruppen und Komponenten verstreut. Sie zu finden, zu aktivieren oder auszuschalten heißt, Gruppen einzeln zu betreten, und leicht vergisst man eine eingeschaltete. Denselben Schnitt in mehreren Szenen zu wiederholen ist mühsam. robo section sammelt alle in einem Fenster.' },
  { t: 'Schritt 1 · Fenster öffnen', d: 'Öffnen Sie robo section: Das Plugin durchläuft das Modell und alle verschachtelten Gruppen und Komponenten und sammelt jede Schnittebene mit Namen, Kontext und aktivem Zustand. Eine vollständige Liste erscheint, ohne dass Sie eine Gruppe betreten müssen.' },
  { t: 'Schritt 2 · Ebenen verwalten', d: 'Aus der Liste aktivieren, benennen und wählen Sie Ebenen aus. Die Auswahl funktioniert in beide Richtungen: Wählen Sie eine Zeile, wird die Ebene im Modell ausgewählt; wählen Sie eine Ebene im Modell, wird die Zeile hervorgehoben.' },
  { t: 'Verschieben und isolieren', d: 'Sie können Ebenen in einen anderen Kontext verschieben und dabei Position und Ausrichtung beibehalten. Oder Sie fassen die Auswahl in einer schneidbaren Gruppe zusammen: Die Objekte werden in einer Gruppe isoliert, die Sie schneiden können, ohne den Rest des Modells zu berühren.' },
  { t: 'Verknüpfung mit Szenen', d: 'Der Zustand der Ebenen kann in Szenen gespeichert, von einer Szene in eine andere kopiert oder auf alle angewendet werden, sodass jede Ansicht ihren eigenen Schnitt hat und Sie die Ebenen nicht jedes Mal von Hand aktivieren müssen.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie haben ein Gebäude mit 12 Schnittebenen, verstreut in den Gruppen der einzelnen Geschosse, und müssen drei Szenen vorbereiten: Grundriss, Schnitt A und Schnitt B. Sie öffnen robo section und sehen alle Ebenen mit ihren Namen. Sie aktivieren nur die von Schnitt A, speichern den Zustand in der Szene „Schnitt A“ und tun dasselbe für B. Die Szenen rufen Sie mit einem Klick auf, ohne noch Gruppen zu betreten.' }
];
I18N_PLUGINS.fr.section = I18N_PLUGINS.fr.section || {};
I18N_PLUGINS.fr.section.intro = [
  'robo section est un panneau qui réunit tous les plans de coupe du modèle dans une liste, même ceux cachés dans des groupes et composants. Vous les gérez d\'ici sans avoir à les chercher.',
  'Il sert à préparer coupes, élévations et vues en coupe dans des projets complexes, où les plans sont nombreux et éparpillés. Vous activez, renommez et déplacez les plans, et les liez aux scènes pour que chaque vue ait sa propre coupe.'
];
I18N_PLUGINS.fr.section.main = [
  { t: 'Tous les plans dans une liste', d: 'Chaque plan apparaît avec son nom et le groupe ou composant où il se trouve.' },
  { t: 'Sélection dans les deux sens', d: 'Vous sélectionnez une ligne et le plan est sélectionné dans le modèle, et inversement.' },
  { t: 'Activer et renommer', d: 'Allumez ou éteignez les plans et donnez-leur des noms clairs, sans entrer dans les groupes.' },
  { t: 'Lien avec les scènes', d: 'Vous enregistrez l\'état des coupes dans les scènes, le copiez de l\'une à l\'autre ou l\'appliquez à toutes.' },
  { t: 'Isoler dans un groupe sectionnable', d: 'Vous enveloppez des objets dans un groupe que vous pouvez couper sans toucher au reste.' }
];
I18N_PLUGINS.fr.section.how = [
  { t: 'Le problème qu\'il résout', d: 'Dans les modèles complexes, les plans de coupe sont éparpillés dans des groupes et composants imbriqués. Les trouver, les activer ou les éteindre oblige à entrer dans les groupes un par un, et il est facile d\'en oublier un allumé. Répéter la même coupe dans plusieurs scènes est laborieux. robo section les réunit tous dans un seul panneau.' },
  { t: 'Étape 1 · Ouvrez le panneau', d: 'Ouvrez robo section : le plugin parcourt le modèle et tous les groupes et composants imbriqués, et collecte chaque plan de coupe avec son nom, son contexte et son état actif. Une liste complète apparaît, sans que vous ayez à entrer dans un groupe.' },
  { t: 'Étape 2 · Gérez les plans', d: 'Depuis la liste, vous activez, renommez et sélectionnez les plans. La sélection fonctionne dans les deux sens : choisissez une ligne et le plan est sélectionné dans le modèle, choisissez un plan dans le modèle et la ligne est surlignée.' },
  { t: 'Déplacer et isoler', d: 'Vous pouvez déplacer des plans dans un autre contexte en conservant position et orientation. Ou envelopper la sélection dans un groupe sectionnable : les objets sont isolés dans un groupe que vous pouvez couper sans toucher au reste du modèle.' },
  { t: 'Lien avec les scènes', d: 'L\'état des plans peut être enregistré dans les scènes, copié d\'une scène à l\'autre ou appliqué à toutes, pour que chaque vue ait sa propre coupe et que vous n\'ayez pas à réactiver les plans à la main à chaque fois.' },
  { t: 'Un exemple concret', d: 'Vous avez un bâtiment avec 12 plans de coupe éparpillés dans les groupes des différents étages, et devez préparer trois scènes : plan, coupe A et coupe B. Vous ouvrez robo section et voyez tous les plans avec leurs noms. Vous n\'activez que ceux de la coupe A, enregistrez l\'état dans la scène « Coupe A », puis faites de même pour B. Les scènes se rappellent d\'un clic, sans plus entrer dans les groupes.' }
];
I18N_PLUGINS.es.section = I18N_PLUGINS.es.section || {};
I18N_PLUGINS.es.section.intro = [
  'robo section es un panel que reúne todos los planos de sección del modelo en una lista, incluso los ocultos dentro de grupos y componentes. Desde aquí los gestionas sin tener que buscarlos.',
  'Sirve para preparar cortes, alzados y vistas de sección en proyectos complejos, donde los planos son muchos y están dispersos. Activas, renombras y mueves planos, y los enlazas a las escenas para que cada vista tenga su propia sección.'
];
I18N_PLUGINS.es.section.main = [
  { t: 'Todos los planos en una lista', d: 'Cada plano aparece con su nombre y el grupo o componente donde está.' },
  { t: 'Selección en los dos sentidos', d: 'Seleccionas una fila y el plano se selecciona en el modelo, y viceversa.' },
  { t: 'Activar y renombrar', d: 'Enciende o apaga planos y ponles nombres claros, sin entrar en los grupos.' },
  { t: 'Enlace con las escenas', d: 'Guardas el estado de las secciones en las escenas, lo copias de una a otra o lo aplicas a todas.' },
  { t: 'Aislar en un grupo seccionable', d: 'Envuelves objetos en un grupo que puedes cortar sin tocar el resto.' }
];
I18N_PLUGINS.es.section.how = [
  { t: 'El problema que resuelve', d: 'En los modelos complejos los planos de sección están dispersos dentro de grupos y componentes anidados. Encontrarlos, activarlos o apagarlos obliga a entrar en los grupos uno a uno, y es fácil dejar alguno encendido. Repetir la misma sección en varias escenas es laborioso. robo section los reúne todos en un solo panel.' },
  { t: 'Paso 1 · Abre el panel', d: 'Abre robo section: el plugin recorre el modelo y todos los grupos y componentes anidados, y recoge cada plano de sección con su nombre, el contexto en el que está y su estado activo. Aparece una lista completa, sin que tengas que entrar en ningún grupo.' },
  { t: 'Paso 2 · Gestiona los planos', d: 'Desde la lista activas, renombras y seleccionas planos. La selección funciona en los dos sentidos: eliges una fila y el plano se selecciona en el modelo, eliges un plano en el modelo y la fila se resalta.' },
  { t: 'Mover y aislar', d: 'Puedes mover planos a otro contexto manteniendo posición y orientación. O envolver la selección en un grupo seccionable: los objetos se aíslan en un grupo que puedes cortar sin tocar el resto del modelo.' },
  { t: 'Enlace con las escenas', d: 'El estado de los planos puede guardarse en las escenas, copiarse de una escena a otra o aplicarse a todas, así cada vista tiene su propia sección y no tienes que reactivar los planos a mano cada vez.' },
  { t: 'Un ejemplo concreto', d: 'Tienes un edificio con 12 planos de sección dispersos en los grupos de las distintas plantas, y debes preparar tres escenas: planta, sección A y sección B. Abres robo section y ves todos los planos con sus nombres. Activas solo los de la sección A, guardas el estado en la escena «Sección A» y haces lo mismo con la B. Las escenas se recuperan con un clic, sin volver a entrar en los grupos.' }
];
I18N_PLUGINS.en.spacing_tool = I18N_PLUGINS.en.spacing_tool || {};
I18N_PLUGINS.en.spacing_tool.intro = [
  'robo Spacing Tool creates copies of an object along a line, an arc or a curve, at regular distance. You choose the object and the path and the copies arrange themselves, without measuring or copying by hand.',
  'It is useful for anything that repeats in an orderly way: street lamps along a road, fence posts, trees along an avenue, chairs around a table. If you change your mind about the number or distance, you update the value and see the result right away.'
];
I18N_PLUGINS.en.spacing_tool.main = [
  { t: 'Number or distance', d: 'Choose how many copies you want, equally spaced, or a fixed step, for example one every meter.' },
  { t: 'Lines, curves and loops', d: 'The path can be a segment, a curve or a closed shape like a circle.' },
  { t: 'Rotation and scale', d: 'Copies can rotate and change size, randomly or increasing along the path.' },
  { t: 'Preview before confirming', d: 'You see where the copies will go and in what direction, and change the values until you get the result you want.' }
];
I18N_PLUGINS.en.spacing_tool.how = [
  { t: 'The problem it solves', d: 'Copying and placing objects along a curve by hand gives irregular distances, and if you change your mind about the number of copies you have to start over. robo Spacing Tool calculates the points along the path precisely, and if you change a value the preview updates right away.' },
  { t: 'Step 1 · Choose object and path', d: 'Select the object to copy and the path, meaning the lines. The path can be a segment, an arc, a curve, even closed as a loop. With "Whole line" the selection extends to the whole chain of connected segments.' },
  { t: 'Step 2 · Number or distance', d: 'With "Number" you get N equally spaced copies along the path. With "Distance" you get a fixed step, for example 100 cm between one copy and the next. You can also set a start and end offset.' },
  { t: 'Rotation and scale', d: 'Rotation and scale can be random or progressive, meaning they grow or shrink gradually along the path. You can choose the insertion axis and keep the vertical relative to the world.' },
  { t: 'Step 3 · Preview and confirm', d: 'The preview shows the outlines of the objects and direction arrows. To avoid slowing down, it automatically limits the number of copies drawn. The window is not modal: it stays open while you work. A single Ctrl+Z undoes everything.' },
  { t: 'A concrete example', d: 'You need to put a street lamp every 12 meters along a curved road. You select the lamp and the road\'s axis line, choose "Distance" and type 12 m. You see the preview with direction arrows, rotate the lamps toward the road and confirm. If the client then asks for 15 meters, you undo and redo in ten seconds.' }
];
I18N_PLUGINS.de.spacing_tool = I18N_PLUGINS.de.spacing_tool || {};
I18N_PLUGINS.de.spacing_tool.intro = [
  'robo Spacing Tool erstellt Kopien eines Objekts entlang einer Linie, eines Bogens oder einer Kurve, in regelmäßigem Abstand. Sie wählen Objekt und Pfad, und die Kopien ordnen sich von selbst an, ohne Messen oder Kopieren von Hand.',
  'Es ist nützlich für alles, was sich geordnet wiederholt: Straßenlaternen entlang einer Straße, Zaunpfosten, Bäume an einer Allee, Stühle um einen Tisch. Ändern Sie Ihre Meinung über Anzahl oder Abstand, passen Sie den Wert an und sehen sofort das Ergebnis.'
];
I18N_PLUGINS.de.spacing_tool.main = [
  { t: 'Anzahl oder Abstand', d: 'Wählen Sie, wie viele Kopien Sie wollen, gleichmäßig verteilt, oder eine feste Schrittweite, zum Beispiel eine pro Meter.' },
  { t: 'Linien, Kurven und Ringe', d: 'Der Pfad kann ein Segment, eine Kurve oder eine geschlossene Form wie ein Kreis sein.' },
  { t: 'Drehung und Skalierung', d: 'Kopien können sich drehen und die Größe ändern, zufällig oder zunehmend entlang des Pfads.' },
  { t: 'Vorschau vor der Bestätigung', d: 'Sie sehen, wohin die Kopien kommen und in welche Richtung, und ändern die Werte, bis das Ergebnis passt.' }
];
I18N_PLUGINS.de.spacing_tool.how = [
  { t: 'Das Problem, das es löst', d: 'Objekte von Hand entlang einer Kurve zu kopieren und zu platzieren ergibt unregelmäßige Abstände, und wenn Sie Ihre Meinung über die Anzahl der Kopien ändern, müssen Sie von vorn beginnen. robo Spacing Tool berechnet die Punkte entlang des Pfads präzise, und ändern Sie einen Wert, aktualisiert sich die Vorschau sofort.' },
  { t: 'Schritt 1 · Objekt und Pfad wählen', d: 'Wählen Sie das zu kopierende Objekt und den Pfad, also die Linien. Der Pfad kann ein Segment, ein Bogen, eine Kurve sein, auch als Ring geschlossen. Mit „Ganze Linie“ erweitert sich die Auswahl auf die gesamte Kette verbundener Segmente.' },
  { t: 'Schritt 2 · Anzahl oder Abstand', d: 'Mit „Anzahl“ erhalten Sie N gleichmäßig verteilte Kopien entlang des Pfads. Mit „Abstand“ erhalten Sie eine feste Schrittweite, zum Beispiel 100 cm zwischen den Kopien. Sie können auch einen Anfangs- und Endversatz einstellen.' },
  { t: 'Drehung und Skalierung', d: 'Drehung und Skalierung können zufällig oder progressiv sein, also entlang des Pfads allmählich wachsen oder schrumpfen. Sie können die Einfügeachse wählen und die Vertikale relativ zur Welt beibehalten.' },
  { t: 'Schritt 3 · Vorschau und bestätigen', d: 'Die Vorschau zeigt die Umrisse der Objekte und Richtungspfeile. Um nicht zu bremsen, begrenzt sie automatisch die Zahl der gezeichneten Kopien. Das Fenster ist nicht modal: Es bleibt offen, während Sie arbeiten. Ein einziges Strg+Z macht alles rückgängig.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie müssen entlang einer kurvigen Straße alle 12 Meter eine Straßenlaterne setzen. Sie wählen die Laterne und die Achslinie der Straße, wählen „Abstand“ und geben 12 m ein. Sie sehen die Vorschau mit Richtungspfeilen, drehen die Laternen zur Straße hin und bestätigen. Verlangt der Auftraggeber danach 15 Meter, machen Sie rückgängig und wiederholen es in zehn Sekunden.' }
];
I18N_PLUGINS.fr.spacing_tool = I18N_PLUGINS.fr.spacing_tool || {};
I18N_PLUGINS.fr.spacing_tool.intro = [
  'robo Spacing Tool crée des copies d\'un objet le long d\'une ligne, d\'un arc ou d\'une courbe, à distance régulière. Vous choisissez l\'objet et le chemin et les copies se disposent toutes seules, sans mesurer ni copier à la main.',
  'Il sert pour tout ce qui se répète avec ordre : réverbères le long d\'une route, poteaux d\'une clôture, arbres d\'une avenue, chaises autour d\'une table. Si vous changez d\'avis sur le nombre ou la distance, vous modifiez la valeur et voyez tout de suite le résultat.'
];
I18N_PLUGINS.fr.spacing_tool.main = [
  { t: 'Nombre ou distance', d: 'Choisissez combien de copies vous voulez, équidistantes, ou un pas fixe, par exemple une par mètre.' },
  { t: 'Lignes, courbes et anneaux', d: 'Le chemin peut être un segment, une courbe ou une forme fermée comme un cercle.' },
  { t: 'Rotation et échelle', d: 'Les copies peuvent pivoter et changer de taille, de façon aléatoire ou croissante le long du chemin.' },
  { t: 'Aperçu avant de confirmer', d: 'Vous voyez où iront les copies et dans quelle direction, et modifiez les valeurs jusqu\'au résultat voulu.' }
];
I18N_PLUGINS.fr.spacing_tool.how = [
  { t: 'Le problème qu\'il résout', d: 'Copier et placer à la main des objets le long d\'une courbe donne des distances irrégulières, et si vous changez d\'avis sur le nombre de copies, il faut tout refaire. robo Spacing Tool calcule précisément les points le long du chemin, et si vous modifiez une valeur, l\'aperçu se met à jour tout de suite.' },
  { t: 'Étape 1 · Choisissez objet et chemin', d: 'Sélectionnez l\'objet à copier et le chemin, c\'est-à-dire les lignes. Le chemin peut être un segment, un arc, une courbe, même fermée en anneau. Avec « Ligne entière », la sélection s\'étend à toute la chaîne de segments connectés.' },
  { t: 'Étape 2 · Nombre ou distance', d: 'Avec « Nombre », vous obtenez N copies équidistantes le long du chemin. Avec « Distance », vous obtenez un pas fixe, par exemple 100 cm entre une copie et la suivante. Vous pouvez aussi régler un décalage de début et de fin.' },
  { t: 'Rotation et échelle', d: 'Rotation et échelle peuvent être aléatoires ou progressives, c\'est-à-dire croître ou diminuer graduellement le long du chemin. Vous pouvez choisir l\'axe d\'insertion et garder la verticale par rapport au monde.' },
  { t: 'Étape 3 · Aperçu et confirmation', d: 'L\'aperçu montre les contours des objets et des flèches de direction. Pour ne pas ralentir, il limite automatiquement le nombre de copies dessinées. La fenêtre n\'est pas modale : elle reste ouverte pendant que vous travaillez. Un seul Ctrl+Z annule tout.' },
  { t: 'Un exemple concret', d: 'Vous devez placer un réverbère tous les 12 mètres le long d\'une route courbe. Vous sélectionnez le réverbère et la ligne d\'axe de la route, choisissez « Distance » et saisissez 12 m. Vous voyez l\'aperçu avec les flèches de direction, faites pivoter les réverbères vers la route et confirmez. Si le maître d\'ouvrage demande ensuite 15 mètres, vous annulez et refaites en dix secondes.' }
];
I18N_PLUGINS.es.spacing_tool = I18N_PLUGINS.es.spacing_tool || {};
I18N_PLUGINS.es.spacing_tool.intro = [
  'robo Spacing Tool crea copias de un objeto a lo largo de una línea, un arco o una curva, a distancia regular. Eliges el objeto y el recorrido y las copias se disponen solas, sin medir ni copiar a mano.',
  'Sirve para todo lo que se repite con orden: farolas a lo largo de una calle, postes de una valla, árboles de una avenida, sillas alrededor de una mesa. Si cambias de idea sobre el número o la distancia, modificas el valor y ves enseguida el resultado.'
];
I18N_PLUGINS.es.spacing_tool.main = [
  { t: 'Número o distancia', d: 'Elige cuántas copias quieres, equidistantes, o un paso fijo, por ejemplo una cada metro.' },
  { t: 'Líneas, curvas y anillos', d: 'El recorrido puede ser un segmento, una curva o una forma cerrada como un círculo.' },
  { t: 'Rotación y escala', d: 'Las copias pueden girar y cambiar de tamaño, de forma aleatoria o creciente a lo largo del recorrido.' },
  { t: 'Vista previa antes de confirmar', d: 'Ves dónde irán las copias y en qué dirección, y cambias los valores hasta el resultado deseado.' }
];
I18N_PLUGINS.es.spacing_tool.how = [
  { t: 'El problema que resuelve', d: 'Copiar y colocar a mano objetos a lo largo de una curva da distancias irregulares, y si cambias de idea sobre el número de copias tienes que rehacerlo todo. robo Spacing Tool calcula con precisión los puntos a lo largo del recorrido, y si modificas un valor la vista previa se actualiza enseguida.' },
  { t: 'Paso 1 · Elige objeto y recorrido', d: 'Selecciona el objeto a copiar y el recorrido, es decir, las líneas. El recorrido puede ser un segmento, un arco, una curva, incluso cerrado en anillo. Con «Línea entera» la selección se extiende a toda la cadena de segmentos conectados.' },
  { t: 'Paso 2 · Número o distancia', d: 'Con «Número» obtienes N copias equidistantes a lo largo del recorrido. Con «Distancia» obtienes un paso fijo, por ejemplo 100 cm entre una copia y la siguiente. También puedes fijar un desfase inicial y final.' },
  { t: 'Rotación y escala', d: 'Rotación y escala pueden ser aleatorias o progresivas, es decir, crecer o disminuir gradualmente a lo largo del recorrido. Puedes elegir el eje de inserción y mantener la vertical respecto al mundo.' },
  { t: 'Paso 3 · Vista previa y confirmación', d: 'La vista previa muestra los contornos de los objetos y flechas de dirección. Para no ralentizar, limita automáticamente el número de copias dibujadas. La ventana no es modal: permanece abierta mientras trabajas. Un solo Ctrl+Z lo deshace todo.' },
  { t: 'Un ejemplo concreto', d: 'Tienes que poner una farola cada 12 metros a lo largo de una calle curva. Seleccionas la farola y la línea del eje de la calle, eliges «Distancia» y escribes 12 m. Ves la vista previa con las flechas de dirección, giras las farolas hacia la calle y confirmas. Si luego el cliente pide 15 metros, deshaces y rehaces en diez segundos.' }
];
I18N_PLUGINS.en.standard = I18N_PLUGINS.en.standard || {};
I18N_PLUGINS.en.standard.intro = [
  'robo Standard is a toolbar with the commands you use most: New, Open, Save, Cut, Copy, Paste, Undo and Redo. They have clear icons, in the same style as the other Robo plugins.',
  'It saves you from hunting for basic commands in the menus. It also includes two useful functions, Paste in place and Delete, each in a single button.'
];
I18N_PLUGINS.en.standard.main = [
  { t: 'Basic commands one click away', d: 'File, clipboard and edit, gathered in a single toolbar and divided into groups.' },
  { t: 'Paste in place', d: 'Pastes objects exactly where they were, in a single undoable step.' },
  { t: 'Delete the selection', d: 'Deletes the selected objects with one button.' },
  { t: 'Also in the menu', d: 'The same commands are in Extensions › Robo Tool, with their icon.' }
];
I18N_PLUGINS.en.standard.how = [
  { t: 'The problem it solves', d: 'The most used SketchUp commands, such as New, Open, Save or Paste, are scattered across different menus and toolbars, and some useful actions, like pasting in the original position, require finding the right entry each time. robo Standard gathers them in a single toolbar, with clear icons in the Robo style.' },
  { t: 'Step 1 · Turn on the toolbar', d: 'From the View › Toolbars menu turn on "robo Standard". The same commands are also in Extensions › Robo Tool › robo Standard, each with its icon.' },
  { t: 'Step 2 · Use the buttons', d: 'The buttons are divided into four groups, File, Clipboard, Edit and others, and the status bar shows the usual shortcut for each command. New, Open, Cut, Copy and Paste call SketchUp\'s actions; Save and Save as use the standard windows.' },
  { t: 'Paste in place', d: 'Pastes objects exactly in their original position, on both Windows and macOS, in a single undoable operation. It is useful for moving objects from one file to another without losing the coordinates.' },
  { t: 'Delete the selection', d: 'Deletes the selected objects in a single step, undoable with one Ctrl+Z.' },
  { t: 'A concrete example', d: 'You need to copy a piece of furniture from one file to another keeping its position. You select the object, press Copy on the toolbar; you open the other file with the Open button and press Paste in place: the object appears at exactly the same coordinates, without having to look for the command in the menus.' }
];
I18N_PLUGINS.de.standard = I18N_PLUGINS.de.standard || {};
I18N_PLUGINS.de.standard.intro = [
  'robo Standard ist eine Symbolleiste mit den am häufigsten benutzten Befehlen: Neu, Öffnen, Speichern, Ausschneiden, Kopieren, Einfügen, Rückgängig und Wiederherstellen. Sie haben klare Symbole im selben Stil wie die anderen Robo-Plugins.',
  'Es erspart Ihnen die Suche nach Grundbefehlen in den Menüs. Dazu kommen zwei nützliche Funktionen, An Originalposition einfügen und Löschen, jeweils in einer einzigen Schaltfläche.'
];
I18N_PLUGINS.de.standard.main = [
  { t: 'Grundbefehle einen Klick entfernt', d: 'Datei, Zwischenablage und Bearbeiten, in einer Symbolleiste vereint und in Gruppen unterteilt.' },
  { t: 'An Originalposition einfügen', d: 'Fügt Objekte genau dort ein, wo sie waren, in einem einzigen rückgängig zu machenden Schritt.' },
  { t: 'Auswahl löschen', d: 'Löscht die ausgewählten Objekte mit einer Schaltfläche.' },
  { t: 'Auch im Menü', d: 'Dieselben Befehle finden Sie unter Erweiterungen › Robo Tool, mit ihrem Symbol.' }
];
I18N_PLUGINS.de.standard.how = [
  { t: 'Das Problem, das es löst', d: 'Die am häufigsten benutzten SketchUp-Befehle, wie Neu, Öffnen, Speichern oder Einfügen, sind über verschiedene Menüs und Symbolleisten verstreut, und manche nützlichen Aktionen, wie das Einfügen an der Originalposition, erfordern jedes Mal die Suche nach dem richtigen Eintrag. robo Standard vereint sie in einer Symbolleiste, mit klaren Symbolen im Robo-Stil.' },
  { t: 'Schritt 1 · Symbolleiste einschalten', d: 'Schalten Sie über das Menü Ansicht › Symbolleisten „robo Standard“ ein. Dieselben Befehle finden Sie auch unter Erweiterungen › Robo Tool › robo Standard, jeweils mit ihrem Symbol.' },
  { t: 'Schritt 2 · Schaltflächen benutzen', d: 'Die Schaltflächen sind in vier Gruppen unterteilt, Datei, Zwischenablage, Bearbeiten und weitere, und die Statusleiste zeigt die übliche Tastenkombination jedes Befehls. Neu, Öffnen, Ausschneiden, Kopieren und Einfügen rufen die Aktionen von SketchUp auf; Speichern und Speichern unter nutzen die Standardfenster.' },
  { t: 'An Originalposition einfügen', d: 'Fügt Objekte genau an ihrer ursprünglichen Position ein, unter Windows und macOS, in einem einzigen rückgängig zu machenden Vorgang. Nützlich, um Objekte von einer Datei in eine andere zu verschieben, ohne die Koordinaten zu verlieren.' },
  { t: 'Auswahl löschen', d: 'Löscht die ausgewählten Objekte in einem Schritt, mit einem Strg+Z rückgängig zu machen.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie müssen ein Möbelstück von einer Datei in eine andere kopieren und dabei die Position behalten. Sie wählen das Objekt aus und klicken in der Leiste auf Kopieren; Sie öffnen die andere Datei mit der Schaltfläche Öffnen und klicken auf An Originalposition einfügen: Das Objekt erscheint exakt an denselben Koordinaten, ohne den Befehl in den Menüs suchen zu müssen.' }
];
I18N_PLUGINS.fr.standard = I18N_PLUGINS.fr.standard || {};
I18N_PLUGINS.fr.standard.intro = [
  'robo Standard est une barre d\'outils avec les commandes que vous utilisez le plus : Nouveau, Ouvrir, Enregistrer, Couper, Copier, Coller, Annuler et Rétablir. Elles ont des icônes claires, dans le même style que les autres plugins Robo.',
  'Elle vous évite de chercher les commandes de base dans les menus. Elle inclut aussi deux fonctions utiles, Coller sur place et Supprimer, chacune dans un seul bouton.'
];
I18N_PLUGINS.fr.standard.main = [
  { t: 'Commandes de base à un clic', d: 'Fichier, presse-papiers et modifier, réunis dans une seule barre et répartis en groupes.' },
  { t: 'Coller sur place', d: 'Colle les objets exactement là où ils étaient, en une seule étape annulable.' },
  { t: 'Supprimer la sélection', d: 'Supprime les objets sélectionnés avec un bouton.' },
  { t: 'Aussi dans le menu', d: 'Les mêmes commandes se trouvent dans Extensions › Robo Tool, avec leur icône.' }
];
I18N_PLUGINS.fr.standard.how = [
  { t: 'Le problème qu\'il résout', d: 'Les commandes les plus utilisées de SketchUp, comme Nouveau, Ouvrir, Enregistrer ou Coller, sont éparpillées entre différents menus et barres, et certaines actions utiles, comme coller à la position d\'origine, demandent de chercher la bonne entrée à chaque fois. robo Standard les réunit dans une seule barre, avec des icônes claires au style Robo.' },
  { t: 'Étape 1 · Activez la barre', d: 'Dans le menu Affichage › Barres d\'outils, activez « robo Standard ». Les mêmes commandes se trouvent aussi dans Extensions › Robo Tool › robo Standard, chacune avec son icône.' },
  { t: 'Étape 2 · Utilisez les boutons', d: 'Les boutons sont répartis en quatre groupes, Fichier, Presse-papiers, Modifier et autres, et la barre d\'état affiche le raccourci habituel de chaque commande. Nouveau, Ouvrir, Couper, Copier et Coller appellent les actions de SketchUp ; Enregistrer et Enregistrer sous utilisent les fenêtres standard.' },
  { t: 'Coller sur place', d: 'Colle les objets exactement à leur position d\'origine, sous Windows comme sous macOS, en une seule opération annulable. Utile pour déplacer des objets d\'un fichier à l\'autre sans perdre les coordonnées.' },
  { t: 'Supprimer la sélection', d: 'Supprime les objets sélectionnés en une seule étape, annulable avec un Ctrl+Z.' },
  { t: 'Un exemple concret', d: 'Vous devez copier un meuble d\'un fichier à un autre en gardant sa position. Vous sélectionnez l\'objet, appuyez sur Copier dans la barre ; vous ouvrez l\'autre fichier avec le bouton Ouvrir et appuyez sur Coller sur place : l\'objet apparaît exactement aux mêmes coordonnées, sans avoir à chercher la commande dans les menus.' }
];
I18N_PLUGINS.es.standard = I18N_PLUGINS.es.standard || {};
I18N_PLUGINS.es.standard.intro = [
  'robo Standard es una barra de herramientas con los comandos que más usas: Nuevo, Abrir, Guardar, Cortar, Copiar, Pegar, Deshacer y Rehacer. Tienen iconos claros, con el mismo estilo que los demás plugins Robo.',
  'Te ahorra buscar los comandos básicos en los menús. Incluye además dos funciones útiles, Pegar en el sitio y Eliminar, cada una en un solo botón.'
];
I18N_PLUGINS.es.standard.main = [
  { t: 'Comandos básicos a un clic', d: 'Archivo, portapapeles y edición, reunidos en una sola barra y divididos en grupos.' },
  { t: 'Pegar en el sitio', d: 'Pega los objetos exactamente donde estaban, en un único paso que se puede deshacer.' },
  { t: 'Eliminar la selección', d: 'Borra los objetos seleccionados con un botón.' },
  { t: 'También en el menú', d: 'Los mismos comandos están en Extensiones › Robo Tool, con su icono.' }
];
I18N_PLUGINS.es.standard.how = [
  { t: 'El problema que resuelve', d: 'Los comandos más usados de SketchUp, como Nuevo, Abrir, Guardar o Pegar, están repartidos entre distintos menús y barras, y algunas acciones útiles, como pegar en la posición original, obligan a buscar la entrada correcta cada vez. robo Standard los reúne en una sola barra, con iconos claros al estilo Robo.' },
  { t: 'Paso 1 · Activa la barra', d: 'En el menú Ver › Barras de herramientas activa «robo Standard». Los mismos comandos están también en Extensiones › Robo Tool › robo Standard, cada uno con su icono.' },
  { t: 'Paso 2 · Usa los botones', d: 'Los botones se dividen en cuatro grupos, Archivo, Portapapeles, Edición y otros, y en la barra de estado aparece el atajo habitual de cada comando. Nuevo, Abrir, Cortar, Copiar y Pegar llaman a las acciones de SketchUp; Guardar y Guardar como usan las ventanas estándar.' },
  { t: 'Pegar en el sitio', d: 'Pega los objetos exactamente en su posición original, tanto en Windows como en macOS, en una única operación que se puede deshacer. Es útil para mover objetos de un archivo a otro sin perder las coordenadas.' },
  { t: 'Eliminar la selección', d: 'Borra los objetos seleccionados en un solo paso, que se deshace con un Ctrl+Z.' },
  { t: 'Un ejemplo concreto', d: 'Tienes que copiar un mueble de un archivo a otro conservando su posición. Seleccionas el objeto, pulsas Copiar en la barra; abres el otro archivo con el botón Abrir y pulsas Pegar en el sitio: el objeto aparece exactamente en las mismas coordenadas, sin tener que buscar el comando en los menús.' }
];
I18N_PLUGINS.en.start = I18N_PLUGINS.en.start || {};
I18N_PLUGINS.en.start.intro = [
  'robo start is a toolbar with over twenty quick commands for everyday operations: create groups and components, explode, select, hide, remove guides and dimensions, zoom. Each button has its own icon and a keyboard shortcut.',
  'It speeds up the gestures you repeat constantly, avoiding menus and right-click. If a part of the bar is not useful to you, in Settings you hide the buttons you don\'t use.'
];
I18N_PLUGINS.en.start.main = [
  { t: 'Twenty commands in one bar', d: 'Groups and components, selection, visibility, guides and dimensions, zoom and more, divided by type.' },
  { t: 'Keyboard shortcuts', d: 'Each command has its own shortcut, and the full list opens with a button.' },
  { t: 'A bar of your own', d: 'Choose in Settings which buttons to show: the choice is remembered.' },
  { t: 'Undoable with Ctrl+Z', d: 'Each action on the model is a single operation, so you can go back in one step.' }
];
I18N_PLUGINS.en.start.how = [
  { t: 'The problem it solves', d: 'Many everyday operations, like creating a group, exploding, hiding, deleting guides and dimensions, need menus or a right-click every time. Removing guides or dimensions scattered through the model is tedious. robo start puts them in a single bar, with a button and a shortcut for each.' },
  { t: 'Step 1 · Turn on the toolbar', d: 'From the View › Toolbars menu turn on "robo start". The bar contains over twenty commands, each with its own icon.' },
  { t: 'The commands, grouped', d: 'Groups and components, explode, selection (all, invert, deselect), visibility, guides and dimensions, zoom and find the center: each function is a button. A single button removes all guides, another all dimensions.' },
  { t: 'Step 2 · Use the buttons or the shortcuts', d: 'Each command has a keyboard shortcut. The Shortcut List shows them all in a window with the list of commands, and in the code you can change them.' },
  { t: 'Step 3 · Customize the bar', d: 'From Settings choose which buttons to show and hide those you don\'t use. The choice is remembered the next time you open it.' },
  { t: 'Safe operations', d: 'Each action on the model is a single operation: if you don\'t like something, one Ctrl+Z undoes it.' },
  { t: 'A concrete example', d: 'You imported a plan full of guides and dimensions that bother you. Instead of looking for them one by one, you press the button that removes them all. Then you select some profiles, press the Create group button and keep working without opening a single menu. If you don\'t use dimensions, in Settings you hide the related buttons and the bar stays shorter.' }
];
I18N_PLUGINS.de.start = I18N_PLUGINS.de.start || {};
I18N_PLUGINS.de.start.intro = [
  'robo start ist eine Symbolleiste mit über zwanzig Schnellbefehlen für alltägliche Vorgänge: Gruppen und Komponenten erstellen, auflösen, auswählen, ausblenden, Hilfslinien und Bemaßungen entfernen, zoomen. Jede Schaltfläche hat ihr eigenes Symbol und eine Tastenkombination.',
  'Es beschleunigt die Handgriffe, die Sie ständig wiederholen, und erspart Menüs und Rechtsklick. Ist ein Teil der Leiste für Sie nicht nützlich, blenden Sie in den Einstellungen die nicht benutzten Schaltflächen aus.'
];
I18N_PLUGINS.de.start.main = [
  { t: 'Zwanzig Befehle in einer Leiste', d: 'Gruppen und Komponenten, Auswahl, Sichtbarkeit, Hilfslinien und Bemaßungen, Zoom und mehr, nach Typ gegliedert.' },
  { t: 'Tastenkombinationen', d: 'Jeder Befehl hat seine eigene Tastenkombination, und die vollständige Liste öffnet sich mit einer Schaltfläche.' },
  { t: 'Eine Leiste nach Maß', d: 'Wählen Sie in den Einstellungen, welche Schaltflächen angezeigt werden: Die Wahl wird gespeichert.' },
  { t: 'Mit Strg+Z rückgängig zu machen', d: 'Jede Aktion am Modell ist ein einziger Vorgang, sodass Sie in einem Schritt zurückgehen können.' }
];
I18N_PLUGINS.de.start.how = [
  { t: 'Das Problem, das es löst', d: 'Viele alltägliche Vorgänge, wie eine Gruppe erstellen, auflösen, ausblenden, Hilfslinien und Bemaßungen löschen, brauchen jedes Mal Menüs oder einen Rechtsklick. Im Modell verstreute Hilfslinien oder Bemaßungen zu entfernen ist lästig. robo start fasst sie in einer Leiste zusammen, mit einer Schaltfläche und einer Tastenkombination für jede.' },
  { t: 'Schritt 1 · Symbolleiste einschalten', d: 'Schalten Sie über das Menü Ansicht › Symbolleisten „robo start“ ein. Die Leiste enthält über zwanzig Befehle, jeder mit eigenem Symbol.' },
  { t: 'Die Befehle, gruppiert', d: 'Gruppen und Komponenten, Auflösen, Auswahl (alles, umkehren, abwählen), Sichtbarkeit, Hilfslinien und Bemaßungen, Zoom und Mittelpunkt finden: Jede Funktion ist eine Schaltfläche. Eine einzige Schaltfläche entfernt alle Hilfslinien, eine andere alle Bemaßungen.' },
  { t: 'Schritt 2 · Schaltflächen oder Tastenkombinationen nutzen', d: 'Jeder Befehl hat eine Tastenkombination. Die Shortcut List zeigt sie alle in einem Fenster mit der Liste der Befehle, und im Code können Sie sie ändern.' },
  { t: 'Schritt 3 · Leiste anpassen', d: 'Wählen Sie in den Einstellungen, welche Schaltflächen angezeigt werden, und blenden Sie die nicht benutzten aus. Die Wahl wird beim nächsten Öffnen wiederhergestellt.' },
  { t: 'Sichere Vorgänge', d: 'Jede Aktion am Modell ist ein einziger Vorgang: Gefällt Ihnen etwas nicht, macht ein Strg+Z es rückgängig.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie haben einen Plan importiert, voller Hilfslinien und Bemaßungen, die stören. Statt sie einzeln zu suchen, klicken Sie auf die Schaltfläche, die alle entfernt. Dann wählen Sie einige Profile aus, klicken auf Gruppe erstellen und arbeiten weiter, ohne ein einziges Menü zu öffnen. Nutzen Sie keine Bemaßungen, blenden Sie in den Einstellungen die zugehörigen Schaltflächen aus, und die Leiste bleibt kürzer.' }
];
I18N_PLUGINS.fr.start = I18N_PLUGINS.fr.start || {};
I18N_PLUGINS.fr.start.intro = [
  'robo start est une barre avec plus de vingt commandes rapides pour les opérations de tous les jours : créer des groupes et composants, exploser, sélectionner, masquer, supprimer guides et cotes, zoomer. Chaque bouton a son icône et un raccourci clavier.',
  'Elle accélère les gestes que vous répétez en permanence, en évitant menus et clic droit. Si une partie de la barre ne vous sert pas, dans les Réglages vous masquez les boutons que vous n\'utilisez pas.'
];
I18N_PLUGINS.fr.start.main = [
  { t: 'Vingt commandes dans une barre', d: 'Groupes et composants, sélection, visibilité, guides et cotes, zoom et plus encore, répartis par type.' },
  { t: 'Raccourcis clavier', d: 'Chaque commande a son raccourci, et la liste complète s\'ouvre avec un bouton.' },
  { t: 'Une barre sur mesure', d: 'Choisissez dans les Réglages les boutons à afficher : le choix est mémorisé.' },
  { t: 'Annulable avec Ctrl+Z', d: 'Chaque action sur le modèle est une seule opération, vous pouvez donc revenir en arrière en une étape.' }
];
I18N_PLUGINS.fr.start.how = [
  { t: 'Le problème qu\'il résout', d: 'De nombreuses opérations quotidiennes, comme créer un groupe, exploser, masquer, supprimer guides et cotes, demandent des menus ou un clic droit à chaque fois. Supprimer les guides ou cotes éparpillés dans le modèle est fastidieux. robo start les réunit dans une seule barre, avec un bouton et un raccourci pour chacune.' },
  { t: 'Étape 1 · Activez la barre', d: 'Dans le menu Affichage › Barres d\'outils, activez « robo start ». La barre contient plus de vingt commandes, chacune avec son icône.' },
  { t: 'Les commandes, regroupées', d: 'Groupes et composants, explosion, sélection (tout, inverser, désélectionner), visibilité, guides et cotes, zoom et recherche du centre : chaque fonction est un bouton. Un seul bouton supprime tous les guides, un autre toutes les cotes.' },
  { t: 'Étape 2 · Utilisez les boutons ou les raccourcis', d: 'Chaque commande a un raccourci clavier. La Shortcut List les montre tous dans une fenêtre avec la liste des commandes, et dans le code vous pouvez les changer.' },
  { t: 'Étape 3 · Personnalisez la barre', d: 'Dans les Réglages, choisissez les boutons à afficher et masquez ceux que vous n\'utilisez pas. Le choix est mémorisé à la prochaine ouverture.' },
  { t: 'Opérations sûres', d: 'Chaque action sur le modèle est une seule opération : si quelque chose ne vous plaît pas, un Ctrl+Z l\'annule.' },
  { t: 'Un exemple concret', d: 'Vous avez importé un plan plein de guides et de cotes qui vous gênent. Au lieu de les chercher une à une, vous appuyez sur le bouton qui les supprime toutes. Puis vous sélectionnez des profils, appuyez sur le bouton Créer un groupe et continuez à travailler sans ouvrir un seul menu. Si vous n\'utilisez pas les cotes, dans les Réglages vous masquez les boutons correspondants et la barre reste plus courte.' }
];
I18N_PLUGINS.es.start = I18N_PLUGINS.es.start || {};
I18N_PLUGINS.es.start.intro = [
  'robo start es una barra con más de veinte comandos rápidos para las operaciones de cada día: crear grupos y componentes, explotar, seleccionar, ocultar, borrar guías y cotas, hacer zoom. Cada botón tiene su icono y un atajo de teclado.',
  'Acelera los gestos que repites continuamente, evitando menús y clic derecho. Si una parte de la barra no te sirve, en Ajustes ocultas los botones que no usas.'
];
I18N_PLUGINS.es.start.main = [
  { t: 'Veinte comandos en una barra', d: 'Grupos y componentes, selección, visibilidad, guías y cotas, zoom y más, divididos por tipo.' },
  { t: 'Atajos de teclado', d: 'Cada comando tiene su atajo, y la lista completa se abre con un botón.' },
  { t: 'Una barra a tu medida', d: 'Elige en Ajustes qué botones mostrar: la elección se recuerda.' },
  { t: 'Anulable con Ctrl+Z', d: 'Cada acción sobre el modelo es una sola operación, así puedes volver atrás en un paso.' }
];
I18N_PLUGINS.es.start.how = [
  { t: 'El problema que resuelve', d: 'Muchas operaciones de cada día, como crear un grupo, explotar, ocultar, borrar guías y cotas, requieren menús o clic derecho cada vez. Quitar las guías o cotas dispersas por el modelo es tedioso. robo start las reúne en una sola barra, con un botón y un atajo para cada una.' },
  { t: 'Paso 1 · Activa la barra', d: 'En el menú Ver › Barras de herramientas activa «robo start». La barra contiene más de veinte comandos, cada uno con su icono.' },
  { t: 'Los comandos, agrupados', d: 'Grupos y componentes, explosión, selección (todo, invertir, deseleccionar), visibilidad, guías y cotas, zoom y búsqueda del centro: cada función es un botón. Un solo botón quita todas las guías, otro todas las cotas.' },
  { t: 'Paso 2 · Usa los botones o los atajos', d: 'Cada comando tiene un atajo de teclado. La Shortcut List los muestra todos en una ventana con la lista de comandos, y en el código puedes cambiarlos.' },
  { t: 'Paso 3 · Personaliza la barra', d: 'En Ajustes elige qué botones mostrar y oculta los que no usas. La elección se recuerda la próxima vez que abras.' },
  { t: 'Operaciones seguras', d: 'Cada acción sobre el modelo es una sola operación: si algo no te gusta, un Ctrl+Z lo deshace.' },
  { t: 'Un ejemplo concreto', d: 'Has importado una planta llena de guías y cotas que te molestan. En lugar de buscarlas una a una, pulsas el botón que las quita todas. Luego seleccionas unos perfiles, pulsas el botón Crear grupo y sigues trabajando sin abrir un solo menú. Si no usas cotas, en Ajustes ocultas los botones relacionados y la barra queda más corta.' }
];
I18N_PLUGINS.en.tangent = I18N_PLUGINS.en.tangent || {};
I18N_PLUGINS.en.tangent.intro = [
  'robo Tangent draws the tangent line between two circles or arcs, or between a circle and a line. A tangent is the line that grazes the curve at a single point, without crossing it.',
  'It is useful when drawing profiles, gears, pulleys, belts, road layouts and any shape where a line must join a curve precisely. With SketchUp\'s tools alone, finding that exact point is not possible.'
];
I18N_PLUGINS.en.tangent.main = [
  { t: 'Exact calculation', d: 'The contact point is calculated with geometry, not by eye.' },
  { t: 'All solutions in preview', d: 'Between two circles up to four tangents exist: you see them and choose the right one by moving the mouse.' },
  { t: 'Protection from errors', d: 'If the two elements are not on the same plane, the tool warns you instead of drawing a wrong line.' },
  { t: 'Precision of your choice', d: 'You can use the exact point or snap to the real vertex of the curve, useful when the circle is made of segments.' }
];
I18N_PLUGINS.en.tangent.how = [
  { t: 'The problem it solves', d: 'A tangent is the line that grazes a curve at a single point, without crossing it. With SketchUp\'s inferences alone it is impossible to find it exactly between two circles. Also, SketchUp\'s curves are polygons: an "exact" tangent may never touch the curve. robo Tangent calculates the tangent point for you.' },
  { t: 'Step 1 · Choose the two elements', d: 'Start robo Tangent and move over the elements: they light up yellow. Click the first (it turns red) and the second (it turns blue). They can be two circles, two arcs, or a circle and a segment.' },
  { t: 'Calculation with geometry', d: 'Tangents are calculated analytically, not "by eye". For two circles up to four solutions exist: two external and two internal. For a circle and a segment, two are found for each end.' },
  { t: 'Step 2 · Choose the tangent in the preview', d: 'The possible solutions appear in preview: the one closest to the cursor is green, the others stay gray and dashed. By moving the mouse you choose the one you need.' },
  { t: 'Step 3 · Click to draw', d: 'A click draws the line and the tool starts again, ready for the next pair. ESC cancels the current choice; Ctrl+Z removes the last line drawn.' },
  { t: 'Protection from impossible cases', d: 'If the two elements are not on the same plane, the pair is rejected instead of producing a wrong line.' },
  { t: 'Precision of your choice', d: 'From Settings choose between "Exact", the mathematical point, and "Rounded", in which the line touches the real vertex of the polygonal curve: useful with circles made of segments, because the line really touches the curve.' },
  { t: 'A concrete example', d: 'You need to draw the belt connecting two pulleys of different diameter. You start robo Tangent, click the first pulley and then the second: the four possible tangents appear. You move the mouse toward the upper external one, which turns green, and click. Repeat for the lower tangent: the belt is complete and the lines really touch the circles.' }
];
I18N_PLUGINS.de.tangent = I18N_PLUGINS.de.tangent || {};
I18N_PLUGINS.de.tangent.intro = [
  'robo Tangent zeichnet die Tangente zwischen zwei Kreisen oder Bögen oder zwischen einem Kreis und einer Linie. Eine Tangente ist die Linie, die die Kurve in einem einzigen Punkt berührt, ohne sie zu kreuzen.',
  'Es ist nützlich beim Zeichnen von Profilen, Zahnrädern, Riemenscheiben, Riemen, Straßenverläufen und jeder Form, in der eine Linie präzise an eine Kurve anschließen muss. Mit den Werkzeugen von SketchUp allein lässt sich dieser exakte Punkt nicht finden.'
];
I18N_PLUGINS.de.tangent.main = [
  { t: 'Exakte Berechnung', d: 'Der Berührpunkt wird mit Geometrie berechnet, nicht nach Augenmaß.' },
  { t: 'Alle Lösungen in der Vorschau', d: 'Zwischen zwei Kreisen gibt es bis zu vier Tangenten: Sie sehen sie und wählen durch Bewegen der Maus die richtige.' },
  { t: 'Schutz vor Fehlern', d: 'Liegen die beiden Elemente nicht in derselben Ebene, warnt das Werkzeug, statt eine falsche Linie zu zeichnen.' },
  { t: 'Genauigkeit nach Wahl', d: 'Sie können den exakten Punkt verwenden oder am echten Eckpunkt der Kurve einrasten, nützlich, wenn der Kreis aus Segmenten besteht.' }
];
I18N_PLUGINS.de.tangent.how = [
  { t: 'Das Problem, das es löst', d: 'Eine Tangente ist die Linie, die eine Kurve in einem einzigen Punkt berührt, ohne sie zu kreuzen. Mit den Inferenzen von SketchUp allein ist es unmöglich, sie zwischen zwei Kreisen exakt zu finden. Außerdem sind SketchUp-Kurven Polygone: Eine „exakte“ Tangente berührt die Kurve womöglich nie. robo Tangent berechnet den Tangentenpunkt für Sie.' },
  { t: 'Schritt 1 · Die zwei Elemente wählen', d: 'Starten Sie robo Tangent und fahren Sie über die Elemente: Sie leuchten gelb auf. Klicken Sie das erste an (es wird rot) und das zweite (es wird blau). Es können zwei Kreise, zwei Bögen oder ein Kreis und ein Segment sein.' },
  { t: 'Berechnung mit Geometrie', d: 'Die Tangenten werden analytisch berechnet, nicht „nach Augenmaß“. Für zwei Kreise gibt es bis zu vier Lösungen: zwei äußere und zwei innere. Für einen Kreis und ein Segment gibt es zwei je Ende.' },
  { t: 'Schritt 2 · Tangente in der Vorschau wählen', d: 'Die möglichen Lösungen erscheinen in der Vorschau: Die dem Cursor nächste ist grün, die anderen bleiben grau und gestrichelt. Durch Bewegen der Maus wählen Sie die passende.' },
  { t: 'Schritt 3 · Zum Zeichnen klicken', d: 'Ein Klick zeichnet die Linie, und das Werkzeug beginnt von vorn, bereit für das nächste Paar. ESC bricht die laufende Wahl ab; Strg+Z entfernt die zuletzt gezeichnete Linie.' },
  { t: 'Schutz vor unmöglichen Fällen', d: 'Liegen die beiden Elemente nicht in derselben Ebene, wird das Paar abgelehnt, statt eine falsche Linie zu erzeugen.' },
  { t: 'Genauigkeit nach Wahl', d: 'Wählen Sie in den Einstellungen zwischen „Exakt“, dem mathematischen Punkt, und „Gerundet“, bei der die Linie den echten Eckpunkt der polygonalen Kurve berührt: nützlich bei Kreisen aus Segmenten, weil die Linie die Kurve wirklich berührt.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie müssen den Riemen zeichnen, der zwei Riemenscheiben mit unterschiedlichem Durchmesser verbindet. Sie starten robo Tangent, klicken die erste Scheibe an und dann die zweite: Die vier möglichen Tangenten erscheinen. Sie bewegen die Maus zur oberen äußeren, die grün wird, und klicken. Wiederholen Sie es für die untere Tangente: Der Riemen ist fertig, und die Linien berühren die Kreise wirklich.' }
];
I18N_PLUGINS.fr.tangent = I18N_PLUGINS.fr.tangent || {};
I18N_PLUGINS.fr.tangent.intro = [
  'robo Tangent dessine la tangente entre deux cercles ou arcs, ou entre un cercle et une ligne. Une tangente est la ligne qui effleure la courbe en un seul point, sans la traverser.',
  'Il sert pour le dessin de profils, d\'engrenages, de poulies, de courroies, de tracés de routes et de toute forme où une ligne doit se raccorder précisément à une courbe. Avec les seuls outils de SketchUp, trouver ce point exact n\'est pas possible.'
];
I18N_PLUGINS.fr.tangent.main = [
  { t: 'Calcul exact', d: 'Le point de contact est calculé avec la géométrie, pas à l\'œil.' },
  { t: 'Toutes les solutions en aperçu', d: 'Entre deux cercles, il existe jusqu\'à quatre tangentes : vous les voyez et choisissez la bonne en déplaçant la souris.' },
  { t: 'Protection contre les erreurs', d: 'Si les deux éléments ne sont pas dans le même plan, l\'outil vous prévient au lieu de dessiner une mauvaise ligne.' },
  { t: 'Précision au choix', d: 'Vous pouvez utiliser le point exact ou accrocher le vrai sommet de la courbe, utile quand le cercle est fait de segments.' }
];
I18N_PLUGINS.fr.tangent.how = [
  { t: 'Le problème qu\'il résout', d: 'Une tangente est la ligne qui effleure une courbe en un seul point, sans la traverser. Avec les seules inférences de SketchUp, il est impossible de la trouver exactement entre deux cercles. De plus, les courbes de SketchUp sont des polygones : une tangente « exacte » peut ne jamais toucher la courbe. robo Tangent calcule le point de tangence pour vous.' },
  { t: 'Étape 1 · Choisissez les deux éléments', d: 'Activez robo Tangent et passez sur les éléments : ils s\'allument en jaune. Cliquez sur le premier (il devient rouge) et sur le second (il devient bleu). Ce peuvent être deux cercles, deux arcs, ou un cercle et un segment.' },
  { t: 'Calcul avec la géométrie', d: 'Les tangentes sont calculées analytiquement, pas « à l\'œil ». Pour deux cercles, il existe jusqu\'à quatre solutions : deux extérieures et deux intérieures. Pour un cercle et un segment, on en trouve deux par extrémité.' },
  { t: 'Étape 2 · Choisissez la tangente en aperçu', d: 'Les solutions possibles apparaissent en aperçu : celle la plus proche du curseur est verte, les autres restent grises et en pointillés. En déplaçant la souris, vous choisissez celle qu\'il vous faut.' },
  { t: 'Étape 3 · Cliquez pour dessiner', d: 'Un clic dessine la ligne et l\'outil repart de zéro, prêt pour la paire suivante. ÉCHAP annule le choix en cours ; Ctrl+Z retire la dernière ligne dessinée.' },
  { t: 'Protection contre les cas impossibles', d: 'Si les deux éléments ne sont pas dans le même plan, la paire est rejetée au lieu de produire une ligne fausse.' },
  { t: 'Précision au choix', d: 'Dans les Réglages, choisissez entre « Exacte », le point mathématique, et « Arrondie », où la ligne touche le vrai sommet de la courbe polygonale : utile avec des cercles faits de segments, car la ligne touche vraiment la courbe.' },
  { t: 'Un exemple concret', d: 'Vous devez dessiner la courroie qui relie deux poulies de diamètres différents. Vous activez robo Tangent, cliquez sur la première poulie puis sur la seconde : les quatre tangentes possibles apparaissent. Vous déplacez la souris vers l\'extérieure supérieure, qui devient verte, et cliquez. Répétez pour la tangente inférieure : la courroie est complète et les lignes touchent vraiment les cercles.' }
];
I18N_PLUGINS.es.tangent = I18N_PLUGINS.es.tangent || {};
I18N_PLUGINS.es.tangent.intro = [
  'robo Tangent dibuja la tangente entre dos círculos o arcos, o entre un círculo y una línea. Una tangente es la línea que roza la curva en un solo punto, sin atravesarla.',
  'Sirve al dibujar perfiles, engranajes, poleas, correas, trazados de carreteras y cualquier forma donde una línea deba enlazar con precisión con una curva. Solo con las herramientas de SketchUp no es posible encontrar ese punto exacto.'
];
I18N_PLUGINS.es.tangent.main = [
  { t: 'Cálculo exacto', d: 'El punto de contacto se calcula con geometría, no a ojo.' },
  { t: 'Todas las soluciones en vista previa', d: 'Entre dos círculos existen hasta cuatro tangentes: las ves y eliges la correcta moviendo el ratón.' },
  { t: 'Protección contra errores', d: 'Si los dos elementos no están en el mismo plano, la herramienta avisa en lugar de dibujar una línea equivocada.' },
  { t: 'Precisión a elegir', d: 'Puedes usar el punto exacto o enganchar el vértice real de la curva, útil cuando el círculo está hecho de segmentos.' }
];
I18N_PLUGINS.es.tangent.how = [
  { t: 'El problema que resuelve', d: 'Una tangente es la línea que roza una curva en un solo punto, sin atravesarla. Solo con las inferencias de SketchUp es imposible encontrarla exactamente entre dos círculos. Además, las curvas de SketchUp son polígonos: una tangente «exacta» puede no tocar nunca la curva. robo Tangent calcula el punto de tangencia por ti.' },
  { t: 'Paso 1 · Elige los dos elementos', d: 'Activa robo Tangent y pasa sobre los elementos: se iluminan en amarillo. Haz clic en el primero (se vuelve rojo) y en el segundo (se vuelve azul). Pueden ser dos círculos, dos arcos, o un círculo y un segmento.' },
  { t: 'Cálculo con la geometría', d: 'Las tangentes se calculan analíticamente, no «a ojo». Para dos círculos existen hasta cuatro soluciones: dos externas y dos internas. Para un círculo y un segmento se encuentran dos por cada extremo.' },
  { t: 'Paso 2 · Elige la tangente en la vista previa', d: 'Las soluciones posibles aparecen en vista previa: la más cercana al cursor es verde, las demás quedan grises y discontinuas. Moviendo el ratón eliges la que necesitas.' },
  { t: 'Paso 3 · Haz clic para dibujar', d: 'Un clic dibuja la línea y la herramienta vuelve a empezar, lista para la pareja siguiente. ESC cancela la elección en curso; Ctrl+Z quita la última línea dibujada.' },
  { t: 'Protección contra casos imposibles', d: 'Si los dos elementos no están en el mismo plano, la pareja se rechaza en lugar de producir una línea errónea.' },
  { t: 'Precisión a elegir', d: 'En Ajustes elige entre «Exacta», el punto matemático, y «Redondeada», en la que la línea toca el vértice real de la curva poligonal: útil con círculos hechos de segmentos, porque la línea toca de verdad la curva.' },
  { t: 'Un ejemplo concreto', d: 'Tienes que dibujar la correa que une dos poleas de diámetro distinto. Activas robo Tangent, haces clic en la primera polea y luego en la segunda: aparecen las cuatro tangentes posibles. Mueves el ratón hacia la externa superior, que se vuelve verde, y haces clic. Repite para la tangente inferior: la correa está completa y las líneas tocan de verdad los círculos.' }
];
I18N_PLUGINS.en.uplevel = I18N_PLUGINS.en.uplevel || {};
I18N_PLUGINS.en.uplevel.intro = [
  'robo Uplevel takes objects out of the group or component they are in, one level up, without moving them in space. They stay exactly where they are: only their position in the hierarchy changes.',
  'It is useful when, working inside a group, you realize some elements should be outside. The normal method, cut and paste in place, takes more steps and can pick the wrong level in nested groups.'
];
I18N_PLUGINS.en.uplevel.main = [
  { t: 'One click, one level up', d: 'You select the objects inside the group, press the button and they move to the parent container.' },
  { t: 'No movement', d: 'Position, rotation and scale of the objects stay identical.' },
  { t: 'Works in nested groups too', d: 'You always know where objects end up: one level at a time.' },
  { t: 'A single Ctrl+Z', d: 'If something goes wrong, you undo everything in one step.' }
];
I18N_PLUGINS.en.uplevel.how = [
  { t: 'The problem it solves', d: 'When you are inside a group and realize some elements should be outside, the normal method is cut, exit and "paste in place". It takes more steps, and with several nested levels it is easy to pick the wrong level or move the objects. robo Uplevel takes them to the upper level with a click, staying exactly where they are.' },
  { t: 'Step 1 · Enter and select', d: 'Enter the group or component for editing and select the objects to take out. If you are not inside a group, or have selected nothing, a message explains it.' },
  { t: 'Step 2 · Press the button', d: 'Press robo Uplevel (also available in robo start). The command starts from the open group or component and takes the objects to the container that holds it or, if it is the top level, to the model.' },
  { t: 'How it keeps the position', d: 'The objects pass through a temporary container that composes the transformation of the inner level with that of the outer level. The container is then exploded: no geometry moves, in position, rotation or scale.' },
  { t: 'One level at a time', d: 'Objects always go up exactly one level. With several nested levels you therefore know where they end up, and you can repeat the command to go up again.' },
  { t: 'A single undo', d: 'The whole operation is enclosed in a single step: one Ctrl+Z undoes it and, in case of error, everything goes back as before.' },
  { t: 'A concrete example', d: 'You are working inside the "Kitchen" group and notice that the sink, modeled in there, should actually be kept as a separate object in the "House" group. You select it, press robo Uplevel: the sink comes out one level, staying at the exact same position. Before, you needed cut, exit and paste in place, with the risk of getting it wrong.' }
];
I18N_PLUGINS.de.uplevel = I18N_PLUGINS.de.uplevel || {};
I18N_PLUGINS.de.uplevel.intro = [
  'robo Uplevel bringt Objekte aus der Gruppe oder Komponente, in der sie liegen, eine Ebene nach oben, ohne sie im Raum zu verschieben. Sie bleiben genau dort, wo sie sind: Nur ihre Position in der Hierarchie ändert sich.',
  'Es ist nützlich, wenn Sie beim Arbeiten in einer Gruppe merken, dass einige Elemente draußen sein sollten. Die normale Methode, Ausschneiden und an Originalposition einfügen, braucht mehr Schritte und kann in verschachtelten Gruppen die falsche Ebene treffen.'
];
I18N_PLUGINS.de.uplevel.main = [
  { t: 'Ein Klick, eine Ebene höher', d: 'Sie wählen die Objekte in der Gruppe aus, klicken auf die Schaltfläche, und sie wandern in den übergeordneten Container.' },
  { t: 'Keine Verschiebung', d: 'Position, Drehung und Skalierung der Objekte bleiben identisch.' },
  { t: 'Funktioniert auch in verschachtelten Gruppen', d: 'Sie wissen immer, wo die Objekte landen: eine Ebene nach der anderen.' },
  { t: 'Ein einziges Strg+Z', d: 'Geht etwas schief, machen Sie alles in einem Schritt rückgängig.' }
];
I18N_PLUGINS.de.uplevel.how = [
  { t: 'Das Problem, das es löst', d: 'Wenn Sie in einer Gruppe sind und merken, dass einige Elemente draußen sein sollten, ist die normale Methode Ausschneiden, verlassen und „an Originalposition einfügen“. Das braucht mehr Schritte, und bei mehreren verschachtelten Ebenen erwischt man leicht die falsche Ebene oder verschiebt die Objekte. robo Uplevel bringt sie mit einem Klick auf die obere Ebene, genau dort bleibend, wo sie sind.' },
  { t: 'Schritt 1 · Betreten und auswählen', d: 'Betreten Sie die Gruppe oder Komponente zum Bearbeiten und wählen Sie die herauszunehmenden Objekte aus. Sind Sie nicht in einer Gruppe oder haben nichts ausgewählt, erklärt es eine Meldung.' },
  { t: 'Schritt 2 · Schaltfläche drücken', d: 'Drücken Sie robo Uplevel (auch in robo start verfügbar). Der Befehl geht von der geöffneten Gruppe oder Komponente aus und bringt die Objekte in den Container, der sie enthält, oder, auf der obersten Ebene, ins Modell.' },
  { t: 'Wie die Position erhalten bleibt', d: 'Die Objekte durchlaufen einen temporären Container, der die Transformation der inneren Ebene mit der der äußeren Ebene verrechnet. Der Container wird anschließend aufgelöst: Keine Geometrie verschiebt sich, weder in Position noch Drehung noch Skalierung.' },
  { t: 'Eine Ebene nach der anderen', d: 'Die Objekte steigen immer genau eine Ebene auf. Bei mehreren verschachtelten Ebenen wissen Sie so, wo sie landen, und können den Befehl wiederholen, um weiter aufzusteigen.' },
  { t: 'Ein einziges Rückgängig', d: 'Der gesamte Vorgang ist in einem einzigen Schritt gekapselt: Ein Strg+Z macht ihn rückgängig, und bei einem Fehler ist alles wie zuvor.' },
  { t: 'Ein konkretes Beispiel', d: 'Sie arbeiten in der Gruppe „Küche“ und merken, dass die Spüle, die dort modelliert wurde, eigentlich als eigenes Objekt in der Gruppe „Haus“ bleiben soll. Sie wählen sie aus und drücken robo Uplevel: Die Spüle kommt eine Ebene heraus und bleibt an exakt derselben Position. Früher brauchten Sie Ausschneiden, verlassen und an Originalposition einfügen, mit dem Risiko, es falsch zu machen.' }
];
I18N_PLUGINS.fr.uplevel = I18N_PLUGINS.fr.uplevel || {};
I18N_PLUGINS.fr.uplevel.intro = [
  'robo Uplevel fait sortir des objets du groupe ou composant où ils se trouvent, d\'un niveau vers le haut, sans les déplacer dans l\'espace. Ils restent exactement où ils sont : seule leur position dans la hiérarchie change.',
  'Il sert quand, en travaillant dans un groupe, vous vous apercevez que certains éléments devraient être à l\'extérieur. La méthode normale, couper puis coller sur place, demande plus d\'étapes et peut se tromper de niveau dans des groupes imbriqués.'
];
I18N_PLUGINS.fr.uplevel.main = [
  { t: 'Un clic, un niveau plus haut', d: 'Vous sélectionnez les objets dans le groupe, appuyez sur le bouton et ils passent au conteneur parent.' },
  { t: 'Aucun déplacement', d: 'Position, rotation et échelle des objets restent identiques.' },
  { t: 'Fonctionne aussi dans les groupes imbriqués', d: 'Vous savez toujours où finissent les objets : un niveau à la fois.' },
  { t: 'Un seul Ctrl+Z', d: 'Si quelque chose ne va pas, vous annulez tout en une étape.' }
];
I18N_PLUGINS.fr.uplevel.how = [
  { t: 'Le problème qu\'il résout', d: 'Quand vous êtes dans un groupe et vous apercevez que certains éléments devraient être à l\'extérieur, la méthode normale est couper, sortir puis « coller sur place ». Cela demande plus d\'étapes, et avec plusieurs niveaux imbriqués, il est facile de se tromper de niveau ou de déplacer les objets. robo Uplevel les amène au niveau supérieur d\'un clic, en restant exactement où ils sont.' },
  { t: 'Étape 1 · Entrez et sélectionnez', d: 'Entrez dans le groupe ou composant pour l\'éditer et sélectionnez les objets à sortir. Si vous n\'êtes pas dans un groupe ou n\'avez rien sélectionné, un message vous l\'explique.' },
  { t: 'Étape 2 · Appuyez sur le bouton', d: 'Appuyez sur robo Uplevel (aussi disponible dans robo start). La commande part du groupe ou composant ouvert et amène les objets dans le conteneur qui le contient ou, au niveau le plus haut, dans le modèle.' },
  { t: 'Comment il conserve la position', d: 'Les objets passent par un conteneur temporaire qui compose la transformation du niveau interne avec celle du niveau externe. Le conteneur est ensuite explosé : aucune géométrie ne bouge, ni en position, ni en rotation, ni en échelle.' },
  { t: 'Un niveau à la fois', d: 'Les objets montent toujours d\'exactement un niveau. Avec plusieurs niveaux imbriqués, vous savez ainsi où ils finissent, et pouvez répéter la commande pour monter encore.' },
  { t: 'Une seule annulation', d: 'Toute l\'opération est enfermée en une seule étape : un Ctrl+Z l\'annule et, en cas d\'erreur, tout revient comme avant.' },
  { t: 'Un exemple concret', d: 'Vous travaillez dans le groupe « Cuisine » et remarquez que l\'évier, modélisé là-dedans, doit en fait rester un objet à part dans le groupe « Maison ». Vous le sélectionnez, appuyez sur robo Uplevel : l\'évier sort d\'un niveau, en restant exactement à la même position. Avant, il fallait couper, sortir et coller sur place, au risque de se tromper.' }
];
I18N_PLUGINS.es.uplevel = I18N_PLUGINS.es.uplevel || {};
I18N_PLUGINS.es.uplevel.intro = [
  'robo Uplevel saca objetos del grupo o componente en el que están, un nivel hacia arriba, sin moverlos en el espacio. Se quedan exactamente donde están: solo cambia su posición en la jerarquía.',
  'Sirve cuando, trabajando dentro de un grupo, te das cuenta de que algunos elementos deberían estar fuera. El método normal, cortar y pegar en el sitio, requiere más pasos y puede equivocarse de nivel en grupos anidados.'
];
I18N_PLUGINS.es.uplevel.main = [
  { t: 'Un clic, un nivel más arriba', d: 'Seleccionas los objetos dentro del grupo, pulsas el botón y pasan al contenedor superior.' },
  { t: 'Sin desplazamiento', d: 'Posición, rotación y escala de los objetos permanecen idénticas.' },
  { t: 'Funciona también en grupos anidados', d: 'Sabes siempre dónde acaban los objetos: un nivel cada vez.' },
  { t: 'Un solo Ctrl+Z', d: 'Si algo sale mal, lo deshaces todo en un paso.' }
];
I18N_PLUGINS.es.uplevel.how = [
  { t: 'El problema que resuelve', d: 'Cuando estás dentro de un grupo y te das cuenta de que algunos elementos deberían estar fuera, el método normal es cortar, salir y «pegar en el sitio». Son más pasos, y con varios niveles anidados es fácil equivocarse de nivel o mover los objetos. robo Uplevel los lleva al nivel superior con un clic, quedándose exactamente donde están.' },
  { t: 'Paso 1 · Entra y selecciona', d: 'Entra en el grupo o componente para editarlo y selecciona los objetos a sacar. Si no estás dentro de un grupo, o no has seleccionado nada, un mensaje te lo explica.' },
  { t: 'Paso 2 · Pulsa el botón', d: 'Pulsa robo Uplevel (disponible también en robo start). El comando parte del grupo o componente abierto y lleva los objetos al contenedor que lo contiene o, si es el nivel más alto, al modelo.' },
  { t: 'Cómo mantiene la posición', d: 'Los objetos pasan por un contenedor temporal que compone la transformación del nivel interno con la del nivel externo. El contenedor se explota después: ninguna geometría se mueve, ni en posición, ni en rotación, ni en escala.' },
  { t: 'Un nivel cada vez', d: 'Los objetos suben siempre exactamente un nivel. Con varios niveles anidados sabes así dónde acaban, y puedes repetir el comando para subir más.' },
  { t: 'Un solo deshacer', d: 'Toda la operación está encerrada en un único paso: un Ctrl+Z la deshace y, en caso de error, todo vuelve a como estaba.' },
  { t: 'Un ejemplo concreto', d: 'Estás trabajando dentro del grupo «Cocina» y notas que el fregadero, modelado allí dentro, en realidad debe mantenerse como objeto aparte en el grupo «Casa». Lo seleccionas, pulsas robo Uplevel: el fregadero sale un nivel, quedándose en exactamente la misma posición. Antes hacía falta cortar, salir y pegar en el sitio, con el riesgo de equivocarse.' }
];

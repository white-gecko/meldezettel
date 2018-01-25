## Allgemein

- verwendete Technologien: Docker, Vue.js, Vuex, Vue/router, webpack,
Element-UI
- Docker sollte installiert sein
- beim ersten Mal install.sh ausführen
- danach: um website errichbar zu machen mit Container verbinden
und run.sh ausführen (siehe readme, unter 'docker exec')
- website über localhost:8080 erreichbar
- website wird nach Änderungen automatisch neu geladen
- Quelltext für frontend und backend in entsprechenden Unterorder
von src
- webpack enthält hier folgende Funktionalitäten, die für das Projekt genutzt werden: babel (transpiler für js), ESLint (überprüft Einhaltung gängiger Coding Conventionen), Testframework bereits integriert, Hot Module Replacement (Teile der website, die geändert wurden, werden automatisch neu geladen, so werden Ressourcen gespart, da nicht alles neu geladen wird)

## Speziell für das Vorprojekt

- Ausgehend von src/frontend:

- Dies ist das Arbeitsverzeichnis von webpack.
- Quelltext für das Frontend in Extra-Unterordner ./src
- Compilierte und minimierte Website liegt in ./dist
- Rest ist webpack-config und node-module (wird i.d.R. nie angefasst)

in ./src:

- Einstiegspunkt ist main.js, importiert nur Dinge
- App.vue ist Wrapper, muss nicht geändert werden (Existenz nur technische Gründe).
- Komponenten (Bauteile) liegen in ./components
- Globale Daten werden in Store (vuex) abgelegt (siehe ./store)
- In ./router/index.js wird festgelegt, wann welche Ansicht angezeigt wird
- Layout.vue: legt das Design der Seite fest (Header, Menüleiste).
- Hauptbereich: <router-view>, dadurch wird vom Router die passende
Komponente 'injiziert'
- ./assets enthält Bilder, Videos, ... (aktuell nur THW-Logo)
- Die Website wird (bis auf wenige begründete Ausnahmen) vor allem mit Elementen aus der Vue-Bibliothek Element-UI gebaut.

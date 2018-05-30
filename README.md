# Digitaler Vierfachvordruck für Meldezettel in einer Führungsstelle
## Einrichten der Entwicklungsumgebung - Docker

Das Projekt setzt voraus, dass Docker installiert ist. Installationsanleitung auf der [Dockerseite](https://docs.docker.com/engine/installation/).

Für die Installation des Docker Images für das Projekt reicht es, den Projekt-Ordner zu betreten und das Skript install.sh auszuführen:

```bash
cd Projekt
chmod +x install.sh
./install.sh
```
Das Skript erzeugt das Netzwerk und das Docker-Image für das Frontend.

Der Container, in dem das Frontend läuft, befindet sich ab sofort im Autostart. Das Frontend ist automatisch erreichbar.

Alternativ besteht bei der Installion die Möglichkeit keinen Autostart zu wählen, dann muss allerdings der Port manuell zugewiesen werden, z.B.:

```bash
docker run -p 8080:80 thw-frontend-dev
```

Beim installieren werden die benötigten Javascript-Module automatisch heruntergeladen (etwa 250MB).
Dies geschieht im Hintergrund und kann ein paar Minuten dauern.
Zusätzlich muss der Quitstore gestartet werden (siehe Abschnitt 'Quitstore')

Anschließend ist das Frontend unter

[http://localhost:8080](http://localhost:8080)

zu erreichen.

## Einrichten der Entwicklungsumgebung - npm

Um die für die Anwendung notwendigen Packages zu installieren, muss der frontend Ordner _Projekt/src/frontend_ betreten werden .

```bash
cd Projekt/src/frontend
npm install
```

Danach kann das Frontend ausgeführt werden

```bash
npm run dev
```

Anschließend ist das Frontend unter

[http://localhost:8080](http://localhost:8080)

zu erreichen.

## Quistore

Der Quitstore wird lokal gestartet

```bash
cd Projekt
chmod +x quitstore.sh
./quitstore.sh
```

oder:

```bash
cd Projekt/src/frontend
npm run quit
```

Anschließend ist der Quitstore unter

[http://localhost:5000](http://localhost:5000)

zu erreichen.

## PDFRendering
Um das PDFRendering nutzen zu können ist ein latex-compiler nötig, empfohlen wird texlive(>=3.14159265-2.6-1.40.17), unter miktex kann es zu Problemen kommen.
Die Installation erfolgt am einfachsten über die jeweiligen offiziellen Paketquellen bspw. mit:
```bash
sudo apt-get install texlive texlive-lang-german texlive-doc-de texlive-latex-extra
```

Desweiteren wird python(>=3.53) benötigt, welches für die meisten unix Systeme vorinstalliert ist. Falls nicht ist auch hier die Installation über die offiziellen Paketquellen am einfachsten mit:
```bash
sudo apt-get install python3
```

Außerdem muss der renderServer gestartet werden, dies geschieht mit:
```bash
cd Projekt/src/renderPDF
python3 server.py
```


## Wichtig
thw
Auf gar keinen Fall darf der Ordner src/frontend/node_modules in das Repository gepusht werden. Dieser ist aber bereits in der .gitignore hinterlegt,
sodass man sich darüber keine Gedanken machen muss.


## Lizenz

Copyright (C) 2018 Softwaretechnik Projektgruppe NA17b (http://pcai042.informatik.uni-leipzig.de/~na17b/jekyll/team/)

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not, see http://www.gnu.org/licenses. Please see LICENSE for further information.

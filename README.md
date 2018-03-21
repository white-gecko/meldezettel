# Digitaler Vierfachvordruck für das THW
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

Anschließend ist der Quitstore unter

[http://localhost:5000](http://localhost:5000)

zu erreichen.

## Wichtig

Auf gar keinen Fall darf der Ordner src/frontend/node_modules in das Repository gepusht werden. Dieser ist aber bereits in der .gitignore hinterlegt,
sodass man sich darüber keine Gedanken machen muss.

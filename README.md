# Digitaler Vierfachvordruck für das THW
## Einrichten der Entwicklungsumgebung

Das Projekt setzt voraus, dass Docker installiert ist. Installationsanleitung auf der [Dockerseite](https://docs.docker.com/engine/installation/).

Für die Installation des Docker Images für das Projekt reicht es, den Projekt-Ordner zu betreten und das Skript install.sh auszuführen:

```bash
cd Projekt
chmod +x install.sh
./install.sh
```
Das Skript erzeugt das Netzwerk und das Docker-Image für das Frontend.

Der Container, in dem das Frontend läuft, befindet sich zwar ab sofort im Autostart, führt aber zunächst keinen Befehl aus und verbraucht
dementsprechend auch keine Ressourcen (bis auf ein paar MB RAM). Zum Starten des Frontend-Servers liegt ein Skript innerhalb des Containers bereit.
Dieses kann wie folgt ausgeführt werden:

```bash
docker exec -it thw-frontend-dev ./run.sh
```

Beim ersten Ausführen werden die benötigten Javascript-Module automatisch heruntergeladen (etwa 250MB). 
Dies geschieht im Hintergrund und kann ein paar Minuten dauern.

Anschließend ist das Frontend unter

[http://localhost:8080](http://localhost:8080)

zu erreichen.

## Wichtig

Auf gar keinen Fall darf der Ordner src/frontend/node_modules in das Repository gepusht werden. Dieser ist aber bereits in der .gitignore hinterlegt,
sodass man sich darüber keine Gedanken machen muss.

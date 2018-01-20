# Digitaler Vierfachvordruck für das THW
## Einrichten der Entwicklungsumgebung

Das Projekt verwendet Docker. Für die Installation reicht es den Projekt-Ordner zu betreten und das Skript install.sh auszuführen. Z.B.:

```bash
cd Projekt
chmod +x install.sh
./install.sh
```
Das Skript erzeugt das Netzwerk für die Docker Images und die Images selbst und aktiviert für diese den Autostart.

Beim ersten Ausführen werden die benötigten Javascript-Module automatisch heruntergeladen (etwa 250MB). Dies geschieht im Hintergrund und kann ein paar Minuten dauern.

Anschließend ist das Frontend unter

[http://localhost:8080](http://localhost:8080)

zu erreichen.

## Wichtig

Auf gar keinen Fall darf der Ordner src/frontend/node_modules sowie die Datei src/frontend/package-lock.json in das Repository gepusht werden. Diese sind aber bereits in der .gitignore hinterlegt, dass dies nicht aus Versehen passieren kann.

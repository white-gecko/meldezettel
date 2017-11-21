# Recherche zum SWT-Praktikum 'Lucas'
## Table of contents
1. [Begriffe](#begriffe)
    * Continuous Integration
2. [Aspekte](#aspekte)
    * Gitlab CI
    * Slack
3. [Quellen](#quellen)

## Begriffe <a name="begriffe"></a>
### Continuous Integration
Der Begriff Continuous Integration (CI) beschreibt eine Softwareentwicklungspraxis,
in der alle beteiligten Entwickler eines Projektes häufig (ein- bis mehrmals am Tag) ihren aktuellen
Arbeitsstand (meistens verwirklicht in einem dezidierten Branch) in dem Hauptstand
(Masterbranch) integrieren.

Um dieses Ziel zu erreichen werden meist folgende Tools im Entwicklungsprozess 
verwendet:

* Version Control System (z.B. Git)
* automatisierte Unit-Tests
* CI-Server (z.B. Travis CI)

Die direkten Vorteile der CI sind zum einen der minimale Integrationsaufwand sowie die fähigkeit, 
jederzeit eine stabile version veröffentlichen zu können.
Der minimale Integrationsaufwand ergibt sich durch die Häufigkeit,
mit der die Entwickler ihren Arbeitsstand integrieren. Durch die
Bedingung das vor jeder Integration alle automatisierten Testfälle ohne Fehlermeldungen durchlaufen
werden müssen ergibt sich ein relativ stabiler Hauptstand, der jederzeit als Grundlage für neue Features dienen kann.
Bugs die nicht durch Unit-Tests erkannt wurden und erst im release auffallen können dank der kompakten Natur kurzer
Integrationszyklen schnell erkannt und behoben werden.
Kommunikation ist insofern ein wichtiger Aspekt der CI, als dass jederzeit alle Entwickler den Zustand der Software
kennen können sollten. Hierbei hilft der Einsatz eine CI-Servers, der beispielsweise jederzeit wenn Code in den Hauptstand
integriert werden soll, den kompletten Build Prozess nachvollzieht, alle Tests durchlaufen lässt und entsprechend alle
auftauchenden Fehlermeldungen an das Team weitergibt.

## Aspekte <a name="aspekte"></a>
### Gitlab CI
Gitlab CI ist ein open-source Continuous Integration Service von Gitlab. Gitlab-CI ist vollständig in Gitlab integriert,
was es zu einer naheliegenden CI-Service Wahl für unser Projekt macht.
Gitlab-CI unterstützt:

* Parallele Build-Prozesse
* einfache Konfiguration über .gitlab-ci.yml
* Echtzeit Logging

### Slack
Slack ist ein webbasierter Instant-Messaging-Dienst des Unternehmens Slack Technologies zur Kommunikation innerhalb von Arbeitsgruppen. Slack erlaubt es gemeinsam oder mit Einzelpersonen zu chatten und Dokumente auszutauschen.
Die tatsache das der Dienst leicht über externe Apps (z.B. Polly, eine Poll-App) an die Anforderung der jeweiligen Gruppe angepasst
werden kann macht es zu einem mächtigen Kommunikationswerkzeug. Desweiteren ist es über Web-Hooks möglich, das externe Dienste wie z.B. Gitlab Eventnachrichten direkt an die Slack-Gruppe senden können. Das erlaubt es Slack als eine art zentralen Informations-Hub zu konfigurieren, in dem sich die Entwickler eine schnelle übersicht über den aktuellen Stand des Projektes machen können. 

### Quellen <a name="quellen"></a>
* *https://www.martinfowler.com/articles/continuousIntegration.html*
* *https://about.gitlab.com/features/gitlab-ci-cd/*
* *https://de.wikipedia.org/wiki/Slack_(Software)*

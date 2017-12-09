# **Protokoll 08. Dezember 2017**

Ort - P801  
Protokollführer - Lukas Gehrke
Start - 15:01
Ende - 16:23

### **Table of Contents**
1. [Anwesenheit](#Anwesenheit)
2. [Fragen aus dem letzten Meeting](#fragen-aus-dem-letzten-meeting)
3. [Agenda](#agenda)
4. [Nächstes Meeting](#nächstes-meeting)

### **Anwesenheit**
##### Team  
> Lucas Schons  
> Franz Ruge  
> Marc Wahsner  
> Elena Heier  
> Johannes Pfau  
> Anja Sieke  
> Max Schrodt  
> Lukas Gehrke  

##### Betreuer  
> Natanael Arndt  
> Fabian Niehoff  
  
  
### **Fragen aus dem letzten Meeting**

---------------

### **Agenda**

##### 1. Punkt: Besprechung des Lastenhefts mit Nathanael und Fabian
1.	Lieferumfang und Abnahmekriterien:
 
	*	Einfach und schnell bedienbar (in Notsituationen) abfragen und anzeigen der Nachrichten
	*	Wenig Klicks
 
	*	Aussehen so nah wie möglich an den Vorlagen
 
	*	QuitStore als BackEnd
 
	*	100% Test-Coverage; Continous Integration
 
 
	*	Frage: Abgrenzungen von Zielsetzung, Ausgangssituation usw.
 
Abnahmekriterien abstrakter formuliert
 
Konkret werden bei einzelnen Abnahmekriterien auf Funktionalität in der Praxis hin bezogen
 
2.	Log-In; Security-Aspekt
 
	*	Können weggelassen werden, der Fokus liegt auf dem Workflow und den Rollen ("Funker", "Arbeitsplatz 1-4", etc.)
 
	*	Ansichten abhängig von Rollen implmentieren
 
	*	Sperren: bestimmte Felder sollen in bestimmten Workflows gesperrt werden
 
3.	Juristische Nachvollziehbarkeit
 
	*	Jedes mal wenn eine Änderung gemacht wird, wird durch QuitStore eine neue Version erstellt
-> Nachvollziehbarkeit der Versionierung, dadurch relativ abgesichert
 
	*	Security/Verschlüsselung nicht vorrangig, da Operation auf einem lokalen System
Kein Extra-Aufwand hierfür, "Over-Engineered", höchstens als Extra On-Top
 
4.	Mehrere Personen bekommen die gleiche einkommende Nachricht; geben gleichzeitig die gleich Nachricht raus
 
	*	Relevant: in dem Moment, in dem eine Nachricht angeschaut wird, wird der Client aktualisiert und andere sehen, dass diese gerade schon bearbeitet/angesehen wird - Das müssen wir irgendwie implementieren
 
5.	Überprüfung, ob alles sinnvoll/schlüssig abgefasst wurde - Aufgabe des Sichter
 
	*	Funktion einbauen, dass der Workflow in diesem Fall in die andere Richtung laufen kann, das heißt, dass der Zettel zurück zum Abfasser geht, sodass dieser überarbeiten kann (inklusive einem Feedback, was geändert werden soll)
 
	*	Rollen:
	*	Leiter der Fernmeldezentrale
	*	Funker
	*	Sichter
	*	Platz 1 - 6 in der Fernmeldezentrale (S1 bis S6)
 
	*	Es wird nochmal betont, dass die Rolle des Sichters auch implementiert werden soll
 
	*	Konkret zu Feldern auf dem Vordruck
 
	*	Mehrfachauswahl bei Adressierung ist okay
	*	"Im Zweifelsfall ein bisschen flexibler, dann hat man mehr möglichekiten
	*	Blitz usw. - Häkchen, die mit implementiert werden sollen (evtl. in einer anderen Farbe)
 
	*	Beim ersten Review werden die Anforderungen präsentiert und es gibt Feedback von den Betreuern
 
	*	Daher wird die Besprechung der Anforderungen auf das erste Review verschoben
 
	*	Termin für das erste Review wird auf den 15.12.2017 um 15:00 Uhr in P801 festgelegt
 
 
6.	Anmerkung: SlideWiki
 
	*	Folien für das erste Review in SlideWiki
	*	NA schildert, wie das erste Review ablaufen wird
 
7.	Anforderungen
 
	*	Ein Absatz, mindestens 3 Sätze
 
8.	QuitStore mit einbauen, neue Anforderungen


##### 2. Punkt: Gruppenbesprechung

1.	Besprechung der Änderungen an den Anforderungen
 
 
2.	QuitStore - bei der Anforderung zu rechtlicher Validität wird ein Verweis auf QuitStore hinzugefügt
	*	Das Stichwort QuitStore soll bei Validierung und Archivierung mit auftauchen
 
3.	Der Teil zum Vorprojekt wird abgeändert, weniger Zugriffsrechte auf parallele Bearbeitungen
 
4.	Bis Sonntag-Abend sollen alle Parts fertig sein - Franz kümmert sich um das Aufsetzen und Managen des Head-Files
	*	Franz macht die Includes in das Head-File
 
5.	LS fügt QuitStore an den Recherchebericht an
 
6.	Kommen wir auf den geforderten Umfang?
 
	*	Maßnahmen zum Generieren von zusätzlichem Umfang: Use Cases schreiben
	*	DeadLine für die Erstellung des finalen Lastenbericht.tex - Sonntag 18:00Uhr
 
6.	LS fragt nach Mehraufwand, der nicht im Tracking enthalten ist
 
    *	LS betont, dass alle Team-Mitglieder das Time-Tracking einhalten
 
7.	Wird noch über die Programmiersprachen diskutiert?- Franz stellt zur Debatte, ob noch über Programmiersprachen geredet werden soll
 
	*	LS plädiert dafür, einen eigenen Termin für eine derartige Diskussion zu machen
 
8.	Thema Präsentation für das erste Review
 
	*	LS, LG, EH treffen sich am Donnerstag und arbeiten die Präsentation aus.


--------------

### **Nächstes Meeting**

* voraussichtliches Datum: 15.12.2017; 15:00 Uhr
* vorraussichtlicher Ort: P 801

### Zu besprechende Punkte

##### 1. Punkt: erstes Review

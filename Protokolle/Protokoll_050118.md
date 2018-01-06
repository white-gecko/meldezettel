# **Protokoll 05. Januar 2018**

Ort - P801      
Zeit - 15:00 - 17:00    
Protokollfuehrer - Johannes Pfau

### **Table of Contents**
1. [Anwesenheit](#Anwesenheit)
2. [Fragen aus dem letzten Meeting](#fragen-aus-dem-letzten-meeting)
3. [Agenda](#agenda)
4. [Naechstes Meeting](#naechstes-meeting)

### **Anwesenheit**
##### Team  
Lucas Schons  
Franz Ruge  
Marc Wahsner  
Elena Heier  
Johannes Pfau  
Lukas Gehrke  

##### Betreuer  
Natanael Arndt  
Fabian Niehoff  


### **Fragen aus dem letzten Meeting**
Welche Sprache soll die Dokumentation haben?  
* ist generell freigestellt  
* allerdings mit leichtem Bias zu deutsch, da THW deutsch  

---------------

### **Agenda**

##### Besprechung Projektplan
* Vorprojekt (25%)
	* landing page:
		* Auswahl der Rolle
	* detailed view:
		* für mind. eine Rolle
		* Erstellen eines Vierfachvordruckes
	* Uebersicht ueber alle erstellten Nachrichten
	* Konzept für digitalen Vierfachvordruck

* Ansichtenmodul (30%):
	* statische Sichten: (allgemeine Ansichten die für alle sichtbar sind)
		* landing page:
			* Auswahl der Rolle
			* Kürzelangabe

	* dynamische Sichten: (rollenspezifische Sichten)
		* detailed views:
			* History mit allen Nachrichten
			* Funker:
				* Nachrichten erstellen
				* Nachrichten empfangen
				* (Drucken?)
			
			* Sichter:
				* Nachrichten empfangen
				* Nachrichten weiterleiten
				* Nachrichten zurückweisen
				* (Notizen an Nachrichten schreiben?)

			* Sachbearbeiter:
				* Nachrichten erstellen
				* Nachrichten empfangen
				* Drucken

	 * Prozesschritt: (es muss erkennbar sein, in welchem Schritt sich der VVD befindet)
		* Farbe
		* Text, in welchem Zustand sich der VVD befindet
		* History des VVDs, welche Schritte er bereits durchlaufen hat (nicht immer sichtbar)

* Funktionalitätsmodul (5%):
	* Formatierung der Rohdaten, sodass sie in Form des VVDs gerendert werden können, bzw. gedruckt
	  werden können
	* (Hinzufügen neuer Rollen? Ganz neu? Nur neue Instanzen?)

* Datenbankmodul (30%) 
	* Daten einlesen, abspeichern, auslesen
	* Speichern über QuitStore
	* Auslesen über Sparql

* Optimierung (10%)
	* Debugging
	* Testen

* Erweiterung (tba)
	* Tool zum hinzufügen neuer Rollentypen
	* Benutzerhandbuch


##### Aufgaben
* Projektplan
	* Lukas - Vorprojekt, Ansichtenmodul
	* Franz - Funktionalitaesmodul, Optimierung
	* Lucas - Datenbankmodul, Erweiterung

* QSKonzept
	* Elena - Dokumentation
	* Marc - Testing
	* Johannes - QS

* Releaseplan
	* Anja - ...
	* Max - ...

##### Fragen
* Hardware: Test mir Hardware durchführen? Eigenes Modul in Projektplan?
* Gehört das, was wir bis jetzt gemacht haben zum Vorprojekt? Ueberhaupt in den Projektplan?
* Soll der Funker drucken können?
* Soll der Sichter Notizen an Nachrichten "heften" können?
* Sollen wir ganz neue Rollen hinzufügen können, oder nur neue Instanzen?

--------------

### **Naechstes Meeting**

* 12.01.2018
* P801
* 15h

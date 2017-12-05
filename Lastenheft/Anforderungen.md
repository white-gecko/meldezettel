## Nicht Funktional:  

### Verschiedene Accounts mit verschiedenen Rollen:  

Zum Zwecke der besseren Übersicht wäre die Aufteilung in verschiedene Accounts für die Rollen sinnvoll.  
Dabei kann gewährleistet werden, dass jeder nur das sieht was für ihn relevant ist. Was wiederum die Sicherheit erhöht,  
denn niemand kann etwas verändern, was er nicht auch verändern soll. Ob nun un beabsichtigt, oder nicht.  
Für die Umsetzung stehen verschiedene Möglichkeiten offen: 	
* Accounts mit Benutzername und Passwort.  
* Kein Login, sondern jeder wählt am Anfang lose seine Rolle aus.  
* Die Rollen werden fest bestimmten Geräten zugewiesen.  


### Datensicherheit muss gewährleistet sein (VFVD darf nicht zwischendurch verändert werden/Unverfälschlichkeit):  

Damit eine Archivierung der Vordrucke überhaupt sinnvoll ist, muss sichergestellt werden, dass sie von niemandem  
nachträglich verändert werden können. Ansonsten verliert das Archiv jegliche juristische Relevanz und damit auch den  
Sinn weshalb es angelegt wurde.  



## Funktional:  

### Visuelle Unterschiede für verschiedene Rollen:  

Die visuelle Representation orientiert sich an der Gestaltung des Vierfachvordrucks. Dabei wird vor Allem die Farbgebung weitergeführt,   
d.h. jede Ansicht wird thematisch in der Farbe des für sie relevanten Vordruckes gehalten. Jede Rolle bekommt ihre eigene Ansicht.  
Dies dient vor allem der Übersichtlichkeit und Einfachheit der benutzung, da jede Rolle somit nur das sieht, was sie auch wirklich brauch.  
Die Wahl der Rolle kann dabei über ein Menü am Anfang des Einsatzes ausgewählt werden, bzw. Accounts oder Geräten direkt zugewiesen werden.  


### Verschlüsselung  

Die Verschlüsselung muss nach einem standartisierten Verfahren ablaufen, damit juristische Integrität gewährleistet ist. 
Ansätze wären dabei z.B.:	

* Blockchain, d.h. jeder Datensatz ist mit dem Vorherigen kryptografisch verbunden und beweist dessen Richtigkeit. 
Somit können diese nicht mehr Verändert werden, ohne die Kette zu zerbrechen.

* Verschlüsselung angelehnt an die Git-History, d.h. jeder Datensatz hat einen Hash-Code, welcher auf dem aller zuvor erstellten
Hash-Codes basiert. Somit verändern sich auch automatisch alle darunter liegenden, falls man etwas verändert.

# Portfolio Website

Dieses Repository enthält die Portfolio-Website mit animierten Projektübersichten und Detailseiten.

## Projekt lokal starten
1. Stelle sicher, dass Python installiert ist.
2. Öffne ein Terminal im Projektordner und starte einen lokalen Server:
   ```bash
   python -m http.server 8000
   ```
3. Rufe im Browser `http://localhost:8000/index.html` auf. Beende den Server mit `Strg+C`.

## Änderungen rückgängig machen
Wenn du eine Datei wie `style.css` versehentlich geändert hast und wieder auf den letzten Commit zurücksetzen möchtest:
```bash
git checkout -- style.css
```
Oder, um alle lokalen Änderungen zu verwerfen:
```bash
git reset --hard HEAD
git clean -fd
```
> **Achtung:** Dadurch gehen ungespeicherte Änderungen verloren.

## Neuer Branch, Commit & Push
1. Ziehe den aktuellen Stand vom Remote:
   ```bash
   git fetch origin
   git pull
   ```
2. Erstelle einen neuen Branch für deine Änderung:
   ```bash
   git checkout -b feature/meine-aenderung
   ```
3. Nimm deine Änderungen vor und prüfe den Status:
   ```bash
   git status
   ```
4. Füge die geänderten Dateien hinzu und committe sie:
   ```bash
   git add .
   git commit -m "Beschreibe deine Änderung"
   ```
5. Push den Branch zu GitHub:
   ```bash
   git push -u origin feature/meine-aenderung
   ```

## Pull-Request erstellen
1. Öffne das Repository auf GitHub. Nach dem Push erscheint ein Hinweis, dass ein neuer Branch gepusht wurde.
2. Klicke auf **Compare & pull request** oder gehe zu **Pull requests → New pull request** und wähle deinen Branch als Quelle.
3. Ergänze Titel und Beschreibung, prüfe die Änderungen und klicke auf **Create pull request**.

## GitHub Pages aktualisieren
1. Merge deinen Branch in den Branch, der für GitHub Pages verwendet wird (z. B. `main`).
2. Warte, bis GitHub Pages den Build abgeschlossen hat (einige Minuten).
3. Öffne die URL `https://<username>.github.io/<repository>/`, um die aktualisierte Seite zu sehen.


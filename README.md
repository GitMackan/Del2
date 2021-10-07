# Moment 5 - Steg 2

## Lösning:
Denna uppgift har lösts genom att skapa en enklare webbsida som med hjälp av Fetch API hämtar data från webbtjänsten som skapades i steg 1 och skriver ut data (kurser i detta fall) från denna webbtjänst till hemsidan. Sidan har även ett formulär som man kan fylla i för att lägga till nya kurser direkt till sidans DOM. 

All kommunikation mellan sidan och vår webbtjänst har gjorts med JavaScript. I JavaScript-filen har tre funktioner skapats, för att hämta data, ta bort data och lägga till data från webbtjänsten. Dessa funktioner använder olika metoder för att kommunicera med webbtjänsten, GET, POST och DELETE. Get-metoden används i funktionen för att hämta data, POST-funktionen för att lägga till data och DELETE-funktionen för att radera data. 

### Webblänk till hemsida
https://studenter.miun.se/~many2005/dt173g/moment5-del2/api.php
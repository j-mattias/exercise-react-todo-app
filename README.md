# Projekt: En Enkel "To-Do"-Lista

## Översikt
Du ska bygga en enkel React-applikation med TypeScript där användare kan:
- Lägga till uppgifter i en lista.
- Markera uppgifter som utförda.
- Ta bort uppgifter från listan.

All logik kommer att hanteras inom en enda komponent, vilket gör det enklare att förstå.

## Uppgifter

### 1. Grundläggande Struktur
- Starta ett nytt React-projekt med TypeScript.
- Skapa en enkel `App.tsx`-fil där hela applikationen byggs.

### 2. Formulär för att Lägga till Uppgifter
- Skapa ett formulär i `App.tsx` där användaren kan mata in en uppgift (task).
- Använd `useState` för att hantera input-värdet (uppgiften).

### 3. Visa Uppgiftslistan
- När användaren lägger till en uppgift, lägg till den i en lista som visas på sidan.
- Varje uppgift ska kunna markeras som utförd och kunna tas bort från listan.

### 4. Markera som Utförd
- Lägg till en knapp bredvid varje uppgift för att markera den som utförd.
- När en uppgift markeras som utförd, kan texten ändras till exempelvis genomstruken stil.

### 5. Ta Bort Uppgifter
- Lägg till en knapp bredvid varje uppgift för att ta bort den från listan.

#### Möjlig tidsuppdelning

* Första timmen: Strukturera projektet, skapa input-fältet och implementera funktionaliteten för att lägga till uppgifter.
* Andra timmen: Lägg till visning av uppgifter och möjligheten att markera som utförd.
* Tredje timmen: Lägg till ta bort-funktionaliteten och finslipa gränssnittet med enklare stil.

#### Bonus (om tiden tillåter)

* Lägg till en räknare som visar hur många uppgifter som är kvar att göra.
* Lägg till en knapp för att rensa alla utförda uppgifter.

#### Lärdomar

* Grunderna i React (komponenter, state, eventhantering).
* Användning av TypeScript för att definiera typer och säkerställa typkontroll.
* Hantering av listor och enkel UI-interaktion.

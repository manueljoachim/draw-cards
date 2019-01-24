# DrawCards

When the page loads, all cards in the deck are displayed. Configure the filters to restrict the cards in the hand, then click the button to draw a new hand.

<i>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.</i>

## Installing dependencies
Run `npm install` to install the project dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

<hr>

## Backlog

<b>Add more Decks to draw from.</b>
<ul>
    <li>If there are 2 decks you could have 2 of the same card within one hand and a maximum of 104 cards in a hand size.</li>
    <li>If you have 3 decks  you could have 3 of the same card in a hand and a max of 156 cards in a hand</li>
</ul>
To make this functionality more user-friendly, we should introduce pagination.<br> 
We will do the filtering and shuffling based on the total number cards in the collection (e.g. 156). If the result after filtering exceeds 52, the subsequent cards will be displayed on page 2, 3, etc.

# vocative
NPM package repository for name-case switching JS algorithm.

## Usage

First, import necessary case switching methods:
```
import { getGenitive, getVocative } from 'vocative'
```

Then, when needed, call the necessary method and pass the name in nominative:

```
let vocativeOfTheName = getVocative("Ivan"); // Will return "Ivane"
```

There are six available methods, all with the same interface:
```
getGenitive("Ivan"); // Will return "Ivana"
getDative("Ivan"); // Will return "Ivanu"
getAccusative("Ivan"); // Will return "Ivana"
getVocative("Ivan"); // Will return "Ivane"
getInstrumental("Ivan"); // Will return "Ivanom"
getLocative("Ivan"); // Will return "Ivanu"
```
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Country List

Use AJAX and the component life cycle methods to list all the countries in the
world using the [REST Countries](https://restcountries.eu) API.

## Prerequisites

- React
- Components
- State and props
- The component life cycle methods

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.

## Requirements

### We do: Part 1: Build it

Make it so that when the page loads (`App.js`), a list of all the countries in
the world appears on the page. Use `fetch()` inside of `componentDidMount()` to
query the [REST Countries](https://restcountries.eu) API.

Use the endpoint labeled `all` to get a list of every country and its
properties.

```
  https://restcountries.eu/rest/v2/all
```

Here's a sample response of one country:

```json
[
  {
    "name": "Congo",
    "topLevelDomain": [".cg"],
    "alpha2Code": "CG",
    "alpha3Code": "COG",
    "callingCodes": ["242"],
    "capital": "Brazzaville",
    "altSpellings": ["CG", "Congo-Brazzaville"],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 4741000,
    "latlng": [-1, 15],
    "demonym": "Congolese",
    "area": 342000,
    "gini": 47.3,
    "timezones": ["UTC+01:00"],
    "borders": ["AGO", "CMR", "CAF", "COD", "GAB"],
    "nativeName": "République du Congo",
    "numericCode": "178",
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "ln",
        "iso639_2": "lin",
        "name": "Lingala",
        "nativeName": "Lingála"
      }
    ],
    "translations": {
      "de": "Kongo",
      "es": "Congo",
      "fr": "Congo",
      "ja": "コンゴ共和国",
      "it": "Congo",
      "br": "Congo",
      "pt": "Congo",
      "nl": "Congo [Republiek]",
      "hr": "Kongo",
      "fa": "کنگو"
    },
    "flag": "https://restcountries.eu/data/cog.svg",
    "regionalBlocs": [
      {
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika"
        ]
      }
    ],
    "cioc": "CGO"
  }
]
```

### You do: Part 2: Componentize it

Now put each country into its own component. Pass the name of the country in as
a prop. Render the entire list of countries.

### We do: Part 3: Clickify it

Add an event listener so that when a country is clicked, it makes another
request to search for the country by name. Using the response, display the
capital of that country below the country name.

For this part we'll use the search by name api endpoint:

```
https://restcountries.eu/rest/v2/name/{name}

example:

https://restcountries.eu/rest/v2/name/armenia
```


## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

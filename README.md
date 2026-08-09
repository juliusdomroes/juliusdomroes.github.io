# juliusdomroes.github.io

This repository contains a simple multilingual personal links page for Julius Domroes.

## Overview

The site is a static website built with HTML, CSS, and JavaScript. It provides:
- a German and an English version of the page
- social links and affiliate links
- automatic language-based redirect from the root page

## Project structure

- index.html: redirect page that sends visitors to the appropriate language version
- de/index.html: German version of the page
- en/index.html: English version of the page
- styles.css: shared styling for both language versions
- links-data.js: shared link data
- site.js: shared rendering logic for the links
- translations.js: shared translations for page text

## Local preview

Open the project in a browser directly, or serve it locally with a simple web server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deployment

The site is designed to be hosted on GitHub Pages.

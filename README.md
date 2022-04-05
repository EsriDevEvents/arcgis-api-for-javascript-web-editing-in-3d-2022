# Web Editing in 3D

This repository contains the Web Editing in 3D presentation and accompanying code samples that were shown at the Esri Developer Summit 2022. The presentation is created with reveal-md, featuring interactive samples for which the source code can be found in this repository.

## Presentation

[Live presentation: Web Editing in 3D](https://esridevsummit.github.io/DS2022-Web-Editing-in-3D/)

- Hugo Campos, Esri R&D Center Zürich
- Jesse van den Kieboom, Esri R&D Center Zürich

## Local setup

After cloning the repo, we need to install all the dependencies:

```bash
npm install
git submodule update --init --recursive
```

To compile everything and serve the files:

```bash
npm start
```

Vite will then start up and prepare itself for serving the presentatio at http://localhost:3000/.

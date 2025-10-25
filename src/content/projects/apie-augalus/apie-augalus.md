---
title: Apie augalus
date: 2024-08-15
users: ~1000 / mėn. naudotojų
url: https://apieaugalus.lt/
stack: ["WordPress", "WP / Theme", "WP / Plugin", "Tailwind", "REST API", "ChatGPT", "DeepL"]
screens:
  - image: ./apie-augalus-1.png
    alt: "Augalų sąrašas, suskirstytas pagal šeimas."
  - image: ./apie-augalus-2.png
    caption: "Augalo aprašymas"
    alt: "Vidinio įrašo (augalo) informacijos puslapis su nuotrauka ir faktais."
  - image: ./apie-augalus-3.png
    caption: "Augalo duomenys, perspėjimai"
    alt: "Augalo informacija: laistymas, kilmė, priežiūra."
  - image: ./apie-augalus-6.png
    caption: "Priežiūros klausimai-atsakymai"
    alt: "Monstera priežiūros instrukcija ir atsakymai (DUK)."
  - image: ./apie-augalus-7.png
    caption: "Augalų ligos"
    alt: "Ligų puslapis ir galerija."
  - image: ./apie-augalus-8.png
    caption: "Augalų ligų diagnozė, gydymas"
    alt: "Augalo ligos prevencijos ir kontrolės aprašymas."
  - image: ./apie-augalus-4.png
    caption: "Admin pusė – turinys"
    alt: "WordPress redaktorius, redaguojamas augalo aprašymas."
  - image: ./apie-augalus-5.png
    caption: "Admin pusė – duomenys"
    alt: "WordPress CPT laukai: pavadinimas, šeima, matmenys."
---

Duomenys iš [Perenual API](https://perenual.com/docs/api) periodiškai įkeliami į atskirą nuo WordPress DB → ChatGPT-4 patrumpina aprašymus, prideda nuorodas, patikrina tikslumą → administratorius peržiūri ir redaguoja → DeepL išverčia į lietuvių k. → rodoma per custom post type.

Naudojamas custom plugin (API, DB) ir custom theme (atvaizdavimui). Prioritetas SEO ir UX.
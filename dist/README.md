# DS2 Speedrun Tracker

Ein Dark Souls 2 Speedrun-Tracker gebaut mit Vue 3 + Vite.

## Features

- ⏱ **Timer** – Start, Pause und Reset mit Zentisekunden-Genauigkeit
- ⚡ **Punkte-System** – Boss-Punkte werden automatisch addiert, manuelle Punkte können hinzugefügt oder abgezogen werden
- ☠ **Boss-Panel** – Alle 23 Hauptbosse mit Checkboxen und individuellen Punktwerten
- 🔔 **Toast-Benachrichtigungen** – Erscheinen beim Besiegen eines Bosses

## Projektstruktur

```
src/
├── assets/
│   └── global.css          # Globale CSS-Variablen und geteilte Styles
├── components/
│   ├── TimerPanel.vue      # Timer-Komponente
│   ├── ScorePanel.vue      # Punkte-Komponente
│   ├── BossPanel.vue       # Boss-Checkliste
│   └── ToastContainer.vue  # Benachrichtigungen
├── App.vue                 # Hauptkomponente
└── main.js                 # Einstiegspunkt
```

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

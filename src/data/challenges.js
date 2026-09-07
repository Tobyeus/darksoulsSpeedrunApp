const ds1Categories = [
  {
    name: 'Kampfmeister',
    icon: '⚔️',
    challenges: [
      { id: 'd1c1', name: 'Unberührt', description: 'Besiege einen Boss ohne einen Treffer zu kassieren', points: 300, difficulty: 'hard' },
      { id: 'd1c2', name: 'Nackter Stahl', description: 'Besiege den Capra Demon ohne Rüstung zu tragen', points: 250, difficulty: 'hard' },
      { id: 'd1c3', name: 'Trank-Abstinenz', description: 'Besiege einen Boss ohne Estus Flask zu benutzen', points: 200, difficulty: 'medium' },
      { id: 'd1c4', name: 'Blitzsieger', description: 'Besiege einen Boss in unter 60 Sekunden', points: 150, difficulty: 'medium' },
    ],
  },
  {
    name: 'Erkunder',
    icon: '🗺️',
    challenges: [
      { id: 'd1e1', name: 'Schatzjäger', description: 'Öffne 10 Truhen in einer einzigen Zone', points: 100, difficulty: 'easy' },
      { id: 'd1e2', name: 'Geheimsucher', description: 'Finde 3 versteckte Wanddurchgänge', points: 150, difficulty: 'medium' },
      { id: 'd1e3', name: 'Leuchtfeuer-Hopper', description: 'Entzünde 10 Leuchtfeuer in unter 30 Minuten', points: 200, difficulty: 'medium' },
      { id: 'd1e4', name: 'Kurierläufer', description: 'Erreiche Firelink Shrine in unter 5 Minuten nach Spielstart', points: 100, difficulty: 'easy' },
    ],
  },
  {
    name: 'Seelen-Magnat',
    icon: '💀',
    challenges: [
      { id: 'd1s1', name: 'Seelen-Millionär', description: 'Sammle 50.000 Seelen ohne auszugeben', points: 200, difficulty: 'medium' },
      { id: 'd1s2', name: 'Kein Verlust', description: 'Stirb nicht ein einziges Mal in einer Stunde', points: 350, difficulty: 'hard' },
      { id: 'd1s3', name: 'Seelenfresser', description: 'Töte 50 Gegner ohne zu sterben', points: 150, difficulty: 'easy' },
    ],
  },
  {
    name: 'Speedster',
    icon: '⚡',
    challenges: [
      { id: 'd1sp1', name: 'Doppelschlag', description: 'Besiege 2 Bosse innerhalb von 15 Minuten', points: 250, difficulty: 'hard' },
      { id: 'd1sp2', name: 'No-Buy-Run', description: 'Kaufe nichts beim Händler in der ersten Stunde', points: 100, difficulty: 'easy' },
      { id: 'd1sp3', name: 'Dreierlei', description: 'Besiege 3 Bosse in unter 45 Minuten', points: 300, difficulty: 'hard' },
      { id: 'd1sp4', name: 'Stufen-Sprinter', description: 'Erreiche Stufe 20 in unter 30 Minuten', points: 150, difficulty: 'medium' },
    ],
  },
]

const ds2Categories = [
  {
    name: 'Kampfmeister',
    icon: '⚔️',
    challenges: [
      { id: 'c1', name: 'Unberührt', description: 'Besiege einen Boss ohne einen Treffer zu kassieren', points: 300, difficulty: 'hard' },
      { id: 'c2', name: 'Nackter Stahl', description: 'Besiege The Pursuer ohne Rüstung zu tragen', points: 250, difficulty: 'hard' },
      { id: 'c3', name: 'Trank-Abstinenz', description: 'Besiege einen Boss ohne Estus Flask zu benutzen', points: 200, difficulty: 'medium' },
      { id: 'c4', name: 'Blitzsieger', description: 'Besiege einen Boss in unter 60 Sekunden', points: 150, difficulty: 'medium' },
    ],
  },
  {
    name: 'Erkunder',
    icon: '🗺️',
    challenges: [
      { id: 'e1', name: 'Schatzjäger', description: 'Öffne 10 Truhen in einer einzigen Zone', points: 100, difficulty: 'easy' },
      { id: 'e2', name: 'Geheimsucher', description: 'Finde 3 versteckte Wanddurchgänge', points: 150, difficulty: 'medium' },
      { id: 'e3', name: 'Bonfire-Hopper', description: 'Zünde 10 Lagerfeuer in unter 30 Minuten an', points: 200, difficulty: 'medium' },
      { id: 'e4', name: 'Kurierläufer', description: 'Erreiche Majula in unter 5 Minuten nach Spielstart', points: 100, difficulty: 'easy' },
    ],
  },
  {
    name: 'Seelen-Magnat',
    icon: '💀',
    challenges: [
      { id: 's1', name: 'Seelen-Millionär', description: 'Sammle 100.000 Seelen ohne auszugeben', points: 200, difficulty: 'medium' },
      { id: 's2', name: 'Kein Verlust', description: 'Stirb nicht ein einziges Mal in einer Stunde', points: 350, difficulty: 'hard' },
      { id: 's3', name: 'Seelenfresser', description: 'Töte 50 Gegner ohne zu sterben', points: 150, difficulty: 'easy' },
    ],
  },
  {
    name: 'Speedster',
    icon: '⚡',
    challenges: [
      { id: 'sp1', name: 'Doppelschlag', description: 'Besiege 2 Bosse innerhalb von 15 Minuten', points: 250, difficulty: 'hard' },
      { id: 'sp2', name: 'No-Buy-Run', description: 'Kaufe nichts beim Händler in der ersten Stunde', points: 100, difficulty: 'easy' },
      { id: 'sp3', name: 'Dreierlei', description: 'Besiege 3 Bosse in unter 45 Minuten', points: 300, difficulty: 'hard' },
      { id: 'sp4', name: 'Stufen-Sprinter', description: 'Erreiche Stufe 20 in unter 30 Minuten', points: 150, difficulty: 'medium' },
    ],
  },
]

const ds3Categories = [
  {
    name: 'Kampfmeister',
    icon: '⚔️',
    challenges: [
      { id: 'd3c1', name: 'Unberührt', description: 'Besiege einen Boss ohne einen Treffer zu kassieren', points: 300, difficulty: 'hard' },
      { id: 'd3c2', name: 'Nackter Stahl', description: 'Besiege Vordt of the Boreal Valley ohne Rüstung zu tragen', points: 250, difficulty: 'hard' },
      { id: 'd3c3', name: 'Aschen-Verzicht', description: 'Besiege einen Boss ohne (Ashen) Estus Flask zu benutzen', points: 200, difficulty: 'medium' },
      { id: 'd3c4', name: 'Blitzsieger', description: 'Besiege einen Boss in unter 60 Sekunden', points: 150, difficulty: 'medium' },
    ],
  },
  {
    name: 'Erkunder',
    icon: '🗺️',
    challenges: [
      { id: 'd3e1', name: 'Schatzjäger', description: 'Öffne 10 Truhen in einer einzigen Zone', points: 100, difficulty: 'easy' },
      { id: 'd3e2', name: 'Geheimsucher', description: 'Finde 3 versteckte Wanddurchgänge', points: 150, difficulty: 'medium' },
      { id: 'd3e3', name: 'Gnadenschrein-Hopper', description: 'Entzünde 10 Gnadenschreine in unter 30 Minuten', points: 200, difficulty: 'medium' },
      { id: 'd3e4', name: 'Kurierläufer', description: 'Erreiche Firelink Shrine in unter 5 Minuten nach Spielstart', points: 100, difficulty: 'easy' },
    ],
  },
  {
    name: 'Seelen-Magnat',
    icon: '💀',
    challenges: [
      { id: 'd3s1', name: 'Seelen-Millionär', description: 'Sammle 50.000 Seelen ohne auszugeben', points: 200, difficulty: 'medium' },
      { id: 'd3s2', name: 'Kein Verlust', description: 'Stirb nicht ein einziges Mal in einer Stunde', points: 350, difficulty: 'hard' },
      { id: 'd3s3', name: 'Seelenfresser', description: 'Töte 50 Gegner ohne zu sterben', points: 150, difficulty: 'easy' },
    ],
  },
  {
    name: 'Speedster',
    icon: '⚡',
    challenges: [
      { id: 'd3sp1', name: 'Doppelschlag', description: 'Besiege 2 Bosse innerhalb von 15 Minuten', points: 250, difficulty: 'hard' },
      { id: 'd3sp2', name: 'No-Buy-Run', description: 'Kaufe nichts beim Händler in der ersten Stunde', points: 100, difficulty: 'easy' },
      { id: 'd3sp3', name: 'Dreierlei', description: 'Besiege 3 Bosse in unter 45 Minuten', points: 300, difficulty: 'hard' },
      { id: 'd3sp4', name: 'Stufen-Sprinter', description: 'Erreiche Stufe 20 in unter 30 Minuten', points: 150, difficulty: 'medium' },
    ],
  },
]

export const CHALLENGES = {
  ds1: ds1Categories,
  ds2: ds2Categories,
  ds3: ds3Categories,
}

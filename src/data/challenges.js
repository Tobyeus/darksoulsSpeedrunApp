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
    name: 'Tobyeus',
    icon: '⚔️',
    challenges: [
      { id: 'd3c1', name: 'Shine like a crystal', description: 'Kill the Crystal lizard before Iudex Gundyr', points: 100, difficulty: 'medium' },
      { id: 'd3c2', name: 'Spin me Round', description: 'Kill Dancer before Vordt', points: 300, difficulty: 'hard' },
      { id: 'd3c3', name: 'One Hit Pony', description: 'Use a starting weapon the whole run', points: 100, difficulty: 'medium' },
      { id: 'd3c4', name: 'You are a wizard Harry', description: 'Use only Sorceries', points: 300, difficulty: 'medium' },
      { id: 'd3c5', name: 'Chivalry is not dead', description: 'Free Irena', points: 150, difficulty: 'medium' },
    ],
  },
  {
    name: 'Max',
    icon: '🗺️',
    challenges: [
      { id: 'd3e1', name: 'Im not a hollow!', description: 'dont get levels from yoel', points: 100, difficulty: 'easy' },
      { id: 'd3e2', name: 'Mohammed Ali', description: 'Kill a boss with fist weapons', points: 150, difficulty: 'medium' },
      { id: 'd3e3', name: 'Look at me, I am the firekeeper now', description: 'get a second firekeeper', points: 300, difficulty: 'hard' },
      { id: 'd3e4', name: 'Master of Iai', description: 'kill the master outside firelinkshrine', points: 100, difficulty: 'easy' },
    ],
  },
  {
    name: 'Julia',
    icon: '💀',
    challenges: [
      { id: 'd3s1', name: 'Easiest boss of my life', description: 'Kill Gundyr first try', points: 150, difficulty: 'medium' },
      { id: 'd3s2', name: 'Look at my biceps', description: 'Put 5 points into strength', points: 100, difficulty: 'easy' },
      { id: 'd3s3', name: 'This is parkour', description: 'Do the jump onto of firelink', points: 150, difficulty: 'easy' },
    ],
  }
]

export const CHALLENGES = {
  ds1: ds1Categories,
  ds2: ds2Categories,
  ds3: ds3Categories,
}

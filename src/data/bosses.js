const ds2Bosses = [
  { id: 1, name: 'The Last Giant', points: 100 },
  { id: 2, name: 'The Pursuer', points: 150 },
  { id: 3, name: 'Dragonrider', points: 150 },
  { id: 4, name: 'Old Dragonslayer', points: 150 },
  { id: 5, name: 'Flexile Sentry', points: 150 },
  { id: 6, name: 'Ruin Sentinels', points: 200 },
  { id: 7, name: 'Lost Sinner', points: 300 },
  { id: 8, name: 'Belfry Gargoyles', points: 200 },
  { id: 9, name: 'Skeleton Lords', points: 200 },
  { id: 10, name: 'Covetous Demon', points: 150 },
  { id: 11, name: 'Mytha, the Baneful Queen', points: 200 },
  { id: 12, name: 'Smelter Demon', points: 250 },
  { id: 13, name: 'Old Iron King', points: 300 },
  { id: 14, name: 'Scorpioness Najka', points: 200 },
  { id: 15, name: 'Congregation', points: 150 },
  { id: 16, name: "Duke's Dear Freja", points: 250 },
  { id: 17, name: 'The Rotten', points: 300 },
  { id: 18, name: 'Guardian Dragon', points: 200 },
  { id: 19, name: 'Ancient Dragon', points: 500 },
  { id: 20, name: 'Giant Lord', points: 400 },
  { id: 21, name: 'Throne Watcher & Defender', points: 350 },
  { id: 22, name: 'Nashandra', points: 500 },
]

// Hauptbosse des Grundspiels (ohne DLC "Artorias of the Abyss"),
// in ungefährer Run-Reihenfolge. Optionale Bosse (Gwyndolin, Stray Demon)
// sind mit enthalten, da sie in vielen All-Bosses-Runs mitgezählt werden.
const ds1Bosses = [
  { id: 1, name: 'Asylum Demon', points: 50 },
  { id: 2, name: 'Taurus Demon', points: 100 },
  { id: 3, name: 'Bell Gargoyles', points: 150 },
  { id: 4, name: 'Capra Demon', points: 150 },
  { id: 5, name: 'Moonlight Butterfly', points: 150 },
  { id: 6, name: 'Gaping Dragon', points: 150 },
  { id: 7, name: 'Pinwheel', points: 100 },
  { id: 8, name: 'Chaos Witch Quelaag', points: 200 },
  { id: 9, name: 'Iron Golem', points: 200 },
  { id: 10, name: 'Ornstein & Smough', points: 400 },
  { id: 11, name: 'Dark Sun Gwyndolin', points: 150 },
  { id: 12, name: 'Seath the Scaleless', points: 250 },
  { id: 13, name: 'The Four Kings', points: 300 },
  { id: 14, name: 'Bed of Chaos', points: 250 },
  { id: 15, name: 'Nito, the Gravelord', points: 250 },
  { id: 16, name: 'Stray Demon', points: 150 },
  { id: 17, name: 'Gwyn, Lord of Cinder', points: 500 },
]

// Hauptbosse des Grundspiels, in ungefährer Run-Reihenfolge.
// DLC-Bosse (Ashes of Ariandel / The Ringed City) sind bewusst noch nicht
// enthalten - können bei Bedarf später ergänzt werden.
const ds3Bosses = [
  { id: 1, name: 'Iudex Gundyr', points: 100 },
  { id: 2, name: 'Vordt of the Boreal Valley', points: 120 },
  { id: 3, name: 'Curse-Rotted Greatwood', points: 150 },
  { id: 4, name: 'Crystal Sage', points: 150 },
  { id: 5, name: 'Deacons of the Deep', points: 150 },
  { id: 6, name: 'Abyss Watchers', points: 250 },
  { id: 7, name: 'High Lord Wolnir', points: 150 },
  { id: 8, name: 'Old Demon King', points: 150 },
  { id: 9, name: 'Pontiff Sulyvahn', points: 300 },
  { id: 10, name: 'Yhorm the Giant', points: 250 },
  { id: 11, name: 'Aldrich, Devourer of Gods', points: 300 },
  { id: 12, name: 'Dancer of the Boreal Valley', points: 250 },
  { id: 13, name: 'Oceiros, the Consumed King', points: 200 },
  { id: 14, name: 'Champion Gundyr', points: 250 },
  { id: 15, name: 'Ancient Wyvern', points: 100 },
  { id: 16, name: 'Dragonslayer Armour', points: 300 },
  { id: 17, name: 'Lorian & Lothric, Twin Princes', points: 400 },
  { id: 18, name: 'Soul of Cinder', points: 500 },
]

export const BOSSES = {
  ds1: ds1Bosses,
  ds2: ds2Bosses,
  ds3: ds3Bosses,
}

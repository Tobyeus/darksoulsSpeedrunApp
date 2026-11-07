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

const eldenringBosses = [
  // Limgrave
  { id: 'er1',  name: 'Tree Sentinel',                points: 1, region: 'Limgrave' },
  { id: 'er2',  name: 'Margit, the Fell Omen',        points: 1, region: 'Limgrave' },
  { id: 'er3',  name: 'Godrick the Grafted',          points: 1, region: 'Limgrave' },
  { id: 'er26', name: 'Soldier of Godrick',           points: 1, region: 'Limgrave' },
  { id: 'er27', name: 'Beastman of Farum Azula',      points: 1, region: 'Limgrave' },
  { id: 'er28', name: 'Erdtree Burial Watchdog',      points: 1, region: 'Limgrave' }, // Stormfoot Catacombs
  { id: 'er29', name: 'Grave Warden Duelist',         points: 1, region: 'Limgrave' }, // Murkwater Catacombs
  { id: 'er30', name: 'Mad Pumpkin Head',             points: 1, region: 'Limgrave' }, // Waypoint Ruins
  { id: 'er31', name: 'Black Knife Assassin',         points: 1, region: 'Limgrave' }, // Deathtouched Catacombs
  { id: 'er32', name: 'Bloodhound Knight Darriwil',   points: 1, region: 'Limgrave' },
  { id: 'er33', name: 'Guardian Golem',               points: 1, region: 'Limgrave' }, // Highroad Cave
  { id: 'er34', name: 'Tibia Mariner',                points: 1, region: 'Limgrave' }, // Summonwater Village
  { id: 'er35', name: 'Night\'s Cavalry',             points: 1, region: 'Limgrave' },
  { id: 'er36', name: 'Bell Bearing Hunter',          points: 1, region: 'Limgrave' }, // Warmaster's Shack (Nacht)
  { id: 'er37', name: 'Recusant Bernahl',             points: 1, region: 'Limgrave' },
  { id: 'er38', name: 'Crucible Knight',              points: 1, region: 'Limgrave' }, // Stormhill Evergaol
  { id: 'er39', name: 'Ulcerated Tree Spirit',        points: 1, region: 'Limgrave' }, // Fringefolk Hero's Grave
  { id: 'er40', name: 'Flying Dragon Agheel',         points: 1, region: 'Limgrave' },

  // Weeping Peninsula
  { id: 'er4',  name: 'Leonine Misbegotten',          points: 1, region: 'Weeping Peninsula' },
  { id: 'er41', name: 'Demi-Human Chiefs (x2)',       points: 1, region: 'Weeping Peninsula' }, // Coastal Cave
  { id: 'er42', name: 'Miranda the Blighted Bloom',   points: 1, region: 'Weeping Peninsula' }, // Tombsward Cave
  { id: 'er43', name: 'Scaly Misbegotten',            points: 1, region: 'Weeping Peninsula' }, // Morne Tunnel
  { id: 'er44', name: 'Cemetery Shade',               points: 1, region: 'Weeping Peninsula' }, // Tombsward Catacombs
  { id: 'er45', name: 'Erdtree Burial Watchdog',      points: 1, region: 'Weeping Peninsula' }, // Impaler's Catacombs
  { id: 'er46', name: 'Ancient Hero of Zamor',        points: 1, region: 'Weeping Peninsula' }, // Weeping Evergaol
  { id: 'er47', name: 'Erdtree Avatar',               points: 1, region: 'Weeping Peninsula' },
  { id: 'er48', name: 'Night\'s Cavalry',             points: 1, region: 'Weeping Peninsula' },
  { id: 'er49', name: 'Deathbird',                    points: 1, region: 'Weeping Peninsula' },
  { id: 'er50', name: 'Bell Bearing Hunter',          points: 1, region: 'Weeping Peninsula' }, // Isolated Merchant (Nacht)

  // Liurnia of the Lakes
  { id: 'er5',  name: 'Royal Knight Loretta',         points: 1, region: 'Liurnia of the Lakes' },
  { id: 'er6',  name: 'Red Wolf of Radagon',          points: 1, region: 'Liurnia of the Lakes' },
  { id: 'er7',  name: 'Rennala, Queen of the Full Moon', points: 1, region: 'Liurnia of the Lakes' },
  { id: 'er51', name: 'Cleanrot Knight',              points: 1, region: 'Liurnia of the Lakes' }, // Stillwater Cave
  { id: 'er52', name: 'Bloodhound Knight',            points: 1, region: 'Liurnia of the Lakes' }, // Lakeside Crystal Cave
  { id: 'er53', name: 'Crystalian',                   points: 1, region: 'Liurnia of the Lakes' }, // Raya Lucaria Crystal Tunnel
  { id: 'er54', name: 'Spirit-Caller Snail',          points: 1, region: 'Liurnia of the Lakes' }, // Road's End Catacombs
  { id: 'er55', name: 'Erdtree Burial Watchdog',      points: 1, region: 'Liurnia of the Lakes' }, // Cliffbottom Catacombs
  { id: 'er56', name: 'Black Knife Assassin',         points: 1, region: 'Liurnia of the Lakes' }, // Black Knife Catacombs
  { id: 'er57', name: 'Bols, Carian Knight',          points: 1, region: 'Liurnia of the Lakes' }, // Cuckoo's Evergaol
  { id: 'er58', name: 'Adan, Thief of Fire',          points: 1, region: 'Liurnia of the Lakes' }, // Malefactor's Evergaol
  { id: 'er59', name: 'Alabaster Lord',               points: 1, region: 'Liurnia of the Lakes' }, // Royal Grave Evergaol
  { id: 'er60', name: 'Alecto, Black Knife Ringleader', points: 1, region: 'Liurnia of the Lakes' }, // Ringleader's Evergaol
  { id: 'er61', name: 'Omenkiller',                   points: 1, region: 'Liurnia of the Lakes' }, // Village of the Albinaurics
  { id: 'er62', name: 'Moongrum, Carian Knight',      points: 1, region: 'Liurnia of the Lakes' }, // Akademie
  { id: 'er63', name: 'Tibia Mariner',                points: 1, region: 'Liurnia of the Lakes' }, // Nordwestufer
  { id: 'er64', name: 'Night\'s Cavalry',             points: 1, region: 'Liurnia of the Lakes' },
  { id: 'er65', name: 'Bell Bearing Hunter',          points: 1, region: 'Liurnia of the Lakes' }, // Church of Vows (Nacht)
  { id: 'er66', name: 'Death Rite Bird',              points: 1, region: 'Liurnia of the Lakes' },
  { id: 'er67', name: 'Glintstone Dragon Smarag',     points: 1, region: 'Liurnia of the Lakes' },
  { id: 'er68', name: 'Magma Wyrm Makar',             points: 1, region: 'Liurnia of the Lakes' }, // Ruin-Strewn Precipice
  { id: 'er69', name: 'Glintstone Dragon Adula',      points: 1, region: 'Liurnia of the Lakes' }, // Moonlight Altar

  // Caelid
  { id: 'er8',  name: 'Starscourge Radahn',           points: 1, region: 'Caelid' },
  { id: 'er70', name: 'Cleanrot Knight',              points: 1, region: 'Caelid' }, // Abandoned Cave
  { id: 'er71', name: 'Magma Wyrm',                   points: 1, region: 'Caelid' }, // Gael Tunnel
  { id: 'er72', name: 'Fallingstar Beast',            points: 1, region: 'Caelid' }, // Sellia Crystal Tunnel
  { id: 'er73', name: 'Erdtree Burial Watchdog',      points: 1, region: 'Caelid' }, // Caelid Catacombs
  { id: 'er74', name: 'Frenzied Duelist',             points: 1, region: 'Caelid' }, // Gaol Cave
  { id: 'er75', name: 'Mad Pumpkin Heads (x2)',       points: 1, region: 'Caelid' }, // Caelem Ruins
  { id: 'er76', name: 'Commander O\'Neil',            points: 1, region: 'Caelid' }, // Aeonia-Sumpf
  { id: 'er77', name: 'Putrid Avatar',                points: 1, region: 'Caelid' }, // Minor Erdtree
  { id: 'er78', name: 'Decaying Ekzykes',             points: 1, region: 'Caelid' },
  { id: 'er79', name: 'Elder Dragon Greyoll',         points: 1, region: 'Caelid' },
  { id: 'er80', name: 'Misbegotten Warrior & Crucible Knight', points: 1, region: 'Caelid' }, // Schloss Redmane (vor dem Fest)
  { id: 'er81', name: 'Godskin Apostle',              points: 1, region: 'Caelid' }, // Göttlicher Turm von Caelid
  { id: 'er82', name: 'Battlemage Hugues',            points: 1, region: 'Caelid' }, // Sellia Evergaol
  { id: 'er83', name: 'Putrid Crystallians (x3)',     points: 1, region: 'Caelid' }, // Sellia-Versteck
  { id: 'er84', name: 'Death Rite Bird',              points: 1, region: 'Caelid' },
  { id: 'er85', name: 'Night\'s Cavalry',             points: 1, region: 'Caelid' },
  { id: 'er86', name: 'Putrid Tree Sentinel',         points: 1, region: 'Caelid' }, // Drachenacker
  { id: 'er87', name: 'Black Blade Kindred',          points: 1, region: 'Caelid' }, // Drachenacker
  { id: 'er88', name: 'Bell Bearing Hunter',          points: 1, region: 'Caelid' }, // Isolated Merchant, Drachenacker (Nacht)

  // Unterwelt: Siofra & Nokron
  { id: 'er9',  name: 'Mimic Tear',                   points: 1, region: 'Siofra River & Nokron' },
  { id: 'er10', name: 'Valiant Gargoyle',             points: 1, region: 'Siofra River & Nokron' },
  { id: 'er11', name: 'Regal Ancestor Spirit',        points: 1, region: 'Siofra River & Nokron' },

  // Unterwelt: Ainsel & Lake of Rot
  { id: 'er12', name: 'Astel, Naturalborn of the Void', points: 1, region: 'Ainsel River' },
  { id: 'er89', name: 'Dragonkin Soldier of Nokstella', points: 1, region: 'Ainsel River' },
  { id: 'er90', name: 'Dragonkin Soldier',            points: 1, region: 'Ainsel River' }, // Lake of Rot

  // Unterwelt: Deeproot Depths
  { id: 'er91', name: "Fia's Champions",              points: 1, region: 'Deeproot Depths' },
  { id: 'er92', name: 'Lichdragon Fortissax',         points: 1, region: 'Deeproot Depths' },
  { id: 'er93', name: 'Crucible Knight Siluria',      points: 1, region: 'Deeproot Depths' },

  // Altus / Gelmir
  { id: 'er13', name: 'Draconic Tree Sentinel',       points: 1, region: 'Altus Plateau & Mt. Gelmir' },
  { id: 'er14', name: 'Godfrey, First Elden Lord (Golden Shade)', points: 1, region: 'Altus Plateau & Mt. Gelmir' },
  { id: 'er15', name: 'Rykard, Lord of Blasphemy',    points: 1, region: 'Altus Plateau & Mt. Gelmir' },
  { id: 'er94', name: 'Stonedigger Troll',            points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Old Altus Tunnel
  { id: 'er95', name: 'Crystalian',                   points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Altus Tunnel
  { id: 'er96', name: 'Godefroy the Grafted',         points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Golden Lineage Evergaol
  { id: 'er97', name: 'Demi-Human Queen Gilika',      points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Lux-Ruinen
  { id: 'er98', name: 'Erdtree Burial Watchdog',      points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Wyndham-Katakomben
  { id: 'er99', name: 'Perfumer Tricia & Misbegotten Warrior', points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Unsightly Catacombs
  { id: 'er100', name: 'Black Knife Assassin',        points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Sage's Cave
  { id: 'er101', name: 'Ancient Hero of Zamor',       points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Sainted Hero's Grave
  { id: 'er102', name: 'Sanguine Noble',              points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Writheblood-Ruinen
  { id: 'er103', name: 'Godskin Apostle',             points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Windmühlendorf
  { id: 'er104', name: 'Ancient Dragon Lansseax',     points: 1, region: 'Altus Plateau & Mt. Gelmir' },
  { id: 'er105', name: 'Erdtree Avatar',              points: 1, region: 'Altus Plateau & Mt. Gelmir' },
  { id: 'er106', name: 'Wormface',                    points: 1, region: 'Altus Plateau & Mt. Gelmir' },
  { id: 'er107', name: 'Tree Sentinels (x2)',         points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Tor von Leyndell
  { id: 'er108', name: 'Night\'s Cavalry',            points: 1, region: 'Altus Plateau & Mt. Gelmir' },
  { id: 'er109', name: 'Deathbird',                   points: 1, region: 'Altus Plateau & Mt. Gelmir' },
  { id: 'er110', name: 'Bell Bearing Hunter',         points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Hermit Merchant (Nacht)
  { id: 'er111', name: 'Fell Twins',                  points: 1, region: 'Altus Plateau & Mt. Gelmir' },
  { id: 'er112', name: 'Full-Grown Fallingstar Beast', points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // 9. Gelmir-Lager
  { id: 'er113', name: 'Red Wolf of the Champion',    points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Gelmir Hero's Grave
  { id: 'er114', name: 'Magma Wyrm',                  points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Vulkanhöhle
  { id: 'er115', name: 'Demi-Human Queen Maggie',     points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Einsiedlerdorf
  { id: 'er116', name: 'Anastasia, Tarnished-Eater',  points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Invasion
  { id: 'er117', name: 'Godskin Noble',               points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Vulkan-Anwesen
  { id: 'er118', name: 'Abductor Virgins (x2)',       points: 1, region: 'Altus Plateau & Mt. Gelmir' }, // Vulkan-Anwesen

  // Leyndell
  { id: 'er16', name: 'Morgott, the Omen King',       points: 1, region: 'Leyndell, Royal Capital' },
  { id: 'er119', name: 'Esgar, Priest of Blood',      points: 1, region: 'Leyndell, Royal Capital' }, // Leyndell-Katakomben
  { id: 'er120', name: 'Onyx Lord',                   points: 1, region: 'Leyndell, Royal Capital' }, // Sealed Tunnel
  { id: 'er121', name: 'Mohg, the Omen',              points: 1, region: 'Leyndell, Royal Capital' }, // Subterranean Shunning-Grounds
  { id: 'er122', name: 'Crucible Knights (x2)',       points: 1, region: 'Leyndell, Royal Capital' }, // Auriza Hero's Grave

  // Berg der Riesen
  { id: 'er17', name: 'Commander Niall',              points: 1, region: 'Mountaintops of the Giants' },
  { id: 'er18', name: 'Fire Giant',                   points: 1, region: 'Mountaintops of the Giants' },
  { id: 'er123', name: 'Ancient Hero of Zamor',       points: 1, region: 'Mountaintops of the Giants' }, // Giant's Mountaintop Catacombs
  { id: 'er124', name: 'Erdtree Burial Watchdog',     points: 1, region: 'Mountaintops of the Giants' }, // Giant-Conquering Hero's Grave
  { id: 'er125', name: 'Borealis the Freezing Fog',   points: 1, region: 'Mountaintops of the Giants' },
  { id: 'er126', name: 'Death Rite Bird',             points: 1, region: 'Mountaintops of the Giants' },
  { id: 'er127', name: 'Juno Hoslow',                 points: 1, region: 'Mountaintops of the Giants' }, // Invasion

  // Consecrated Snowfield
  { id: 'er128', name: 'Misbegotten Crusader',        points: 1, region: 'Consecrated Snowfield' }, // Cave of the Forlorn
  { id: 'er129', name: 'Putrid Grave Warden Duelist', points: 1, region: 'Consecrated Snowfield' }, // Katakomben
  { id: 'er130', name: 'Onyx Lord',                   points: 1, region: 'Consecrated Snowfield' }, // Yelough Anix Tunnel
  { id: 'er131', name: 'Night\'s Cavalry (x2)',       points: 1, region: 'Consecrated Snowfield' },
  { id: 'er132', name: 'Great Wyrm Theodorix',        points: 1, region: 'Consecrated Snowfield' },
  { id: 'er133', name: 'Anastasia, Tarnished-Eater',  points: 1, region: 'Consecrated Snowfield' }, // Invasion

  // Haligtree
  { id: 'er19', name: 'Loretta, Knight of the Haligtree', points: 1, region: "Miquella's Haligtree" },
  { id: 'er20', name: 'Malenia, Blade of Miquella',   points: 1, region: "Miquella's Haligtree" },

  // Mohgwyn
  { id: 'er21', name: 'Mohg, Lord of Blood',          points: 1, region: 'Mohgwyn Palace' },

  // Farum Azula
  { id: 'er22', name: 'Godskin Duo',                  points: 1, region: 'Crumbling Farum Azula' },
  { id: 'er23', name: 'Maliketh, the Black Blade',    points: 1, region: 'Crumbling Farum Azula' },
  { id: 'er134', name: 'Dragonlord Placidusax',       points: 1, region: 'Crumbling Farum Azula' },

  // Finale
  { id: 'er24', name: 'Godfrey / Hoarah Loux',        points: 1, region: 'Ashen Capital' },
  { id: 'er25', name: 'Radagon & Elden Beast',        points: 1, region: 'Ashen Capital' },
]

export const BOSSES = {
  ds1: ds1Bosses,
  ds2: ds2Bosses,
  ds3: ds3Bosses,
  eldenring: eldenringBosses,
}

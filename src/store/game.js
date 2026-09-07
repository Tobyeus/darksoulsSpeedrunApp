import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'ds_selected_game'
const saved = localStorage.getItem(STORAGE_KEY)

export const currentGame = ref(['ds1', 'ds2', 'ds3'].includes(saved) ? saved : 'ds2')

watch(currentGame, (val) => {
  localStorage.setItem(STORAGE_KEY, val)
})

export const GAME_META = {
  ds1: {
    id: 'ds1',
    title: 'Dark Souls',
    subtitle: 'Speedrun Tracker',
    ornament: '⸻ Chosen Undead ⸻',
    theme: 'theme-ds1',
    accent: '#d4922f',
  },
  ds2: {
    id: 'ds2',
    title: 'Dark Souls II',
    subtitle: 'Speedrun Tracker',
    ornament: '⸻ Bearer of the Curse ⸻',
    theme: 'theme-ds2',
    accent: '#e74c3c',
  },
  ds3: {
    id: 'ds3',
    title: 'Dark Souls III',
    subtitle: 'Speedrun Tracker',
    ornament: '⸻ Ashen One, Unkindled ⸻',
    theme: 'theme-ds3',
    accent: '#6a93bf',
  },
}

export const currentMeta = computed(() => GAME_META[currentGame.value])

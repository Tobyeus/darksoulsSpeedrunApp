<template>
  <div class="panel boss-panel">
    <div class="panel-corner tl"></div>
    <div class="panel-corner tr"></div>
    <div class="panel-corner bl"></div>
    <div class="panel-corner br"></div>

    <div class="panel-title">☠ Besiegte Bosse</div>

    <div class="boss-grid">
      <div
        v-for="boss in bosses"
        :key="boss.id"
        class="boss-item"
        :class="{ defeated: boss.defeated }"
        @click="toggleBoss(boss)"
      >
        <div class="checkbox">
          <span class="checkmark" v-if="boss.defeated">✓</span>
        </div>
        <span class="boss-name">{{ boss.name }}</span>
        <span class="boss-pts">{{ boss.points }} Pts</span>
      </div>
    </div>

    <div class="stats-bar">
      <div class="stat">
        <div class="stat-val">{{ defeatedCount }} / {{ bosses.length }}</div>
        <div class="stat-label">Bosse</div>
      </div>
      <div class="stat">
        <div class="stat-val">{{ bossScore }}</div>
        <div class="stat-label">Boss-Punkte</div>
      </div>
      <div class="stat">
        <div class="stat-val">{{ Math.round((defeatedCount / bosses.length) * 100) }}%</div>
        <div class="stat-label">Fortschritt</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue'

const emit = defineEmits(['score-change'])
const showToast = inject('showToast')

const BOSS_LIST = [
  { id: 1,  name: 'The Last Giant',            points: 100 },
  { id: 2,  name: 'The Pursuer',               points: 150 },
  { id: 3,  name: 'Dragonrider',               points: 150 },
  { id: 4,  name: 'Old Dragonslayer',          points: 150 },
  { id: 5,  name: 'Flexile Sentry',            points: 150 },
  { id: 6,  name: 'Ruin Sentinels',            points: 200 },
  { id: 7,  name: 'Lost Sinner',               points: 300 },
  { id: 8,  name: 'Belfry Gargoyles',          points: 200 },
  { id: 9,  name: 'Skeleton Lords',            points: 200 },
  { id: 10, name: 'Covetous Demon',            points: 150 },
  { id: 11, name: 'Mytha, the Baneful Queen',  points: 200 },
  { id: 12, name: 'Smelter Demon',             points: 250 },
  { id: 13, name: 'Old Iron King',             points: 300 },
  { id: 14, name: 'Scorpioness Najka',         points: 200 },
  { id: 15, name: 'Congregation',              points: 150 },
  { id: 16, name: "Duke's Dear Freja",         points: 250 },
  { id: 17, name: 'The Rotten',                points: 300 },
  { id: 18, name: 'Guardian Dragon',           points: 200 },
  { id: 19, name: 'Ancient Dragon',            points: 500 },
  { id: 20, name: 'Giant Lord',                points: 400 },
  { id: 21, name: 'Throne Watcher & Defender', points: 350 },
  { id: 22, name: 'Nashandra',                 points: 500 },
]

const savedDefeated = JSON.parse(localStorage.getItem('ds2_bosses_defeated') || '[]')
const bosses = ref(BOSS_LIST.map(b => ({ ...b, defeated: savedDefeated.includes(b.id) })))

watch(bosses, (val) => {
  const defeatedIds = val.filter(b => b.defeated).map(b => b.id)
  localStorage.setItem('ds2_bosses_defeated', JSON.stringify(defeatedIds))
}, { deep: true })

const defeatedCount = computed(() => bosses.value.filter(b => b.defeated).length)
const bossScore = computed(() => bosses.value.filter(b => b.defeated).reduce((s, b) => s + b.points, 0))

function toggleBoss(boss) {
  boss.defeated = !boss.defeated
  if (boss.defeated) showToast(`${boss.name} besiegt! +${boss.points} Pts`)
  emit('score-change', bossScore.value)
}

</script>

<style scoped>
.boss-panel {
  margin-bottom: 20px;
}

.boss-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 8px;
}

.boss-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid var(--panel-border);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  position: relative;
  overflow: hidden;
}

.boss-item:hover {
  border-color: rgba(201, 168, 76, 0.3);
  background: rgba(201, 168, 76, 0.04);
}

.boss-item.defeated {
  border-color: rgba(192, 57, 43, 0.3);
  background: rgba(192, 57, 43, 0.06);
}

.boss-item.defeated .boss-name {
  color: var(--ash);
  text-decoration: line-through;
  text-decoration-color: var(--ember);
}

.boss-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(192, 57, 43, 0) 0%, rgba(192, 57, 43, 0.06) 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.boss-item.defeated::after {
  opacity: 1;
}

.checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid var(--gold-dim);
  border-radius: 1px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.boss-item.defeated .checkbox {
  background: var(--ember);
  border-color: var(--ember-bright);
  box-shadow: 0 0 8px var(--glow);
}

.checkmark {
  color: white;
  font-size: 10px;
  font-weight: bold;
  line-height: 1;
}

.boss-name {
  font-size: 0.88rem;
  color: var(--bone);
  transition: color 0.2s;
  flex: 1;
}

.boss-pts {
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  color: var(--gold-dim);
  letter-spacing: 0.1em;
}

.stats-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(201, 168, 76, 0.04);
  border: 1px solid rgba(201, 168, 76, 0.15);
  border-radius: 2px;
  margin-top: 16px;
}

.stat {
  text-align: center;
}

.stat-val {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  color: var(--gold);
}

.stat-label {
  font-size: 0.65rem;
  color: var(--ash);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-family: 'Cinzel', serif;
}

.reset-btn {
  font-size: 0.6rem;
}
</style>

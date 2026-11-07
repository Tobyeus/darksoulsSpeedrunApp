<template>
  <div class="panel boss-panel">
    <div class="panel-corner tl"></div>
    <div class="panel-corner tr"></div>
    <div class="panel-corner bl"></div>
    <div class="panel-corner br"></div>
 
    <div class="panel-title">☠ Besiegte Bosse</div>
 
    <!-- Regions-Ansicht (Elden Ring) -->
    <div v-if="grouped" class="region-groups">
      <div class="region-toolbar">
        <button class="region-toggle-all" @click="expandAll">Alle ausklappen</button>
        <span class="region-toolbar-sep">·</span>
        <button class="region-toggle-all" @click="collapseAll">Alle einklappen</button>
      </div>
 
      <div
        v-for="group in grouped"
        :key="group.region"
        class="region-group"
        :class="{ collapsed: isCollapsed(group.region) }"
      >
        <button
          type="button"
          class="region-header"
          :aria-expanded="!isCollapsed(group.region)"
          :aria-controls="regionId(group.region)"
          @click="toggleRegion(group.region)"
        >
          <span class="region-chevron" aria-hidden="true">▾</span>
          <span class="region-name">{{ group.region }}</span>
          <span class="region-progress">
            {{ group.bosses.filter(b => b.defeated).length }} / {{ group.bosses.length }}
          </span>
        </button>
 
        <div :id="regionId(group.region)" class="region-body">
          <div class="region-body-inner">
            <div class="boss-grid">
              <div
                v-for="boss in group.bosses"
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
          </div>
        </div>
      </div>
    </div>
 
    <!-- Flache Ansicht (DS1/DS2/DS3) -->
    <div v-else class="boss-grid">
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
      <button class="btn btn-ghost reset-btn" @click="resetBosses">Reset Bosse</button>
    </div>
  </div>
</template>
 
<script setup>
import { ref, computed, inject, watch, onMounted } from 'vue'
import { currentGame } from '../store/game'
import { BOSSES } from '../data/bosses'
 
const emit = defineEmits(['score-change'])
const showToast = inject('showToast')
 
function loadBosses(game) {
  const savedDefeated = JSON.parse(localStorage.getItem(`${game}_bosses_defeated`) || '[]')
  return BOSSES[game].map(b => ({ ...b, defeated: savedDefeated.includes(b.id) }))
}
 
const bosses = ref(loadBosses(currentGame.value))
 
// Eingeklappte Regionen (Liste der Regionsnamen), pro Spiel in localStorage gespeichert.
// Standard: alles ausgeklappt.
function loadCollapsed(game) {
  try {
    return JSON.parse(localStorage.getItem(`${game}_regions_collapsed`) || '[]')
  } catch {
    return []
  }
}
 
const collapsedRegions = ref(loadCollapsed(currentGame.value))
 
// Gruppiert nach Region, wenn die Bossliste Regions-Infos traegt (Elden Ring).
// Reihenfolge der Regionen = Reihenfolge des ersten Auftretens in der Liste.
const grouped = computed(() => {
  if (!bosses.value.length || !bosses.value[0].region) return null
  const map = new Map()
  for (const boss of bosses.value) {
    if (!map.has(boss.region)) map.set(boss.region, [])
    map.get(boss.region).push(boss)
  }
  return [...map.entries()].map(([region, bosses]) => ({ region, bosses }))
})
 
watch(currentGame, (game) => {
  bosses.value = loadBosses(game)
  collapsedRegions.value = loadCollapsed(game)
  emit('score-change', bossScore.value)
})
 
watch(bosses, (val) => {
  const defeatedIds = val.filter(b => b.defeated).map(b => b.id)
  localStorage.setItem(`${currentGame.value}_bosses_defeated`, JSON.stringify(defeatedIds))
}, { deep: true })
 
watch(collapsedRegions, (val) => {
  localStorage.setItem(`${currentGame.value}_regions_collapsed`, JSON.stringify(val))
}, { deep: true })
 
function isCollapsed(region) {
  return collapsedRegions.value.includes(region)
}
 
function toggleRegion(region) {
  if (isCollapsed(region)) {
    collapsedRegions.value = collapsedRegions.value.filter(r => r !== region)
  } else {
    collapsedRegions.value = [...collapsedRegions.value, region]
  }
}
 
function expandAll() {
  collapsedRegions.value = []
}
 
function collapseAll() {
  if (grouped.value) collapsedRegions.value = grouped.value.map(g => g.region)
}
 
function regionId(region) {
  return 'region-' + region.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}
 
const defeatedCount = computed(() => bosses.value.filter(b => b.defeated).length)
const bossScore = computed(() => bosses.value.filter(b => b.defeated).reduce((s, b) => s + b.points, 0))
 
function toggleBoss(boss) {
  boss.defeated = !boss.defeated
  if (boss.defeated) showToast(`${boss.name} besiegt! +${boss.points} Pts`)
  emit('score-change', bossScore.value)
}
 
function resetBosses() {
  bosses.value.forEach(b => (b.defeated = false))
  localStorage.removeItem(`${currentGame.value}_bosses_defeated`)
  emit('score-change', 0)
}
 
onMounted(() => emit('score-change', bossScore.value))
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
 
/* Regions-Ansicht */
.region-groups {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
 
.region-toolbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-bottom: -8px;
}
 
.region-toolbar-sep {
  color: var(--gold-dim);
  font-size: 0.65rem;
}
 
.region-toggle-all {
  background: none;
  border: none;
  padding: 2px 0;
  cursor: pointer;
  font-family: 'Cinzel', serif;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold-dim);
  transition: color 0.2s;
}
 
.region-toggle-all:hover {
  color: var(--gold);
}
 
.region-header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  width: 100%;
  margin: 0 0 10px;
  padding: 0 0 6px;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(201, 168, 76, 0.15);
  text-align: left;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.2s;
}
 
.region-header:hover {
  border-bottom-color: rgba(201, 168, 76, 0.35);
}
 
.region-header:focus-visible {
  outline: 1px solid var(--gold-dim);
  outline-offset: 2px;
}
 
.region-chevron {
  display: inline-block;
  width: 1em;
  font-size: 0.8rem;
  color: var(--gold-dim);
  transition: transform 0.25s ease;
}
 
.region-group.collapsed .region-chevron {
  transform: rotate(-90deg);
}
 
.region-header .region-name {
  flex: 1;
}
 
/* Auf-/Zuklappen: Hoehe animiert ueber grid-template-rows (0fr <-> 1fr) */
.region-body {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.28s ease, opacity 0.2s ease, visibility 0s linear 0s;
}
 
.region-body-inner {
  min-height: 0;
  overflow: hidden;
}
 
.region-group.collapsed .region-body {
  grid-template-rows: 0fr;
  opacity: 0;
  visibility: hidden; /* eingeklappte Bosse nicht mehr fokussierbar */
  transition: grid-template-rows 0.28s ease, opacity 0.2s ease, visibility 0s linear 0.28s;
}
 
.region-group.collapsed .region-header {
  margin-bottom: 0;
}
 
.region-name {
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
}
 
.region-progress {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  color: var(--gold-dim);
  letter-spacing: 0.1em;
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

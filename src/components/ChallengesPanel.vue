<template>
  <div class="panel challenges-panel">
    <div class="panel-corner tl"></div>
    <div class="panel-corner tr"></div>
    <div class="panel-corner bl"></div>
    <div class="panel-corner br"></div>

    <div class="panel-title">🏆 Optionale Herausforderungen</div>

    <div class="category-grid">
      <div v-for="category in categories" :key="category.name" class="category">
        <div class="category-title">{{ category.icon }} {{ category.name }}</div>
        <div class="challenge-list">
          <div
            v-for="challenge in category.challenges"
            :key="challenge.id"
            class="challenge-item"
            :class="{ completed: challenge.completed, locked: challenge.locked }"
            @click="toggleChallenge(challenge)"
          >
            <div class="checkbox">
              <span class="checkmark" v-if="challenge.completed">✓</span>
              <span class="lock" v-else-if="challenge.locked">🔒</span>
            </div>
            <div class="challenge-info">
              <span class="challenge-name">{{ challenge.name }}</span>
              <span class="challenge-desc">{{ challenge.description }}</span>
            </div>
            <div class="challenge-right">
              <span class="challenge-pts">+{{ challenge.points }}</span>
              <span class="challenge-diff" :class="challenge.difficulty">{{ challenge.difficulty }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-bar">
      <div class="stat">
        <div class="stat-val">{{ completedCount }} / {{ totalChallenges }}</div>
        <div class="stat-label">Challenges</div>
      </div>
      <div class="stat">
        <div class="stat-val">{{ challengeScore }}</div>
        <div class="stat-label">Bonus-Punkte</div>
      </div>
      <div class="stat">
        <div class="stat-val">{{ maxPossible }}</div>
        <div class="stat-label">Max. möglich</div>
      </div>
      <button class="btn btn-ghost reset-btn" @click="resetChallenges">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue'

const emit = defineEmits(['score-change'])
const showToast = inject('showToast')

const savedCompleted = JSON.parse(localStorage.getItem('ds2_challenges_completed') || '[]')

const categories = ref([
  {
    name: 'Kampfmeister',
    icon: '⚔️',
    challenges: [
      { id: 'c1', name: 'Unberührt',       description: 'Besiege einen Boss ohne einen Treffer zu kassieren', points: 300, difficulty: 'hard',   completed: savedCompleted.includes('c1'), locked: false },
      { id: 'c2', name: 'Nackter Stahl',   description: 'Besiege The Pursuer ohne Rüstung zu tragen',        points: 250, difficulty: 'hard',   completed: savedCompleted.includes('c2'), locked: false },
      { id: 'c3', name: 'Trank-Abstinenz', description: 'Besiege einen Boss ohne Estus Flask zu benutzen',   points: 200, difficulty: 'medium', completed: savedCompleted.includes('c3'), locked: false },
      { id: 'c4', name: 'Blitzsieger',     description: 'Besiege einen Boss in unter 60 Sekunden',           points: 150, difficulty: 'medium', completed: savedCompleted.includes('c4'), locked: false },
    ],
  },
  {
    name: 'Erkunder',
    icon: '🗺️',
    challenges: [
      { id: 'e1', name: 'Schatzjäger',    description: 'Öffne 10 Truhen in einer einzigen Zone',                    points: 100, difficulty: 'easy',   completed: savedCompleted.includes('e1'), locked: false },
      { id: 'e2', name: 'Geheimsucher',   description: 'Finde 3 versteckte Wanddurchgänge',                         points: 150, difficulty: 'medium', completed: savedCompleted.includes('e2'), locked: false },
      { id: 'e3', name: 'Bonfire-Hopper', description: 'Zünde 10 Lagerfeuer in unter 30 Minuten an',                points: 200, difficulty: 'medium', completed: savedCompleted.includes('e3'), locked: false },
      { id: 'e4', name: 'Kurierläufer',   description: 'Erreiche Majula in unter 5 Minuten nach Spielstart',        points: 100, difficulty: 'easy',   completed: savedCompleted.includes('e4'), locked: false },
    ],
  },
  {
    name: 'Seelen-Magnat',
    icon: '💀',
    challenges: [
      { id: 's1', name: 'Seelen-Millionär', description: 'Sammle 100.000 Seelen ohne auszugeben',        points: 200, difficulty: 'medium', completed: savedCompleted.includes('s1'), locked: false },
      { id: 's2', name: 'Kein Verlust',     description: 'Stirb nicht ein einziges Mal in einer Stunde', points: 350, difficulty: 'hard',   completed: savedCompleted.includes('s2'), locked: false },
      { id: 's3', name: 'Seelenfresser',    description: 'Töte 50 Gegner ohne zu sterben',               points: 150, difficulty: 'easy',   completed: savedCompleted.includes('s3'), locked: false },
    ],
  },
  {
    name: 'Speedster',
    icon: '⚡',
    challenges: [
      { id: 'sp1', name: 'Doppelschlag',    description: 'Besiege 2 Bosse innerhalb von 15 Minuten',      points: 250, difficulty: 'hard',   completed: savedCompleted.includes('sp1'), locked: false },
      { id: 'sp2', name: 'No-Buy-Run',      description: 'Kaufe nichts beim Händler in der ersten Stunde', points: 100, difficulty: 'easy',   completed: savedCompleted.includes('sp2'), locked: false },
      { id: 'sp3', name: 'Dreierlei',       description: 'Besiege 3 Bosse in unter 45 Minuten',           points: 300, difficulty: 'hard',   completed: savedCompleted.includes('sp3'), locked: false },
      { id: 'sp4', name: 'Stufen-Sprinter', description: 'Erreiche Stufe 20 in unter 30 Minuten',         points: 150, difficulty: 'medium', completed: savedCompleted.includes('sp4'), locked: false },
    ],
  },
])

watch(categories, (val) => {
  const completedIds = val.flatMap(c => c.challenges).filter(c => c.completed).map(c => c.id)
  localStorage.setItem('ds2_challenges_completed', JSON.stringify(completedIds))
}, { deep: true })

function toggleChallenge(challenge) {
  if (challenge.locked) return
  challenge.completed = !challenge.completed
  if (challenge.completed) showToast(`Challenge abgeschlossen! +${challenge.points} Pts`)
  emit('score-change', challengeScore.value)
}

function resetChallenges() {
  categories.value.forEach(cat =>
    cat.challenges.forEach(c => (c.completed = false))
  )
  localStorage.removeItem('ds2_challenges_completed')
  emit('score-change', 0)
}

const allChallenges = computed(() => categories.value.flatMap(c => c.challenges))
const completedCount = computed(() => allChallenges.value.filter(c => c.completed).length)
const totalChallenges = computed(() => allChallenges.value.length)
const challengeScore = computed(() => allChallenges.value.filter(c => c.completed).reduce((s, c) => s + c.points, 0))
const maxPossible = computed(() => allChallenges.value.reduce((s, c) => s + c.points, 0))
</script>

<style scoped>
.challenges-panel {
  margin-bottom: 20px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 16px;
}

.category-title {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(201,168,76,0.15);
}

.challenge-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.challenge-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border: 1px solid var(--panel-border);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  position: relative;
  overflow: hidden;
}

.challenge-item:hover:not(.locked) {
  border-color: rgba(201,168,76,0.3);
  background: rgba(201,168,76,0.04);
}

.challenge-item.completed {
  border-color: rgba(192,57,43,0.3);
  background: rgba(192,57,43,0.05);
}

.challenge-item.completed .challenge-name {
  color: var(--ash);
  text-decoration: line-through;
  text-decoration-color: var(--ember);
}

.challenge-item.locked {
  opacity: 0.4;
  cursor: not-allowed;
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

.challenge-item.completed .checkbox {
  background: var(--ember);
  border-color: var(--ember-bright);
  box-shadow: 0 0 8px var(--glow);
}

.checkmark {
  color: white;
  font-size: 10px;
  font-weight: bold;
}

.lock {
  font-size: 9px;
}

.challenge-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.challenge-name {
  font-size: 0.85rem;
  color: var(--bone);
  transition: color 0.2s;
}

.challenge-desc {
  font-size: 0.72rem;
  color: var(--ash);
  line-height: 1.3;
}

.challenge-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  flex-shrink: 0;
}

.challenge-pts {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  color: var(--gold-dim);
  letter-spacing: 0.05em;
}

.challenge-diff {
  font-family: 'Cinzel', serif;
  font-size: 0.55rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 1px 5px;
  border-radius: 1px;
}

.challenge-diff.easy {
  color: #4caf50;
  border: 1px solid rgba(76,175,80,0.3);
}

.challenge-diff.medium {
  color: #ff9800;
  border: 1px solid rgba(255,152,0,0.3);
}

.challenge-diff.hard {
  color: var(--ember-bright);
  border: 1px solid rgba(231,76,60,0.3);
}

/* Stats bar shared via global but scoped here for margin */
.stats-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(201,168,76,0.04);
  border: 1px solid rgba(201,168,76,0.15);
  border-radius: 2px;
  margin-top: 4px;
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

<template>
  <div id="app-wrapper">
    <header>
      <div class="header-ornament">⸻ Bearer of the Curse ⸻</div>
      <h1>Dark Souls II</h1>
      <div class="subtitle">Speedrun Tracker</div>
      <div class="divider">
        <div class="divider-line"></div>
        <div class="divider-icon">⚔</div>
        <div class="divider-line"></div>
      </div>
    </header>

    <div class="grid">
      <TimerPanel />
      <ScorePanel :boss-score="bossScore" :challenge-score="challengeScore" />
    </div>

    <BossPanel @score-change="bossScore = $event" />
    <ChallengesPanel @score-change="challengeScore = $event" />

    <ToastContainer :toasts="toasts" />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import TimerPanel from './components/TimerPanel.vue'
import ScorePanel from './components/ScorePanel.vue'
import BossPanel from './components/BossPanel.vue'
import ChallengesPanel from './components/ChallengesPanel.vue'
import ToastContainer from './components/ToastContainer.vue'

const bossScore = ref(0)
const challengeScore = ref(0)
const toasts = ref([])

function showToast(msg) {
  const id = Date.now()
  toasts.value.push({ id, msg })
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 2500)
}

// Provide toast function to all child components
provide('showToast', showToast)
</script>

<style scoped>
#app-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px 60px;
}

header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.header-ornament {
  color: var(--gold-dim);
  font-size: 1.1rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  font-family: 'Cinzel', serif;
}

h1 {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(1.6rem, 4vw, 2.8rem);
  font-weight: 900;
  color: var(--gold);
  text-shadow: 0 0 30px rgba(201, 168, 76, 0.5), 0 0 60px rgba(201, 168, 76, 0.2);
  line-height: 1.2;
  margin: 6px 0;
}

.subtitle {
  font-size: 0.85rem;
  color: var(--ash);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-family: 'Cinzel', serif;
}

.divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px auto;
  max-width: 500px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-dim), transparent);
}

.divider-icon {
  color: var(--gold-dim);
  font-size: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

@media (max-width: 680px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

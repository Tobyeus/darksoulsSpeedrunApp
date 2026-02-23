<template>
  <div class="panel">
    <div class="panel-corner tl"></div>
    <div class="panel-corner tr"></div>
    <div class="panel-corner bl"></div>
    <div class="panel-corner br"></div>

    <div class="panel-title">⏱ Timer</div>

    <div class="timer-display" :class="{ running: isRunning, paused: !isRunning && elapsed > 0 }">
      {{ formattedTime }}
    </div>

    <div class="btn-row">
      <button class="btn btn-primary" @click="toggleTimer">
        {{ isRunning ? '⏸ Pause' : (elapsed > 0 ? '▶ Weiter' : '▶ Start') }}
      </button>
      <button class="btn btn-ghost" @click="resetTimer">↺ Reset</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'

const elapsed = ref(parseInt(localStorage.getItem('ds2_timer_elapsed') || '0'))
const isRunning = ref(false)
let interval = null

watch(elapsed, (val) => localStorage.setItem('ds2_timer_elapsed', val))

const formattedTime = computed(() => {
  const ms = elapsed.value
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
})

function toggleTimer() {
  if (isRunning.value) {
    clearInterval(interval)
    isRunning.value = false
  } else {
    let last = Date.now() - elapsed.value
    interval = setInterval(() => {
      elapsed.value = Date.now() - last
    }, 10)
    isRunning.value = true
  }
}

function resetTimer() {
  clearInterval(interval)
  isRunning.value = false
  elapsed.value = 0
  localStorage.removeItem('ds2_timer_elapsed')
}

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.timer-display {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--bone);
  text-align: center;
  letter-spacing: 0.05em;
  line-height: 1;
  margin: 10px 0 24px;
  text-shadow: 0 0 20px rgba(212, 197, 160, 0.3);
  transition: color 0.3s, text-shadow 0.3s;
}

.timer-display.running {
  color: #fff;
  text-shadow: 0 0 30px rgba(192, 57, 43, 0.6), 0 0 10px rgba(255, 255, 255, 0.2);
}

.timer-display.paused {
  color: var(--ash);
}

.btn-row {
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>

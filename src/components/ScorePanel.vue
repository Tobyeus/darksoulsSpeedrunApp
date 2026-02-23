<template>
  <div class="panel">
    <div class="panel-corner tl"></div>
    <div class="panel-corner tr"></div>
    <div class="panel-corner bl"></div>
    <div class="panel-corner br"></div>

    <div class="panel-title">⚡ Punkte</div>

    <div class="score-big" :class="{ bump: scoreBump }">{{ totalScore }}</div>

    <div class="score-label">Boss-Punkte + Challenge-Punkte</div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  bossScore: {
    type: Number,
    default: 0
  },
  challengeScore: {
    type: Number,
    default: 0
  }
})

const scoreBump = ref(false)

const totalScore = computed(() => props.bossScore + props.challengeScore)

watch(totalScore, (newVal, oldVal) => {
  if (newVal > oldVal) {
    scoreBump.value = true
    setTimeout(() => (scoreBump.value = false), 300)
  }
})
</script>

<style scoped>
.score-big {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: var(--gold);
  text-align: center;
  text-shadow: 0 0 24px rgba(201, 168, 76, 0.4);
  margin: 10px 0 20px;
  line-height: 1;
  transition: all 0.3s;
}

.score-big.bump {
  transform: scale(1.08);
  text-shadow: 0 0 40px rgba(201, 168, 76, 0.8);
}

.score-label {
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  color: var(--ash);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  margin-top: 6px;
}
</style>

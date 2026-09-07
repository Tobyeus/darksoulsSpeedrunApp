<template>
  <button
    class="burger-btn"
    :class="{ active: open }"
    @click="open = !open"
    aria-label="Spiel wechseln"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <transition name="fade">
    <div v-if="open" class="menu-backdrop" @click="open = false"></div>
  </transition>

  <transition name="slide">
    <nav v-if="open" class="side-menu">
      <div class="side-menu-title">Event wählen</div>

      <button
        v-for="game in games"
        :key="game.id"
        class="game-option"
        :class="{ active: currentGame === game.id }"
        :style="{ '--dot-color': game.accent }"
        @click="selectGame(game.id)"
      >
        <span class="game-dot"></span>
        <span class="game-texts">
          <span class="game-name">{{ game.title }}</span>
          <span class="game-hint">{{ game.subtitle }}</span>
        </span>
        <span class="game-check" v-if="currentGame === game.id">✓</span>
      </button>
    </nav>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import { currentGame, GAME_META } from '../store/game'

const open = ref(false)
const games = Object.values(GAME_META)

function selectGame(id) {
  currentGame.value = id
  open.value = false
}
</script>

<style scoped>
.burger-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 200;
  width: 42px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 2px;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.burger-btn:hover {
  border-color: var(--gold-dim);
  box-shadow: 0 0 16px var(--glow);
}

.burger-btn span {
  display: block;
  width: 18px;
  height: 1px;
  background: var(--gold);
  transition: transform 0.25s, opacity 0.2s;
}

.burger-btn.active span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.burger-btn.active span:nth-child(2) {
  opacity: 0;
}
.burger-btn.active span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.menu-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 150;
}

.side-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: min(280px, 80vw);
  background: var(--panel);
  border-right: 1px solid var(--panel-border);
  z-index: 180;
  padding: 84px 18px 24px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.6);
}

.side-menu-title {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-dim);
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--panel-border);
}

.game-option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 10px;
  margin-bottom: 8px;
  background: transparent;
  border: 1px solid var(--panel-border);
  border-radius: 2px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
}

.game-option:hover {
  border-color: var(--dot-color);
  background: rgba(255, 255, 255, 0.03);
}

.game-option.active {
  border-color: var(--dot-color);
  box-shadow: 0 0 16px color-mix(in srgb, var(--dot-color) 35%, transparent);
  background: rgba(255, 255, 255, 0.04);
}

.game-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--dot-color);
  box-shadow: 0 0 8px var(--dot-color);
  flex-shrink: 0;
}

.game-texts {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.game-name {
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  color: var(--bone);
}

.game-hint {
  font-size: 0.65rem;
  color: var(--ash);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.game-check {
  color: var(--dot-color);
  font-size: 0.8rem;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>

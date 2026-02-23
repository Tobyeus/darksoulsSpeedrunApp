<template>
  <div class="toast-container">
    <div class="toast" v-for="toast in toasts" :key="toast.id">
      {{ toast.msg }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  toasts: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toast {
  background: var(--panel);
  border: 1px solid var(--ember);
  color: var(--bone);
  padding: 10px 18px;
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  box-shadow: 0 0 20px var(--glow);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

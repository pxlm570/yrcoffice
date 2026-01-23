<template>
  <div class="loading-spinner" :class="sizeClass">
    <div class="spinner-ring"></div>
    <div class="spinner-ring"></div>
    <div class="spinner-ring"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const sizeClass = computed(() => `loading-spinner--${props.size}`)
</script>

<style scoped>
.loading-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.loading-spinner--sm { width: 24px; height: 24px; }
.loading-spinner--md { width: 40px; height: 40px; }
.loading-spinner--lg { width: 56px; height: 56px; }

.spinner-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
  animation: spin 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.loading-spinner--sm .spinner-ring {
  width: 100%;
  height: 100%;
}

.loading-spinner--md .spinner-ring {
  width: 100%;
  height: 100%;
}

.loading-spinner--lg .spinner-ring {
  width: 100%;
  height: 100%;
}

.spinner-ring:nth-child(1) {
  border-top-color: rgba(59, 130, 246, 0.8);
  animation-delay: 0s;
}

.spinner-ring:nth-child(2) {
  border-right-color: rgba(96, 165, 250, 0.6);
  animation-delay: -0.15s;
  width: 80%;
  height: 80%;
}

.spinner-ring:nth-child(3) {
  border-bottom-color: rgba(37, 99, 235, 0.4);
  animation-delay: -0.3s;
  width: 60%;
  height: 60%;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

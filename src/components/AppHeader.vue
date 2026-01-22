<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img :src="logoUrl" alt="御坂网络" class="logo-icon" />
        <span class="logo-text">御坂网络</span>
      </router-link>

      <!-- Navigation Links -->
      <nav class="nav">
        <router-link
          v-for="item in navItems"
          :key="item.key"
          :to="item.key"
          class="nav-item"
          :class="{ 'is-active': isActive(item.key) }"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- CTA Button -->
      <router-link to="/contact" class="cta-button">
        <span class="cta-text">开始合作</span>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)

const logoUrl = 'https://cdn.micono.eu.org/icon/logo.png'

const navItems = [
  { label: '首页', key: '/' },
  { label: '服务', key: '/services' }
]

const isActive = (path) => {
  return route.path === path
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ========== Floating Island Header ========== */
.header {
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.header-container {
  /* Floating Island Layout */
  max-width: 72rem; /* max-w-6xl */
  width: 100%;
  margin: 0 auto;
  padding: 0.875rem 3rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  /* Glassmorphism Effect */
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.5rem;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;

  pointer-events: auto;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: floatIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.header.is-scrolled .header-container {
  background: rgba(255, 255, 255, 0.12);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.08) inset;
  border-color: rgba(255, 255, 255, 0.15);
}

/* ========== Logo ========== */
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.logo-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.logo-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: -0.02em;
  transition: color 0.2s ease;
}

/* Logo hover effect */
.logo:hover .logo-text {
  color: rgba(255, 255, 255, 1);
}

.logo:hover .logo-icon {
  transform: scale(1.08);
}

/* ========== Navigation ========== */
.nav {
  display: none;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .nav {
    gap: 2rem;
  }
}

@media (min-width: 768px) {
  .nav {
    display: flex;
  }
}

.nav-item {
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.875rem;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.6);
  transform: translateX(-50%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.nav-item:hover {
  color: rgba(255, 255, 255, 1);
  background: rgba(255, 255, 255, 0.05);
}

.nav-item:hover::after {
  width: 60%;
}

.nav-item.is-active {
  color: rgba(255, 255, 255, 1);
}

.nav-item.is-active::after {
  width: 80%;
}

/* ========== CTA Button ========== */
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.cta-button:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}

.cta-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Mobile Responsive */
@media (max-width: 767px) {
  .logo-text {
    display: none;
  }

  .cta-text {
    display: none;
  }

  .cta-button::after {
    content: '合作';
  }

  .header-container {
    padding: 0.75rem 2rem;
    height: 56px;
    gap: 0.75rem;
  }

  .logo-icon {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0.625rem 1.5rem;
  }

  .logo-icon {
    width: 26px;
    height: 26px;
  }
}
</style>

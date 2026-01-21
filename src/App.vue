<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <div class="app-container">
        <AppHeader />
        <main class="main-content">
          <router-view />
        </main>
        <AppFooter />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { darkTheme, NMessageProvider } from 'naive-ui'
import { NConfigProvider } from 'naive-ui'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const themeOverrides = {
  common: {
    primaryColor: '#f9fafb',
    primaryColorHover: '#ffffff',
    primaryColorPressed: '#e5e7eb',
    primaryColorSuppl: '#f9fafb',
    bodyColor: '#e5e7eb',
    textColor1: '#f9fafb',
    textColor2: '#e5e7eb',
    textColor3: '#d1d5db',
    textColorDisabled: '#6b7280'
  }
}
</script>

<style>
/* Global Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Dark Neutral Colors */
  --color-bg-primary: #0a0a0f;
  --color-bg-secondary: #12121a;
  --color-bg-tertiary: #1a1a24;
  --color-bg-elevated: #1e1e2a;

  /* Accent Color - White/Gray */
  --color-accent: #f9fafb;
  --color-accent-hover: #ffffff;
  --color-accent-pressed: #e5e7eb;
  --color-accent-subtle: rgba(255, 255, 255, 0.1);

  /* Text Colors */
  --color-text-primary: #f9fafb;
  --color-text-secondary: #d1d5db;
  --color-text-tertiary: #9ca3af;
  --color-text-muted: #6b7280;

  /* Border Colors */
  --color-border-subtle: rgba(255, 255, 255, 0.06);
  --color-border-default: rgba(255, 255, 255, 0.1);

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-4xl: 96px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
}

h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
h2 { font-size: clamp(2rem, 4vw, 3rem); }
h3 { font-size: clamp(1.25rem, 2.5vw, 1.75rem); }
h4 { font-size: 1.125rem; }

p {
  line-height: 1.7;
  color: var(--color-text-secondary);
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-accent-hover);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--color-bg-elevated);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-muted);
}

/* Selection */
::selection {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Focus Visible */
:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.3);
  outline-offset: 2px;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--spacing-md);
  }
}

/* Section */
.section {
  padding: var(--spacing-4xl) 0;
}

@media (max-width: 768px) {
  .section {
    padding: var(--spacing-3xl) 0;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary);
}

.main-content {
  flex: 1;
}
</style>

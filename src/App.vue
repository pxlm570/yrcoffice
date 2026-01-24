<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <div class="app-container">
        <AppHeader />
        <main class="main-content">
          <router-view v-slot="{ Component }">
            <transition name="page-fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
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
    primaryColor: '#2563EB',                 // 统一蓝色主色
    primaryColorHover: '#5B8CFF',            // 蓝色悬停（浅亮）
    primaryColorPressed: '#1E4FCC',           // 蓝色按下（深色）
    primaryColorSuppl: '#2563EB',            // 蓝色辅助
    bodyColor: '#e5e7eb',
    textColor1: '#f9fafb',
    textColor2: '#e5e7eb',
    textColor3: '#d1d5db',
    textColorDisabled: '#6b7280'
  },
  Card: {
    color: 'rgba(255, 255, 255, 0.05)',
    colorModal: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(37, 99, 235, 0.15)',    // 蓝色边框
    borderRadius: '14px'
  },
  Button: {
    borderRadiusMedium: '10px',
    borderRadiusLarge: '12px',
    textColor: '#ffffff',
    textColorHover: '#ffffff',
    textColorPressed: '#ffffff',
    textColorFocus: '#ffffff',
    textColorDisabled: 'rgba(255, 255, 255, 0.5)'
  },
  Input: {
    borderRadius: '10px',
    border: '1px solid rgba(37, 99, 235, 0.2)',   // 统一蓝色边框
    borderHover: '1px solid #2563EB',           // 主蓝色悬停
    borderFocus: '1px solid #5B8CFF',           // 浅蓝色聚焦
    color: 'rgba(255, 255, 255, 0.06)',
    colorFocus: 'rgba(255, 255, 255, 0.08)'
  },
  Select: {
    borderRadius: '10px',
    border: '1px solid rgba(37, 99, 235, 0.2)',   // 统一蓝色边框
    borderHover: '1px solid #2563EB',           // 主蓝色悬停
    borderActive: '1px solid #5B8CFF',           // 浅蓝色激活
    peers: {
      InternalSelection: {
        color: 'rgba(255, 255, 255, 0.06)',
        colorActive: 'rgba(255, 255, 255, 0.08)'
      }
    }
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
  --color-border-strong: rgba(255, 255, 255, 0.15);

  /* Blue Color System - 统一 HSL(217, 91%, x%) */
  --color-blue-primary: #2563EB;      /* hsl(217, 91%, 60%) - 主蓝色 */
  --color-blue-secondary: #1E4FCC;    /* hsl(217, 91%, 50%) - 次级蓝 */
  --color-blue-tertiary: #173FA6;     /* hsl(217, 91%, 40%) - 三级蓝 */
  --color-blue-light: #5B8CFF;        /* hsl(217, 80%, 70%) - 浅亮蓝 */
  --color-blue-dark: #0D2647;         /* hsl(217, 91%, 25%) - 深蓝 */

  /* Blue Transparency - 蓝色透明层级 */
  --color-blue-subtle: hsla(217, 91%, 60%, 0.08);
  --color-blue-soft: hsla(217, 91%, 60%, 0.15);
  --color-blue-medium: hsla(217, 91%, 60%, 0.25);
  --color-blue-strong: hsla(217, 91%, 60%, 0.40);

  /* Gradients */
  /* --gradient-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%); */
  /* --gradient-accent: linear-gradient(135deg, #5B8CFF 0%, #2563EB 50%, #1E4FCC 100%); */
  /* --gradient-white: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(200,200,220,0.85) 100%); */
  /* --gradient-blue: linear-gradient(135deg, #5B8CFF 0%, #2563EB 50%, #1E4FCC 100%); */

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.2);
  --shadow-glow: 0 0 40px hsla(217, 91%, 60%, 0.15);

  /* Spacing */
  --space-3xs: 2px;
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.25, 1, 0.5, 1);
  --transition-slow: 400ms cubic-bezier(0.25, 1, 0.5, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
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
  padding: 0 var(--space-lg);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-md);
  }
}

/* Section */
.section {
  padding: var(--space-4xl) 0;
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-3xl) 0;
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

/* 页面过渡动画 */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

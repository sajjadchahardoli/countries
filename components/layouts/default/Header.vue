<template>
  <header class="default-header">
    <p class="title">Where in the world?</p>
    <div class="theme">
      <font-awesome-icon :icon="currentIcon" />
      <Button :label="currentLabel" text @click="toggleTheme" security="white"/>
    </div>
  </header>
</template>

<script setup>
import { useThemeStore } from "~/stores/theme";
import { computed, onMounted } from "vue";

//   data
const themeStore = useThemeStore();
const currentIcon = computed(() => (themeStore.isDark ? "sun" : "moon"));
const currentLabel = computed(() =>
  themeStore.isDark ? "Light Mode" : "Dark Mode"
);

// functions
const toggleTheme = () => {
  themeStore.toggleThemeMode();
};

// lifecycle hooks
onMounted(() => {
  themeStore.loadTheme();
});
</script>

<style lang="scss" scoped>
.default-header {
  @apply flex items-center justify-between;
  @apply bg-white dark:bg-midnight-blue;
  @apply text-charcoal dark:text-white;
  @apply py-4 px-10;

  .title {
    @apply text-base font-bold;
  }

  .theme {
    @apply flex items-center gap-2;

    .name {
      @apply text-sm;
    }
  }
}
</style>

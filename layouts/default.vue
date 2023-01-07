<template>
  <div>
    <ogp-head />
    <nav-bar />
    <main class="md:pl-2 md:pr-2 lg:pl-12 lg:pr-12">
      <slot />
    </main>
    <app-footer class="fixed bottom-0" />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

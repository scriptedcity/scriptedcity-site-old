<template>
  <div>
    <ogp-head />
    <nav-bar />
    <main
      class="md:pl-2 md:pr-2 lg:pl-12 lg:pr-12 xl:pl-20 xl:pr-20 2xl:pr-32 2xl:pl-32"
    >
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

<template>
  <div
    class="group relative bg-text/10 dark:bg-text-dark/10 shadow-[#5EEAD4]/30 hover:shadow-lg backdrop-blur-2xl rounded-2xl size-full overflow-hidden text-light-gray dark:text-light-gray-dark transition-shadow"
  >
    <div
      class="z-50 relative before:opacity-0 group-hover:before:opacity-100 before:p-1 border-gradient-rounded before:rounded-2xl size-full before:transition hover:before:duration-300 pointer-events-none"
    ></div>
    <div
      class="z-40 absolute inset-0 p-4 border-2 border-light-gray/40 dark:border-light-gray-dark/40 rounded-inherit pointer-events-auto"
    >
      <slot />
    </div>
  </div>
</template>

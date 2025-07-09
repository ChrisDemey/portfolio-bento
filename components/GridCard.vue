<template>
  <div class="group relative size-full">
    <div
      class="z-0 absolute bg-gradient-to-b from-[#F472B6] to-[#5EEAD4] to-75% shadow-teal-500/50 group-hover:shadow-lg rounded-xl size-full"
    />
    <div
      class="z-10 absolute group-hover:p-1.5 size-full duration-300 transform"
    >
      <div
        class="relative bg-card-dark shadow-black/40 group-hover:shadow-inner p-4 border border-medium-gray group-hover:border-0 rounded-xl group-hover:rounded-lg size-full overflow-hidden text-light-gray duration-300 transform"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<template>
  <div class="relative group size-full">
    <div
      class="rounded-xl group-hover:shadow-lg shadow-teal-500/50 absolute z-0 size-full bg-gradient-to-b from-[#F472B6] to-[#5EEAD4] to-75%"
    />
    <div
      class="z-10 size-full absolute transform duration-300 group-hover:p-1.5"
    >
      <div
        class="group-hover:shadow-inner shadow-black/40 p-4 size-full group-hover:border-0 border transform duration-300 border-medium-gray text-light-gray overflow-hidden relative group-hover:rounded-lg rounded-xl bg-card-dark"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

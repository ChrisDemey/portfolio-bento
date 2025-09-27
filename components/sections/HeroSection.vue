<template>
  <section class="flex justify-center items-center w-full lg:max-w-1/2 h-svh lg:h-full">
    <div class="relative flex flex-col justify-center items-center size-full">
      <div class="z-10 relative w-full uppercase">
        <h1 class="font-thin text-2xl lg:text-4xl text-center lg:text-end tracking-widest">
          développeur web
        </h1>
        <h2 class="font-bold text-5xl lg:text-8xl text-center lg:text-end">
          Chriswave
        </h2>
        <h3 class="mt-4 px-4 lg:px-0 lg:pr-2 font-thin text-lg lg:text-3xl text-center lg:text-end leading-6 lg:leading-10 tracking-widest">
          Création de <span class="font-bold">sites web</span> et
          <span class="font-bold">solutions digitales</span> (SaaS)
        </h3>

        <!-- Mobile scroll indicator -->
        <div class="lg:hidden right-0 bottom-0 left-0 absolute flex justify-center mt-12 -mb-20">
          <svg
            class="border-2 rounded-full w-8 h-8 text-current animate-bounce cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="scrollToBento"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { scrollToBento } = useNavigation()
</script>
<template>
  <main>
    <div
      v-bind="props"
      :class="
        cn(
          'transition-bg flex flex-col items-center justify-center ',
          props.class,
        )
      "
    >
      <div
        :style="styles"
        class="absolute inset-0 overflow-hidden"
      >
        <div
          :class="
            cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--teal-d)_10%,var(--pink-m)_15%,var(--teal-l)_20%,var(--pink-l)_25%,var(--teal-m)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[''] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              props.radialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )
          "
        />
      </div>
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { computed } from "vue";

interface AuroraBackgroundProps {
  radialGradient?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<AuroraBackgroundProps>(), {
  radialGradient: true,
});

const styles = computed(() => {
  return {
    "--aurora":
      "repeating-linear-gradient(100deg,var(--teal-d)_10%,var(--pink-m)_15%,var(--teal-l)_20%,var(--pink-l)_25%,var(--teal-m)_30%)",
    "--dark-gradient":
      "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
    "--white-gradient":
      "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

    "--teal-l": "var(--teal-light)",
    "--teal-m": "var(--teal-medium)",
    "--teal-d": "var(--teal-dark)",
    "--pink-m": "var(--pink-light)",
    "--pink-l": "#000",
    "--black": "#000",
    "--white": "#000",
    "--transparent": "transparent",
    "--animate-aurora": "aurora 60s linear infinite",
  };
});
</script>

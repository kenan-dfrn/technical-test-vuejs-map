<template>
  <div class="marker-icon">
    <img class="marker-image" :src="image" :alt="`Avatar for ${marker.label}`" />
    <div class="marker-label">{{ marker.label }}</div>
  </div>
</template>

<script setup lang="ts">
import type { MarkerType } from "~/types/maps/FloorMap";

  const props = defineProps({
    marker: { type: Object as PropType<MarkerType>, required: true },
    image: { type: String, required: true }, // TODO : remove this when using real images
  });
</script>


<style lang="scss" scoped>
.marker {
  &-icon {
    @apply z-50 relative flex flex-col items-center gap-2 cursor-pointer;
    transition: transform 0.2s ease-in-out;
    
    &:hover {
      transform: scale(1.1);
    }
  }
  &-image {
    @apply h-12 w-12 rounded-full border-2 border-black object-cover;
  }
  &-label {
    @apply p-1 text-xs text-center text-black bg-white rounded-lg border border-black shadow-md;
  }
}
</style>
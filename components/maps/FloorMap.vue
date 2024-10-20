<template>
  <div class="map-container">
    <div ref="mapContainer" class="leaflet-map" />
    <button class="zoom-button">Zoom to Dwight's Desk</button>
  </div>
</template>

<script setup lang="ts">
  import L from 'leaflet'
  import type { MarkerType } from '@/types/maps/FloorMap'

  const props = defineProps({
    markers: { type: Array as PropType<MarkerType[]>, required: false, default: () => [] },
    floorPlanUrl: { type: String, required: true },
  })
  
  const mapContainer = ref<HTMLDivElement | null>(null);
  const map = ref<L.Map | null>(null);

  onMounted(async () => {
    const bounds = [[0, 0], [1079, 2159]];

    if (mapContainer.value) {
      map.value = L.map(mapContainer.value, {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 1,
        zoom: -1,
        center: [0, 0],
      });

      L.imageOverlay(props.floorPlanUrl, bounds).addTo(map.value);
      map.value.fitBounds(bounds);
    }
  });


</script>

<style lang="scss" scoped>
.map-container {
  @apply flex flex-col items-center;
  .leaflet-map {
    @apply w-full h-full border-2 rounded-lg border-black;
  }
  .zoom-button {
    @apply mt-5 py-2 px-4 cursor-pointer text-lg rounded-md text-white bg-black;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      @apply bg-gray-700;
    }
  }
}
</style>
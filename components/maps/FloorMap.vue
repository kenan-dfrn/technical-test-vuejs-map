<template>
  <div class="map-container">
    <template v-if="imageError">
      <p class="text-red-500">There was an error loading the floor plan image.</p>
    </template>
    <template v-else>
      <div ref="mapContainer" class="leaflet-map" />
      <button @click="zoomToMarker('Dwight')" class="zoom-button">Zoom to Dwight's Desk</button>
    </template>
  </div>
</template>

<script setup lang="ts">
  import L from 'leaflet'
  import MarkerIcon from '@/components/maps/MarkerIcon.vue'
  import { createVNode, render } from 'vue';
  import { getImageSize } from '@/utils/images'
  import type { MarkerType } from '@/types/maps/FloorMap'



  const props = defineProps({
    markers: { type: Array as PropType<MarkerType[]>, required: false, default: () => [] },
    floorPlanUrl: { type: String, required: true },
  })
  
  const mapContainer = ref<HTMLDivElement | null>(null);
  const map = ref<L.Map | null>(null);
  const markersLayer = ref<L.LayerGroup | null>(null);

  const imageSize = ref<{ width: number; height: number }>({ width: 0, height: 0 });
  const imageError = ref<boolean>(false);

  onMounted(async () => {
    try {
      imageSize.value = await getImageSize(props.floorPlanUrl);
      await initializeMap().then(() => addMarkers(props.markers, MarkerIcon));
    } catch (error) {
      imageError.value = true;
    }
  });

  
  const initializeMap = async () => {
    const bounds = [[0, 0], [imageSize.value.height, imageSize.value.width]];

    if (mapContainer.value) {
      map.value = L.map(mapContainer.value, {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 1,
        zoom: -1,
      });

      L.imageOverlay(props.floorPlanUrl, bounds).addTo(map.value);
      map.value.fitBounds(bounds);
    }
  }

  const addMarkers = (markers: MarkerType[], markerComponent: Component) => {
    if (map.value) {
      markersLayer.value = L.layerGroup();
      markers.forEach((marker: MarkerType) => {
        const markerDiv = document.createElement('div');
        const markerImage = generatedMarkerImage(marker); // TODO : remove this when using real images
        
        const markerVNode = createVNode(MarkerIcon, { marker, image: markerImage });
        render(markerVNode, markerDiv);

        const leafletMarker = L.marker([marker.y, marker.x], {
          icon: L.divIcon({
            className: 'custom-marker',
            html: markerDiv.innerHTML,
          }),
        });

        leafletMarker.addTo(markersLayer.value as L.LayerGroup).on('click', () => zoomToMarker(marker.id));
      });

      markersLayer.value.addTo(map.value);
    }
  };

  // TODO : remove this when using real images
  const generatedMarkerImage = (marker: MarkerType) => {
    return `https://picsum.photos/200?random=${marker.id}`;
  }

  const zoomToMarker = (id: number | string) => {
    const askedMarker = props.markers.find((marker: MarkerType) => marker.id === id || marker.label === id);
    if (askedMarker && map.value) {
      map.value.setView([askedMarker.y, askedMarker.x], 0);
    }
  }
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
<template>
  <div id="home__page">
    <div id="map__section">
      <div class="section-header">
        <h1>Office Floor Map</h1>
        <p>Click on the markers to see who sits where.</p>
      </div>
      <div class="section-content">
        <client-only>
          <FloorMap id="floor-map" :markers="markers" :floorPlanUrl="floorPlanUrl" />
        </client-only>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { useFloorMapStore } from '@/store/floorMap'
import type { MarkerType } from '@/types/maps/FloorMap'

const floorMapStore = useFloorMapStore()

const markers: MarkerType[] = floorMapStore.markers
const floorPlanUrl: string = floorMapStore.floorPlanUrl
</script>

<style lang="scss" scoped>
#home__page {
  @apply my-16;
  #map__section {
    @apply container px-5 mx-auto flex flex-col gap-5;
    .section-header {
      @apply flex flex-col items-center justify-center gap-2;
      h1 {
        @apply text-3xl font-bold;
      }
    }
    .section-content {
      #floor-map {
        height: 800px;
        width: 100%;
      }
    }
  }
}
</style>
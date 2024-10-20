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
import type { MarkerType } from '@/types/maps/FloorMap'

const floorPlanUrl = '/office_floor.jpg'; // Path to the floor plan image
const markers: MarkerType[] = [
    { id: 1, x: 350, y: 1010, label: 'Michael' },
    { id: 2, x: 430, y: 620, label: 'Jim' },
    { id: 3, x: 530, y: 450, label: 'Dwight' },
    { id: 4, x: 130, y: 520, label: 'Pam' },
];
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
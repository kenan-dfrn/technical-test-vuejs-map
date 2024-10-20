<template>
  <div>
    <h1>Floor Map</h1>
    <client-only>
      <FloorMap id="floor-map" :markers="markers" :floorPlanUrl="floorPlanUrl" />
    </client-only>
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
#floor-map {
  height: 800px;
  width: 100%;
}
</style>
import { defineStore } from 'pinia'

export const useFloorMapStore = defineStore('floorMap', {
  state: () => ({
    floorPlanUrl: '/office_floor.jpg',
    markers: [
      { id: 1, x: 350, y: 1010, label: 'Michael', imageUrl: '/avatars/michael.jpg' },
      { id: 2, x: 430, y: 620, label: 'Jim', imageUrl: '/avatars/jim.jpg' },
      { id: 3, x: 530, y: 450, label: 'Dwight', imageUrl: '/avatars/dwight.jpg' },
      { id: 4, x: 130, y: 520, label: 'Pam', imageUrl: '/avatars/pam.png' }
    ]
  })
})
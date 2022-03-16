<script setup lang="ts">
import Menu from './components/Menu.vue';
import { PencilIcon } from '@heroicons/vue/solid';

const navigationItems = [
  {
    label: 'Edit',
    icon: PencilIcon,
    onClick: () => '',
  },
];
</script>

<template>
  <Menu :navigation-items="navigationItems" />
</template>

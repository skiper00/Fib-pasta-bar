<template>
    <div class="mt-12 flex flex-col">
        <h2 class="font-body font-bold mb-7 text-xl">Отзывы</h2>
        <div class="flex gap-[53px] ">
            <div class="text-center font-body font-semibold text-gray-400" v-for="(user, index) in users" :key="index">
                <img class="w-24 h-24" :src="`/icons/${user.avatar}`" :alt="user.name" />
                <p class="mt-4">{{ user.name }}</p>
            </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const users = [
    { name: 'james_deen', avatar: 'Avatar-1.svg' },
    { name: 'niki_dial', avatar: 'Avatar-2.svg' },
    { name: 'mark_davis', avatar: 'Avatar-3.svg' },
    { name: 'kyla_cole', avatar: 'Avatar-4.svg' },
    { name: 'kiara_diane', avatar: 'Avatar-5.svg' },
    { name: 'pat_myne', avatar: 'Avatar-6.svg' },
    { name: 'mary_carey', avatar: 'Avatar-7.svg' },
    { name: 'kyle_stone', avatar: 'Avatar-8.svg' },
  ];
  </script>
  
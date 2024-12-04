<template>
    <div class="w-[1555px] px-[220px]">
        <h1 class="font-body font-bold text-3xl mb-[25px] text-brightRaspberry">Акции</h1>
        <div class="grid grid-cols-3">
            <StockCard />

        </div>
    </div>
</template>

<script lang="ts" setup>
import StockCard from '@/components/product/StockCard.vue';

</script>
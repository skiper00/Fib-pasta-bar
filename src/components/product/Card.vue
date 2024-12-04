<template>
    <div class="card bg-white rounded-lg shadow-md p-4 w-[256px]">
        <img
            :src="image_url"
            :alt="name"
            class="rounded-lg w-full object-cover"
        />
        <div class="mt-[4px] font-body">
            <p class="text-2xl font-extrabold text-black">{{ name }}</p>
            <p class="font-medium text-[12px] text-gray-500 mt-[18px]">{{ description }}</p>
        </div>
        <div class="mt-[31px] flex items-center justify-between">
            <span class="text-[22px] font-body font-bold text-black">от {{ price }} ₽</span>
            <button
                @click="addToCart"
                class="bg-goldenSaffron text-white px-4 py-2 rounded-lg transition hover:bg-[#DEBD29] hover:text-[#473E43]"
            >
                В корзину
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';




const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image_url: { type: String, required: true },
  categories_id: { type: Object, required: true },
});

// Определяем событие для родительского компонента
const emit = defineEmits(['add-to-cart']);

// Функция для передачи события добавления в корзину
function addToCart() {
  emit('add-to-cart', {
    id: props.id,
    name: props.name,
    price: props.price,
    description: props.description,
    image_url: props.image_url,
    categories_id: props.categories_id,
  });
}


</script>


<style scoped>
.card {
    transition: transform 0.2s ease-in-out;
}
.card:hover {
    transform: scale(1.05);
}
</style>

<template>
    <footer class="pt-14 px-[220px] pb-[72px] relative bg-white">
      <div class="flex justify-between items-start">
        <!-- Левая часть: логотип и ссылки на соцсети -->
        <div>
          <!-- Логотип -->
          <div class="flex items-center gap-4 mb-10 font-body">
            <img src="/public/icons/Logo (1).svg" alt="Logo" class="w-16 h-16" />
            <div>
              <h1 class="font-extrabold text-[39px]">YA BAO</h1>
              <p class="text-xs text-gray-600 uppercase">Дух китайской еды</p>
            </div>
          </div>
          
          <!-- Ссылки -->
          <div class="flex gap-16 font-body">
            <ul>
              <li class="font-bold text-lg mb-4">Калорийность и состав</li>
              <li class="font-bold text-lg mb-4">Мы в соцсетях</li>
              <li class="text-gray-600 hover:text-gray-800 cursor-pointer mb-2">YouTube</li>
              <li class="text-gray-600 hover:text-gray-800 cursor-pointer">Instagram</li>
            </ul>
            <ul>
              <li class="font-bold text-lg mb-4">Правовая информация</li>
              <li class="text-gray-600 hover:text-gray-800 cursor-pointer mb-2">Facebook</li>
              <li class="text-gray-600 hover:text-gray-800 cursor-pointer">ВКонтакте</li>
            </ul>
          </div>
        </div>
        
        <!-- Правая часть: Контакты и иконки соцсетей -->
        <div class="mt-[20px] font-body z-10">
          <h2 class="font-bold uppercase text-gray-600 text-sm mb-4">Остались вопросы? А мы всегда на связи:</h2>
          <div class="flex grid-icons gap-4 mb-6">
            <!-- Иконки соцсетей -->
            <div class="w-[101px] h-[52px] border-[3px] border-gray-200 rounded-xl flex items-center justify-center">
              <img src="/public/icons/Viber.svg" alt="Viber" class="w-6 h-6" />
            </div>
            <div class="w-[101px] h-[52px] border-[3px] border-gray-200 rounded-xl flex items-center justify-center">
              <img src="/public/icons/Skype.svg" alt="Skype" class="w-6 h-6" />
            </div>
            <div class="w-[101px] h-[52px] border-[3px] border-gray-200 rounded-xl flex items-center justify-center">
              <img src="/public/icons/DaemonTools.svg" alt="DaemonTools" class="w-6 h-6" />
            </div>
            <div class="w-[101px] h-[52px] border-[3px] border-gray-200 rounded-xl flex items-center justify-center">
              <img src="/public/icons/Telegram.svg" alt="Telegram" class="w-6 h-6" />
            </div>
            <div class="w-[101px] h-[52px] border-[3px] border-gray-200 rounded-xl flex items-center justify-center">
              <img src="/public/icons/Facebook.svg" alt="Facebook" class="w-6 h-6" />
            </div>
            <div class="w-[101px] h-[52px] border-[3px] border-gray-200 rounded-xl flex items-center justify-center">
              <img src="/public/icons/VK.svg" alt="VK" class="w-6 h-6" />
            </div>
            <div class="w-[220px] h-[52px] border border-gray-200 rounded-xl flex items-center justify-center">
              <p class="font-bold text-sm text-gray-600">Написать нам</p>
            </div>
          </div>
          <p class="text-3xl font-bold text-goldenSaffron mt-12">8 800 333-36-62</p>
         
        </div>
      </div>
      
      <!-- Нижняя часть футера: телефон, логотипы банков и кнопка -->
      <div class="inline-flex items-center mt-4 gap-56 ">
        <p class="text-gray-600 text-sm">YaBao Все права защищены © 2021</p>
        
        <div class="flex items-center gap-16">
          <!-- Логотипы банков -->
          <div class="flex gap-4">
            <img src="/public/icons/Visa.svg" alt="Visa" class="w-8" />
            <img src="/public/icons/PayPal.svg" alt="PayPal" class="w-8" />
            <img src="/public/icons/Mastercard.svg" alt="Mastercard" class="w-8" />
          </div>
          
          <!-- Номер телефона и кнопка -->
          <div class="">
            <button class="py-2 px-5 bg-gray-100 rounded-[28px] hover:bg-gray-200 transition">
              <p class="font-bold font-body text-sm px-[28px] py-[7px] text-gray-600">Заказать звонок</p>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Изображение лапши -->
      <div class="absolute right-12 bottom-0">
        <img src="/public/icons/image 16.png" alt="Noodle bowl" class="w-[312px] h-[245px]" />
      </div>
    </footer>
  </template>
  
  <style setup> 
  .grid-icons{
      display: grid;
      grid-template-columns: repeat(4, 110px);
      gap: 10px;
  
  }
  </style>
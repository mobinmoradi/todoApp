<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div>
    <header class="bg-gray-200 h-8 shadow drop-shadow shadow-gray-300">
    </header>
    <div class="flex gap-3">
      <aside class="bg-green-100 h-screen transition-all delay-500 hover:w-1/5 w-6 overflow-hidden py-6 shadow-md shadow-gray-300">          
          <router-link to="/add" class="flex gap-1 items-center w-full pl-8 hover:border-r-2 hover:bg-green-200 border-green-800 h-10 text-lg">
              <Icon icon="carbon:add-filled" />
              <p>add</p>
          </router-link>
          <router-link to="/list" class="flex gap-1 items-center w-full pl-9 hover:border-r-2 hover:bg-green-200 border-green-800 h-10 text-lg">
              <Icon icon="fa-solid:clipboard-list" />
              <p>list</p>
          </router-link>
      </aside>
      <main>
        <router-view />
      </main>
    </div>

  </div>
</template>

<style >
</style>

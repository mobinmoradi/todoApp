<script >

export default {
  data() {
    return {
      sidebarTaggle: false,
      loading: true
    }
  },
  methods: {
    menuTaggle() {
      this.sidebarTaggle = !this.sidebarTaggle
    }
  }
}

</script>

<template>
  <div>



    <div class="flex " >
      <aside class="z-10 relative bg-green-200 h-screen transition-all duration-500	 py-6 shadow-lg shadow-gray-400 "
        :class="{ 'w-8': sidebarTaggle, 'w-1/6': !sidebarTaggle }">
        <div
          class="cursor-pointer absolute shadow-md shadow-gray-400 bg-gray-200 p-1 inline-block right-0 translate-x-5 rounded-full text-3xl"
          @click="menuTaggle">
          <Icon icon="fluent:arrow-circle-left-12-filled" class="transition-all duration-500	text-green-600"
            :class="{ 'rotate-180': sidebarTaggle }" />
        </div>
        <router-link to="/add"
          class=" border-b-green-300 border-t flex gap-2 items-center w-full pl-8 mt-14 hover:border-r-2  hover:pl-12 transition-all duration-500 py-6 hover:bg-green-200  border-green-800 h-10 text-lg"
          :class="{ '-translate-x-20': sidebarTaggle }">
          <Icon icon="gridicons:add" />
          <span class="font-semibold">add</span>
        </router-link>
        <router-link to="/list"
          class="border-b-green-300 border-t flex gap-2 items-center w-full pl-9 hover:border-r-2 hover:pl-12 transition-all duration-500 py-6	 hover:bg-green-200  border-green-800 h-10 text-lg"
          :class="{ '-translate-x-20': sidebarTaggle }">
          <Icon icon="fa-solid:clipboard-list" />
          <span class="font-semibold">list</span>
        </router-link>
      </aside>
      <main class="w-screen  ">
        <header class="w-full bg-green-100 h-10">

        </header>
        <router-view />
      </main>
    </div>

  </div>
</template>

<style >
</style>

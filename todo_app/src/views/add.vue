<template>
    <div>
        <div class="w-10/12 h-auto bg-green-50 mx-auto mt-10 p-16 rounded-xl">
            <form class="flex flex-col">
                <div class="flex  justify-between">
                    <input
                        class=" bg-transparent border-b border-green-500 w-7/12  text-gray-700 placeholder:text-gray-700 mr-3  py-2 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="Title" v-model="title">
                   
                    <select v-model="Priority"
                        class=" bg-transparent border-b border-green-500 w-3/12 text-gray-700 mr-3  py-2 px-2 leading-tight focus:outline-none">
                        <option value="null" disabled selected>Priority</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="flex  justify-between mt-16">
                    <input
                        class=" bg-transparent border-b border-green-500 w-4/12 text-gray-700 placeholder:text-gray-700 mr-3  py-2 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="Category" list="cat" v-model="cat">
                    <datalist id="cat">
                        
                    </datalist>
                    <flat-pickr
                        class=" bg-transparent border-b border-green-500 w-3/12 text-gray-700 placeholder:text-gray-700 mr-3  py-2 px-2 leading-tight focus:outline-none"
                        v-model="date" placeholder="Deadline "></flat-pickr>
                </div>
                <div class="flex  justify-start gap-4 mt-16">
                    <button type="submit" class=" md:w-fit inline-flex items-center	 rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600  font-medium text-white hover:bg-green-700 focus:outline-none "><Icon icon="ic:baseline-add-task" class="mr-1 text-xl"/>  <span>Add</span></button>
                    <input type="reset" class=" md:w-fit inline-flex items-center	 rounded-md border border-green-600 shadow-sm px-4 py-2 bg-transparent  font-medium text-green-600 hover:bg-green-100 cursor-pointer focus:outline-none "/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    data() {
        return {
            date: null,
            Priority:null,
            title:null,
            cat:null,
        }
    },
    components: {
        flatPickr
    }
}
</script>

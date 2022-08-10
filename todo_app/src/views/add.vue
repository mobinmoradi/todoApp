<template>
    <div>
        <div class="w-10/12 border  h-auto bg-green-50 mx-auto mt-10 p-16 rounded-xl shadow-md">
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
                    <button type="submit" @click.prevent="add()"
                        class=" md:w-fit inline-flex items-center	 rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600  font-medium text-white hover:bg-green-700 focus:outline-none ">
                        <Icon icon="ic:baseline-add-task" class="mr-1 text-xl" /> <span>Add</span>
                    </button>
                    <input type="reset"
                        class=" md:w-fit inline-flex items-center	 rounded-md border border-green-600 shadow-sm px-4 py-2 bg-transparent  font-medium text-green-600 hover:bg-green-100 cursor-pointer focus:outline-none " />
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import Validator from 'fastest-validator'

const v = new Validator();

const schema = {
    title: { type: "string", min: 1 },
    cat: { type: "string", min: 1 },
    Priority: { type: "string", min: 1 },
    date: { type: "string", min: 1 }
};



export default {
    data() {
        return {
            date: null,
            Priority: null,
            title: null,
            cat: null,
        }
    },
    components: {
        flatPickr
    },
    methods: {
        add() {
            const check = v.compile(schema);
            const valid = check({
                date: this.date,
                Priority: this.Priority,
                title: this.title,
                cat: this.cat,
            });

            if (valid === true) {
                let data = {
                    title: this.title,
                    Priority: this.Priority,
                    cat: this.cat,
                    date: this.date,
                    id:this.$store.state.leng++
                }
                this.$store.commit('addTask', data);
                this.$swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        },
                        title: 'Task added successfully',
                        icon: 'success',
                    })
                this.date = null
                this.Priority = null
                this.title = null
                this.cat = null
            }


        }
    },
    computed: {

    }
}
</script>

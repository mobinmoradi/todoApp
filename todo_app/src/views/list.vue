<template>
    <div>
        <div class="border overflow-x-auto w-10/12 mx-auto my-12 relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left  ">
                <thead class="text-md bg-green-200 ">
                    <tr>
                        <th scope="col" class="py-3 px-6">Title</th>
                        <th scope="col" class="py-3 px-6">
                            <div class="flex items-center">
                                Category
                                <a @click="chengesortingMethod('cat', true)" href="#"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true"
                                        fill="currentColor" viewBox="0 0 320 512">
                                        <path
                                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                    </svg></a>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <div class="flex items-center">
                                Priority
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3"
                                        aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                                        <path
                                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                    </svg></a>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <div class="flex items-center">
                                deadline
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3"
                                        aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                                        <path
                                            d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                    </svg></a>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <span class="sr-only">asd</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class=" border-b odd:bg-green-50 even:bg-green-100" v-for="d in sortedItems()">
                        <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap e">
                            {{ d.title }}
                        </th>
                        <td class="py-4 px-6">
                            {{ d.cat }}
                        </td>
                        <td class="py-4 px-6 ">
                            {{ d.Priority }}
                        </td>
                        <td class="py-4 px-6">
                            {{ d.date }}
                        </td>
                        <td class="py-4  text-right">
                            <a href="#" @click="deleteItem(d)" class="text-2xl text-red-600 hover:text-red-400 ">
                                <Icon icon="ant-design:delete-filled" />
                            </a>

                        </td>
                    </tr>

                </tbody>
            </table>
            <div class="h-36 bg-green-50 flex justify-center items-center gap-5 w-full " v-if="isEmpty()">
                <Icon icon="line-md:coffee-half-empty-twotone-loop" class="text-7xl" />
                <span class="text-xl font-semibold">The task list is empty</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['tasks'])
    },
    data() {
        return {
            items: [],
            sortMethod: {
                by: '',
                isDesc: false
            }
        }
    },
    mounted() {
        this.items = this.tasks
    },
    methods: {
        sortedItems() {
            let counter = 0;
            let sItems

            if (this.sortMethod.by) {
                sItems = this.items.sort((a, b) => { 
                    console.log(counter++);
                    return -1 })
            } else sItems = this.items

            console.log(counter);

            return sItems
        },
        chengesortingMethod(by, isDesc) {
            this.sortMethod = { by, isDesc }
        },
        isEmpty() {
            if (this.items.length == 0) {
                return true
            } else {
                return false
            }
        },
        deleteItem(item) {
            this.$swal.fire({
                title: 'Do you want to delete the desired task?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                confirmButtonText: 'delete',


            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    this.$store.commit('deleteItem', item);
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
                        title: 'The desired task was deleted!',
                        icon: 'warning',
                    })
                }
            })

        }
    }
}
</script>
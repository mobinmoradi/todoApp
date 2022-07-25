<template>
    <div>
        <div class="border overflow-x-auto w-10/12 mx-auto my-12 relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left  ">
                <thead class="text-md bg-green-200 ">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            <div class="flex items-center">
                                Title
                                <a v-if="sortMethod.by != 'title'" class="ml-1" @click="chengesortingMethod('title', true)" href="#"><Icon icon="fa-solid:sort" /></a>
                                <a v-else-if="sortMethod.by == 'title' && sortMethod.isDesc" class="ml-1" @click="chengesortingMethod('title', false)" href="#"><Icon icon="fa-solid:sort-down" /></a>
                                <a v-else-if="sortMethod.by == 'title' && !sortMethod.isDesc" class="ml-1" @click="chengesortingMethod('title', true)" href="#"><Icon icon="fa-solid:sort-up" /></a>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <div class="flex items-center">
                                Category
                                <a v-if="sortMethod.by != 'cat'" class="ml-1" @click="chengesortingMethod('cat', true)" href="#"><Icon icon="fa-solid:sort" /></a>
                                <a v-else-if="sortMethod.by == 'cat' && sortMethod.isDesc" class="ml-1" @click="chengesortingMethod('cat', false)" href="#"><Icon icon="fa-solid:sort-down" /></a>
                                <a v-else-if="sortMethod.by == 'cat' && !sortMethod.isDesc" class="ml-1" @click="chengesortingMethod('cat', true)" href="#"><Icon icon="fa-solid:sort-up" /></a>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <div class="flex items-center">
                                Priority
                                <a v-if="sortMethod.by != 'Priority'" class="ml-1" @click="chengesortingMethod('Priority', true)" href="#"><Icon icon="fa-solid:sort" /></a>
                                <a v-else-if="sortMethod.by == 'Priority' && sortMethod.isDesc" class="ml-1" @click="chengesortingMethod('Priority', false)" href="#"><Icon icon="fa-solid:sort-down" /></a>
                                <a v-else-if="sortMethod.by == 'Priority' && !sortMethod.isDesc" class="ml-1" @click="chengesortingMethod('Priority', true)" href="#"><Icon icon="fa-solid:sort-up" /></a>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <div class="flex items-center">
                                deadline
                                <a v-if="sortMethod.by != 'date'" class="ml-1" @click="chengesortingMethod('date', true)" href="#"><Icon icon="fa-solid:sort" /></a>
                                <a v-else-if="sortMethod.by == 'date' && sortMethod.isDesc" class="ml-1" @click="chengesortingMethod('date', false)" href="#"><Icon icon="fa-solid:sort-down" /></a>
                                <a v-else-if="sortMethod.by == 'date' && !sortMethod.isDesc" class="ml-1" @click="chengesortingMethod('date', true)" href="#"><Icon icon="fa-solid:sort-up" /></a>
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
            let sItems

            if (this.sortMethod.by) {
                sItems = this.items.sort((a, b) => {
                    if(a[this.sortMethod.by]>b[this.sortMethod.by]) return 1;
                    else if(a[this.sortMethod.by] == b[this.sortMethod.by]) return 0;
                    else return -1;
                })
                if(this.sortMethod.isDesc) sItems = sItems.reverse()
                
            } else sItems = this.items

            

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
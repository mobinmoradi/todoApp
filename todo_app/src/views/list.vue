<template>
    <div>
        <div class="border overflow-x-auto w-10/12 mx-auto my-12 relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left  ">
                <thead class="text-md bg-green-200 ">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            <div class="">
                                #
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <div class="flex items-center justify-center">
                                Title
                                <a v-if="sortMethod.by != 'title'" class="ml-1"
                                    @click="chengesortingMethod('title', true)" href="#">
                                    <Icon icon="fa-solid:sort" />
                                </a>
                                <a v-else-if="sortMethod.by == 'title' && sortMethod.isDesc" class="ml-1"
                                    @click="chengesortingMethod('title', false)" href="#">
                                    <Icon icon="fa-solid:sort-down" />
                                </a>
                                <a v-else-if="sortMethod.by == 'title' && !sortMethod.isDesc" class="ml-1"
                                    @click="chengesortingMethod('title', true)" href="#">
                                    <Icon icon="fa-solid:sort-up" />
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6 ">
                            <div class="flex items-center justify-center">
                                Category
                                <a v-if="sortMethod.by != 'cat'" class="ml-1" @click="chengesortingMethod('cat', true)"
                                    href="#">
                                    <Icon icon="fa-solid:sort" />
                                </a>
                                <a v-else-if="sortMethod.by == 'cat' && sortMethod.isDesc" class="ml-1"
                                    @click="chengesortingMethod('cat', false)" href="#">
                                    <Icon icon="fa-solid:sort-down" />
                                </a>
                                <a v-else-if="sortMethod.by == 'cat' && !sortMethod.isDesc" class="ml-1"
                                    @click="chengesortingMethod('cat', true)" href="#">
                                    <Icon icon="fa-solid:sort-up" />
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <div class="flex items-center justify-center">
                                Priority
                                <a v-if="sortMethod.by != 'Priority'" class="ml-1"
                                    @click="chengesortingMethod('Priority', true)" href="#">
                                    <Icon icon="fa-solid:sort" />
                                </a>
                                <a v-else-if="sortMethod.by == 'Priority' && sortMethod.isDesc" class="ml-1"
                                    @click="chengesortingMethod('Priority', false)" href="#">
                                    <Icon icon="fa-solid:sort-down" />
                                </a>
                                <a v-else-if="sortMethod.by == 'Priority' && !sortMethod.isDesc" class="ml-1"
                                    @click="chengesortingMethod('Priority', true)" href="#">
                                    <Icon icon="fa-solid:sort-up" />
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <div class="flex items-center">
                                deadline
                                <a v-if="sortMethod.by != 'date'" class="ml-1"
                                    @click="chengesortingMethod('date', true)" href="#">
                                    <Icon icon="fa-solid:sort" />
                                </a>
                                <a v-else-if="sortMethod.by == 'date' && sortMethod.isDesc" class="ml-1"
                                    @click="chengesortingMethod('date', false)" href="#">
                                    <Icon icon="fa-solid:sort-down" />
                                </a>
                                <a v-else-if="sortMethod.by == 'date' && !sortMethod.isDesc" class="ml-1"
                                    @click="chengesortingMethod('date', true)" href="#">
                                    <Icon icon="fa-solid:sort-up" />
                                </a>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <span class="sr-only">asd</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(d, key) in sortedItems()">
                        <tr class=" border-b odd:bg-green-50 even:bg-green-100" v-if="isIn(key)">
                            <td class="py-4 px-6 ">
                                {{ key+1 }}
                            </td>
                            <th scope="row" class="py-4 px-6 font-medium w-5/12 text-center">
                                {{ d.title }}
                            </th>
                            <td class="py-4 px-6 w-2/12  text-center">
                                {{ d.cat }}
                            </td>
                            <td class="py-4 px-6 text-center">
                                {{ d.Priority }}
                            </td>
                            <td class="py-4 px-6 ">
                                {{ d.date }}
                            </td>
                            <td class="py-4  text-right">
                                <a href="#" @click="deleteItem(d)" class="text-2xl text-red-600 hover:text-red-400 ">
                                    <Icon icon="ant-design:delete-filled" />
                                </a>

                            </td>
                        </tr>
                    </template>


                </tbody>
            </table>
            <div class="h-36 bg-green-50 flex justify-center items-center gap-5 w-full " v-if="isEmpty()">
                <Icon icon="line-md:coffee-half-empty-twotone-loop" class="text-7xl" />
                <span class="text-xl font-semibold">The task list is empty</span>
            </div>
            <Pagination v-if="!isEmpty()" @paging="(n) =>{this.paging.current += n ; paging.key++; pagecount()}" :counts="paging.count"
                :current="paging.current" :key="paging.key">
            </Pagination>
        </div>
    </div>
</template>
<script>

import Pagination from '../components/Pagination.vue';

export default {
    components: {
        Pagination
    },
    data() {
        return {
            items: [],
            sortMethod: {
                by: '',
                isDesc: false
            },
            paging: {
                current: 1,
                count: 1,
                key: 1
            }
        }
    },
    mounted() {
        this.items = this.$store.state.tasks
        this.pagecount();
        
        console.log(this.items);
    },
    methods: {
        pagecount(){
            this.paging.count = Math.ceil(this.items.length / 5)
        },
        isIn(n) {
            if (n >= (this.paging.current - 1) * 5 && n < (this.paging.current) * 5) return true
            else return false
        },
        sortedItems() {
            let sItems

            if (this.sortMethod.by) {
                sItems = this.items.sort((a, b) => {
                    if (a[this.sortMethod.by] > b[this.sortMethod.by]) return 1;
                    else if (a[this.sortMethod.by] == b[this.sortMethod.by]) return 0;
                    else return -1;
                })
                if (this.sortMethod.isDesc) sItems = sItems.reverse()

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
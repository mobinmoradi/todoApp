<script>
export default {
    props: ['counts', 'current'],
    mounted() {
        let current = this.current;
        let counts = this.counts;
        if (current == 1) {
            this.first=true
        }
        if(current == counts){
            this.last=true
        }


        if (current >= 4) {
            this.patern.first = 1
        }
        if (current >= 3) {
            this.patern.twoBefore = current-2
        }
        if (current >= 2) {
            this.patern.oneBefore = current-1
        }
        if (counts-current >= 1) {
            this.patern.oneAfter = current+1
        }
        if (counts-current >= 2) {
            this.patern.twoAfter = current+2
        }
        if (counts-current >= 3) {
            this.patern.last = counts
        }
    },
    data() {
        return {
            patern: {
                first: 0,
                twoBefore: 0,
                oneBefore: 0,
                oneAfter: 0,
                twoAfter: 0,
                last: 0,
            },
            first:false,
            last:false
        }
    }
}

</script>

<template>
    <div class="flex items-center justify-center py-3">
        <nav class="relative z-0 inline-flex rounded-md shadow-sm ">
            <a href="#" @click="$emit('paging', -1) " :class="{ invisible : first }"
                class="  relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                <Icon icon="ant-design:left-outlined" />
            </a>
            <div v-if="patern.first">
                <a href="#"
                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1 </a>
                <span v-if="current != 4"
                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ... </span>
            </div>

            <a href="#" v-if="patern.twoBefore" @click="$emit('paging', -2)"
                class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                {{ patern.twoBefore }}</a>
            <a href="#" v-if="patern.oneBefore" @click="$emit('paging',-1)"
                class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                {{ patern.oneBefore }} </a>
            <a href="#" aria-current="page"
                class="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                {{ current }} </a>
            <a href="#" v-if="patern.oneAfter" @click="$emit('paging', 1)"
                class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                {{ patern.oneAfter }}</a>
            <a href="#" v-if="patern.twoAfter" @click="$emit('paging', 2)"
                class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                {{ patern.twoAfter }}
            </a>
            <div v-if="patern.last">
                <span v-if="current != counts-3"
                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ... </span>
                <a href="#" 
                    class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    {{ counts }}
                </a>
            </div>
            <a   @click="$emit('paging', 1)"  :class="{ invisible : last }"
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                <Icon icon="ant-design:right-outlined" />
            </a>

        </nav>
    </div>
</template>
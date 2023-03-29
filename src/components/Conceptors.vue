<script setup lang="js">
import ConceptorCard from '@/components/conceptors/ConceptorCard.vue'
import { useConceptorsStore } from '@/stores/conceptors'
import { useGlobalsStore } from '@/stores/globals'
import axios from "axios"

export default {
    data() {
        return {
            pagination: 1,
            filteredConceptor: [],
            conceptor: [],
            serverUrl: useGlobalsStore().serverUrl,
        }
    },
    components: {
        ConceptorCard
    },
    methods: {
        filterConceptor() {
            const store = useConceptorsStore();
            let firstElement = (this.pagination - 1) * 12;

            this.filteredConceptor = store.conceptorsLibrary.slice(firstElement, firstElement + 12);
        }
    },
    watch: {
        pagination() {
            this.filterDrivers();
        }
    },
    created() {
        const store = useConceptorsStore();

        axios.get(this.serverUrl+'/conceptors')
            .then((response) => {
                store.setConceptors(response.data);
                this.paginationLength = Math.ceil(store.conceptorsLibrary.length / 12);
                this.filterConceptor();
            })
    }
}
</script>

<template>
<div>
    <v-row>
        <v-autocomplete style="max-width: 250px;" label="Search for a conceptor" :items="[]"></v-autocomplete>

    </v-row>

    <v-row>
        <ConceptorCard v-for="conceptor in filteredConceptor" :conceptor="conceptor" />
        <v-col cols="12" class="pa-0">
            <v-pagination class="col-12 mx-auto" :total-visible="15" v-model="pagination" :length="paginationLength"></v-pagination>
        </v-col>
    </v-row>
</div>
</template>

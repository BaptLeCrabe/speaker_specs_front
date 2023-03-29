<script lang="js">
import SpeakerCard from './speakers/SpeakerCard.vue'
import { useSpeakersStore } from '@/stores/speakers'
import { useGlobalsStore } from '@/stores/globals'
import axios from "axios"

export default {
    data() {
        return {
            pagination: 1,
            filteredSpeakers: [],
            speakers: [],
            serverUrl: useGlobalsStore().serverUrl,
            paginationLength: 1
        }
    },
    components: {
        SpeakerCard
    },
    methods: {
        filterSpeakers() {
            const store = useSpeakersStore();
            let firstElement = (this.pagination - 1) * 12;

            this.filteredSpeakers = store.speakersLibrary.slice(firstElement, firstElement + 12);
        }
    },
    watch: {
        pagination() {
            this.filterSpeakers();
        }
    },
    created() {
        const store = useSpeakersStore();

        axios.get(this.serverUrl+'/speakers')
            .then((response) => {
                store.setSpeakers(response.data);
                this.paginationLength = Math.ceil(store.speakersLibrary.length / 12);
                this.filterSpeakers();
            })
    },
}
</script>

<template>
<div>
    <v-row>
        <v-select
            chips
            style="max-width: 250px;"
            label="Type"
            :items="['Top', 'Kick', 'Subs']"
            multiple
        ></v-select>
        <v-select
            chips
            style="max-width: 250px;"
            label="Charges"
            :items="['Tapped Horn', 'Manifold', 'Bass Reflex']"
            multiple
        ></v-select>
        <v-select
            chips
            style="max-width: 250px;"
            label="Driver size"
            :items="['18 inchs', '21 inchs', '24 inchs']"
            multiple
        ></v-select>
        <v-select
            chips
            textarea
            style="max-width: 250px;"
            label="Compatible driver"
            :items="['LF12X401']"
            multiple
        ></v-select>
        <v-autocomplete style="max-width: 250px;" label="Search for a plan" :items="['MHB 4818', 'MTH 4654']"></v-autocomplete>

    </v-row>

    <v-row>
        <SpeakerCard v-for="speaker in filteredSpeakers" :speaker="speaker" />
        <v-col cols="12" class="pa-0">
            <v-pagination class="col-12 mx-auto" :total-visible="15" v-model="pagination" :length="paginationLength"></v-pagination>
        </v-col>
    </v-row>
</div>
</template>

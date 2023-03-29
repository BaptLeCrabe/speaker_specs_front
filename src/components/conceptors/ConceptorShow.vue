<script lang="ts">
import {
    useConceptorsStore
} from '@/stores/conceptors'
import type {
    Conceptor
} from '@/stores/types'
import {
    useGlobalsStore
} from '@/stores/globals'
import SpeakerCard from '@/components/speakers/SpeakerCard.vue'
import axios from "axios"

export default {
    data() {
        return {
            conceptor: {} as Conceptor,
            serverUrl: useGlobalsStore().serverUrl,
            clientUrl: useGlobalsStore().clientUrl,
        }
    },
    created() {
        const store = useConceptorsStore();

        axios.get(this.serverUrl+'/conceptors/'+this.$route.params.id)
            .then((response) => {
                this.conceptor = store.buildConceptor(response.data);
            })
    },
    components: {
        SpeakerCard
    }
}
</script>

<style>
model-viewer {
  width: 100%;
  height: 100%;
}
</style>

<template>
<v-container v-if="conceptor" class="pr-5">
    <h2 class="text-center">{{ conceptor.name }}</h2>
    <p class="mt-5">{{ conceptor.desc }}</p>
    <v-btn class="mt-5" :href="conceptor.website">Visiter le site</v-btn>
    <v-row class="mt-5">
        <h3 class="ml-3">Plans de ce concepteur:</h3>

        <v-col cols="12">
            <v-row>
                <SpeakerCard v-for="speaker in conceptor.speakers" :key="speaker.id" :speaker="speaker"></SpeakerCard>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

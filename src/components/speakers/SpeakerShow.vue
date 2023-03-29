<script lang="ts">
import {
    useGlobalsStore
} from '@/stores/globals'
import {
    useSpeakersStore
} from '@/stores/speakers'
import type {
    Speaker
} from '@/stores/types'
import {
    usePDF,
    VuePDF
} from '@tato30/vue-pdf'
import axios from "axios"

export default {
    components: {
        VuePDF
    },
    data() {
        return {
            speaker: {} as Speaker,
            pdf: null,
            currentPage: 1,
            pages: null,
            info: null,
            serverUrl: useGlobalsStore().serverUrl,
            clientUrl: useGlobalsStore().clientUrl,
            carousel: 0
        }
    },
    methods: {
        setup() {
            const {
                pdf,
                pages
            } = usePDF(this.serverUrl+this.speaker.plan_file.url);

            this.pdf = pdf;
            this.pages = pages;
        }
    },
    created() {
        const store = useSpeakersStore();

        axios.get(this.serverUrl+'/speakers/'+this.$route.params.id)
            .then((response) => {
                this.speaker = store.buildSpeaker(response.data);
                this.setup();
            })
    },
}
</script>

<style>
model-viewer {
    width: 100%;
    height: 100%;
}
</style>

<template>
<v-container class="pr-5">
    <h2 class="text-center">{{ speaker.name }}</h2>
    <v-row class="mt-3">
        <v-col class="pb-0" cols="6">
            <v-table density="compact" class="mx-auto px-5" style="max-width: 100%;">
                <tbody>
                    <tr v-if="speaker.conceptor">
                        <td>Conceptor</td>
                        <td>{{ speaker.conceptor.name }}</td>
                    </tr>
                    <!-- <tr>
                        <td>Type</td>
                        <td></td>
                    </tr> -->
                    <tr v-if="speaker.acoustic_load">
                        <td>Charge</td>
                        <td>{{ speaker.acoustic_load.name }}</td>
                    </tr>
                    <tr>
                        <td>Sensibilité</td>
                        <td>{{ speaker.sensitivity }}dB 1w/1m 2pi</td>
                    </tr>
                    <tr>
                        <td>HPF</td>
                        <td>{{ speaker.hpf }}</td>
                    </tr>
                    <tr>
                        <td>Diamètre Hp</td>
                        <td>{{ speaker.driver_sizes }}</td>
                    </tr>
                    <tr>
                        <td>Plage de fréquences -3db</td>
                        <td>{{ speaker.frequency_range }}</td>
                    </tr>
                    <tr v-if="speaker.hornsrep_file">
                        <td>Fichier hornsrep</td>
                        <td>
                            <v-btn :href="serverUrl+speaker.hornsrep_file.url" target="_blank" size="small">telecharger</v-btn>
                        </td>
                    </tr>
                    <tr v-if="speaker.akabak_file">
                        <td>Fichier akabak</td>
                        <td>
                            <v-btn :href="serverUrl+speaker.akabak_file.url" target="_blank" size="small">telecharger</v-btn>
                        </td>
                    </tr>
                    <tr v-if="speaker.plan_file">
                        <td>Plan PDF</td>
                        <td>
                            <v-btn :href="serverUrl+speaker.plan_file.url" target="_blank" size="small">telecharger</v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
        <v-col cols="6" style="max-height: 324px; overflow-y: scroll; ">
            <v-table density="compact" class="mx-auto px-5" style="max-width: 100%;">
                <thead>
                    <tr>
                        <th class="text-left">
                            Haut-parleurs préconisés
                        </th>
                        <th class="text-left">
                            lien
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="driver in speaker.drivers">
                        <td><v-btn :href="clientUrl+'/drivers/'+driver.id" target="_blank" size="small">{{driver.name}}</v-btn></td>
                        <td><v-btn :href="driver.link" target="_blank" size="small">acheter</v-btn></td>
                    </tr>
                </tbody>
            </v-table>
            <v-table density="compact" class="mx-auto px-5" style="max-width: 100%;">
                <thead>
                    <tr>
                        <th class="text-left">
                            Haut-parleurs compatibles
                        </th>
                        <th class="text-left">
                            lien
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>NOT IMPLEMENTED YET</td>
                        <td>Non disponible</td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
    </v-row>

    <v-row>
        <v-col class="mt-0 pa-0" cols="6">
            <v-carousel v-model="carousel" cycle>
                <v-carousel-item v-for="item in speaker.images" :src="serverUrl+item.url"></v-carousel-item>
                <v-carousel-item v-if="pdf" cover>
                    <VuePDF :pdf="pdf" />
                </v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col cols="6">
            <model-viewer v-if="speaker.glb_file" alt="Speaker 3D Model" :src="serverUrl+(speaker.glb_file.url) || 'http://localhost:5173/mth.glb'" ar shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
        </v-col>
    </v-row>
</v-container>
</template>

<script lang="ts">
import {
    useDriversStore
} from '@/stores/drivers'
import type {
    Driver
} from '@/stores/types'
import {
    useGlobalsStore
} from '@/stores/globals'
import DriverThieleSmall from '@/components/drivers/DriverThieleSmall.vue'
import SpeakerCard from '@/components/speakers/SpeakerCard.vue'
import {
    usePDF,
    VuePDF
} from '@tato30/vue-pdf'
import axios from "axios"

export default {
    components: {
        VuePDF,
        DriverThieleSmall,
        SpeakerCard
    },
    data() {
        return {
            driver: {} as Driver,
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
                pages,
                info
            } = usePDF(this.serverUrl + this.driver.doc_files.url);

            this.pdf = pdf;
            this.pages = pages;
            console.log(`Document has ${pages} pages`)
            console.log(`Document info: ${info}`)
        }
    },
    created() {
        const store = useDriversStore();

        axios.get(this.serverUrl+'/drivers/'+this.$route.params.id)
            .then((response) => {
                this.driver = store.buildDriver(response.data);
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
    <h2 class="text-center">{{ driver.name }}</h2>
    <v-row class="mt-3">
        <v-col class="pb-0" cols="6">
            <v-table density="compact" class="mx-auto px-5" style="max-width: 100%;">
                <tbody>
                    <tr>
                        <td>Diamètre Hp</td>
                        <td>{{ driver.size }} ""</td>
                    </tr>
                    <tr v-if="driver.brand">
                        <td>Brand</td>
                        <td>{{ driver.brand.name }}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{{  driver.type }}</td>
                    </tr>
                    <tr>
                        <td>SPL</td>
                        <td>{{ driver.spl }}dB 1w/1m 2pi</td>
                    </tr>
                    <tr>
                        <td>Plage de fréquences -3db</td>
                        <td>{{ driver.frequency_range }}</td>
                    </tr>
                    <tr>
                        <td>Loudspeaker Database Link</td>
                        <td><v-btn size="small" target="_blank" :href="driver.loadspeaker_link">Link</v-btn></td>
                    </tr>
                    <tr v-if="driver.doc_files">
                        <td>Doc PDF</td>
                        <td><v-btn size="small" target="_blank" :href="serverUrl + driver.doc_files.url">telecharger</v-btn></td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
        <v-col cols="6" style="max-height: 324px; overflow-y: scroll; ">
            <DriverThieleSmall  :thieleSmall="driver.thiele_small"></DriverThieleSmall>
        </v-col>
    </v-row>

    <v-row>
        <v-col class="mt-0 pa-0" cols="6">
            <v-carousel v-model="carousel" cycle>
                <v-carousel-item v-for="item in driver.images" :src="serverUrl + item.url"></v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col cols="6">
            <model-viewer v-if="driver.glb_file" alt="Driver 3D model" :src="serverUrl + driver.glb_file.url"  ar shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
        </v-col>
    </v-row>

    <br>

    <v-row class="mt-5">
        <h3 class="ml-3">Plans compatibles avec ce haut parleur:</h3>

        <v-col cols="12">
            <v-row>
                <SpeakerCard v-for="speaker in driver.speakers" :key="speaker.id" :speaker="speaker"></SpeakerCard>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

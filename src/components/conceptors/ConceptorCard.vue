<script lang="ts">
import {
    useGlobalsStore
} from '@/stores/globals'

export default {
    data() {
        return {
            serverUrl: useGlobalsStore().serverUrl
        }
    },
    props: {
        conceptor: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
<v-col lg="2" md="4" xs="6">
    <v-card class="mx-auto" max-width="400">
        <v-img class="align-end text-white" height="160" :src="conceptor.images ? serverUrl+conceptor.images[0].url : 'https://ibuildit.ca/wp-content/uploads/box-drawing.png'" cover>
            <v-card-title style="text-shadow: 2px 2px 5px rgba(0,0,0,0.8), 0px 0px 2px  rgba(0,0,0,1);">{{ conceptor.name }}</v-card-title>
        </v-img>

        <v-card-text>
            <v-row>
                <div class="col-12 px-3 text-truncate">{{ conceptor.desc }}</div>
            </v-row>
        </v-card-text>

        <v-card-actions>
            <router-link :to="'/conceptors/'+conceptor.id" color="orange" tag="v-btn">
                <v-btn color="orange">
                    En savoir plus
                </v-btn>
            </router-link>
        </v-card-actions>
    </v-card>
</v-col>
</template>

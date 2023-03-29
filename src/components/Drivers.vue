<script lang="js">
import DriverCard from './drivers/DriverCard.vue'
import { useDriversStore } from '@/stores/drivers'
import { useGlobalsStore } from '@/stores/globals'
import axios from "axios"

export default {
    data() {
        return {
            pagination: 1,
            filteredDrivers: [],
            drivers: [],
            serverUrl: useGlobalsStore().serverUrl,
        }
    },
    components: {
        DriverCard
    },
    methods: {
        filterDrivers() {
            const store = useDriversStore();
            let firstElement = (this.pagination - 1) * 12;

            this.filteredDrivers = store.driversLibrary.slice(firstElement, firstElement + 12);
        }
    },
    watch: {
        pagination() {
            this.filterDrivers();
        }
    },
    created() {
        const store = useDriversStore();

        axios.get(this.serverUrl+'/drivers')
            .then((response) => {
                store.setDrivers(response.data);
                this.paginationLength = Math.ceil(store.driversLibrary.length / 12);
                this.filterDrivers();
            })
    }
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
        <DriverCard v-for="driver in filteredDrivers" :driver="driver" />
        <v-col cols="12" class="pa-0">
            <v-pagination class="col-12 mx-auto" :total-visible="15" v-model="pagination" :length="paginationLength"></v-pagination>
        </v-col>
    </v-row>
</div>
</template>

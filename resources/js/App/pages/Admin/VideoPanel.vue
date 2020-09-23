<template>
    <v-row>
        <v-data-table
            :items="Videos"
            :headers="Headers"
            class="elevation-1"
            item-key="name"
        >
            <template v-slot:item.delete="{ item }">
                <v-btn
                    icon
                    color="error"
                >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>

            <template v-slot:item.edit="{ item }">
                <v-btn
                    icon
                    color="green"
                >
                    <v-icon>mdi-circle-edit-outline</v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </v-row>
</template>

<script>

import api from '../../Service/Api'

export default {
    name: "VideoPanel.vue",
    data() {
        return {
            Videos: [],
            Headers: [
                {text: 'Id', value: 'id'},
                {text: 'VideoTitle', value: 'videoTitle'},
                {text: 'Video description', value: 'videoDescription'},
                {text: 'Video link', value: 'videoLink'},
                {text: 'Delete', value: 'delete', sortable: false},
                {text: 'Edit', value: 'edit', sortable: false},
            ]
        }
    },
    methods: {
        getVideos() {
            api.getVideos()
                .then((response) => {
                    this.Videos = response.data.response
                })
        }
    },
    mounted() {
        this.getVideos()
    }
}
</script>

<style scoped>

</style>

<template>
    <v-row>
        <v-col
        cols="12"
        >
            <v-data-table
                :items="Videos"
                :headers="Headers"
                class="elevation-1"
                item-key="name"
            >
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Video panel</v-toolbar-title>
                    <v-divider
                    class="mx-4"
                    inset
                    vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                        >New Item</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <h1>test</h1>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-toolbar>
                </template>
                <template v-slot:body="items">
                    <draggable
                        tag="tbody"
                        @end="onEnd"
                    >
                        <tr
                            class="sortable"
                            v-for="(item, index) in Videos"
                            :key="index"
                        >
                            <td> {{ item.videoTitle }}</td>
                            <td> {{ item.videoDescription }}</td>
                            <td> {{ item.videoLink }}</td>
                            <td>
                                <v-btn icon
                                       color="red"
                                       @click="deleteItem(item.id)"
                                >
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </td>
                            <td>
                                <v-btn icon
                                       color="green"
                                       @click="editVideo(item)"
                                >
                                    <v-icon>mdi-pencil-outline</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </draggable>
                </template>
            </v-data-table>
            <response-dialog></response-dialog>

            <edit-dialog></edit-dialog>
        </v-col>
    </v-row>
</template>

<script>

import api from '../../Service/Api'
import draggable from 'vuedraggable'
import responseDialog from "../../Components/responseDialog";
import editDialog from "./editDialog";

export default {
    components: {
        draggable,
        responseDialog,
        editDialog
    },
    name: "VideoPanel.vue",
    data() {
        return {
            Videos: [],
            Headers: [
                {text: 'VideoTitle', value: 'videoTitle', sortable: false},
                {text: 'Video description', value: 'videoDescription', sortable: false},
                {text: 'Video link', value: 'videoLink', sortable: false},
                {text: 'Delete', value: 'delete', sortable: false},
                {text: 'Edit', value: 'edit', sortable: false},
            ],
            dialog: false
        }
    },
    methods: {
        getVideos() {
            api.getVideos()
                .then((response) => {
                    this.Videos = response.data.response
                })
        },
        onEnd: function (evt) {
            let oldIndex = evt.oldIndex + 1
            let newIndex = evt.newIndex + 1

            api.changeVideoSequence(oldIndex, newIndex)
        },
        deleteItem(id) {
            api.deleteVideo(id)
                .then((response) => {
                    this.getVideos()
                    this.$store.state.response = true
                    this.$store.state.responseColor = "green"
                    this.$store.state.responseText = response.data.Response
                    this.$store.state.responseIcon = "mdi-thumb-up"
                })
        },
        editVideo(video) {
            this.$store.state.edit = !this.$store.state.edit
            this.$store.state.videoDescription = video.videoDescription
            this.$store.state.videoLink = video.videoLink
            this.$store.state.videoTitle = video.videoTitle
            this.$store.state.videoId = video.id
        }
    },
    mounted() {
        this.getVideos()
    }
}
</script>

<style scoped>
.sortable-drag {
    opacity: 0;
}
</style>

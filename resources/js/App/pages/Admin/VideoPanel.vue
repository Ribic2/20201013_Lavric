<template>
    <v-row>
        <v-data-table
            :items="Videos"
            :headers="Headers"
            class="elevation-1"
            item-key="name"
        >
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
            ]
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
        editVideo(video){
            this.$store.state.edit = !this.$store.state.edit
            this.$store.state.videoDescription = video.videoDescription
            this.$store.state.videoLink = video.videoLink
            this.$store.state.videoTitle = video.videoTitle
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

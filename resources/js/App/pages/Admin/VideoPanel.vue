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
                        <v-dialog max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    v-bind="attrs"
                                    v-on="on"
                                >New Item
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">Add new item</span>
                                </v-card-title>
                               <v-form
                               class="pa-5"
                               >
                                    <v-text-field
                                        label="Video title"
                                        v-model="newVideoTitle"
                                    >
                                    </v-text-field>

                                   <v-text-field
                                       v-model="newVideoDescription"
                                       label="Video description"
                                   >
                                   </v-text-field>

                                   <v-text-field
                                       v-model="newVideoLink"
                                       label="Video link"
                                   >
                                   </v-text-field>

                                   <v-text-field
                                       v-model="newVideoApiTitle"
                                       label="Video API title"
                                   >
                                   </v-text-field>

                                   <v-file-input
                                       show-size
                                       v-model="videoImage"
                                       label="Image"
                                       type="file"
                                   >
                                   </v-file-input>

                                   <v-btn
                                   color="primary"
                                   block
                                   @click="addItem()"
                                   >Add</v-btn>
                               </v-form>

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

                                <!-- Edit video -->
                                <v-dialog max-width="500px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            dark
                                            icon
                                            color="green"
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="editVideo(item)"
                                        >
                                            <v-icon>mdi-pencil-outline</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>Edit</v-card-title>
                                        <v-form
                                            class="pa-5"
                                        >
                                            <v-text-field
                                                v-model="videoTitle"
                                                label="Video title"
                                            >
                                            </v-text-field>

                                            <v-textarea
                                                no-resize
                                                v-model="videoDescription"
                                                value="test"
                                                label="Video description"
                                            >
                                            </v-textarea>

                                            <v-text-field
                                                label="Video link"
                                                v-model="videoLink"
                                            >
                                            </v-text-field>

                                            <v-btn
                                                color="primary"
                                                block
                                                @click="updateVideo(item.id)"
                                                class="font-weight-bold"
                                            >Update video
                                            </v-btn>

                                        </v-form>
                                    </v-card>
                                </v-dialog>
                            </td>
                        </tr>
                    </draggable>
                </template>
            </v-data-table>
            <response-dialog></response-dialog>
        </v-col>
    </v-row>
</template>

<script>

import api from '../../Service/Api'
import draggable from 'vuedraggable'
import responseDialog from "../../Components/responseDialog";

export default {
    components: {
        draggable,
        responseDialog,
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
            dialog: false,

            // edit
            videoTitle: '',
            videoDescription: '',
            videoLink: '',

            // Add image
            videoImage: null,
            newVideoTitle: '',
            newVideoDescription: '',
            newVideoLink: '',
            newVideoApiTitle: ''
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

        // Delete item
        deleteItem(id) {
            api.deleteVideo(id)
                .then((response) => {
                    this.getVideos()
                    this.$store.state.response = true
                    this.$store.state.responseColor = "green"
                    this.$store.state.responseText = response.data.response
                    this.$store.state.responseIcon = "mdi-thumb-up"
                })
            .catch((err)=>{
                this.getVideos()
                this.$store.state.response = true
                this.$store.state.responseColor = "red"
                this.$store.state.responseText = err.response.data.message
                this.$store.state.responseIcon = "mdi-thumb-down"
            })
        },
        // Edit video
        editVideo(video) {
            this.videoDescription = video.videoDescription
            this.videoLink = video.videoLink
            this.videoTitle = video.videoTitle
            this.id = video.id
        },

        // Updates video
        updateVideo(id) {
            api.modifyVideo(
                id,
                this.videoTitle,
                this.videoDescription,
                this.videoLink)
            .then((response)=>{
                this.$store.state.response = true
                this.$store.state.responseColor = "green"
                this.$store.state.responseText = response.data.response
                this.$store.state.responseIcon = "mdi-thumb-up"
                this.getVideos()
            })
            .catch((err)=>{
                this.getVideos()
                this.$store.state.response = true
                this.$store.state.responseColor = "red"
                this.$store.state.responseText = err.response.data.message
                this.$store.state.responseIcon = "mdi-thumb-down"
            })
        },
        // Adds new items
        addItem(){
            let data = new FormData()
            data.append('image', this.videoImage)
            data.append('videoTitle', this.newVideoTitle)
            data.append('videoDescription', this.newVideoDescription)
            data.append('videoApiTitle', this.newVideoApiTitle)
            data.append('videoLink', this.newVideoLink)

            api.addVideo(data)
            .then((response)=>{
                this.$store.state.response = true
                this.$store.state.responseColor = "green"
                this.$store.state.responseText = response.data.response
                this.$store.state.responseIcon = "mdi-thumb-up"
                this.getVideos()
            })
            .catch((err)=>{
                this.getVideos()
                this.$store.state.response = true
                this.$store.state.responseColor = "red"
                this.$store.state.responseText = err.response.data.message
                this.$store.state.responseIcon = "mdi-thumb-down"
            })
        },
    },
    mounted() {
        this.getVideos()
    }
}
</script>

<style scoped>

</style>

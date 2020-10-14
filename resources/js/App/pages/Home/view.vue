<template>
    <v-row>
        <v-overlay :value="spinner">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <v-col
            cols="12"
            sm="12"
            lg="6"
            md="6"
            xl="4"
            v-for="video in videos" :key="video.id">
            <v-card
                class="rounded-0"
                @mouseover="displayText(video.id)"
                @mouseleave="hiddeText(video.id)"
                @click="$router.push('/video/'+video.videoApiTitle)"
                :img="'/storage/'+video.videoThumbnail"
                :rounded="false"
                :elevation="0"
            >
                <v-responsive :aspect-ratio="1/1">
                    <v-card-text
                    class="text-center white--text"
                    >
                        <v-overlay
                            absolute
                            v-if="video.id == selected"
                        >
                            <h2 class="pa-1">{{ video.videoTitle }}</h2>
                        </v-overlay>
                    </v-card-text>
                </v-responsive>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import api from '../../Service/Api'

export default {

    data() {
        return {
            spinner: false,
            videos: [],
            selected: null
        }
    },
    methods: {
        displayText(id){
            this.selected = id
        },

        hiddeText(){
            this.selected = null
        },
        async getVideos() {
            this.spinner = true
            await api.getVideos()
            .then((response)=>{
                this.videos = response.data.response

                this.spinner = false
            })
            .catch((err)=>{
                console.log(err.response)
            })
        }
    },
    async mounted() {
        await this.getVideos()
    }
}
</script>

<style scoped>

</style>

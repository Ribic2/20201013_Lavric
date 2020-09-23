<template>
    <v-container>
        <v-row>
            <h3>{{ video.videoTitle }}</h3>
        </v-row>

        <v-row>
            <v-responsive :aspect-ratio="16/9">
                <iframe :src="video.videoLink" frameborder="0" style="overflow:hidden;height:100%;width:100%" ></iframe>
            </v-responsive>
        </v-row>

        <v-row>
            {{ video.videoDescription }}
        </v-row>
    </v-container>
</template>

<script>
import api from '../../Service/Api'
import Router from "../../Service/Router";
export default {
    name: "Display.vue",
    data(){
        return{
            video: null,
            description: []
        }
    },
    methods:{
        getVideo(){
            api.getVideo(this.$router.currentRoute.params.id)
                .then((response) => {
                    this.video = response.data.response
                    this.formatDescriptionData(response.data.response.videoDescription)
                })
        },
        formatDescriptionData(data){
            let test = data.split(";");
            console.log(test);
        }
    },
    mounted() {
        this.getVideo()
    }
}
</script>

<style scoped>

</style>

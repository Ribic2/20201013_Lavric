<template>
    <v-container>
        <v-row>
            <h3 class="pt-1 pb-1">{{ video.videoTitle }}</h3>
        </v-row>

        <v-row>
            <v-responsive :aspect-ratio="16/9">
                <iframe
                    :src="video.videoLink"
                    frameborder="0"
                    allowfullscreen
                    style="overflow:hidden;height:100%;width:100%"
                    id="frame">
                </iframe>
            </v-responsive>
        </v-row>

        <v-row class="p-0 m-0" id = "textHolder">
            <v-col cols="12" id = "text">
                <p v-for="dialog in description">
                    <span class="font-weight-bold">{{ dialog[0] }}</span>: {{ dialog[1] }}
                <p/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from '../../Service/Api'

export default {
    name: "Display.vue",
    data(){
        return{
            video: "",
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
            let description = data.split(";");

            description.forEach((element)=>{
                let explode = element.split(':')
                let data = [explode[0], explode[1]]

                this.description.push(data)
            })
        },
    },
    mounted() {
        this.getVideo()
    },

}

</script>

<style scoped>
    #text{
        padding: 0px !important;
        margin: 0px !important
    }
    #textHolder{
        padding-top: 10px;
    }
</style>

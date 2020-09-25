<template>
    <v-dialog
        width="500"

        v-model="$store.state.edit"
    >
        <v-card>
            <v-card-title>Edit</v-card-title>
            <v-form
                class="pa-5"
            >
                <v-text-field
                    :return-value.sync="this.$store.state.videoTitle"
                    label="Video title"
                    v-model="test"
                >
                </v-text-field>

                <v-textarea
                    no-resize
                    v-model="this.$store.state.videoDescription"
                    @keydown.enter="addNewLine()"
                    label="Video description"
                >
                </v-textarea>

                <v-text-field
                    label="Video link"
                    v-model="this.$store.state.videoLink"
                >
                </v-text-field>

                <v-btn
                    color="primary"
                    block
                    @click="updateVideo()"
                    class="font-weight-bold"
                >Update video
                </v-btn>

            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
import Api from '../../Service/Api'
export default {
    name: "editDialog.vue",
    data(){
        return{
            test: '',
            videoLink: this.$store.state.videoLink,
            videoDescription: this.$store.state.videoDescription,
            videoTitle: this.$store.state.videoTitle
        }
    },
    methods:{
        updateVideo(){
            console.log(this.$store.state.videoTitle)
            Api.modifyVideo(
               this.$store.state.videoId,
               this.$store.state.videoTitle,
               this.$store.state.videoDescription,
               this.$store.state.videoLink
            )
            .then((response)=>{
                console.log(response)
            })


        },
    }
}
</script>

<style scoped>

</style>

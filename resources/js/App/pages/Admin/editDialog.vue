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
                    label="Video title"
                    :value="this.$store.state.videoTitle"
                >
                </v-text-field>

                <v-textarea
                    no-resize
                    label="Video description"
                    :value="this.$store.state.videoDescription"
                >
                </v-textarea>

                <v-text-field
                    label="Video link"
                    v-model="videoTitle"
                    :value="this.$store.state.videoLink"
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
export default {
    name: "editDialog.vue",
    data(){
        return{
            videoLink: '',
            videoDescription: '',
            videoTitle: ''
        }
    },
    methods:{
        updateVideo(){
            console.log(this.videoLink)
        }
    }
}
</script>

<style scoped>

</style>

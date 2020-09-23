<template>
    <v-row>
        <draggable v-model="Videos">
            <transition-group>
                <v-card
                    class="mt-2"
                    ghost-class="ghost"
                    v-for="element in Videos"
                    :key="element.id">{{ element }}</v-card>
            </transition-group>
        </draggable>
    </v-row>
</template>

<script>
import draggable from 'vuedraggable'
import api from "../../Service/Api";

export default {
    name: "Sequence.vue",
    components: {
        draggable
    },
    data() {
        return {
            Videos: ''
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

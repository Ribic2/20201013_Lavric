<template>
    <v-dialog
        v-model="$store.state.response"
        width="300"
    >
        <v-card>
            <v-card-title>
                <v-icon
                    class="ma-auto"
                    size="100"
                    :color="$store.state.responseColor"
                >{{ $store.state.responseIcon }}
                </v-icon>
            </v-card-title>

            <v-card-text class="text-center">
                {{ $store.state.responseText }}
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
name: "responseDialog.vue"
}
</script>

<style scoped>

</style>

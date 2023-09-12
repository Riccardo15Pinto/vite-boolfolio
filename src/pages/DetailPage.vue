<script>
import axios from 'axios';
import AppCard from '../partials/AppCard.vue';
const baseEndpoint = 'http://localhost:8000/api/projects/';
export default {
    components: { AppCard },
    data() {
        return {
            project: null,
        }
    },
    methods: {

        getProject() {

            const endpoint = baseEndpoint + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            })
        },

    },
    created() {

        this.getProject()
    }
}

</script>

<template>
    <div class="container">
        <h1>Dettaglio Progetto:</h1>
        <AppCard v-if="project" :project="project" />
    </div>
</template>

<style scoped></style>
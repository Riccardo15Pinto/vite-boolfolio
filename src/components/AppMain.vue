<script>
import AppCard from '../partials/AppCard.vue';

export default {
    components: { AppCard },
    data() {
        return {

        }
    },
    props: {
        projects: 'Array',
    },

}

</script>

<template>
    <div class="container my-3">

        <div class="row row-cols-3">
            <div class="col" v-for="project in projects">
                <AppCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
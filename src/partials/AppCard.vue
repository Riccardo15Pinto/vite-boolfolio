<script>
export default {
    data() {
        return {

        }
    },
    props: {
        project: 'Object',
    }
}

</script>

<template>
    <div class="card card-tall m-2">
        <div class="card-body">
            <h5 class="card-title">{{ project.name_project }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.slug }}</h6>
            <p class="card-text">{{ project.description_project }}</p>
            <a :href="project.url_project" class="card-link">Vedi Repo su GitHub</a>
        </div>
    </div>
</template>

<style scoped>
.card-tall {
    height: 300px;
}
</style>
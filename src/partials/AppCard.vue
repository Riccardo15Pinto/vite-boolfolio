<script>
export default {
    data() {
        return {

        }
    },
    props: {
        project: 'Object',
    },
    methods: {
        getBgColor(value) {
            return `bg-${value}`;
        }
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
            <div>
                <div class="badge rounded-pill text-bg-primary mt-3">
                    <span>{{ project.type.label }}</span>
                </div>
                <ul class="list-group mt-3">
                    <li class="list-group-item" v-for="tech in project.technologys" :class="getBgColor(tech.color)">{{
                        tech.label }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-tall {
    /* height: 300px; */
}
</style>
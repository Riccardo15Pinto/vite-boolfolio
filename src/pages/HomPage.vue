<script>
import axios from 'axios';
import AppMain from '../components/AppMain.vue';
import AppPagination from '../components/AppPagination.Vue';
export default {
    components: { AppMain, AppPagination },
    data() {
        return {
            projects: [],
            links: [],
        }
    },
    methods: {

        getProjectList(target = 'http://localhost:8000/api/projects') {

            // console.log(target)
            axios.get(target).then(res => {
                this.projects = res.data.data;
                this.links = res.data.links;
            })
        },

    },

    created() {

        this.getProjectList()
    }
}

</script>

<template>
    <AppMain :projects="this.projects" />
    <AppPagination :links="this.links" @currentPage="getProjectList" />
</template>

<style scoped></style>
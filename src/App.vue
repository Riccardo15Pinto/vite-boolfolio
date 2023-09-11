<script>
import axios from '../node_modules/axios';
let endpoint = 'http://127.0.0.1:8000/api/projects';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppPagination from './components/AppPagination.Vue';
export default {
  components: { AppHeader, AppMain, AppPagination },
  data() {
    return {
      projects: [],
      links: [],
    }
  },
  methods: {

    getProjectList(target = 'http://127.0.0.1:8000/api/projects') {

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
  <AppHeader />
  <AppMain :projects="this.projects" />
  <AppPagination :links="this.links" @currentPage="getProjectList" />
</template>

<style scoped></style>

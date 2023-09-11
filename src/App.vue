<script>
import axios from '../node_modules/axios';
let endpoint = 'http://127.0.0.1:8000/api/projects';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: { AppHeader, AppMain },
  data() {
    return {
      projects: [],
      links: [],
    }
  },
  methods: {

    getProjectList() {
      axios.get(endpoint).then(res => {
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
</template>

<style scoped></style>

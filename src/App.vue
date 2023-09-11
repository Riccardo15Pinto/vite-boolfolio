<script>
import axios from '../node_modules/axios';
let endpoint = 'http://127.0.0.1:8000/api/projects';
export default {
  data() {
    return {
      projects: [],
    }
  },
  methods: {

    getProjectList() {
      axios.get(endpoint).then(res => {
        this.projects = res.data;
      })
    },

  },

  created() {

    this.getProjectList()
  }
}

</script>

<template>
  <h1 class="text-primary">ciao</h1>

  <ul>
    <li v-for="project in projects" :key="project.id">{{ project.name_project }}</li>
  </ul>
</template>

<style scoped></style>

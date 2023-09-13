<script>
import axios from 'axios';
const baseEndpoint = 'http://localhost:8000/api/projects/';
export default {
    data() {
        return {
            project: null,
        }
    },
    methods: {

        addcontact() {

            const endpoint = baseEndpoint + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            })
        },

    },
}

</script>

<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Inserisci l'email">
            </div>
            <div class="mb-3">
                <label for="object" class="form-label">Oggetto Email:</label>
                <input type="text" class="form-control" id="object" placeholder="Inserisci un oggetto ">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Contenuto Email:</label>
                <textarea class="form-control" id="content" rows="10"></textarea>
            </div>
        </form>
    </div>
</template>

<style scoped></style>
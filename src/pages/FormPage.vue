<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contacts';
const formField = { email: null, object: null, content: null };
export default {
    data() {
        return {
            form: { ...formField },
        }
    },
    methods: {

        sendForm() {


            axios.post(endpoint, this.form)
                .then(() => {
                    this.form = formField;
                })
                .catch(err => { console.error(err) })
                .then(() => { })
        },

    },

    created() {
        console.log(this.form);
    }
}

</script>

<template>
    <div class="container">
        <form @submit.prevent="sendForm">
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" v-model.trim="form.email"
                    placeholder="Inserisci l'email">
            </div>
            <div class="mb-3">
                <label for="object" class="form-label">Oggetto Email:</label>
                <input type="text" class="form-control" id="object" v-model.trim="form.object"
                    placeholder="Inserisci un oggetto ">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Contenuto Email:</label>
                <textarea class="form-control" id="content" rows="10" v-model="form.content"></textarea>
            </div>
            <button class="btn btn-success">Invia</button>
        </form>
    </div>
</template>

<style scoped></style>
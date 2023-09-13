<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contacts';
const formField = { email: '', object: '', content: '' };
export default {
    data() {
        return {
            form: { ...formField },
            errors: {},
        }
    },
    computed: {
        hasErrors() {
            return Object.keys(this.errors).length;
        }
    },
    methods: {

        sendForm() {

            this.validateForm();

            if (this.hasErrors) return
            axios.post(endpoint, this.form)
                .then(() => {
                    this.form = formField;
                })
                .catch(err => {
                    if (err.response.status === 400) {
                        const { errors } = err.response.data;
                        const errorMessage = {};
                        for (let field in errors) errorMessage[field] = errors[field][0];
                        this.errors = errorMessage;
                        console.log(this.errors)
                    }
                })
                .then(() => { })
        },

        validateForm() {

            this.errors = {};
            if (!this.form.email) {
                this.errors.email = 'L\'E-mail è obbligatoria';
            }
            if (!this.form.object) {
                this.errors.object = 'L\'Oggetto è obbligatoria';
            }
            if (!this.form.content) {
                this.errors.content = 'Il Contenuto è obbligatoria';
            }
        }

    },
}

</script>

<template>
    <div class="container">
        <form @submit.prevent="sendForm">
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }" id="email"
                    v-model.trim="form.email" placeholder="Inserisci l'email">
                <div v-if="errors.email" class="invalid-feedback">
                    {{ errors.email }}
                </div>
            </div>
            <div class="mb-3">
                <label for="object" class="form-label">Oggetto Email:</label>
                <input type="text" class="form-control" :class="{ 'is-invalid': errors.object }" id="object"
                    v-model.trim="form.object" placeholder="Inserisci un oggetto ">
                <div v-if="errors.object" class="invalid-feedback">
                    {{ errors.object }}
                </div>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Contenuto Email:</label>
                <textarea class="form-control" :class="{ 'is-invalid': errors.content }" id="content" rows="10"
                    v-model="form.content"></textarea>
                <div v-if="errors.content" class="invalid-feedback">
                    {{ errors.content }}
                </div>
            </div>
            <button class="btn btn-success">Invia</button>
        </form>
    </div>
</template>

<style scoped></style>
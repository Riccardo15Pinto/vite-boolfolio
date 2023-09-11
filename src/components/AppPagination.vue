<script>
export default {
    data() {
        return {
            currentPage: '',
        }
    },
    props: {

        links: 'Array',

    },

}

</script>

<template>
    <div class="container my-5">
        <div class="d-flex justify-content-end">

            <nav aria-label="Page navigation example mx-auto">

                <ul class="pagination">

                    <li v-for="link in links" class="page-item " :key="link.label" :class="{ disabled: !link.url }">

                        <span class="page-link" v-html="link.label" :class="{ active: link.active }"
                            @click="$emit('currentPage', link.url)">

                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped></style>
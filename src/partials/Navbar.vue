<script>

export default {
    data() {
        return {

        }
    },

}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <div class="nav-item">
                            <a class="nav-link" href="#">BOOLFOLIO</a>
                        </div>
                        <li class="nav-item">
                            <span class="nav-link">
                                <router-link :to="{ name: 'home' }">Home</router-link>
                            </span>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link">
                                <router-link :to="{ name: 'FormPage' }">Form</router-link>
                            </span>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>
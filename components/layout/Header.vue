<template>
        <div  class="sub_page">
        <div class="hero_area">
            <!-- header section strats -->
            <header class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container">
                        <nuxt-link class="navbar-brand" to="/">
                            <span>
                                webprog.io
                            </span>
                        </nuxt-link>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item" :class="{ active: $route.path === '/' }">
                                    <nuxt-link class="nav-link" to="/">صفحه اصلی</nuxt-link>
                                </li>
                                <li class="nav-item" :class="{ active: $route.path === '/menu' }">
                                    <nuxt-link class="nav-link" to="/menu">منو</nuxt-link>
                                </li>
                                <li class="nav-item" :class="{ active: $route.path === '/aboutUs' }">
                                    <nuxt-link class="nav-link" to="/aboutUs">درباره ما</nuxt-link>
                                </li>
                                <li class="nav-item" :class="{ active: $route.path === '/contactUs' }">
                                    <nuxt-link class="nav-link" to="/contactUs">تماس باما</nuxt-link>
                                </li>
                            </ul>
                            <div class="user_option">
                                <a class="cart_link position-relative" href="cart.html">
                                    <i class="bi bi-cart-fill text-white fs-5"></i>
                                    <span class="position-absolute top-0 translate-middle badge rounded-pill">
                                        3
                                    </span>
                                </a>
                                <nuxt-link v-if="authUser" to="/profile" class="btn-auth">
                                    پروفایل
                                </nuxt-link>
                                <nuxt-link v-else to="/auth/login" class="btn-auth">
                                    ورود
                                </nuxt-link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <!-- end header section -->
        </div>
    </div>
</template>
<script setup>
const {authUser} = useAuth()
</script>
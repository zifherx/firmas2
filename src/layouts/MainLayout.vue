<template>
    <v-app>
        <!-- <v-layout> -->
            <header-page />
            <v-main>
                <router-view />
            </v-main>
            <footer-page />
        <!-- </v-layout> -->
    </v-app>
</template>
<script setup>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import { defineComponent } from "vue";

defineComponent({
    HeaderPage,
    FooterPage
})
</script>

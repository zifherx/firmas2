<template>
    <v-app-bar bar dark flat color="primary">
        <v-app-bar-title>
            <router-link to="/">
                <!-- <v-btn color="transparent" size="large"> -->
                    <v-img :width="100" src="@/assets/logo-autonort-white.png"></v-img>
                <!-- </v-btn> -->
            </router-link>
        </v-app-bar-title>
        <v-spacer/>
        <v-toolbar-title class="text-uppercase font-weight-bold text-center">
            {{ appName }}
        </v-toolbar-title>
    </v-app-bar>
</template>
<script setup>
import {ref} from 'vue';
    // const rutaLogo = ref('@assets/logo-autonort-white.png');
    const appName = ref('eFirmas Autonort')
</script>

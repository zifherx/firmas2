<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-card variant="flat" :elevation="1">
                    <v-card-item class="bg-primary text-white">
                        <template v-slot:append="item">
                            <pre>{{ item }}</pre>
                            <v-btn color="primary" variant="flat" icon="mdi-export" @click="exportar">
                                <v-icon>mdi-export</v-icon>
                                <v-tooltip activator="parent" location="start">Exportar Firma</v-tooltip>
                            </v-btn>
                        </template>
                        <v-card-title>
                            <v-icon start>mdi-draw</v-icon>
                            eFirma Autonort
                        </v-card-title>
                        <v-card-subtitle class="ml-10">Previsualización</v-card-subtitle>
                    </v-card-item>
                    <v-card-text>
                        <div id="idPrevisualizacion" class="marca1 bg-white my-1">
                            <div class="marca2 my-8 ml-1 mr-5">
                                <v-row>
                                    <v-col cols="6">
                                        <v-row>
                                            <!-- <v-img :max-width="250" class="logoAutonort" :src="urlLogoAutonort"></v-img> -->
                                            <!-- <v-img :max-width="140" class="logo15Anios" :src="urlLogo15Anios"></v-img> -->
                                            <v-img :max-width="250" class="logoAutonort" src="@/assets/logo-autonort-nor.png"></v-img>
                                            <v-img :max-width="140" class="logo15Anios" src="@/assets/logo-15-anios.png"></v-img>
                                        </v-row>
                                        <v-row class="mt-7">
                                            <v-col>
                                                <div class="formatMarcas">
                                                    <!-- <v-img :src="urlLogoToyota" :width="110"></v-img> -->
                                                    <!-- <v-img :src="urlLogoHino" :width="110"></v-img> -->
                                                    <v-img src="@/assets/logo-toyota.png" :width="110"></v-img>
                                                    <v-img src="@/assets/logo-hino.png" :width="110"></v-img>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-divider class="divisor mt-5" color="#000" thickness="3" :length="250" dark inset vertical></v-divider>
                                    <v-col cols="5">
                                        <v-row class="mt-1">
                                            <v-col cols="12" class="ml-3">
                                                <div class="fontToyotaDisplayBold">{{ props.fullname }}</div>
                                                <!-- <br /> -->
                                                <div class="my-2 fontToyotaDisplayRegular">{{ props.role }}</div>
                                                <!-- <br/> -->
                                                <div class="fontToyotaDisplayRegular">Autonort Nor Oriente S.A.C</div>
                                                <br />
                                                <div class="mt-0">
                                                    <v-icon start size="large">mdi-phone</v-icon>
                                                    <span class="fontToyotaDisplayRegular">+51 {{ props.cellphone }}</span>
                                                </div>
                                                <div class="mt-2">
                                                    <v-icon start size="large">mdi-email-outline</v-icon>
                                                    <span class="text-blue ml-2 fontToyotaDisplayRegular">{{ props.email }}</span>
                                                </div>
                                                <div>
                                                    <span class="fontToyotaDisplayBold2 ml-10">{{ props.sedeSeleccionada }}</span>
                                                </div>
                                            </v-col>
                                            <v-col cols="12">
                                                <div class="logosAuspicios">
                                                <v-row class="mt-0">
                                                    <!-- <v-col cols="12"> -->

                                                        <!-- <v-img class="ml-2" :src="urlImagesFooter[0].src" :max-width="200"></v-img> -->
                                                        <v-img class="ml-2" src="@/assets/WEB-12.png" :max-width="200"></v-img>
                                                        <v-divider class="mx-2" vertical thickness="3" inset dark color="black"></v-divider>
                                                        <!-- <v-img :src="urlImagesFooter[1].src" :max-width="80"></v-img> -->
                                                        <v-img src="@/assets/logo-kinto.png" :max-width="80"></v-img>
                                                        <v-divider class="mx-2" vertical thickness="3" inset dark color="black"></v-divider>
                                                        <!-- <v-img :src="urlImagesFooter[2].src" :max-width="250"></v-img> -->
                                                        <v-img src="@/assets/logo-gr.png" :max-width="250"></v-img>
                                                    <!-- </v-col> -->
                                                    </v-row>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref } from "vue";
import * as htmlToImage from "html-to-image";
import * as download from "downloadjs";

const props = defineProps({
    fullname: { type: String, default: "Colaborador" },
    role: { type: String, default: "Cargo" },
    cellphone: { type: String, ref: "Celular" },
    email: { type: String, ref: "Correo" },
    sedeSeleccionada: { type: String, ref: "Sede" },
});

/* const urlLogoAutonort = ref("src/assets/logo-autonort-nor.png");
const urlLogo15Anios = ref("src/assets/logo-15-anios.png");
const urlLogoToyota = ref("src/assets/logo-toyota.png");
const urlLogoHino = ref("src/assets/logo-hino.png"); */

/* const urlImagesFooter = ref([
    { src: "src/assets/WEB-12.png", name: "urlWEB" },
    { src: "src/assets/logo-kinto.png", name: "logo_kinto" },
    { src: "src/assets/logo-gr.png", name: "logo_gr" },
]); */

function exportar() {
    let divFirma = document.getElementById("idPrevisualizacion");
    htmlToImage
        .toPng(divFirma)
        .then((dataURL) => {
            download(dataURL, `firma-${new Date().getTime()}.png`);
        })
        .catch(function (err) {
            console.error("oops, something went wrong!", err);
        });
}
</script>

<style scoped>
.formatMarcas {
    margin-top: -30px;
    display: grid;
    grid-template-columns: 0fr 1fr;
    column-gap: 20px;
}
.logoAutonort {
    /* border: 1px solid yellow; */
    margin-left: 10px;
}

.logo15Anios {
    /* border: 1px solid pink; */
    margin-top: 30px;
    padding-right: 10x;
    margin-left: 30px;
}

@font-face {
    font-family: "Toyota-Display-Bold";
    src: url("//db.onlinewebfonts.com/t/46520ab4f9b49d8358ed63f2354664c6.ttf");
}

@font-face {
    font-family: "Toyota-Display-Regular";
    src: url("//db.onlinewebfonts.com/t/1ac36e54c1c9577fb0468937689adfd9.ttf");
}

.fontToyotaDisplayRegular {
    font-family: "Toyota-Display-Regular", sans-serif;
    font-size: 16px;
}
.fontToyotaDisplayBold {
    font-family: "Toyota-Display-Bold", sans-serif;
    font-size: 21px;
}

.fontToyotaDisplayBold2 {
    font-family: "Toyota-Display-Bold", sans-serif;
    font-size: 15px;
}

.divisor {
    /* border: 1px solid cyan; */
    margin-left: -20px;
}

.marca1{
    border: 1px solid white;
}
.marca2{
    border: 1px solid white;
}

.logosAuspicios{
    width: 120%;
    /* border: 1px solid red; */
}
</style>

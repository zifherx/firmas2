<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-card max-width="600" :elevation="1" variant="flat">
                    <v-card-item class="bg-primary text-white">
                        <v-card-title>Datos para eFirma</v-card-title>
                        <v-card-subtitle>
                            <span class="me-1"> Personaliza tu Firma </span>

                            <v-icon color="white" icon="mdi-fire-circle" size="small"></v-icon>
                        </v-card-subtitle>
                    </v-card-item>
                    <v-card-text>
                        <div class="mx-5 my-5">
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="fullname"
                                        label="Colaborador"
                                        variant="outlined"
                                        prepend-inner-icon="mdi-account-box"
                                        placeholder="Ingrese su nombre completo"
                                        density="compact"
                                        hide-details
                                        color="primary"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="role"
                                        label="Cargo"
                                        variant="outlined"
                                        prepend-inner-icon="mdi-tag"
                                        placeholder="Ingrese su cargo"
                                        density="compact"
                                        hide-details
                                        color="primary"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="cellphone"
                                        label="Celular"
                                        variant="outlined"
                                        prepend-inner-icon="mdi-phone"
                                        placeholder="Ingrese su celular"
                                        density="compact"
                                        hide-details
                                        color="primary"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="email"
                                        label="Email"
                                        variant="outlined"
                                        prepend-inner-icon="mdi-at"
                                        placeholder="Ingrese su email"
                                        density="compact"
                                        hide-details
                                        color="primary"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-select
                                        v-model="sedeSeleccionada"
                                        :items="listaSedes"
                                        item-title="name"
                                        item-value="valor"
                                        label="Sede"
                                        variant="outlined"
                                        prepend-inner-icon="mdi-map-marker"
                                        placeholder="Seleccione su sede"
                                        density="compact"
                                        hide-details
                                        color="primary"
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";

const listaSedes = ref([
    { name: 'Chachapoyas', valor: 'Fundo Santa Isabel - Camino a Levanto - Chachapoyas'},
    { name: 'Jaén', valor: 'Av. Pista Asfáltica Chamaya 2 Fila Alta - Jaén'},
    { name: 'Tarapoto', valor: 'Jr. Jimenez Pimentel Nro. 1002 - Tarapoto'},
    { name: 'Corporativo', valor: 'Jr. Jimenez Pimentel Nro. 1002 - Corporativo'},
])

const props = defineProps({
    fullname: String,
    role: String,
    cellphone: String,
    email: String,
    sedeSeleccionada: String,
});

const fullname = computed({
    get() {
        return props.fullname;
    },
    set(value) {
        emit("define:fullname", value);
    },
});

const role = computed({
    get() {
        return props.role;
    },
    set(value) {
        emit("define:role", value);
    },
});

const cellphone = computed({
    get() {
        return props.cellphone;
    },
    set(value) {
        emit("define:cellphone", value);
    },
});

const email = computed({
    get() {
        return props.email;
    },
    set(value) {
        emit("define:email", value);
    },
});

const sedeSeleccionada = computed({
    get() {
        return props.sedeSeleccionada;
    },
    set(value) {
        emit("define:sedeSeleccionada", value);
    },
});

const emit = defineEmits(["define:fullname", "define:role", "define:cellphone", "define:email", "define:sedeSeleccionada", "define"]);
</script>

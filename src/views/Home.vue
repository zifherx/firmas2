<template>
    <div class="mx-5 my-5">
        <v-row class="mt-10">
            <v-col cols="12" sm="12" md="5" lg="4">
                <form-firma-digital
                    :fullname="persona.colaborador"
                    :role="persona.cargo"
                    :cellphone="persona.celular"
                    :email="persona.email"
                    :sedeSeleccionada="persona.sede"
                    @define:fullname="defineColaborador"
                    @define:role="defineCargo"
                    @define:cellphone="defineCelular"
                    @define:email="defineEmail"
                    @define:sedeSeleccionada="defineSede"
                />
                <br />
                <!-- <pre>
                    {{ persona }}
                </pre> -->
            </v-col>
            <v-col cols="12" sm="12" md="7" lg="8">
                <e-firma-digital :fullname="persona.colaborador" :role="persona.cargo" :cellphone="persona.celular" :email="persona.email" :sedeSeleccionada="persona.sede" />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import eFirmaDigital from "@/components/eFirmaDigital.vue";
import formFirmaDigital from "@/components/formFirmaDigital.vue";
import { ref } from "vue";

const persona = ref({
    colaborador: "Nombre Completo",
    cargo: "Cargo",
    celular: "# Celular",
    email: "Email",
    sede: "Sede",
});

function defineColaborador(value) {
    persona.value.colaborador = value;
}
function defineCargo(value) {
    persona.value.cargo = value;
}
function defineCelular(value) {
    persona.value.celular = value;
}
function defineEmail(value) {
    persona.value.email = value;
}
function defineSede(value) {
    persona.value.sede = value;
}
</script>

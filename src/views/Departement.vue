<template>
    <div class="ion-page">
        <ion-header>
            <ion-toolbar>
                <ion-title>Découpage administratif</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-card-subtitle color="tertiary">Départements</ion-card-subtitle>
            <ion-item>
                <ion-label position="stacked">Chercher les communes par département :</ion-label>
                <ion-input :value="zipcode" @input="zipcode = $event.target.value"></ion-input>
            </ion-item>
            <ion-button @click.prevent="sendZipcode()" expand="block" color="tertiary">Chercher</ion-button>

            <ion-card v-for="item in towns">
                <ion-card-header>
                    <ion-card-title>{{ item.nom }}</ion-card-title>
                    <ion-card-content style="padding: 10px">Code postal : {{ item.code }}</ion-card-content>
                    <ion-card-content style="padding: 10px">Code département : {{ item.codeDepartement }}</ion-card-content>
                    <ion-card-content style="padding: 10px">Code région : {{ item.codeRegion }}</ion-card-content>
                    <ion-card-content style="padding: 10px">Population : {{ item.population }}</ion-card-content>
                </ion-card-header>
            </ion-card>
        </ion-content>

        <ion-tab-bar role="tablist">
            <ion-tab-button>
                <router-link style="font-size: 15px" to="/">
                    <ion-label>Communes</ion-label>
                </router-link>
                <ion-icon name="business" color="tertiary"></ion-icon>
            </ion-tab-button>

            <ion-tab-button>
                <router-link style="font-size: 15px" to="/departement">
                    <ion-label>Département</ion-label>
                </router-link>
                <ion-icon name="navigate" color="tertiary"></ion-icon>
            </ion-tab-button>

            <ion-tab-button>
                <router-link style="font-size: 15px" to="/region">
                    <ion-label>Région</ion-label>
                </router-link>
                <ion-icon name="map" color="tertiary"></ion-icon>
            </ion-tab-button>
        </ion-tab-bar>
    </div>

</template>


<script>
    export default {
        name: "home",
        data() {
            return {
                zipcode: '',
                towns: []
            }
        },
        methods: {
            sendZipcode() {
                this.$request.get('https://geo.api.gouv.fr/departements/' + this.zipcode + '/communes').then(res => {
                    this.towns = res.data
                    console.log(data)
                })
            }
        }
    }
</script>
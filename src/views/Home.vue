<template>
    <div class="ion-page">
        <ion-header>
            <ion-toolbar>
                <ion-title>Découpage administratif</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-card-subtitle color="tertiary">Communes</ion-card-subtitle>
            <ion-item>
                <ion-label position="stacked">Chercher par nom ou code postal :</ion-label>
                <ion-input :value="zipcode" @input="zipcode = $event.target.value" name="zipcode"
                           placeholder="Exemple: 'Paris' '75001'"></ion-input>
            </ion-item>
            <ion-button @click.prevent="sendZipcode()" color="tertiary" expand="block">Chercher</ion-button>

            <ion-card v-for="item in towns">
                <ion-card-header>
                    <ion-card-title>{{ item.nom }}</ion-card-title>
                    <ion-card-content style="padding: 10px">Code postal : {{ item.code }}</ion-card-content>
                    <ion-card-content style="padding: 10px">Code département : {{ item.codeDepartement }}
                    </ion-card-content>
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
                <ion-icon color="tertiary" name="business"></ion-icon>
            </ion-tab-button>

            <ion-tab-button>
                <router-link style="font-size: 15px" to="/departement">
                    <ion-label>Département</ion-label>
                </router-link>
                <ion-icon color="tertiary" name="navigate"></ion-icon>
            </ion-tab-button>

            <ion-tab-button>
                <router-link style="font-size: 15px" to="/region">
                    <ion-label>Région</ion-label>
                </router-link>
                <ion-icon color="tertiary" name="map"></ion-icon>
            </ion-tab-button>
        </ion-tab-bar>
    </div>

</template>


<script>
    export default {
        name: "home",
        data() {
            return {
                zipcode: null,
                towns: []
            }
        },
        methods: {
            sendZipcode() {
                let search = /[0-9]{5}/;
                let search2 = /[a-z]/;
                if (search.test(this.zipcode)) {
                    this.$request.get('https://geo.api.gouv.fr/communes?codePostal=' + this.zipcode).then(res => {
                        this.towns = res.data
                    })
                } else if (search2.test(this.zipcode.toLowerCase())) {
                    this.$request.get('https://geo.api.gouv.fr/communes?nom=' + this.zipcode).then(res => {
                        this.towns = res.data
                    })
                }

            }
        }
    }
</script>
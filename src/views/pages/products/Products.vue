<template>
  <v-container>
    <v-container>
      <!-- <v-layout row wrap>
        <v-flex xs12 md3>
          <v-text-field outlined label="Search"></v-text-field>
        </v-flex>
      </v-layout> -->
      <v-layout row wrap>
        <v-flex xs12 md4>
          <h3>Search by Filters</h3>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs4 md1> <v-checkbox label="Date"></v-checkbox> </v-flex
        ><v-flex xs4 md1> <v-checkbox label="alphabetic"></v-checkbox> </v-flex>
      </v-layout>
    </v-container>
    
    <v-card dense>
      <v-card-title>
        <h2>Products</h2>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          outlined
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="products" :search="search">
        <template v-slot:[`item.delete`]="{ item }">
          <v-icon @click="deleteItem(item.city)" color="red">{{
            mdiTrashCan
          }}</v-icon>
        </template>
        <template v-slot:[`item.edit`]="{ item }">
          <v-icon @click="editItem(item.city)" color="green">{{ mdiPencil }}</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { mdiDotsVertical } from "@mdi/js";
import { mdiTrashCan } from "@mdi/js";
import { mdiPencil } from "@mdi/js";
import Helpers from "@/helpers/Helper.js";
export default {
  name: "products-component",
  data() {
    return {
      mdiDotsVertical: mdiDotsVertical,
      mdiTrashCan: mdiTrashCan,
      mdiPencil: mdiPencil,
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Price", value: "price" },
        { text: "Category", value: "category" },
        { text: "Quantity", value: "quantity" },
        { text: "Delete", value: "delete" },
        { text: "Edit", value: "edit" },
      ],
      products: [
        {
          name: "Frozen Yogurt",
          price: 45,
          category: "Daska",
          quantity: 1,
        },
      ],
    };
  },
  methods: {
    deleteItem(){},
    editItem(){}
  },
   beforeCreate() {
    // eslint-disable-next-line no-unused-vars
    let fetched_products = [];
    // eslint-disable-next-line no-unused-vars
    let url = "http://localhost:3001/api/products";
    const headers = {
      "x-access-token": `${this.$localStorage.get("token")}`,
      "content-type": "application/json",
    };
    console.log("headers", headers);
    Helpers.get(url, { headers: headers }).then((response) => {
      console.log("response", response);
      fetched_products = response.data;
      this.products = fetched_products
    });
  },
};
</script>

<style lang="scss" scoped></style>

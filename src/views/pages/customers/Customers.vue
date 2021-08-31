/* eslint-disable no-unused-vars */
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
        ><v-flex xs4 md1>
          <v-checkbox
            v-model="alphabetic_value"
            @change="sortAlphabetic1"
            label="alphabetic"
          ></v-checkbox>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card dense>
      <v-card-title>
        <h2>Customers</h2>
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
      <v-data-table :headers="headers" :items="sortAlphabetic" :search="search">
        <template v-slot:[`item.delete`]="{ item }">
          <v-icon @click="deleteItem(item._id)" color="red">{{
            mdiTrashCan
          }}</v-icon>
        </template>
        <template v-slot:[`item.edit`]="{ item }">
          <v-icon @click="editItem(item.city)" color="green">{{
            mdiPencil
          }}</v-icon>
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
import Swal from "sweetalert2";
export default {
  name: "customers-component",
  data() {
    return {
      mdiDotsVertical: mdiDotsVertical,
      mdiTrashCan: mdiTrashCan,
      mdiPencil: mdiPencil,
      alphabetic_value: false,
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "first_name",
        },
        { text: "Email", value: "email" },
        { text: "City", value: "city" },
        { text: "Country", value: "country" },
        { text: "Delete", value: "delete" },
        { text: "Edit", value: "edit" },
      ],
      customers: [],
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    deleteItem(_id) {
      console.log("id", _id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // eslint-disable-next-line no-unused-vars
          let url = `http://localhost:3001/api/customers/${_id}`;
          const headers = {
            "x-access-token": `${this.$localStorage.get("token")}`,
            "content-type": "application/json",
          };
          Helpers.deleteById(url, { headers: headers })
            .then((response) => {
              console.log("delete response", response);
              let idx = this.sortAlphabetic.indexOf(_id);
              console.log("idx", idx);
              this.customers.splice(idx, 1);
              this.sortAlphabetic.splice(idx, 1);
              Swal.fire("Deleted!", response.data.message, "success");
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      });
    },
    editItem() {},
    sortAlphabetic1() {
      this.sortAlphabetic;
    },
    allCustomers() {
      let fetched_customers = [];
      // eslint-disable-next-line no-unused-vars
      let url = "http://localhost:3001/api/customers";
      const headers = {
        "x-access-token": `${this.$localStorage.get("token")}`,
        "content-type": "application/json",
      };
      console.log("headers", headers);
      Helpers.get(url, { headers: headers })
        .then((response) => {
          console.log("response", response);
          fetched_customers = response.data;
          this.customers = fetched_customers;
           console.log("customers", this.customers);
        })
        .catch((error) => {
          console.log("error", error);
        });
        console.log("customers", this.customers);
    },
  },
  created() {
  this.allCustomers();
  console.log("created all", this.allCustomers());
  },
  computed: {
    sortAlphabetic() {
      console.log('customers in computed', this.customers);
      console.log("sort alphabetic", this.alphabetic_value);
      if (this.alphabetic_value === false) {
        return this.customers;
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.customers.sort((a, b) =>
          a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

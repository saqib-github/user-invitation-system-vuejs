/* eslint-disable no-unused-vars */
<template>
  <v-container>
    <data-table
      :headers="headers"
      :items="customers"
      :search="search"
      :name="name"
      @deleteItem="deleteItem"
      @editItem="editItem"
    >
    </data-table>
    <v-dialog v-model="dialog" max-width="500px" persistent class="round">
      <v-card height="450">
        <v-card-title class="pt-7 round">
          <span class="text-h5">Edit Customer Details</span>
        </v-card-title>
        <v-card-text class="pt-7">
          <v-container>
            <v-layout row wrap justify-center>
              <v-flex xs12 md9>
                <v-text-field
                  label="Customer Name"
                  outlined
                  rounded
                  dense
                  v-model.trim="customer_name"
                ></v-text-field>
                <v-text-field
                  label="Customer Email"
                  outlined
                  rounded
                  dense
                  v-model.trim="customer_email"
                ></v-text-field>
                <v-text-field
                  label="Customer City"
                  outlined
                  rounded
                  dense
                  v-model.trim="customer_city"
                ></v-text-field>
                <v-text-field
                  label="Customer Country"
                  outlined
                  rounded
                  dense
                  v-model.trim="customer_country"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="saveCustomer" text>Save</v-btn>
          <v-btn color="red" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Helpers from "@/helpers/Helper.js";
import DataTable from "@/components/DataTable.vue";
import Swal from "sweetalert2";
export default {
  name: "customers-component",
  components: {
    "data-table": DataTable,
  },
  data() {
    return {
      name: "Customers",
      search: "",
      dialog: false,
      // data for edit customers /v-models
      customer_name: "",
      customer_email: "",
      customer_city: "",
      customer_country: "",
      // data for edit customers /v-models
      headers: [
        {
          text: "Name",
          align: "start",
          value: "first_name",
        },
        { text: "Email", value: "email" },
        { text: "City", value: "city" },
        { text: "Country", value: "country" },
        { text: "Date", value: "date" },
        { text: "Actions", value: "delete" },
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
              console.log("delete sortAlphabetic", this.sortAlphabetic);
              let idx = this.customers.findIndex((p) => p._id === _id);
              console.log("idx", idx);
              this.customers.splice(idx, 1);
              Swal.fire("Deleted!", response.data.message, "success");
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      });
    },
    // eslint-disable-next-line no-unused-vars
    editItem(_id) {
      this.dialog = true;
      console.log("customer_id", _id);
      let idx = this.customers.findIndex((p) => p._id === _id);
      console.log("idx", idx);
      this.customer_name = this.customers[idx].first_name;
      this.customer_email = this.customers[idx].email;
      this.customer_city = this.customers[idx].city;
      this.customer_country = this.customers[idx].country;
    },
    saveCustomer() {
      console.log("customer_name", this.customer_name);
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
};
</script>

<style lang="scss" scoped>
.round {
  border-radius: 30px;
}
</style>

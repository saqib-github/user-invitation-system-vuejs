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
    <v-dialog v-model="dialog" max-width="550px" persistent class="round">
      <v-card height="500" class="round">
        <v-card-title class="pt-7 round">
          <span class="text-h5 font-weight-bold">Edit Customer Details</span>
        </v-card-title>
        <v-card-text class="pt-7">
          <v-container>
            <v-layout row wrap justify-center>
              <v-flex xs12 md9>
                <v-text-field
                  label="First Name"
                  outlined
                  rounded
                  dense
                  v-model.trim="customer_first_name"
                ></v-text-field>
                <v-text-field
                  label="Last Name"
                  outlined
                  rounded
                  dense
                  v-model.trim="customer_last_name"
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
    <!-- ......... -->
    <loader
      v-if="loader"
      object="#33a7ff"
      color1="#ffffff"
      color2="#17fd3d"
      size="5"
      speed="1.5"
      bg="#343a40"
      objectbg="#999793"
      opacity="80"
      disableScrolling="false"
      name="dots"
    ></loader>
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
      loader: false,
      // data for edit customers /v-models
      customer_first_name: "",
      customer_last_name: "",
      customer_email: "",
      customer_city: "",
      customer_country: "",
      id: "",
      index: Number,
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
        { text: "Date", value: "Date" },
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
                this.index = this.customers.findIndex((p) => p._id === _id);
                console.log("idx", this.index);
                this.customers.splice(this.index, 1);
                Swal.fire("Deleted!", response.data.message, "success");
              
            })
            .catch((error) => {
              console.log("error response", error.response);
              Swal.fire("Sorry", error.response.data.message, "error");
            });
        }
      });
    },
    // eslint-disable-next-line no-unused-vars
    editItem(_id) {
      this.dialog = true;
      console.log("customer_id", _id);
      this.index = this.customers.findIndex((p) => p._id === _id);
      console.log("idx", this.index);
      this.id = _id;
      this.customer_first_name = this.customers[this.index].first_name;
      this.customer_last_name = this.customers[this.index].last_name;
      this.customer_email = this.customers[this.index].email;
      this.customer_city = this.customers[this.index].city;
      this.customer_country = this.customers[this.index].country;
    },
    saveCustomer() {
      this.loader = true;
      console.log("update vali id", this.id);
      let url = `http://localhost:3001/api/customers/${this.id}`;
      const headers = {
        "x-access-token": `${this.$localStorage.get("token")}`,
        "content-type": "application/json",
      };
      const updateCustomer = {
        first_name: this.customer_first_name,
        last_name: this.customer_last_name,
        email: this.customer_email,
        city: this.customer_city,
        country: this.customer_country,
      };
      console.log("updateCustomer", updateCustomer);
      Helpers.updateById(url, updateCustomer, { headers: headers })
        .then((response) => {
          console.log("response", response);
          this.customers[this.index].first_name = this.customer_first_name;
          this.customers[this.index].last_name = this.customer_last_name;
          this.customers[this.index].email = this.customer_email;
          this.customers[this.index].city = this.customer_city;
          this.customers[this.index].country = this.customer_country;
          this.dialog = false;
          Swal.fire("Updated", response.data.message, "success");
        })
        .catch((error) => {
          console.log(error);
        });
        this.loader = false;
    },
    allCustomers() {
      this.loader = true;
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
      this.loader = false;
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

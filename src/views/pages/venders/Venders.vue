<template>
  <v-container>
    <data-table
      :headers="headers"
      :items="vendors"
      :search="search"
      :name="name"
      @deleteItem="deleteItem"
      @editItem="editItem"
    >
    </data-table>
    <!-- ................ -->
    <v-dialog v-model="dialog" max-width="500px" persistent class="round">
      <v-card height="450">
        <v-card-title class="pt-7 round">
          <span class="text-h5">Edit Vendor Details</span>
        </v-card-title>
        <v-card-text class="pt-7">
          <v-container>
            <v-layout row wrap justify-center>
              <v-flex xs12 md9>
                <v-text-field
                  label="Vendor Name"
                  outlined
                  rounded
                  dense
                  v-model.trim="vendor_name"
                ></v-text-field>
                <v-text-field
                  label="Vendor Email"
                  outlined
                  rounded
                  dense
                  v-model.trim="vendor_email"
                ></v-text-field>
                <v-text-field
                  label="Vendor City"
                  outlined
                  rounded
                  dense
                  v-model.trim="vendor_city"
                ></v-text-field>
                <v-text-field
                  label="Vendor Country"
                  outlined
                  rounded
                  dense
                  v-model.trim="vendor_country"
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
import Swal from "sweetalert2";
import DataTable from "../../../components/DataTable.vue";
export default {
  components: { DataTable },
  name: "venders-component",
  data() {
    return {
      search: "",
      name: "Vendors",
      dialog: false,
      // data for edit vendors /v-models
      vendor_name: '',
      vendor_email: '',
      vendor_city: '',
      vendor_counrty: '',
      // data for edit vendors /v-models
      headers: [
        {
          text: "Name",
          align: "start",
          value: "first_name",
        },
        { text: "Email", value: "email" },
        { text: "City", value: "city" },
        { text: "Country", value: "country" },
        { text: "Actions", value: "delete" },
      ],
      vendors: [
        {
          name: "Frozen Yogurt",
          email: "saqib123@gmail.com",
          city: "Daska",
          country: "Pakistan",
        },
      ],
    };
  },
  methods: {
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
          let url = `http://localhost:3001/api/vendors/${_id}`;
          const headers = {
            "x-access-token": `${this.$localStorage.get("token")}`,
            "content-type": "application/json",
          };
          Helpers.deleteById(url, { headers: headers })
            .then((response) => {
              console.log("delete response", response);
              let idx = this.vendors.findIndex((p) => p._id === _id);
              console.log("idx", idx);
              this.vendors.splice(idx, 1);
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
      let idx = this.vendors.findIndex((p) => p._id === _id);
      console.log("idx", idx);
      this.vendor_name = this.vendors[idx].first_name;
      this.vendor_email = this.vendors[idx].email;
      this.vendor_city = this.vendors[idx].city;
      this.vendor_country = this.vendors[idx].country;
    },
  },
  beforeCreate() {
    let fetched_vendors = [];
    // eslint-disable-next-line no-unused-vars
    let url = "http://localhost:3001/api/vendors";
    const headers = {
      "x-access-token": `${this.$localStorage.get("token")}`,
      "content-type": "application/json",
    };
    console.log("headers", headers);
    Helpers.get(url, { headers: headers }).then((response) => {
      console.log("response", response);
      fetched_vendors = response.data;
      this.vendors = fetched_vendors;
    });
  },
};
</script>

<style lang="scss" scoped></style>

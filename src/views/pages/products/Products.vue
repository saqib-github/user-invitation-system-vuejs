/* eslint-disable no-unused-vars */
<template>
  <v-container>
    <data-table
      :headers="headers"
      :items="products"
      :search="search"
      :name="name"
      @deleteItem="deleteItem"
      @editItem="editItem"
    >
    </data-table>
    <!-- ................. -->
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
import Swal from "sweetalert2";
import DataTable from "../../../components/DataTable.vue";
export default {
  name: "products-component",
  components: {
    DataTable,
  },
  data() {
    return {
      search: "",
      loader: false,
      name: "Products",
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        { text: "Price", value: "price" },
        { text: "Category", value: "category" },
        { text: "Quantity", value: "quantity" },
        { text: "Date", value: "Date" },
        { text: "Actions", value: "delete" },
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
          let url = `http://localhost:3001/api/products/${_id}`;
          const headers = {
            "x-access-token": `${this.$localStorage.get("token")}`,
            "content-type": "application/json",
          };
          Helpers.deleteById(url, { headers: headers })
            .then((response) => {
              console.log("delete response", response);
              let idx = this.products.findIndex((p) => p._id === _id);
              console.log("idx", idx);
              this.products.splice(idx, 1);
              Swal.fire("Deleted!", response.data.message, "success");
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      });
    },
    // eslint-disable-next-line no-unused-vars
    editItem(_id) {},
  },
  beforeCreate() {
    this.loader = true;
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
      this.products = fetched_products;
    });
    this.loader = false;
  },
};
</script>

<style lang="scss" scoped></style>

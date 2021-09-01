<template>
  <v-card dense>
    <v-card-title>
      
      <v-layout row wrap justify-end>
        <v-flex xs12 md3 class="ml-2">
          <h2 class="blue--text">{{ name }}</h2>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 md3 class="mr-16">
          <v-text-field
            v-model="search"
            outlined
            dense
            width="100"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            rounded
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-data-table :headers="headers" :items="items" :search="search">
      <template v-slot:[`item.delete`]="{ item }">
        <v-icon @click="editItem(item._id)" color="green" class="mr-3">{{
          mdiPencil
        }}</v-icon>
        <v-icon @click="deleteItem(item._id)" color="red">{{
          mdiTrashCan
        }}</v-icon>
      </template>
      <template v-slot:[`item.edit`]="{ item }">
        <!-- ............ -->
        <v-icon @click="editItem(item._id)" color="green">{{
          mdiPencil
        }}</v-icon>
        <!-- .............. -->
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiTrashCan } from "@mdi/js";
import { mdiPencil } from "@mdi/js";
export default {
  name: "data-table",
  props: ["headers", "items", "search", "name"],
  data() {
    return {
      mdiTrashCan: mdiTrashCan,
      mdiPencil: mdiPencil,
    };
  },
  methods: {
    deleteItem(_id) {
      console.log("child_id", _id);
      this.$emit("deleteItem", _id);
    },
    editItem(_id) {
      this.$emit("editItem", _id);
    },
  },
};
</script>

<style lang="scss" scoped></style>

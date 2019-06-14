<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">User Profile</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <!-- title -->
          <div class="md-layout-item md-small-size-100 md-size-5">
            <md-field>
              <label>Title</label>
              <md-input v-model="Title" type="text"></md-input>
            </md-field>
          </div>
          <!-- initials -->
          <div class="md-layout-item md-small-size-50 md-size-5">
            <md-field>
              <label>initials</label>
              <md-input v-model="initials" type="text"></md-input>
            </md-field>
          </div>
          <!-- firstname -->
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>First Name</label>
              <md-input v-model="firstName" type="text"></md-input>
            </md-field>
          </div>
          <!-- middleName -->
          <div class="md-layout-item md-small-size-50 md-size-15">
            <md-field>
              <label>MiddleName</label>
              <md-input v-model="middleName" type="text"></md-input>
            </md-field>
          </div>
          <!-- lastname -->
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lastName" type="text"></md-input>
            </md-field>
          </div>
          <!-- Suffix -->
          <div class="md-layout-item md-small-size-50 md-size-10">
            <md-field>
              <label>Suffix</label>
              <md-input v-model="Suffix" type="text"></md-input>
            </md-field>
          </div>
          <!-- gender -->
          <div class="md-layout-item md-small-size-50 md-size-10">
            <md-field>
              <label>Gender</label>
              <md-input v-model="gender" type="text"></md-input>
            </md-field>
          </div>
          <!-- CallName -->
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>NickName</label>
              <md-input v-model="CallName" type="text"></md-input>
            </md-field>
          </div>

          <!-- PhoneNumber -->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Phone Number</label>
              <md-input v-model="PhoneNumber" type="email"></md-input>
            </md-field>
          </div>

          <!-- emailadress -->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email Address</label>
              <md-input v-model="emailadress" type="email"></md-input>
            </md-field>
          </div>

          <!-- address -->
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>

          <!-- city -->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>City</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>

          <!-- Country -->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>

          <!-- zipCode -->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="zipCode" type="text"></md-input>
            </md-field>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>

import json from "../../json/Receiver2.json";
import { join } from 'path';
export default {
   name: "Receiver2",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  default: function() {
    json = this.$store.getters.Data;

    console.log("In Editprofileform - Data received is " + json);
  },
  data() {
    return{
      myJson:json,
      Title:json.fields[3].value.title,
      Suffix:json.fields[3].value.Suffix,
      middleName:json.fields[3].value.middleName,
      gender:json.fields[3].value.gender,
      firstName:json.fields[3].value.firstName,
      CallName:json.fields[3].value.CallName,
      initials:json.fields[3].value.initials,
      lastName:json.fields[3].value.lastName,



      emailadress: json.fields[6].value,
      address: json.fields[0].value[0].street +" ," +"  "+ json.fields[0].value[0].houseNumber,
      PhoneNumber:json.fields[1].value[0].phoneNumber,
      city:json.fields[0].value[0].city,
      country:json.fields[0].value[0].country,
      zipCode:json.fields[0].value[0].zipCode,




    };
  }
};
</script>
<style></style>



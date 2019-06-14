<template>
  <div class="content">
        <h1> Price </h1>
   <br><br>


   <h3>Date:  {{results.time.updated}}</h3>
   <br><br>

    {{results}}
    <br><br>


   USD current Rate "$" {{results.bpi.USD.rate}}
   <br>
   USD Floating Rate  - {{results.bpi.USD.rate_float}}
   <br><br>

   GBP current Rate {{results.bpi.GBP.rate}}
   <br>
   GBP Floating Rate  - {{results.bpi.GBP.rate_float}}
   <br><br>

   EUR current Rate {{results.bpi.EUR.rate}}
   <br>
   EUR Floating Rate  - {{results.bpi.EUR.rate_float}}
   <br><br>






  </div>
</template>

<script>
import axios from "axios";
import { get } from 'http';

    export default {

        name: 'Home',
        data () {
            return {
                results : null
            }
        },

        mounted() {

            axios({ method: "GET", "url": "https://api.coindesk.com/v1/bpi/currentprice.json" }).then(response =>
            {this.results = response.data}, error => {
                console.error(error);
            });

            // console.log("First API call started");
            // axios
            // axios({ method: "Post", url: "https://demo.csapi.nl/api/v2/token",
            //  headers:
            //     {
            //         "Content-Type":"application/x-www-form-urlencoded",
            //         "ApiKey":"etfqxUj1AGoIsJikYYCmzY6vSmJ5lKuw1xkga/CUpPo="
            //     },
            //  data:
            //     {
            //         "grant_type":"password",
            //         "username":"administrator",
            //         "password":"password"
            //     },
            // }).then(response =>
            // {
            //     console.log("Response recieved")
            //     console.log(response)
            //     this.results = response.data}, error => {
            //     console.error(error);
            // });
            // console.log("First API call ended");



            // console.log("Second API call started");
            // // allow: GET
            // var tokenStr ="IvpSwWJRdpe_u4jgEaIQwhmzClScq-0H_26zYwuTX7PZkaDNCgEmDSL4QounIC540IUksBzLoVWDFFCSEgkNFNRlOVBgKixjHwWrxWowfp4eWWVfTJI4KLsz2JufTnwoBj9OOCLvdL4-H5hEnRftOzM4Q7qUhbktofR4BxYxHwV98rH9to8eub1ssQbKunQCYi39n1OYnczyrV7kZNI2uT5-iR3LVW-3EwcX_eHUpklv8WhvBy4BaI9cEmPYGuUFJN3CiK-_VsEb6rDJY8KR_FdHcxZ8paOiRclPhYz2M0_txwX9WeDhuFr9PHnTa4ayVTboC6H8hBkXuz632Zx_YJNLmHMLxuaOHE_4wznJU_XilOOC9D1SWJMzheH8q7n609YKUvx0QRVBmtiOzkFWOQ"
            // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
            // axios({ method: "GET", url: "https://demo.csapi.nl/api/v2/receivers/1",
            //  headers:
            //     {
            //         "Authorization":"Bearer ${tokenstr} ",
            //         "ApiKey":"etfqxUj1AGoIsJikYYCmzY6vSmJ5lKuw1xkga/CUpPo=",
            //         "Content-Type":"application/x-www-form-urlencoded",
            //         "Accept":"*/*",
            //         "Cache-Control":"no-cache"

            //         // "Host":"demo.csapi.nl",
            //         // "accept-encoding":"gzip, deflate"
            //         // "Connection":"keep-alive"
            //     }
            // } ).then(response =>
            // {
            //     console.log(response)
            //     this.results = response.data}, error => {
            //     console.error(error);
            // });
            // console.log("Second API call ended");

            // /*
            // axios.post("https://demo.csapi.nl/api/v2/Token?api-key=etfqxUj1AGoIsJikYYCmzY6vSmJ5lKuw1xkga/CUpPo=",
            // params: {
            // username: "administrator",
            // password: "password",
            // grant_type: "password"
            // }
            // */
        },
        methods: { }
    }
</script>
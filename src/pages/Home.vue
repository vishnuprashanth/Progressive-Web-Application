<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-85">
        <Receiver2 data-background-color="Green"> </Receiver2>
      </div>
    </div>
  </div>
</template>


<script>
import { Receiver2  } from "@/pages";
// import router from '../routes';

export default {
    methods: {
        default : function()
        {
            data = "../../json/Receiver2.json";
            console.log("In home - Data to send is " + data);
            this.$store.commit('changeDataState', data);
            this.$router.push({name: 'user-post-create', params:{data}});
            router.push({
            name: 'events',
            params: {
               items: data
            }
            });
        }
    },

    components: {
    Receiver2
    }
};
</script>
// import axios from "axios";
// import { get } from 'http';

//     export default {

//         name: 'Home',
//         data () {
//             return {
//                 results : null
//             }
//         },

//         mounted() {
//             // console.log("First API call started");
//             // axios
//             // axios({ method: "Post", url: "https://demo.csapi.nl/api/v2/token",
//             //  headers:
//             //     {
//             //         "Content-Type":"application/x-www-form-urlencoded",
//             //         "ApiKey":"etfqxUj1AGoIsJikYYCmzY6vSmJ5lKuw1xkga/CUpPo="
//             //     },
//             //  data:
//             //     {
//             //         "grant_type":"password",
//             //         "username":"administrator",
//             //         "password":"password"
//             //     },
//             // }).then(response =>
//             // {
//             //     console.log("Response recieved")
//             //     console.log(response)
//             //     this.results = response.data}, error => {
//             //     console.error(error);
//             // });
//             // console.log("First API call ended");

//             axios({ method: "GET", "url": "https://api.coindesk.com/v1/bpi/currentprice.json" }).then(response =>
//             {this.results = response.data}, error => {
//                 console.error(error);
//             });

//             console.log("Second API call started");
//             // allow: GET
//             var tokenStr ="IvpSwWJRdpe_u4jgEaIQwhmzClScq-0H_26zYwuTX7PZkaDNCgEmDSL4QounIC540IUksBzLoVWDFFCSEgkNFNRlOVBgKixjHwWrxWowfp4eWWVfTJI4KLsz2JufTnwoBj9OOCLvdL4-H5hEnRftOzM4Q7qUhbktofR4BxYxHwV98rH9to8eub1ssQbKunQCYi39n1OYnczyrV7kZNI2uT5-iR3LVW-3EwcX_eHUpklv8WhvBy4BaI9cEmPYGuUFJN3CiK-_VsEb6rDJY8KR_FdHcxZ8paOiRclPhYz2M0_txwX9WeDhuFr9PHnTa4ayVTboC6H8hBkXuz632Zx_YJNLmHMLxuaOHE_4wznJU_XilOOC9D1SWJMzheH8q7n609YKUvx0QRVBmtiOzkFWOQ"
//             process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
//             axios({ method: "GET", url: "https://demo.csapi.nl/api/v2/receivers/1",
//              headers:
//                 {
//                     "Authorization":"Bearer ${tokenstr} ",
//                     "ApiKey":"etfqxUj1AGoIsJikYYCmzY6vSmJ5lKuw1xkga/CUpPo=",
//                     "Content-Type":"application/x-www-form-urlencoded",
//                     "Accept":"*/*",
//                     "Cache-Control":"no-cache"

//                     // "Host":"demo.csapi.nl",
//                     // "accept-encoding":"gzip, deflate"
//                     // "Connection":"keep-alive"
//                 }
//             } ).then(response =>
//             {
//                 console.log(response)
//                 this.results = response.data}, error => {
//                 console.error(error);
//             });
//             console.log("Second API call ended");

//             // /*
//             // axios.post("https://demo.csapi.nl/api/v2/Token?api-key=etfqxUj1AGoIsJikYYCmzY6vSmJ5lKuw1xkga/CUpPo=",
//             // params: {
//             // username: "administrator",
//             // password: "password",
//             // grant_type: "password"
//             // }
//             // */
//         },
//         methods: { }
//     }
// </script>
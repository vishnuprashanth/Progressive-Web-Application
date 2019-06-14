<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-85">
        <Receiver3 data-background-color="red"> </Receiver3>
      </div>
    </div>
  </div>
</template>


<script>
import { Receiver3  } from "@/pages";

export default {
      methods: {
        default : function()
        {
            data = "../../json/Receiver3.json";
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
    Receiver3
  }
};
</script>
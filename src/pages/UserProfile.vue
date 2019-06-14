<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-85">

        <edit-profile-form data-background-color="green"> </edit-profile-form>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm  } from "@/pages";

export default {
    methods: {
        default : function()
        {
          
        },


    },
    components: {
    EditProfileForm
    }
};


// export default {
//   components: {
//     EditProfileForm
//   }
// };
</script>

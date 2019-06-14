<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to ="/user/1">
        <md-icon>person</md-icon>
        <p>Receiver 1</p>
      </sidebar-link>

      <sidebar-link to="/user/2">
        <md-icon>person</md-icon>
        <p>Receiver 2 </p>
      </sidebar-link>

      <sidebar-link to="/user/3">
        <md-icon>person</md-icon>
        <p>Receiver 3 </p>
      </sidebar-link>


      <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>Live Price</p>
      </sidebar-link>

      <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>Section 3</p>
      </sidebar-link>

      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Section 4</p>
      </sidebar-link>

      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Section 5</p>
      </sidebar-link>

      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Section 6</p>
      </sidebar-link>

    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>  </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>

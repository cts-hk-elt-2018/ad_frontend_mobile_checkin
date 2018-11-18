<template>
  <div class="success">
    <div class="main">
      <div class="container">
        <p id="success">Enjoy your journey with Cognizant!</p>
      </div>
    </div>
    <div class="cover cover3"></div>
  </div>
</template>

<script>
export default {
  name: "success",
  data() {
    return {
      groupname: null
    };
  },
  created() {
    if (this.$route.query.groupname) {
      this.groupname = this.$route.query.groupname;
    }
  },
  methods: {
    next() {
      this.$router.push({
        name: "upload",
        query: { groupname: this.groupname }
      });
    }
  }
};
</script>

<style lang="scss">
.cover3 {
  width: 100%;
  height: 100vh;
  background: #0033a0;
  position: absolute;
  z-index: 0;
  bottom: 0px;
}
#success {
  margin: 0 auto;
  width: 95%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 3.8vh;
  font-weight: bold;
  box-sizing: border-box;
  font-family: "Montserrat";
  padding-top: 8%;
  padding-bottom: 9%;
  outline: none;
  appearance: unset !important;
  -moz-appearance: unset !important;
  -webkit-appearance: unset !important;
  -o-appearance: unset !important;
  -ms-appearance: unset !important;
  -webkit-appearance: none;
  transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -webkit-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
}
</style>

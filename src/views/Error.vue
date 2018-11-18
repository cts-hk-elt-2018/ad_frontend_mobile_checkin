<template>
  <div class="success">
    <div class="main">
      <div class="container">
        <p id="error">Please contact our flight attendant.</p>
      </div>
    </div>
    <div class="cover cover3"></div>
  </div>
</template>

<script>
export default {
  name: "error"
};
</script>

<style lang="scss">
.cover3 {
  width: 100vw;
  height: 100vh;
  background: #0033a0;
  position: absolute;
  z-index: 0;
  bottom: 0px;
}
#error {
  position: absolute;
  margin: 0 auto;
  width: 95%;
  border: none;
  background: transparent;
  font-size: 3.8vh;
  font-weight: 500;
  box-sizing: border-box;
  font-family: "TT Norms";
  top: 50%;
  transform: translateY(-50%);
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

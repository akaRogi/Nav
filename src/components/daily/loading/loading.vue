<template>
  <div class="spinner-box">
    <div class="solar-system">
      <div class="earth-orbit orbit">
        <div class="planet earth"></div>
        <div class="venus-orbit orbit">
          <div class="planet venus"></div>
          <div class="mercury-orbit orbit">
            <div class="planet mercury"></div>
            <div class="sun"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>
  .spinner-box{
    width: 200px;
    height: 200px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to{
      transform: rotate(359deg);
    }
  }
  .solar-system {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orbit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(252, 209, 51);
    border-radius: 50%;
  }

  .earth-orbit {
    width: 165px;
    height: 165px;
    -webkit-animation: spin 12s linear 0s infinite;
  }

  .venus-orbit {
    width: 120px;
    height: 120px;
    -webkit-animation: spin 7.4s linear 0s infinite;
  }

  .mercury-orbit {
    width: 90px;
    height: 90px;
    -webkit-animation: spin 3s linear 0s infinite;
  }

  .planet {
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgb(252, 209, 51)
  }

  .sun {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgb(252, 209, 51)
  }
</style>

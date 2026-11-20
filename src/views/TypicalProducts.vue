<template>
  <div class="qualityAssurance-page">
    <div class="box">
      <div class="title">Service</div>
      <div class="service-scope">
        <div>
          <img src="@/assets/img/jmzz.png" alt="" />
          <div>Investment Casting</div>
        </div>
        <div>
          <img src="@/assets/img/jjg.png" alt="" />
          <div>Machining</div>
        </div>
        <div>
          <img src="@/assets/img/3Ddy.png" alt="" />
          <div>3D Printing</div>
        </div>
        <div>
          <img src="@/assets/img/jsjfzyjcfx.png" alt="" />
          <div>Simulation and Detection Analysis</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.qualityAssurance-page {
  padding: 100px 0 0 0;
  box-sizing: border-box;
  padding-bottom: 20px;

  .box {
    width: 1200px;
    margin: 0 auto;

    .title {
      font-size: 40px;
      color: @primary-color;
      text-align: center;
      margin-top: 50px;
      font-weight: 600;
      margin-bottom: 20px;

      &::after {
        content: " ";
        display: block;
        width: 100px;
        height: 5px;
        background-color: @primary-color;
        margin: 10px auto 0;
      }
    }

    .service-scope {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      font-size: 28px;
      font-weight: 600;
      text-align: center;
      gap: 20px;

      img {
        width: 100%;
        border-radius: 20px;
      }
    }
  }
}
</style>

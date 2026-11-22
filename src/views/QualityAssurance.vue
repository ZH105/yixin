<template>
  <div class="qualityAssurance-page">
    <div class="box">
      <div class="title">Certificates</div>
      <div class="certificates">
        <img src="@/assets/img/certificates1.png" alt="" />
        <img src="@/assets/img/certificates2.png" alt="" />
        <img src="@/assets/img/certificates3.png" alt="" />
        <img src="@/assets/img/certificates4.png" alt="" />
        <img src="@/assets/img/certificates5.png" alt="" />
        <img src="@/assets/img/certificates6.png" alt="" />
        <img src="@/assets/img/certificates7.png" alt="" />
        <img src="@/assets/img/certificates8.png" alt="" />
        <img src="@/assets/img/certificates9.png" alt="" />
        <img src="@/assets/img/certificates10.png" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="title">Patent Certificate</div>
      <div class="certificates">
        <img src="@/assets/img/patentCertificate1.png" alt="" />
        <img src="@/assets/img/patentCertificate2.png" alt="" />
        <img src="@/assets/img/patentCertificate3.png" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="title">Testing Equipments</div>
      <div class="testing-equipment">
        <div>
          <img src="@/assets/img/gpfx.png" alt="" />
          <span>Spectral Analysis</span>
        </div>
        <div>
          <img src="@/assets/img/lhsy.png" alt="" />
          <span>Physical and Chemical Test</span>
        </div>
        <div>
          <img src="@/assets/img/ywj.png" alt="" />
          <span>Salt Spraying Tester</span>
        </div>
        <div>
          <img src="@/assets/img/3Dsmy.png" alt="" />
          <span>3D Scanner</span>
        </div>
        <div>
          <img src="@/assets/img/szbjc.png" alt="" />
          <span>CMM</span>
        </div>
        <div>
          <img src="@/assets/img/impactTestingMachine.png" alt="" />
          <span>Impact Testing Machine</span>
        </div>
        <div>
          <img src="@/assets/img/EUTM.png" alt="" />
          <span>Electronic Universal Testing Machine</span>
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

    .testing-equipment {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      background-color: @primary-color;
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      padding: 30px 20px;
      text-align: center;
      gap: 15px;

      img {
        border-radius: 20px;
        width: 100%;
        height: 280px;
      }
    }

    .certificates {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;

      img {
        width: 100%;
        height: 350px;
      }
    }
  }
}
</style>

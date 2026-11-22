<template>
  <div class="qualityAssurance-page">
    <div class="box">
      <div class="title">Valve</div>
      <div class="product-img">
        <img src="@/assets/img/valve1.png" alt="" />
        <img src="@/assets/img/valve2.png" alt="" />
        <img src="@/assets/img/valve3.png" alt="" />
        <img src="@/assets/img/valve4.png" alt="" />
        <img src="@/assets/img/valve5.png" alt="" />
        <img src="@/assets/img/valve6.png" alt="" />
        <img src="@/assets/img/valve7.png" alt="" />
        <img src="@/assets/img/valve8.png" alt="" />
        <img src="@/assets/img/valve9.png" alt="" />
        <img src="@/assets/img/valve10.png" alt="" />
        <img src="@/assets/img/valve11.png" alt="" />
        <img src="@/assets/img/valve12.png" alt="" />
        <img src="@/assets/img/valve13.png" alt="" />
        <img src="@/assets/img/valve14.png" alt="" />
        <img src="@/assets/img/valve15.png" alt="" />
        <img src="@/assets/img/valve16.png" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="title">Pump</div>
      <div class="product-img">
        <img src="@/assets/img/pump1.png" alt="" />
        <img src="@/assets/img/pump2.png" alt="" />
        <img src="@/assets/img/pump3.png" alt="" />
        <img src="@/assets/img/pump4.png" alt="" />
        <img src="@/assets/img/pump5.png" alt="" />
        <img src="@/assets/img/pump6.png" alt="" />
        <img src="@/assets/img/pump7.png" alt="" />
        <img src="@/assets/img/pump8.png" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="title">Impeller</div>
      <div class="product-img">
        <img src="@/assets/img/impeller1.png" alt="" />
        <img src="@/assets/img/impeller2.png" alt="" />
        <img src="@/assets/img/impeller3.png" alt="" />
        <img src="@/assets/img/impeller4.png" alt="" />
        <img src="@/assets/img/impeller5.png" alt="" />
        <img src="@/assets/img/impeller6.png" alt="" />
        <img src="@/assets/img/impeller7.png" alt="" />
        <img src="@/assets/img/impeller8.png" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="title">Filter</div>
      <div class="product-img">
        <img src="@/assets/img/filter1.png" alt="" />
        <img src="@/assets/img/filter2.png" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="title">Related Mechanical Parts</div>
      <div class="product-img">
        <img src="@/assets/img/related1.png" alt="" />
        <img src="@/assets/img/related2.png" alt="" />
        <img src="@/assets/img/related3.png" alt="" />
        <img src="@/assets/img/related4.png" alt="" />
        <img src="@/assets/img/related5.png" alt="" />
        <img src="@/assets/img/related6.png" alt="" />
        <img src="@/assets/img/related7.png" alt="" />
        <img src="@/assets/img/related8.png" alt="" />
        <img src="@/assets/img/related9.png" alt="" />
        <img src="@/assets/img/related10.png" alt="" />
        <img src="@/assets/img/related11.png" alt="" />
        <img src="@/assets/img/related12.png" alt="" />
        <img src="@/assets/img/related13.png" alt="" />
        <img src="@/assets/img/related14.png" alt="" />
        <img src="@/assets/img/related15.png" alt="" />
        <img src="@/assets/img/related16.png" alt="" />
        <img src="@/assets/img/related17.png" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="title">Application Area</div>
      <div class="field">
        <div class="field-item">
          <img src="@/assets/img/syhg.jpeg" alt="" />
          <div class="field-title">Oil,Gas & Chemical</div>
        </div>
        <div class="field-item">
          <img src="@/assets/img/hgcb.jpeg" alt="" />
          <div class="field-title">Marine & Offshore</div>
        </div>
        <div class="field-item">
          <img src="@/assets/img/spyl.jpg" alt="" />
          <div class="field-title">Food & Medical</div>
        </div>
        <div class="field-item">
          <img src="@/assets/img/hkht.jpeg" alt="" />
          <div class="field-title">Aerospace</div>
        </div>
        <div class="field-item">
          <img src="@/assets/img/nydl.jpeg" alt="" />
          <div class="field-title">Energy & Power</div>
        </div>
        <div class="field-item">
          <img src="@/assets/img/qc.jpeg" alt="" />
          <div class="field-title">Automobile</div>
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

    .product-img {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;

      img {
        width: 100%;
        height: 180px;
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

    .field {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      .field-item {
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        .field-title {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 26px;
          color: #fff;
          width: 100%;
          padding: 10px 0;
          background-color: rgba(0, 0, 0, 0.3);
          text-align: center;
        }
      }
    }
  }
}
</style>

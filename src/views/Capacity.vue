<template>
  <div class="capacity-page">
    <div class="box">
      <div class="title">Factory Overview</div>
      <div class="box-value">
        <div class="value-right">
          <div class="right-item">
            <img src="@/assets/img/icon-factory.png" alt="" />
            <span>Area</span>
            <span class="value">10000㎡</span>
          </div>
          <div class="right-item">
            <img src="@/assets/img/icon-yuangong.png" alt="" />
            <span>Workers</span>
            <span class="value">150+</span>
          </div>
          <div class="right-item">
            <img src="@/assets/img/icon-channeng.png" alt="" />
            <span>Capacity</span>
            <span class="value">3000 Tons</span>
          </div>
          <div class="right-item">
            <img src="@/assets/img/icon-zhongliang.png" alt="" />
            <span>Product Unit</span>
            <span class="value">0.5-200kg</span>
          </div>
          <div class="right-item">
            <img src="@/assets/img/icon-gaojingdu.png" alt="" />
            <span>Surface Roughness</span>
            <span class="value">≤Ra6.3</span>
          </div>
        </div>
        <img src="@/assets/img/factory.png" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="title">Materials</div>
      <div class="material">
        <div class="material-item">
          <div class="material-title">Stainless Steel</div>
          <div class="material-value">
            <div>ASTM：CF8M,CF8,CF3M,CN7M</div>
            <div>DIN-EN：1.4408，1.4308，1.4581，1.4409</div>
            <div>BS：304C15，316C12，316C16</div>
            <div>JIS：SCS13，SCS14，SCS16</div>
          </div>
        </div>
        <div class="material-item">
          <div class="material-title">Duplex Steel</div>
          <div class="material-value">
            <div>ASTM：CD4MWCuN(6A)，CE3MN(5A)，CD3MN(4A)</div>
            <div>DIN-EN：1.4517，1.4410，1.4462</div>
            <div>JIS：SCS10</div>
          </div>
        </div>
        <div class="material-item">
          <div class="material-title">Nickel-based Alloy</div>
          <div class="material-value">
            <div>
              ASTM：CW2M/Hastelloy，CN7M/HastelloyB，M-35-1/Monel,M-35-2/Monel
            </div>
          </div>
        </div>
        <div class="material-item">
          <div class="material-title">Carbon Steel</div>
          <div class="material-value">
            <div>ASTM:WCB，WC6，WC9</div>
            <div>Din-EN:1.0619，1.7357</div>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">Manufacturing Equipments</div>
      <div class="box-equipment">
        <div class="equipment-item">
          <img src="@/assets/img/shela.png" alt="" />
          <div>Making Wax</div>
          <div class="line">
            <img src="@/assets/img/right.png" alt="" />
          </div>
        </div>
        <div class="equipment-item">
          <img src="@/assets/img/zhike.png" alt="" />
          <div>Thick Liquid</div>
          <div class="line">
            <img src="@/assets/img/right.png" alt="" />
          </div>
        </div>
        <div class="equipment-item">
          <img src="@/assets/img/tuola.png" alt="" />
          <div>Dewaxing</div>
          <div class="line">
            <img src="@/assets/img/right.png" alt="" />
          </div>
        </div>
        <div class="equipment-item">
          <img src="@/assets/img/beishao.png" alt="" />
          <div>Burning</div>
          <div class="line">
            <img src="@/assets/img/right.png" alt="" />
          </div>
        </div>
        <div class="equipment-item">
          <img src="@/assets/img/ronglian.png" alt="" />
          <div>Casting</div>
        </div>
        <div class="equipment-item">
          <img src="@/assets/img/zhengxing.png" alt="" />
          <div>Shaping</div>
          <div class="line2">
            <img src="@/assets/img/right.png" alt="" />
          </div>
        </div>
        <div class="equipment-item">
          <img src="@/assets/img/rechuli.png" alt="" />
          <div>Heat Treatment</div>
          <div class="line2">
            <img src="@/assets/img/right.png" alt="" />
          </div>
        </div>
        <div class="equipment-item">
          <img src="@/assets/img/paowan.png" alt="" />
          <div>Shot Blasting</div>
          <div class="line2">
            <img src="@/assets/img/right.png" alt="" />
          </div>
        </div>
        <div class="equipment-item">
          <img src="@/assets/img/zhengke.png" alt="" />
          <div>Knock out</div>
          <div class="line2">
            <img src="@/assets/img/right.png" alt="" />
          </div>
        </div>
        <div class="equipment-item">
          <img src="@/assets/img/jiaozhu.png" alt="" />
          <div>Pouring</div>
        </div>
        <div class="line3">
          <img src="@/assets/img/right.png" alt="" />
        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">Machining</div>
      <div class="machining">
        <div class="machining1">
          <img src="@/assets/img/machining1.png" alt="" />
          <img src="@/assets/img/machining2.png" alt="" />
          <img src="@/assets/img/machining3.png" alt="" />
        </div>
        <img class="machining2" src="@/assets/img/machining4.png" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="title">3D printing</div>
      <div class="printing">
        <img src="@/assets/img/3D-printing.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.capacity-page {
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

    .box-value {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      font-size: 30px;

      & > img {
        width: 550px;
      }

      .value-right {
        flex: 1;
        padding: 20px 10px;

        .right-item {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;

          img {
            width: 40px;
          }

          .value {
            color: @primary-color;
            font-weight: 600;
            font-size: 34px;
          }
        }
      }
    }

    .material {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      & > div:nth-child(2) {
        opacity: 0.8;
      }
      & > div:nth-child(3) {
        opacity: 0.8;
      }

      .material-item {
        height: 250px;
        color: #fff;
        padding: 20px;
        background-color: @primary-color;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .material-title {
          font-size: 40px;
          text-align: center;
          font-weight: 600;
          color: #fff;
          margin-bottom: 20px;
        }
        .material-value {
          font-size: 20px;
          max-width: 300px;

          & > div {
            margin-bottom: 10px;
          }
        }
      }
    }

    .box-equipment {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      position: relative;

      .equipment-item {
        text-align: center;
        font-size: 30px;
        position: relative;
        margin-bottom: 20px;
        img {
          width: 160px;
          margin-bottom: 10px;
        }

        .line {
          width: 60px;
          border-top: 5px dashed @primary-color;
          position: absolute;
          top: 40%;
          right: -30px;

          img {
            width: 30px;
            position: absolute;
            top: -16px;
            right: -20px;
          }
        }
        .line2 {
          width: 60px;
          border-top: 5px dashed @primary-color;
          position: absolute;
          top: 40%;
          right: -30px;

          img {
            width: 30px;
            position: absolute;
            top: -16px;
            left: -20px;
            transform: rotate(180deg);
          }
        }
      }

      .line3 {
        width: 40px;
        height: 230px;
        border: 5px dashed @primary-color;
        border-left: none;
        position: absolute;
        right: -20px;
        top: 80px;

        img {
          width: 30px;
          position: absolute;
          top: 50%;
          right: -15px;
          transform: rotate(90deg);
        }
      }
    }

    .machining {
      .machining1 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        img {
          width: 100%;
          height: 320px;
        }
      }
      .machining2 {
        width: 100%;
      }
    }

    .printing {
      img {
        width: 100%;
      }
    }
  }
}
</style>

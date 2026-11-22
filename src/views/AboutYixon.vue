<template>
  <div class="home-page">
    <div class="box1">
      <div class="company">
        <img src="@/assets/img/company.png" alt="" />
      </div>
    </div>
    <div class="box2">
      <div class="title">Company Profile</div>
      <div class="profile">
        <div class="profile-item">
          <div class="profile-item-left">About Yixon</div>
          <div class="profile-item-right">
            Yixon Investment Castings (ANHUI) Co., Ltd. is a high-tech
            enterprise integrating R&D, manufacturing, sales and service,
            providing high-precision, high-complexity and mission-critical
            castings and machined components for diversified global markets.
            Adopting advanced processes including silica sol shell investment
            casting, precision machining and surface treatment, we produce
            castings in stainless steel, duplex stainless steel, nickel-based
            alloys and other advanced alloy materials.
          </div>
        </div>
        <div class="profile-item">
          <div class="profile-item-left">Our Production Capabilities</div>
          <div class="profile-item-right">
            Unit weight range: 0.5–200 kg<br />
            High Dimensional
            Accuracy:VDG-MerkblattP-690-D2、DIN1680、JISB0403、ISO8062 and other
            tolerance standards. Please refer to the product standards in our
            quality assurance document for details. <br />
            Fine surface : Ra ≤ 6.3, ≤Ra3.2 after special process. <br />
            Rapid Prototype: We adopt 3D printing technology for rapid
            prototyping, process & structural verification and fast production
            of small-batch parts. <br />
            Complex component development: Advanced casting simulation software
            is applied to assist process design. Ceramic cores and special
            processes are adopted to develop parts with intricate geometries.<br />
            Production equipment: We are equipped with automatic wax injectors
            and wax reclamation systems; six-layer automatic horizontal shell
            production lines with an automatic temperature & humidity control
            system for drying rooms. Fast drying technology is adopted to
            shorten the shell drying cycle. We also have high-efficiency
            dewaxing autoclaves, eco-friendly wax treatment and reclamation
            systems, and high-performance double-chamber overhead shot blasting
            machines.
          </div>
        </div>
        <div class="profile-item">
          <div class="profile-item-left">Main Application Fields</div>
          <div class="profile-item-right">
            Oil & gas, chemical industry, offshore & marine, food & medical,
            aerospace, power & energy, automotive and other industries.
          </div>
        </div>
      </div>
    </div>

    <div class="box2">
      <div class="title">Recognition</div>
      <div class="recognition">
        <img src="@/assets/img/recognition1.png" alt="" />
        <img src="@/assets/img/recognition2.png" alt="" />
        <img src="@/assets/img/recognition3.png" alt="" />
        <img src="@/assets/img/recognition4.png" alt="" />
        <img src="@/assets/img/recognition5.png" alt="" />
        <img src="@/assets/img/recognition6.png" alt="" />
      </div>
    </div>
    <div class="box2">
      <div class="title">Customers</div>
      <div class="customer">
        <img src="@/assets/img/Customer1.png" alt="" />
        <img src="@/assets/img/Customer2.png" alt="" />
        <img src="@/assets/img/Customer3.png" alt="" />
        <img src="@/assets/img/Customer4.png" alt="" />
        <img src="@/assets/img/Customer5.png" alt="" />
        <img src="@/assets/img/Customer6.png" alt="" />
        <img src="@/assets/img/Customer7.png" alt="" />
        <img src="@/assets/img/Customer8.png" alt="" />
        <img src="@/assets/img/Customer9.png" alt="" />
        <img src="@/assets/img/Customer10.png" alt="" />
        <img src="@/assets/img/Customer11.png" alt="" />
        <img src="@/assets/img/Customer12.png" alt="" />
        <img src="@/assets/img/Customer13.png" alt="" />
        <img src="@/assets/img/Customer14.png" alt="" />
        <img src="@/assets/img/Customer15.png" alt="" />
      </div>
    </div>
    <div class="box2">
      <div class="title">Corporate Culture</div>
      <div class="qywh">
        <div class="qywh-img">
          <img src="@/assets/img/qywh1.png" class="img1" alt="" />
          <div class="img-bottom">
            <img src="@/assets/img/qywh2.png" alt="" />
            <img src="@/assets/img/qywh3.png" alt="" />
          </div>
        </div>
        <div class="qywh-value">
          <div>
            Mission: To be a warm company with happy employees, satisfied
            customers, and contribute to the society.
          </div>
          <div>
            Vision: To become a global company that people trust and love.
          </div>
          <div>
            Values: Quality first, Market-directed, Honesty and Trustworthy,
            Continuous innovation.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.home-page {
  padding: 100px 0 0 0;
  box-sizing: border-box;
  padding-bottom: 20px;

  .box1 {
    text-align: center;
    width: 100%;

    .slogan {
      font-size: 40px;
      color: @primary-color;
      font-weight: 600;
    }
    .company {
      width: 1200px;
      margin: 0 auto;

      img {
        width: 100%;
        height: 600px;
      }

      .introduction {
        flex: 1;
        font-weight: 600;
        color: white;
        margin-left: 40px;

        .company-name {
          font-size: 50px;
        }
        .company-address {
          font-size: 24px;
          margin-top: 50px;
        }
      }
    }
  }

  .box2 {
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

    .box2-value {
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

    .qywh {
      display: flex;
      align-items: flex-start;
      gap: 20px;

      .qywh-img {
        .img1 {
          width: 500px;
        }

        .img-bottom {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;

          img {
            width: 245px;
          }
        }
      }

      .qywh-value {
        font-size: 30px;

        div {
          margin-bottom: 20px;
        }
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

    .customer {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 30px;

      img {
        width: 100%;
        height: 100px;
      }
    }

    .recognition {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      img {
        width: 100%;
        // height: 100px;
      }
    }

    .profile {
      border-top: 2px solid #e3e4e5;
      padding-top: 20px;

      .profile-item {
        display: grid;
        grid-template-columns: 20% 80%;
        font-size: 20px;
        margin-bottom: 20px;

        .profile-item-left {
          border-bottom: 4px solid @primary-color;
          font-weight: 600;
        }
        .profile-item-right {
          padding-bottom: 20px;
          border-bottom: 2px solid #e3e4e5;
        }
      }
    }
  }
}
</style>

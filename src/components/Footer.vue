<template>
  <div class="footer">
    <div class="logo-box">
      <img
        alt="安徽壹鑫"
        class="yixin-logo"
        src="@/assets/img/logo.png"
        height="50"
      />
      <span class="name">Yixon</span>
    </div>
    <div class="info-box">
      <div class="info-item">
        <div class="info-tab">address</div>
        <div>
          Mu Towm Industrial Park, Muguashan Road, Qingyang county,<br />
          Chizhou,Anhui,242800,China
        </div>
      </div>
      <div class="info-item">
        <div class="info-tab">Contact Us</div>
        <div>0566-258966</div>
        <div>+86 18588223336</div>
        <div>alan@yixon-casting.com</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.footer {
  height: 130px;
  background-color: @primary-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;

  .logo-box {
    display: flex;
    align-items: center;
    .yixin-logo {
      margin-right: 10px;
      height: 80px;
    }
    .name {
      color: #fff;
      font-size: 30px;
      font-weight: 600;
    }
  }

  .info-box {
    display: flex;
    align-items: flex-start;
    gap: 50px;

    .info-item {
      color: #fff;
      font-size: 14px;

      .info-tab {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
      }
    }
  }
}
</style>

<template>
  <h1>This is the register page</h1>
  <div class="register">

    <div class="corp-reg">
      <h2>Đăng ký doanh nghiệp để tạo NFT cho chứng chỉ</h2>
      <label for="cname">Tên doanh nghiệp: </label>
      <input type="text" id="cname">

      <label for="sector">Ngành nghề/ lĩnh vực hoạt động: </label>
      <input type="text" name="sector">

      <label for="addr">Địa chỉ công ty: </label>
      <input type="text" name="addr">

      <label for="email">Email: </label>
      <input type="email" name="email">

      <label for="tel">Số điện thoại: </label>
      <input type="tel" name="tel">

      <label for="web">Trang web công ty: </label>
      <input type="text" name="web">
    </div>
    <div class="per-reg">
      <h2>Đăng ký người đại diện cho doanh nghiệp để tạo chứng chỉ:</h2>
      <label for="usr">Tên đăng nhập: </label>
      <input type="text" name="usr">

      <label for="pass">Mật khẩu: </label>
      <input type="password" name="pass">

      <label for="pos">Chức vụ: </label>
      <input type="text" name="pos">

      <label for="p-tel">Số điện thoại: </label>
      <input type="tel" name="p-tel">

      <label for="p-email">Email: </label>
      <input type="email" name="p-email">

    </div>
  </div>
  <a>Submit</a>
</template>

<style scoped>
  .register {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  }
  label, .submit{
    display: block;
  }
</style>
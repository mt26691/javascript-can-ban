 var form = document.getElementById("frmDemo");
 form.onsubmit = function() {
     var txtName = document.getElementById("txtName");
     var txtPassword = document.getElementById("txtPassword");
     var txtRePassword = document.getElementById("txtRePassword");
     var dllGender = document.getElementById("dllGender");
     var errorSummary = document.getElementById("errorSummary");

     var errorCount = 0;
     if (txtName.value === "" || txtPassword.value === "" || txtRePassword.value === "" || dllGender.value === "") {
         errorSummary.innerHTML = "Hãy nhập giá trị cho tất cả các trường";
         errorCount++;
     }
     if (txtRePassword.value !== txtPassword.value) {
         if (errorCount === 0) {
             errorSummary.innerHTML = "Mật khẩu và mật khẩu lặp lại không đúng";
         } else {
             errorSummary.innerHTML += "<br/>Mật khẩu và mật khẩu lặp lại không đúng";
         }
         errorCount++;
     }
     if (errorCount === 0) {
         return true;
     } else {
         return false;
     }

 };
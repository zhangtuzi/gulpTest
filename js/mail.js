$(function () {

  //下一步按钮
  $("#next").click(function () {
    if(!$(this).hasClass("disableNext")){
      window.location.href='mailZhuce2.html';
    }
  });

//选择是否同意协议
  var isChecked = false;
  $("#checkedCon").click(function () {
    if(isChecked){
      $(".checked").hide();
      $("#next").addClass("disableNext");
      isChecked=false;
    }
    else {
      $(".checked").show();
      $("#next").removeClass("disableNext");
      isChecked=true;
    }
  });

  //密码限制只能输入数字并且判断两次密码是否一致
  var thisOldValue='';//输入前的值
  var thisNewValue='';//输入后的值
  var password='';//第一次输入的密码
  var passwordAgain='';//重复输入的密码
  $('.password,.passwordAgain').keydown(function(e){
    thisOldValue = $(this).val();
  }).keyup(function(e){
    thisNewValue = $(this).val();
    if(parseInt(thisNewValue) != thisNewValue){
      $(this).val(thisOldValue);
    }
    //判断两次密码是否一致
    password=$('.password').val();
    passwordAgain=$('.passwordAgain').val();
    if(password == passwordAgain &&passwordAgain.length == 6){
      $('.passwordError span').hide();
    }else{
      $('.passwordError span').show();
    }
  })

  $('.zhuceMa').blur(function(){
    $('#confirmNext').removeClass('disableNext');
  })

  //邮箱注册码重新发送按钮
  $('.mailZcmAgain').click(function(){
    var _this=$(this);
    //判断按钮是否已经被点击
    if(!$(this).hasClass('disableNext')){
      $(this).addClass('disableNext')
      var mailZcmAgainI=60;
      _this.text(mailZcmAgainI+'s');
      var mailZcmAgainSet=setInterval(function(){
        mailZcmAgainI--;
        if(mailZcmAgainI>0){
          _this.text(mailZcmAgainI+'s');
        }else{
          clearInterval(mailZcmAgainSet);
          _this.text('重新发送');
          _this.removeClass('disableNext');
        }
      },1000)
    }
  })

})

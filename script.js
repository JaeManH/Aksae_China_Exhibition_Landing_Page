// 문의하기 폼 제출 이벤트 리스너
document
  .getElementById("right-contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // 폼의 기본 제출 동작을 방지

    // 폼 데이터를 가져옴
    var formData = {
      company: this.company.value,
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      message: this.message.value,
    };

    // 여기서 AJAX 요청을 작성할 수 있습니다.
    // 예를 들어, 서버에 formData를 JSON 형식으로 보내는 코드를 추가할 수 있습니다.
    console.log("문의하기 데이터:", formData);

    // 문의가 성공적으로 제출되었다는 메시지를 사용자에게 보여주는 코드를 추가할 수 있습니다.
    alert("문의가 성공적으로 제출되었습니다!");

    // 폼을 초기화합니다.
    this.reset();
  });

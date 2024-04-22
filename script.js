// 문의하기 폼 제출 이벤트 리스너
document
  .getElementById("right-contact-form")
  .addEventListener("submit", function (e) {
    //원래 기본적으로 페이지가 리로드 되거나 해야하지만 이걸 넣으면 아래 자바스크립트 코드로만 동작을 하게 된다.
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

    if (!formData.company.toString().trim()) {
      alert("회사명을 입력해주세요.");
    } else if (!formData.name.toString().trim()) {
      alert("이름을 입력해주세요.");
    } else if (!formData.email.toString().trim()) {
      alert("이메일을 입력해주세요.");
    } else if (!formData.phone.toString().trim()) {
      alert("전화번호를 입력해주세요.");
    }

    const instance = axios.create({
      baseURL: "http://121.166.23.90:8081",
      timeout: 1000,
      headers: {
        "X-Custom-Header": "foobar",
      },
    });
    // console.log("문의하기 데이터:", formData);
    // const axios = require("axios");
    // axios.defaults.baseURL = "http://192.168.0.3:8080";

    instance
      .post("/send", formData)
      .then((res) => {
        this.reset();
        alert("문의가 성공적으로 제출되었습니다!");
        // console.log(res);
      })
      .catch((err) => {
        // console.error(err);
      });

    // instance
    //   .post("/send", formData)
    //   .then(function (response) {
    //     console.log(response);
    //     alert("문의가 성공적으로 제출되었습니다!");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // 문의가 성공적으로 제출되었다는 메시지를 사용자에게 보여주는 코드를 추가할 수 있습니다.

    // 폼을 초기화합니다.
  });

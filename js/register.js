// 사전등록 폼: 입력값을 확인하고 데모 완료 화면 표시
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ticketForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', event => {
    // 실제 서버 전송 대신 브라우저 안에서 과제용 완료 상태를 보여줌
    event.preventDefault();

    if (!form.reportValidity()) return;

    form.hidden = true;
    successMessage.hidden = false;
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

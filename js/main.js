// 메인 페이지 인터랙션: 모바일 메뉴와 일정/프로그램 팝업
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  // 모바일 화면에서 메뉴 열기/닫기
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.textContent = isOpen ? '×' : '☰';
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
      });
    });
  }

  const modal = document.getElementById('infoModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');

  // 과제용 샘플 공연 일정 데이터
  const scheduleHTML = `
    <div class="modal-day">DAY 01 · 06.19 SATURDAY</div>
    <div class="modal-row"><time>14:00</time><b>GATE OPEN</b><small>입장 및 웰컴 프로그램</small></div>
    <div class="modal-row"><time>16:00</time><b>MOON PHASE</b><small>MAIN STAGE · Indie / Alternative</small></div>
    <div class="modal-row"><time>18:00</time><b>NEON DRIVE</b><small>MAIN STAGE · Electronic / Synth Pop</small></div>
    <div class="modal-row"><time>20:30</time><b>AFTER GLOW DJ</b><small>WAVE STAGE · DJ Set</small></div>
    <div class="modal-day">DAY 02 · 06.20 SUNDAY</div>
    <div class="modal-row"><time>14:00</time><b>GATE OPEN</b><small>입장 및 브랜드 부스 운영</small></div>
    <div class="modal-row"><time>16:30</time><b>THE FLOW</b><small>MAIN STAGE · Hip-hop / R&amp;B</small></div>
    <div class="modal-row"><time>18:30</time><b>COLOR SIGNAL</b><small>WAVE STAGE · Dance / Pop</small></div>
    <div class="modal-row"><time>20:30</time><b>WAVE FINALE</b><small>MAIN STAGE · Closing Performance</small></div>`;

  const programHTML = `
    <div class="modal-day">LIVE PERFORMANCE</div>
    <div class="modal-row"><b>NEON DRIVE</b><small>Electronic · Synth Pop</small><small>DAY 01</small></div>
    <div class="modal-row"><b>MOON PHASE</b><small>Indie · Alternative</small><small>DAY 01</small></div>
    <div class="modal-row"><b>THE FLOW</b><small>Hip-hop · R&amp;B</small><small>DAY 02</small></div>
    <div class="modal-row"><b>COLOR SIGNAL</b><small>Dance · Pop</small><small>DAY 02</small></div>
    <div class="modal-day">FESTIVAL EXPERIENCE</div>
    <div class="modal-row"><b>WAVE MARKET</b><small>뮤직 굿즈 및 로컬 브랜드 마켓</small><small>ALL DAY</small></div>
    <div class="modal-row"><b>VINYL LOUNGE</b><small>바이닐 감상 및 포토존</small><small>ALL DAY</small></div>
    <div class="modal-row"><b>FOOD ZONE</b><small>푸드트럭 및 음료 부스</small><small>ALL DAY</small></div>`;

  // 버튼의 data-modal 값에 따라 서로 다른 팝업 내용 표시
  document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', () => {
      const type = button.dataset.modal;
      if (type === 'schedule') {
        modalTitle.textContent = 'FULL TIMETABLE';
        modalContent.innerHTML = scheduleHTML;
      } else {
        modalTitle.textContent = 'FULL PROGRAM';
        modalContent.innerHTML = programHTML;
      }
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  // 닫기 버튼, 배경 클릭, ESC 키로 팝업 닫기
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });
});

const tabs = document.querySelectorAll("#location .tab");
const pannels = document.querySelectorAll("#location .pannel");
let tabArr = [];

const mapMaker = function (address, name) {
  const mapContainer = document.querySelector("#map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
      scrollwheel: false,
    };

  // 지도를 생성합니다
  const map = new kakao.maps.Map(mapContainer, mapOption);

  // 주소-좌표 변환 객체를 생성합니다
  const geocoder = new kakao.maps.services.Geocoder();

  // 주소로 좌표를 검색합니다
  geocoder.addressSearch(`${address}`, function (result, status) {
    // 정상적으로 검색이 완료됐으면
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 커스텀 오버레이에 표시할 내용입니다
      // HTML 문자열 또는 Dom Element 입니다
      var content = `<div class="overlay"><span>${name}</span></div>`;

      // 커스텀 오버레이가 표시될 위치입니다
      var position = new kakao.maps.LatLng(result[0].y, result[0].x);
      // 커스텀 오버레이를 생성합니다
      var customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
        xAnchor: 0.5,
        yAnchor: 1.3,
      });
      // 커스텀 오버레이를 지도에 표시합니다
      customOverlay.setMap(map);
      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      map.setCenter(coords);
    }
  });
};

mapMaker("서울시 중구 소월로 10 단암빌딩", "풍림무약 본사");
tabs.forEach((item, index1) => {
  tabArr = [...tabs];
  item.addEventListener("click", function (e) {
    window.scroll({ top: 220, behavior: "smooth" });
    e.preventDefault();
    tabArr.forEach((item2) => {
      item2.classList.remove("on");
    });
    item.classList.add("on");
    const dataAddress = item.dataset.address;
    const dataName = item.dataset.name;
    mapMaker(dataAddress, dataName);
    pannels.forEach((item3, index2) => {
      if (index1 === index2) {
        item3.classList.add("on");
      } else {
        item3.classList.remove("on");
      }
    });
  });
});

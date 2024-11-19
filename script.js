// script.js
// Trong trường hợp này, chúng ta không cần nhiều JavaScript,
// vì hiệu ứng di chuyển đã được xử lý bằng CSS.


document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector(".text-container"); // Chọn phần tử chứa chữ
    const numOfSnowflakes = 50; // Số lượng hạt tuyết

    for (let i = 0; i < numOfSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "&#10052;"; // Biểu tượng tuyết (ngôi sao tuyết)

        // Đặt vị trí ngẫu nhiên cho mỗi hạt tuyết
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`; // Thời gian rơi ngẫu nhiên
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Thời gian trễ ngẫu nhiên

        snowContainer.appendChild(snowflake);
    }
});

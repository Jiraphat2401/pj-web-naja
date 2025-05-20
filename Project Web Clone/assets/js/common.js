function changeImage(src) {
      document.getElementById("main_key_visual").src = src;
    }

function changeImage(src) {
  const img = document.getElementById("main_key_visual");

  // เริ่มจาง
  img.classList.remove("fade-in"); // เผื่อมีอยู่
  img.classList.add("fade-out");

  // หลังจาก fade-out เสร็จ
  setTimeout(() => {
    img.src = src;

    img.onload = () => {
      // ลบ fade-out แล้วค่อย ๆ ใส่ fade-in
      img.classList.remove("fade-out");

      // ใช้ setTimeout เพื่อให้เบราว์เซอร์ประมวลผลก่อน
      setTimeout(() => {
        img.classList.add("fade-in");
      }, 50); // รอ 1 frame ประมาณ 50ms
    };
  }, 500); // ตรงกับระยะเวลาการ fade-out
}

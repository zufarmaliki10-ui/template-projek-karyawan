const toggler = document.querySelector(".toggler-btn");

toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
  document.querySelector(".main").classList.toggle("expanded");
});

function tanggalJam() {
  const sekarang = new Date();

  const tanggal = sekarang.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jam = String(sekarang.getHours()).padStart(2, "0");
  const menit = String(sekarang.getMinutes()).padStart(2, "0");
  const detik = String(sekarang.getSeconds()).padStart(2, "0");

  document.getElementById("tanggal").textContent = tanggal;
  document.getElementById("jam").textContent = `${jam}:${menit}:${detik}`;
}

tanggalJam();
setInterval(tanggalJam, 1000);

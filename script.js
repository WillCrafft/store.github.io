// Muat suara klik
const clickSound = new Audio("click.mp3");  
const buySound = new Audio("buy.mp3");  

function navigateTo(page) {
    clickSound.play(); // 🔊 Putar suara saat pindah layar

    // Sembunyikan semua layar
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });

    // Tampilkan layar tujuan
    document.getElementById(page).classList.remove('hidden');
}

// Tambahkan event listener untuk tombol "Pesan Sekarang"
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener("click", () => {
        buySound.play(); // 🔊 Putar suara saat beli
    });
});

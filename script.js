// Data kota dan kecamatan berdasarkan provinsi
const dataWilayah = {
    "Jawa Timur": {
      "Surabaya": ["Sukolilo", "Mulyorejo"],
      "Malang": ["Klojen", "Lowokwaru"]
    },
    "Jawa Barat": {
      "Bekasi": ["Bekasi Timur", "Bekasi Barat"],
      "Bandung": ["Coblong", "Lengkong"]
    }
  };
  
  // Fungsi untuk memperbarui kota berdasarkan provinsi
  function updateKota() {
    const provinsi = document.getElementById("provinsi").value;
    const kotaSelect = document.getElementById("kota");
    const kecamatanSelect = document.getElementById("kecamatan");
  
    // Kosongkan dropdown kota dan kecamatan
    kotaSelect.innerHTML = '<option value="">Pilih Kota</option>';
    kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
  
    if (provinsi && dataWilayah[provinsi]) {
      const kotaList = Object.keys(dataWilayah[provinsi]);
      kotaList.forEach(kota => {
        const option = document.createElement("option");
        option.value = kota;
        option.textContent = kota;
        kotaSelect.appendChild(option);
      });
    }
  }
  
  // Fungsi untuk memperbarui kecamatan berdasarkan kota
  function updateKecamatan() {
    const provinsi = document.getElementById("provinsi").value;
    const kota = document.getElementById("kota").value;
    const kecamatanSelect = document.getElementById("kecamatan");
  
    // Kosongkan dropdown kecamatan
    kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
  
    if (provinsi && kota && dataWilayah[provinsi][kota]) {
      const kecamatanList = dataWilayah[provinsi][kota];
      kecamatanList.forEach(kecamatan => {
        const option = document.createElement("option");
        option.value = kecamatan;
        option.textContent = kecamatan;
        kecamatanSelect.appendChild(option);
      });
    }
  }
  
  // Fungsi untuk mengisi kode pos secara otomatis
  function updateKodePos() {
    const kota = document.getElementById("kota").value;
    const kecamatan = document.getElementById("kecamatan").value;
    const kodePosInput = document.getElementById("kodePos");
  
    const kodePosData = {
      "Sukolilo": "60111",
      "Mulyorejo": "60114",
      "Klojen": "65111",
      "Lowokwaru": "65141",
      "Bekasi Timur": "17111",
      "Bekasi Barat": "17112",
      "Coblong": "40132",
      "Lengkong": "40261"
    };
  
    kodePosInput.value = kodePosData[kecamatan] || "";
  }
  
  // Event listener untuk dropdown
  document.getElementById("provinsi").addEventListener("change", updateKota);
  document.getElementById("kota").addEventListener("change", updateKecamatan);
  document.getElementById("kecamatan").addEventListener("change", updateKodePos);
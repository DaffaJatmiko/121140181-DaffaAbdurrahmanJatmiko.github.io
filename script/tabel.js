window.addEventListener('load', () => {
  const nama = sessionStorage.getItem('NAMA');
  const nim = sessionStorage.getItem('NIM');
  const prodi = sessionStorage.getItem('PRODI');
  const email = sessionStorage.getItem('EMAIL');
  const password = sessionStorage.getItem('PASSWORD');
  const jenisKelamin = sessionStorage.getItem('JENISKELAMIN');
  const tanggalLahir = sessionStorage.getItem('TANGGALLAHIR');
  const alamat = sessionStorage.getItem('ALAMAT');

  document.getElementById('result-nama').innerHTML = nama;
  document.getElementById('result-nim').innerHTML = nim;
  document.getElementById('result-prodi').innerHTML = prodi;
  document.getElementById('result-email').innerHTML = email;
  document.getElementById('result-password').innerHTML = password;
  document.getElementById('result-jenisKelamin').innerHTML = jenisKelamin;
  document.getElementById('result-tanggalLahir').innerHTML = tanggalLahir;
  document.getElementById('result-alamat').innerHTML = alamat;
});

function handleSubmit() {
  const nama = document.getElementById('nama').value;
  const nim = document.getElementById('nim').value;
  const prodi = document.getElementById('prodi').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const jenisKelamin = document.getElementById('jenisKelamin').value;
  const tanggalLahir = document.getElementById('tanggalLahir').value;
  const alamat = document.getElementById('alamat').value;

  sessionStorage.setItem('NAMA', nama);
  sessionStorage.setItem('NIM', nim);
  sessionStorage.setItem('PRODI', prodi);
  sessionStorage.setItem('EMAIL', email);
  sessionStorage.setItem('PASSWORD', password);
  sessionStorage.setItem('JENISKELAMIN', jenisKelamin);
  sessionStorage.setItem('TANGGALLAHIR', tanggalLahir);
  sessionStorage.setItem('ALAMAT', alamat);

  return;
}

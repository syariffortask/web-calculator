 function faktorial() {
    const n = parseInt(document.getElementById("factN").value);
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    document.getElementById("hasilFaktorial").innerText = `Hasil: ${result}`;
  }

  function kombinasi() {
    const n = parseInt(document.getElementById("n").value);
    const r = parseInt(document.getElementById("r").value);
    const fact = x => x <= 1 ? 1 : x * fact(x - 1);
    const hasil = fact(n) / (fact(r) * fact(n - r));
    document.getElementById("hasilKombinasi").innerText = `C(${n}, ${r}) = ${hasil}`;
  }

  function fpbKpk() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    const fpb = (x, y) => y === 0 ? x : fpb(y, x % y);
    const hasilFPB = fpb(a, b);
    const hasilKPK = Math.abs(a * b) / hasilFPB;
    document.getElementById("hasilFPBKPK").innerText = `FPB = ${hasilFPB}, KPK = ${hasilKPK}`;
  }

  function deretAritmatika() {
    const a = parseInt(document.getElementById("a1").value);
    const d = parseInt(document.getElementById("d").value);
    const n = parseInt(document.getElementById("nArit").value);
    const Un = a + (n - 1) * d;
    const Sn = (n / 2) * (2 * a + (n - 1) * d);
    document.getElementById("hasilDeret").innerText = `Un = ${Un}, Sn = ${Sn}`;
  }

  function aljabarBoolean() {
    try {
      const exp = document.getElementById("boolExp").value;
      const hasil = eval(exp);
      document.getElementById("hasilBoolean").innerText = `Hasil: ${hasil}`;
    } catch {
      document.getElementById("hasilBoolean").innerText = "Ekspresi tidak valid";
    }
  }

  function cekRelasi() {
    const relasiStr = document.getElementById("relasiInput").value;
    const himpStr = document.getElementById("himpunanInput").value;
    const himp = himpStr.split(',').map(x => x.trim());
    const relasi = relasiStr.split(';').map(pair => pair.trim().split(','));

    const isReflektif = himp.every(x => relasi.some(([a, b]) => a === x && b === x));
    const isSimetris = relasi.every(([a, b]) => relasi.some(([c, d]) => c === b && d === a));
    const isTransitif = relasi.every(([a, b]) => {
      return relasi.filter(([x, y]) => x === b).every(([_, c]) =>
        relasi.some(([d, e]) => d === a && e === c));
    });

    document.getElementById("hasilRelasi").innerText =
      `Reflektif: ${isReflektif}, Simetris: ${isSimetris}, Transitif: ${isTransitif}`;
  }

  function tambahMatriks() {
    const m1 = [parseInt(m1a.value), parseInt(m1b.value), parseInt(m1c.value), parseInt(m1d.value)];
    const m2 = [parseInt(m2a.value), parseInt(m2b.value), parseInt(m2c.value), parseInt(m2d.value)];
    const hasil = m1.map((val, i) => val + m2[i]);
    document.getElementById("hasilMatriks").innerText = 
      `[${hasil[0]} ${hasil[1]}]\n[${hasil[2]} ${hasil[3]}]`;
  }
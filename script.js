async function checkPassword() {
    var password = document.getElementById('password').value;
    var encoder = new TextEncoder();
    var data = encoder.encode(password);
    var hash = await window.crypto.subtle.digest('SHA-256', data);
    var hashedPassword = Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join(''); // Verschlüsselt das Passwort

    if(hashedPassword === 'a605e170bbdf78ea5e696cb3e32a5beb279a3841e7701012567b52fe0ea4398a') { // 'WhiteFace' verschlüsselt
        sessionStorage.setItem('authenticated', 'true');
        window.location.href = 'beta.html';
    } else {
        alert('Zugriff auf Beta-Bereich abgelehnt!');
    }
}

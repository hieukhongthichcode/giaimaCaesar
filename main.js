// Mã hóa Caesar
function encrypt() {
    let text = document.getElementById('plaintext').value;
    let shift = parseInt(document.getElementById('shift').value);
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/)) {
            let code = text.charCodeAt(i);
            let newChar = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            result += newChar;
        } else if (char.match(/[A-Z]/)) {
            let code = text.charCodeAt(i);
            let newChar = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            result += newChar;
        } else {
            result += char;
        }
    }

    document.getElementById('output').innerText = result;
}

// Giải mã Caesar
function decrypt() {
    let text = document.getElementById('plaintext').value;
    let shift = parseInt(document.getElementById('shift').value);
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/)) {
            let code = text.charCodeAt(i);
            let newChar = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            result += newChar;
        } else if (char.match(/[A-Z]/)) {
            let code = text.charCodeAt(i);
            let newChar = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            result += newChar;
        } else {
            result += char;
        }
    }

    document.getElementById('output').innerText = result;
}

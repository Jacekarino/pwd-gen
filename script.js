document.addEventListener('DOMContentLoaded', () => {
    const passwordDisplay = document.getElementById('password-display');
    const copyBtn = document.getElementById('copy-btn');
    const generateBtn = document.getElementById('generate-btn');
    const lengthSlider = document.getElementById('length-slider');
    const lengthValue = document.getElementById('length-value');
    const toast = document.getElementById('toast');

    const chkUpper = document.getElementById('chk-upper');
    const chkLower = document.getElementById('chk-lower');
    const chkNumbers = document.getElementById('chk-numbers');
    const chkSymbols = document.getElementById('chk-symbols');
    const chkNoRepeat = document.getElementById('chk-no-repeat');
    const symbolBlacklist = document.getElementById('symbol-blacklist');

    const settingsToggle = document.getElementById('settings-toggle');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettings = document.getElementById('close-settings');

    const historyToggle = document.getElementById('history-toggle');
    const historyModal = document.getElementById('history-modal');
    const closeHistory = document.getElementById('close-history');

    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    const NUMBERS = "0123456789";
    const SYMBOLS = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let passwordHistory = JSON.parse(localStorage.getItem('pwdHistory')) || [];

    updateHistoryUI();
    passwordDisplay.classList.add('placeholder');

    settingsToggle.addEventListener('click', () => {
        settingsModal.classList.add('active');
    });

    closeSettings.addEventListener('click', () => {
        settingsModal.classList.remove('active');
    });

    historyToggle.addEventListener('click', () => {
        historyModal.classList.add('active');
    });

    closeHistory.addEventListener('click', () => {
        historyModal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            settingsModal.classList.remove('active');
        }
        if (e.target === historyModal) {
            historyModal.classList.remove('active');
        }
    });

    lengthSlider.addEventListener('input', (e) => {
        lengthValue.textContent = e.target.value;
    });

    generateBtn.addEventListener('click', () => {
        const length = +lengthSlider.value;
        const hasUpper = chkUpper.checked;
        const hasLower = chkLower.checked;
        const hasNumbers = chkNumbers.checked;
        const hasSymbols = chkSymbols.checked;
        const noRepeat = chkNoRepeat.checked;

        if (!hasUpper && !hasLower && !hasNumbers && !hasSymbols) {
            showToast('<i class="fa-solid fa-triangle-exclamation"></i> Please select at least one character type!', true);
            return;
        }

        const blacklistChars = symbolBlacklist.value.split('');
        const filterOut = str => str.split('').filter(c => !blacklistChars.includes(c)).join('');

        let cu = filterOut(UPPERCASE);
        let cl = filterOut(LOWERCASE);
        let cn = filterOut(NUMBERS);
        let cs = filterOut(SYMBOLS);

        let charset = "";
        if (hasUpper) charset += cu;
        if (hasLower) charset += cl;
        if (hasNumbers) charset += cn;
        if (hasSymbols) charset += cs;

        let password = "";
        let prevChar = "";

        for (let i = 0; i < length; i++) {
            let randomChar = charset[Math.floor(Math.random() * charset.length)];

            if (noRepeat) {
                let attempts = 0;
                while (randomChar === prevChar && attempts < 20) {
                    randomChar = charset[Math.floor(Math.random() * charset.length)];
                    attempts++;
                }
            }

            password += randomChar;
            prevChar = randomChar;
        }

        password = ensureRequirements(password, length, hasUpper && cu.length > 0, hasLower && cl.length > 0, hasNumbers && cn.length > 0, hasSymbols && cs.length > 0, noRepeat, cu, cl, cn, cs);

        displayPassword(password);
        addToHistory(password);
    });

    function ensureRequirements(password, length, hasUpper, hasLower, hasNumbers, hasSymbols, noRepeat, cu, cl, cn, cs) {
        let requirements = [];
        if (hasUpper) requirements.push(cu[Math.floor(Math.random() * cu.length)]);
        if (hasLower) requirements.push(cl[Math.floor(Math.random() * cl.length)]);
        if (hasNumbers) requirements.push(cn[Math.floor(Math.random() * cn.length)]);
        if (hasSymbols) requirements.push(cs[Math.floor(Math.random() * cs.length)]);

        if (length < requirements.length) return password;

        let arr = password.split('');

        for (let i = 0; i < requirements.length; i++) {
            arr[i] = requirements[i];
        }

        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        if (noRepeat) {
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] === arr[i - 1]) {
                    for (let j = i + 1; j < arr.length; j++) {
                        if (arr[j] !== arr[i] && (j === arr.length - 1 || arr[j] !== arr[j + 1]) && (i === 1 || arr[j] !== arr[i - 2])) {
                            [arr[i], arr[j]] = [arr[j], arr[i]];
                            break;
                        }
                    }
                }
            }
        }

        return arr.join('');
    }

    function displayPassword(password) {
        passwordDisplay.textContent = password;
        passwordDisplay.classList.remove('placeholder');

        passwordDisplay.style.opacity = '0.5';
        passwordDisplay.style.transform = 'scale(0.98)';
        setTimeout(() => {
            passwordDisplay.style.opacity = '1';
            passwordDisplay.style.transform = 'scale(1)';
            passwordDisplay.style.transition = 'all 0.2s ease';
        }, 50);
    }

    copyBtn.addEventListener('click', () => {
        const password = passwordDisplay.textContent;
        if (!password || passwordDisplay.classList.contains('placeholder')) return;

        copyToClipboard(password);
    });

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('<i class="fa-solid fa-circle-check"></i> Password copied to clipboard!');

            const icon = copyBtn.querySelector('i');
            icon.className = 'fa-solid fa-check';
            icon.style.color = 'var(--accent)';

            setTimeout(() => {
                icon.className = 'fa-regular fa-copy';
                icon.style.color = '';
            }, 2000);
        }).catch(() => {
            showToast('<i class="fa-solid fa-triangle-exclamation"></i> Failed to copy!', true);
        });
    }

    function addToHistory(password) {
        if (passwordHistory.length > 0 && passwordHistory[0] === password) return;

        passwordHistory.unshift(password);
        if (passwordHistory.length > 10) {
            passwordHistory.pop();
        }

        localStorage.setItem('pwdHistory', JSON.stringify(passwordHistory));
        updateHistoryUI();
    }

    function updateHistoryUI() {
        historyList.innerHTML = '';

        if (passwordHistory.length === 0) {
            const emptyState = document.createElement('li');
            emptyState.style.color = 'var(--text-muted)';
            emptyState.style.textAlign = 'center';
            emptyState.style.padding = '1rem 0';
            emptyState.style.fontSize = '0.9rem';
            emptyState.textContent = 'No passwords generated yet.';
            historyList.appendChild(emptyState);
            return;
        }

        passwordHistory.forEach((pwd) => {
            const li = document.createElement('li');
            li.className = 'history-item';

            const span = document.createElement('span');
            span.className = 'history-pw';
            span.textContent = pwd;

            const btn = document.createElement('button');
            btn.className = 'history-copy';
            btn.title = 'Copy';
            btn.innerHTML = '<i class="fa-regular fa-copy"></i>';

            btn.addEventListener('click', (e) => {
                copyToClipboard(pwd);
                const i = btn.querySelector('i');
                i.className = 'fa-solid fa-check';
                i.style.color = 'var(--accent)';
                setTimeout(() => {
                    i.className = 'fa-regular fa-copy';
                    i.style.color = '';
                }, 2000);
            });

            li.appendChild(span);
            li.appendChild(btn);
            historyList.appendChild(li);
        });
    }

    clearHistoryBtn.addEventListener('click', () => {
        if (passwordHistory.length === 0) return;
        passwordHistory = [];
        localStorage.removeItem('pwdHistory');
        updateHistoryUI();
        showToast('<i class="fa-solid fa-trash-can"></i> History cleared');
    });

    let toastTimeout;
    function showToast(htmlContent, isError = false) {
        toast.innerHTML = htmlContent;
        toast.style.background = isError ? '#ef4444' : 'var(--accent)';
        toast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
});

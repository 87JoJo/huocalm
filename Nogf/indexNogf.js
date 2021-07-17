(() => {
    let form = document.querySelector('#myForm');
    // input
    let inputName = document.querySelector('#name');
    let inputEmail = document.querySelector('#email');
    let inputPhone = document.querySelector('#phone');
    // 錯誤訊息
    let message = document.querySelectorAll('form .message');
    // 按鈕
    let confirm = document.querySelector('.submit');
    // 往上
    let jump = document.querySelector('.jump');
    let verifiedStatus = {
        nameResult: false,
        emailResult: false,
        phoneResult: false
    }
    let home, about, service, example, contact;
    // allmenu
    let menu = Array.from(document.querySelectorAll('.header-navigation li'));
    // 對各menu做點擊處理
    let a = menu.map((item) => {
        return (menuList = item)
    });
    console.log(a);
    a.map((itemm) => {
        return itemm.addEventListener('click', switchHandler)
    })

    [home, about, service, example, contact] = a;

    // 名字判斷
    function inputNameHandler() {
        // 除了數字以外
        let match = new RegExp(/\D/g);
        let data = this.value.toString();
        console.log(match.test(data));
        match.lastIndex = 0;
        // 判斷是否開頭為一個以上任意數字英文而後可為一個以上'-(一個以上任意英文數字)'或'.(一個以上任意英文數字)'
        // (-,.不可連續出現)，而後中間需加上@，@後可為一個以上任意英文數字，而後結尾須為一個'.'或'-'組合一個以上任意英文數字
        if (match.test(data)) {
            message[0].style.display = "none";
            this.style.border = "solid 0.1rem rgba(23, 185, 120 ,0.5)";
            this.style.outline = "0px";
            verifiedStatus.nameResult = true;
        } else {
            message[0].style.display = 'inline-block';
            this.style.outline = "1px solid rgba(255,0,0,0.9)";
            this.style.border = "0px";
            verifiedStatus.nameResult = false;
        }
    }

    // email判斷
    function inputEmailHandler() {
        // emailRule = /^\w+((-\w+)|(\.\w+))+\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        // 利用正規表達式，去篩選符合條件的資料
        let match = new RegExp(/^\w+((-\w+)|(.\w+))+\@(\w+)+((\.|\-)(\w+))+$/g);
        let data = this.value.toString();
        console.log(match.test(data));
        match.lastIndex = 0;
        // 判斷是否開頭為一個以上任意數字英文而後可為一個以上'-(一個以上任意英文數字)'或'.(一個以上任意英文數字)'
        // (-,.不可連續出現)，而後中間需加上@，@後可為一個以上任意英文數字，而後結尾須為一個'.'或'-'組合一個以上任意英文數字
        if (match.test(data)) {
            verifiedStatus.emailResult = true;
            message[1].style.display = "none";
            inputEmail.style.border = 'solid 0.1rem rgba(23, 185, 120 ,0.5)';
            inputEmail.style.outline = "0px"
        } else {
            verifiedStatus.emailResult = false;
            message[1].style.display = 'inline-block';
            inputEmail.style.outline = "1px solid rgba(255,0,0,0.9)";
            inputEmail.style.border = "0px";
        }
    }
    // 電話判斷
    function inputPhoneHandler() {
        // 是否為數字
        let match = new RegExp(/(?=\d)/g);
        let data = this.value.toString();
        match.lastIndex = 0;

        // 判斷是否開頭為一個以上任意數字英文而後可為一個以上'-(一個以上任意英文數字)'或'.(一個以上任意英文數字)'
        // (-,.不可連續出現)，而後中間需加上@，@後可為一個以上任意英文數字，而後結尾須為一個'.'或'-'組合一個以上任意英文數字
        if (match.test(data)) {
            verifiedStatus.phoneResult = true;
            message[2].style.display = "none";
            this.style.border = 'solid 0.1rem rgba(23, 185, 120 ,0.5)';
            this.style.outline = "0px"
        } else {
            verifiedStatus.phoneResult = false;
            message[2].style.display = "inline-block";
            this.style.outline = "1px solid rgba(255,0,0,0.9)";
            this.style.border = "0px";
        }
    }
    // 送出是否格式都正確
    function confirmHandler(e) {
        phoneResult && nameResult && emailResult ? alert('送出成功') : alert('送出失敗，尚有資料不完整');
        e.preventDefault();
    }
    // 往上
    function jumpHandler() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    // 切換menu 
    function switchHandler() {
        a.map((item) => {
            item.classList.remove('active');
        })
        this.classList.add('active');
        window.scrollTo({
            top: this.value,
            behavior: "smooth"
        });
    }
    inputName.addEventListener('blur', inputNameHandler);
    inputEmail.addEventListener('blur', inputEmailHandler);
    inputPhone.addEventListener('blur', inputPhoneHandler);
    confirm.addEventListener('click', confirmHandler);
    jump.addEventListener('click', jumpHandler);
    console.log(window.scrollY);
})();
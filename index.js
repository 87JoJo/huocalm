(() => {
    // allCompanyGoal
    let companyGoal = Array.from(document.querySelectorAll('.about .goal i'));
    console.log(companyGoal);

    // 往上
    let jump = document.querySelector('.jump');
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
    // 滾動goal做動畫
    function goalHandler() {
        let scrollDistance = parseInt(this.scrollY);
        console.log((scrollDistance));

        if (scrollDistance >= 850) {
            companyGoal.map(item => {
                item.style.animationPlayState = "running";
            })
        } else {
            companyGoal.map(item => {
                item.style.animationPlayState = "";
            })
        }

    }
    window.addEventListener('scroll', goalHandler);
    jump.addEventListener('click', jumpHandler);
    console.log(window.scrollY);
})();
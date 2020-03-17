; (function () {
    'use strict';

    window.xinPopup = {
        boot,
    };

    let trigger, popup, mask, config;
    let defaultConfig = {
        xPosition: 'center',
        yPosition: 'center',
        on: 'click',
        keyToHide: 'Escape',
    };


    function boot(triggerSelector, popupSelector, custom) {
        trigger = document.querySelector(triggerSelector);
        popup = document.querySelector(popupSelector);

        config = Object.assign({}, defaultConfig, custom);


        initPopup();
        initMask();

        //popup触发器
        listenOpenPopup(config);

        //关于popup在什么情况下会关闭
        closePopup();

    }

    function initPopup() {
        popup.classList.add('xin-popup');
        popup.hidden = true;
    }

    function initMask() {
        mask = document.createElement('div');
        mask.classList.add('xin-mask');
        mask.hidden = true;
        document.body.appendChild(mask);
    }

    function listenOpenPopup(config) {
        trigger.addEventListener('click', () => {

            setVisibility(true);

            //任意定位popup的位置
            repositionPopup(config);
        })
    }

    function repositionPopup(config) {

        if (config.xPosition == 'center') {
            popup.style.left = window.innerWidth / 2 - popup.offsetWidth / 2 + 'px';
        }
        if (config.xPosition == 'left') {
            popup.style.left = 0 + 'px';

        }
        if (config.xPosition == 'right') {
            popup.style.right = 0 + 'px';
        }
        if (config.yPosition == 'center') {
            popup.style.top = window.innerHeight / 2 - popup.offsetHeight / 2 + 'px';
        }
        if (config.yPosition == 'top') {
            popup.style.top = 0 + 'px';
        }
        if (config.yPosition == 'bottom') {
            popup.style.bottom = window.innerHeight / 2 - popup.offsetHeight / 2 + 'px';
        }
    }

    function closePopup() {
        mask.addEventListener(config.on, () => {
            setVisibility(false);
        })

        document.addEventListener('keyup', e => {
            if (e.key === config.keyToHide) {
                setVisibility(false);
            }
        })
    }

    //设置popup及mask的可见性
    function setVisibility(visibility) {
        popup.hidden = mask.hidden = !visibility;
    }


})();
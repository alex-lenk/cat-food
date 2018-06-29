$(document).ready(function () {
// Исправление бага в IE на телефонах
// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle)
    }

    var listItemActive = 'list-item__active';
    var $listItem = $('.list-item');

    function resetMenu() {
        $listItem.removeClass(listItemActive);
    }

    $listItem.on('click', function (e) {
        var $link = $(this);

        e.preventDefault();
        resetMenu();

        $link.addClass(listItemActive);
    });
});

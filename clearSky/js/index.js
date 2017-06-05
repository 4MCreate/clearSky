"use strict";

$(document).ready(function() {
    $('#contents').fullpage({
        sectionsColor: ['#000', '#fff', '#000', '#fff', '#000', '#fff', '#000'],
        anchors: ['home', 'exhibitionIntro', 'mainPoints', 'exhibitionReceipt', 'prizewinIntro','campaignMovie','inquiry'],
        menu: '#menu'
    });
});
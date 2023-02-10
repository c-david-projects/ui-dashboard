$(document).ready(function() {

    $('.helpicon').on('click', function() {
        $('.truncate').addClass('truncated');
    });

    $('span').on('click', function() {
        $('.truncated').removeClass('truncated');
    });

    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    $('#sidebarCollapse').removeClass('hide-btn');

    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        if ($('#sidebar').hasClass('active')) {
            $('.mini-list').addClass('show-mini-list');
            $('#bars').addClass('rw-d-block');
            $('#close').addClass('rw-d-none');
            $("#sidebar").addClass('margins');
        } else {
            $('.mini-list').removeClass('show-mini-list');
            $('#bars').removeClass('rw-d-block');
            $('#close').removeClass('rw-d-none');
            $("#sidebar").removeClass('margins');
        }
    });

    $('.active-menu').on('click', function() {
        if ($('#sidebar').hasClass('active')) {
            $('#sidebar').toggleClass('active');
            $('.mini-list').removeClass('show-mini-list');
            $('.bars').addClass('rw-d-none-menu');
            $('#close').addClass('rw-d-none');
            $('#close').removeClass('rw-d-none');
            $('.bars').addClass('show-bars');
            $('.bars').addClass('hide-bars');
            $('#bars').removeClass('rw-d-block');
            $('#jimpi').removeClass('hide-logo');
            $('#homeSubmenu').addClass('show-not');
            $('#homeSubmenu').addClass('show-in');
        }
    });

});
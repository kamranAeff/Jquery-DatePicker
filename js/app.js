$(document).ready(function(){

    $('input[daterange]').daterangepicker({
        "minYear": 1990,
        "maxYear": 2030,
        "showWeekNumbers": true,
        "autoApply": true,
        locale: {
            firstDay: 1,
            format: 'DD.MM.YYYY'
            //, format: 'DD.MM.YYYY HH:mm'
        },
        ranges: {
            'Bugün': [moment(), moment()],
            'Dünən': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Son 7 gün': [moment().subtract(6, 'days'), moment()],
            'Son 30 gün': [moment().subtract(29, 'days'), moment()],
            'Bu ay': [moment().startOf('month'), moment().endOf('month')],
            'Keçən ay': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, function (start, end, label) {
        //$($(this)[0].element).text(start.format('DD.MM.YYYY') + ' - ' + end.format('DD.MM.YYYY HH:mm'));
        //console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });

});
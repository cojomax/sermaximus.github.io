'use strict';

(function () {
    const targetDate = new Date('June 19, 2022 16:00');
    const now = new Date();
    const targetElement = document.getElementById('countdown');
    const countdownDays = Math.ceil((targetDate.getTime() - now.getTime()) / (1000 * 3600 * 24));
    targetElement.innerHTML = `Gabriela is due to fly on ${resolveMonth(targetDate.getUTCMonth())} ${targetDate.getUTCDate()}
    at 16:00. Time remaining: ${countdownDays} days`;
})();

function resolveMonth(monthNum) {
    switch (monthNum) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
    }
}
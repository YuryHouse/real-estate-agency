let day = new Date();
let hour = day.getHours();
if (hour>=5 && hour<12) {
 $('h2 .greeting').text('Good');
 $('h2 .greeting-2').text('morning!');
} else if (hour>=0 && hour<5) {
 $('h2 .greeting').text('Good');
 $('h2 .greeting-2').text('night!');
} else if (hour>=12 && hour<17) {
 $('h2 .greeting').text('Good');
 $('h2 .greeting-2').text('afternoon!');
} else if (hour>=17 && hour<24) {
 $('h2 .greeting').text('Good');
 $('h2 .greeting-2').text('evening!');
}
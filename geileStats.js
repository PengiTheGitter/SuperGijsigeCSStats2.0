// Meeste kills
var cyka;
var blyat = 0;
var dupes = [];
jQuery('.csgo_scoreboard_inner_right').each(function() {
	var table = jQuery(this);
	var currTime = table.parent().parent().find('.val_left').find('.csgo_scoreboard_inner_left tbody').find('tr:nth-child(2) td').html();

	table.find('tr:not(:first)').each(function() {
		var el = jQuery(this);
		var html = el.find('.inner_name').find('.playerNickname').find('a').html();

		if(html == 'Clossd') {
			var curr = el.find('td:nth-child(3)').html();

			if(parseInt(curr) > parseInt(blyat)) {
				blyat = curr;
				cyka = table;
				time = currTime;
				dupes = [];
			} else if(parseInt(curr) == parseInt(blyat)) {
				dupes.push({
					el: table,
					int: parseInt(curr),
					time: currTime
				});
			}
		}
	});
});

console.log(blyat);
console.log(time);
if(dupes.length) {
	console.log(dupes);
}

jQuery('html, body').animate({
    scrollTop: cyka.offset().top
}, 100);
// END


// Meeste assists
var cyka;
var blyat = 0;
var dupes = [];
jQuery('.csgo_scoreboard_inner_right').each(function() {
	var table = jQuery(this);
	var currTime = table.parent().parent().find('.val_left').find('.csgo_scoreboard_inner_left tbody').find('tr:nth-child(2) td').html();

	table.find('tr:not(:first)').each(function() {
		var el = jQuery(this);
		var html = el.find('.inner_name').find('.playerNickname').find('a').html();

		if(html == 'Clossd') {
			var curr = el.find('td:nth-child(4)').html();

			if(parseInt(curr) > parseInt(blyat)) {
				blyat = curr;
				cyka = table;
				time = currTime;
				dupes = [];
			} else if(parseInt(curr) == parseInt(blyat)) {
				dupes.push({
					el: table,
					int: parseInt(curr),
					time: currTime
				});
			}
		}
	});
});

console.log(blyat);
console.log(time);
if(dupes.length) {
	console.log(dupes);
}

jQuery('html, body').animate({
    scrollTop: cyka.offset().top
}, 100);
// END


// Hoogste hsp% boven de 25 kills
var cyka;
var blyat = 0;
var dupes = [];
jQuery('.csgo_scoreboard_inner_right').each(function() {
	var table = jQuery(this);
	var currTime = table.parent().parent().find('.val_left').find('.csgo_scoreboard_inner_left tbody').find('tr:nth-child(2) td').html();

	table.find('tr:not(:first)').each(function() {
		var el = jQuery(this);
		var html = el.find('.inner_name').find('.playerNickname').find('a').html();

		if(html == 'Clossd') {
			if(parseInt(el.find('td:nth-child(3)').html()) > parseInt(25)) {
				var curr = el.find('td:nth-child(7)').html();

				if(parseInt(curr) > parseInt(blyat)) {
					blyat = curr;
					cyka = table;
					time = currTime;
					dupes = [];
				} else if(parseInt(curr) == parseInt(blyat)) {
					dupes.push({
						el: table,
						int: parseInt(curr),
						time: currTime
					});
				}
			}
		}
	});
});

console.log(blyat);
console.log(time);
if(dupes.length) {
	console.log(dupes);
}

jQuery('html, body').animate({
    scrollTop: cyka.offset().top
}, 100);
// END


// Meeste sterretjes
var cyka;
var blyat = 0;
var dupes = [];
var time;
jQuery('.csgo_scoreboard_inner_right').each(function() {
	var table = jQuery(this);
	var currTime = table.parent().parent().find('.val_left').find('.csgo_scoreboard_inner_left tbody').find('tr:nth-child(2) td').html();

	table.find('tr:not(:first)').each(function() {
		var el = jQuery(this);
		var html = el.find('.inner_name').find('.playerNickname').find('a').html();

		if(html == 'Clossd') {
			var curr = el.find('td:nth-child(6)').html();
			curr = curr.replace(/[^0-9]/g, '');

			if(parseInt(curr) > parseInt(blyat)) {
				blyat = curr;
				cyka = table;
				time = currTime;
				dupes = [];
			} else if(parseInt(curr) == parseInt(blyat)) {
				dupes.push({
					el: table,
					int: parseInt(curr),
					time: currTime
				});
			}
		}
	});
});

console.log(blyat);
console.log(time);
if(dupes.length) {
	console.log(dupes);
}

jQuery('html, body').animate({
    scrollTop: cyka.offset().top
}, 100);
// END


// Hoogste score
var cyka;
var blyat = 0;
var dupes = [];
jQuery('.csgo_scoreboard_inner_right').each(function() {
	var table = jQuery(this);
	var currTime = table.parent().parent().find('.val_left').find('.csgo_scoreboard_inner_left tbody').find('tr:nth-child(2) td').html();

	table.find('tr:not(:first)').each(function() {
		var el = jQuery(this);
		var html = el.find('.inner_name').find('.playerNickname').find('a').html();

		if(html == 'Clossd') {
			var curr = el.find('td:nth-child(8)').html();

			if(parseInt(curr) > parseInt(blyat)) {
				blyat = curr;
				cyka = table;
				time = currTime;
				dupes = [];
			} else if(parseInt(curr) == parseInt(blyat)) {
				dupes.push({
					el: table,
					int: parseInt(curr),
					time: currTime
				});
			}
		}
	});
});

console.log(blyat);
console.log(time);
if(dupes.length) {
	console.log(dupes);
}

jQuery('html, body').animate({
    scrollTop: cyka.offset().top
}, 100);
// END


// Aantal 30 bombs
var amount = 0;
jQuery('.csgo_scoreboard_inner_right').each(function() {
	var table = jQuery(this);

	table.find('tr:not(:first)').each(function() {
		var el = jQuery(this);
		var html = el.find('.inner_name').find('.playerNickname').find('a').html();

		if(html == 'Clossd') {
			var curr = el.find('td:nth-child(3)').html();

			if(parseInt(curr) >= parseInt(30)) {
				amount++;
			}
		}
	});
});

console.log(amount);

jQuery('html, body').animate({
    scrollTop: cyka.offset().top
}, 100);
// END

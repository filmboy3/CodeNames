// random letter effect
$.gl = {};
$.gl.intervalID = -1;
$.gl.countDown = 6.00;
$.gl.fillCharInterval = 0.08;
$.gl.beat = 0.00;
$.gl.step = 0.00;
$.gl.div = null;
$.gl.orig = null; // char array
$.gl.doneCallback = null;

$.gl.randomLetter = function() {
	return String.fromCharCode(Math.floor(((Math.random() * 1000) % 73) + 49));
};

$.gl.scramble = function(__id) {
	$(__id).attr('orig', $(__id).text());
	$.gl.orig = $(__id).attr('orig').split('');
	$(__id).empty();
	for (var i = 0; i < $.gl.orig.length; i++) {
		if ($.gl.orig[i] != ' ') {
			$(__id).append('<span>' + $.gl.randomLetter() + '</span>');
		} else {
			$(__id).append('<span> </span>');
		}
	}
};

$.gl.unscramble = function(__id, __doneCallback) {
	if ($.gl.intervalID == -1) {
		$.gl.orig = $(__id).attr('orig').split('');
		$.gl.countDown = 6.00;
		$.gl.beat = 0.00;
		$.gl.step = 0.00;
		$.gl.div = $(__id);
		$.gl.doneCallback = __doneCallback;
		$.gl.intervalID = window.setInterval($.gl.unscrambleChar, 1);
	} else {
		window.clearInterval($.gl.intervalID);
		$.gl.intervalID = -1;
	}
};

$.gl.unscrambleChar = function() {
	var spans = $('span', $($.gl.div));
	$.gl.countDown -= 0.01;
	$.gl.step += 0.01;
	$.gl.beat += 0.01;
	var charIndex = Math.floor(((Math.random() * 1000) * 1000) % $.gl.orig.length);

	if ($.gl.countDown <= 0) {
		window.clearInterval($.gl.intervalID);
		$.gl.intervalID = -1;
		// fill in correct letters
		for (var i = 0; i < spans.length; i++) {
			$(spans[i]).text($.gl.orig[i]);
		}
		if (typeof($.gl.doneCallback) === 'function') {
			$.gl.doneCallback();
		}
	}

	if ($.gl.beat >= 0.01) {
		// fill with random chars
		var ch = $(spans[charIndex]).text();
		if (ch != '' && ch != $.gl.orig[charIndex]) {
			$(spans[charIndex]).text($.gl.randomLetter());
		}
		$.gl.beat = 0.00;
	}

	if ($.gl.step >= $.gl.fillCharInterval) {
		// fill with correct char
		var ch = $(spans[charIndex]).text();
		if (ch != '' && ch != $.gl.orig[charIndex]) {
			$(spans[charIndex]).text($.gl.orig[charIndex]);
		}
		$.gl.step = 0.00;
	}
};                
                


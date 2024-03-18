/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const urlPathName = () => {
	let url = location.pathname;
	let regex = /\/([^/]+)$/;
	let match = url.match(regex);
	if (match) {
		// 추출된 값
		var lastPart = match[1]; // 정규식의 첫 번째 캡처 그룹
	
		console.log(lastPart); // "greet" 출력
		return ["/" + lastPart, "/en/" + lastPart];
	} else {
		return ["/", "/en/"]
	}
}

(function($) {
	var	$window = $(window),
		$body = $('body');

	let urlPathNames = urlPathName();
	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

		$('#language-selector > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350,
			alignment: 'right',
			offsetX: 500
		});
	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						'<a class="link depth-0" href="/" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">메인화면</a>' +
						$('#nav').navList() +
					'</nav>' +
					'<div id="nav-language-selector">' +
						'<span class="icon-menu"><i class="icon solid fas fa-language"></i></span>' +
						'<span class="sub-menu">' +
							'<span><a class="menu-item" href="' + urlPathNames[0] + '">한국어</a></span>' +
							'<span><a class="menu-item" href="' + urlPathNames[1] + '">English</a></span>' +
						'</span>' +
					'</div>' + 
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

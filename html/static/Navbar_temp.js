var li_nav = {};
/*
	border: '0!important',
	display: 'inline-block',
	float: 'none',
	color: '#000000 !important',
	textDecoration: 'none',
	fontSize: '20px',
	fontWeight: 'bold'
};
*/
var ul_nav = {}
/*
	textAlign: 'center',
	listStyleType: 'none',
	position: 'fixed',
	backgroundColor: '#4484ce',
	boxShadow: '5px',
	width: '100%',
	left: '0',
	top: '0',
	marginTop: '0',
	marginBottom: '0',
	border: 'none!important',
	padding: '0'
};
*/
var li_a = {/* color: '#d9d9d9' */};

var Navbar = React.createClass({
	render: function () {
		return React.createElement(
			'nav',
			{ className: 'navbar navbar-default navbar-fixed-top' },
			React.createElement(
				'div',
				{ className: 'container nav center' },
				React.createElement(
					'ul',
					{ className: 'nav navbar-inner', style: ul_nav },
					React.createElement(
						'li',
						{ className: 'nav', style: li_nav },
						React.createElement(
							'a',
							{ href: '#', style: li_a },
							'Home ',
							React.createElement('span', { 'class': 'sr-only' })
						)
					),
					React.createElement(
						'li',
						{ className: 'nav', style: li_nav },
						React.createElement(
							'a',
							{ href: '/~dalema/projects.html', style: li_a },
							'Projects'
						)
					),
					React.createElement(
						'li',
						{ className: 'nav', style: li_nav },
						React.createElement(
							'a',
							{ href: '/~dalema/resumeTrySomething.html', style: li_a },
							'Resume'
						)
					)
				)
			)
		);
	}
});

function display() {
	alert('in nav');
	React.render(React.createElement(Navbar, null), document.getElementById('navBarDiv'));
}
var NavbarList = React.createClass({
	render: function () {
		return React.createElement(
			"li",
			{ className: "nav" },
			React.createElement(
				"a",
				{ href: this.props.link },
				this.props.text
			)
		);
	}
});
var Navbar = React.createClass({
	render: function () {
		return React.createElement(
			"nav",
			{ className: "navbar navbar-default navbar-fixed-top" },
			React.createElement(
				"div",
				{ className: "container nav center" },
				React.createElement(
					"ul",
					{ className: "nav navbar-inner" },
					React.createElement(NavbarList, { link: "/~dalema/index.html", text: "Home" }),
					React.createElement(NavbarList, { link: "/~dalema/projects.html", text: "Project" }),
					React.createElement(NavbarList, { link: "/~dalema/resumeTrySomething.html", text: "Resume" })
				)
			)
		);
	}
});

$().ready(function () {
	React.render(React.createElement(Navbar, null), document.getElementById('navBarDiv'));
});

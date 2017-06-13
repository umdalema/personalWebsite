
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
					React.createElement(
						"li",
						{ className: "nav" },
						React.createElement(
							"a",
							{ href: "/~dalema/index.html" },
							"Home ",
							React.createElement("span", { "class": "sr-only" })
						)
					),
					React.createElement(
						"li",
						{ className: "nav" },
						React.createElement(
							"a",
							{ href: "/~dalema/projects.html" },
							"Projects"
						)
					),
					React.createElement(
						"li",
						{ className: "nav" },
						React.createElement(
							"a",
							{ href: "/~dalema/resumeTrySomething.html" },
							"Resume"
						)
					)
				)
			)
		);
	}
});

$().ready(function () {
	React.render(React.createElement(Navbar, null), document.getElementById('navBarDiv'));
});
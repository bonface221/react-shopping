function Navbar({totalCount}) {
	return (
		<nav className="navbar navbar-light bg-light">
			<a href="/" className="navbar-brand">
				Navbar{" "}
				<span className="badge bg-secondary rounded-pill">
					{totalCount}
				</span>
			</a>
		</nav>
	);
}

export default Navbar;

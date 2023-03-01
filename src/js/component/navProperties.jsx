import React from "react";

function NavBar({mainTitle, title1, title2, title3, title4}) {
    return(
        <nav className="navbar navbar-expand-lg sticky-top bg-dark navbar-dark">
			<div className=" container-fluid marketing">
			<a className="navbar-brand text-light" href="#">{mainTitle}</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
						<a className="nav-link text-light" href="#">{title1}</a>
						</li>
						<li className="nav-item">
						<a className="nav-link text-light" href="#">{title2}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">{title3}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">{title4}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    );
}
export default NavBar;
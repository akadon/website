import { useState } from 'react'

const Nav = ({ }) => {
	return (
		<>
			<header className="relative bg-slate-200 z-10">
				<nav aria-label="Top" className="mx-auto max-w-7xl px-6">
					<div className="border-b border-gray-200">
						<div className="flex h-10 items-center">
							<a href="https://github.com/akadon">Github</a>
						</div>
					</div>
				</nav>
			</header>
		</>
	)
}

export default Nav

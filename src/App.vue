<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
<main>
	<CNavbar
		class="bg-dark"
		color-scheme="dark"
		expand="md"
		placement="sticky-top"
	>
		<CContainer
			fluid
			class="p-0"
		>
			<CNavbarBrand class="p-0">
				<RouterLink to="/">
					<img
						id="brand-icon"
						src="./assets/favicon.png"
					>
				</RouterLink>
			</CNavbarBrand>
			<CNavbarToggler
				aria-label="Toggle navigation"
				:aria-expanded="visible"
				@click="visible = !visible"
			/>	
			<CCollapse
				class="navbar-collapse"
				:visible="visible"
			>
				<CNavbarNav class="nav-container">
					<CContainer
						fluid
						class="d-flex justify-content-between p-0"
					>
						<div class="d-flex">
							<CNavItem>
								<RouterLink
									to="/d3-format"
									class="nav-link"
								>
									D3 Format
								</RouterLink>
							</CNavItem>
							<CNavItem>
								<RouterLink
									to="/d3-time-format"
									class="nav-link"
								>
									D3 Time Format
								</RouterLink>
							</CNavItem>
						</div>
						<div>
							<CNavItem>
								<CNavLink
									class="px-2 py-1"
									href="https://github.com/camdecoster/d3-tester"
									target="_blank"
									title="See the source on GitHub"
								>
									<i class="nav-icon bi bi-github" />
								</CNavLink>
							</CNavItem>
						</div>
					</CContainer>
				</CNavbarNav>
			</CCollapse>
		</CContainer>
	</CNavbar>
	<RouterView />
</main>
</template>

<style>
#app {
  text-align: center;
}

#brand-icon {
	width: 40px;
}

.nav-icon {
	font-size: 30px;
}

.nav-container {
	width: 100%;
}
</style>

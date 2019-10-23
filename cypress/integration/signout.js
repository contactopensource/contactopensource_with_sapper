describe("Sign out", () => {

	it("visit /signout", () => {
		cy.visit("/signout")
		cy.url().should("include", "/signout")
	});

});
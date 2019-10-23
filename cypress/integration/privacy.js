describe("Privacy page", () => {

	it("visit /privacy", () => {
		cy.visit("/privacy")
		cy.url().should("include", "/privacy")
		cy.title().should("eq", "Privacy policy")
		//cy.get("h1").should("eq", "Privacy policy")
	});

});
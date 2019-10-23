describe("Contact page", () => {
	
	it("visit /contact", () => {
		cy.visit("/contact")
		cy.url().should("include", "/contact")
		cy.title().should("eq", "Contact us")
		//cy.get("h1").should("eq", "Contact us")
	});

});
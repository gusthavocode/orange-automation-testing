describe("template spec", () => {
  it("Prueba de Ingreso Automation", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");

    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click({ force: true });

    cy.wait(5000);
    cy.get('[class="oxd-main-menu-item-wrapper"]').eq(5).click();

    cy.get('[name="firstName"]').clear().type("Christian"),
      cy.get('[name="middleName"]').clear().type("Hernandez"),
      cy.get('[name="lastName"]').clear().type("Dominguez");

    cy.get('[class="oxd-input oxd-input--active"]').eq(0).clear().type(" "),
      cy
        .get('[class="oxd-input oxd-input--active"]')
        .eq(1)
        .clear()
        .type("00938"),
      cy
        .get('[class="oxd-input oxd-input--active"]')
        .eq(2)
        .clear()
        .type("8988767");
    cy.get('[class="oxd-input oxd-input--active"]')
      .eq(3)
      .clear()
      .type("2004-03-11");

    cy.get('[class="oxd-select-text oxd-select-text--active"]')
      .eq(0)
      .click({ force: true });
    cy.contains("American").click({ force: true });

    cy.get('[class="oxd-select-text oxd-select-text--active"]')
      .eq(1)
      .click({ force: true });
    cy.contains("Married").click({ force: true });
  });
});

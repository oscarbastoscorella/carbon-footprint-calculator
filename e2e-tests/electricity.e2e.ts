import { expect, test } from "@playwright/test";

test.describe("Electricity Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display static elements", async ({ page }) => {
    await assertVisible([
      page.getByRole("banner"),
      page.getByRole("heading", { name: "Carbon Footprint Calculator" }),
      page.getByLabel("leaf icon"),
      page.getByRole("navigation"),
      page.getByLabel("Toggle color mode"),
      page.getByRole("heading", { name: "Electricity" }),
    ]);
  });

  test("should display location and summary elements", async ({ page }) => {
    await assertVisible([
      page.getByRole("heading", { name: "Location" }),
      page.getByText("Country"),
      page.getByText("United States"),
      page.getByText("State", { exact: true }),
      page.getByText("California"),
      page.getByLabel("Configure location"),
      page.getByRole("heading", { name: "Summary" }),
      page.getByText("Consumption", { exact: true }),
      page.getByText("mvh"),
      page.getByText("Total Emissions"),
      page.getByText("8427kg"),
      page.getByText("Average"),
      page.getByText("kg/day"),
    ]);
  });

  test("should display energy consumption elements", async ({ page }) => {
    await assertVisible([
      page.getByRole("heading", { name: "Energy Consumption" }),
      page.getByLabel("Add energy consumption"),
      page.getByRole("region", { name: "Energy Consumption Carousel" }),
    ]);

    await expect(page.locator('[role="carousel-card"]')).toHaveCount(10);
  });

  test("should display carbon footprint chart", async ({ page }) => {
    await assertVisible([page.getByLabel("Consumption Chart")]);
  });

  test("should change the location", async ({ page }) => {
    await assertVisible([
      page.getByText("Country"),
      page.getByText("United States"),
      page.getByText("State", { exact: true }),
      page.getByText("California"),
    ]);

    await page.getByLabel("Configure location").click();
    await expect(page.getByRole("dialog")).toBeVisible();

    await page.getByRole("combobox", { name: "State:" }).click();
    await page.getByRole("option", { name: "New York" }).click();
    await page.getByRole("button", { name: "Save" }).click();

    await expect(page.getByRole("dialog")).not.toBeVisible();
    await expect(page.getByText("New York")).toBeVisible();
  });

  test("should add energy consumption card", async ({ page }) => {
    await page.getByLabel("Add energy consumption").click();
    await expect(page.getByRole("dialog")).toBeVisible();

    await page.getByPlaceholder("Please enter date").fill("Jan 06, 2025");
    await page.getByRole("button", { name: "Save" }).click();

    await expect(page.getByRole("dialog")).not.toBeVisible();
    await expect(page.getByText("Jan 06,")).toBeVisible();
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function assertVisible(elements: any) {
  for (const element of elements) {
    await expect(element).toBeVisible();
  }
}

import { expect, test } from "@playwright/test";

test("lets a visitor generate and start a sorting visualization", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "See every step of an algorithm." }),
  ).toBeVisible();
  const firstBar = page.locator(".array-bar").first();
  await expect(firstBar).toBeVisible();
  await expect(firstBar).toHaveCSS("height", /px/);
  await page.getByRole("button", { name: "Generate array" }).click();
  await page.getByRole("button", { name: "Start" }).click();
  await expect(page.getByText(/Comparing|Swapping|Complete/)).toBeVisible();
});

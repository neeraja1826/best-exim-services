import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { FAQ } from "./sections/FAQ";

describe("FAQ — accordion", () => {
  it("renders the first question open by default and toggles on click", async () => {
    const user = userEvent.setup();
    render(<FAQ />);

    const firstToggle = screen.getByRole("button", {
      name: /what is an iec \(import export code\)\?/i,
    });
    expect(firstToggle).toHaveAttribute("aria-expanded", "true");

    // Collapse the first item.
    await user.click(firstToggle);
    expect(firstToggle).toHaveAttribute("aria-expanded", "false");

    // Re-open it.
    await user.click(firstToggle);
    expect(firstToggle).toHaveAttribute("aria-expanded", "true");
  });

  it("renders all six FAQ questions", () => {
    render(<FAQ />);

    for (const question of [
      "What is an IEC (Import Export Code)?",
      "What is EPCG and how does it benefit exporters?",
      "How long does DGFT processing usually take?",
      "What documents are needed for customs clearance?",
      "What is RoDTEP and who is eligible?",
      "Do you assist with company compliance and registration?",
    ]) {
      expect(
        screen.getByRole("button", { name: new RegExp(question, "i") }),
      ).toBeInTheDocument();
    }
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Services } from "./sections/Services";

describe("Services — DGFT accordion", () => {
  it("expands the DGFT services list on click", async () => {
    const user = userEvent.setup();
    render(<Services />);

    const trigger = screen.getByRole("button", {
      name: /view all dgft services/i,
    });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    for (const item of [
      "IEC (Import Export Code)",
      "EPCG (Export Promotion Capital Goods)",
      "Advance Authorization",
      "DFIA (Duty Free Import Authorization)",
      "RoDTEP (Remission of Duties and Taxes on Exported Products)",
      "RoSCTL (Rebate of State and Central Taxes and Levies)",
      "Certificate of Origin",
      "Export House Certificate",
      "Import Monitoring Systems",
      "And other DGFT related services",
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });
});

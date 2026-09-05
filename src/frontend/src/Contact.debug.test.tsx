import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhyChooseUs } from "./sections/WhyChooseUs";

describe("WhyChooseUs — differentiators", () => {
  it("renders the section heading and all four differentiators", () => {
    render(<WhyChooseUs />);

    expect(screen.getByText("Why Choose Us")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /the trusted partner for your trade and compliance/i,
      }),
    ).toBeInTheDocument();

    for (const item of [
      "Expert DGFT Services",
      "Customs Services",
      "Maximize Subsidy Benefits",
      "GST Expertise",
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });
});

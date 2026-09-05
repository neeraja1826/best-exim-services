import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App — full page render", () => {
  it("loads without a blank screen and renders the hero heading", () => {
    render(<App />);

    // The default route must render the hero with the exact heading.
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Expert DGFT Services for Hassle-Free Compliance and Approvals",
      }),
    ).toBeInTheDocument();
  });

  it("renders the welcome heading and tagline verbatim", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "WELCOME TO THE BEST EXIM AND INDUSTRIAL CONSULTANTS",
      }),
    ).toBeInTheDocument();
    // The tagline appears in the welcome section and the footer.
    expect(
      screen.getAllByText(
        "Your Trusted Partner for All Your Financial and Compliance Needs!",
      ).length,
    ).toBeGreaterThan(0);
  });

  it("renders all six core services with their exact descriptions", () => {
    render(<App />);

    const services = [
      {
        title: "DGFT Services",
        description:
          "End-to-end support for DGFT authorisations, licences and export incentives, ensuring seamless compliance with the Foreign Trade Policy.",
      },
      {
        title: "Customs Services",
        description:
          "Expert handling of customs documentation, classification and duty structures to keep your shipments moving without delays.",
      },
      {
        title: "GST Services",
        description:
          "Complete GST registration, filing and compliance support tailored to the needs of exporters and importers.",
      },
      {
        title: "Subsidy Services",
        description:
          "Guidance on availing government subsidies and incentives available to exporters under various schemes.",
      },
      {
        title: "Certificate & Others",
        description:
          "Assistance with certificates of origin, export house certificates and other essential trade documentation.",
      },
      {
        title: "Company Compliance",
        description:
          "Reliable support for company registration, statutory compliance and ongoing regulatory obligations.",
      },
    ];

    for (const service of services) {
      // Some service titles (e.g. "Customs Services") also appear in the
      // Why Choose Us section, so assert at least one heading exists.
      expect(
        screen.getAllByRole("heading", {
          level: 3,
          name: service.title,
        }).length,
      ).toBeGreaterThan(0);
      expect(screen.getAllByText(service.description).length).toBeGreaterThan(
        0,
      );
    }
  });

  it("renders the contact details verbatim", () => {
    render(<App />);

    // Phone, email and address appear in both the contact section and footer.
    expect(screen.getAllByText("+91 95150 20404").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText("info@besteximservices.com").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(
        "6-3-790/8 Bathina Apartments, Flat No 2, Ameerpet, Hyderabad – 500016",
      ).length,
    ).toBeGreaterThan(0);
  });

  it("renders the footer with the company name", () => {
    render(<App />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(
      screen.getByText(/Best EXIM Services\. All rights reserved\./),
    ).toBeInTheDocument();
  });
});

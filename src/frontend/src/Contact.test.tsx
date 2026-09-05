import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Contact } from "./sections/Contact";

describe("Contact — inquiry form", () => {
  it("shows validation errors when submitting an empty form", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.click(screen.getByRole("button", { name: /submit inquiry/i }));

    expect(
      screen.getByText("Please enter your full name."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please enter your email address."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please enter your phone number."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please select a service of interest."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please tell us how we can help."),
    ).toBeInTheDocument();
  });

  it("rejects an invalid email address", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText(/email address/i), "not-an-email");
    await user.click(screen.getByRole("button", { name: /submit inquiry/i }));

    expect(
      screen.getByText("Please enter a valid email address."),
    ).toBeInTheDocument();
  });

  it("shows a success state after a valid submission", () => {
    render(<Contact />);

    // fireEvent is used throughout because user-event's pointer simulation
    // hangs on the Radix Select popper in jsdom.
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "Ada Lovelace" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "ada@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "+91 95150 20404" },
    });
    fireEvent.change(screen.getByLabelText(/your message/i), {
      target: { value: "I need help with my IEC application." },
    });

    // Radix Select: open the dropdown and choose a service.
    const combobox = screen.getByRole("combobox", {
      name: /service of interest/i,
    });
    fireEvent.pointerDown(combobox);
    fireEvent.click(combobox);
    const option = screen
      .getAllByRole("option")
      .find((el) => el.textContent === "DGFT Services");
    expect(option).toBeDefined();
    fireEvent.click(option!);

    fireEvent.click(screen.getByRole("button", { name: /submit inquiry/i }));

    expect(
      screen.getByRole("heading", { name: "Thank You!" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/your inquiry has been received/i),
    ).toBeInTheDocument();
  });

  it("lists all six core services plus Other in the service dropdown", () => {
    render(<Contact />);

    const combobox = screen.getByRole("combobox", {
      name: /service of interest/i,
    });
    fireEvent.pointerDown(combobox);
    fireEvent.click(combobox);

    const labels = screen
      .getAllByRole("option")
      .map((option) => option.textContent);

    for (const service of [
      "DGFT Services",
      "Customs Services",
      "GST Services",
      "Subsidy Services",
      "Certificate & Others",
      "Company Compliance",
      "Other",
    ]) {
      expect(labels).toContain(service);
    }
  });

  it("renders the phone, email and address with correct links", () => {
    render(<Contact />);

    const phoneLink = screen.getByRole("link", { name: /\+91 95150 20404/i });
    expect(phoneLink).toHaveAttribute("href", "tel:+919515020404");

    const emailLink = screen.getByRole("link", {
      name: /info@besteximservices\.com/i,
    });
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:info@besteximservices.com",
    );

    expect(
      screen.getByText(
        "6-3-790/8 Bathina Apartments, Flat No 2, Ameerpet, Hyderabad – 500016",
      ),
    ).toBeInTheDocument();
  });
});

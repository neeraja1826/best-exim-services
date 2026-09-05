import { render, screen } from "@testing-library/react";
import { act } from "react";
import { afterEach, describe, expect, it } from "vitest";
import { Navbar } from "./components/Navbar";

function setScrollY(value: number) {
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    writable: true,
    value,
  });
  act(() => {
    window.dispatchEvent(new Event("scroll"));
  });
}

afterEach(() => {
  setScrollY(0);
});

describe("Navbar", () => {
  it("renders anchor links for every navigation item", () => {
    render(<Navbar />);

    const links = screen.getAllByRole("link");
    const hrefs = links.map((link) => link.getAttribute("href"));

    for (const href of [
      "#home",
      "#about",
      "#services",
      "#industries",
      "#contact",
    ]) {
      expect(hrefs).toContain(href);
    }
  });

  it("is transparent over the hero before scrolling", () => {
    render(<Navbar />);

    const header = screen.getByRole("banner");
    expect(header.className).toContain("bg-transparent");
    expect(header.className).not.toContain("glass");
  });

  it("becomes a glass bar after scrolling", () => {
    render(<Navbar />);

    setScrollY(100);

    const header = screen.getByRole("banner");
    expect(header.className).toContain("glass");
    expect(header.className).not.toContain("bg-transparent");
  });
});

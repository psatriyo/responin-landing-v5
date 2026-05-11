import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("renders the primary Responin positioning and calls to action", () => {
    render(<LandingPage />);

    expect(
      screen.getByRole("heading", {
        name: /stop being the operating system for your business/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /start with one workflow/i }),
    ).toHaveLength(2);
    expect(
      screen.getByRole("link", { name: /see how it works/i }),
    ).toHaveAttribute("href", "#process");
  });

  it("renders workflow, trust, and FAQ content from constants", () => {
    render(<LandingPage />);

    expect(
      screen.getByText(/workflow classification and context retrieval/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/human approval before customer-visible/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/is responin just chatgpt/i)).toBeInTheDocument();
  });

  it("exposes accessible landmark navigation", () => {
    render(<LandingPage />);

    expect(
      screen.getByRole("navigation", { name: /primary navigation/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByLabelText(/responin workflow preview/i),
    ).toBeInTheDocument();
  });
});

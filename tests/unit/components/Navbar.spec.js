import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Test Navbar Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Navbar, {
      stubs: ["router-link", "router-view"]
    });
  });

  it("Navbar renders..", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Navbar has 3 links", () => {
    const navLinks = wrapper.findAll(".nav-item");
    expect(navLinks.length).toEqual(3);
  });
});

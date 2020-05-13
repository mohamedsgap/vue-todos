import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Navbar from "@/components/Navbar.vue";

describe("Test Home view", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Home, {
      stubs: ["router-link", "router-view"]
    });
  });

  it("works well", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Home has navbar", () => {
    const navbar = wrapper.find(Navbar);
    expect(navbar.exists()).toBe(true);
  });
});

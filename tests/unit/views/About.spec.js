import { mount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("Test About view", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(About);
  });

  it("works well", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

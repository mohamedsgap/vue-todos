import { mount } from "@vue/test-utils";
import Todos from "@/views/Todos.vue";

describe("Test Todos view", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Todos);
  });

  it("works well", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

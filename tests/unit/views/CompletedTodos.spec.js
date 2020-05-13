import { mount } from "@vue/test-utils";
import CompletedTodos from "@/views/CompletedTodos.vue";

describe("Test CompletedTodos view", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CompletedTodos);
  });

  it("works well", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

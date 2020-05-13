import { shallowMount } from "@vue/test-utils";
import CreateTodo from "@/components/CreateTodo.vue";

describe("Test CreateTodo Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CreateTodo);
  });

  it("emit on-new-todo with the data that is in input field", () => {
    wrapper.setData({
      newTodo: "test"
    });
    wrapper.vm.addTodo();
    expect(wrapper.emitted("on-new-todo")[0]).toContain("test");
    expect(wrapper.emitted("on-new-todo").length).toBe(1);
  });

  it("doesn't emit on-new-todo with the data that is in input field", () => {
    wrapper.setData({
      newTodo: ""
    });
    wrapper.vm.addTodo();

    expect(wrapper.emitted("on-new-todo")).toBeFalsy;
  });
});

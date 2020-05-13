import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("Test Todo Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Todo, {
      propsData: {
        description: "test...",
        completed: false
      }
    });
  });

  it(" Todo renders..", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders todo description correctly", () => {
    const toggleBtn = wrapper.find(".toggle");
    const span = toggleBtn.find("span");
    expect(span.text()).toBe("test...");
  });

  it("emits on-toggle when it's clicked", () => {
    wrapper.setData({
      isEditing: false
    });
    const toggleBtn = wrapper.find(".toggle");
    toggleBtn.trigger("click");
    expect(wrapper.emitted("on-toggle").length).toBe(1);
  });

  it("finish editing and emit on-edit event", () => {
    wrapper.setData({
      isEditing: true
    });
    wrapper.vm.finishEditing();

    expect(wrapper.vm.isEditing).toBe(false);
    expect(wrapper.emitted("on-edit").length).toBe(1);
  });

  it("emits on-delete event ", () => {
    const deleteTodoBtn = wrapper.find(".delete");
    deleteTodoBtn.trigger("click");
    expect(wrapper.emitted("on-delete").length).toBe(1);
  });

  it("starts editing...", () => {
    wrapper.setData({
      isEditing: true
    });
    const finishEditingFn = jest.fn();
    wrapper.setMethods({
      finishEditing: finishEditingFn
    });
    wrapper.vm.startEditing();
    expect(finishEditingFn).toHaveBeenCalled();
    wrapper.setData({
      isEditing: false
    });
    wrapper.vm.startEditing();
    expect(wrapper.vm.newTodoDescription).toEqual(wrapper.vm.description);
    expect(wrapper.vm.isEditing).toBeTruthy();
  });
});

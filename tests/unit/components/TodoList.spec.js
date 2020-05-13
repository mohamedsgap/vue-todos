import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

describe("Test TodoList Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TodoList, {
      propsData: {
        listName: "Vue Todos"
      }
    });
  });

  it("TodoList renders...", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("listName props working...", () => {
    expect(wrapper.find("h1").text()).toBe("Vue Todos");
  });

  it("todos array exist", () => {
    expect(Array.isArray(wrapper.vm.todos)).toBe(true);
  });

  it("adds todo", () => {
    wrapper.vm.addTodo("test");
    const foundTodo = wrapper.vm.todos.filter(
      todo => todo.description === "test"
    );
    expect(foundTodo).toHaveLength(1);
  });

  it("removes todo", () => {
    const todos = [{ description: "test", completed: false }];

    wrapper.setData({
      todos
    });

    expect(wrapper.vm.todos).toContainEqual(
      expect.objectContaining({ description: "test" })
    );
    wrapper.vm.deleteTodo(wrapper.vm.todos[0]);
    expect(wrapper.vm.todos).toHaveLength(0);
  });

  it("edits todo", () => {
    const todos = [{ description: "test", completed: false }];

    wrapper.setData({
      todos
    });

    // check if the todo is already added
    expect(wrapper.vm.todos).toContainEqual(
      expect.objectContaining({ description: "test" })
    );

    wrapper.vm.editTodo(wrapper.vm.todos[0], "edited");

    expect(wrapper.vm.todos).toContainEqual(
      expect.objectContaining({ description: "edited" })
    );
  });

  it("toggles todo ", () => {
    const todos = [{ description: "test", completed: false }];

    wrapper.setData({
      todos
    });
    expect(wrapper.vm.todos).toContainEqual(
      expect.objectContaining({ description: "test ", completed: false })
    );

    wrapper.vm.toggleTodo(wrapper.vm.todos[0]);

    expect(wrapper.vm.todos).toContainEqual(
      expect.objectContaining({ description: "test", completed: true })
    );
  });

  it("filter completed todos", () => {
    wrapper.setData({
      todos: [
        { description: "Go for a walk", completed: false },
        { description: "Go to the gym", completed: true }
      ]
    });
    wrapper.setProps({ todosCategory: "COMPLETED_TODOS" });

    expect(wrapper.vm.showTodos.length).toBeLessThanOrEqual(
      wrapper.vm.todos.length
    );

    wrapper.vm.showTodos.forEach(todo => {
      expect(todo.completed).toBe(true);
    });
  });
});

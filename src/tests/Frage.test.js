import { mount } from "@vue/test-utils";
import Frage from "../components/Frage.vue";

test("mount component", async () => {
  const wrapper = mount(Frage, {
    props: {
      text: "Bogo Frage",
    },
  });

  expect(wrapper.text()).toContain("Bogo Frage");
});
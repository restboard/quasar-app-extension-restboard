import { is } from "quasar";

export default {
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },

    loading: {
      type: Boolean,
      default: false,
    },

    key: {
      type: String,
      default: "id",
    },
  },

  emits: ["update:modelValue"],

  data() {
    return {
      form: {},
    };
  },

  computed: {
    isUpdating() {
      return Boolean(this.modelValue && this.modelValue[this.key]);
    },
  },

  methods: {
    parseData(data) {
      return data;
    },

    serializeData(data) {
      return data;
    },
  },

  watch: {
    modelValue: {
      handler(val, old) {
        if (!is.deepEqual(val, old)) {
          this.form = this.parseData(JSON.parse(JSON.stringify(val)));
        }
      },
      immediate: true,
      deep: true,
    },

    form: {
      handler(val) {
        const data = this.serializeData(JSON.parse(JSON.stringify(val)));
        this.$emit("update:modelValue", data);
      },
      deep: true,
    },
  },
};

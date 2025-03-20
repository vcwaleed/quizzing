<script setup>
const props = defineProps({
  buttonType: {
    type: String,
    default: "primary",
  },
  buttonSize: {
    type: String,
    default: "medium",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  action: {
    type: Function,
    default: () => {},
  },
});
const handleClick = () => {
  props.action();
};
</script>
<template>
  <button
    :class="['custom-button', buttonType, buttonSize]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@use "../styles/variables" as *;

.custom-button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.2s;
  display: inline-block;
  text-align: center;

  &.primary {
    background-color: $primary-color;
    color: $secondary-color;
    border: 1px solid $secondary-color;
    &:hover {
      background-color: $secondary-color;
      color: $primary-color;
    }
    &:active {
      transform: scale(0.98);
    }
  }
  &.secondary {
    background-image: linear-gradient(to left, #7dd4ff, $btn_color);
    color: white;
    &:active {
      transform: scale(0.99);
    }
  }

  &.danger {
    background-color: #dc3545;
    color: white;
    &:hover {
      background-color: #c82333;
    }
    &:active {
      transform: scale(0.98);
    }
  }
  &.small {
    padding: 5px 10px;
    font-size: 14px;
  }

  &.medium {
    padding: 18px 14px;
    font-size: 16px;
    font-family: sans-serif;
  }
  &.large {
    padding: 13px 20px;
    font-size: 18px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>

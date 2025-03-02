<template>
  <div class="form-field flex flex-col gap-2">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :autocomplete="autocomplete"
      :aria-required="required ? 'true' : 'false'"  
      v-model="inputValue"
      class="p-2.5 border border-solid border-[#c7c7c7] rounded-sm"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: { type: String, required: true },
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  autocomplete: { type: String, default: '' },
  modelValue: { type: [String, Number], default: '' }
});

const emit = defineEmits(['update:modelValue']);


const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
});
</script>

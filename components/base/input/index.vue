<script setup>
const props = defineProps({
  modelValue: {
		type: String,
		default: ''
	},
	placeholder: {
		type: String,
		default: ''
	},
	type: {
		type: String,
		default: 'text'
	},
	label: {
		type: String,
		default: ''
	},
	disabled: {
		type: Boolean,
		default: false
	},
	errors: {
		type: Array,
		default: () => []
	},
	success: {
		type: Boolean,
		default: false
	}
});
const emit = defineEmits(['update:modelValue']);
const isError = computed(() => {
	return props.errors.length > 0;
});

const showStatus = ref(false);

// watch(() => props.modelValue, () => {
// 	showStatus.value = false;
// });

const handleInput = ($event) => {
	emit('update:modelValue', $event.target.value);
		showStatus.value = false;
};

const handleBlur = ($event) => {
	if($event.target.value.length === 0) {
		showStatus.value = false;
		return;
	}
	showStatus.value = true;
};
</script>

<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" class="text-sm text-textColor">{{ label }}</label>

    <div
      :class="['flex items-center rounded-lg px-3 py-2 border border-borderColor transition-colors',
               !isError && !success ? 'border-gray-300' : '',
               !!isError && showStatus ? 'border-red-500' : '',
               !!success && !isError && showStatus ? 'border-green-500' : '',
               disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : '',
      ]">
      <input
        :value="modelValue"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        :class="[
          'flex-1 bg-transparent outline-none text-sm',
          disabled ? 'cursor-not-allowed text-textQuote' : 'text-textColor'
        ]"
        @input="handleInput"
        @blur="handleBlur"
      >

      <span v-if="isError && showStatus" class="ml-2 text-red-500">
        <SvgErrorSign class="w-4 h-4"/>
      </span>
      <span v-else-if="success && showStatus" class="ml-2 text-green-500">
        <SvgCircleCheck class="w-4 h-4"/>
      </span>
    </div>

    <ul v-if="isError && showStatus" class="text-xs text-red-500 flex flex-col list-disc list-inside marker:text-red-500">
      <li
        v-for="(error, index) in errors"
        :key="index"
      >
        {{ error }}
      </li>
    </ul>
  </div>
</template>





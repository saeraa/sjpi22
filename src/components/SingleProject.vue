<template>
	<div>
		<a :href="project.link">{{ project.name }}</a>
		<a :href="project.repo">
			<Icon class="icon" />
		</a>
		- {{ project.description }}
	</div>
</template>

<script setup lang="ts">
import Icon from "./IconCode.vue";
const props = defineProps({
	project: Object
});

const project = { ...props.project };
</script>

<style lang="scss" scoped>
.icon {
	width: 20px;
	transform: translateY(3px);
	margin-left: 8px;
}

div {
	margin-bottom: 5px;
}
</style>

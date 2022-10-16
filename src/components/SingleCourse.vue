<template>
	<details :class="{ current: currentCourse, previous: previousCourse }">
		<summary>
			<Arrow class="arrow" />
			{{ course.courseName }}
			<span
				>{{ course.courseStart.toLocaleDateString() }} -
				{{ course.courseEnd.toLocaleDateString() }}</span
			>
		</summary>
		<div class="projects">
			<Project
				v-for="project in projects.filter(
					(project) => project.course === props.index
				)"
				:project="project"
			>
			</Project>
			<div v-if="!projects.find((project) => project.course === props.index)">
				Inga projekt här än! 😞
			</div>
		</div>
	</details>
</template>

<script lang="ts" setup>
import Arrow from "./IconArrow.vue";
import Project from "../components/SingleProject.vue";
import { projects } from "../assets/projects";

const props = defineProps({
	course: Object,
	index: Number
});
const course = { ...props.course };

const current = new Date().getTime();
let currentCourse = false;
if (
	current >= course.courseStart.getTime() &&
	current < course.courseEnd.getTime()
) {
	currentCourse = true;
}

let previousCourse = false;
if (current > course.courseEnd.getTime()) {
	previousCourse = true;
}
</script>

<style lang="scss" scoped>
.arrow {
	width: 20px;
	transition: 0.3s all ease-in;
	position: absolute;
	left: -27px;
}

.current details {
	opacity: 1;
}

.previous,
details[open] {
	& summary {
		color: darken($accent, 20%);

		& span {
			color: darken($accent2, 20%);
		}
	}
}

.current,
details[open] {
	& summary {
		color: $accent;

		& span {
			color: $accent2;
		}
	}
}

/*
transition: .3s all ease-in;
transition: .3s all ease-in;
transition: .3s all ease-in;
transition: .3s all ease-in;
transition: .3s all ease-in;

 transition: .3s all ease-in;*/

summary {
	/*transition: .3s all ease-in;*/
	padding: 0.5rem;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	font-size: 1.2rem;
	color: $fourth;
	position: relative;

	&:hover {
		color: $accent;
	}

	& span {
		font-size: 0.9rem;
		color: $fourth;
	}
}

details {
	padding: 0.8rem;
	margin: 0.8rem;
	transition: all 1s ease;
	/*overflow: hidden;*/

	& .projects {
		padding: 0em 1em 1.5em;
	}
}

details:not([open]) {
	height: auto;
	transition: all 1s ease;
	max-height: 2rem;
	opacity: 0.95;
}

details[open] {
	max-height: 99rem;
	background-color: rgb(34, 34, 34);
	/*transition: .3s all ease-in;*/
	border: 3px solid black;

	& .arrow {
		transform: rotate(90deg);
		transition: 0.3s all ease-in;
	}
}
</style>

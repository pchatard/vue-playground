<template>
	<div class="cursor__selector">
		<div class="cursor__selector__container type">
			<div class="type__label">Cursor</div>
			<div class="choices">
				<div class="choice">
					<input
						type="radio"
						v-model="cursor"
						id="square"
						value="square"
						checked
						@change="onRadioChange"
					/>
					<label for="square">
						<img
							src="@/assets/images/cursor/squareHover.svg"
							alt="Square Cursor"
						/>
					</label>
				</div>
				<div class="choice">
					<input
						type="radio"
						v-model="cursor"
						id="circle"
						value="circle"
						@change="onRadioChange"
					/>
					<label for="circle">
						<img
							src="@/assets/images/cursor/circleHover.svg"
							alt="Circle Cursor"
						/>
					</label>
				</div>
				<div class="choice">
					<input
						type="radio"
						v-model="cursor"
						id="triangle"
						value="triangle"
						@change="onRadioChange"
					/>
					<label for="triangle">
						<img
							src="@/assets/images/cursor/triangleHover.svg"
							alt="Triangle Cursor"
						/>
					</label>
				</div>
				<div class="choice">
					<input
						type="radio"
						v-model="cursor"
						id="image"
						value="luffy"
						@change="onRadioChange"
					/>
					<label for="image">Image</label>
				</div>
			</div>
		</div>
		<!-- <div class="cursor__selector__container">Select an effect:</div>
		<div class="cursor__selector__container">Add a delay</div> -->
	</div>
</template>

<script>
export default {
	name: "CursorSelector",
	props: {
		cursorType: {
			default: "square",
			type: String,
		},
	},
	data() {
		return {
			cursor: this.cursorType,
		};
	},
	methods: {
		onRadioChange(event) {
			this.$emit("cursor-type", event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.cursor__selector {
	display: flex;
	flex-direction: column;
	background-color: black;
	color: white;
	overflow: hidden;
	border-radius: 15px;
	margin-top: 20px;

	&__container {
		&.type {
			display: flex;
			flex-direction: column;
			margin-top: 10px;

			.type__label {
				font-size: 18px;
				margin-bottom: 10px;
			}

			.choices {
				display: flex;
			}

			.choice {
				width: 70px;
				height: 50px;

				&:hover {
					background-color: #333;
				}

				input[type="radio"] {
					display: none;

					&:checked ~ label {
						background-color: #333;
					}
				}

				label {
					height: 100%;
					display: grid;
					place-items: center;
				}
			}
		}
	}
}
</style>

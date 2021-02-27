<template>
	<div class="cursor__selector">
		<div class="cursor__selector__container type">
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
						<img src="@/assets/images/cursor/square.svg" alt="Square Cursor" />
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
						<img src="@/assets/images/cursor/circle.svg" alt="Circle Cursor" />
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
							src="@/assets/images/cursor/triangle.svg"
							alt="Triangle Cursor"
						/>
					</label>
				</div>
			</div>
		</div>
		<!-- <div class="cursor__selector__container type">
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
						<img src="@/assets/images/cursor/square.svg" alt="Square Cursor" />
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
						<img src="@/assets/images/cursor/circle.svg" alt="Circle Cursor" />
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
							src="@/assets/images/cursor/triangle.svg"
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
					<label for="image">
						<img src="@/assets/images/cursor/luffy.png" alt="Luffy Cursor" />
					</label>
				</div>
			</div>
		</div> -->
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
	position: fixed;
	z-index: 100;
	top: 40px;
	right: 40px;
	display: flex;
	flex-direction: column;

	&__container {
		background-color: transparent;
		box-shadow: 0px 0px 10px rgba(#3dd6d0, 0.5);
		border-radius: 25px;
		margin: 10px 0;
		overflow: hidden;
		&.type {
			display: flex;
			flex-direction: column;

			.choices {
				display: flex;
			}

			.choice {
				height: 50px;

				&:hover {
					background-color: #3dd6d0;
				}

				input[type="radio"] {
					display: none;
				}

				label {
					padding: 0 20px;
					height: 100%;
					display: grid;
					place-items: center;
				}
			}
		}
	}
}
</style>

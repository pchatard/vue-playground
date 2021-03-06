<template>
	<div class="cursor__selector">
		<div class="cursor__selector__container type">
			<span class="label">Type</span>
			<div class="choices">
				<div class="choice">
					<input
						type="radio"
						id="square"
						value="square"
						:checked="customCursor.type === 'square'"
						@change="onRadioChange"
					/>
					<label for="square">
						<img src="@/assets/images/cursor/square.svg" alt="Square Cursor" />
					</label>
				</div>
				<div class="choice">
					<input
						type="radio"
						id="circle"
						value="circle"
						:checked="customCursor.type === 'circle'"
						@change="onRadioChange"
					/>
					<label for="circle">
						<img src="@/assets/images/cursor/circle.svg" alt="Circle Cursor" />
					</label>
				</div>
				<div class="choice">
					<input
						type="radio"
						id="triangle"
						value="triangle"
						:checked="customCursor.type === 'triangle'"
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
		<div class="cursor__selector__container type">
			<span class="label">Delay</span>
			<div class="choices">
				<el-slider
					:value="customCursor.follower.delay"
					:min="0"
					:max="0.2"
					:step="0.02"
					:show-tooltip="false"
					@input="updateCustomCursorFollowDelay"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "CursorSelector",
	computed: {
		...mapGetters(["customCursor"]),
	},
	methods: {
		...mapActions(["updateCustomCursorFollowDelay", "updateCustomCursorType"]),
		onRadioChange(event) {
			this.updateCustomCursorType(event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.cursor__selector {
	position: fixed;
	z-index: 100;
	top: 4rem;
	right: 4rem;
	display: flex;
	flex-direction: column;

	&__container {
		margin: 1rem 0;

		&.type {
			display: flex;
			align-items: center;

			.label {
				margin-right: 2rem;
			}

			.choices {
				background-color: transparent;
				box-shadow: 1px 2px 10px rgba(#3dd6d0, 0.5);
				border-radius: 2.5rem;
				width: 100%;
				height: 5rem;
				display: flex;
				align-items: center;
			}

			.el-slider {
				margin: 0 2rem;

				width: 100%;
			}

			.choice {
				height: 5rem;

				&:hover {
					background-color: #3dd6d0;
				}

				input[type="radio"] {
					display: none;
				}

				label {
					padding: 0 2rem;
					height: 100%;
					display: grid;
					place-items: center;
				}
			}
		}

		&.delay {
			display: flex;
			flex-direction: column;
			padding: 1rem;
		}
	}
}
</style>

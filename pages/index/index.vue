<template>
	<view class="">
		<button type="default" @click="chooseImg">选择图片</button>
		<image @click="previewImage" :src="title" mode="" class="aaaaa"></image>
	</view>
</template>

<script>
	import {
		ref
	} from 'vue'
	import starMask from '/static/mask.png'
	export default {
		setup() {
			const title = ref()
			const width = 500
			const height = 500
			const canvas = document.createElement('canvas')
			canvas.width = width
			canvas.height = height
			const mainCtx = canvas.getContext('2d')
			mainCtx.fillStyle = '#fff'
			mainCtx.fillRect(0, 0, width, height)
			mainCtx.save()

			function drawStar() {
				const star = new Image()
				star.src = starMask
				star.onload = () => {
					mainCtx.drawImage(star, 0, 0, width, height)
					title.value = canvas.toDataURL('image/jpeg', .8)
				}
			}

			function chooseImg() {
				mainCtx.clearRect(0, 0, width, height)
				uni.chooseImage({
					success: ({
						tempFilePaths
					}) => {
						const img = new Image()
						const url = tempFilePaths[0]

						console.log(img)
						img.src = url
						img.onload = () => {
							console.log(img)
							mainCtx.drawImage(img, 0, 0, 500, 500)
							drawStar()
						}
						img.onerror = (e) => {
							console.log(img)
						}
					}
				})
			}
			function previewImage() {
				console.log(title)
				uni.previewImage({
					urls: [title.value]
				})
			}
			return {
				title,
				chooseImg,
				previewImage
			}
		}
	}
</script>

<style>
	.aaaaa {
		width: 500rpx;
		height: 500rpx;
	}
</style>

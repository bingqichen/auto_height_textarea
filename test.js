var txt = Vue.extend({
	template: `
			<div class="expandingArea">
				<textarea class="hidden" v-el:hid>{{content}}</textarea>
				<textarea class="input" placeholder="" v-model="content" @input="input" :style="{ height: hg + 'px' }"></textarea>
			</div>`,

	props: ['content'],
	data() {
		return {
			hg: ''
		}
	},
	methods:{
		input() {
			var x = this.$els.hid
			this.hg = x.scrollHeight + 15
		}
	}
})

var main = new Vue({
	el: '#main',
	data: {
		content: ''
	},
	components: {
		"vue-txt": txt
	}
})
/**
 * 自适应高度多行文本输入组件
 *
 * <vue-text :content></vue-text>
 *
 * content: 内容
 * msg: 提示信息
 *
 */
;(function (window){
    var textarea = Vue.extend({
        template: `
			<div class="textarea-wrap" :style="{ height: hg + 'px' }">
				<textarea class="textarea-hide" v-el:hid>{{content}}</textarea>
				<textarea class="textarea-show" placeholder="{{msg}}" v-model="content" @input="input" :style="{ height: hg + 'px' }"></textarea>
			</div>`,

        props: {
            content: {
                type: String,
                default: ''
            },
            msg: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                hg: ''
            }
        },
        methods:{
            input() {
                var x = this.$els.hid
                this.hg = x.scrollHeight + 4
            }
        }
    })

    window.components = window.components || {}
    window.components.textarea = textarea
})(window)
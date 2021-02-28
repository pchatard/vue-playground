import Vue from "vue";
import {
	PageHeader,
	Dialog,
	Form,
	FormItem,
	Input,
	Tag,
	Button,
	Progress,
	Loading,
	Notification,
	Slider,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(PageHeader);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Progress);
Vue.use(Slider);
Vue.use(Loading.directive);
Vue.prototype.$notify = Notification;

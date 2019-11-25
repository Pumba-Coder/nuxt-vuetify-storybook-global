// import '../assets/variables.scss'

import ScrollAction from '../ScrollAction'
import centered from '@storybook/addon-centered/vue'
import { storiesOf } from '@storybook/vue'

const scrollActionStory = storiesOf('Simple|Scroll Action', module)
scrollActionStory.addDecorator(centered)

scrollActionStory.add('As a standard', () => ({
  components: { ScrollAction },
  template: '<ScrollAction />'
}))

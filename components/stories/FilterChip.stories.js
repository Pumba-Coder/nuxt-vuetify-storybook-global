import { text, withKnobs } from '@storybook/addon-knobs'

import FilterChip from '../FilterChip.vue'
import centered from '@storybook/addon-centered/vue'
import { storiesOf } from '@storybook/vue'

// import 'vuetify/dist/vuetify.css'

const label = 'Example Chip'
const filterChipStory = storiesOf('Generic | Filter Chip', module)
filterChipStory.addDecorator(withKnobs)
filterChipStory.addDecorator(centered)

filterChipStory.add('As a standard', () => ({
  components: { FilterChip },
  props: {
    label: { type: String, default: text('Label', label) }
  },
  template: '<FilterChip :label="label" />'
}))

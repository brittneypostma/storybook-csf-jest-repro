<script>
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import Button from '$lib/Button.svelte'
</script>

<Meta title="Components/Button" component={Button} argTypes={{
  label: {
			description:
				'The text to display inside the button, in code this is a slot that can be anything inside of the button, not a prop.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Button' }
			}
		},
    class: {
        control: 'text'
    }
}} />

<Template let:args>
    <Button {...args}>
        {args.label}
    </Button>
</Template>

<Story name="Default" args={{ label: 'Button' }} />
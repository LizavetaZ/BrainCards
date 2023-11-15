import type { Meta, StoryObj } from '@storybook/react'
import { Settings } from '@/components/ui/icons/settings/Settings.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: Settings,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof Settings>

export default meta
type Story = StoryObj<typeof meta>

export const Settings2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}

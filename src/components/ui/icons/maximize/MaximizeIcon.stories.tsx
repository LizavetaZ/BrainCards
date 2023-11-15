import type { Meta, StoryObj } from '@storybook/react'
import { MaximizeIcon } from '@/components/ui/icons/maximize/MaximizeIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: MaximizeIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof MaximizeIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Maximize2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}

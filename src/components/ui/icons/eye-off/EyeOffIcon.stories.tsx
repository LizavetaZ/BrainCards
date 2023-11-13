import type { Meta, StoryObj } from '@storybook/react'
import { EyeOffIcon } from '@/components/ui/icons/eye-off/EyeOffIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: EyeOffIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof EyeOffIcon>

export default meta
type Story = StoryObj<typeof meta>

export const EyeOff2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}

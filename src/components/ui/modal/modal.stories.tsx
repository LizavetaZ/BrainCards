import { ComponentPropsWithoutRef, ReactNode, useState } from 'react'

import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import ModalWithButton from '@/components/ui/modal/modalWithButton/modalWithButton'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'
import * as Dialog from '@radix-ui/react-dialog'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  args: {
    children: (
      <>
        <ModalWithContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temper ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor.
        </ModalWithContent>
        <ModalWithButton titleButton={'New card'} />
      </>
    ),
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

type ModalDefaultArgs = {
  children: ReactNode
  className?: string
  title?: string
} & Omit<ComponentPropsWithoutRef<typeof Dialog.Root>, 'children'>

type DefaultModalStory = StoryObj<ModalDefaultArgs>

export const ModalDefault: DefaultModalStory = (args: ModalDefaultArgs) => {
  const [open, setOpen] = useState(false)

  const handleOpenChange = () => {
    setOpen(!open)
  }

  return (
    <>
      <Button
        as={'button'}
        onClick={handleOpenChange}
        style={{ width: '100px' }}
        variant={'primary'}
      >
        Open Modal
      </Button>
      <Modal {...args} onOpenChange={handleOpenChange} open={open} />
    </>
  )
}

ModalDefault.args = {
  children: (
    <>
      <ModalWithContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temper ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est labor.
      </ModalWithContent>
      <ModalWithButton titleButton={'New card'} />
    </>
  ),
  title: 'My Modal',
}

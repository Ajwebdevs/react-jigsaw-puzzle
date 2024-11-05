import type { Meta, StoryObj } from '@storybook/react'
import { JigsawPuzzle } from '../'
import '../jigsaw-puzzle.css'
import './jigsaw-puzzle.css'
const meta: Meta<typeof JigsawPuzzle> = {
  argTypes: {
    columns: {
      defaultValue: 4,
      description: 'The amount of columns the puzzle with have.',
      type: 'number'
    },
    hintCount: {
      control: { type: 'number' },
      defaultValue: 0,
      description: 'The number of hints used. Increase to reveal hints.',
      type: 'number'
    },
    imageSrc: {
      description: 'Source of the image. Can be any URL or relative path.',
      type: 'string'
    },
    onSolved: {
      action: 'solved',
      description: 'Called when the puzzle is solved.'
    },
    rows: {
      defaultValue: 3,
      description: 'The amount of rows the puzzle will have.',
      type: 'number'
    }
  },
  component: JigsawPuzzle,
  title: 'react-jigsaw-puzzle'
}

export default meta

type Story = StoryObj<typeof JigsawPuzzle>

export const Puzzle: Story = {
  args: {
    hintCount: 0,
    imageSrc: 'https://images.unsplash.com/photo-1595045051853-05ef47bdfdbe?3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
}

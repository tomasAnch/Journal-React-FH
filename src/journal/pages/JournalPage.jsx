import { useDispatch, useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal )

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  return (
    <JournalLayout>

      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sequi nesciunt eligendi ullam ut a, voluptate libero laborum adipisci asperiores magni laudantium iure deleniti aliquid numquam inventore nostrum similique molestiae!
      </Typography> */}

      {
        ( active
          ? <NoteView />
          : <NothingSelectedView />
        )
      }

      <IconButton
        onClick={ onClickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: .9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        disabled={ isSaving }
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
  
}


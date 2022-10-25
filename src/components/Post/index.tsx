import { ChangeEvent, FormEvent, useState } from 'react'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import { longDateFormat, distanceToNow } from '../../utils/dateFormat'
import styles from './post.module.css'

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostProps {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(['Post muito bacana, hein?!'])
  const [newCommentText, setNewCommentText] = useState('')
  const publishedDateFormatted = longDateFormat(publishedAt)
  const publishedDateRelativeToNow = distanceToNow(publishedAt)

  const handleCrateNewComment = (event: FormEvent) => {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  const handleNewCommentInvalid = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const handleDeleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form
        onSubmit={handleCrateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  )
}
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const longDateFormat = (date: Date) => {
  return format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
}

export const distanceToNow = (date: Date) => {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
}
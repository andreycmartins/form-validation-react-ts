import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

const WriteNowValidationSchema = yup.object({
    destinationName: yup.string().required('Preencha o nome completo'),
    destinationAdress: yup.string().email('Preencha um email válido').required('Preencha o email'),
    dueDate: yup.string().required('Preencha uma data'),
    subject: yup.string().required('Preencha o assunto'),
    body: yup.string().required('Preencha o conteúdo'),

})

export const WriteNowResolver = yupResolver(WriteNowValidationSchema)